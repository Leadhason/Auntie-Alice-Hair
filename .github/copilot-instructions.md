# Auntie Alice Hair Centre - AI Coding Instructions

## Project Overview
A luxury hair salon website built with React + TypeScript + Vite, featuring AI consultation capabilities via Google Gemini API. The app is a single-page application with smooth scroll navigation targeting high-end black hair care services in Accra, Ghana.

## Architecture & Key Patterns

### Component Structure
- **Flat component hierarchy**: All components in `/components/` directory, imported directly into `App.tsx`
- **Single-page layout**: Components stacked vertically with smooth scroll navigation via anchor IDs
- **Shared types**: All interfaces centralized in `types.ts` (Service, Testimonial, GalleryItem, NavItem)
- **Constants pattern**: Images, services, and static data centralized in `constants.ts` using structured objects
- **Mixed asset strategy**: Local images in `/public` folder + external Unsplash URLs for certain sections

### Styling Conventions
- **Tailwind-first**: Extensive use of Tailwind with custom animations defined inline using `<style>` tags
- **Color palette**: Stone (50, 600, 900) + amber (400, 600, 700) for luxury aesthetic  
- **Typography**: `font-serif` (Cinzel) for headings, Lato sans-serif for body text
- **Layout pattern**: `py-24 bg-stone-50 min-h-screen scroll-mt-20` for sections
- **Responsive**: Mobile-first design with `md:` and `lg:` breakpoints

### Asset Management
- **Local images**: JFIF files (`alice-1.jfif` through `alice-7.jfif`) stored in `/public`
- **Profile image**: `auntie-alice.png` for founder section
- **External images**: Unsplash URLs for About section backgrounds and testimonial avatars
- **Hero background**: Currently empty string (needs image assignment)

## Development Workflows

### Environment Setup
1. Create `.env.local` with `GEMINI_API_KEY=your_key_here` (optional for AI features)
2. `npm install` - Dependencies include React 19.2.0, Framer Motion, Lucide React icons, react-router-dom
3. `npm run dev` - Starts Vite dev server on port 3000, bound to 0.0.0.0 for container compatibility

### Build & Deploy
- `npm run build` - Optimized Vite build with minification
- `npm run preview` - Preview production build
- **Vercel ready**: Proper configuration in `vercel.json`
- **Node.js**: Constrained to >=18.0.0 for deployment compatibility

## Key Implementation Details

### Navigation System
- Smooth scroll implemented via `element.scrollIntoView({ behavior: 'smooth' })`
- Nav state managed with scroll position detection (`window.scrollY > 50`)
- Mobile menu with overlay and body scroll prevention

### Modal Patterns
- Service detail modals prevent body scroll: `document.body.style.overflow = 'hidden'`
- FAQ accordion with single-open state management
- Backdrop click and escape key handling for UX

### Animation Approach
- Custom CSS animations defined inline within components (see `Hero.tsx`)
- Letter-by-letter reveal animations with staggered delays
- Hover effects using group utilities and transform classes

### Data Management
- **No state management library** - component-level useState only
- Static data in constants, no API data fetching beyond AI consultation
- Contact info: +233 24 360 1675, Almond Street, Accra, Ghana

## Critical Dependencies
- `lucide-react` for consistent icon system
- `framer-motion` for advanced animations (though mostly using CSS)
- `react-router-dom` present but with limited usage

## Common Gotchas
- Hero background image currently empty - needs valid image path
- All section IDs match navigation hrefs for smooth scroll functionality
- Local images use `/filename.ext` format to reference `/public` directory
- Mobile-first responsive design - always implement mobile styles first