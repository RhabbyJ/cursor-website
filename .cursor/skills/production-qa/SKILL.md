---
name: production-qa
description: Verifies a web project technically after the visual direction is accepted, including accessibility, responsive behavior, runtime errors, performance, and build checks.
---
# Production QA

## Runtime

- Launch the real application.
- Test the primary user journeys.
- Inspect console errors and failed network requests.
- Test loading, empty, error, success, and validation states.
- Verify links, anchors, menus, forms, and route transitions.

## Accessibility

- semantic structure and landmarks;
- logical heading order;
- keyboard operation and focus visibility;
- labels and error announcements;
- contrast;
- decorative asset treatment;
- reduced motion;
- touch targets;
- no information dependent only on animation, hover, sound, or color.

## Responsive and compatibility

- inspect target widths and devices;
- verify orientation and resize behavior;
- test expensive visual effects on lower-capability paths when possible;
- provide image, CSS, or static fallbacks for unsupported effects.

## Engineering

Run available checks:

- format;
- lint;
- typecheck;
- tests;
- production build;
- bundle or performance analysis when relevant.

Do not weaken configuration or remove checks solely to obtain a pass.

Record what was actually tested and what remains unverified.
