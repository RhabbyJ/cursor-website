# Site Specification

## Experience classification

**Hybrid marketing** — conversion-focused studio landing page that narrates operational and AI product capabilities through interface demonstrations (no live operational data on this site).

## Sitemap and route ownership

| Route | Purpose | Ownership |
|---|---|---|
| `/` | Single-page landing (all sections) | Primary |
| `/privacy`, `/terms` | Reserved for later | Placeholder footer links |
| Future: `/work/[slug]`, `/services` | Case studies / deep dives | Not in v1 |

Architecture: App Router with section components under `src/components/sections/` so routes can later compose the same sections.

## Page narratives

| Page/section | User question | Answer | Proof | Action |
|---|---|---|---|---|
| Nav | Where can I go? | In-page anchors + CTA | Persistent primary CTA | Consult / Work |
| Hero | What do you build? | Websites, operational systems, AI software that run the business | Layered interface demo | Consult / View work |
| Studio | What is this studio? | Systems behind the website | Positioning statement | Continue |
| Services | What can you build for me? | Concrete service list spanning sites → apps | Capability grid with icons | Consult |
| Work | Have you built this before? | HarnessMate, Sheets bars, MyBird | Project presentations | Anchor to projects |
| Sheets | How do staff update content? | Sheet → validate → site updates | Visual 4-step operating model | Discuss for my business |
| AI & software | Do you build real software? | Portals, dashboards, search, automation, AI tools | Capability panels | Consult |
| Process | How do we work together? | Discovery → system design → build → operate | Ordered steps | Consult |
| Difference | Why not a normal agency? | Agency ships pages; we ship operating systems | Contrast list | Consult |
| CTA | What should I do? | Request a consultation / estimate | Clear form | Submit |
| Footer | How else do I reach you? | Contact + legal placeholders | Links | Email |

## Component map

**Owned / local**

- `SiteHeader`, `SiteFooter`
- `HeroSystemLayers` (signature multi-layer demo)
- `StudioIntro`, `ServicesGrid`, `FeaturedWork`, `SheetsOperatingModel`, `AiCapabilities`, `ProcessSteps`, `AgencyDifference`, `ConsultCta`
- Design tokens in CSS variables
- Motion primitives (`FadeIn`, `Reveal`)

**shadcn primitives (normalized)**

- `Button`, `Input`, `Textarea`, `Label`, `Separator` (as needed)

**Not used in v1**

- 21st.dev dumps, card-heavy pricing, fake testimonial carousels, Anime.js

## Content model and sources

| Content | Source | Notes |
|---|---|---|
| Brand, positioning, services | `docs/site-brief.md` + static TS content module | No CMS |
| Project case content | Owner-provided capabilities only | No metrics |
| Form fields | Name, business, email, project type, message | Client-side validation |

## Interaction flows and states

### Consultation form

| State | Behavior |
|---|---|
| Idle | Empty fields, enabled submit |
| Validation error | Inline field errors; focus first invalid |
| Submitting | Disabled submit; “Sending…” label |
| Success | Confirmation message; form clears or hides |
| Error | Retry message if mailto/open fails |

No loading/empty data states for remote content (static page).

### Navigation

- Smooth scroll to section anchors
- Mobile menu: open/close, Escape, focus trap-lite, body scroll lock optional
- Keyboard: Tab through controls; visible focus rings

## Data contracts

None for v1. Future Sheets/CRM adapters live under `src/lib/adapters/` when needed.

## AI contracts

None on-page. Marketing only.

## Analytics events

| Event | Trigger | Purpose |
|---|---|---|
| `cta_consult_click` | Primary CTA | Funnel |
| `cta_work_click` | Secondary CTA | Engagement |
| `consult_submit_success` | Form success | Conversion |
| `nav_section_click` | Section jump | Navigation quality |

Implement as typed helpers; wire to `console`/`dataLayer` stub until analytics is chosen.

## SEO and sharing

- Title: `Operator — Websites, systems, and AI software for business`
- Description: concrete offer sentence (no fluff)
- Open Graph title/description matching
- Semantic landmarks: `header`, `main`, `footer`, section headings

## Acceptance criteria link

See `docs/acceptance.md`.
