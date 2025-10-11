#!/bin/bash

# Team Images Download Script
# This script downloads team member images from the DataSafeguard website
# 
# Usage: 
#   1. Update the IMAGE_URLS array below with actual URLs from the website
#   2. Run: bash scripts/download-team-images.sh

echo "🚀 Starting team images download..."
echo ""

# Create directory if it doesn't exist
mkdir -p public/people

# Array of image URLs and their target filenames
# Format: "filename|url"
# TODO: Replace these placeholder URLs with actual URLs from https://www.datasafeguard.ai/data-safeguarders

declare -a IMAGE_URLS=(
  # "sumeet-shah.jpg|https://cdn.prod.website-files.com/..."
  # "pranab-mohanty.jpg|https://cdn.prod.website-files.com/..."
  # "mahi-gupta.jpg|https://cdn.prod.website-files.com/..."
  # "deepak-sahu.jpg|https://cdn.prod.website-files.com/..."
  # "ns-bala.jpg|https://cdn.prod.website-files.com/..."
  # "jay-como.jpg|https://cdn.prod.website-files.com/..."
  # "joe-clemons.jpg|https://cdn.prod.website-files.com/..."
  # "amar-patnaik.jpg|https://cdn.prod.website-files.com/..."
  # "rameesh-kailasam.jpg|https://cdn.prod.website-files.com/..."
  # "kevin-jurovich.jpg|https://cdn.prod.website-files.com/..."
  # "john-papazian.jpg|https://cdn.prod.website-files.com/..."
)

if [ ${#IMAGE_URLS[@]} -eq 0 ]; then
  echo "⚠️  No image URLs configured!"
  echo ""
  echo "To use this script:"
  echo "1. Visit https://www.datasafeguard.ai/data-safeguarders"
  echo "2. Open Browser DevTools (F12) → Network tab"
  echo "3. Reload the page and find image URLs"
  echo "4. Update the IMAGE_URLS array in this script"
  echo "5. Run the script again"
  echo ""
  exit 1
fi

# Download each image
for entry in "${IMAGE_URLS[@]}"; do
  IFS='|' read -r filename url <<< "$entry"
  
  echo "📥 Downloading: $filename"
  
  if curl -f -o "public/people/$filename" "$url" 2>/dev/null; then
    echo "   ✅ Success: $filename"
  else
    echo "   ❌ Failed: $filename"
  fi
  
  echo ""
done

echo "✨ Download complete!"
echo ""
echo "Run 'node scripts/check-team-images.js' to verify all images."
