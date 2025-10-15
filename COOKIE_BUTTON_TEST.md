# Cookie Settings Button - Complete Test Guide

## ✅ Expected Behavior

1. User accepts/rejects cookies → Banner closes
2. User clicks cookie button (🍪) → Banner reopens
3. Banner shows previous selections pre-selected
4. User can change preferences and save again

## 🧪 Step-by-Step Test

### Test 1: First Time User

1. **Clear all data**
   ```javascript
   localStorage.clear();
   sessionStorage.clear();
   location.reload();
   ```

2. **Banner should appear** automatically
3. **Click "Accept All"**
4. **Banner closes** ✅

### Test 2: Reopen Banner

1. **Click cookie icon** (bottom-left 🍪)
2. **Check console** - Should see:
   ```
   [CookieSettings] Opening cookie settings...
   [CookieSettings] ✓ Current consent backed up for pre-selection
   [CookieSettings] ✓ All consent keys cleared from localStorage
   [CookieSettings] Set flag to force banner display
   [CookieSettings] Reloading page...
   ```

3. **Page reloads**
4. **Check console** - Should see:
   ```
   [ConsentProvider] Force show banner flag detected
   [ConsentProvider] Loaded previous consent for pre-selection: {necessary: true, preferences: true, analytics: true, marketing: true}
   [ConsentProvider] Banner forced to show - hasDecided set to false
   ```

5. **Banner appears** ✅
6. **All checkboxes pre-selected** (from previous "Accept All") ✅

### Test 3: Change Preferences

1. **Click "Show Details"**
2. **Uncheck "Marketing"**
3. **Click "Save Preferences"**
4. **Banner closes** ✅

### Test 4: Reopen Again

1. **Click cookie icon** (🍪)
2. **Banner appears**
3. **Click "Show Details"**
4. **Marketing should be unchecked** ✅
5. **Other categories should be checked** ✅

## 🐛 Troubleshooting

### Banner Not Appearing?

**Step 1: Check sessionStorage flag**
```javascript
// After clicking button, before reload:
sessionStorage.getItem('force_show_consent_banner')
// Should return: "true"
```

**Step 2: Check console logs**
Look for:
- `[CookieSettings] Set flag to force banner display`
- `[ConsentProvider] Force show banner flag detected`

If you don't see these, the button click isn't working.

**Step 3: Check if button exists**
```javascript
document.querySelector('[aria-label="Open Cookie Settings"]')
// Should return: <button>...</button>
```

**Step 4: Manual trigger**
```javascript
// Manually set the flag and reload
sessionStorage.setItem('force_show_consent_banner', 'true');
localStorage.removeItem('ds_consent_v2');
location.reload();
```

### Preferences Not Pre-Selected?

**Check backup exists:**
```javascript
localStorage.getItem('ds_consent_v2_backup')
// Should show: {"preferences":{...},"timestamp":...}
```

**Check console:**
```
[ConsentProvider] Loaded previous consent for pre-selection: {...}
```

If backup doesn't exist, consent wasn't saved before clicking button.

### Button Not Clickable?

**Check z-index conflicts:**
```javascript
// Get button element
const btn = document.querySelector('[aria-label="Open Cookie Settings"]');
console.log(window.getComputedStyle(btn).zIndex); // Should be 9998
```

**Check if covered by other elements:**
```javascript
// Check what's at button position
const btn = document.querySelector('[aria-label="Open Cookie Settings"]');
const rect = btn.getBoundingClientRect();
const elementAtPoint = document.elementFromPoint(rect.left + 10, rect.top + 10);
console.log(elementAtPoint); // Should be the button or its child
```

## 📊 Console Log Timeline

### When Clicking Button:
```
[CookieSettings] Opening cookie settings...
[CookieSettings] ✓ Current consent backed up for pre-selection
[CookieSettings] localStorage keys before: ["ds_consent_v2", ...]
[CookieSettings] ✓ All consent keys cleared from localStorage
[CookieSettings] Verification: {ds_consent_v2: null, ds_consent: null, cookie_consent: null, backup_exists: true}
[CookieSettings] localStorage keys after: ["ds_consent_v2_backup", ...]
[CookieSettings] ✓ Consent revoked from API
[CookieSettings] Set flag to force banner display
[CookieSettings] Reloading page...
```

### After Page Reload:
```
[ConsentProvider] Force show banner flag detected
[ConsentProvider] Loaded previous consent for pre-selection: {necessary: true, preferences: true, analytics: true, marketing: true}
[ConsentProvider] Banner forced to show - hasDecided set to false
```

### If Banner Shows:
```
✅ SUCCESS - Everything working correctly!
```

### If Banner Doesn't Show:
```
❌ PROBLEM - Check:
1. Is force flag being set?
2. Is force flag being detected?
3. Is hasDecided being set to false?
4. Is ConsentBanner checking hasDecided correctly?
```

## 🔍 Debug Commands

```javascript
// Check all storage
console.log('localStorage:', {...localStorage});
console.log('sessionStorage:', {...sessionStorage});

// Check consent state
console.log('Current consent:', localStorage.getItem('ds_consent_v2'));
console.log('Backup consent:', localStorage.getItem('ds_consent_v2_backup'));
console.log('Force flag:', sessionStorage.getItem('force_show_consent_banner'));

// Manually trigger banner
sessionStorage.setItem('force_show_consent_banner', 'true');
localStorage.removeItem('ds_consent_v2');
location.reload();

// Check if ConsentProvider is working
// Look for React DevTools → Components → ConsentProvider
// Check hasDecided prop (should be false when banner shows)
```

## ✨ Success Criteria

- ✅ Button visible at bottom-left
- ✅ Button clickable with tooltip
- ✅ Console logs appear correctly
- ✅ Banner appears after reload
- ✅ Previous preferences pre-selected
- ✅ Can change and save new preferences
- ✅ Works multiple times in a row
