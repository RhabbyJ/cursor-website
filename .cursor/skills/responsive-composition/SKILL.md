---
name: responsive-composition
description: Reinterprets layouts and interactions across mobile, tablet, desktop, and wide screens instead of mechanically stacking desktop sections.
---
# Responsive Composition

For each major composition, decide what happens when space changes:

- what remains primary;
- what changes order;
- what becomes swipeable, collapsible, paged, or simplified;
- what visual detail can be reduced;
- what interaction changes from hover to touch;
- what must remain visible near the primary action.

Treat mobile as a designed mode, not a compressed desktop.

Inspect at minimum:

- narrow mobile;
- standard mobile;
- tablet portrait or landscape;
- laptop;
- desktop;
- wide desktop when the concept uses large canvases.

Check:

- text measure and scale;
- navigation and menu behavior;
- touch targets;
- horizontal overflow;
- image crops;
- shader/3D fallbacks;
- sticky and fixed elements;
- section-height assumptions;
- keyboard and orientation changes.
