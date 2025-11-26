# Auntie Alice Hair Center - AI Coding Instructions

## Project Overview
A luxury hair salon website built with React + TypeScript + Vite, featuring AI consultation via Google Gemini API. The app is a single-page application with smooth scroll navigation targeting high-end black hair care services.

## Architecture & Key Patterns

### Component Structure
- **Flat component hierarchy**: All components in `/components/` directory, imported directly into `App.tsx`
- **Single-page layout**: Components stacked vertically with smooth scroll navigation via anchor IDs
- **Shared types**: All interfaces centralized in `types.ts` (Service, Testimonial, GalleryItem, NavItem)
- **Constants pattern**: Images, services, and static data centralized in `constants.ts` using structured objects

### Styling Conventions
- **Tailwind-first**: Extensive use of Tailwind with custom animations defined inline using `<style>` tags
- **Color palette**: Stone (50, 600, 900) + amber (400, 600, 700) for luxury aesthetic  
- **Typography**: `font-serif` for headings, default sans for body text
- **Layout pattern**: `py-24 bg-stone-50 min-h-screen scroll-mt-20` for sections
- **Responsive**: Mobile-first design with `md:` and `lg:` breakpoints

### AI Integration
- **Gemini API**: Integrated via `@google/genai` package in `components/AIConsultant.tsx`
- **Environment setup**: API key exposed as `process.env.API_KEY` through Vite's define config
- **Error handling**: Graceful fallbacks for missing API keys with user-friendly messages
- **Persona**: "Zai AI" virtual assistant with specific luxury salon context and tone

## Development Workflows

### Environment Setup
1. Create `.env.local` with `GEMINI_API_KEY=your_key_here`
2. `npm install` - Standard dependencies include React 19.2.0, Framer Motion, Lucide React icons
3. `npm run dev` - Starts Vite dev server on port 3000, bound to 0.0.0.0 for container compatibility

### Build & Deploy
- `npm run build` - Standard Vite build process
- `npm run preview` - Preview production build
- **No testing framework** configured - manual testing workflow

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
- Image URLs hosted on Unsplash with optimized parameters

## Critical Dependencies
- `lucide-react` for consistent icon system
- `@google/genai` for AI chat functionality  
- `framer-motion` for advanced animations (though mostly using CSS)
- `react-router-dom` imported but SPA navigation via scroll

## Common Gotchas
- API key must be in `.env.local` as `GEMINI_API_KEY`, exposed as `process.env.API_KEY`
- Vite config defines environment variables for runtime access
- All section IDs match navigation hrefs for smooth scroll functionality
- Mobile-first responsive design - always implement mobile styles first