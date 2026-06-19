# Shishir Ahmed — Portfolio

Astro + Tailwind CSS portfolio site. Black & white design system, 8pt grid,
light/dark mode (system-preference based, no persistence), animated hero,
staggered work grid on Home, full project archive on Work.

## Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:4321

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel: **New Project** -> import the repo.
3. Framework preset: Vercel auto-detects **Astro** -- no config needed.
4. Build command: `npm run build` (default). Output directory: `dist` (default).
5. Deploy.

No environment variables are required for the current build.

## Things to finish before going fully live

### 1. Contact form backend — DONE
The contact form is wired to Formspree (`@formspree/ajax`, form ID `xwvjdjgn`)
via `data-fs-*` attributes in `src/pages/contact.astro`. Submissions go to
your Formspree dashboard. No further setup needed unless you want to change
field names, add a redirect, or enable spam filtering — see
https://help.formspree.io for those options.

### 2. Project live links (optional)
Each case study page (`src/pages/work/[slug].astro`) currently only shows
the screenshot. If you want a "Visit live site" link per project, add a
`url` field to the matching entry in `src/data/projects.ts` (the field
already exists in the TypeScript interface) and surface it in the page.

### 3. Replace remaining placeholder content
- About page "Learning about / Listening to / Enjoying" chips
  (`src/pages/about.astro`) are placeholder text -- edit to your real
  current interests if you want them more accurate.

## Project structure

```
src/
  assets/
    profile/        - your photo
    projects/        - all 13 project screenshots
  components/
    Navbar.astro      - nav with arrow-hover + dark mode toggle
    Footer.astro
    Hero.astro        - animated headline (SVG draw-on + slide-up)
    WorkGrid.astro     - reusable grid, stagger prop toggles the offset layout
  data/
    projects.ts        - single source of truth for all project info
  layouts/
    Layout.astro        - SEO meta tags, OpenGraph, theme init
  pages/
    index.astro          - Home
    work/index.astro       - Work (all projects, equal grid)
    work/[slug].astro       - individual case study pages (auto-generated per project)
    about.astro               - About
    contact.astro              - Contact
  styles/
    global.css                 - design tokens (light/dark), 8pt-grid utility classes
public/
  shishir-ahmed-cv.pdf          - your resume, linked from the About page
  theme-init.js                  - inline script, prevents flash of wrong theme on load
```

## Design tokens reference

| Token | Light | Dark |
|---|---|---|
| Background | #FFFFFF | #111111 |
| Surface | #F5F5F5 | #1A1A1A |
| Text | #0A0A0A | #F5F5F5 |
| Muted text | #666666 | #999999 |
| Border | #E0E0E0 | #2A2A2A |
| Status dot | #22C55E (constant in both modes) | |

All spacing throughout the site follows the 8pt grid (multiples of 8px).
