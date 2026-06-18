# ResumeDOG — Claude Code Notes

## Project Overview
Nuxt 3 marketing site for ResumeDOG, an AI resume formatting SaaS for recruitment agencies. File-based routing, `@nuxtjs/i18n` v10, Vue 3 Composition API.

## Stack
- **Framework**: Nuxt 3 (`nuxt.config.ts`)
- **i18n**: `@nuxtjs/i18n` v10, strategy `no_prefix`, locale files at `i18n/locales/en.json` and `i18n/locales/ja.json`
- **CSS**: Global tokens in `assets/css/main.css`, scoped styles per page/component
- **Fonts**: Geist (display), Inter (body) via Google Fonts
- **Icons**: Font Awesome 6 via CDN
- **Dev server**: port `3220`, serverId `29d04284-7fec-4cbe-83ba-aa3a1606a1e7`

## Pages
- `/` — `pages/index.vue` — Full homepage (9 sections)
- `/about` — `pages/about.vue`
- `/services` — `pages/services.vue`
- `/pricing` — `pages/pricing.vue`
- `/blog` — `pages/blog/index.vue`

## Components
- `components/AppNav.vue` — Sticky nav with dark/light toggle, EN/JP lang toggle, active-route detection
- `components/AppFooter.vue` — Simple footer
- `components/FaqItem.vue` — JS-driven smooth accordion (measures `scrollHeight`, animates height with `0.4s cubic-bezier(0.4,0,0.2,1)`)
- `components/CtaSection.vue` — Shared CTA band used in pricing page

## Design Tokens (CSS Variables)
Defined in `assets/css/main.css`. Dark mode via `[data-theme="dark"]` on `<html>`.

| Token | Light | Dark |
|---|---|---|
| `--ink` | `#09090b` | `#f0ece6` |
| `--ink2` | `#52525b` | `#a09890` |
| `--cream` | `#e0f2fe` | `#0f172a` |
| `--cream2` | `#bae6fd` | `#1e293b` |
| `--gold` | `#0d9488` (Deep Teal) | `#fb923c` (Coral) |
| `--teal` | `#312e81` (Deep Indigo) | `#818cf8` |
| `--card-bg` | `#ffffff` | `#1e293b` |

## Theming Notes
- Dark mode toggled by setting `data-theme="dark"` on the `<html>` element
- Scoped dark overrides use `[data-theme="dark"] .classname { }` — NOT `:root.dark`

## i18n Notes
- Use `$t('key')` for strings, `$tm('key')` for arrays, `$rt(item)` to resolve array items
- After editing locale JSON files, HMR sometimes leaves stale state — hard reload the browser

## Key CSS Patterns
- Page transitions: `.page-enter-active / .page-leave-active` in `main.css` — 0.2s opacity + translateY
- Smooth scroll: `html { scroll-behavior: smooth; }` + `* { scroll-margin-top: 80px; }`
- Buttons: `.btn-primary` (global), `.btn-demo` (scoped per page — transparent with border, dark mode gets `background: var(--cream2)`)
- Plan card hover zoom: `transform: scale(1.03)` with `box-shadow` on `.plan-card:hover`

## Homepage Hero Visual (`pages/index.vue`)
The right-side hero visual (`.hero-visual`) is a custom mockup built with scoped CSS — no Tailwind. Key classes:
- `.hv-window` — main browser-frame mockup (460px tall)
- `.hv-card-raw`, `.hv-card-jd`, `.hv-card-out` — three floating document cards (absolutely positioned, rotated)
- `.hv-orb-wrap` — animated AI orb (spinning rings + breathe animation), positioned over the "Tailored to JD" pill (`right: 28%; top: 64%`)
- `.hv-pill-amber/dark/light` — floating feature pills
- `.hv-stats` — 3-column stat cards below the window
- `.hv-card-stripe` — gradient accent bar on the output card, pinned to `bottom: 0`

## Deployment
- Hosted on GitHub Pages as a user/org page (`username.github.io`)
- Static generation via `nuxt generate` → outputs to `.output/public/`
- CI/CD: `.github/workflows/deploy.yml` — triggers on push to `main`, builds then deploys via `actions/deploy-pages`
- No base URL override needed (user/org page = root path)
- To enable: go to repo **Settings → Pages → Source → GitHub Actions**

## Known Non-Issues
- `Failed to resolve import "#app-manifest"` in dev logs — Nuxt internal quirk, does not affect the page
- `/terms`, `/contact`, `/privacy`, `/upload` are intentionally listed in `nitro.prerender.ignore` — those pages don't exist yet
