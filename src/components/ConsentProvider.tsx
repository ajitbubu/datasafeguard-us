"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import { CrossDomainConsentAPI } from "@/lib/consent/CrossDomainConsentAPI";
import type { ConsentPreferences, ConsentCheckResult } from "@/lib/consent/types";
import { detectJurisdiction, getJurisdictionConfig } from "@/lib/consent/jurisdictions";
import type { Jurisdiction } from "@/lib/consent/jurisdictions";

type ConsentContextType = {
  consent: ConsentPreferences;
  setConsent: (c: Partial<ConsentPreferences>) => Promise<void>;
  revokeConsent: () => Promise<void>;
  hasDecided: boolean;
  loading: boolean;
  jurisdiction: Jurisdiction;
  jurisdictionConfig: ReturnType<typeof getJurisdictionConfig>;
  hasConsentFor: (category: keyof ConsentPreferences) => boolean;
};

const ConsentContext = createContext<ConsentContextType | null>(null);

const DEFAULT_CONSENT: ConsentPreferences = {
  necessary: true,
  preferences: false,
  analytics: false,
  marketing: false
};

let consentAPIInstance: CrossDomainConsentAPI | null = null;

export function ConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsentState] = useState<ConsentPreferences>(DEFAULT_CONSENT);
  const [hasDecided, setHasDecided] = useState(false);
  const [loading, setLoading] = useState(true);
  const [jurisdiction, setJurisdiction] = useState<Jurisdiction>('DEFAULT');
  const jurisdictionConfig = getJurisdictionConfig(jurisdiction);

  // Listen for cookie settings button click
  useEffect(() => {
    const handleOpenSettings = async () => {
      console.log('[ConsentProvider] 🍪 Received open-cookie-settings event!');
      
      // Fetch latest consent from localStorage (primary storage)
      try {
        const localConsent = localStorage.getItem('ds_consent_v2');
        if (localConsent) {
          const parsed = JSON.parse(localConsent);
          const preferences = parsed.preferences || parsed;
          console.log('[ConsentProvider] ✅ Loaded latest consent from localStorage:', preferences);
          setConsentState(preferences);
        } else {
          console.log('[ConsentProvider] No localStorage consent found');
        }
      } catch (error) {
        console.error('[ConsentProvider] Error loading from localStorage:', error);
      }
      
      // Also try API if enabled
      if (process.env.NEXT_PUBLIC_ENABLE_CONSENT_API === 'true' && consentAPIInstance) {
        try {
          console.log('[ConsentProvider] Fetching latest consent from API...');
          const result = await consentAPIInstance.checkConsent();
          
          if (result.hasConsent && result.preferences) {
            console.log('[ConsentProvider] ✅ Loaded consent from API:', result.preferences);
            setConsentState(result.preferences);
          }
        } catch (error) {
          console.error('[ConsentProvider] Error fetching consent from API:', error);
        }
      }
      
      // Show the banner by setting hasDecided to false
      console.log('[ConsentProvider] Setting hasDecided to FALSE to show banner');
      setHasDecided(false);
    };

    window.addEventListener('open-cookie-settings', handleOpenSettings);
    
    return () => {
      window.removeEventListener('open-cookie-settings', handleOpenSettings);
    };
  }, []);

  // Initialize CrossDomainConsentAPI
  useEffect(() => {
    const initConsent = async () => {
      try {
        // Detect jurisdiction first
        const detectedJurisdiction = detectJurisdiction();
        setJurisdiction(detectedJurisdiction);

        // Check if user clicked cookie settings button to force banner display
        const forceShow = sessionStorage.getItem('force_show_consent_banner');
        console.log('[ConsentProvider] Checking force flag:', forceShow);
        
        if (forceShow === 'true') {
          console.log('[ConsentProvider] ✅ Force show banner flag detected!');
          sessionStorage.removeItem('force_show_consent_banner');
          console.log('[ConsentProvider] Force flag removed from sessionStorage');
          
          // Try to load previous consent from localStorage to pre-populate
          let previousConsent = null;
          try {
            const stored = localStorage.getItem('ds_consent_v2_backup');
            console.log('[ConsentProvider] Checking for backup consent:', stored ? 'Found' : 'Not found');
            
            if (stored) {
              const parsed = JSON.parse(stored);
              previousConsent = parsed.preferences || parsed;
              console.log('[ConsentProvider] ✅ Loaded previous consent for pre-selection:', previousConsent);
            } else {
              console.log('[ConsentProvider] No backup found, will use defaults');
            }
          } catch (error) {
            console.error('[ConsentProvider] Error loading previous consent:', error);
          }
          
          // Set consent state with previous preferences or defaults
          const consentToShow = previousConsent || jurisdictionConfig.defaultConsent;
          console.log('[ConsentProvider] Setting consent state to:', consentToShow);
          setConsentState(consentToShow);
          
          console.log('[ConsentProvider] Setting hasDecided to FALSE');
          setHasDecided(false); // Force banner to show
          
          console.log('[ConsentProvider] Setting loading to FALSE');
          setLoading(false);
          
          console.log('[ConsentProvider] ✅✅✅ Banner should now be visible! hasDecided=false, loading=false');
          return;
        } else {
          console.log('[ConsentProvider] No force flag detected, proceeding with normal flow');
        }

        // First check localStorage for quick load (primary storage)
        try {
          const localConsent = localStorage.getItem('ds_consent_v2');
          if (localConsent) {
            const parsed = JSON.parse(localConsent);
            // Extract preferences from the stored consent data
            const preferences = parsed.preferences || parsed;
            setConsentState(preferences);
            setHasDecided(true);
            setLoading(false);
            console.log('[ConsentProvider] Consent loaded from localStorage');
            return; // Exit early - localStorage is our source of truth
          }
        } catch (error) {
          // Silently continue if localStorage fails
        }

        // No localStorage consent - check if API is enabled
        if (process.env.NEXT_PUBLIC_ENABLE_CONSENT_API === 'true') {
          // Initialize API only if explicitly enabled
          if (!consentAPIInstance) {
            consentAPIInstance = new CrossDomainConsentAPI({
              apiEndpoint: process.env.NEXT_PUBLIC_CONSENT_API_URL || 'http://localhost:3001/api/consent',
              organizationId: process.env.NEXT_PUBLIC_ORG_ID || 'datasafeguard',
              policyVersion: process.env.NEXT_PUBLIC_POLICY_VERSION || '1.0',
              domains: (process.env.NEXT_PUBLIC_LINKED_DOMAINS || '').split(',').filter(Boolean),
              jurisdiction: detectedJurisdiction === 'DEFAULT' ? undefined : detectedJurisdiction
            });
          }

          // Check for existing consent from API
          const result: ConsentCheckResult = await consentAPIInstance.checkConsent();
          
          if (result.hasConsent && result.preferences) {
            setConsentState(result.preferences);
            setHasDecided(true);
            console.log(`[ConsentProvider] Consent loaded from API: ${result.source}`);
          } else {
            // No consent found - use jurisdiction defaults
            const defaults = jurisdictionConfig.defaultConsent;
            setConsentState(defaults);
            setHasDecided(false);
          }
        } else {
          // API disabled - use jurisdiction defaults
          const defaults = jurisdictionConfig.defaultConsent;
          setConsentState(defaults);
          setHasDecided(false);
        }
        
      } catch (error) {
        // Silently handle errors - localStorage is working
        setConsentState(DEFAULT_CONSENT);
        setHasDecided(false);
      } finally {
        setLoading(false);
      }
    };

    initConsent();

    // Listen for consent events from other tabs or cross-domain
    const handleConsentSaved = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.preferences) {
        setConsentState(customEvent.detail.preferences);
        setHasDecided(true);
      }
    };

    const handleConsentRevoked = () => {
      setConsentState(DEFAULT_CONSENT);
      setHasDecided(false);
    };

    const handleConsentUpdated = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail?.preferences) {
        setConsentState(customEvent.detail.preferences);
      }
    };

    window.addEventListener('consent-saved', handleConsentSaved);
    window.addEventListener('consent-revoked', handleConsentRevoked);
    window.addEventListener('consent-updated', handleConsentUpdated);

    return () => {
      window.removeEventListener('consent-saved', handleConsentSaved);
      window.removeEventListener('consent-revoked', handleConsentRevoked);
      window.removeEventListener('consent-updated', handleConsentUpdated);
      
      // Cleanup API instance
      if (consentAPIInstance) {
        consentAPIInstance.destroy();
      }
    };
  }, [jurisdictionConfig.defaultConsent]);

  const setConsent = useCallback(async (updates: Partial<ConsentPreferences>) => {
    const newConsent = { ...consent, ...updates };
    setConsentState(newConsent);
    setHasDecided(true); // Always mark as decided when user makes a choice

    // Save to localStorage as fallback (use same format as CrossDomainConsentAPI)
    try {
      const consentData = {
        preferences: newConsent,
        timestamp: Date.now(),
        domain: window.location.hostname,
        organizationId: process.env.NEXT_PUBLIC_ORG_ID || 'datasafeguard',
        version: process.env.NEXT_PUBLIC_POLICY_VERSION || '1.0'
      };
      localStorage.setItem('ds_consent_v2', JSON.stringify(consentData));
      console.log('[ConsentProvider] Consent saved to localStorage');
    } catch (error) {
      console.warn('[ConsentProvider] Failed to save to localStorage:', error);
    }

    // Also try to save via API if available and enabled
    if (consentAPIInstance && process.env.NEXT_PUBLIC_ENABLE_CONSENT_API === 'true') {
      try {
        const result = await consentAPIInstance.saveConsent(newConsent);
        if (result.success) {
          console.log('[ConsentProvider] Consent saved to API successfully');
          
          // Log domains where consent applies
          if (result.appliesTo) {
            console.log('[ConsentProvider] Consent applies to:', result.appliesTo);
          }
        }
        // Silently fail - localStorage is working
      } catch (error) {
        // Silently fail - localStorage is working
      }
    }
  }, [consent]);

  const revokeConsent = useCallback(async () => {
    if (consentAPIInstance) {
      const result = await consentAPIInstance.revokeConsent();
      if (result.success) {
        setConsentState(DEFAULT_CONSENT);
        setHasDecided(false);
        console.log('[ConsentProvider] Consent revoked successfully');
      } else {
        console.error('[ConsentProvider] Failed to revoke consent:', result.error);
      }
    }
  }, []);

  const hasConsentFor = useCallback((category: keyof ConsentPreferences): boolean => {
    return consent[category] === true;
  }, [consent]);

  const value: ConsentContextType = {
    consent,
    setConsent,
    revokeConsent,
    hasDecided,
    loading,
    jurisdiction,
    jurisdictionConfig,
    hasConsentFor
  };

  return (
    <ConsentContext.Provider value={value}>
      {children}
    </ConsentContext.Provider>
  );
}

export const useConsent = () => {
  const context = useContext(ConsentContext);
  if (!context) {
    throw new Error("useConsent must be used inside ConsentProvider");
  }
  return context;
};

// Export the API instance for use in other components
export const getConsentAPI = () => consentAPIInstance;
