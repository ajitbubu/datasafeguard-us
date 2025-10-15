# Cross-Domain Consent Testing Guide

## Setup Complete ✅

The following changes have been made to enable cross-domain consent synchronization:

### 1. Environment Configuration
- ✅ Enabled consent API: `NEXT_PUBLIC_ENABLE_CONSENT_API=true`
- ✅ Updated linked domains: `NEXT_PUBLIC_LINKED_DOMAINS=localhost:3000,localhost:4200`

### 2. Code Fixes
- ✅ Fixed localStorage key mismatch (`ds_consent` → `ds_consent_v2`)
- ✅ Aligned data format between ConsentProvider and CrossDomainConsentAPI
- ✅ Fixed hydration errors with ConsentBannerWrapper

### 3. Server Status
- ✅ Consent API server running on port 3001
- ✅ CORS configured to allow localhost:3000 and localhost:4200

## Testing Steps

### Step 1: Clear Existing Data
Before testing, clear all existing consent data:

1. Open browser DevTools (F12)
2. Go to **Application** tab → **Local Storage**
3. Delete these keys from both `localhost:3000` and `localhost:4200`:
   - `ds_consent` (old key)
   - `ds_consent_v2` (new key)
4. Go to **Cookies** tab
5. Delete the `consent_user_id` cookie if it exists

### Step 2: Restart Next.js Dev Server
The environment variables have changed, so restart your dev server:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run dev
```

### Step 3: Test Cross-Domain Sync

1. **Open localhost:3000**
   - You should see the consent banner
   - Click "Accept All"
   - Banner should disappear
   - Check DevTools → Application → Local Storage
   - You should see `ds_consent_v2` with your preferences

2. **Open localhost:4200** (in the same browser)
   - The banner should NOT appear
   - Your consent from localhost:3000 should be automatically synced
   - Check DevTools → Application → Local Storage
   - You should see the same `ds_consent_v2` data

3. **Verify API Sync**
   - Open DevTools → Network tab
   - Look for requests to `http://localhost:3001/api/consent/`
   - You should see:
     - `POST /api/consent/save` when you accept on localhost:3000
     - `GET /api/consent/check` when you load localhost:4200

### Step 4: Test Consent Revocation

1. On either domain, open browser console and run:
```javascript
localStorage.removeItem('ds_consent_v2');
location.reload();
```

2. The banner should reappear
3. Accept consent again
4. Switch to the other domain and refresh
5. Consent should be synced

## How It Works

```
┌─────────────────┐         ┌─────────────────┐
│ localhost:3000  │         │ localhost:4200  │
│                 │         │                 │
│ 1. User accepts │         │                 │
│    consent      │         │                 │
└────────┬────────┘         └────────┬────────┘
         │                           │
         │ POST /save                │ GET /check
         │                           │
         └───────────┬───────────────┘
                     │
         ┌───────────▼────────────┐
         │  Consent API Server    │
         │  (localhost:3001)      │
         │                        │
         │  Stores consent with   │
         │  consent_user_id       │
         │  cookie                │
         └────────────────────────┘
```

## Troubleshooting

### Banner still shows on second domain?

1. **Check the consent API is running:**
   ```bash
   curl http://localhost:3001/health
   ```
   Should return: `{"status":"ok",...}`

2. **Check the cookie is set:**
   - DevTools → Application → Cookies
   - Look for `consent_user_id` cookie
   - It should be present on both domains

3. **Check localStorage format:**
   - The stored data should look like:
   ```json
   {
     "preferences": {
       "necessary": true,
       "preferences": true,
       "analytics": true,
       "marketing": true
     },
     "timestamp": 1234567890,
     "domain": "localhost",
     "organizationId": "datasafeguard",
     "version": "1.0"
   }
   ```

4. **Check browser console for errors:**
   - Look for CORS errors
   - Look for API request failures
   - Check ConsentProvider logs

### CORS errors?

If you see CORS errors, the consent API server should already handle localhost. Check:
```bash
# Restart the consent API server
cd server/consent-api
node index.js
```

## API Endpoints

Test the API directly:

```bash
# Health check
curl http://localhost:3001/health

# Check consent (requires cookie)
curl -X GET http://localhost:3001/api/consent/check \
  -H "Cookie: consent_user_id=YOUR_USER_ID" \
  --cookie-jar cookies.txt

# Save consent
curl -X POST http://localhost:3001/api/consent/save \
  -H "Content-Type: application/json" \
  -b cookies.txt \
  -d '{
    "preferences": {
      "necessary": true,
      "preferences": true,
      "analytics": true,
      "marketing": true
    },
    "domain": "localhost",
    "organizationId": "datasafeguard",
    "version": "1.0"
  }'

# Get stats
curl http://localhost:3001/api/consent/stats
```

## Next Steps

Once cross-domain sync is working:

1. **Production Setup:**
   - Update `NEXT_PUBLIC_LINKED_DOMAINS` to your production domains
   - Deploy consent API server to production
   - Update `NEXT_PUBLIC_CONSENT_API_URL` to production URL
   - Ensure HTTPS is enabled for production

2. **Database Integration:**
   - Replace in-memory storage in consent API with a database
   - Add user authentication if needed
   - Implement consent history tracking

3. **Testing:**
   - Test with real production domains
   - Test consent expiration (12 months)
   - Test revocation flow
   - Test with different browsers
