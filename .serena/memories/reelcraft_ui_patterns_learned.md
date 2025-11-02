# ReelCraft UI/UX Patterns - Reusable Knowledge

## Mobile-First Video Presentation Pattern

### Use Case
Showing before/after video comparisons on landing pages with optimal mobile UX

### Desktop Implementation (≥768px)
```tsx
<div className="hidden md:grid md:grid-cols-2 gap-8">
  {/* Left: Before Photo */}
  <div className="space-y-2">
    <Badge>Before</Badge>
    <img 
      src={beforeImage} 
      className="w-full h-auto object-cover aspect-[9/16]"
    />
  </div>
  
  {/* Right: After Video */}
  <div className="space-y-2">
    <Badge>After</Badge>
    <video 
      src={afterVideo}
      autoPlay loop muted playsInline
      className="w-full h-auto object-cover aspect-[9/16]"
    />
  </div>
</div>
```

### Mobile Implementation (<768px)
```tsx
<div className="md:hidden">
  <div className="space-y-2">
    <Badge>Result</Badge>
    <div className="rounded-lg overflow-hidden border relative">
      <video
        src={afterVideo}
        autoPlay loop muted playsInline
        className="w-full h-auto object-cover aspect-[9/16]"
      />
      <Button
        variant="outline"
        size="sm"
        className="absolute top-4 right-4"
        onClick={() => handlePhotoClick(beforeImage)}
      >
        👁️ See original photo
      </Button>
    </div>
  </div>
</div>

{/* Photo Modal */}
<Dialog open={showPhotoModal} onOpenChange={setShowPhotoModal}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Original Product Photo</DialogTitle>
    </DialogHeader>
    <img 
      src={selectedPhoto}
      className="w-full h-auto object-cover aspect-[9/16]"
    />
  </DialogContent>
</Dialog>
```

### State Management
```tsx
const [showPhotoModal, setShowPhotoModal] = useState(false);
const [selectedPhoto, setSelectedPhoto] = useState<string>("");

const handlePhotoClick = (photoSrc: string) => {
  setSelectedPhoto(photoSrc);
  setShowPhotoModal(true);
};
```

### Benefits
- **Mobile**: Saves screen space, video-first presentation
- **Desktop**: Rich comparison with both visible
- **Consistent**: Same interaction pattern across sections
- **Accessible**: Clear button for alternative view

## Aspect Ratio Consistency Pattern

### Problem
Mixed media sources (photos/videos) with different aspect ratios create:
- Uneven heights when same width
- Layout shifts and visual imbalance
- Unprofessional appearance

### Solution
```tsx
className="w-full h-auto object-cover aspect-[9/16]"
```

### Key Classes
- `aspect-[9/16]`: Enforces vertical video format (TikTok/Reels/Stories)
- `object-cover`: Scales content to fill container, crops if needed
- `w-full h-auto`: Responsive width, auto height based on aspect ratio

### When to Use
- ✅ Before/after comparisons with mixed sources
- ✅ User-generated content with unknown dimensions
- ✅ Carousel/gallery with multiple media items
- ✅ Product photos from different photographers
- ❌ Single hero images where original aspect ratio matters
- ❌ Logos or graphics that must maintain exact proportions

### Alternative Aspect Ratios
```tsx
aspect-[16/9]  // Landscape video (YouTube)
aspect-[4/3]   // Traditional photo
aspect-[1/1]   // Square (Instagram post)
aspect-[21/9]  // Ultra-wide cinematic
```

## Balanced 2-Column List Pattern

### Problem
Nested flex containers with `space-y` create unbalanced columns:
```tsx
❌ AVOID:
<div className="grid md:grid-cols-2">
  <div className="space-y-2">
    <Item1 /> <Item2 /> <Item3 />
  </div>
  <div className="space-y-2">
    <Item4 /> <Item5 />
  </div>
</div>
// Result: 3 vs 2 items = uneven heights
```

### Solution: Unified Grid
```tsx
✅ BETTER:
<div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
  <Item1 />
  <Item4 />
  <Item2 />
  <Item5 />
  <Item3 />
  <Item6 />
</div>
// Grid auto-flows left-to-right, top-to-bottom
// All rows aligned horizontally
```

