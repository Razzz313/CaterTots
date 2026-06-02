# Cater Tots — Dubai Luxury Catering Website v2.0

A world-class luxury catering website built for Dubai's premium market.
React 18 · Tailwind CSS 3 · Framer Motion 11

## What's New in v2.0 (Dubai Edition)
- **New headline:** "Crafted for Royalty. Served to the World."
- **Dubai Venues Strip:** Animated marquee of 8 iconic Dubai venues (Burj Al Arab, Atlantis The Palm, Madinat Jumeirah, Armani Hotel, Four Seasons DIFC, Palazzo Versace, One&Only Royal Mirage, Address Downtown)
- **Dubai Difference section:** 6-pillar grid — Halal certification, multi-cultural menus, UAE licensing, VIP protocol, citywide/GCC reach, bespoke service
- **Arabic calligraphy accent** (مرحباً بكم) + Arabic geometric latticework pattern
- **Testimonials** — Dubai clients at Palm Jumeirah, Burj Al Arab, DIFC, Downtown Dubai
- **Contact info** — +971 UAE numbers throughout
- **About copy** — Dubai narrative, Burj Khalifa reference, UAE market positioning
- **Meta tags** — Dubai SEO optimized

## Brand Identity
- Deep Black: #0F0F0F
- Rich Gold: #C9A227
- Champagne Gold: #D8B75B
- Warm Ivory: #FAF8F4
- Fonts: Playfair Display (display) · Cormorant Garamond (accent) · Jost (body)

## Quick Start
```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production → dist/
```

## Deploy
```bash
npx vercel --prod
# Netlify: build command = npm run build, output = dist
```

## File Map
| Component | Purpose |
|---|---|
| `Navbar.jsx` | Sticky nav + Services mega-dropdown |
| `Hero.jsx` | Full-screen parallax hero |
| `About.jsx` | Dubai brand story |
| `DubaiVenues.jsx` | Prestige venue marquee strip |
| `Marquee.jsx` | Gold services ticker |
| `Services.jsx` | 8 service cards |
| `DubaiDifference.jsx` | Dubai-specific value pillars |
| `Gallery.jsx` | Filtered masonry gallery + lightbox |
| `Testimonials.jsx` | Dubai client testimonials |
| `Booking.jsx` | Inquiry form |
| `Footer.jsx` | Full footer with Dubai contact |
| `Cursor.jsx` | Custom gold cursor |

## Customization
- **Headline** → `Hero.jsx` line ~50
- **Phone numbers** → `Footer.jsx` + `Booking.jsx`
- **Venues list** → `DubaiVenues.jsx`
- **Services dropdown** → `Navbar.jsx` `dropdownItems` array
