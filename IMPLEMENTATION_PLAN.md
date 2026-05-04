# Sanimotion Website — Redesign Implementation Plan

> **Source brief:** Redesign of [sanimotion.com](https://sanimotion.com/) using the design philosophy of [apple.com](https://www.apple.com/) — minimalism, whitespace, strong typography hierarchy, subtle motion, premium feel.
> **Architecture reference:** [LU Equity Platform Architecture Docs](https://dev-luequity.vercel.app/#frontend-planning) — frontend stack is adopted from this source.
> **Status:** Step 1 (planning) complete. Ready to begin Step 2 (project scaffold).

---

## 0. Locked Decisions

Confirmed by stakeholder. Non-negotiable for MVP unless explicitly revised.

### Design

| #   | Decision               | Value                                                                           |
| --- | ---------------------- | ------------------------------------------------------------------------------- |
| D1  | Tone of voice (German) | **Sie** (formal, B2B)                                                           |
| D2  | Brand accent color     | **`#0066FF`** (Sanimotion-blue)                                                 |
| D3  | Color mode             | **Light only at MVP** (matches apple.com default). Tokens stay dark-mode-ready. |
| D4  | Logo asset             | **Placeholder wordmark** in MVP. Real Sanimotion SVG dropped in later.          |
| D5  | Primary language       | **German (`de`)**. Architecture is locale-aware so EN can be added later.       |

### Stack & scope

| #   | Decision             | Value                                                                      |
| --- | -------------------- | -------------------------------------------------------------------------- |
| S1  | Framework            | **React 19 + React Router v7** (file-based routing, data loaders, SSR)     |
| S2  | Bundler / dev server | **Vite 6**                                                                 |
| S3  | Language             | **TypeScript 5.7 strict**                                                  |
| S4  | Styling              | **Tailwind CSS v4** (CSS-first, `@theme` in CSS, no `tailwind.config.js`)  |
| S5  | Component library    | **shadcn/ui** (Radix + Tailwind, owned code)                               |
| S6  | Fonts                | **Inter + JetBrains Mono via `@fontsource`** (self-hosted, GDPR-clean)     |
| S7  | Server state         | **TanStack Query v5** — included from day one                              |
| S8  | Client state         | **Zustand** — used for web + mobile nav, theme, UI prefs                   |
| S9  | Forms                | **React Hook Form + Zod v4** (`zodResolver`)                               |
| S10 | Animation            | Framer Motion (orchestration) + CSS (micro-interactions)                   |
| S11 | Analytics            | **Plausible** — privacy-first, no cookies, no consent banner needed        |
| S12 | Testing              | **Vitest + RTL** (unit/integration) + **Playwright** (e2e)                 |
| S13 | CI                   | **GitHub Actions 5-gate pipeline**: TypeScript → Lint → Unit → E2E → Build |
| S14 | Hosting              | **Cloudflare Pages** (CDN, PR previews, Workers available)                 |
| S15 | Content layer        | **Typed-content-first** — TS modules in `app/content/**` validated by Zod  |
| S16 | Insights / blog      | **In MVP scope**                                                           |

### Out of MVP scope (LU Equity stack pieces not relevant to a marketing redesign)

Auth (Keycloak / Supabase / Clerk / Better Auth), Email APIs (Resend / Postmark / Brevo / Twilio), Billing (Stripe / Lemon Squeezy), Cal.com embed, Supabase DB, TanStack Table, PostHog / Metabase / Superset.

> Architecture leaves hooks for any of these to be added later without rework.

---

## 1. Objectives & Non-Functional Requirements

- **Design philosophy:** Apple-inspired — minimal, whitespace-rich, strong type hierarchy, subtle motion. _Principles, not layouts._
- **Business context:** Sanimotion is a data / analytics / engineering consultancy. Copy and proof points lean technical-credible, not generic-corporate.
- **Performance:** Lighthouse ≥ 90 on all four pillars; target ≥ 95.
- **SEO:** Server-rendered (RR7 SSR), semantic HTML, per-route meta, JSON-LD, sitemap, robots, OG images.
- **Accessibility:** WCAG 2.1 AA. Keyboard navigable, visible focus, reduced-motion respected, color contrast verified against tokens.
- **Compliance:** DSGVO. Impressum + Datenschutz reachable from primary footer. No third-party scripts before consent (Plausible is consent-free).
- **Responsiveness:** Mobile-first. Breakpoints: `sm` ≥ 640, `md` ≥ 768, `lg` ≥ 1024, `xl` ≥ 1280.

---

## 2. Tech Stack (Authoritative — derived from LU Equity architecture)

### App core

- **React 19** — concurrent rendering, React Compiler (auto-memoize), Server Components support.
- **React Router v7** — file-based routing under `app/routes/`, nested layouts, data `loader` / `action` exports, server rendering, route-level `meta` export for SEO.
- **Vite 6** — Rollup-based build, HMR < 50 ms, native ESM.
- **TypeScript 5.7** — strict mode, path aliases via `tsconfig`, no `any`.

### Styling & UI

- **Tailwind CSS v4** — `@theme` directive in `app/styles/tokens.css`, no JS config file, Lightning CSS engine.
- **shadcn/ui** — copy-paste primitives on Radix + Tailwind. Installed via CLI into `app/components/ui/`. Default chrome trimmed to match Apple-minimal aesthetic.
- **Inter + JetBrains Mono via `@fontsource`** — self-hosted variable fonts, no Google CDN call.

### State, forms, data

- **TanStack Query v5** — server state cache, used for any future API call (contact form submission, future CMS reads). Wired from day one.
- **Zustand** — client-only global state: nav drawer (web + mobile), theme stub, UI preferences. **Never for server data.**
- **React Hook Form + Zod v4** — forms with `zodResolver`. Schemas live in `app/schemas/`.

### Motion

- **Framer Motion** — orchestrated entrance + scroll reveal.
- **CSS** — hover, focus, micro-interactions.

### Analytics

- **Plausible (cloud, EU region)** — `<1KB` script, no cookies, no consent banner. Vendor-agnostic wrapper in `app/lib/analytics.ts` so it can be swapped later.

### Testing

- **Vitest + React Testing Library** — unit + integration. Co-located in module `__tests__/unit/` and `__tests__/integration/`.
- **Playwright** — e2e under `e2e/` at project root. Covers navigation, contact form, key user flows.

### CI / CD

- **GitHub Actions — 5-gate pipeline:**
  1. **Type check** (`tsc --noEmit`)
  2. **Lint** (ESLint + Prettier check)
  3. **Unit + integration** (Vitest)
  4. **E2E** (Playwright headless)
  5. **Build** (Vite production build)
     All gates blocking; PR merge blocked until green. No `--no-verify`, no skip flags.
- **Cloudflare Pages** — connected to repo, PR previews automatic, production on `main`.

---

## A. Information Architecture

### Page inventory

| Route file              | Path                | Title (DE)            | Purpose                              |
| ----------------------- | ------------------- | --------------------- | ------------------------------------ |
| `_index.tsx`            | `/`                 | Startseite            | Brand statement + value prop + proof |
| `leistungen._index.tsx` | `/leistungen`       | Leistungen            | Service portfolio overview           |
| `leistungen.$slug.tsx`  | `/leistungen/:slug` | Leistungs-Detailseite | Per-service deep dive                |
| `ueber-uns.tsx`         | `/ueber-uns`        | Über uns              | Team, mission, methodology           |
| `referenzen._index.tsx` | `/referenzen`       | Referenzen            | Case studies index                   |
| `referenzen.$slug.tsx`  | `/referenzen/:slug` | Case Study Detail     | Single case study                    |
| `insights._index.tsx`   | `/insights`         | Insights              | Blog / thought leadership index      |
| `insights.$slug.tsx`    | `/insights/:slug`   | Artikel               | Blog article                         |
| `kontakt.tsx`           | `/kontakt`          | Kontakt               | Contact form + office info           |
| `impressum.tsx`         | `/impressum`        | Impressum             | TMG §5 (legally required)            |
| `datenschutz.tsx`       | `/datenschutz`      | Datenschutz           | DSGVO (legally required)             |
| `$.tsx`                 | catch-all           | 404                   | Not found                            |

### Primary navigation

`Leistungen · Referenzen · Über uns · Insights · Kontakt`
Right-aligned single CTA: **`Gespräch vereinbaren`** → `/kontakt`.

### Home page content order (DE)

1. **Hero** — single-line claim (e.g. _„Daten in Bewegung. Klarheit in Entscheidungen."_) + sub-headline + primary CTA.
2. **Capability strip** — 3–4 service pillars (icon + 1-line copy).
3. **Featured case study** — full-bleed proof point with a hero metric.
4. **Methodology** — 3-step process: _Verstehen → Aufbauen → Skalieren_.
5. **Stack & integrations** — monochrome logo wall (Snowflake, dbt, Databricks, Power BI, …).
6. **Testimonial** — single oversized quote.
7. **Closing CTA band** — inverse-tone, single sentence + button.
8. **Footer.**

---

## B. Design System

### Typography

- **Display + body:** Inter Variable (`@fontsource-variable/inter`).
- **Mono accent (data callouts only):** JetBrains Mono (`@fontsource-variable/jetbrains-mono`).
- **Scale (fluid via `clamp`)** — defined as Tailwind v4 `@theme` tokens:

| Token        | Min → Max   | Use                 |
| ------------ | ----------- | ------------------- |
| `display-xl` | 56 → 112 px | Hero claim          |
| `display-lg` | 40 → 80 px  | Section heroes      |
| `display-md` | 32 → 56 px  | Subsection titles   |
| `heading-lg` | 24 → 32 px  | Card / block titles |
| `heading-md` | 20 → 24 px  | Inline headings     |
| `body-lg`    | 18 → 21 px  | Lead paragraphs     |
| `body-md`    | 16 px       | Default body        |
| `caption`    | 12 → 13 px  | Eyebrows, meta      |

- **Weights:** 400 body / 500 UI / 600 display. Avoid 700+; rely on size for hierarchy.
- **Tracking:** display headings `-0.02em` to `-0.04em`; body default.

### Color tokens (Light, MVP)

Declared in `app/styles/tokens.css` under `@theme`:

| Token                     | Value     | Role                 |
| ------------------------- | --------- | -------------------- |
| `--color-bg-canvas`       | `#FBFBFD` | Page background      |
| `--color-bg-surface`      | `#FFFFFF` | Cards, elevated      |
| `--color-bg-muted`        | `#F2F2F4` | Section bands        |
| `--color-text-primary`    | `#0A0A0B` | Headings, body       |
| `--color-text-secondary`  | `#5B5B66` | Sub-copy             |
| `--color-text-tertiary`   | `#86868B` | Captions, meta       |
| `--color-border-subtle`   | `#E6E6EA` | Hairlines            |
| `--color-accent-primary`  | `#0066FF` | Sanimotion-blue      |
| `--color-accent-contrast` | `#FFFFFF` | Foreground on accent |

> Dark-mode token block pre-reserved but not shipped. Switching is a token swap, not a rewrite.

### Spacing

4 px base, 8 px primary rhythm:
`space-1`(4) · `space-2`(8) · `space-3`(12) · `space-4`(16) · `space-6`(24) · `space-8`(32) · `space-12`(48) · `space-16`(64) · `space-24`(96) · `space-32`(128) · `space-48`(192).

**Section vertical padding:** `py-24` mobile → `py-48` desktop. _This is the single biggest Apple-feel lever._

### Layout grid

- Container: `max-w-[1280px]`, gutters `px-6` → `px-10`.
- Prose width: `max-w-[1080px]`.
- 12 / 6 / 4 column CSS Grid (desktop / tablet / mobile).

### Radius & elevation

- Radii: `0` (sections / hairlines), `12px` (cards), `999px` (pills).
- Shadow: one token only — `shadow-soft = 0 1px 2px rgba(0,0,0,.04), 0 8px 24px rgba(0,0,0,.04)`. Used sparingly.

### Motion tokens

- Durations: `fast` 150 ms · `base` 300 ms · `slow` 600 ms.
- Easing: `cubic-bezier(0.22, 1, 0.36, 1)` (out-expo — the Apple feel).
- Global respect for `prefers-reduced-motion: reduce`.

---

## C. Component Breakdown

Three layers: **shadcn primitives** (in `components/ui/`) → **app primitives** (`components/primitives/`) → **page sections** (`components/sections/`).

### `components/ui/` — shadcn-installed primitives

Installed via CLI as needed: `Button`, `Dialog`, `Sheet` (mobile menu), `NavigationMenu`, `Form`, `Input`, `Textarea`, `Checkbox`, `Label`, `Toast`. Restyled to Sanimotion tokens.

### `components/primitives/` — app-specific primitives

- `Container` — width-constrained wrapper.
- `Section` — vertical rhythm + `tone` prop (canvas / muted / inverse).
- `Eyebrow` — small uppercase caption above headings.
- `Heading` — typed `as` + `size` props mapping to scale.
- `Prose` — typographic block for long-form content.
- `SmartLink` — wraps RR7 `<Link>`, auto-detects external URLs.
- `Icon` — Lucide-based wrapper.
- `Logo` — placeholder wordmark for MVP, swap-ready.
- `Reveal` — IntersectionObserver-driven fade/translate primitive.

### `components/layout/`

- **Navbar** — sticky, transparent over hero, `backdrop-blur` + hairline once `scrollY > 8`. State managed in **Zustand store** `useUiStore` (open/closed mobile menu, theme stub).
- **MobileMenu** — `Sheet` from shadcn, large tap targets (`text-2xl`), full-screen overlay.
- **Footer** — 4 columns desktop, stacked mobile: _Leistungen · Unternehmen · Rechtliches · Kontakt_.

### `components/sections/`

`HeroPrimary` · `HeroSecondary` · `CapabilityGrid` · `FeatureSplit` · `MetricBand` · `CaseStudyFeatured` · `CaseStudyCard` · `ProcessSteps` · `LogoWall` · `Testimonial` · `CtaBand` · `ContactForm` · `ArticleList` · `ArticleHeader` · `ArticleBody`.

### Component contract

- Every section accepts a typed `content` prop. **No inline copy in JSX.**
- No section reaches outside its props for data.
- Sections render correctly with JS disabled; animation layered on top.

---

## D. Animation Strategy

### Library boundaries

- **Framer Motion** — orchestrated entrance / scroll reveal.
- **CSS only** — hover, focus, micro-interactions.
- **No GSAP, no Lottie** at MVP.

### Patterns

1. **Scroll reveal** — `Reveal` primitive: `opacity 0→1`, `translateY 16→0`, 600 ms, child stagger 60 ms. `IntersectionObserver` `threshold: 0.15`, fires once.
2. **Hero entrance** — sequential reveal on mount: eyebrow → headline → sub → CTA, 80 ms stagger.
3. **Navbar transition** — `backdrop-blur` + border fade in over 200 ms when `scrollY > 8`.
4. **Hover** — buttons: background tone shift only (no scale). Cards: `translateY(-2px)` + border tone, 200 ms.
5. **Page transitions** — none in MVP. They cost LCP.
6. **Image reveal** — soft `scale 1.04 → 1` paired with fade.

### Performance guardrails

- Animate only `transform` and `opacity`.
- `will-change` only on the actively animating element, removed on completion.
- All non-essential motion disabled under `prefers-reduced-motion: reduce`.
- Framer Motion code-split: dynamic import where it isn't above the fold.

---

## E. Folder & Code Structure

```
app/
  root.tsx                           # Root layout: <html>, <head>, fonts, providers
  entry.client.tsx                   # Hydration entry
  entry.server.tsx                   # SSR entry
  routes/
    _index.tsx                       # Home (Startseite)
    leistungen._index.tsx
    leistungen.$slug.tsx
    referenzen._index.tsx
    referenzen.$slug.tsx
    ueber-uns.tsx
    insights._index.tsx
    insights.$slug.tsx
    kontakt.tsx
    impressum.tsx
    datenschutz.tsx
    sitemap[.xml].tsx                # Generated sitemap
    robots[.txt].tsx                 # Generated robots
    $.tsx                            # 404 catch-all
  components/
    ui/                              # shadcn-installed primitives
    primitives/                      # App-specific primitives
    layout/                          # Navbar, Footer, MobileMenu
    sections/                        # Page-level composed blocks
    icons/
  content/
    site.ts                          # Site-wide constants (nav, footer, metadata)
    pages/
      home.ts
      ueber-uns.ts
      kontakt.ts
    services/                        # One module per service
    case-studies/                    # One module per case study
    insights/                        # One module per article
  schemas/
    content.ts                       # Zod schemas for all content types
    forms.ts                         # Zod schemas for forms (contact, etc.)
  stores/
    ui.ts                            # Zustand: nav/menu/theme stub
  lib/
    seo.ts                           # meta() helpers for RR7 routes
    motion.ts                        # Shared motion variants & easings
    cn.ts                            # className merge util
    analytics.ts                     # Plausible wrapper, vendor-agnostic
    query-client.ts                  # TanStack Query client factory
  styles/
    globals.css                      # Tailwind v4 import + base resets
    tokens.css                        # @theme tokens (colors, spacing, radii, fonts)
  __tests__/                         # Co-located unit/integration tests
e2e/                                  # Playwright e2e tests
public/
  fonts/                             # Self-hosted variable fonts (via @fontsource)
  images/
.github/workflows/
  ci.yml                             # 5-gate pipeline
vite.config.ts
tsconfig.json
postcss.config.mjs                    # Tailwind v4
playwright.config.ts
vitest.config.ts
```

### Code conventions

- `Section` and `Container` always wrap route content — no raw padding in routes.
- Default to SSR; isolate browser-only logic behind `useEffect` or a `ClientOnly` wrapper.
- All content imports are typed; Zod validates at module load (build-time fail).
- One file = one default export + colocated types. **No barrel files.**
- Path alias `~/*` → `app/*` (RR7 convention).

---

## F. Data Strategy

### MVP — typed static content

- All copy lives in `app/content/**` as typed TS modules.
- `app/schemas/content.ts` enforces shape with Zod; build fails on mismatch.
- Routes consume content via `loader` exports → typed access in components via `useLoaderData<typeof loader>()`.

### CMS-readiness (deferred)

- Each route's `loader` reads through a `getContent(<key>)` accessor. Today it imports from `app/content/`; later it can fetch from a CMS without touching components.
- Recommended future CMS: **Sanity** (best DX) or **Payload** (self-hosted, German data residency).
- Locale: content modules keyed for `de` from day one; adding `en` is structural, not a rewrite.

### Images & media

- Vite `?url` / `?as=metadata` imports for static assets.
- Responsive images via `<picture>` with `srcset` and AVIF + WebP sources.
- LCP images preloaded via `<link rel="preload">` in route `links` export.

### SEO foundation

- Per-route `meta` export (RR7) with title, description, canonical, OG, locale.
- `app/routes/sitemap[.xml].tsx` + `app/routes/robots[.txt].tsx` generate from the route map and content modules.
- JSON-LD: `Organization` (root), `Service` (service pages), `Article` (insights), `BreadcrumbList`.
- `lang="de"` on `<html>`; `hreflang` ready for EN.

### Compliance (German market)

- **Plausible** is cookieless and GDPR-compliant — no consent banner required.
- Contact form: explicit consent checkbox, link to `/datenschutz`, server-side rate limit (Cloudflare Worker route in front of any future API).
- `Impressum` and `Datenschutz` exposed in primary footer.

---

## G. Testing & Quality Gates

### Test layout

```
app/components/sections/HeroPrimary/
  HeroPrimary.tsx
  __tests__/
    unit/HeroPrimary.test.tsx
e2e/
  home.spec.ts
  navigation.spec.ts
  contact-form.spec.ts
```

### Coverage targets at MVP

- **Unit + integration (Vitest + RTL):** all `primitives/`, all `sections/` smoke renders + critical interactions, all Zod schemas, all stores, all `lib/` utilities.
- **E2E (Playwright):** primary navigation, mobile menu, all top-level routes load (200 + h1 visible), contact form happy path + validation errors, 404 route.
- **Accessibility:** Playwright + `@axe-core/playwright` smoke check on every top-level route.

### CI — GitHub Actions 5-gate

| Gate                  | Command                          | Blocks merge? |
| --------------------- | -------------------------------- | ------------- |
| 1. Type check         | `tsc --noEmit`                   | ✅            |
| 2. Lint               | `eslint . && prettier --check .` | ✅            |
| 3. Unit / integration | `vitest run`                     | ✅            |
| 4. E2E                | `playwright test`                | ✅            |
| 5. Build              | `vite build`                     | ✅            |

No `--no-verify`, no skip flags. Cache `node_modules` and Playwright browsers between runs.

---

## Execution Order (Step 2 onward)

Each step is self-contained and ends with a working, viewable result. **Stop after each and wait for approval.**

1. **Project scaffold** — RR7 + Vite + TS strict + Tailwind v4 + tokens + `@fontsource` Inter & JetBrains Mono + ESLint/Prettier + path alias `~/*`. Empty home renders at correct typographic scale on canvas color.
2. **Quality gates wired** — Vitest + RTL + Playwright + GitHub Actions 5-gate workflow. One smoke test per gate to prove the pipeline runs.
3. **Design system primitives** — install needed shadcn components, build `components/primitives/*`, dev-only showcase route at `/_dev/ui` (route-guarded by env).
4. **Layout shell** — Navbar + Footer + MobileMenu, Zustand `useUiStore`, sticky/blur behavior, full nav structure with placeholder pages.
5. **Home page** — all sections composed against typed content. Animations on. Loader + Zod schema validation in place.
6. **Service pages** — index + dynamic `:slug` + 3–4 service content modules.
7. **About + Contact** — including DSGVO-compliant form with RHF + Zod + TanStack Query mutation to a Cloudflare Worker stub.
8. **Case studies** — index + dynamic detail.
9. **Insights / blog** — index + dynamic article (MDX-ready).
10. **Legal pages** — Impressum + Datenschutz.
11. **SEO** — sitemap, robots, JSON-LD, OG image generation.
12. **Analytics** — Plausible wired through `lib/analytics.ts`.
13. **Performance pass** — Lighthouse audit; image / font / motion audit. Target ≥ 95 on all four scores.
14. **Cloudflare Pages deploy** — production deploy + preview workflow validated.

---

## Acceptance Criteria for MVP

- All routes in §A render without console errors or hydration warnings.
- Lighthouse (mobile, throttled): Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95.
- No third-party network requests at first paint (Plausible loads after main thread idle).
- Keyboard-only navigation reaches every interactive element with visible focus.
- `prefers-reduced-motion: reduce` disables all non-essential animation.
- All five CI gates green on `main` and on every PR.
- Build is green with TypeScript strict mode and Zod content validation.

---

_End of plan. Ready to begin Step 2: project scaffold._