### Spacing Control
```tsx
gap-x-8   // Horizontal gap between columns
gap-y-3   // Vertical gap between rows
gap-4     // Same gap in both directions
```

### Benefits
- Auto-alignment across rows
- No manual balancing needed
- Cleaner code (fewer wrapper divs)
- Better with variable-length content

### Use Cases
- Feature lists
- Pricing "What's included" sections
- Benefit comparisons
- Technical specifications
- Any list that should flow into 2+ columns

## Badge Sizing Hierarchy

### Size Scale
```tsx
// Small (info badges on media)
className="text-sm py-1.5 px-3"

// Medium (section labels)
className="text-base py-2 px-4"

// Large (primary eyebrow badges)
className="text-base py-2.5 px-5"
```

### Usage Guidelines
- **Small**: Video overlays, carousel labels, discrete info
- **Medium**: Section headers, category tags, comparison tables
- **Large**: Hero eyebrows, primary CTAs, major announcements

### Consistency Rules
1. Same size badges for same hierarchy level
2. Don't mix sizes within single component
3. Larger padding = more visual importance
4. Text size + padding must scale together

## OGP Meta Tags Complete Pattern

### Essential Meta Tags
```html
<!-- Primary -->
<title>Brand - Value Proposition | Price</title>
<meta name="description" content="Compelling 155-char summary with benefits and social proof" />
<meta name="keywords" content="primary, keywords, for, SEO" />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://yourdomain.com" />
<meta property="og:title" content="Social Share Title (60 chars)" />
<meta property="og:description" content="Social share description (160 chars)" />
<meta property="og:image" content="/ogp.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:site_name" content="Brand Name" />
<meta property="og:locale" content="en_US" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://yourdomain.com" />
<meta name="twitter:title" content="Twitter Share Title" />
<meta name="twitter:description" content="Twitter description" />
<meta name="twitter:image" content="/ogp.png" />
<meta name="twitter:creator" content="@yourhandle" />
<meta name="twitter:site" content="@yourhandle" />
```

### OGP Image Requirements
- **Dimensions**: 1200x630px (recommended)
- **Format**: PNG or JPG
- **Location**: public/ogp.png (Vite auto-copies to dist/)
- **Size**: <1MB for fast loading
- **Content**: Logo + headline + key visual

### Testing Tools
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/

## Carousel Mobile Optimization

### Desktop Pattern
```tsx
<Carousel>
  <CarouselContent>
    {items.map((item) => (
      <CarouselItem>
        <div className="grid md:grid-cols-2">
          {/* Full content */}
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>
```

### Mobile Optimization Strategies

**1. Hide Secondary Content**
```tsx
<div className="hidden md:block">
  {/* Desktop-only content */}
</div>
```

**2. Add Modal for Details**
```tsx
<Button onClick={() => showDetails(item)}>
  View Details
</Button>

<Dialog>
  {detailedContent}
</Dialog>
```

**3. Simplified Cards**
```tsx
<div className="md:hidden">
  {/* Minimal mobile version */}
</div>
```

### When to Optimize
- ✅ Content is dense on desktop
- ✅ Side-by-side comparisons don't fit mobile
- ✅ Users need context but not always visible
- ❌ Content is already minimal
- ❌ Every piece is critical for understanding

## Common Pitfalls Avoided

### 1. Badge Misuse
❌ **Wrong**: Using "Most Popular" on single option
✅ **Right**: Use only when comparing multiple options

### 2. Mixed Aspect Ratios
❌ **Wrong**: `<img className="w-full h-auto" />` without aspect-ratio
✅ **Right**: `<img className="w-full h-auto aspect-[9/16]" />`

### 3. Unbalanced Grids
❌ **Wrong**: Nested flex with different item counts
✅ **Right**: Unified grid with auto-flow

### 4. Video Autoplay
❌ **Wrong**: `<video autoPlay loop />`
✅ **Right**: `<video autoPlay loop muted playsInline />`
- `muted` required for autoplay to work
- `playsInline` prevents fullscreen on mobile

### 5. OGP Image Paths
❌ **Wrong**: Absolute URL to external CDN (can break)
✅ **Right**: Relative path `/ogp.png` from public folder
