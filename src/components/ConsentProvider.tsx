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

  // Initialize CrossDomainConsentAPI
  useEffect(() => {
    const initConsent = async () => {
      try {
        // Detect jurisdiction
        const detectedJurisdiction = detectJurisdiction();
        setJurisdiction(detectedJurisdiction);

        // Initialize API
        if (!consentAPIInstance) {
          consentAPIInstance = new CrossDomainConsentAPI({
            apiEndpoint: process.env.NEXT_PUBLIC_CONSENT_API_URL || 'http://localhost:3001/api/consent',
            organizationId: process.env.NEXT_PUBLIC_ORG_ID || 'datasafeguard',
            policyVersion: process.env.NEXT_PUBLIC_POLICY_VERSION || '1.0',
            domains: (process.env.NEXT_PUBLIC_LINKED_DOMAINS || '').split(',').filter(Boolean),
            jurisdiction: detectedJurisdiction === 'DEFAULT' ? undefined : detectedJurisdiction
          });
        }

        // Check for existing consent
        const result: ConsentCheckResult = await consentAPIInstance.checkConsent();
        
        if (result.hasConsent && result.preferences) {
          setConsentState(result.preferences);
          setHasDecided(true);
          
          // Log where consent came from
          console.log(`[ConsentProvider] Consent loaded from: ${result.source}`);
        } else {
          // No consent found - use jurisdiction defaults
          const defaults = jurisdictionConfig.defaultConsent;
          setConsentState(defaults);
          setHasDecided(false);
        }
        
      } catch (error) {
        console.error('[ConsentProvider] Error initializing consent:', error);
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

    // Save to localStorage as fallback
    try {
      localStorage.setItem('ds_consent', JSON.stringify(newConsent));
      console.log('[ConsentProvider] Consent saved to localStorage');
    } catch (error) {
      console.warn('[ConsentProvider] Failed to save to localStorage:', error);
    }

    // Also try to save via API if available
    if (consentAPIInstance) {
      try {
        const result = await consentAPIInstance.saveConsent(newConsent);
        if (result.success) {
          console.log('[ConsentProvider] Consent saved to API successfully');
          
          // Log domains where consent applies
          if (result.appliesTo) {
            console.log('[ConsentProvider] Consent applies to:', result.appliesTo);
          }
        } else {
          // Use warn instead of error since localStorage fallback is working
          console.warn('[ConsentProvider] API save failed (using localStorage):', result.error);
        }
      } catch (error) {
        console.warn('[ConsentProvider] API unavailable (using localStorage):', error);
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
