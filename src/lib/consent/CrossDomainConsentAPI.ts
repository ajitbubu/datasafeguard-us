/**
 * Cross-Domain Consent Synchronization API
 * Handles consent sharing across multiple domains with identical cookie policies
 */

import type {
  ConsentPreferences,
  ConsentData,
  ConsentCheckResult,
  ConsentAPIConfig,
  SaveConsentResponse,
  CrossDomainConsentResponse,
  ConsentCategory,
  ConsentEvent
} from './types';

export class CrossDomainConsentAPI {
  private config: ConsentAPIConfig;
  private storageKey = 'ds_consent_v2';
  private syncIntervalId: NodeJS.Timeout | null = null;

  constructor(config: ConsentAPIConfig) {
    this.config = {
      syncInterval: 300000, // 5 minutes default
      ...config
    };
    
    this.init();
  }

  private init() {
    // Listen for storage events (cross-tab sync on same domain)
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', (e) => {
        if (e.key === this.storageKey) {
          this.handleStorageChange(e);
        }
      });

      // Set up periodic sync if interval is provided
      if (this.config.syncInterval && this.config.syncInterval > 0) {
        this.syncIntervalId = setInterval(
          () => this.syncConsent(),
          this.config.syncInterval
        );
      }
    }
  }

  /**
   * Check if consent exists and is valid
   */
  async checkConsent(): Promise<ConsentCheckResult> {
    try {
      // First check local storage
      const localConsent = this.getLocalConsent();
      
      if (localConsent && this.isConsentValid(localConsent)) {
        return {
          hasConsent: true,
          showBanner: false,
          preferences: localConsent.preferences,
          source: 'local'
        };
      }

      // If no valid local consent, check cross-domain
      const crossDomainConsent = await this.fetchCrossDomainConsent();
      
      if (crossDomainConsent && crossDomainConsent.hasConsent) {
        // Save cross-domain consent locally
        this.saveLocalConsent({
          preferences: crossDomainConsent.preferences,
          timestamp: crossDomainConsent.timestamp,
          domain: crossDomainConsent.domain,
          organizationId: this.config.organizationId,
          version: crossDomainConsent.version
        });
        
        return {
          hasConsent: true,
          showBanner: false,
          preferences: crossDomainConsent.preferences,
          source: 'cross-domain'
        };
      }

      // No consent found anywhere
      return {
        hasConsent: false,
        showBanner: true,
        preferences: null,
        source: null
      };
      
    } catch (error) {
      console.error('[ConsentAPI] Error checking consent:', error);
      // On error, show banner to be safe
      return {
        hasConsent: false,
        showBanner: true,
        preferences: null,
        source: null
      };
    }
  }

  /**
   * Save consent preferences and sync across domains
   */
  async saveConsent(preferences: ConsentPreferences): Promise<SaveConsentResponse> {
    try {
      const consentData: ConsentData = {
        preferences,
        timestamp: Date.now(),
        domain: typeof window !== 'undefined' ? window.location.hostname : '',
        organizationId: this.config.organizationId,
        version: this.config.policyVersion
      };

      // Save locally first
      this.saveLocalConsent(consentData);

      // Sync to backend for cross-domain access
      const response = await fetch(`${this.config.apiEndpoint}/save`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(consentData)
      });

      if (!response.ok) {
        throw new Error(`Failed to save consent: ${response.statusText}`);
      }

      const result = await response.json();
      
      // Trigger custom event for application to handle
      this.triggerConsentEvent('consent-saved', preferences);
      
      return {
        success: true,
        message: result.message,
        consentId: result.consentId,
        appliesTo: result.appliesTo
      };
      
    } catch (error) {
      console.error('[ConsentAPI] Error saving consent:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Revoke consent and propagate to all domains
   */
  async revokeConsent(): Promise<SaveConsentResponse> {
    try {
      // Clear local storage
      if (typeof window !== 'undefined') {
        localStorage.removeItem(this.storageKey);
      }

      // Notify backend to revoke across all domains
      const response = await fetch(`${this.config.apiEndpoint}/revoke`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          domain: typeof window !== 'undefined' ? window.location.hostname : '',
          organizationId: this.config.organizationId,
          timestamp: Date.now()
        })
      });

      if (!response.ok) {
        throw new Error(`Failed to revoke consent: ${response.statusText}`);
      }

      const result = await response.json();
      
      // Trigger custom event
      this.triggerConsentEvent('consent-revoked', {
        necessary: true,
        preferences: false,
        analytics: false,
        marketing: false
      });
      
      return {
        success: true,
        message: result.message
      };
      
    } catch (error) {
      console.error('[ConsentAPI] Error revoking consent:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      };
    }
  }

  /**
   * Fetch consent from cross-domain API
   */
  private async fetchCrossDomainConsent(): Promise<CrossDomainConsentResponse | null> {
    try {
      const response = await fetch(`${this.config.apiEndpoint}/check`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include' // Important for cross-domain cookies
      });

      if (!response.ok) {
        if (response.status === 404) {
          return null; // No consent found
        }
        throw new Error(`Failed to fetch consent: ${response.statusText}`);
      }

      const data = await response.json();
      
      if (data && data.preferences) {
        return {
          hasConsent: true,
          preferences: data.preferences,
          timestamp: data.timestamp,
          domain: data.domain,
          version: data.version
        };
      }

      return null;
      
    } catch (error) {
      console.error('[ConsentAPI] Error fetching cross-domain consent:', error);
      return null;
    }
  }

  /**
   * Sync consent periodically
   */
  private async syncConsent() {
    const localConsent = this.getLocalConsent();
    const crossDomainConsent = await this.fetchCrossDomainConsent();

    // If cross-domain consent is newer, update local
    if (crossDomainConsent && 
        (!localConsent || crossDomainConsent.timestamp > localConsent.timestamp)) {
      this.saveLocalConsent({
        preferences: crossDomainConsent.preferences,
        timestamp: crossDomainConsent.timestamp,
        domain: crossDomainConsent.domain,
        organizationId: this.config.organizationId,
        version: crossDomainConsent.version
      });
      this.triggerConsentEvent('consent-updated', crossDomainConsent.preferences);
    }
  }

  /**
   * Get consent from local storage
   */
  private getLocalConsent(): ConsentData | null {
    if (typeof window === 'undefined') return null;
    
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : null;
    } catch (error) {
      console.error('[ConsentAPI] Error reading local consent:', error);
      return null;
    }
  }

  /**
   * Save consent to local storage
   */
  private saveLocalConsent(consentData: ConsentData) {
    if (typeof window === 'undefined') return;
    
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(consentData));
    } catch (error) {
      console.error('[ConsentAPI] Error saving local consent:', error);
    }
  }

  /**
   * Check if consent is still valid
   */
  private isConsentValid(consent: ConsentData): boolean {
    if (!consent || !consent.timestamp) return false;
    
    // Check if consent is older than 12 months (GDPR requirement)
    const maxAge = 365 * 24 * 60 * 60 * 1000; // 1 year in milliseconds
    const age = Date.now() - consent.timestamp;
    
    return age < maxAge;
  }

  /**
   * Handle storage change events
   */
  private handleStorageChange(event: StorageEvent) {
    if (event.newValue === null) {
      // Consent was removed
      this.triggerConsentEvent('consent-revoked', {
        necessary: true,
        preferences: false,
        analytics: false,
        marketing: false
      });
    } else {
      // Consent was updated
      try {
        const newConsent = JSON.parse(event.newValue) as ConsentData;
        this.triggerConsentEvent('consent-updated', newConsent.preferences);
      } catch (error) {
        console.error('[ConsentAPI] Error parsing storage change:', error);
      }
    }
  }

  /**
   * Trigger custom events for application to handle
   */
  private triggerConsentEvent(
    eventName: ConsentEvent['type'],
    preferences: ConsentPreferences
  ) {
    if (typeof window === 'undefined') return;
    
    const event = new CustomEvent(eventName, {
      detail: {
        type: eventName,
        preferences,
        timestamp: Date.now()
      },
      bubbles: true
    });
    window.dispatchEvent(event);
  }

  /**
   * Get current consent preferences
   */
  getPreferences(): ConsentPreferences | null {
    const consent = this.getLocalConsent();
    return consent ? consent.preferences : null;
  }

  /**
   * Check if specific category is consented
   */
  hasConsentFor(category: ConsentCategory): boolean {
    const preferences = this.getPreferences();
    return preferences ? preferences[category] === true : false;
  }

  /**
   * Cleanup on unmount
   */
  destroy() {
    if (this.syncIntervalId) {
      clearInterval(this.syncIntervalId);
      this.syncIntervalId = null;
    }
  }
}
