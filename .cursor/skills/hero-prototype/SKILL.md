---
name: hero-prototype
description: Polishes the selected hero and one proof slice as a vertical prototype and requires screenshot-based approval before the rest of the page is built.
disable-model-invocation: true
---
# Hero Prototype Gate

Build only:

- navigation;
- first screen;
- first proof/case-study slice;
- signature visual experience;
- mobile adaptation.

## Required checks

- The offer and primary action are clear within the first viewport.
- The visual focal point is strong without relying on explanatory paragraphs.
- The signature experience is not a placeholder.
- The hero does not look like documentation, an admin panel, or a generic SaaS template unless that is the selected concept.
- Desktop and mobile are separately composed.
- Reduced motion preserves meaning.

Capture screenshots around 390px and 1440px, then run `/visual-judge`.

Do not implement the remaining page until the prototype scores at least 8.0 overall with no category below 7. Repeat the route or change direction rather than polishing a fundamentally weak composition.
