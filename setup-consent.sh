#!/bin/bash

# Cross-Domain Consent Implementation - Quick Start Script
# This script helps set up and test the implementation

set -e

echo "🚀 DataSafeguard Cross-Domain Consent - Quick Start"
echo "=================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Step 1: Install client dependencies
echo "📦 Step 1: Installing client dependencies..."
npm install
echo "✅ Client dependencies installed"
echo ""

# Step 2: Install server dependencies
echo "📦 Step 2: Installing server dependencies..."
cd server/consent-api
if [ ! -d "node_modules" ]; then
    npm install
    echo "✅ Server dependencies installed"
else
    echo "✅ Server dependencies already installed"
fi
cd ../..
echo ""

# Step 3: Check environment configuration
echo "🔧 Step 3: Checking environment configuration..."
if [ -f ".env.local" ]; then
    echo "✅ .env.local exists"
    echo ""
    echo "Current configuration:"
    echo "---"
    grep "NEXT_PUBLIC_" .env.local
    echo "---"
else
    echo "❌ .env.local not found"
    exit 1
fi
echo ""

# Step 4: Create start script
echo "📝 Step 4: Creating convenience scripts..."

# Check if concurrently is installed
if ! grep -q "concurrently" package.json; then
    echo "Installing concurrently for running both servers..."
    npm install --save-dev concurrently
fi

# Update package.json scripts if needed
if ! grep -q "dev:api" package.json; then
    echo "Updating package.json scripts..."
    # This is informational - manual update required
    echo ""
    echo "⚠️  Please add these scripts to your package.json:"
    echo ""
    echo '  "dev:api": "cd server/consent-api && npm run dev",'
    echo '  "dev:all": "concurrently \"npm run dev\" \"npm run dev:api\""'
    echo ""
fi

echo "✅ Setup complete!"
echo ""

# Step 5: Provide next steps
echo "🎯 Next Steps:"
echo "=============="
echo ""
echo "1. Start both servers:"
echo "   Terminal 1: npm run dev"
echo "   Terminal 2: cd server/consent-api && npm run dev"
echo ""
echo "   OR (if scripts are added):"
echo "   npm run dev:all"
echo ""
echo "2. Open your browser:"
echo "   http://localhost:3000"
echo ""
echo "3. Test the consent banner:"
echo "   - You should see a consent banner at the bottom"
echo "   - Accept or configure preferences"
echo "   - Check browser console for logs"
echo "   - Check localStorage: ds_consent_v2"
echo "   - Check cookies: consent_user_id"
echo ""
echo "4. Test iframe blocking:"
echo "   - Add an iframe with data-src attribute"
echo "   - Set data-consent-category='marketing'"
echo "   - It should be blocked until consent is given"
echo ""
echo "5. Check backend logs:"
echo "   - Server should show 'Consent API Server running on port 3001'"
echo "   - Watch for AUDIT logs when saving consent"
echo ""
echo "📚 For more information, see:"
echo "   - CONSENT_IMPLEMENTATION.md (detailed guide)"
echo "   - Implementation Plan artifact (architecture)"
echo ""
echo "🆘 If you encounter issues:"
echo "   - Check the browser console for errors"
echo "   - Check backend terminal for errors"
echo "   - Review CONSENT_IMPLEMENTATION.md troubleshooting section"
echo ""
echo "✨ Happy coding!"
