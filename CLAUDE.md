# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Marketing website for Storage Center, an AI voice agent solution for self-storage companies. Single-page scrolling site built with Next.js 16 and React 19.

## Build & Development Commands

```bash
npm install          # Install dependencies
npm run dev          # Start development server (localhost:3000)
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Run ESLint
```

## Architecture

**Single-page app** with anchor navigation. All content lives in `src/app/page.tsx` which imports section components.

### Section IDs for Navigation
- `#features` - Why customers choose us
- `#agents` - AI voice agents carousel
- `#contact` - Contact form and info

Sections use `scroll-mt-20` class for proper anchor positioning below fixed nav.

### Component Organization
- `src/components/ui/` - Reusable UI primitives (GradientButton, GlassPanel, Navigation)
- `src/components/` - Page sections (Hero, AgentCarousel, ContactForm, Footer)
- `src/lib/utils.ts` - `cn()` utility combining clsx + tailwind-merge

### Tech Stack
- **Next.js 16** with App Router
- **React 19**
- **Tailwind CSS 4** (using `@tailwindcss/postcss`)
- **Framer Motion** for animations
- **Lucide React** + **React Icons** for icons

## Design System

### CSS Utilities (globals.css)
Glass-morphic panels:
- `.glass` - Standard glass with blur
- `.glass-subtle` - Lighter effect
- `.glass-strong` - More opaque

Other utilities:
- `.gradient-text` - Blue-to-cyan gradient text
- `.gradient-button` - Button with animated gradient hover
- `.glow-cyan`, `.glow-blue` - Glow effects
- `.bg-gradient-animated` - Animated background gradient

### Color Palette (CSS variables)
- Background: `#030712`
- Primary: Blue gradient (`#3b82f6` → `#06b6d4`)
- Accent: Cyan (`#22d3ee`)
- Glass background: `rgba(10, 20, 40, 0.7)`

## Pending Configuration

### Contact Form
`ContactForm.tsx` has a TODO for n8n webhook integration. Needs actual webhook URL configured.

### Deployment
Configured for Netlify. Build command: `npm run build`, publish directory: `.next`
