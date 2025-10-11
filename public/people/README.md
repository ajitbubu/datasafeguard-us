# Team Member Images

This directory contains profile images for the DataSafeguard team members.

## Current Images

✅ Available:
- `MSahu.jpg` - MR Sahu (Chairman)
- `sudhir.jpg` - Sudhir Sahu (Founder & CEO)
- `lee.jpg` - Lee Nocon (Chief Technology Officer)
- `damodar.jpg` - Dr. Damodar Sahu (Chief Growth Officer)
- `swarn.png` - Swarnam Dash (Product Manager)
- `tedra.jpg` - Tedra Chen (Corporate Manager)

## Missing Images

❌ Need to download from https://www.datasafeguard.ai/data-safeguarders:

### Leadership Team (India) & Advisory
- `sumeet-shah.jpg` - Sumeet Shah (Technology Manager & Co-Founder)
- `pranab-mohanty.jpg` - Pranab Mohanty (Chief Business Officer)
- `mahi-gupta.jpg` - Mahi Gupta (Director of Privacy Strategy)
- `deepak-sahu.jpg` - Dr. Deepak Kumar Sahu (Co-Founder)
- `ns-bala.jpg` - N. S. Bala (Executive Advisor)
- `jay-como.jpg` - Jay Como (Financial Services Executive)
- `joe-clemons.jpg` - Joe Clemons (Executive Advisor)
- `amar-patnaik.jpg` - Dr. Amar Patnaik (Senior Advisor)
- `rameesh-kailasam.jpg` - Rameesh Kailasam (Executive Advisor)
- `kevin-jurovich.jpg` - Kevin Jurovich (Executive Advisor)
- `john-papazian.jpg` - John Papazian (Advisory Board Moderator)

## How to Add Images

### Method 1: Manual Download
1. Visit https://www.datasafeguard.ai/data-safeguarders
2. Right-click on each team member's photo
3. Select "Save Image As..."
4. Save to this directory (`/public/people/`) with the exact filename listed above

### Method 2: Using Browser DevTools
1. Visit https://www.datasafeguard.ai/data-safeguarders
2. Open Browser DevTools (F12)
3. Go to Network tab
4. Reload the page
5. Filter by "Img"
6. Find each team member's image URL
7. Download using curl or wget:
   ```bash
   curl -o public/people/sumeet-shah.jpg "https://cdn.prod.website-files.com/..."
   ```

### Method 3: Check Script
Run the check script to see which images are missing:
```bash
node scripts/check-team-images.js
```

## Image Requirements

- **Format**: JPG or PNG
- **Recommended Size**: 400x400px minimum
- **Aspect Ratio**: Square (1:1) preferred
- **File Size**: Keep under 500KB for optimal performance

## Notes

- All images should be optimized for web use
- Use consistent naming convention (lowercase with hyphens)
- The team page will show initials as fallback if image is missing
- Images are automatically optimized by Next.js Image component
