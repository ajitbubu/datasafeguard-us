# Cookie Settings Button - Debug Guide

## Testing the Cookie Settings Button

### Step 1: Accept Cookies
1. Open the site (http://localhost:3000)
2. Accept cookies when banner appears
3. Banner should close

### Step 2: Click Cookie Button
1. Look for cookie icon at bottom-left corner 🍪
2. Click the cookie icon
3. Check browser console for logs

### Expected Console Output:
```
[CookieSettings] Opening cookie settings...
[CookieSettings] ✓ All consent keys cleared from localStorage
[CookieSettings] Verification: { ds_consent_v2: null, ds_consent: null, cookie_consent: null }
[CookieSettings] ✓ Consent revoked from API
[CookieSettings] Reloading page...
```

### Step 3: After Reload
- Banner should appear again
- User can change preferences

## Troubleshooting

### Banner Not Appearing After Click?

**Check 1: Verify localStorage is cleared**
```javascript
// In browser console BEFORE clicking button:
localStorage.getItem('ds_consent_v2')
// Should show consent data

// AFTER clicking button and reload:
localStorage.getItem('ds_consent_v2')
// Should be null
```

**Check 2: Check ConsentProvider logs**
```
Look for:
[ConsentProvider] Consent loaded from localStorage
// This should NOT appear after clearing

Should see:
[ConsentProvider] No consent found
```

**Check 3: Verify button is clickable**
- Button should be visible at bottom-left
- Hover should show tooltip "Cookie Settings"
- Click should trigger console logs

**Check 4: Check for errors**
```javascript
// Open DevTools → Console
// Look for any red errors
```

### Manual Test
If button doesn't work, test manually:
```javascript
// In browser console:
localStorage.removeItem('ds_consent_v2');
localStorage.removeItem('ds_consent');
localStorage.removeItem('cookie_consent');
location.reload();
```

## Common Issues

### Issue 1: Button not visible
- Check z-index conflicts
- Verify CookieSettingsButtonWrapper is in layout.tsx
- Check if button is behind other elements

### Issue 2: Click does nothing
- Check browser console for errors
- Verify handleOpenSettings is being called
- Check if localStorage.removeItem is working

### Issue 3: Banner still doesn't show
- ConsentProvider might be caching state
- Check if hasDecided is being set correctly
- Verify ConsentBanner checks hasDecided properly

### Issue 4: API errors
- Consent API might not be running
- Check CORS configuration
- Verify API URL in .env.local

## Debug Commands

```javascript
// Check current consent state
JSON.parse(localStorage.getItem('ds_consent_v2'))

// Clear all consent manually
localStorage.clear()
location.reload()

// Check if button exists
document.querySelector('[aria-label="Open Cookie Settings"]')

// Trigger button click programmatically
document.querySelector('[aria-label="Open Cookie Settings"]').click()
```

## Expected Behavior

1. ✅ Button visible at bottom-left
2. ✅ Tooltip shows on hover
3. ✅ Click clears localStorage
4. ✅ Click revokes API consent
5. ✅ Page reloads
6. ✅ Banner appears after reload
7. ✅ User can change preferences
