---
name: visual-source-scout
description: Mandatory source-first research for high-impact web visuals. Searches approved registries and motion catalogues, previews candidates, and records adoption or rejection before custom implementation.
---
# Visual Source Scout

Use before implementing any high-impact visual surface when:

- visual ambition is 7 or higher;
- the brief requests a premium, grand, cinematic, expressive, artistic, animated, or memorable result;
- the surface will define the page's identity;
- or an existing surface looks like generic CSS, repeated boxes, or default AI-generated UI.

## 1. Define the surface role

Describe the exact need rather than searching for “cool UI.” Examples:

- animated navigation that remains usable on mobile;
- atmospheric hero background with depth but readable text;
- non-generic category system for six service groups;
- scroll-linked project showcase;
- tactile card interaction with keyboard and reduced-motion support;
- responsive visual transition between two sections.

Record the surface in `website-os/work/source-scout.md`.

## 2. Search relevant approved sources

Choose at least two sources appropriate to the need:

- **shadcn/ui:** accessible structural primitives and registry infrastructure;
- **Aceternity UI:** expressive backgrounds, heroes, navigation, spatial effects, animated cards, and marketing interactions;
- **21st:** broad multi-author discovery across components, themes, SVG assets, templates, and interaction patterns;
- **Motion UI / Motion AI Kit:** production motion sections, examples, springs, transitions, and motion audits;
- **Magic UI:** animated marketing primitives, effects, backgrounds, lists, marquees, and text treatments;
- **React Bits Pro:** licensed shaders, 3D, cursors, backgrounds, animated UI, blocks, and templates;
- **project/private registry:** proven internal components;
- **real reference sites or supplied designs:** composition and behavior grounding.

Actual searches must be executed through the available MCP, CLI, registry, or official catalogue. Do not claim a source was reviewed from memory.

If a source is unavailable, unauthenticated, or license-gated, record that and continue with other available sources.

## 3. Record serious candidates

For each serious candidate, record:

- source and component identifier;
- preview or registry location;
- visual strengths;
- behavior and states;
- mobile suitability;
- accessibility and reduced-motion risks;
- dependencies and bundle risk;
- license or authentication requirement;
- adaptation needed to fit the project.

Keep the shortlist small. Usually two or three serious candidates per surface are enough.

## 4. Preview before adoption

Render shortlisted candidates in an isolated lab route when the visual or motion behavior cannot be judged from a static preview.

Do not install every candidate into production code. Do not judge animated source from code alone.

## 5. Select, adapt, or reject

A selected component is a starting material. Adapt:

- typography;
- color and material treatment;
- spacing and proportions;
- icon or illustration language;
- real content;
- mobile composition;
- pointer, keyboard, touch, and focus behavior;
- reduced motion;
- performance fallbacks.

Custom implementation is acceptable only after recording why the sourced candidates do not serve the concept.

## Completion gate

A high-impact surface does not pass when its visual interest comes mainly from generic borders, rounded rectangles, radial gradients, blur circles, shadows, or floating fake UI without a reference, external primitive, real asset, bespoke illustration, meaningful interaction, or other project-specific idea.
