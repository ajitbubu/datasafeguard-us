# Quick Reference - Cookie Consent System

## 🚀 Quick Start

### Start Consent API Server
```bash
cd server/consent-api
node index.js
```

### Start Next.js Dev Server
```bash
npm run dev
```

### Test Cross-Domain
1. Open http://localhost:3000
2. Accept cookies
3. Open http://localhost:4200
4. Cookies should be synced ✅

## 🎯 Key Components

| Component | Purpose | Location |
|-----------|---------|----------|
| ConsentBanner | Main cookie banner | `src/components/ConsentBanner.tsx` |
| ConsentIframe | Block iframes | `src/components/ConsentIframe.tsx` |
| CookieSettingsButton | Reopen banner | `src/components/CookieSettingsButton.tsx` |
| ConsentProvider | State management | `src/components/ConsentProvider.tsx` |

## 🍪 Cookie Categories

| Category | Always On? | Examples |
|----------|------------|----------|
| Necessary | ✅ Yes | Session, CSRF token |
| Preferences | ❌ No | Language, theme |
| Analytics | ❌ No | Google Analytics |
| Marketing | ❌ No | YouTube, Facebook |

## 🔧 Common Tasks

### Clear Consent (Test Banner)
```javascript
localStorage.removeItem('ds_consent_v2');
location.reload();
```

### Check Current Consent
```javascript
JSON.parse(localStorage.getItem('ds_consent_v2'));
```

### Add iframe with Consent
```tsx
<ConsentIframe
  src="https://youtube.com/embed/VIDEO_ID"
  title="Video"
  category="marketing"
  provider="YouTube"
/>
```

## 📍 Cookie Settings Button

**Location**: Bottom-left corner (all pages)
**Action**: Click to reopen consent banner
**Style**: Blue-purple gradient with cookie icon 🍪

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Banner not showing | Clear localStorage: `ds_consent_v2` |
| Cross-domain not working | Check API running on port 3001 |
| iframe not loading | Check consent category matches |
| Hydration error | Already fixed with dynamic import |

## 📚 Documentation

- `CONSENT_SYSTEM_SUMMARY.md` - Complete overview
- `CROSS_DOMAIN_TESTING.md` - Testing guide
- `IFRAME_CONSENT_MANAGEMENT.md` - iframe docs
- `COOKIE_SETTINGS_BUTTON.md` - Button docs
