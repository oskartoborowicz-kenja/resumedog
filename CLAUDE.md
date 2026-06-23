# ResumeDOG — Claude Code Notes

## Project Overview
Nuxt 3 marketing site for ResumeDOG, an AI resume formatting SaaS for recruitment agencies. File-based routing, `@nuxtjs/i18n` v10, Vue 3 Composition API.

## Stack
- **Framework**: Nuxt 3 (`nuxt.config.ts`)
- **i18n**: `@nuxtjs/i18n` v10, strategy `no_prefix`, locale files at `i18n/locales/en.json` and `i18n/locales/ja.json`
- **CSS**: Global tokens in `assets/css/main.css`, scoped styles per page/component
- **Fonts**: Geist (display), Inter (body) via Google Fonts
- **Icons**: Font Awesome 6 via CDN
- **Dev server**: port `3220` — launch via `.claude/launch.json` server name `resumeai`

## Pages
- `/` — `pages/index.vue` — Homepage (10 sections)
- `/about` — `pages/about.vue` — 4-section story layout (numbered markers)
- `/services` — `pages/services.vue` — 5-section services page
- `/pricing` — `pages/pricing.vue`
- `/blog` — `pages/blog/index.vue`

## Homepage Sections (`pages/index.vue`)
1. **Hero** — headline, supporting text, CTA buttons, hero visual mockup
2. **Marquee bar** — scrolling feature list between hero and content
3. **Business Impact** (`what-we-do`) — 3-column card grid
4. **What ResumeDOG Does** (`how-it-works`) — split layout: bullet list left, pipeline visual right
5. **How It Works** (`hiw-timeline-section`) — horizontal numbered timeline (5 steps)
6. **Japan Map** (`japan-map-section`) — hub-and-spoke map visual
7. **Why We Built It** (`why-we-built`) — story text + pull quote
8. **Trial CTA** (`trial-cta`) — dark panel (#0d1117), centred CTA
9. **Book a Demo** (`book-demo-section`) — split layout with 6-field form
10. **FAQs** (`faqs-section`) — single-bordered accordion list

## About Page Sections (`pages/about.vue`)
Story-led layout with numbered markers (`ab-num`) and a vertical line (`ab-line`):
1. ResumeDOG — hero intro, no number
2. The Problem (01)
3. The Solution (02)
4. Our Approach (03)
Backgrounds alternate `--cream` / `--cream2`.

## Services Page Sections (`pages/services.vue`)
1. **Hero** — heading, body, "See How It Works" CTA
2. **Core Services** (`sv-services`) — 3-column grid of 6 cards with FA icons
3. **Workflow CTA** (`sv-workflow-cta`) — inline flex: copy left, button right
4. **AI Explainer Video** (`sv-video`) — 16:9 placeholder frame + suggested script box (video from Pritha pending)
5. **Ask a Question** (`sv-ask`) — split layout with 4-field form (Name, Company, Email, Question)

## Components
- `components/AppNav.vue` — Sticky nav with dark/light toggle, EN/JP lang toggle, active-route detection
- `components/AppFooter.vue` — Simple footer
- `components/FaqItem.vue` — JS-driven accordion: measures `scrollHeight`, animates height `0.4s cubic-bezier(0.4,0,0.2,1)`, circled `+` icon rotates 45° on open. Styled as dividers inside a parent bordered container (no individual card borders).

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
- For fixed dark sections (e.g. Trial CTA), use `background: #0d1117` — not `var(--ink)` which flips in dark mode

## Section Spacing Convention
All content sections use `padding: 5rem 0`. Trial CTA uses `6rem 0` for extra visual weight.
Backgrounds alternate `--cream` / `--cream2` per section to create visual separation.

## i18n Notes
- Use `$t('key')` for strings, `$tm('key')` for arrays, `$rt(item)` to resolve array items
- After editing locale JSON files, HMR sometimes leaves stale state — hard reload the browser
- Orphaned locale keys removed: `finalCta`, `recruiters` (old homepage section)

## Key CSS Patterns
- Page transitions: `.page-enter-active / .page-leave-active` in `main.css` — 0.2s opacity + translateY
- Smooth scroll: `html { scroll-behavior: smooth; }` + `* { scroll-margin-top: 80px; }`
- Buttons: `.btn-primary` (global), `.btn-demo` (scoped — transparent with border, dark mode gets `background: var(--cream2)`)
- Plan card hover zoom: `transform: scale(1.03)` with `box-shadow` on `.plan-card:hover`
- Form fields: `background: var(--card-bg)`, `border: 1px solid var(--border)`, `border-radius: 10px`, focus gets `border-color: var(--gold)`

## Homepage Hero Visual (`pages/index.vue`)
The right-side hero visual (`.hero-visual`) is a custom mockup built with scoped CSS — no Tailwind. Key classes:
- `.hv-window` — main browser-frame mockup (460px tall)
- `.hv-card-raw`, `.hv-card-jd`, `.hv-card-out` — three floating document cards (absolutely positioned, rotated)
- `.hv-orb-wrap` — animated AI orb (spinning rings + breathe animation), positioned `right: 28%; top: 64%`
- `.hv-pill-amber/dark/light` — floating feature pills
- `.hv-stats` — 3-column stat cards below the window
- `.hv-card-stripe` — gradient accent bar on the output card, pinned to `bottom: 0`

## Deployment
- Hosted on GitHub Pages as a **project page** at `/resumedog/`
- `baseURL: '/resumedog/'` set in `nuxt.config.ts`
- Static generation via `nuxt generate` → outputs to `.output/public/`
- CI/CD: `.github/workflows/deploy.yml` — triggers on push to `main`, deploys via `actions/deploy-pages@v4`
- `detectBrowserLanguage: false` required to prevent SSG hydration mismatches
- Explicit `nitro.prerender.routes` needed (crawlLinks disabled)

## Known Non-Issues
- `Failed to resolve import "#app-manifest"` in dev logs — Nuxt internal quirk, harmless
- `/terms`, `/contact`, `/privacy`, `/upload` are in `nitro.prerender.ignore` — those pages don't exist yet
- Vue Router warnings for `/privacy`, `/terms`, `/contact` in dev — expected, footer links to unbuilt pages
