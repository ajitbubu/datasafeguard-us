# Cookie Settings Button

## Overview
A sticky floating button that allows users to reopen the cookie consent banner at any time to change their preferences.

## Features
- ✅ Sticky position (bottom-right corner)
- ✅ Beautiful gradient design with hover effects
- ✅ Animated tooltip on hover
- ✅ Cookie icon with rotation animation
- ✅ Pulse effect on hover
- ✅ Accessible (ARIA labels, keyboard navigation)
- ✅ Mobile responsive
- ✅ Dark mode support

## Location
- Component: `src/components/CookieSettingsButton.tsx`
- Added to: `src/app/layout.tsx` (appears on all pages)

## Usage
The button is automatically included in the layout. Users can:
1. Click the cookie icon at bottom-right
2. Consent is cleared
3. Page reloads
4. Cookie banner appears again

## Styling
- Position: Fixed bottom-left (24px from edges)
- Size: 56x56px circular button
- Colors: Blue to purple gradient
- Z-index: 9998 (below banner at 9999)
- Animation: Spring entrance, scale on hover

## Customization
Edit `src/components/CookieSettingsButton.tsx` to change:
- Position (bottom-6, left-6)
- Colors (from-blue-600 to-purple-600)
- Size (w-14 h-14)
- Icon or tooltip text
