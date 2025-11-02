# Architecture Documentation

## Overview

This document describes the architectural decisions, design patterns, and technical considerations for the ReelCraft landing page application.

## Architecture Principles

### 1. Component-Based Architecture

**Philosophy**: Separation of concerns with reusable, self-contained components.

**Benefits**:
- Modularity and reusability
- Easier testing and maintenance
- Clear boundaries and responsibilities
- Scalable codebase

**Implementation**:
```
Landing Sections (Business Logic)
    ↓
UI Primitives (Shadcn/ui)
    ↓
Base Components (Radix UI)
    ↓
HTML Elements
```

### 2. Composition Over Configuration

**Pattern**: Compound components with flexible composition.

**Example**:
```tsx
// Instead of complex configuration
<Card config={{ title: "...", description: "...", footer: "..." }} />

// Use composition
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

**Benefits**:
- Maximum flexibility
- Better TypeScript inference
- Easier to understand and modify
- No prop drilling

### 3. Design System Integration

**Shadcn/ui Approach**: Copy-paste components, not npm dependencies.

**Rationale**:
- Full control over component code
- No black box abstractions
- Customization without forking
- No version conflicts

**Trade-offs**:
- Manual updates required
- Larger codebase (components included)
- ✅ Greater control and flexibility

### 4. Type Safety

**TypeScript Everywhere**: All components and utilities are typed.

**Benefits**:
- Compile-time error detection
- Better IDE autocomplete
- Self-documenting code
- Refactoring confidence

**Example**:
```tsx
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  asChild?: boolean
}
```

## Technology Stack Decisions

### Build Tool: Vite

**Why Vite over Create React App?**

| Aspect | Vite | CRA |
|--------|------|-----|
| Dev Server | Instant start (ESBuild) | Slow start (Webpack) |
| HMR | Lightning fast | Slower updates |
| Build | Rollup (optimized) | Webpack (larger bundles) |
| Config | Minimal, extensible | Ejecting required |
| Modern | ES modules native | Polyfills for older code |

**Decision**: Vite for superior developer experience and performance.

### Styling: Tailwind CSS

**Why Tailwind over other CSS solutions?**

**Alternatives Considered**:
- CSS Modules - ❌ More boilerplate, no design system
- Styled Components - ❌ Runtime cost, larger bundle
- CSS-in-JS (Emotion) - ❌ Runtime overhead
- Plain CSS - ❌ No design system, hard to maintain

**Tailwind Advantages**:
- ✅ Zero runtime cost
- ✅ Design system built-in
- ✅ Automatic purging (small bundle)
- ✅ Consistent spacing/colors
- ✅ Responsive design utilities
- ✅ Dark mode support

**Trade-off**: Longer className strings vs. superior maintainability.

### UI Library: Shadcn/ui + Radix UI

**Why this combination?**

**Shadcn/ui Benefits**:
- Accessible by default (Radix primitives)
- Customizable source code (not npm package)
- Tailwind-based styling
- TypeScript support
- Production-ready components

**Radix UI Benefits**:
- ARIA-compliant primitives
- Keyboard navigation
- Focus management
- Screen reader support
- Unstyled (bring your own styles)

**Alternative Considered**: Material UI, Chakra UI
- ❌ Opinionated styling
- ❌ Harder to customize
- ❌ Larger bundle sizes

### State Management

**Current**: React built-in (useState, useContext)

**Rationale**:
- Landing page has minimal state
- Theme state via Context API
- Form state locally scoped
- No need for Redux/Zustand yet

**When to upgrade**:
- Multiple user interactions with shared state
- Complex form state across sections
- Authentication state management
- Real-time data synchronization

**Recommended**: Zustand or TanStack Query when needed.

## Design Patterns

### 1. Compound Components

**Used in**: Card, Accordion, Sheet, DropdownMenu

**Pattern**:
```tsx
// Parent provides context
<Card>
  {/* Children access context implicitly */}
  <CardHeader>...</CardHeader>
  <CardContent>...</CardContent>
</Card>
```

**Benefits**:
- Flexible component composition
- Implicit context sharing
- Clear component relationships
- No prop drilling

### 2. Render Props (Slot Pattern)

**Used in**: Button component

**Pattern**:
```tsx
<Button asChild>
  <a href="/signup">Sign Up</a>
