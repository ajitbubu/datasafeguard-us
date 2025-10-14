/**
 * Jurisdiction-specific configurations for GDPR, CCPA, and DPDP
 */

export type Jurisdiction = 'GDPR' | 'CCPA' | 'DPDP' | 'DEFAULT';

export interface JurisdictionConfig {
  name: string;
  requireExplicitConsent: boolean;
  defaultConsent: {
    necessary: boolean;
    preferences: boolean;
    analytics: boolean;
    marketing: boolean;
  };
  showPurposeDescription: boolean;
  supportGPC: boolean; // Global Privacy Control
  consentButtonText: {
    acceptAll: string;
    rejectAll: string;
    savePreferences: string;
  };
  bannerText: string;
}

export const JURISDICTION_CONFIGS: Record<Jurisdiction, JurisdictionConfig> = {
  GDPR: {
    name: 'GDPR (EU)',
    requireExplicitConsent: true,
    defaultConsent: {
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false
    },
    showPurposeDescription: true,
    supportGPC: false,
    consentButtonText: {
      acceptAll: 'Accept All',
      rejectAll: 'Reject All',
      savePreferences: 'Save My Preferences'
    },
    bannerText: 'We use cookies and similar technologies to enhance your experience, analyze traffic, and personalize content. By clicking "Accept All", you consent to our use of cookies.'
  },
  CCPA: {
    name: 'CCPA/CPRA (California)',
    requireExplicitConsent: false,
    defaultConsent: {
      necessary: true,
      preferences: true,
      analytics: true,
      marketing: true
    },
    showPurposeDescription: true,
    supportGPC: true,
    consentButtonText: {
      acceptAll: 'Allow All',
      rejectAll: 'Do Not Sell or Share My Personal Information',
      savePreferences: 'Manage Preferences'
    },
    bannerText: 'We use cookies and may share your information with third parties. You have the right to opt-out of the sale or sharing of your personal information.'
  },
  DPDP: {
    name: 'DPDP Act (India)',
    requireExplicitConsent: true,
    defaultConsent: {
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false
    },
    showPurposeDescription: true,
    supportGPC: false,
    consentButtonText: {
      acceptAll: 'Give Consent',
      rejectAll: 'Deny Consent',
      savePreferences: 'Manage My Consent'
    },
    bannerText: 'We collect and process your personal data with your consent. You can review and manage your consent preferences at any time.'
  },
  DEFAULT: {
    name: 'Default',
    requireExplicitConsent: true,
    defaultConsent: {
      necessary: true,
      preferences: false,
      analytics: false,
      marketing: false
    },
    showPurposeDescription: false,
    supportGPC: false,
    consentButtonText: {
      acceptAll: 'Accept All',
      rejectAll: 'Reject All',
      savePreferences: 'Save Preferences'
    },
    bannerText: 'We use cookies to improve your experience. Choose your cookie preferences below.'
  }
};

/**
 * Detect jurisdiction based on user location
 * In production, use geolocation API or IP-based detection
 */
export function detectJurisdiction(): Jurisdiction {
  if (typeof window === 'undefined') return 'DEFAULT';

  // Check for GPC signal (CCPA)
  if ((navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl) {
    return 'CCPA';
  }

  // In production, use actual geolocation
  // For now, return DEFAULT
  // You can integrate with services like MaxMind, IP-API, etc.
  
  return 'DEFAULT';
}

/**
 * Get jurisdiction configuration
 */
export function getJurisdictionConfig(jurisdiction?: Jurisdiction): JurisdictionConfig {
  const detected = jurisdiction || detectJurisdiction();
  return JURISDICTION_CONFIGS[detected];
}

/**
 * Category descriptions for transparency
 */
export const CATEGORY_DESCRIPTIONS = {
  necessary: {
    title: 'Necessary',
    description: 'Required for the website to function properly. These cannot be disabled.',
    examples: 'Authentication, security, session management'
  },
  preferences: {
    title: 'Preferences',
    description: 'Remember your settings and preferences for a personalized experience.',
    examples: 'Language selection, theme preferences, region settings'
  },
  analytics: {
    title: 'Analytics',
    description: 'Help us understand how visitors interact with our website to improve performance.',
    examples: 'Google Analytics, page view tracking, performance monitoring'
  },
  marketing: {
    title: 'Marketing',
    description: 'Used to deliver personalized advertisements and track campaign effectiveness.',
    examples: 'Facebook Pixel, Google Ads, retargeting cookies'
  }
};
