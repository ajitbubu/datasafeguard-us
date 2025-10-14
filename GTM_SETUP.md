# Google Tag Manager (GTM) Setup Guide

## Overview
Google Tag Manager has been implemented in your application. This allows you to manage all your tracking tags (Google Analytics, Facebook Pixel, LinkedIn Insight, etc.) from the GTM dashboard without code changes.

## Setup Instructions

### 1. Get Your GTM Container ID

1. Go to [Google Tag Manager](https://tagmanager.google.com/)
2. Create a new account or use an existing one
3. Create a new container for your website
4. Copy your GTM Container ID (format: `GTM-XXXXXXX`)

### 2. Update the GTM Container ID

Replace `GTM-XXXXXXX` with your actual container ID in:
- `src/components/GoogleTagManager.tsx` (line 6 and line 30)

```typescript
const GTM_ID = "GTM-XXXXXXX"; // Replace with your actual GTM ID
```

### 3. Configure Tags in GTM Dashboard

#### Google Analytics 4 (GA4)
1. In GTM, go to **Tags** → **New**
2. Choose **Google Analytics: GA4 Configuration**
3. Enter your Measurement ID: `G-ZG5SVXXFM3`
4. Set trigger to **All Pages**
5. Save and publish

#### Facebook Pixel
1. In GTM, go to **Tags** → **New**
2. Choose **Custom HTML**
3. Paste your Facebook Pixel code
4. Set trigger to **All Pages**
5. Save and publish

#### Other Tags
You can add any other tags (LinkedIn Insight, Google Ads, etc.) through the GTM dashboard.

## Using GTM Events in Your Code

### Import the GTM helper functions:

```typescript
import { gtmPushEvent, gtmPageView, gtmCustomEvent } from "@/lib/gtm";
```

### Track Page Views:

```typescript
gtmPageView("/product-offering", "Product Offering Page");
```

### Track Custom Events:

```typescript
// Button click
gtmCustomEvent("button_click", "CTA", "Schedule Demo", 1);

// Form submission
gtmPushEvent("form_submit", {
  form_name: "contact_form",
  form_location: "homepage",
});

// Product view
gtmPushEvent("product_view", {
  product_id: "pii-detection",
  product_name: "PII Detection & Redaction",
  product_category: "Data Privacy",
});
```

### Track Ecommerce Events:

```typescript
import { gtmEcommerceEvent } from "@/lib/gtm";

// Add to cart
gtmEcommerceEvent("add_to_cart", {
  currency: "USD",
  value: 99.99,
  items: [
    {
      item_id: "pii-detection",
      item_name: "PII Detection & Redaction",
      price: 99.99,
      quantity: 1,
    },
  ],
});
```

## Current Implementation

### Files Created:
- ✅ `src/components/GoogleTagManager.tsx` - GTM component
- ✅ `src/lib/gtm.ts` - GTM helper functions
- ✅ Updated `src/app/layout.tsx` - Added GTM to layout

### Cookies Set by GTM:
GTM automatically sets the following cookies:
- `_ga` - Google Analytics (2 years)
- `_gid` - Google Analytics (24 hours)
- `_gat` - Google Analytics (1 minute)
- `_fbp` - Facebook Pixel (90 days) - if configured
- Additional cookies based on tags you configure

## Testing GTM

### 1. Preview Mode
1. In GTM dashboard, click **Preview**
2. Enter your website URL
3. GTM Tag Assistant will open
4. Navigate your site and verify tags are firing

### 2. Browser Console
Check if dataLayer is working:
```javascript
console.log(window.dataLayer);
```

### 3. Chrome Extension
Install **Google Tag Assistant** Chrome extension to debug tags.

## Migration from Direct GA4

Your existing Google Analytics implementation (`src/components/GoogleAnalytics.tsx`) is still active. You have two options:

### Option 1: Keep Both (Recommended for transition)
- Keep both implementations running
- Verify GTM is working correctly
- Then remove the old GoogleAnalytics component

### Option 2: Remove Old Implementation
1. Remove `<GoogleAnalytics />` from `src/app/layout.tsx`
2. Configure GA4 tag in GTM dashboard
3. Verify tracking is working

## Benefits of GTM

✅ **No Code Changes** - Add/modify tags from GTM dashboard
✅ **Multiple Tags** - Manage all tracking in one place
✅ **Version Control** - GTM has built-in version history
✅ **Testing** - Preview mode before publishing
✅ **Triggers** - Advanced trigger conditions
✅ **Variables** - Dynamic values in tags
✅ **Data Layer** - Structured data for tracking

## Support

For GTM documentation, visit:
- [GTM Documentation](https://support.google.com/tagmanager)
- [GTM Developer Guide](https://developers.google.com/tag-platform/tag-manager)
