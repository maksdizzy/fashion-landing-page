# ReelCraft Component Patterns - Reusable Knowledge

## Video-Based Hero Section Pattern

### Before/After Split-Screen with Video
**Use Case**: Product transformation showcase with static before + dynamic after

**Implementation**:
```tsx
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

// Desktop: 50/50 grid with photo (left) + video (right)
// Mobile: Video-first with modal button for photo comparison

<div className="grid md:grid-cols-2 gap-8">
  {/* Left: Before Photo */}
  <div className="space-y-4">
    <Badge>Before</Badge>
    <img src={beforeImage} alt="Before" className="rounded-lg" />
  </div>
  
  {/* Right: After Video */}
  <div className="space-y-4">
    <Badge>After</Badge>
    <video
      src={afterVideo}
      autoPlay
      loop
      muted
      playsInline
      className="w-full rounded-lg"
    />
  </div>
</div>

{/* Mobile: Modal for photo comparison */}
<Dialog open={showModal} onOpenChange={setShowModal}>
  <DialogContent>
    <img src={beforeImage} alt="Before comparison" />
  </DialogContent>
</Dialog>
```

**Key Attributes**:
- `autoPlay`: Start video automatically
- `loop`: Continuous playback
- `muted`: Required for autoplay to work
- `playsInline`: Required for mobile autoplay (prevents fullscreen)

## Carousel with Before/After Examples

### Media Carousel Pattern
**Use Case**: Multiple before/after transformations with testimonials

**Implementation**:
```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";

const examples = [
  {
    before: beforeImage1,
    after: afterVideo1,
    testimonial: "Quote text",
    author: "Author name"
  },
  // ... more examples
];

<Carousel className="w-full max-w-5xl">
  <CarouselContent>
    {examples.map((item, index) => (
      <CarouselItem key={index}>
        <div className="grid md:grid-cols-2 gap-4">
          {/* Before Photo */}
          <div>
            <Badge>Before</Badge>
            <img src={item.before} alt="Before" />
          </div>
          
          {/* After Video */}
          <div>
            <Badge>After</Badge>
            <video
              src={item.after}
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        {/* Testimonial */}
        <blockquote>
          <p>{item.testimonial}</p>
          <cite>{item.author}</cite>
        </blockquote>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

**Shadcn Installation**: `npx shadcn@latest add carousel`

## Responsive Comparison Table

### Table vs Cards Pattern
**Use Case**: Feature comparison that needs different layouts for mobile/desktop

**Desktop**: Full table with shadcn Table component
**Mobile**: Card-based layout for better readability

**Implementation**:
```tsx
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const criteria = [
  { criteria: "Cost", traditional: "$2,000+", ai: "$4.99" },
  { criteria: "Time", traditional: "2-4 weeks", ai: "2 minutes" },
  // ... more criteria
];

{/* Mobile: Cards */}
<div className="md:hidden space-y-4">
  {criteria.map((item) => (
    <Card key={item.criteria}>
      <CardHeader>
        <CardTitle>{item.criteria}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <p className="text-sm font-medium">Traditional Shoot</p>
          <p className="text-red-600">{item.traditional}</p>
        </div>
        <div>
          <p className="text-sm font-medium">Our AI Service</p>
          <p className="text-green-600">{item.ai}</p>
        </div>
      </CardContent>
    </Card>
  ))}
</div>

