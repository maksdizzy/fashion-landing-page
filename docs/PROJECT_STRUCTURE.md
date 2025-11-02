# Project Structure

## Overview

This is a React + TypeScript landing page for **ReelCraft**, an AI video generation service for fashion sellers. The project uses Vite for build tooling, Tailwind CSS for styling, and Shadcn/ui component library for UI primitives.

## Directory Structure

```
landing-page-code/
├── public/                     # Static assets
├── src/
│   ├── components/            # React components
│   │   ├── ui/               # Shadcn/ui primitive components
│   │   │   ├── accordion.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── input.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   └── sheet.tsx
│   │   │
│   │   ├── About.tsx          # About section
│   │   ├── Cta.tsx            # Call-to-action section
│   │   ├── FAQ.tsx            # Frequently asked questions
│   │   ├── Features.tsx       # Features showcase
│   │   ├── Footer.tsx         # Page footer
│   │   ├── Hero.tsx           # Hero section
│   │   ├── HeroCards.tsx      # Hero section cards
│   │   ├── HowItWorks.tsx     # How it works section
│   │   ├── Icons.tsx          # Icon components library
│   │   ├── Navbar.tsx         # Navigation bar
│   │   ├── Newsletter.tsx     # Newsletter signup
│   │   ├── Pricing.tsx        # Pricing section
│   │   ├── ScrollToTop.tsx    # Scroll to top button
│   │   ├── Services.tsx       # Services section
│   │   ├── Sponsors.tsx       # Sponsors/partners section
│   │   ├── Statistics.tsx     # Statistics display
│   │   ├── Team.tsx           # Team section
│   │   ├── Testimonials.tsx   # Customer testimonials
│   │   ├── mode-toggle.tsx    # Dark/light mode toggle
│   │   └── theme-provider.tsx # Theme context provider
│   │
│   ├── lib/
│   │   └── utils.ts           # Utility functions (cn helper)
│   │
│   ├── App.css                # Global styles
│   ├── App.tsx                # Main application component
│   ├── index.css              # Tailwind CSS imports
│   ├── main.tsx               # Application entry point
│   └── vite-env.d.ts          # Vite type definitions
│
├── docs/                      # Documentation (this directory)
│   ├── PROJECT_STRUCTURE.md   # This file
│   ├── COMPONENT_API.md       # Component documentation
│   ├── DEVELOPMENT_GUIDE.md   # Setup and development guide
│   └── ARCHITECTURE.md        # Architecture decisions
│
├── .claude/                   # Claude AI configuration
├── assets/                    # Additional assets
├── index.html                 # HTML entry point
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── tsconfig.node.json         # TypeScript config for Node
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── components.json            # Shadcn/ui configuration
├── LANDING_COPY_ENGLISH.md    # Complete landing page copy
└── README.md                  # Project overview
```

## Component Organization

### Page Sections (Order of Appearance)

The landing page components are rendered in the following order in `App.tsx`:

1. **Navbar** - Navigation header
2. **Hero** - Main headline and CTA
3. **Sponsors** - Partner/sponsor logos
4. **About** - About the service
5. **HowItWorks** - Process explanation
6. **Features** - Feature highlights
7. **Services** - Service offerings
8. **Cta** - Call-to-action section
9. **Testimonials** - Customer reviews
10. **Team** - Team members
11. **Pricing** - Pricing plans
12. **Newsletter** - Email signup
13. **FAQ** - Frequently asked questions
14. **Footer** - Footer with links
15. **ScrollToTop** - Floating scroll button

### UI Primitives (`src/components/ui/`)

These are reusable Shadcn/ui components built on Radix UI primitives:

- **accordion** - Collapsible content sections
- **avatar** - User avatar display
- **badge** - Status/label badges
- **button** - Button component with variants
- **card** - Container card component
- **dropdown-menu** - Dropdown menu component
- **input** - Form input field
- **navigation-menu** - Navigation menu component
- **sheet** - Slide-out panel (mobile menu)

