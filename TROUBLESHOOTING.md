# 🔍 Cross-Domain Consent - Troubleshooting Guide

## Issue: Banner still showing on second site

### Quick Debug Steps

**1. Restart the backend server**
```bash
# Kill the current server (Ctrl+C)
cd /Users/ajitsahu/Project/comcast/dsg-react/server/consent-api
npm run dev
```

You should see:
```
🚀 Consent API Server running on port 3001
📋 Configured domain groups: datasafeguard-group, localhost-dev-group
```

**2. Test the flow step by step:**

#### Step A: Clear everything first
```javascript
// In browser console on BOTH sites (localhost:3000 and localhost:4200)
localStorage.clear();
document.cookie.split(";").forEach(c => {
  document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
});
location.reload();
```

#### Step B: Test on React site (localhost:3000)

1. Open http://localhost:3000
2. Banner should appear
3. Open DevTools Console
4. Accept consent
5. Check console logs:
   ```
   [ConsentProvider] Consent saved successfully
   [ConsentProvider] Consent applies to: ...
   ```
6. Check localStorage:
   ```javascript
   localStorage.getItem('ds_consent_v2')
   // Should return: {"preferences":{...},"timestamp":...}
   ```
7. Check cookies:
   ```javascript
   document.cookie
   // Should include: consent_user_id=...
   ```

#### Step C: Check backend logs

In the backend terminal, you should see:
```
✓ Allowed origin: http://localhost:3000
[COOKIE] Created new user ID: abc123...
[SAVE] Saving consent for user: abc123...
[AUDIT] CONSENT_SAVED: { userId: 'abc123...', ...}
[SAVE] Consent saved successfully for user: abc123...
```

#### Step D: Test on Angular site (localhost:4200)

1. Open http://localhost:4200/home
2. Check backend logs immediately:
   ```
   ✓ Allowed origin: http://localhost:4200
   [CHECK] Looking for consent for user: abc123...
   ```
3. If banner STILL appears, check:
   - Cookie is being sent?
   - Backend found the consent?
   
4. Debug in browser console:
   ```javascript
   // Check if same cookie exists
   document.cookie
   // Should show: consent_user_id=abc123...
   
   // Check localStorage
   localStorage.getItem('ds_consent_v2')
   // Should have consent data
   ```

### Common Issues & Solutions

#### Issue 1: Different User IDs on each site
**Symptom:** React has `consent_user_id=abc123` but Angular has `consent_user_id=xyz789`

**Solution:** The cookie isn't being shared. This is expected on localhost with different ports.

**Fix:** The backend now stores consent in memory and both sites should call `/api/consent/check` with credentials to get the same consent.

#### Issue 2: Backend not receiving cookies
**Symptom:** Backend logs show "Created new user ID" for every request

**Cause:** `withCredentials: true` not set in HTTP requests

**Check React (.env.local):**
```env
NEXT_PUBLIC_CONSENT_API_URL=http://localhost:3001/api/consent
```

**Check Angular (environment.ts):**
```typescript
consentApiUrl: 'http://localhost:3001/api/consent'
```

#### Issue 3: CORS errors
**Symptom:** Console shows "CORS policy" errors

**Solution:** Backend should now allow all localhost ports. Restart backend.

### Manual API Testing

```bash
# 1. Check backend health
curl http://localhost:3001/health

# 2. Save consent manually
curl -X POST http://localhost:3001/api/consent/save \
  -H "Content-Type: application/json" \
  -H "Cookie: consent_user_id=test123" \
  -d '{
    "preferences": {
      "necessary": true,
      "analytics": true,
      "marketing": false,
      "preferences": true
    },
    "domain": "localhost",
    "organizationId": "datasafeguard"
  }'

# 3. Check if consent exists
curl http://localhost:3001/api/consent/check \
  -H "Cookie: consent_user_id=test123"

# 4. Check stats
curl http://localhost:3001/api/consent/stats
```

### Expected Behavior

**Correct Flow:**
```
1. User visits localhost:3000
2. No cookie → Backend creates consent_user_id=abc123
3. User accepts consent
4. React saves to localStorage
5. React calls API → Backend stores consent for user abc123
6. User visits localhost:4200
7. Cookie consent_user_id=abc123 sent to backend
8. Angular calls /check → Backend finds consent for abc123
9. Angular saves to localStorage
10. Banner hidden ✅
```

**Why it might not work on localhost:**

Cookies with different ports on localhost are treated separately by browsers. The solution is:
1. Backend stores consent by user ID
2. Both sites call `/api/consent/check` with credentials
3. Even if cookie is different, the backend tries to find consent
4. If found, both sites get the same consent data

### Alternative: Use localStorage sync

If cookies aren't working, you can test with just localStorage:

**React:** Accept consent
**Angular:** Manually copy consent to Angular

```javascript
// On React (localhost:3000) - After accepting
const consent = localStorage.getItem('ds_consent_v2');
console.log('Copy this:', consent);

// On Angular (localhost:4200) - Paste the value
localStorage.setItem('ds_consent_v2', 'PASTE_VALUE_HERE');
location.reload();
```

### Debug Checklist

Run through this checklist:

**Backend (localhost:3001):**
- [ ] Server is running
- [ ] No errors in terminal
- [ ] Health check responds: `curl http://localhost:3001/health`
- [ ] Shows "localhost-dev-group" in domain groups

**React (localhost:3000):**
- [ ] Consent banner appears on first visit
- [ ] Accept button works
- [ ] Console shows "[ConsentProvider] Consent saved"
- [ ] localStorage has `ds_consent_v2`
- [ ] Cookie `consent_user_id` exists
- [ ] Network tab shows POST to `/api/consent/save` (status 200)

**Angular (localhost:4200):**
- [ ] App loads without errors
- [ ] Console shows "[ConsentService]" logs
- [ ] Network tab shows GET to `/api/consent/check`
- [ ] If consent exists, banner hidden
- [ ] If no consent, banner appears

### Still Not Working?

If you've tried everything and it's still not working, the issue is likely:

1. **Cookie isolation on localhost** - Browsers treat `localhost:3000` and `localhost:4200` as completely separate
2. **Solution:** Both apps need to independently check the backend API

**Verify the Angular service is calling the API:**

```typescript
// Check in Angular component
constructor() {
  this.consentService.consent$.subscribe(consent => {
    console.log('Angular consent state:', consent);
  });
}
```

### Need More Help?

Share these logs:
1. Backend terminal output (especially [AUDIT] and [COOKIE] logs)
2. Browser console from React site
3. Browser console from Angular site
4. Network tab showing API calls
5. Cookie and localStorage values from both sites

---

**Pro Tip:** The easiest way to test is to accept consent on one site, then immediately check the backend stats:

```bash
curl http://localhost:3001/api/consent/stats
```

You should see `"totalConsents": 1` and the user ID in `storedUserIds`.
