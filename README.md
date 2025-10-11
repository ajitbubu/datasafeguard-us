# DataSafeguard.ai - Corporate Website Redesign

A complete redesign of the corporate website for **DataSafeguard.ai** - the world's #1 leading AI-powered data privacy management company. This modern, enterprise-grade website showcases cutting-edge data protection solutions with a focus on security, compliance, and innovation.

**Live Site**: [datasafeguard.ai](https://www.datasafeguard.ai)

![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)
![React](https://img.shields.io/badge/React-19.1.0-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.x-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.x-ff69b4)

## 🎯 Project Overview

This is a **complete corporate website redesign** for DataSafeguard, featuring:
- Modern, professional design language aligned with enterprise security standards
- AI-powered visual elements and animations
- Comprehensive product and solution showcases
- Team profiles and company information
- Lead generation and contact systems

## 🚀 Key Features

### Design & User Experience
- **Corporate Design Language**: Professional, trustworthy design aligned with enterprise security standards
- **AI-Powered Animations**: Custom animated shield logo and interactive elements
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Fully Responsive**: Seamless experience across desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion powered transitions and micro-interactions

### Technical Excellence
- **Next.js 15 App Router**: Latest React framework with server components
- **TypeScript**: Full type safety across the entire codebase
- **Tailwind CSS 4**: Modern utility-first styling with custom design system
- **Turbopack**: Lightning-fast builds and hot module replacement
- **SEO Optimized**: Meta tags, structured data, sitemap, and robots.txt

### Business Features
- **Lead Generation**: Contact forms with validation and error handling
- **Product Showcase**: Interactive solution explorer with filtering
- **Team Profiles**: Dynamic team member directory with categories
- **Analytics Ready**: Google Analytics integration for tracking
- **Accessibility**: WCAG 2.1 AA compliant with semantic HTML

## 📁 Project Structure

```
dsg-react/
├── public/                      # Static assets
│   ├── people/                  # Team member photos
│   ├── brand-logo.svg          # Main logo
│   ├── brand-logo-white.svg    # Logo for dark theme
│   └── ...
├── scripts/                     # Utility scripts
│   ├── check-team-images.js    # Verify team images
│   └── download-team-images.sh # Download team photos
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── contact-us/         # Contact page
│   │   ├── data-safeguarders/  # Team page
│   │   ├── product-offering/   # Products page
│   │   ├── storefront/         # Solutions marketplace
│   │   ├── team/               # Team alias
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Home page
│   │   └── globals.css         # Global styles
│   └── components/             # Reusable components
│       ├── AnimatedShieldLogo.tsx  # Animated logo
│       ├── EnhancedHero.tsx        # Hero section
│       ├── Footer.tsx              # Site footer
│       ├── GoogleAnalytics.tsx     # GA integration
│       ├── Navbar.tsx              # Navigation
│       ├── ThemeProvider.tsx       # Theme context
│       └── ThemeToggle.tsx         # Theme switcher
├── .env.local.example          # Environment variables template
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies
```

## 🛠️ Tech Stack

### Core
- **[Next.js 15](https://nextjs.org/)** - React framework with App Router
- **[React 19](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Utility-first CSS

### Libraries
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[next-themes](https://github.com/pacocoursey/next-themes)** - Theme management

### Development
- **[ESLint](https://eslint.org/)** - Code linting
- **[Turbopack](https://turbo.build/pack)** - Fast bundler

## 🚦 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dsg-react
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your configuration:
```env
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📜 Available Scripts

```bash
# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Check team member images
node scripts/check-team-images.js
```

## 🎨 Website Pages

### 🏠 Home Page (`/`)
**Purpose**: Primary landing page showcasing DataSafeguard's value proposition

**Sections**:
- **Hero**: Animated shield logo with AI-powered data privacy messaging
- **Trust Indicators**: 500+ enterprise clients, key metrics
- **Core Solutions**: Data Privacy, Security, Compliance
- **Why Choose Us**: 94.5% accuracy, 10M+ records/hour, SOC 2 certified
- **How It Works**: 3-step process (Deploy → Detect → Protect)
- **Call-to-Actions**: Multiple conversion points

### 🛍️ Solutions Marketplace (`/storefront`)
**Purpose**: Browse and explore all security solutions

**Features**:
- Interactive category filtering (All, Privacy, Security, Compliance, Analytics)
- 9 comprehensive solutions with detailed cards
- Feature highlights and pricing
- Popular solution badges
- Direct contact CTAs

**Solutions**:
1. PII Detection & Redaction
2. Synthetic Identity Detection
3. Compliance Automation
4. Data Encryption Suite
5. Access Control Manager
6. Threat Detection Engine
7. Data Loss Prevention
8. Security Analytics
9. Audit Trail Manager

### 📦 Product Offering (`/product-offering`)
**Purpose**: Deep dive into product capabilities

**Sections**:
- Hero with key metrics
- Key features grid
- Interactive solution tabs (Data Privacy, Fraud Prevention, Compliance)
- Technical highlights with metrics
- Flexible deployment options (On-Premises, Cloud, Hybrid)
- Product CTA

### 👥 Team Page (`/data-safeguarders`)
**Purpose**: Showcase the expert team behind DataSafeguard

**Features**:
- Animated hero section
- Team statistics
- Category filtering (All, Founding Team, Leadership USA, Leadership India & Advisory)
- Animated profile cards with hover effects
- Social media integration
- Join team CTA

**Team Structure**:
- Founding Team (5 members)
- Leadership Team USA (4 members)
- Leadership Team India & Advisory (11 members)

### 📞 Contact Page (`/contact-us`)
**Purpose**: Lead generation and customer support

**Sections**:
- Hero with response time stats
- Contact information cards (Email, Phone, Headquarters)
- Full contact form with validation
- Business hours
- Global office locations
- Social media links
- Interactive Google Maps
- Emergency contact section

**Form Fields**:
- First Name, Last Name
- Email, Company
- Subject (dropdown)
- Message (textarea)
- Real-time validation

## 🎭 Theme System

The website supports light and dark themes with automatic system preference detection:

```typescript
import { useTheme } from '@/components/ThemeProvider';

function MyComponent() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  
  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle Theme
    </button>
  );
}
```

## 🖼️ Adding Team Images

1. Place images in `public/people/` directory
2. Use the naming convention: `firstname-lastname.jpg`
3. Run the check script:
```bash
node scripts/check-team-images.js
```

See `public/people/README.md` for detailed instructions.

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:

```typescript
theme: {
  extend: {
    colors: {
      primary: 'your-color',
      secondary: 'your-color',
    }
  }
}
```

### Fonts
Fonts are configured in `src/app/layout.tsx` using `next/font`.

### Animations
All animations use Framer Motion. Customize in individual components or create new animation variants.

## 📊 Analytics

Google Analytics is integrated via `GoogleAnalytics.tsx`. Set your GA ID in `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Other Platforms

```bash
# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `eslint.config.mjs` - ESLint rules
- `postcss.config.mjs` - PostCSS configuration

## 📝 Environment Variables

Create a `.env.local` file with:

```env
# Google Analytics
NEXT_PUBLIC_GA_ID=your-ga-id

# Add other environment variables as needed
```

## 🐛 Known Issues

- None currently reported

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6) - Trust, security, technology
- **Secondary**: Purple (#8B5CF6) - Innovation, AI
- **Accent**: Cyan (#06B6D4) - Data, digital
- **Success**: Green (#10B981) - Compliance, protection
- **Warning**: Orange (#F59E0B) - Alerts, attention

### Typography
- **Headings**: Geist Sans (Bold, 600-700 weight)
- **Body**: Geist Sans (Regular, 400 weight)
- **Code**: Geist Mono

### Brand Elements
- Animated shield logo representing data protection
- Gradient overlays for premium feel
- Particle animations for AI/tech theme
- Card-based layouts for content organization

## 🏢 Corporate Information

**Company**: DataSafeguard Inc.  
**Website**: [datasafeguard.ai](https://www.datasafeguard.ai)  
**Industry**: Cybersecurity, Data Privacy, AI/ML  
**Headquarters**: Bhubaneswar, Odisha, India  
**Global Presence**: USA (Edmonton, Canada), India (Bangalore, Mumbai, Pune, New Delhi)

### Key Metrics
- **Detection Accuracy**: 94.5%
- **Processing Speed**: 10M+ records/hour
- **Uptime SLA**: 99.9%
- **Enterprise Clients**: 500+
- **Certifications**: SOC 2 Type II, GDPR, HIPAA, CCPA compliant

## 🔗 Links

### Corporate
- [Live Website](https://www.datasafeguard.ai)
- [LinkedIn](https://www.linkedin.com/company/datasafeguardinc/)
- [Twitter/X](https://x.com/Data_Safeguard)
- [YouTube](https://www.youtube.com/@DataSafeguard)
- [Facebook](https://www.facebook.com/DataSafeguard2021)

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 💬 Support & Contact

**General Inquiries**: contact@datasafeguard.ai  
**Sales**: [Contact Form](https://www.datasafeguard.ai/contact-us)  
**Emergency Support**: +91 674 911 SAFE  
**Business Hours**: Monday-Friday, 9:00 AM - 6:00 PM IST

## 📊 Project Status

- ✅ **Phase 1**: Complete redesign of all main pages
- ✅ **Phase 2**: Responsive design implementation
- ✅ **Phase 3**: Animation and interaction design
- ✅ **Phase 4**: SEO and performance optimization
- 🚧 **Phase 5**: Analytics and tracking integration
- 📋 **Phase 6**: A/B testing and conversion optimization

---

**© 2025 DataSafeguard Inc. All rights reserved.**  
Built with ❤️ for enterprise data security
