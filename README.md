# ResumeAI - Nuxt 3 Landing Page

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run preview
```

## Project structure

```
resumeai/
├── app.vue                  # Root layout (nav + page + footer)
├── nuxt.config.ts           # Nuxt config, fonts, global CSS
├── pages/
│   └── index.vue            # Landing page (composes all sections)
├── components/
│   ├── AppNav.vue           # Sticky navigation bar
│   ├── HeroSection.vue      # Hero with before/after resume visual
│   ├── StatsBar.vue         # Social proof stats
│   ├── FeaturesSection.vue  # 6-feature grid
│   ├── HowItWorks.vue       # 4-step process
│   ├── FormatsSection.vue   # Supported file formats
│   ├── CtaSection.vue       # Final call-to-action
│   └── AppFooter.vue        # Footer with links
└── assets/
    └── css/
        └── main.css         # Global CSS variables and base styles
```

## Customization

- **Colors**: edit CSS variables in `assets/css/main.css`
- **Content**: each component has its data defined in `<script setup>` for easy editing
- **SEO**: update `useSeoMeta()` in `pages/index.vue`
