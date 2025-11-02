# Development Guide

## Quick Start

### Prerequisites

- **Node.js**: v18.x or higher recommended
- **npm**: v8.x or higher (comes with Node.js)
- **Code Editor**: VS Code recommended for TypeScript support

### Installation

1. **Navigate to project directory**:
```bash
cd landing-page-code
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start development server**:
```bash
npm run dev
```

4. **Open in browser**:
```
http://localhost:5173
```

## Available Scripts

### Development

```bash
npm run dev
```
- Starts Vite development server
- Hot Module Replacement (HMR) enabled
- TypeScript type checking in watch mode
- Default port: 5173

### Build

```bash
npm run build
```
- Compiles TypeScript with `tsc`
- Builds production bundle with Vite
- Outputs to `dist/` directory
- Optimizes and minifies code

### Preview

```bash
npm run preview
```
- Serves production build locally
- Test production bundle before deployment
- Default preview port: 4173

### Linting

```bash
npm run lint
```
- Runs ESLint on TypeScript files
- Checks for code quality issues
- Reports unused disable directives
- Max warnings: 0 (strict mode)

## Project Configuration

### TypeScript Configuration

**File**: `tsconfig.json`

Key settings:
- **Target**: ES2020
- **Module**: ESNext
- **JSX**: react-jsx
- **Strict Mode**: Enabled
- **Path Aliases**: `@/` maps to `./src/`

**Usage of path alias**:
```tsx
// Instead of relative imports
import { Button } from "../../../components/ui/button"

// Use path alias
import { Button } from "@/components/ui/button"
```

### Vite Configuration

**File**: `vite.config.ts`

Features:
- React plugin with Fast Refresh
- Path resolution for `@` alias
- Build optimizations
- Dev server configuration

### Tailwind Configuration

**File**: `tailwind.config.js`

Configuration:
- **Content paths**: Scans `index.html` and `src/**/*.{ts,tsx}`
- **Theme extensions**: Custom colors, animations
- **Plugins**: `tailwindcss-animate`
- **Dark mode**: `class` strategy

**Adding custom theme values**:
```js
// tailwind.config.js
export default {
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
}
```

### Shadcn/ui Configuration

**File**: `components.json`

Settings:
- **Style**: default
- **Base color**: slate
- **CSS variables**: true
- **Component path**: `src/components/ui`
- **Utilities path**: `src/lib/utils.ts`
- **Tailwind config**: `tailwind.config.js`
- **Alias**: `@`

## Development Workflow

### Adding New Components

#### 1. Create Component File

**Location**: `src/components/ComponentName.tsx`

**Template**:
```tsx
export const ComponentName = () => {
  return (
    <section className="container py-20">
      <h2 className="text-3xl font-bold mb-6">
        Section Title
      </h2>
      <p className="text-muted-foreground">
        Section content goes here.
      </p>
    </section>
  )
}
```

#### 2. Add to App.tsx

```tsx
import { ComponentName } from "./components/ComponentName"

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ComponentName /> {/* Add in desired order */}
      <Footer />
    </>
  )
}
```

#### 3. Reference Content

Check `LANDING_COPY_ENGLISH.md` for appropriate section copy and integrate.

### Adding Shadcn/ui Components

**Using CLI**:
```bash
npx shadcn@latest add [component-name]
```

**Examples**:
```bash
# Add dialog component
npx shadcn@latest add dialog

# Add tabs component
npx shadcn@latest add tabs

# Add select component
npx shadcn@latest add select
```

**Manual Installation**:
1. Copy component code from [ui.shadcn.com](https://ui.shadcn.com)
2. Create file in `src/components/ui/[component-name].tsx`
3. Install any required dependencies

### Working with Icons

#### Using Lucide React

```tsx
import { Icon Name } from "lucide-react"

<IconName className="h-5 w-5" />
```

**Common icons**:
- `Menu`, `X` - Navigation
- `ChevronDown`, `ChevronUp` - Arrows
- `Mail`, `Phone` - Contact
- `Github`, `Twitter` - Social (or use Radix icons)

#### Using Radix Icons

```tsx
import { GitHubLogoIcon } from "@radix-ui/react-icons"

