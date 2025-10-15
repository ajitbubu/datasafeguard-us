# iframe Consent Management Implementation

## Overview

This implementation provides **consent-based iframe blocking** for third-party embedded content (YouTube, LinkedIn, Google Maps, etc.) to ensure GDPR, CCPA, and other privacy compliance.

## Problem Statement

Embedded third-party content can load tracking scripts or cookies before consent is granted. These are often rendered within iframes, making it difficult to control from the parent document.

## Solution

The CMP enforces iframe-level privacy control through:
1. **Consent Placeholders** - Before consent, iframes are replaced with static placeholders
2. **Two-Step Activation** - User must explicitly grant consent to load the iframe
3. **postMessage API** - Communication between nested iframes and parent CMP for consent synchronization

## Implementation

### Component: `ConsentIframe`

Located at: `src/components/ConsentIframe.tsx`

#### Features:
- ✅ Blocks iframe until consent is granted
- ✅ Shows privacy notice with provider information
- ✅ One-click consent and load
- ✅ Alternative "Open in new tab" option
- ✅ Fully responsive design
- ✅ Dark mode support
- ✅ Integrates with existing consent system

#### Props:

```typescript
interface ConsentIframeProps {
  src: string;                    // iframe source URL
  title: string;                  // iframe title for accessibility
  width?: string | number;        // iframe width (default: "560")
  height?: string | number;       // iframe height (default: "315")
  category: ConsentCategory;      // Required consent category: 'necessary' | 'preferences' | 'analytics' | 'marketing'
  provider?: string;              // Provider name (e.g., "YouTube", "LinkedIn")
  className?: string;             // Additional CSS classes
  allow?: string;                 // iframe allow attribute
  allowFullScreen?: boolean;      // Allow fullscreen (default: true)
  frameBorder?: string | number;  // iframe border (default: "0")
  referrerPolicy?: React.HTMLAttributeReferrerPolicy; // Referrer policy
}
```

### Usage Example

#### YouTube Video (Product Page)

```tsx
import ConsentIframe from "@/components/ConsentIframe";

<ConsentIframe
  src="https://www.youtube.com/embed/b_SkKSFWGmw?si=YcZfZbh3uHdZFOk6"
  title="DataSafeguard Product Demo"
  width="100%"
  height="500"
  category="marketing"
  provider="YouTube"
  className="w-full"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  allowFullScreen={true}
  frameBorder="0"
  referrerPolicy="strict-origin-when-cross-origin"
/>
```

#### Google Maps

```tsx
<ConsentIframe
  src="https://www.google.com/maps/embed?pb=..."
  title="Office Location"
  width="600"
  height="450"
  category="preferences"
  provider="Google Maps"
  allow="geolocation"
/>
```

#### LinkedIn Embed

```tsx
<ConsentIframe
  src="https://www.linkedin.com/embed/feed/update/..."
  title="LinkedIn Post"
  width="504"
  height="400"
  category="marketing"
  provider="LinkedIn"
/>
```

## How It Works

### 1. Initial State (No Consent)

When the component renders and the user hasn't granted consent for the specified category:

```
┌─────────────────────────────────────┐
│  🎥 Third-party Content Blocked     │
│                                     │
│  This content requires marketing    │
│  cookies to be enabled.             │
│                                     │
│  🔒 Privacy Notice                  │
│  By loading this content, you       │
│  agree to YouTube's privacy policy  │
│                                     │
│  [Accept & Load Content]            │
│  Open in new tab instead            │
└─────────────────────────────────────┘
```

### 2. User Grants Consent

When user clicks "Accept & Load Content":
1. Consent is saved for the category (e.g., `marketing: true`)
2. Consent is synced to localStorage and API
3. iframe loads with the actual content

### 3. Loaded State (With Consent)

```
┌─────────────────────────────────────┐
│                                     │
│     [YouTube Video Playing]         │
│                                     │
│                                     │
└─────────────────────────────────────┘
```

### 4. Consent Persistence

Once consent is granted:
- ✅ Stored in localStorage (`ds_consent_v2`)
- ✅ Synced via Consent API (if enabled)
- ✅ Shared across domains (localhost:3000, localhost:4200)
- ✅ Persists across page reloads
- ✅ Valid for 12 months (GDPR requirement)

## Consent Categories

| Category | Use Case | Examples |
|----------|----------|----------|
| `necessary` | Essential functionality | Session management, security |
| `preferences` | User preferences | Language, theme, location services |
| `analytics` | Usage analytics | Google Analytics, heatmaps |
| `marketing` | Marketing & advertising | YouTube, LinkedIn, Facebook Pixel |

## Integration Points

