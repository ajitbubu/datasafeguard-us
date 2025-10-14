/**
 * Type definitions for Cross-Domain Consent Management
 */

export interface ConsentPreferences {
  necessary: boolean;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface ConsentData {
  preferences: ConsentPreferences;
  timestamp: number;
  domain: string;
  organizationId: string;
  version: string;
  userId?: string;
}

export interface ConsentCheckResult {
  hasConsent: boolean;
  showBanner: boolean;
  preferences: ConsentPreferences | null;
  source: 'local' | 'cross-domain' | null;
}

export interface ConsentAPIConfig {
  apiEndpoint: string;
  organizationId: string;
  policyVersion: string;
  domains: string[];
  syncInterval?: number;
  jurisdiction?: 'GDPR' | 'CCPA' | 'DPDP';
}

export interface SaveConsentResponse {
  success: boolean;
  message?: string;
  consentId?: string;
  appliesTo?: string[];
  error?: string;
}

export interface CrossDomainConsentResponse {
  hasConsent: boolean;
  preferences: ConsentPreferences;
  timestamp: number;
  domain: string;
  version: string;
}

export interface DomainCompatibilityResponse {
  compatible: boolean;
  sourceDomain: string;
  targetDomain: string;
  groupId?: string;
  sharedDomains?: string[];
  policyVersion?: string;
}

export type ConsentCategory = 'necessary' | 'preferences' | 'analytics' | 'marketing';

export type IframeType = 'same-domain' | 'cross-domain-owned' | 'third-party';

export interface IframeClassification {
  type: IframeType;
  vendor: string;
  category: ConsentCategory;
}

export interface ConsentEvent {
  type: 'consent-saved' | 'consent-revoked' | 'consent-updated';
  preferences: ConsentPreferences;
  timestamp: number;
}
