---
name: component-scout
description: Searches and evaluates shadcn, 21st.dev, Motion UI, React Bits, private registries, and existing components; records real tool evidence and adapts only the strongest candidates.
paths:
  - "**/*.{tsx,jsx,css,scss,md}"
---
# Component Scout

The goal is not to collect components. The goal is to avoid reinventing every polished primitive while preserving one coherent art direction.

## Search order

1. Existing strong local components and private registry.
2. shadcn for accessible behavior and primitives.
3. 21st.dev for visual routes, themes, sections, and composition references.
4. Motion UI / Motion examples for polished choreography.
5. React Bits for selected animated or generative treatments.
6. Custom implementation for project-specific storytelling.

## Required record

Append to `docs/component-scout.md`:

- source and exact candidate name;
- search query/tool call;
- screenshot or preview reference;
- dependencies and license notes;
- what is being borrowed: behavior, composition, motion, or visual treatment;
- accepted/rejected decision;
- adaptation plan.

## Adoption rules

- Never import a full template and call the direction complete.
- Preserve the valuable mechanics; replace generic brand styling and copy.
- Verify responsive, keyboard, reduced-motion, and dependency behavior.
- One exceptional imported treatment is better than ten unrelated effects.
- Do not skip every external catalogue merely to avoid “component dumps.” Search first, then reject intelligently.