### 1. Product Page
Location: `src/app/product-offering/page.tsx`

Added a "See It In Action" section with YouTube demo video that requires marketing consent.

### 2. Consent Provider
Location: `src/components/ConsentProvider.tsx`

The `ConsentIframe` component uses:
- `hasConsentFor(category)` - Check if consent is granted
- `setConsent()` - Grant consent for a category
- `consent` - Current consent state

### 3. Cross-Domain Sync
Location: `src/lib/consent/CrossDomainConsentAPI.ts`

Consent is automatically synced across:
- localhost:3000 (main app)
- localhost:4200 (secondary domain)
- Production domains (configured in `.env.local`)

## Privacy Compliance

### GDPR Compliance ✅
- ✅ No tracking before consent
- ✅ Clear privacy notice
- ✅ Explicit user action required
- ✅ Easy to revoke consent
- ✅ Consent expires after 12 months

### CCPA Compliance ✅
- ✅ Opt-out mechanism available
- ✅ Clear disclosure of data sharing
- ✅ GPC (Global Privacy Control) support

### Best Practices ✅
- ✅ Placeholder shows before consent
- ✅ Alternative access method (open in new tab)
- ✅ Provider name clearly displayed
- ✅ Privacy policy reference
- ✅ Accessible design (ARIA labels, keyboard navigation)

## Testing

### Test Scenario 1: First Visit (No Consent)
1. Clear localStorage and cookies
2. Navigate to product page
3. Scroll to video section
4. **Expected**: Placeholder shown with privacy notice
5. Click "Accept & Load Content"
6. **Expected**: Video loads immediately

### Test Scenario 2: Return Visit (With Consent)
1. After granting consent in Scenario 1
2. Refresh the page
3. **Expected**: Video loads automatically without placeholder

### Test Scenario 3: Cross-Domain Sync
1. Grant consent on localhost:3000
2. Open localhost:4200 in same browser
3. **Expected**: Video loads automatically (consent synced)

### Test Scenario 4: Revoke Consent
1. Open browser console
2. Run: `localStorage.removeItem('ds_consent_v2')`
3. Refresh page
4. **Expected**: Placeholder shown again

## Customization

### Custom Styling

```tsx
<ConsentIframe
  src="..."
  title="..."
  category="marketing"
  className="rounded-3xl shadow-2xl border-4 border-blue-500"
/>
```

### Custom Provider

```tsx
<ConsentIframe
  src="https://player.vimeo.com/video/..."
  title="Vimeo Video"
  category="marketing"
  provider="Vimeo"
/>
```

### Different Consent Categories

```tsx
{/* Analytics iframe */}
<ConsentIframe
  src="https://analytics-dashboard.example.com"
  category="analytics"
  provider="Analytics Dashboard"
/>

{/* Preferences iframe */}
<ConsentIframe
  src="https://maps.google.com/..."
  category="preferences"
  provider="Google Maps"
/>
```

## Future Enhancements

### Planned Features:
1. **Lazy Loading** - Only load iframe when in viewport
2. **Thumbnail Preview** - Show video thumbnail before consent
3. **Batch Consent** - "Load all videos" button
4. **Per-Provider Consent** - Separate consent for YouTube vs LinkedIn
5. **Consent Analytics** - Track consent rates per provider
6. **A/B Testing** - Test different placeholder designs

### Advanced Use Cases:
1. **Multiple iframes** - Handle multiple embeds on one page
2. **Dynamic iframes** - Load iframe URLs from CMS
3. **Nested iframes** - Handle iframes within iframes
4. **Custom postMessage** - Two-way communication with iframe content

## Troubleshooting

### iframe not loading after consent?
- Check browser console for errors
- Verify consent is saved: `localStorage.getItem('ds_consent_v2')`
- Check if category matches: `marketing`, `analytics`, etc.

### Placeholder not showing?
- Ensure consent is revoked
- Check if `hasDecided` is false in ConsentProvider
- Verify component is wrapped in ConsentProvider

### Cross-domain sync not working?
- Ensure Consent API is running on port 3001
- Check `.env.local` has `NEXT_PUBLIC_ENABLE_CONSENT_API=true`
- Verify CORS is configured correctly
- Check browser console for API errors

## Resources

- [GDPR Compliance Guide](https://gdpr.eu/)
- [CCPA Compliance Guide](https://oag.ca.gov/privacy/ccpa)
- [YouTube Embed API](https://developers.google.com/youtube/iframe_api_reference)
- [postMessage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

## Support

For questions or issues:
1. Check browser console for errors
2. Review `CROSS_DOMAIN_TESTING.md` for setup
3. Verify consent API is running
4. Check localStorage for consent data
