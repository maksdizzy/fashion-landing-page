# Component API Documentation

## Overview

This document describes all components in the landing page, their props, usage patterns, and integration with the LANDING_COPY_ENGLISH.md content.

## Table of Contents

- [Landing Page Sections](#landing-page-sections)
- [UI Primitives](#ui-primitives)
- [Utility Components](#utility-components)
- [Content Integration](#content-integration)

---

## Landing Page Sections

### Navbar

**File**: `src/components/Navbar.tsx`

**Description**: Sticky navigation header with responsive mobile menu and dark mode toggle.

**Props**: None (self-contained component)

**Features**:
- Sticky positioning with backdrop
- Responsive: Desktop navigation + Mobile sheet menu
- Dark mode toggle integration
- Route configuration via `routeList` array

**Internal State**:
```typescript
const [isOpen, setIsOpen] = useState<boolean>(false); // Mobile menu state
```

**Route Configuration**:
```typescript
interface RouteProps {
  href: string;    // Anchor link (e.g., "#features")
  label: string;   // Display text
}
```

**Usage**:
```tsx
<Navbar />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → HEADER/NAVIGATION section

---

### Hero

**File**: `src/components/Hero.tsx`

**Description**: Main hero section with headline, CTA buttons, and hero cards.

**Props**: None (self-contained component)

**Features**:
- Two-column layout (content + HeroCards)
- Gradient text effects
- Primary and secondary CTAs
- Responsive grid layout

**Usage**:
```tsx
<Hero />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → SECTION 1: HERO

---

### HeroCards

**File**: `src/components/HeroCards.tsx`

**Description**: Animated card grid displayed alongside hero content.

**Props**: None (self-contained component)

**Features**:
- Grid of feature preview cards
- Visual enhancement for hero section
- Responsive layout

**Usage**:
```tsx
<HeroCards />
```

---

### Sponsors

**File**: `src/components/Sponsors.tsx`

**Description**: Partner/sponsor logo showcase section.

**Props**: None (self-contained component)

**Usage**:
```tsx
<Sponsors />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → Trust badges and social proof

---

### About

**File**: `src/components/About.tsx`

**Description**: About the service section with description and stats.

**Props**: None (self-contained component)

**Usage**:
```tsx
<About />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → SECTION 2: SOCIAL PROOF

---

### Statistics

**File**: `src/components/Statistics.tsx`

**Description**: Key statistics display component.

**Props**: None (self-contained component)

**Features**:
- Displays key metrics and numbers
- Often embedded within other sections

**Usage**:
```tsx
<Statistics />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → Stats section (10,000+ videos, +2.8x conversion, etc.)

---

### HowItWorks

**File**: `src/components/HowItWorks.tsx`

**Description**: Step-by-step process explanation.

**Props**: None (self-contained component)

**Features**:
- Multi-step process visualization
- Icon + text format
- Sequential flow layout

**Usage**:
```tsx
<HowItWorks />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → SECTION 4: HOW IT WORKS

---

### Features

**File**: `src/components/Features.tsx`

**Description**: Feature highlights section with cards.

**Props**: None (self-contained component)

**Features**:
- Grid layout of feature cards
- Icon + title + description format
- Responsive grid

**Usage**:
```tsx
<Features />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → SECTION 5: FEATURES & BENEFITS

---

### Services

**File**: `src/components/Services.tsx`

**Description**: Service offerings section.

**Props**: None (self-contained component)

**Usage**:
```tsx
<Services />
```

**Content Integration**: Related to features and benefits in copy document

---

### Cta (Call-to-Action)

**File**: `src/components/Cta.tsx`

**Description**: Mid-page call-to-action section.

**Props**: None (self-contained component)

**Features**:
- Prominent CTA button
- Attention-grabbing design
- Strategic placement between content sections

**Usage**:
```tsx
<Cta />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → SECTION 8: FINAL CTA

---

### Testimonials

**File**: `src/components/Testimonials.tsx`

**Description**: Customer testimonials/reviews section.

**Props**: None (self-contained component)

**Features**:
- Customer quote cards
- Avatar/attribution display
- Grid or carousel layout

**Usage**:
```tsx
<Testimonials />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → SECTION 2: Before/After Carousel testimonials

---

### Team

**File**: `src/components/Team.tsx`

**Description**: Team members showcase section.

**Props**: None (self-contained component)

**Features**:
- Team member cards
- Avatar + name + role layout
- Social links integration

**Usage**:
```tsx
<Team />
```

---

### Pricing

**File**: `src/components/Pricing.tsx`

**Description**: Pricing plans section.

**Props**: None (self-contained component)

**Features**:
- Pricing card layout
- Feature comparison
- CTA integration
- Highlight popular plans

**Usage**:
```tsx
<Pricing />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → SECTION 6: PRICING

---

### Newsletter

**File**: `src/components/Newsletter.tsx`

**Description**: Email newsletter signup form.

**Props**: None (self-contained component)

**Features**:
- Email input field
- Submit button
- Inline form layout

**Usage**:
```tsx
<Newsletter />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → Newsletter section in FOOTER

---

### FAQ

**File**: `src/components/FAQ.tsx`

**Description**: Frequently asked questions section with accordion.

**Props**: None (self-contained component)

**Features**:
- Accordion-style Q&A
- Collapsible answers
- Structured content

**Usage**:
```tsx
<FAQ />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → SECTION 7: FAQ

---

### Footer

**File**: `src/components/Footer.tsx`

**Description**: Page footer with links and information.

**Props**: None (self-contained component)

**Features**:
- Multi-column link layout
- Social media links
- Copyright information
- Newsletter integration

**Usage**:
```tsx
<Footer />
```

**Content Integration**: Maps to `LANDING_COPY_ENGLISH.md` → FOOTER section

---

### ScrollToTop

**File**: `src/components/ScrollToTop.tsx`

**Description**: Floating scroll-to-top button.

**Props**: None (self-contained component)

**Features**:
- Fixed position button
- Appears after scrolling
- Smooth scroll to top

**Usage**:
```tsx
<ScrollToTop />
```

---

## UI Primitives

These are Shadcn/ui components based on Radix UI. They follow the compound component pattern and support extensive customization via props and className.

### Button

**File**: `src/components/ui/button.tsx`

**Description**: Versatile button component with multiple variants.

**Props**:
```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
  asChild?: boolean  // Renders as Slot component for composition
}
```

**Variants**:
- `default` - Primary button style
- `destructive` - Danger/delete actions
- `outline` - Outlined button
- `secondary` - Secondary action style
- `ghost` - Minimal button style
- `link` - Text link style

**Sizes**:
- `default` - Standard size (h-10)
- `sm` - Small size (h-9)
- `lg` - Large size (h-11)
- `icon` - Square icon button (h-10 w-10)

**Usage**:
```tsx
// Basic usage
<Button>Click me</Button>

// With variant and size
<Button variant="outline" size="lg">
  Large Outline Button
</Button>

// As child (composition pattern)
<Button asChild>
  <a href="/signup">Sign Up</a>
</Button>

// Using buttonVariants helper (for non-button elements)
import { buttonVariants } from "./ui/button"

<a className={buttonVariants({ variant: "ghost" })}>
  Link styled as button
</a>
```

---

### Card

**File**: `src/components/ui/card.tsx`

**Description**: Container component for content grouping.

**Compound Components**:
- `Card` - Root container
- `CardHeader` - Header section
- `CardTitle` - Title element
- `CardDescription` - Description text
- `CardContent` - Main content area
- `CardFooter` - Footer section

**Usage**:
```tsx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

---

### Accordion

**File**: `src/components/ui/accordion.tsx`

**Description**: Collapsible content panels (used in FAQ).

**Props**:
```typescript
// Accordion root
type?: "single" | "multiple"  // Allow one or multiple open items
collapsible?: boolean         // Allow closing all items

// AccordionItem
value: string                 // Unique identifier

// AccordionTrigger
// Standard button props

// AccordionContent
// Standard div props
```

**Usage**:
```tsx
<Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger>Question 1?</AccordionTrigger>
    <AccordionContent>
      Answer 1 content
    </AccordionContent>
  </AccordionItem>
  <AccordionItem value="item-2">
    <AccordionTrigger>Question 2?</AccordionTrigger>
    <AccordionContent>
      Answer 2 content
    </AccordionContent>
  </AccordionItem>
</Accordion>
```

---

### Avatar

**File**: `src/components/ui/avatar.tsx`

**Description**: User avatar display with fallback.

**Compound Components**:
- `Avatar` - Root container
- `AvatarImage` - Image element
- `AvatarFallback` - Fallback content (initials, icon)

**Usage**:
```tsx
<Avatar>
  <AvatarImage src="/path/to/image.jpg" alt="User name" />
  <AvatarFallback>UN</AvatarFallback>
</Avatar>
```

---

### Badge

**File**: `src/components/ui/badge.tsx`

**Description**: Small label/tag component.

**Props**:
```typescript
variant?: "default" | "secondary" | "destructive" | "outline"
```

**Usage**:
```tsx
<Badge>New</Badge>
<Badge variant="secondary">Featured</Badge>
<Badge variant="outline">Limited</Badge>
```

---

### Input

**File**: `src/components/ui/input.tsx`

**Description**: Form input field component.

**Props**: Extends `React.InputHTMLAttributes<HTMLInputElement>`

**Usage**:
```tsx
<Input
  type="email"
  placeholder="your@email.com"
  required
/>
```

---

### NavigationMenu

**File**: `src/components/ui/navigation-menu.tsx`

**Description**: Accessible navigation menu system.

**Compound Components**:
- `NavigationMenu` - Root container
- `NavigationMenuList` - List wrapper
- `NavigationMenuItem` - Individual item
- `NavigationMenuTrigger` - Dropdown trigger
- `NavigationMenuContent` - Dropdown content
- `NavigationMenuLink` - Link element

**Usage**: See `Navbar.tsx` for full implementation example

---

### Sheet

**File**: `src/components/ui/sheet.tsx`

**Description**: Slide-out panel (used for mobile menu).

**Props**:
```typescript
side?: "top" | "right" | "bottom" | "left"
```

**Compound Components**:
- `Sheet` - Root with state
- `SheetTrigger` - Open trigger
- `SheetContent` - Panel content
- `SheetHeader` - Header section
- `SheetTitle` - Title element
- `SheetDescription` - Description text
- `SheetFooter` - Footer section

**Usage**:
```tsx
<Sheet>
  <SheetTrigger asChild>
    <Button>Open Menu</Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>Menu</SheetTitle>
    </SheetHeader>
    {/* Content */}
  </SheetContent>
</Sheet>
```

---

### DropdownMenu

**File**: `src/components/ui/dropdown-menu.tsx`

**Description**: Dropdown menu component.

**Compound Components**:
- `DropdownMenu` - Root
- `DropdownMenuTrigger` - Trigger button
- `DropdownMenuContent` - Menu content
- `DropdownMenuItem` - Menu item
- `DropdownMenuSeparator` - Divider
- `DropdownMenuLabel` - Section label
- `DropdownMenuGroup` - Item group

**Usage**:
```tsx
<DropdownMenu>
  <DropdownMenuTrigger asChild>
    <Button>Open</Button>
  </DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuItem>Item 1</DropdownMenuItem>
    <DropdownMenuItem>Item 2</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>
```

---

## Utility Components

### Icons

**File**: `src/components/Icons.tsx`

**Description**: Centralized icon library (81KB comprehensive collection).

**Usage**:
```tsx
import { LogoIcon, [OtherIconName] } from "./components/Icons"

<LogoIcon />
```

**Alternative**: Use lucide-react for additional icons:
```tsx
import { Menu, Github, Mail } from "lucide-react"

<Menu className="h-5 w-5" />
```

---

### ModeToggle

**File**: `src/components/mode-toggle.tsx`

**Description**: Dark/light mode toggle button.

**Props**: None

**Features**:
- Uses theme-provider context
- Dropdown with theme options (light/dark/system)
- Persistent theme preference

**Usage**:
```tsx
<ModeToggle />
```

---

### ThemeProvider

**File**: `src/components/theme-provider.tsx`

**Description**: React context provider for theme management.

**Props**:
```typescript
interface ThemeProviderProps {
  children: React.ReactNode
  defaultTheme?: "dark" | "light" | "system"
  storageKey?: string
}
```

**Usage**:
```tsx
// In main.tsx or App.tsx
<ThemeProvider defaultTheme="system" storageKey="ui-theme">
  <App />
</ThemeProvider>
```

**Theme Hook**:
```tsx
import { useTheme } from "@/components/theme-provider"

function Component() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme("dark")}>
      Switch to Dark
    </button>
  )
}
```

---

## Utility Functions

### cn (className merger)

**File**: `src/lib/utils.ts`

**Description**: Utility for merging Tailwind CSS classes with conflict resolution.

**Implementation**:
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Usage**:
```tsx
// Merge classes with proper Tailwind conflict resolution
<div className={cn(
  "px-4 py-2",           // Base classes
  "bg-primary",          // Background
  isActive && "bg-blue-500",  // Conditional (overrides bg-primary)
  className              // External className prop
)} />
```

**Why cn()?**:
- `clsx` - Handles conditional classes and object syntax
- `twMerge` - Resolves Tailwind class conflicts (later classes override earlier)
- Prevents duplicate classes like `px-4 px-6` → `px-6`

---

## Content Integration

### Updating Component Content

To update component content, reference `LANDING_COPY_ENGLISH.md` sections:

1. **Identify Section**: Find the relevant section in LANDING_COPY_ENGLISH.md
2. **Locate Component**: Map section to component (see content integration notes above)
3. **Update Content**: Replace hardcoded text with copy from document
4. **Maintain Structure**: Preserve component structure and styling

**Example Mapping**:

| Component | Copy Section |
|-----------|-------------|
| Navbar | HEADER/NAVIGATION |
| Hero | SECTION 1: HERO |
| Sponsors | Trust badges |
| About | SECTION 2: SOCIAL PROOF |
| HowItWorks | SECTION 4: HOW IT WORKS |
| Features | SECTION 5: FEATURES & BENEFITS |
| Pricing | SECTION 6: PRICING |
| FAQ | SECTION 7: FAQ |
| Cta | SECTION 8: FINAL CTA |
| Footer | FOOTER |

### Component Customization Pattern

All landing section components follow this pattern:

```tsx
export const ComponentName = () => {
  return (
    <section className="container py-20">
      {/* Section content */}
    </section>
  )
}
```

**Customization Points**:
- Replace hardcoded text with content from LANDING_COPY_ENGLISH.md
- Adjust styling via Tailwind classes
- Modify layout structure as needed
- Add/remove features based on requirements

### Adding New Sections

1. Create component file: `src/components/NewSection.tsx`
2. Follow existing component patterns
3. Import in `App.tsx`
4. Add to render order in appropriate position
5. Update this documentation

---

## Best Practices

### Component Development

1. **Use TypeScript**: Define proper prop types
2. **Follow Compound Pattern**: For complex UI components
3. **Use cn() for Classes**: Merge Tailwind classes properly
4. **Accessibility**: Include ARIA labels and semantic HTML
5. **Responsive Design**: Mobile-first with Tailwind breakpoints
6. **Dark Mode**: Support via theme-provider

### Styling

1. **Tailwind Utilities**: Prefer Tailwind over custom CSS
2. **Consistent Spacing**: Use container and consistent padding
3. **Color Tokens**: Use theme color variables
4. **Typography**: Use Tailwind typography utilities

### Performance

1. **Code Splitting**: Components auto-split by Vite
2. **Lazy Loading**: Use React.lazy() for heavy components
3. **Image Optimization**: Optimize images before importing
4. **Minimize Re-renders**: Use memo() for expensive components

---

## Related Documentation

- [Project Structure](./PROJECT_STRUCTURE.md) - Directory organization
- [Development Guide](./DEVELOPMENT_GUIDE.md) - Setup and workflow
- [Architecture](./ARCHITECTURE.md) - Design decisions and patterns
