---
name: build-web-experience
description: Orchestrates a new website or major web experience from brief through source scouting, visual direction, selected-route refinement, implementation, motion, browser critique, and production QA without imposing a fixed aesthetic.
---
# Build Web Experience

Use the active project prompt and `PROJECT_BRIEF.md` as the source of truth.

## 1. Determine the design mode

- **directed:** a strong reference, Figma target, screenshot, established design system, or explicit art direction exists. Implement that direction faithfully; do not create unrelated alternatives.
- **explore:** the identity is open. Build two or three compact, materially different routes for selection before expanding the site.
- **autonomous:** explore internally, have the visual critic compare rendered routes, choose the strongest route, and continue unless the decision is genuinely ambiguous.

## 2. Run a compact preflight

Inspect:

- framework, package manager, styling system, and current architecture;
- real content and assets;
- enabled MCPs, registries, and licenses;
- functional requirements;
- target devices and browsers;
- project-specific quality and performance constraints.

Do not write lengthy planning documents when a short decision note is sufficient.

## 3. Establish the design idea

Invoke relevant Skills:

- `/creative-brief` when audience, promise, proof, or emotional target is unclear;
- `/visual-source-scout` for source-first research on prominent visual surfaces;
- `/visual-directions` for open visual exploration;
- `/component-research` for broader registry and MCP discovery;
- `/composition-lab` for navigation, hero, background, section rhythm, and spatial language;
- `/visual-assets` for imagery, screenshots, illustration, SVG, 3D, or generated art.

For high-ambition projects, source scouting is mandatory before custom-building the signature hero/background, repeated-content system, or signature interaction.

## 4. Prototype the visual language early

Before building the whole site, render enough to judge the concept:

- navigation;
- first screen or primary application surface;
- one representative repeated-content or product section;
- mobile and desktop states;
- one meaningful interaction.

In `explore` mode, place concepts on isolated routes. In `directed` mode, compare the render against the supplied source.

## 5. Refine the selected direction before expansion

A selected route is a baseline, not the finished design.

Before implementing the complete site:

1. run `/signature-surface-pass`;
2. run `/asset-quality-pass` when backgrounds, imagery, video, canvas, shaders, or product screenshots are important;
3. run `/motion-design` to source and tune signature motion across pointer, keyboard, touch, mobile, and reduced-motion states;
4. run `/browser-critique` on the refined selected route;
5. correct generic boxes, weak imagery, blurry backgrounds, sluggish motion, pasted-demo styling, and merely stacked mobile composition.

Do not expand the complete site until the selected route passes this gate.

## 6. Implement the complete experience

- Build around the user's journey rather than a prompt checklist.
- Combine related ideas instead of giving each requirement an isolated section.
- Let different content types use different compositions when that improves the story.
- Use real screenshots and media for real work.
- Keep third-party components subordinate to the selected identity.
- Preserve accessibility, responsiveness, and application states.

## 7. Complete motion and critique

Extend the approved motion grammar across the full experience without turning every section into an effect demo. Run `/browser-critique` again on the complete site.

## 8. Complete technical QA

Use `/production-qa` for browser behavior, accessibility, console/network issues, performance, lint, typecheck, tests, and production build.

## Completion

Report:

- selected direction and why it fits this project;
- sources searched and components adopted or rejected;
- signature surface upgrades;
- asset-quality decisions;
- motion behavior by input and breakpoint;
- devices and flows tested;
- technical checks run;
- remaining placeholders or limitations.
