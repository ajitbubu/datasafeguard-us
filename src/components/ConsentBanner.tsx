"use client";

import { useConsent } from "./ConsentProvider";
import { useState } from "react";
import { CATEGORY_DESCRIPTIONS } from "@/lib/consent/jurisdictions";

export default function ConsentBanner() {
  const { consent, setConsent, hasDecided, jurisdiction, jurisdictionConfig } = useConsent();
  const [showDetails, setShowDetails] = useState(false);

  if (hasDecided) return null;

  const handleAcceptAll = async () => {
    await setConsent({
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true
    });
  };

  const handleRejectAll = async () => {
    await setConsent({
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false
    });
  };

  const handleSavePreferences = async () => {
    await setConsent(consent);
  };

  const toggleCategory = (category: 'preferences' | 'analytics' | 'marketing') => {
    setConsent({ [category]: !consent[category] });
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
                checked={consent.preferences}
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
                checked={consent.analytics}
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
                checked={consent.marketing}
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
        <div className="flex flex-wrap gap-3">
          <button
            onClick={handleAcceptAll}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            {jurisdictionConfig.consentButtonText.acceptAll}
          </button>

          <button
            onClick={handleSavePreferences}
            className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
          >
            {jurisdictionConfig.consentButtonText.savePreferences}
          </button>

          <button
            onClick={handleRejectAll}
            className="px-6 py-2.5 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-colors"
          >
            {jurisdictionConfig.consentButtonText.rejectAll}
          </button>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-4 py-2.5 text-blue-600 dark:text-blue-400 font-medium hover:underline"
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
