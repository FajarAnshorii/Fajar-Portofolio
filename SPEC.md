# SPEC.md - Muhammad Fajar Anshori Porto

## 1. Concept & Vision

Portfolio website untuk **Muhammad Fajar Anshori** - Fullstack Developer & Frontend Developer. Desain mengikuti gaya profesional dengan tema dark mode, menggunakan kombinasi warna biru tua, hitam, dan putih. Website memberikan kesan modern, clean, dan powerful dengan navigasi smooth scroll dan animasi subtle.

## 2. Design Language

### Aesthetic Direction
Dark mode profesional dengan sentuhan modern - terinspirasi dari portfolio developer sleek dengan gradien biru yang subtle.

### Color Palette
- **Primary Background**: `#0a0a0a` (deep black)
- **Secondary Background**: `#111111` (card/section bg)
- **Accent Blue**: `#2563eb` (main accent)
- **Accent Blue Light**: `#3b82f6` (hover states)
- **Text Primary**: `#ffffff` (white)
- **Text Secondary**: `#9ca3af` (muted gray)
- **Border**: `#1f1f1f` (subtle borders)

### Typography
- **Headings**: Inter (Google Fonts) - Bold/Semibold
- **Body**: Inter - Regular/Medium
- **Fallback**: system-ui, sans-serif

### Spatial System
- Container max-width: 1280px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Card gap: 24px
- Component radius: 12px (cards), 8px (buttons), 50% (avatars)

### Motion Philosophy
- Smooth scroll behavior
- Fade-in on scroll (opacity 0→1, 600ms ease-out)
- Hover transitions: 200ms ease
- Button hover: scale 1.02 + glow effect
- Card hover: subtle lift (translateY -4px)

## 3. Layout & Structure

### Page Sections (Vertical Flow)
1. **Header** - Sticky navigation, logo + nav links
2. **Hero** - Name, title, description, CTA buttons, social links
3. **About** - Photo placeholder + bio text (2 column)
4. **Skills** - Grid categorized by: Fullstack Development, Frontend Development, Backend, Tools
5. **Projects** - Grid of project cards (title + placeholder box)
6. **Experience** - Timeline vertical layout
7. **Contact** - Social links with icons
8. **Footer** - Copyright + minimal

### Grid System
- 12 column grid
- Section container: centered with max-width
- Responsive breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)

### Responsive Strategy
- Mobile-first approach
- Single column on mobile
- 2 columns on tablet
- 3-4 columns on desktop

## 4. Features & Interactions

### Navigation
- Smooth scroll to sections on click
- Active section highlight on scroll
- Mobile: hamburger menu with slide-in drawer

### Hero Section
- Large heading with name
- Animated typing effect for role (optional)
- Two CTA buttons: "View Projects" + "Contact Me"
- Social media icons row

### Skills Section
- Cards per category
- Each skill as badge/pill with icon

### Project Cards
- Title on top
- Placeholder box below (for future images)
- Hover: border glow effect

### Contact Section
- Icon + text for each contact method
- All links open in new tab (target="_blank")

## 5. Component Inventory

### Header
- Logo (text-based: FA)
- Nav links: About, Skills, Projects, Experience, Contact
- States: default, scrolled (with backdrop blur), mobile open

### Hero
- Avatar placeholder (icon circle)
- Name: large heading
- Title: gradient text
- Description: max-width for readability
- Buttons: Primary (filled blue), Secondary (outlined)
- Social icons row

### SkillCard
- Category title
- Grid of skill badges
- Badge: icon + text, rounded pill style

### ProjectCard
- Title
- Empty placeholder box (dashed border)
- Hover: blue border glow

### TimelineItem
- Year badge on left
- Company, role, period
- Vertical line connector

### SocialLink
- Icon + platform name
- Hover: color change to accent blue

### Button
- Variants: primary (blue bg), secondary (outline)
- States: default, hover (scale + glow), active, disabled

## 6. Technical Approach

### Stack
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Build**: Vite (via Next.js)

### Architecture
```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Main portfolio page
│   └── globals.css     # Global styles
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Experience.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts        # cn() helper
```

### Key Implementation Details
- Client components for interactive sections (nav menu)
- CSS scroll-behavior: smooth
- Intersection Observer for scroll animations (optional)
- All external links: rel="noopener noreferrer" target="_blank"