{/* Desktop: Table */}
<div className="hidden md:block">
  <Table>
    <TableHeader>
      <TableRow>
        <TableHead>Criteria</TableHead>
        <TableHead>Traditional Shoot</TableHead>
        <TableHead>Our AI Service</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {criteria.map((item) => (
        <TableRow key={item.criteria}>
          <TableCell className="font-medium">{item.criteria}</TableCell>
          <TableCell className="text-red-600">{item.traditional}</TableCell>
          <TableCell className="text-green-600">{item.ai}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</div>
```

**Shadcn Installation**: `npx shadcn@latest add table`

## Stats Grid with Gradient Text

### Metric Display Pattern
**Use Case**: Eye-catching statistics with gradient styling

**Implementation**:
```tsx
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
      10,000+
    </div>
    <p className="text-muted-foreground mt-2">Videos Created</p>
  </div>
  
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
      +2.8x
    </div>
    <p className="text-muted-foreground mt-2">Conversion Boost</p>
  </div>
  
  {/* ... more stats */}
</div>
```

**Key Classes**:
- `bg-gradient-to-r from-{color}-600 to-{color}-600`: Gradient background
- `bg-clip-text`: Clip gradient to text
- `text-transparent`: Make text transparent to show gradient

## Step Process Cards

### Process Flow Pattern
**Use Case**: Multi-step process with numbered steps and tips

**Implementation**:
```tsx
const steps = [
  {
    number: "1",
    icon: "📸",
    title: "Upload Your Photos",
    description: "Upload 5-10 product photos",
    tip: "Tip: White background works best"
  },
  // ... more steps
];

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
  {steps.map((step) => (
    <Card key={step.number}>
      <CardHeader>
        <Badge className="w-fit">{step.number}</Badge>
        <CardTitle className="flex items-center gap-2">
          <span className="text-3xl">{step.icon}</span>
          {step.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <p className="text-muted-foreground">{step.description}</p>
        <Badge variant="outline">{step.tip}</Badge>
      </CardContent>
    </Card>
  ))}
</div>
```

## Pricing with Value Anchor

### Single Tier with Comparison Pattern
**Use Case**: Highlight savings compared to traditional alternatives

**Implementation**:
```tsx
<Card className="max-w-2xl mx-auto">
  <CardHeader>
    <Badge className="w-fit">✨ Launch Pricing</Badge>
    <CardTitle className="text-4xl">$4.99</CardTitle>
    <p className="text-muted-foreground">per video generation</p>
  </CardHeader>
  
  <CardContent className="space-y-4">
    {/* Value Anchor */}
    <div className="bg-muted p-4 rounded-lg">
      <p className="text-sm text-muted-foreground line-through">
        Traditional shoot: $2,000+
      </p>
      <Badge variant="destructive" className="mt-2">
        Save 99%
      </Badge>
    </div>
    
    {/* Features Checklist */}
    <ul className="space-y-2">
      {features.map((feature) => (
        <li key={feature} className="flex items-center gap-2">
          <Check className="h-5 w-5 text-green-600" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    
    {/* Guarantee */}
    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
      <p className="text-sm font-medium">
        🛡️ 100% Satisfaction Guarantee
      </p>
      <p className="text-sm text-muted-foreground">
        Not happy? Full refund within 7 days.
      </p>
    </div>
  </CardContent>
</Card>
```

## Asset Management in Vite

### Proper Asset Structure
**Critical**: Assets must be in `src/` directory for Vite bundling

**Correct Structure**:
```
src/
├── assets/
│   ├── hero/
│   │   ├── hero-after.mp4
│   │   └── hero-before.jpg
│   └── social-proof/
│       ├── 1-before.jpg
│       ├── 1-after.mp4
│       └── ... (more files)
└── components/
    └── Hero.tsx
```

**Import Pattern**:
```tsx
import heroAfterVideo from "../assets/hero/hero-after.mp4";
import heroBeforeImage from "../assets/hero/hero-before.jpg";
```

**Naming Convention**: Use kebab-case for folder names (no spaces)
- ✅ `social-proof/`
- ❌ `social proof/`

## Common Pitfalls and Solutions

### Video Autoplay Not Working
**Problem**: Video doesn't autoplay on mobile
**Solution**: Add `muted` and `playsInline` attributes
```tsx
<video autoPlay loop muted playsInline src={videoSrc} />
```

### Assets Not Found in Build
**Problem**: `Could not resolve "../assets/..."`
**Solution**: Move assets from root to `src/assets/`

### Unused Imports Error
**Problem**: TypeScript errors for unused imports
**Solution**: Remove imports after deleting components/features
```tsx
// Before
import { GitHubLogoIcon } from "@radix-ui/react-icons";

// After: Removed if GitHub link deleted
```

### Responsive Layout Breaking
**Problem**: Desktop layout looks bad on mobile
**Solution**: Use mobile-first approach with breakpoint prefixes
```tsx
// Mobile: Full width, Desktop: 2 columns
<div className="grid md:grid-cols-2 gap-4">
```

## Shadcn Component Usage

### Components Used in This Project
1. **carousel**: Before/after example slideshow
2. **table**: Comparison table for desktop
3. **dialog**: Modal for photo comparison on mobile
4. **card**: General content containers
5. **badge**: Labels, tags, and highlights
6. **button**: CTAs and actions
7. **separator**: Visual dividers

### Installation Pattern
```bash
npx shadcn@latest add carousel table dialog
```

### Import Pattern
```tsx
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
```
