---
name: motion-direction
description: Creates a purposeful motion map and selects CSS, Motion, Anime.js, or copied Animista keyframes appropriately. Use after static hierarchy works or when animations need performance/accessibility review.
paths:
  - "**/*.{tsx,jsx,css,scss}"
---
# Motion Direction

Before coding, create a compact motion map:

| Trigger | Element | Purpose | Technique | Duration/easing | Reduced-motion behavior |
|---|---|---|---|---|---|

## Tool routing

- CSS: hover, focus, simple opacity/transform transitions.
- Motion: React presence, gesture, layout, shared-element, spring, and scroll-linked behavior.
- Anime.js: complex timeline, SVG path, canvas, object-value, or imperative choreography.
- Animista: source of small CSS keyframes only; copy and trim locally.

## Gates

- No animation without a stated purpose.
- No conflicting libraries on one element.
- No layout-thrashing loop when transform/opacity can express the effect.
- No scroll-jacking or long intro blocking the main action.
- Test repeated navigation, resize, touch, keyboard, and reduced motion.
- Remove effects that obscure content or noticeably delay interaction.
