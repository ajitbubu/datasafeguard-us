#!/bin/bash
# Cross-Domain Consent - Command Reference
# Quick commands for common tasks

echo "╔═══════════════════════════════════════════════════════════════╗"
echo "║     Cross-Domain Consent - Command Reference                 ║"
echo "╚═══════════════════════════════════════════════════════════════╝"
echo ""

cat << 'EOF'

📦 INSTALLATION
═══════════════════════════════════════════════════════════════

# Install all dependencies
npm install
cd server/consent-api && npm install && cd ../..

# Install concurrently for running both servers
npm install --save-dev concurrently


🚀 STARTING SERVERS
═══════════════════════════════════════════════════════════════

# Option 1: Separate terminals
Terminal 1: npm run dev
Terminal 2: cd server/consent-api && npm run dev

# Option 2: Concurrent (after adding scripts to package.json)
npm run dev:all

# Backend only
cd server/consent-api && npm run dev

# Frontend only
npm run dev


🧪 TESTING
═══════════════════════════════════════════════════════════════

# Test frontend
open http://localhost:3000

# Test backend health
curl http://localhost:3001/health

# Test consent check endpoint
curl -X GET http://localhost:3001/api/consent/check

# Test consent save endpoint
curl -X POST http://localhost:3001/api/consent/save \
  -H "Content-Type: application/json" \
  -d '{"preferences":{"necessary":true,"analytics":true,"marketing":false,"preferences":true},"domain":"datasafeguard.us","organizationId":"datasafeguard"}'

# Test consent stats
curl http://localhost:3001/api/consent/stats


🔍 DEBUGGING
═══════════════════════════════════════════════════════════════

# Check if port 3001 is in use
lsof -i :3001

# Kill process on port 3001
lsof -ti :3001 | xargs kill -9

# View backend logs with filtering
cd server/consent-api && npm run dev 2>&1 | grep AUDIT

# Check localStorage in browser console
localStorage.getItem('ds_consent_v2')

# Check cookies in browser console
document.cookie


📝 FILE OPERATIONS
═══════════════════════════════════════════════════════════════

# View all created files
find . -name "*.ts" -o -name "*.tsx" -o -name "*.js" | grep consent

# Count lines of code
find src/lib/consent -name "*.ts" -exec wc -l {} + | tail -n 1
find src/components -name "*Consent*.tsx" -exec wc -l {} + | tail -n 1

# Search for TODOs
grep -r "TODO" src/lib/consent src/components


🛠️ MAINTENANCE
═══════════════════════════════════════════════════════════════

# Update dependencies
npm update
cd server/consent-api && npm update && cd ../..

# Check for security vulnerabilities
npm audit
cd server/consent-api && npm audit && cd ../..

# Fix vulnerabilities
npm audit fix

# Clean install
rm -rf node_modules package-lock.json
npm install


🏗️ BUILDING
═══════════════════════════════════════════════════════════════

# Build frontend
npm run build

# Build backend (if TypeScript)
cd server/consent-api && npm run build

# Test production build locally
npm run build && npm start


📊 MONITORING
═══════════════════════════════════════════════════════════════

# Watch backend logs in real-time
cd server/consent-api && npm run dev | tee consent-api.log

# Monitor API calls
watch -n 1 "curl -s http://localhost:3001/api/consent/stats | jq"

# Check database connections (when database is set up)
# Example for MongoDB:
# mongo --eval "db.consents.count()"


🔒 SECURITY
═══════════════════════════════════════════════════════════════

# Check environment variables
cat .env.local | grep NEXT_PUBLIC

# Validate CORS configuration
curl -H "Origin: https://datasafeguard.us" \
  -H "Access-Control-Request-Method: POST" \
  -H "Access-Control-Request-Headers: Content-Type" \
  -X OPTIONS \
  http://localhost:3001/api/consent/save -v


🚢 DEPLOYMENT
═══════════════════════════════════════════════════════════════

# Deploy frontend to Vercel
vercel --prod

# Build for production
NODE_ENV=production npm run build

# Start production server
NODE_ENV=production npm start

# Deploy backend (example for Railway)
railway up


💾 BACKUP & RESTORE
═══════════════════════════════════════════════════════════════

# Create backup
mkdir -p backups/$(date +%Y%m%d)
cp -r src/lib/consent backups/$(date +%Y%m%d)/
cp -r src/components/Consent* backups/$(date +%Y%m%d)/
cp -r server/consent-api backups/$(date +%Y%m%d)/

# Restore from backup
cp -r backups/20251014/* ./


📋 GIT OPERATIONS
═══════════════════════════════════════════════════════════════

# Check status
git status

# Stage consent files
git add src/lib/consent src/components/*Consent* server/consent-api

# Commit
git commit -m "feat: implement cross-domain consent synchronization"

# Create feature branch
git checkout -b feature/cross-domain-consent

# View changes
git diff


🧹 CLEANUP
═══════════════════════════════════════════════════════════════

# Remove node_modules
rm -rf node_modules server/consent-api/node_modules

# Clear Next.js cache
rm -rf .next

# Clear all logs
rm -f *.log server/consent-api/*.log


📚 DOCUMENTATION
═══════════════════════════════════════════════════════════════

# View main guide
cat CONSENT_IMPLEMENTATION.md

# View checklist
cat IMPLEMENTATION_CHECKLIST.md

# View file manifest
cat README_CONSENT.md

# Open documentation in browser
open CONSENT_IMPLEMENTATION.md  # macOS
xdg-open CONSENT_IMPLEMENTATION.md  # Linux


🆘 TROUBLESHOOTING
═══════════════════════════════════════════════════════════════

# Reset everything
pkill -f "node.*dev"
rm -rf node_modules .next server/consent-api/node_modules
npm install
cd server/consent-api && npm install && cd ../..

# Clear browser data
# Chrome: Cmd+Shift+Delete (macOS) or Ctrl+Shift+Delete (Windows/Linux)
# Then restart browsers and servers

# Check TypeScript errors
npx tsc --noEmit

# Check ESLint errors
npm run lint


📞 SUPPORT
═══════════════════════════════════════════════════════════════

Documentation:  CONSENT_IMPLEMENTATION.md
Checklist:      IMPLEMENTATION_CHECKLIST.md
File Manifest:  README_CONSENT.md
Setup Script:   ./setup-consent.sh


✨ QUICK REFERENCE
═══════════════════════════════════════════════════════════════

Frontend:       http://localhost:3000
Backend API:    http://localhost:3001
Health Check:   http://localhost:3001/health
Stats:          http://localhost:3001/api/consent/stats

Storage Key:    ds_consent_v2 (localStorage)
Cookie:         consent_user_id

EOF
