# Visual Direction — Redesign v2

## Desired belief and tone

Belief after first screen: Operator connects websites to the data and workflows a business actually runs—and I can see proof before I enquire.

Tone: operational-editorial. Precise, calm, industrial. Field-manual clarity without coldness. Founder-operated studio, not agency theater.

## Selected premise: “Field Manual”

Inspired by technical manuals, product documentation, system diagrams, and editorial software case studies.

### Tokens

| Role | Value |
|---|---|
| Canvas | `#0C0E11` |
| Ink / text | `#E7EAEF` |
| Muted | `#8B93A1` |
| Rule / border | `#2C3340` |
| Surface | `#14181F` |
| Signal accent | `#C8A45A` (restrained brass — not purple, not neon) |
| Accent soft | `rgba(200, 164, 90, 0.12)` |
| OK | `#4EAE84` |
| Danger | `#D16666` |
| Display | Syne |
| Body | IBM Plex Sans |
| Mono | IBM Plex Mono — **only** for part numbers, statuses, sheet cells, metadata |

### Layout grammar

- Asymmetrical case-study grids (copy 5 / proof 7 or reverse)
- Horizontal data rails and connecting rules instead of card stacks
- Section rhythm alternates: full-bleed proof → narrow editorial column → interactive split
- Radii: 2–6px; prefer sharp documentation panels
- Shadows rare; structure via 1px rules
- No repeating “eyebrow + H2 + paragraph + 3 cards” block

### Signature motif

**Data rail** — a thin horizontal or vertical rule that carries status ticks and flow arrows (edit → validate → publish → view).

## Motion map (3 signatures only)

| Trigger | Element | Purpose | Technique | Reduced motion |
|---|---|---|---|---|
| Load / in-view once | Hero flow stages | Cause-and-effect: edit→validate→site→customer | Motion staggered opacity + x, shared timeline | Show final connected state statically |
| User edit / toggle | Sheets demo | Preview updates when sheet data changes | Motion layout on preview rows | Instant state swap, flash status text |
| Step click / autoplay once | HarnessMate workflow | Search → select → mate → decide | Motion crossfade panels | Tabbed static panels |

No blanket fade-up on section entrances.

## Anti-patterns

- Purple AI gradients, glassmorphism, glowing cards
- Nine equal service tiles; three identical engagement cards
- Guardrail meta-copy (“no invented metrics”, “not instant magic”)
- “LIVE UI MODEL” badges on non-live demos
- Repeating L0x eyebrow pattern every section
- Decorative blobs / floating analytics

## Mobile recomposition

- Hero flow: vertical rail with 4 stages (not side-by-side desktop diagram)
- Sheets: stacked Sheet editor above preview; sticky “Apply” on small screens
- Engagement modes: progressive list with indent/level markers, not 3 equal cards
- Case studies: full-width product composition first, copy below
