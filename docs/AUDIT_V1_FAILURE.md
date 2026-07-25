# Audit: Why Website OS v1 Produced a Weak Redesign

The audited project followed Website OS v1 closely. The weakness was therefore a systems problem, not simply model disobedience.

## Evidence from the project

The generated visual-direction document selected a **“Field Manual”** premise with:

- near-black canvas;
- restrained brass accent;
- sharp 2–6px radii;
- rare shadows;
- thin rules and data rails;
- technical/manual typography.

The component-decision document explicitly skipped 21st.dev “to avoid unreviewed component dumps,” adopted only basic shadcn form primitives, and kept Motion to modest entrances and state changes.

The implementation contained:

- 23 TSX files;
- no product images rendered through `<img>` or Next `<Image>`;
- only default Next/Vercel SVG assets in `public/`;
- approximately 182 border-related class tokens;
- approximately 53 monospace tokens;
- four `motion.*` elements;
- only a few utility icons;
- a literal founder “Photo” placeholder.

The acceptance document still marked the visual phase complete while real project screenshots and founder assets remained missing. The quality scorecard was never filled.

## Root causes

### 1. Prose substituted for art direction

The model wrote a coherent design rationale, then implemented it literally. No rendered visual alternatives were required before the full build.

### 2. Risk-weighted creativity selected austerity

Rules strongly discouraged familiar AI styles but did not positively require visual impact, depth, imagery, or a signature moment. “Avoid generic” became “avoid expressive.”

### 3. MCP availability was not MCP use

The system allowed component scouting to be skipped. A configured tool was treated as optional context instead of a step that had to produce evidence.

### 4. Missing real assets forced synthetic proof

No real HarnessMate, hospitality, MyBird, founder, or brand imagery existed in the repository. The agent responded with boxes, data rails, and CSS mock interfaces.

### 5. QA measured compliance, not desirability

Sections, flows, lint, typecheck, build, and responsive widths passed. No independent screenshot-first reviewer could fail the page for looking ordinary or austere.

### 6. One visual grammar infected every surface

The “data rail” became hero, differentiator, and process language. Reuse improved consistency while reducing surprise and visual range.

### 7. Utility icon consistency became visual limitation

Phosphor is appropriate for controls, but the system did not distinguish utility icons from bespoke brand illustration, project diagrams, or hero art.

## v2 correction

- visual routes before full build;
- explicit design-ambition profile;
- tool calls and search results logged;
- real-asset gate for portfolio proof;
- signature-experience requirement;
- screenshot-first visual judge;
- editorial subtraction;
- technical QA kept separate from visual approval.
