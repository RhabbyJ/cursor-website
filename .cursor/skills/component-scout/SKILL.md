---
name: component-scout
description: Finds, evaluates, installs, and normalizes UI components from the internal library, shadcn registries, and 21st.dev. Use before building a common component from scratch or importing community UI.
paths:
  - "**/*.{tsx,jsx,css,scss}"
---
# Component Scout

## Search order

1. Existing local component and section library.
2. Approved private registry.
3. Official shadcn component/registry.
4. 21st.dev or another reviewed shadcn-compatible source.
5. Custom implementation when the product need is genuinely specific.

## Evaluation

For each candidate, inspect:

- semantic and keyboard behavior;
- responsive and touch behavior;
- reduced-motion support;
- dependency count and package quality;
- compatibility with current React/framework versions;
- styling model and token compatibility;
- client-specific assumptions and hardcoded copy;
- bundle/runtime cost;
- license/provenance when material.

## Adoption

- Install or copy source only after inspection.
- Normalize colors, typography, radii, spacing, icons, imports, and animation to project conventions.
- Remove unused variants and dependencies.
- Run typecheck/build and inspect the component in the browser.
- Record material decisions in `docs/component-decisions.md`.

Do not collect components merely to make the registry large. Quality and proven reuse matter more than inventory count.