### Utility Components

- **Icons.tsx** - Central icon library (81KB, comprehensive icon set)
- **mode-toggle.tsx** - Theme switcher button
- **theme-provider.tsx** - React context for theme management
- **ScrollToTop.tsx** - Scroll-to-top functionality

## File Conventions

### TypeScript/React Files

- **Component files**: PascalCase (e.g., `Hero.tsx`, `HowItWorks.tsx`)
- **Utility files**: camelCase (e.g., `utils.ts`)
- **UI primitives**: kebab-case (e.g., `dropdown-menu.tsx`)

### Configuration Files

- **JavaScript configs**: `.js` extension (e.g., `tailwind.config.js`)
- **TypeScript configs**: `.ts` extension (e.g., `vite.config.ts`)
- **JSON configs**: `.json` extension (e.g., `package.json`, `components.json`)

## Key Technologies

### Core Stack

- **React 18.3.1** - UI library
- **TypeScript 5.4.5** - Type safety
- **Vite 5.2.13** - Build tool and dev server

### Styling

- **Tailwind CSS 3.4.4** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **tailwindcss-animate** - Animation utilities
- **tailwind-merge** - Utility for merging Tailwind classes
- **clsx** - Conditional className helper

### UI Components

- **Shadcn/ui** - Component library
- **Radix UI** - Headless UI primitives
  - `@radix-ui/react-accordion`
  - `@radix-ui/react-avatar`
  - `@radix-ui/react-dialog`
  - `@radix-ui/react-dropdown-menu`
  - `@radix-ui/react-icons`
  - `@radix-ui/react-navigation-menu`
  - `@radix-ui/react-slot`
- **lucide-react** - Icon library
- **class-variance-authority** - Component variant management

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript linting rules

## Content Management

### LANDING_COPY_ENGLISH.md

This file contains all the copy for the landing page, organized by sections:

- Header/Navigation copy
- Hero section copy with multiple headline variants
- Social proof content
- Problem agitation copy
- How it works steps
- Features and benefits
- Pricing details
- FAQ content
- Final CTA copy
- Footer content
- Email templates
- SEO metadata
- Microcopy and UI elements

**Integration**: Components should reference this file for copy updates to maintain single source of truth for content.

## Build Output

### Development

```bash
npm run dev
# Starts Vite dev server with HMR
```

### Production

```bash
npm run build
# 1. TypeScript compilation (tsc)
# 2. Vite production build
# Output: dist/ directory
```

### Preview

```bash
npm run preview
# Preview production build locally
```

## Asset Management

- **Static assets**: Place in `public/` directory
- **Component assets**: Import directly in components
- **Icons**: Use lucide-react or custom Icons.tsx components

## Configuration Files

### components.json

Shadcn/ui configuration:
- Component installation path
- Tailwind CSS configuration path
- TypeScript configuration
- Alias setup

### tailwind.config.js

Tailwind CSS configuration:
- Content paths for purging
- Theme customization
- Plugin configuration
- Animation setup

### vite.config.ts

Vite configuration:
- React plugin setup
- Build optimization
- Path aliases
- Dev server settings

### tsconfig.json

TypeScript configuration:
- Compiler options
- Module resolution
- Path mapping
- Type checking rules

## Environment

- **Node.js**: Required for development
- **Package Manager**: npm (as evidenced by package-lock.json)
- **Browser Support**: Modern browsers (ES2015+)

## Version Control

**Note**: This project does not have a git repository initialized yet. The git-related features mentioned in documentation are for future reference when version control is set up.

## Next Steps

For detailed information on:
- Component APIs and props → See [COMPONENT_API.md](./COMPONENT_API.md)
- Development setup and workflow → See [DEVELOPMENT_GUIDE.md](./DEVELOPMENT_GUIDE.md)
- Architecture decisions and patterns → See [ARCHITECTURE.md](./ARCHITECTURE.md)
