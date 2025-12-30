# Marc Trösken - Personal Website

Cloud Engineering Leader Portfolio built with Nuxt 3 and Tailwind CSS.

## Setup

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Generate static site
npm run generate
```

## Project Structure

```
├── assets/
│   ├── css/
│   │   └── main.css          # Tailwind + custom styles
│   └── images/
│       └── profile.jpg       # Profile image
├── components/
│   ├── TheNavbar.vue         # Navigation
│   ├── HeroSection.vue       # Hero with profile
│   ├── MetricsBar.vue        # Key metrics
│   ├── CompetenciesSection.vue
│   ├── CareerSection.vue     # Timeline + Skills
│   ├── CtaSection.vue        # Call to action
│   └── TheFooter.vue
├── pages/
│   └── index.vue             # Main page
├── nuxt.config.ts
├── tailwind.config.ts
└── package.json
```

## Color Scheme

Current theme uses gold/copper accent (`#c9a227`) for a premium fintech aesthetic.

To change the accent color, update:
1. `tailwind.config.ts` - accent color values
2. `assets/css/main.css` - gradient and shadow colors

## Tech Stack

- **Framework:** Nuxt 3
- **Styling:** Tailwind CSS
- **Fonts:** Instrument Serif, Space Grotesk, Syne (via @nuxtjs/google-fonts)
- **Animations:** CSS animations with Tailwind utilities
