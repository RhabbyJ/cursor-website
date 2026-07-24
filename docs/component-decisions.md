# Component Decisions

## Search order applied

1. No existing local UI library (greenfield).
2. No private registry.
3. Official shadcn/ui primitives for accessible foundations.
4. 21st.dev skipped for v1 to avoid unreviewed component dumps.
5. Custom section compositions for hero layers, project demos, and sheets operating model.

## Adopted

| Component | Source | Notes |
|---|---|---|
| Button | shadcn | Restyled via tokens; primary = accent fill |
| Input / Textarea / Label | shadcn | Form foundation |
| Separator | shadcn | Optional section rules |
| Phosphor Icons | `@phosphor-icons/react` | Regular weight in UI; bold sparingly for emphasis |
| Motion | `motion` | Entrances, hero layer stagger, hover layout |

## Rejected / deferred

- Anime.js — no timeline/SVG choreography that Motion cannot handle
- Carousel / accordion from community packs — not needed
- Chart libraries — would invite fake analytics

## Dependency policy

Only add packages required by stack policy: Next.js, React, Tailwind, class-variance-authority/clsx/tailwind-merge (shadcn utils), motion, phosphor icons, and shadcn radix primitives as installed by CLI.
