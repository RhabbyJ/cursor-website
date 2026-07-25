---
name: motion-composition
description: Designs and implements a small number of high-quality signature and supporting motion experiences using Motion, Motion UI, React Bits, Anime.js, GSAP, CSS, or custom SVG as appropriate.
paths:
  - "**/*.{tsx,jsx,css,scss}"
---
# Motion Composition

Start from the selected visual route, not from a library catalogue.

## Motion hierarchy for design ambition 7+

- **One signature experience** — the memorable hero or proof interaction.
- **Up to two supporting interactions** — project transitions, data transformation, spatial gallery, or process reveal.
- **Micro-motion** — buttons, navigation, disclosure, focus, and state feedback.

## Tool selection

- CSS: simple state and hover/focus transitions.
- Motion: React layout, presence, gesture, spring, scroll-linked, and shared-element work.
- Motion UI / Motion examples: polished mechanics that match the concept and can be adapted.
- React Bits: selected generative, shader, kinetic, cursor, gallery, or animated block when it materially improves the route.
- Anime.js or GSAP: complex timeline/SVG/canvas choreography when declarative Motion becomes awkward.

Do not force all projects onto one library. Document meaningful dependencies.

## Gate

Motion must improve hierarchy, causality, delight, or brand character. Test performance, touch, resize, repeated entry, and `prefers-reduced-motion`. Remove low-quality blanket fade-up animation.