<GitHubLogoIcon className="h-5 w-5" />
```

#### Custom Icons

Add to `src/components/Icons.tsx`:
```tsx
export const CustomIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24">
    {/* SVG path */}
  </svg>
)
```

### Styling Guidelines

#### Tailwind Utilities

**Spacing**:
```tsx
<div className="p-4 md:p-8 lg:p-12">  {/* Responsive padding */}
<div className="space-y-4">            {/* Vertical spacing between children */}
<div className="gap-6">                {/* Grid/flex gap */}
```

**Typography**:
```tsx
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
<p className="text-muted-foreground text-lg">
```

**Colors**:
```tsx
<div className="bg-primary text-primary-foreground">  {/* Theme colors */}
<div className="bg-background text-foreground">       {/* Base colors */}
```

**Dark Mode**:
```tsx
<div className="bg-white dark:bg-slate-900">
<p className="text-gray-900 dark:text-gray-100">
```

#### Using cn() Utility

```tsx
import { cn } from "@/lib/utils"

<div className={cn(
  "base-classes",
  isActive && "active-classes",
  className  // External prop
)} />
```

### Form Development

#### Basic Form

```tsx
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

<form onSubmit={handleSubmit} className="space-y-4">
  <Input
    type="email"
    placeholder="your@email.com"
    required
  />
  <Button type="submit">
    Subscribe
  </Button>
</form>
```

#### Form with Validation

Consider using:
- **react-hook-form** - Form state management
- **zod** - Schema validation

```bash
npm install react-hook-form zod @hookform/resolvers
```

### Responsive Design

#### Breakpoints

Tailwind default breakpoints:
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Usage**:
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column mobile, 2 tablet, 3 desktop */}
</div>
```

#### Mobile-First Approach

```tsx
{/* Base styles are mobile */}
<div className="px-4 md:px-8 lg:px-12">
  {/* Progressively enhance for larger screens */}
</div>
```

### State Management

#### Local State (useState)

```tsx
import { useState } from "react"

export const Component = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      Toggle
    </button>
  )
}
```

#### Theme State (useTheme)

```tsx
import { useTheme } from "@/components/theme-provider"

const { theme, setTheme } = useTheme()
```

For complex state, consider:
- **Zustand** - Simple state management
- **React Context** - Shared state
- **TanStack Query** - Server state

## Content Management

### Updating Landing Page Copy

1. **Open** `LANDING_COPY_ENGLISH.md`
2. **Find section** corresponding to component
3. **Copy content** from markdown to component
4. **Maintain formatting** and structure

**Example**:
```tsx
// From LANDING_COPY_ENGLISH.md → SECTION 1: HERO

<h1 className="text-5xl font-bold">
  Professional AI Model Videos for Your Fashion Products.
  Without the $2,000-$5,000 Price Tag.
</h1>
```

### Content Placeholders

Use semantic placeholders during development:
```tsx
<h2>{{ SECTION_TITLE }}</h2>
<p>{{ SECTION_DESCRIPTION }}</p>
```

Replace with actual copy before deployment.

## Testing

### Manual Testing Checklist

- [ ] All sections render correctly
- [ ] Responsive layout (mobile, tablet, desktop)
- [ ] Dark mode functionality
- [ ] Navigation links work
- [ ] Forms validate properly
- [ ] Buttons trigger correct actions
- [ ] Images load properly
- [ ] No console errors
- [ ] Accessibility (keyboard navigation, screen reader)

### Browser Testing

Test in:
- Chrome/Edge (Chromium)
- Firefox
- Safari (if on macOS)
- Mobile browsers (iOS Safari, Chrome Mobile)

### Accessibility Testing

**Keyboard Navigation**:
- Tab through all interactive elements
- Enter/Space activate buttons
- Escape closes modals

**Screen Reader**:
- Proper heading hierarchy (h1 → h2 → h3)
- ARIA labels for icons
- Alt text for images

**Tools**:
- Chrome DevTools Lighthouse
- axe DevTools browser extension
- WAVE browser extension

## Performance Optimization

### Code Splitting

Vite automatically splits code by routes and dynamic imports.

**Lazy Loading**:
```tsx
import { lazy, Suspense } from "react"

const HeavyComponent = lazy(() => import("./HeavyComponent"))

<Suspense fallback={<div>Loading...</div>}>
  <HeavyComponent />
</Suspense>
```

### Image Optimization

1. **Use appropriate formats**: WebP for photos, SVG for graphics
2. **Compress images**: Use tools like TinyPNG, Squoosh
3. **Responsive images**: Serve different sizes for different screens
4. **Lazy loading**: Use `loading="lazy"` attribute