</Button>
// Renders: <a class="button-styles" href="/signup">Sign Up</a>
```

**Benefits**:
- Polymorphic components
- Maintain styles while changing element
- Better semantic HTML
- Accessibility preservation

### 3. Class Variance Authority (CVA)

**Used in**: Button, Badge variants

**Pattern**:
```tsx
const buttonVariants = cva(
  "base-classes",  // Always applied
  {
    variants: {
      variant: {
        default: "default-styles",
        outline: "outline-styles",
      },
      size: {
        sm: "small-styles",
        lg: "large-styles",
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
)
```

**Benefits**:
- Type-safe variants
- Automatic TypeScript inference
- Consistent variant application
- Composable styles

### 4. Content-Component Separation

**Pattern**: Content in `LANDING_COPY_ENGLISH.md`, logic in components

**Rationale**:
- Single source of truth for copy
- Non-developers can update content
- A/B testing different copy
- Internationalization ready

**Implementation**:
```tsx
// Component focuses on structure and behavior
export const Hero = () => {
  return (
    <section>
      <h1>{/* Copy from LANDING_COPY_ENGLISH.md */}</h1>
    </section>
  )
}
```

**Future Enhancement**: Content management system integration.

### 5. CSS Utility Composition (cn)

**Pattern**: Merge Tailwind classes with conflict resolution

**Implementation**:
```tsx
import { cn } from "@/lib/utils"

<div className={cn(
  "px-4 py-2",              // Base styles
  variant === "primary" && "bg-blue-500",
  className                  // External override
)} />
```

**Why This Matters**:
- Tailwind classes can conflict (`px-4` + `px-6` = both applied ❌)
- `twMerge` resolves conflicts (`px-4` + `px-6` = `px-6` ✅)
- `clsx` handles conditional classes cleanly

## File Organization

### Directory Structure Philosophy

**Principle**: Organize by feature/domain, not by file type.

**Current Structure**:
```
src/
├── components/
│   ├── ui/          # Reusable primitives (horizontal)
│   └── [Sections]   # Feature-specific (vertical)
├── lib/             # Utilities and helpers
└── [feature files]
```

**Why Not**:
```
src/
├── buttons/
├── cards/
├── sections/
└── utils/
```

**Rationale**:
- Components are imported together
- Co-location improves discoverability
- Clear separation: primitives vs. features
- Easier to find related code

### Import Path Aliases

**Configuration**: `@/` maps to `./src/`

**Usage**:
```tsx
// ❌ Without alias
import { Button } from "../../../components/ui/button"

// ✅ With alias
import { Button } from "@/components/ui/button"
```

**Benefits**:
- Cleaner imports
- Easier refactoring
- Consistent import paths
- Better autocomplete

## Styling Architecture

### Tailwind Layers

```css
/* src/index.css */
@tailwind base;      /* CSS reset and element defaults */
@tailwind components; /* Component classes */
@tailwind utilities;  /* Utility classes */
```

**Custom Styles**:
```css
@layer base {
  /* Global element styles */
  h1 { @apply text-4xl font-bold; }
}

@layer components {
  /* Custom component classes */
  .btn-primary { @apply bg-blue-500 text-white; }
}

@layer utilities {
  /* Custom utilities */
  .text-shadow { text-shadow: 2px 2px 4px rgba(0,0,0,0.1); }
}
```

### Theme System

**CSS Variables** (Shadcn/ui approach):

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  /* ... */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  /* ... */
}
```

**Usage in Tailwind**:
```tsx
<div className="bg-background text-foreground">
  {/* Automatically adapts to theme */}
</div>
```

**Benefits**:
- Single toggle switches entire theme
- No JavaScript for theme colors
- CSS variables cascade naturally
- Framework-agnostic approach

## Performance Considerations

### Code Splitting

**Vite Automatic Splitting**:
- Vendor chunks (React, etc.)
- Dynamic imports
- Route-based splitting (future)

**Optimization**:
```tsx
// Lazy load heavy components
const HeavyComponent = lazy(() => import("./HeavyComponent"))

<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>
```

### Bundle Size Management

**Current Strategy**:
- Tailwind purges unused classes
- Tree-shaking removes dead code
- Vite optimizes dependencies

**Monitoring**:
```bash
npm run build
# Check dist/ size

# Analyze with visualizer
npm install -D rollup-plugin-visualizer
```

**Targets**:
- Initial JS: < 150 KB gzipped
- Initial CSS: < 50 KB gzipped
- Total page load: < 200 KB

### Image Optimization

**Strategy**:
- Use WebP format (fallback to PNG/JPG)
- Responsive images via srcset
- Lazy loading for below-fold images
- Compress all images before commit

**Future**: Consider image CDN (Cloudinary, imgix).

## Dark Mode Architecture

**Implementation**: Class-based strategy

**Why Class-Based vs. Media Query**?

**Class-Based** (chosen):
```tsx
<html class="dark">  {/* User preference */}
```
- ✅ User can override system preference
- ✅ Persisted across sessions
- ✅ Instant toggle without reload

**Media Query**:
```css
@media (prefers-color-scheme: dark)
```
- ❌ Only system preference
- ❌ No user control
- ❌ Requires CSS media queries

**Storage**: localStorage (`ui-theme` key)

**Flow**:
```
User clicks toggle
    ↓
ThemeProvider updates state
    ↓
localStorage saves preference
    ↓
HTML class updated (dark/light)
    ↓
Tailwind applies dark: variants
```

## Accessibility Architecture

### ARIA Patterns

**Navigation**:
- Semantic `<nav>` elements
- Proper `<header>`, `<main>`, `<footer>`
- Skip to content link

**Interactive Elements**:
- Keyboard accessible (Tab, Enter, Escape)
- Focus visible styles
- ARIA labels for icon buttons

**Forms**:
- Label association
- Error messages linked
- Required field indicators

### Screen Reader Support

**Best Practices Applied**:
- Heading hierarchy (h1 → h2 → h3)
- Alt text for images
- `sr-only` class for screen-reader-only text
- ARIA live regions for dynamic content

**Example**:
```tsx
<button className="icon-button">
  <MenuIcon />
  <span className="sr-only">Open menu</span>
</button>
```

## Responsive Design Strategy

### Mobile-First Approach

**Philosophy**: Design for mobile, enhance for desktop.

**Implementation**:
```tsx
<div className="
  px-4           {/* Base: mobile */}
  md:px-8        {/* Medium: tablet */}
  lg:px-12       {/* Large: desktop */}
">
```

**Why Mobile-First**?
- Majority of traffic is mobile
- Forces content prioritization
- Progressive enhancement mindset
- Easier to add than remove

### Breakpoint Strategy

**Tailwind Defaults**:
- `sm: 640px` - Small tablets
- `md: 768px` - Tablets
- `lg: 1024px` - Small desktops
- `xl: 1280px` - Large desktops
- `2xl: 1536px` - Extra large screens

**Container Strategy**:
```tsx
<section className="container">
  {/* Max-width with centered content */}
</section>
```

**Container Breakpoints**:
- Mobile: 100% width (no max-width)
- sm: 640px max
- md: 768px max
- lg: 1024px max
- xl: 1280px max

## Security Considerations

### XSS Prevention

**React's Built-in Protection**: JSX escapes by default.

**Dangerous Scenarios**:
```tsx
// ❌ NEVER do this with user input
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ React escapes automatically
<div>{userInput}</div>
```

### Environment Variables

**Client-Side Exposure**: Only `VITE_` prefixed vars.

**Safe Pattern**:
```
VITE_API_URL=https://api.example.com    ✅ Exposed
API_SECRET_KEY=secret123                ❌ Not exposed
```

### HTTPS Enforcement

**Production**: Always serve over HTTPS.
**Deployment**: Configure on hosting platform level.

## Testing Strategy

### Current State

**Manual Testing**: Checklist-based QA process.

### Future Testing Layers

**Recommended Stack**:

1. **Unit Tests** - Vitest
   ```bash
   npm install -D vitest @testing-library/react @testing-library/jest-dom
   ```

2. **Component Tests** - Testing Library
   ```tsx
   test('button renders correctly', () => {
     render(<Button>Click me</Button>)
     expect(screen.getByText('Click me')).toBeInTheDocument()
   })
   ```

3. **E2E Tests** - Playwright or Cypress
   ```ts
   test('user can navigate to pricing', async ({ page }) => {
     await page.goto('/')
     await page.click('text=Pricing')
     await expect(page).toHaveURL('/#pricing')
   })
   ```

4. **Visual Regression** - Chromatic or Percy
   - Screenshot comparison
   - Catch unintended visual changes

## Future Architecture Considerations

### Internationalization (i18n)

**When Needed**: Multi-language support

**Recommended**: react-i18next

**Preparation**:
- Content already separated (LANDING_COPY_ENGLISH.md)
- Easy to create LANDING_COPY_SPANISH.md, etc.

### CMS Integration

**When Needed**: Non-technical content updates

**Options**:
- **Headless CMS**: Contentful, Strapi, Sanity
- **Git-based**: Netlify CMS, Forestry

**Current Advantage**: Markdown content already structured for CMS.

### Analytics

**Recommended Integration**:
- Google Analytics 4
- Plausible (privacy-friendly)
- Mixpanel (event tracking)

**Pattern**:
```tsx
// Track button clicks
<Button onClick={() => {
  analytics.track('CTA Clicked', { location: 'hero' })
  handleClick()
}}>
  Get Started
</Button>
```

### Form Handling

**Current**: Basic HTML forms

**Future Enhancement**:
- **react-hook-form** - Form state management
- **zod** - Schema validation
- **Backend integration** - API for form submission

### Authentication (If Needed)

**Options**:
- Auth0 - Enterprise solution
- Supabase - Open source, easy integration
- Clerk - Developer-friendly

**Not Currently Required**: Landing page only.

## Deployment Architecture

### Static Site Generation

**Current**: SPA (Single Page Application)

**Build Output**:
```
dist/
├── index.html          # Entry point
├── assets/
│   ├── index.[hash].js   # Main JavaScript bundle
│   ├── index.[hash].css  # Styles
│   └── [images]          # Optimized images
```

**Hosting Requirements**:
- Static file hosting
- HTTPS support
- Custom domain support
- Optional: CDN for global distribution

### Recommended Platforms

1. **Vercel**
   - Zero-config deployment
   - Automatic previews for PRs
   - Edge network CDN
   - Built-in analytics

2. **Netlify**
   - Drag-and-drop deployment
   - Form handling
   - Serverless functions
   - Split testing

3. **Cloudflare Pages**
   - Global CDN
   - Unlimited bandwidth
   - Fast builds
   - Free tier generous

### Environment-Based Configuration

**Setup**:
```
.env.local          # Local development (gitignored)
.env.production     # Production settings (gitignored)
```

**Usage**:
```tsx
const apiUrl = import.meta.env.VITE_API_URL
const isDev = import.meta.env.DEV
const isProd = import.meta.env.PROD
```

## Monitoring and Observability

### Performance Monitoring

**Recommended Tools**:
- Lighthouse CI - Automated performance checks
- Web Vitals - Core Web Vitals tracking
- Sentry - Error tracking

**Core Web Vitals Targets**:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

### Error Tracking

**Future Integration**: Sentry or LogRocket

**Pattern**:
```tsx
// Error boundary for graceful failures
<ErrorBoundary fallback={<ErrorPage />}>
  <App />
</ErrorBoundary>
```

## Maintenance Strategy

### Dependency Updates

**Regular Updates**: Monthly review of dependencies

**Process**:
```bash
# Check for updates
npm outdated

# Update safely (minor/patch)
npm update

# Major updates (one at a time)
npm install react@latest
npm run build  # Test build
npm run dev    # Test functionality
```

### Documentation Maintenance

**Keep Updated**:
- Update docs when architecture changes
- Document new patterns as they emerge
- Review quarterly for accuracy

### Code Review Checklist

**Before Merging**:
- [ ] TypeScript compiles without errors
- [ ] ESLint passes
- [ ] Components follow established patterns
- [ ] Accessibility standards met
- [ ] Responsive on mobile/tablet/desktop
- [ ] Dark mode works correctly
- [ ] Documentation updated if needed

## Conclusion

This architecture prioritizes:
1. **Developer Experience** - Fast, type-safe, modern tooling
2. **Performance** - Optimized bundle, fast load times
3. **Maintainability** - Clear patterns, good documentation
4. **Accessibility** - Standards-compliant, inclusive design
5. **Scalability** - Room to grow without architectural changes

---

**Related Documentation**:
- [Project Structure](./PROJECT_STRUCTURE.md) - File organization
- [Component API](./COMPONENT_API.md) - Component usage
- [Development Guide](./DEVELOPMENT_GUIDE.md) - Development workflow
