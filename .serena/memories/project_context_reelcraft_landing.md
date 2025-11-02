# ReelCraft Landing Page - Project Context

## Project Information
- **Repository**: landing-page-code (shadcn template)
- **Purpose**: AI video generation service landing page for Etsy fashion sellers
- **Primary Spec**: LANDING_COPY_ENGLISH.md (1041 lines)
- **Current Status**: Production-ready, build successful

## Technology Context
- **Framework**: React 18.3.1 + TypeScript 5.4.5
- **Build Tool**: Vite 5.2.13
- **Styling**: Tailwind CSS 3.4.4
- **Component Library**: Shadcn/ui (Radix UI primitives)
- **Package Manager**: npm

## Build Commands
```bash
npm run dev          # Development server
npm run build        # Production build
npm run preview      # Preview production build
```

## Key Directories
```
landing-page-code/
├── src/
│   ├── components/       # React components
│   │   ├── ui/          # Shadcn components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── SocialProof.tsx
│   │   ├── ProblemAgitation.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Features.tsx
│   │   ├── Pricing.tsx
│   │   ├── FAQ.tsx
│   │   ├── Cta.tsx
│   │   └── Footer.tsx
│   ├── assets/          # Media files
│   │   ├── hero/
│   │   └── social-proof/
│   └── App.tsx          # Main component
├── dist/                # Production build output
├── LANDING_COPY_ENGLISH.md  # Complete specifications
└── package.json
```

## Component Architecture

### Current Landing Page Structure (in order)
1. **Navbar**: Navigation with ReelCraft branding
2. **Hero**: Before/after split-screen with video
3. **SocialProof**: Stats grid + 6-slide carousel
4. **ProblemAgitation**: Traditional vs AI comparison
5. **HowItWorks**: 4-step process explanation
6. **Features**: 3 benefit cards
7. **Pricing**: Single $4.99 tier
8. **FAQ**: 9 questions + answers
9. **Cta**: Final call-to-action section
10. **Footer**: Links + newsletter signup
11. **ScrollToTop**: Utility button

### Removed Components (from original template)
- Sponsors.tsx
- About.tsx
- Services.tsx
- Team.tsx
- Testimonials.tsx

## Media Assets

### Hero Section (2 files)
- `src/assets/hero/hero-before.jpg` - Static product photo
- `src/assets/hero/hero-after.mp4` - AI-generated video

### Social Proof Section (12 files)
- `src/assets/social-proof/1-before.jpg` through `6-before.jpg`
- `src/assets/social-proof/1-after.mp4` through `6-after.mp4`

## Shadcn Components Installed
- carousel (before/after slideshow)
- table (comparison table)
- dialog (modal for photo comparison)
- card (content containers)
- badge (labels and highlights)
- button (CTAs)
- separator (dividers)

## Content Specifications

### Brand Identity
- **Name**: ReelCraft
- **Tagline**: "Turn Photos Into Sales"
- **Target Audience**: Etsy fashion sellers
- **Value Proposition**: $4.99 AI video generation vs $2,000+ traditional shoots
- **Key Benefit**: 10-second product videos with models

### Key Metrics (from Social Proof)
- 10,000+ videos created
- +2.8x conversion increase
- 73% more favorites
- +156% sales boost

### Pricing Structure
- **Price**: $4.99 per video generation
- **Comparison**: Traditional shoot costs $2,000+
- **Savings**: 99% cost reduction
- **Guarantee**: 7-day full refund

### Content Sections
All copy sourced from LANDING_COPY_ENGLISH.md with exact implementation

## Design Patterns

### Responsive Breakpoints
- **Mobile**: Default (< 768px)
- **Tablet**: md: prefix (≥ 768px)
- **Desktop**: lg: prefix (≥ 1024px)
- **Wide**: xl: prefix (≥ 1280px)

### Color Scheme
- Primary gradients: purple-to-pink, blue-to-cyan
- Success: green-600
- Warning: red-600
- Neutral: muted-foreground

### Typography Hierarchy
- Hero headline: text-5xl md:text-6xl lg:text-7xl
- Section titles: text-3xl md:text-4xl
- Card titles: text-xl md:text-2xl
- Body text: text-base

## Development Notes

### Known Working Patterns
1. Video autoplay requires: `autoPlay loop muted playsInline`
2. Assets must be in `src/assets/` for Vite bundling
3. Folder names should use kebab-case (no spaces)
4. Mobile-first responsive design with md:, lg:, xl: breakpoints
5. Gradient text: `bg-gradient-to-r from-{color} to-{color} bg-clip-text text-transparent`

### Potential Future Enhancements
- Performance optimization (lazy loading for videos)
- Analytics integration
- A/B testing framework
- Form submission backend integration
- Newsletter signup API connection
- Payment processing integration
- User testimonials database

## Production Build Output
```
dist/assets/index-g35_gEnr.css    35.13 kB │ gzip:   7.18 kB
dist/assets/index-CjiQyCjl.js    346.57 kB │ gzip: 109.85 kB
```

Build time: 1.43s
Status: ✅ Ready for deployment

## Compliance Checklist
- ✅ All 10 sections implemented per LANDING_COPY_ENGLISH.md
- ✅ All copy matches specification exactly
- ✅ All shadcn components properly installed
- ✅ All media assets properly imported
- ✅ Responsive design across all breakpoints
- ✅ TypeScript compilation successful
- ✅ Production build successful
- ✅ No runtime errors
- ✅ No console warnings

## Related Documentation
- See `reelcraft_landing_transformation_session` for detailed session log
- See `reelcraft_component_patterns` for reusable implementation patterns
