# ReelCraft Landing Page

> Professional AI-powered video generation service landing page built with React, TypeScript, Vite, and Tailwind CSS.

## Tech Stack

- **[React 18](https://react.dev/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Vite](https://vitejs.dev/)** - Build tool
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling
- **[Shadcn/ui](https://ui.shadcn.com/)** - Component library

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Visit `http://localhost:5173` to see the landing page.

## Documentation

### 📚 Complete Guides

- **[Project Structure](./docs/PROJECT_STRUCTURE.md)** - Directory organization and file conventions
- **[Component API](./docs/COMPONENT_API.md)** - Component documentation and usage examples
- **[Development Guide](./docs/DEVELOPMENT_GUIDE.md)** - Setup, workflow, and best practices
- **[Architecture](./docs/ARCHITECTURE.md)** - Design decisions and technical patterns

### 📝 Content Management

All landing page copy is centralized in:
- **[LANDING_COPY_ENGLISH.md](./LANDING_COPY_ENGLISH.md)** - Complete landing page content

Update this file to change any text on the page, then integrate changes into components.

## Project Overview

### Landing Page Sections

- [x] **Navbar** - Sticky navigation with mobile menu
- [x] **Hero** - Main headline and CTA
- [x] **Sponsors** - Partner/trust logos
- [x] **About** - Service description
- [x] **Statistics** - Key metrics
- [x] **How It Works** - 4-step process
- [x] **Features** - Feature highlights
- [x] **Services** - Service offerings
- [x] **CTA** - Call-to-action section
- [x] **Testimonials** - Customer reviews
- [x] **Team** - Team members
- [x] **Pricing** - Pricing plans ($4.99)
- [x] **Newsletter** - Email signup
- [x] **FAQ** - Frequently asked questions
- [x] **Footer** - Links and information

### Key Features

- ✅ **Fully Responsive** - Mobile, tablet, desktop
- ✅ **Dark Mode** - Theme toggle with persistence
- ✅ **TypeScript** - Type-safe codebase
- ✅ **Accessible** - ARIA-compliant components
- ✅ **SEO Ready** - Meta tags and semantic HTML
- ✅ **Fast** - Optimized Vite build
- ✅ **Modern UI** - Shadcn/ui components

## Development

### Available Scripts

```bash
npm run dev      # Start dev server with HMR
npm run build    # TypeScript compilation + production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Component Library

**UI Primitives** (`src/components/ui/`):
- Accordion, Avatar, Badge, Button, Card
- Dropdown Menu, Input, Navigation Menu, Sheet

**Landing Sections** (`src/components/`):
- About, CTA, FAQ, Features, Footer, Hero
- HowItWorks, Navbar, Newsletter, Pricing, Services
- Sponsors, Statistics, Team, Testimonials

**Utilities**:
- Icons library (81KB comprehensive set)
- Theme provider (dark/light mode)
- Mode toggle component

### Adding Components

```tsx
// 1. Create component
// src/components/NewSection.tsx
export const NewSection = () => (
  <section className="container py-20">
    {/* Content */}
  </section>
)

// 2. Import in App.tsx
import { NewSection } from "./components/NewSection"

// 3. Add to render tree
<NewSection />
```

See [Component API](./docs/COMPONENT_API.md) for detailed usage.

## Customization

### Updating Content

1. Edit `LANDING_COPY_ENGLISH.md` with new copy
2. Find corresponding component in `src/components/`
3. Replace hardcoded text with updated content
4. Test in browser

### Styling

All styles use **Tailwind CSS**:

```tsx
// Responsive padding
<div className="px-4 md:px-8 lg:px-12">

// Dark mode support
<div className="bg-white dark:bg-slate-900">

// Component variants (Button example)
<Button variant="outline" size="lg">
  Click Me
</Button>
```

See [Development Guide](./docs/DEVELOPMENT_GUIDE.md) for styling patterns.

### Theme Customization

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      brand: {
        primary: '#F596D3',
        secondary: '#D247BF',
      }
    }
  }
}
```

## Deployment

### Build for Production

```bash
npm run build
```

Output in `dist/` directory.

### Deploy to Platforms

**Vercel** (recommended):
- Connect GitHub repository
- Auto-deploy on push
- Zero configuration

**Netlify**:
- Import from Git
- Build command: `npm run build`
- Publish directory: `dist`

**GitHub Pages**:
```bash
npm install -D gh-pages
# Add to package.json: "deploy": "gh-pages -d dist"
npm run build && npm run deploy
```

See [Development Guide](./docs/DEVELOPMENT_GUIDE.md#deployment) for detailed deployment instructions.

## Tech Stack Details

### Core

- **React 18.3.1** with TypeScript
- **Vite 5.2.13** for fast builds
- **Tailwind CSS 3.4.4** for styling

### UI Components

- **Shadcn/ui** - Accessible components
- **Radix UI** - Headless primitives
- **Lucide React** - Icon library
- **class-variance-authority** - Variant management

### Development

- **TypeScript 5.4.5** with strict mode
- **ESLint** for code quality
- **PostCSS** for CSS processing

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Initial bundle: ~150KB (gzipped)
- Lighthouse score: 90+
- Fast HMR in development
- Optimized production build

## Accessibility

- ARIA-compliant components
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML structure
- Focus management

## Project Structure

```
landing-page-code/
├── docs/                    # 📚 Documentation
│   ├── PROJECT_STRUCTURE.md
│   ├── COMPONENT_API.md
│   ├── DEVELOPMENT_GUIDE.md
│   └── ARCHITECTURE.md
├── src/
│   ├── components/         # React components
│   │   ├── ui/            # Shadcn/ui primitives
│   │   └── [Sections]     # Landing page sections
│   ├── lib/               # Utilities
│   ├── App.tsx            # Main app component
│   └── main.tsx           # Entry point
├── LANDING_COPY_ENGLISH.md  # All landing page content
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Learn More

- **Project Organization**: [Project Structure](./docs/PROJECT_STRUCTURE.md)
- **Component Usage**: [Component API](./docs/COMPONENT_API.md)
- **Development Workflow**: [Development Guide](./docs/DEVELOPMENT_GUIDE.md)
- **Technical Decisions**: [Architecture](./docs/ARCHITECTURE.md)

## License

MIT

## Original Template

Based on [shadcn-landing-page](https://github.com/leoMirandaa/shadcn-landing-page) by [Leopoldo Miranda](https://github.com/leoMirandaa).
