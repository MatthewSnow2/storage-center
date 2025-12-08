# Storage Center - Project Blueprint

A marketing website for Storage Center, an AI solutions company serving the self-storage industry.

## Project Status

### Phase 1: Project Setup
- [x] Initialize Next.js with TypeScript and Tailwind CSS
- [x] Install dependencies (Framer Motion, Lucide, etc.)
- [x] Configure Inter font
- [x] Set up blue/cyan glass-morphic color palette
- [x] Create utility functions (cn)

### Phase 2: Core Components
- [x] GradientButton component
- [x] GlassPanel component
- [x] Navigation component (with mobile menu)
- [x] Hero component with animated background
- [x] Footer component
- [x] AgentCarousel component (adapted from 21st.dev)
- [x] ContactForm component

### Phase 3: Pages
- [x] Home page
- [x] Features page with carousel
- [x] Contact page with form

### Phase 4: Single-Page Refactor (Completed)
- [x] Consolidated all content into single scrolling page
- [x] Added section IDs (#features, #agents, #contact)
- [x] Updated Navigation to use anchor links with smooth scroll
- [x] Updated Hero CTAs to use anchor navigation
- [x] Updated Footer links to use anchor navigation
- [x] Added scroll-mt-20 for proper anchor positioning
- [x] Deleted /features and /contact page directories
- [x] Verified build success

### Phase 5: Polish & Deploy
- [ ] Test all scroll navigation and mobile menu
- [ ] Optimize images and performance
- [ ] Configure n8n webhook for contact form
- [ ] Set up GitHub repository
- [ ] Configure Netlify deployment
- [ ] Test responsive design on multiple devices

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Deployment**: Netlify (via GitHub)

## Design System

### Color Palette
- **Background**: #030712 (near black)
- **Primary**: Blue gradient (#3b82f6 → #06b6d4)
- **Accent**: Cyan (#22d3ee)
- **Glass**: rgba(10, 20, 40, 0.7) with cyan border hints

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Bold, gradient text effect
- **Body**: Regular weight, slate-400 for secondary text

### Components
- Glass-morphic panels with backdrop blur
- Gradient buttons with animated hover states
- 3D carousel for agent showcase

## Voice Agents Featured

1. **Reservation Agent** - 24/7 Unit Booking
2. **Payment Agent** - Automated Collections
3. **Support Agent** - Instant Customer Service
4. **Lead Qualifier** - Smart Lead Capture

## Next Steps

1. Run `npm run dev` to start development server
2. Configure actual n8n webhook URL in ContactForm
3. Push to GitHub and connect to Netlify
4. Replace placeholder contact info with real details
5. Add actual company logo when ready
