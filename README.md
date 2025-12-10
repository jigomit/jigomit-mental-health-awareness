# Mental Health Awareness — Marketing Site

Compassionate, conversion-focused mental health marketing site built with Vue 3 + Vite. The experience borrows proven patterns from 988 Lifeline, Mind UK, Beyond Blue, Crisis Text Line, and Calm to deliver faster CTAs, empathetic language, and transparent privacy messaging.

## Quick start

```bash
npm install
npm run dev      # start local dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview built assets
```

## Tech + structure

- Vue 3 with `<script setup>`, Vue Router for multi-route shell.
- GSAP + ScrollTrigger for hero depth, scroll reveals, and fade-in transitions with a reduced-motion toggle handled via `useReducedMotion`.
- Modular sections in `src/components` (hero, CTA, stats, card grids, testimonials, helpline modal, timeline, donation, forms).
- Content + checklist data centralized in `src/data/content.js` and imagery guidance in `src/assets/content/` (alt text JSON + notes).
- Routes live in `src/views`, each generating SEO meta via `usePageMeta`.

```
src/
  animations/gsapHelpers.js      # animation utilities + reduced motion fallbacks
  assets/images/                 # gradient placeholders ready to replace
  components/common/             # layout + global UI (header, footer, sticky CTA)
  components/sections/           # reusable marketing blocks
  composables/                   # page meta + reduced-motion state
  data/content.js                # copy, stats, checklist references
  views/                         # individual screens per brief
```

## UX details to highlight

- Announcement bar + persistent helpline pill for instant escalation.
- Sticky `Get Help` CTA plus secondary `Donate` across header + footer.
- Microcopy reminding visitors about confidentiality on forms, helpline, and donation flow.
- Resources + events include alt text suggestions and imagery guidance for easy asset swaps.
- Support modal acts as chatbot placeholder with privacy promises and human oversight notice.

## Animations & accessibility

- GSAP ScrollTrigger powers reveal and parallax effects; `useReducedMotion` stores preferences (with `prefers-reduced-motion` fallback) and toggles animations site-wide.
- Focus-visible styles, skip link, semantic headings, and keyboard-friendly nav keep the experience WCAG AA ready.

## Replace copy & media

- Update global strings or CTAs in `src/data/content.js`.
- Swap illustrations/photos inside `src/assets/images/`; follow alt text prompts in `src/assets/content/alt-text.json` and creative direction in `src/assets/content/imagery-notes.md`.
- For hero CTA variants or SEO copy, edit the exported helpers at the bottom of `content.js`.

## SEO checklist (also exported for programmatic use)

1. Unique titles/descriptions per route via `usePageMeta`.
2. Semantic headings + intent-focused keywords and CTAs.
3. Descriptive alt text for every illustration with lazy loading.
4. Internal links to `Get Help`/`Donate` on all routes.
5. Lightweight Vite build with critical CSS + clean URLs.

## Accessibility checklist

1. WCAG AA color contracts using CSS custom properties.
2. Keyboard-visible focus states + skip link.
3. Reduced-motion toggle syncing to system preferences.
4. ARIA labels on sticky helpline, nav toggle, and modal.
5. Form labels, consent copy, and validation-ready states.

## Hero copy + alternate CTAs

Hero line suggestion: “Mental Health Awareness surrounds every visitor with immediate care pathways—whether you need a quiet text-based check-in, an on-site counsellor, or a community that rallies until the crisis passes.”

Alternate CTA ideas:
1. Talk to Someone Now
2. Book a Counselling Intro Call
3. Download the Safety Planning Guide

## Deployment notes

- `npm run build` outputs a static `dist/` directory ready for any CDN or static host (Netlify, Vercel, Cloudflare Pages).
- Set appropriate caching headers for `/assets` and ensure `/get-help` route rewrites to `index.html` on SPA hosts.

## Updating animations

- Modify easing/timing in `src/animations/gsapHelpers.js`.
- Attach `[data-animate]` to new elements and import `createRevealAnimations` for scroll-triggered reveals.
- For new 3D depth effects, hook into `createHeroDepthAnimation` or extend with GSAP timelines.
# jigomit-mental-health-awareness
