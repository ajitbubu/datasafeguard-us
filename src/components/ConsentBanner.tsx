"use client";

import { useConsent } from "./ConsentProvider";
import { useState, useEffect } from "react";
import { CATEGORY_DESCRIPTIONS } from "@/lib/consent/jurisdictions";
import type { ConsentPreferences } from "@/lib/consent/types";

export default function ConsentBanner() {
  const { consent, setConsent, hasDecided, jurisdiction, jurisdictionConfig } = useConsent();
  const [showDetails, setShowDetails] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [initialized, setInitialized] = useState(false);
  
  // Local state for checkbox selections (doesn't save until user clicks a button)
  const [localPreferences, setLocalPreferences] = useState<ConsentPreferences>({
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false
  });

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    console.log('[ConsentBanner] Component mounted');
    setMounted(true);
  }, []);

  // Reset initialized flag when banner closes
  useEffect(() => {
    if (hasDecided && initialized) {
      console.log('[ConsentBanner] Banner closed - resetting initialized flag');
      setInitialized(false);
    }
  }, [hasDecided, initialized]);

  // Load preferences from database when banner opens
  useEffect(() => {
    if (mounted && !hasDecided && !initialized) {
      console.log('[ConsentBanner] Banner opened - loading preferences from database');
      
      const loadPreferences = async () => {
        try {
          // First try localStorage (primary storage)
          const localConsent = localStorage.getItem('ds_consent_v2');
          if (localConsent) {
            const parsed = JSON.parse(localConsent);
            const preferences = parsed.preferences || parsed;
            console.log('[ConsentBanner] ✅ Loaded preferences from localStorage:', preferences);
            setLocalPreferences(preferences);
            setInitialized(true);
            return;
          }

          // If API is enabled, try loading from API
          if (process.env.NEXT_PUBLIC_ENABLE_CONSENT_API === 'true') {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_CONSENT_API_URL || 'http://localhost:3001/api/consent'}?organizationId=${process.env.NEXT_PUBLIC_ORG_ID || 'datasafeguard'}`,
              { credentials: 'include' }
            );
            
            if (response.ok) {
              const data = await response.json();
              if (data.hasConsent && data.preferences) {
                console.log('[ConsentBanner] ✅ Loaded preferences from API:', data.preferences);
                setLocalPreferences(data.preferences);
                setInitialized(true);
                return;
              }
            }
          }

          // No stored preferences found - use current consent state from provider
          console.log('[ConsentBanner] No stored preferences found, using current consent:', consent);
          setLocalPreferences(consent);
          setInitialized(true);
        } catch (error) {
          console.error('[ConsentBanner] Error loading preferences:', error);
          // Fallback to current consent state
          setLocalPreferences(consent);
          setInitialized(true);
        }
      };

      loadPreferences();
    }
  }, [mounted, hasDecided, initialized, consent]);

  // Log render decision
  useEffect(() => {
    console.log('[ConsentBanner] Render check - mounted:', mounted, 'hasDecided:', hasDecided);
    if (!mounted) {
      console.log('[ConsentBanner] ❌ Not rendering: not mounted yet');
    } else if (hasDecided) {
      console.log('[ConsentBanner] ❌ Not rendering: hasDecided is true');
    } else {
      console.log('[ConsentBanner] ✅ RENDERING BANNER!');
    }
  }, [mounted, hasDecided]);

  if (!mounted || hasDecided) return null;

  const handleAcceptAll = async () => {
    const allAccepted = {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true
    };
    
    // Show details to display the checkboxes
    setShowDetails(true);
    
    // Update local state immediately to show checkboxes
    setLocalPreferences(allAccepted);
    
    // Wait a moment to show the updated checkboxes
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Save to database
    await setConsent(allAccepted);
    
    console.log('[ConsentBanner] ✅ Accept All - saved to DB and updated checkboxes');
  };

  const handleRejectAll = async () => {
    const allRejected = {
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false
    };
    
    // Show details to display the checkboxes
    setShowDetails(true);
    
    // Update local state immediately to show checkboxes
    setLocalPreferences(allRejected);
    
    // Wait a moment to show the updated checkboxes
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Save to database
    await setConsent(allRejected);
    
    console.log('[ConsentBanner] ✅ Reject All - saved to DB and updated checkboxes');
  };

  const handleSavePreferences = async () => {
    // Save the local preferences (from checkboxes) to database
    await setConsent(localPreferences);
    
    console.log('[ConsentBanner] ✅ Save Preferences - saved to DB:', localPreferences);
  };

  const toggleCategory = (category: 'preferences' | 'analytics' | 'marketing') => {
    // Only update local state, don't save yet
    setLocalPreferences(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const linkedDomains = (process.env.NEXT_PUBLIC_LINKED_DOMAINS || '').split(',').filter(Boolean);

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[9999] bg-white dark:bg-gray-900 shadow-2xl border-t border-gray-200 dark:border-gray-800"
      style={{
        animation: "slideUp 0.3s ease-out"
      }}
    >
      <div className="max-w-7xl mx-auto p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Cookie Preferences
              </h3>
              {jurisdiction !== 'DEFAULT' && (
                <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded">
                  {jurisdiction}
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {jurisdictionConfig.bannerText}
            </p>

            {linkedDomains.length > 0 && (
              <p className="text-xs text-gray-500 dark:text-gray-500 italic">
                ✓ Your consent will be synchronized across: <strong>{linkedDomains.join(', ')}</strong>
              </p>
            )}
          </div>
        </div>

        {/* Consent Categories - Show if details expanded */}
        {showDetails && (
          <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
            {/* Necessary - Always enabled */}
            <div className="flex items-start gap-3 opacity-75">
              <input
                type="checkbox"
                checked={true}
                disabled
                className="mt-1 w-5 h-5 rounded border-gray-300"
              />
              <div className="flex-1">
                <label className="font-medium text-sm text-gray-900 dark:text-white">
                  {CATEGORY_DESCRIPTIONS.necessary.title}
                </label>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {CATEGORY_DESCRIPTIONS.necessary.description}
                </p>
                {jurisdictionConfig.showPurposeDescription && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Examples: {CATEGORY_DESCRIPTIONS.necessary.examples}
                  </p>
                )}
              </div>
            </div>

            {/* Preferences */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={localPreferences.preferences}
                onChange={() => toggleCategory('preferences')}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <label className="font-medium text-sm text-gray-900 dark:text-white cursor-pointer">
                  {CATEGORY_DESCRIPTIONS.preferences.title}
                </label>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {CATEGORY_DESCRIPTIONS.preferences.description}
                </p>
                {jurisdictionConfig.showPurposeDescription && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Examples: {CATEGORY_DESCRIPTIONS.preferences.examples}
                  </p>
                )}
              </div>
            </div>

            {/* Analytics */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={localPreferences.analytics}
                onChange={() => toggleCategory('analytics')}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <label className="font-medium text-sm text-gray-900 dark:text-white cursor-pointer">
                  {CATEGORY_DESCRIPTIONS.analytics.title}
                </label>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {CATEGORY_DESCRIPTIONS.analytics.description}
                </p>
                {jurisdictionConfig.showPurposeDescription && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Examples: {CATEGORY_DESCRIPTIONS.analytics.examples}
                  </p>
                )}
              </div>
            </div>

            {/* Marketing */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={localPreferences.marketing}
                onChange={() => toggleCategory('marketing')}
                className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <div className="flex-1">
                <label className="font-medium text-sm text-gray-900 dark:text-white cursor-pointer">
                  {CATEGORY_DESCRIPTIONS.marketing.title}
                </label>
                <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                  {CATEGORY_DESCRIPTIONS.marketing.description}
                </p>
                {jurisdictionConfig.showPurposeDescription && (
                  <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                    Examples: {CATEGORY_DESCRIPTIONS.marketing.examples}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3">
          {/* Primary CTA - Accept All */}
          <button
            onClick={handleAcceptAll}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-sm order-1"
          >
            {jurisdictionConfig.consentButtonText.acceptAll}
          </button>

          {/* Secondary Actions */}
          <button
            onClick={handleRejectAll}
            className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors order-2"
          >
            {jurisdictionConfig.consentButtonText.rejectAll}
          </button>

          <button
            onClick={handleSavePreferences}
            className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors order-3"
          >
            {jurisdictionConfig.consentButtonText.savePreferences}
          </button>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-4 py-2.5 text-blue-600 dark:text-blue-400 font-medium hover:underline order-4"
          >
            {showDetails ? 'Hide Details' : 'Show Details'}
          </button>
        </div>

        {/* GPC Indicator for CCPA */}
        {jurisdiction === 'CCPA' && (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl && (
          <div className="mt-3 p-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded text-xs text-green-700 dark:text-green-400">
            ✓ Global Privacy Control (GPC) signal detected and honored
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            transform: translateY(100%);
          }
          to {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
