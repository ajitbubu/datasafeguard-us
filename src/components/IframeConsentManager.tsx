"use client";

import { useEffect, useState } from 'react';
import { useConsent, getConsentAPI } from './ConsentProvider';
import type { IframeClassification, ConsentCategory } from '@/lib/consent/types';

export default function IframeConsentManager() {
  const { consent } = useConsent();
  const [iframes, setIframes] = useState<HTMLIFrameElement[]>([]);

  useEffect(() => {
    // Find all iframes with data-src attribute
    const findIframes = () => {
      const elements = document.querySelectorAll<HTMLIFrameElement>('iframe[data-src]');
      setIframes(Array.from(elements));
    };

    findIframes();

    // Watch for dynamically added iframes
    const observer = new MutationObserver(() => {
      findIframes();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Process each iframe based on consent
    iframes.forEach(iframe => {
      const category = (iframe.getAttribute('data-consent-category') || 'marketing') as ConsentCategory;
      const hasConsent = consent[category];

      if (hasConsent) {
        loadIframe(iframe);
      } else {
        blockIframe(iframe);
      }
    });
  }, [iframes, consent]);

  const classifyIframe = (iframe: HTMLIFrameElement): IframeClassification => {
    const src = iframe.getAttribute('data-src') || iframe.src;
    const currentDomain = window.location.hostname;
    
    if (src.includes(currentDomain)) {
      return {
        type: 'same-domain',
        vendor: 'first-party',
        category: 'necessary'
      };
    }

    // Check if it's an owned domain
    const linkedDomains = (process.env.NEXT_PUBLIC_LINKED_DOMAINS || '').split(',').filter(Boolean);
    const isOwned = linkedDomains.some(domain => src.includes(domain));
    
    if (isOwned) {
      return {
        type: 'cross-domain-owned',
        vendor: 'first-party',
        category: 'necessary'
      };
    }

    // Third-party iframe
    const vendor = getVendor(src);
    const category = (iframe.getAttribute('data-consent-category') || 'marketing') as ConsentCategory;
    
    return {
      type: 'third-party',
      vendor,
      category
    };
  };

  const getVendor = (src: string): string => {
    const vendorMap: Record<string, string> = {
      'youtube.com': 'YouTube',
      'vimeo.com': 'Vimeo',
      'google.com/maps': 'Google Maps',
      'facebook.com': 'Facebook',
      'twitter.com': 'Twitter (X)',
      'instagram.com': 'Instagram',
      'linkedin.com': 'LinkedIn',
      'tiktok.com': 'TikTok'
    };

    for (const [domain, vendor] of Object.entries(vendorMap)) {
      if (src.includes(domain)) {
        return vendor;
      }
    }

    return 'Third-Party Service';
  };

  const loadIframe = (iframe: HTMLIFrameElement) => {
    const dataSrc = iframe.getAttribute('data-src');
    if (dataSrc && !iframe.src) {
      iframe.src = dataSrc;
      iframe.removeAttribute('data-src');
      
      // Remove placeholder if exists
      const placeholder = iframe.previousElementSibling;
      if (placeholder && placeholder.classList.contains('iframe-placeholder')) {
        placeholder.remove();
      }
      
      iframe.style.display = 'block';
    }
  };

  const blockIframe = (iframe: HTMLIFrameElement) => {
    // Check if placeholder already exists
    const existingPlaceholder = iframe.previousElementSibling;
    if (existingPlaceholder && existingPlaceholder.classList.contains('iframe-placeholder')) {
      return;
    }

    const classification = classifyIframe(iframe);
    const category = iframe.getAttribute('data-consent-category') || 'marketing';
    
    // Create placeholder
    const placeholder = document.createElement('div');
    placeholder.className = 'iframe-placeholder';
    placeholder.style.cssText = `
      position: relative;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 12px;
      padding: 48px 24px;
      text-align: center;
      min-height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: white;
    `;

    placeholder.innerHTML = `
      <div style="max-width: 400px;">
        <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" style="margin: 0 auto 20px;">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" stroke-width="2"/>
          <path d="M9 9l6 6M15 9l-6 6" stroke-width="2" stroke-linecap="round"/>
        </svg>
        <h4 style="font-size: 20px; font-weight: 600; margin-bottom: 12px;">
          ${classification.vendor} Content Blocked
        </h4>
        <p style="font-size: 14px; opacity: 0.9; margin-bottom: 24px;">
          This content requires <strong>${category}</strong> consent to load. We respect your privacy choices.
        </p>
        <button 
          class="consent-load-btn"
          data-category="${category}"
          style="
            padding: 12px 32px;
            background: white;
            color: #667eea;
            border: none;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s;
          "
          onmouseover="this.style.transform='translateY(-2px)'; this.style.boxShadow='0 4px 12px rgba(0,0,0,0.15)';"
          onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';"
        >
          Allow ${category} and load content
        </button>
      </div>
    `;

    // Add click handler to button
    const button = placeholder.querySelector('.consent-load-btn');
    if (button) {
      button.addEventListener('click', () => {
        // Show consent banner with this category pre-selected
        window.dispatchEvent(new CustomEvent('show-consent-banner', {
          detail: { category }
        }));
      });
    }

    iframe.parentNode?.insertBefore(placeholder, iframe);
    iframe.style.display = 'none';
  };

  // Listen for consent changes
  useEffect(() => {
    const handleConsentUpdate = () => {
      // Refresh all iframes
      iframes.forEach(iframe => {
        const category = (iframe.getAttribute('data-consent-category') || 'marketing') as ConsentCategory;
        const hasConsent = consent[category];

        if (hasConsent) {
          loadIframe(iframe);
        }
      });
    };

    window.addEventListener('consent-saved', handleConsentUpdate);
    window.addEventListener('consent-updated', handleConsentUpdate);

    return () => {
      window.removeEventListener('consent-saved', handleConsentUpdate);
      window.removeEventListener('consent-updated', handleConsentUpdate);
    };
  }, [iframes, consent]);

  // Set up postMessage communication for cross-domain iframes
  useEffect(() => {
    const consentAPI = getConsentAPI();
    if (!consentAPI) return;

    const handleIframeLoad = (event: Event) => {
      const iframe = event.target as HTMLIFrameElement;
      const classification = classifyIframe(iframe);

      if (classification.type === 'cross-domain-owned' && iframe.contentWindow) {
        // Send consent state to iframe
        const preferences = consentAPI.getPreferences();
        iframe.contentWindow.postMessage({
          type: 'consent-update',
          preferences
        }, '*'); // In production, specify exact origin
      }
    };

    iframes.forEach(iframe => {
      iframe.addEventListener('load', handleIframeLoad);
    });

    return () => {
      iframes.forEach(iframe => {
        iframe.removeEventListener('load', handleIframeLoad);
      });
    };
  }, [iframes]);

  return null; // This component doesn't render anything
}
