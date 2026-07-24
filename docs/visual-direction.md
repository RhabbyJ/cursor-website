# Visual Direction

## Desired belief and tone

Belief: this is a precise software studio that builds operating systems for businesses—not a freelance portfolio or generic agency.

Tone: technical, confident, high quality, modern, precise, slightly futuristic without cyberpunk cliché.

## Candidate directions

### Direction A — “Control Plane”

Dark graphite workspace aesthetic. Multi-panel layered interfaces as the primary visual language. Hairline borders, monospace accents for system labels, cool steel blue as the only accent. Feels like infrastructure software.

### Direction B — “Daylight Engineering”

Bright paper surfaces, deep ink typography, restrained teal accent. Editorial layout with technical diagrams. Feels like a high-end product brochure for engineering tools.

### Direction C — “Warm Terminal”

Cream canvas with charcoal type and amber terminal accents. Dense type and grid rules. Risks overlapping the “cream + terracotta agency” anti-pattern cluster.

## Decision matrix

| Direction | Audience fit | Distinctiveness | Content fit | Accessibility | Performance | Risk |
|---|---:|---:|---:|---:|---:|---:|
| A Control Plane | 5 | 5 | 5 | 4 | 5 | Low–med (dark contrast care) |
| B Daylight Engineering | 4 | 4 | 4 | 5 | 5 | Medium (can feel brochure-y) |
| C Warm Terminal | 3 | 3 | 3 | 4 | 5 | High (generic cream cluster) |

## Selected direction

**Direction A — Control Plane**

Matches the multi-layer hero (website / data / automation / AI), suits engineering + hospitality + founder audiences when executed with clarity (not neon), and supports HTML/CSS interface demos without stock photography.

## Typography

- **Display / brand:** `Syne` — geometric, modern, slightly industrial
- **Body / UI:** `IBM Plex Sans` — technical clarity, excellent for product UI copy
- **Mono / system labels:** `IBM Plex Mono` — layer tags, step numbers, schema labels

Scale character: confident display sizes on hero; tight, readable body; mono reserved for “system” captions only.

## Color and surfaces

| Role | Token | Value |
|---|---|---|
| Canvas | `--bg` | `#0B0D10` |
| Raised surface | `--surface` | `#12151A` |
| Elevated | `--surface-2` | `#1A1F27` |
| Border | `--border` | `#2A3140` |
| Border strong | `--border-strong` | `#3D4658` |
| Text | `--fg` | `#E8ECF2` |
| Muted text | `--muted` | `#9AA3B2` |
| Accent | `--accent` | `#5B8CFF` |
| Accent soft | `--accent-soft` | `rgba(91, 140, 255, 0.14)` |
| Success | `--ok` | `#3DCF8E` |
| Warning | `--warn` | `#E6B84D` |

Contrast strategy: light text on dark surfaces; accent used sparingly for CTAs and active layer indicators. Borders define structure more than shadows.

## Layout grammar and rhythm

- Max content width: ~1120–1200px; hero may use full-bleed atmosphere with constrained copy column
- Section rhythm: alternate dense narrative blocks with one wide demonstration composition—never identical card grids stacked
- Spacing scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96
- Radii: `4` (controls), `8` (panels), `12` (large frames)—no pill-everywhere
- Shadows: minimal; prefer border + subtle elevation glow only on focused interactive panels

## Image/product-demo approach

No stock photos. All proof via interface compositions:

1. **Hero layers:** stacked translucent panels representing public site, sheet data, automation, AI
2. **HarnessMate:** search + mate + spec panel mock
3. **Sheets model:** 4-step horizontal/vertical flow with sheet → validated → site
4. **MyBird:** property discovery + inquiry workflow strip

## Signature motif or interaction

**Layer stack** — a recurring visual of stacked system planes with a selectable/highlighted active layer. Used in the hero and echoed as a small motif in section labels (e.g. `L01`, `L02`).

## Motion character

Restrained. Entrances: short fade + 8–12px rise. Hero: staggered layer reveal once. Hover: border/accent shift, not bounce. Scroll: optional layer highlight sync. No scroll-jacking. Reduced motion: static final state, no stagger.

## Mobile adaptation

- Hero layers collapse to a vertical stack with abbreviated labels
- Services become a single-column list with icon + title + one line
- Featured work: full-width project blocks stacked
- Sticky compact header with menu sheet
- CTA form full-width fields

## Anti-patterns

- Purple/indigo startup gradients
- Cream + terracotta editorial cliché
- Glassmorphism blobs and neon cyberpunk grids
- Three identical rounded feature cards repeating every section
- Fake analytics dashboards and invented testimonials
- Giant empty hero with centered fluff headline
- Animating every element on scroll