### Build Optimization

**Check bundle size**:
```bash
npm run build
```

Review the output:
```
dist/assets/index-[hash].js    XXX kB
dist/assets/index-[hash].css   XXX kB
```

**Analyze bundle**:
```bash
npm install -D rollup-plugin-visualizer
```

Add to `vite.config.ts`:
```ts
import { visualizer } from 'rollup-plugin-visualizer'

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true })
  ]
})
```

## Deployment

### Build for Production

```bash
npm run build
```

Output:
- `dist/` directory contains production build
- `index.html` - Entry point
- `assets/` - JS, CSS, and other assets

### Deployment Platforms

#### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Configure:
   - **Framework**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Deploy

#### Netlify

1. Push code to GitHub
2. Import repository in Netlify
3. Configure:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
4. Deploy

#### GitHub Pages

```bash
# Install gh-pages
npm install -D gh-pages

# Add to package.json scripts
"deploy": "gh-pages -d dist"

# Build and deploy
npm run build
npm run deploy
```

Update `vite.config.ts`:
```ts
export default defineConfig({
  base: '/repository-name/',  // For GitHub Pages
  // ...
})
```

### Environment Variables

Create `.env` file (never commit this):
```
VITE_API_URL=https://api.example.com
VITE_ANALYTICS_ID=your-analytics-id
```

**Usage**:
```tsx
const apiUrl = import.meta.env.VITE_API_URL
```

**Important**: Only `VITE_` prefixed variables are exposed to client.

## Troubleshooting

### Common Issues

#### Port Already in Use

```bash
# Change port in package.json
"dev": "vite --port 3000"

# Or kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

#### TypeScript Errors

```bash
# Clear TypeScript cache
rm -rf node_modules/.vite

# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P → "TypeScript: Restart TS Server"
```

#### Style Not Updating

```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Restart dev server
npm run dev
```

#### Build Errors

```bash
# Clean install
rm -rf node_modules package-lock.json
npm install

# Check for TypeScript errors
npx tsc --noEmit
```

### Getting Help

- **Vite Docs**: https://vitejs.dev
- **React Docs**: https://react.dev
- **Tailwind Docs**: https://tailwindcss.com
- **Shadcn/ui Docs**: https://ui.shadcn.com
- **TypeScript Docs**: https://www.typescriptlang.org/docs

## Code Quality

### ESLint Configuration

Current rules enforce:
- No unused variables
- Proper React hooks usage
- React refresh compatibility
- TypeScript best practices

**Customize** in `.eslintrc.cjs` or `eslint.config.js`

### Code Formatting (Optional)

**Install Prettier**:
```bash
npm install -D prettier prettier-plugin-tailwindcss
```

**Create** `.prettierrc`:
```json
{
  "semi": true,
  "singleQuote": false,
  "trailingComma": "es5",
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

**Add script**:
```json
"format": "prettier --write \"src/**/*.{ts,tsx}\""
```

### Pre-commit Hooks (Optional)

**Install Husky**:
```bash
npm install -D husky lint-staged
npx husky init
```

**Configure** `.husky/pre-commit`:
```bash
npx lint-staged
```

**Add to** `package.json`:
```json
"lint-staged": {
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
}
```

## VS Code Setup (Recommended)

### Extensions

Install these extensions:
- **ES7+ React/Redux/React-Native snippets** - Code snippets
- **Tailwind CSS IntelliSense** - Class autocomplete
- **TypeScript Vue Plugin (Volar)** - Better TS support
- **ESLint** - Linting integration
- **Prettier** - Code formatting

### Settings

**Create** `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "tailwindCSS.experimental.classRegex": [
    ["cn\\(([^)]*)\\)", "(?:'|\"|`)([^\"'`]*)(?:'|\"|`)"]
  ]
}
```

### Snippets

**Create** `.vscode/react.code-snippets`:
```json
{
  "React Component": {
    "prefix": "rfc",
    "body": [
      "export const ${1:ComponentName} = () => {",
      "  return (",
      "    <div>",
      "      $0",
      "    </div>",
      "  )",
      "}"
    ]
  }
}
```

## Next Steps

- Review [Component API](./COMPONENT_API.md) for component usage
- Check [Architecture](./ARCHITECTURE.md) for design patterns
- See [Project Structure](./PROJECT_STRUCTURE.md) for organization

---

**Happy Coding! 🚀**
