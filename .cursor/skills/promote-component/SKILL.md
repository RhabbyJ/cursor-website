---
name: promote-component
description: Converts a proven site-local component, section, motion pattern, or data adapter into a reusable internal package or shadcn-compatible registry item. Use after successful real-page usage, not during initial experimentation.
disable-model-invocation: true
---
# Promote Component

## Promotion test

Promote only when the candidate:

- is already reused or has a clear near-term second use;
- contains no client-specific copy, analytics IDs, routes, or data assumptions;
- has a coherent and minimal API;
- supports responsive, keyboard, focus, reduced-motion, loading, and error states as applicable;
- has passed browser QA in a real page;
- is cheaper to maintain centrally than locally.

## Process

1. Identify the stable core and leave site-specific composition in the site.
2. Replace literals with semantic tokens or explicit props.
3. Remove unnecessary variants and dependencies.
4. Add usage documentation and a visual example/showcase route.
5. Add automated tests where behavior warrants them.
6. Preserve source provenance and license notes when imported.
7. Publish to `packages/ui`, `packages/sections`, `packages/motion`, `packages/data-adapters`, or the private registry.
8. Update existing sites to consume the promoted item only after verification.
