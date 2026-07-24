---
name: browser-qa
description: Verifies a local website in Cursor's browser across responsive sizes, interactions, accessibility, console/network behavior, and acceptance criteria. Use before completion, after major visual changes, or when a screenshot does not match the intended design.
disable-model-invocation: true
---
# Browser QA

Use Cursor Browser or the Browser subagent.

## Procedure

1. Discover the existing development server and correct port; do not start duplicates.
2. Open the primary route and critical secondary routes.
3. Test around 375px, 768px, and 1440px widths, plus project-specific breakpoints.
4. Capture screenshots of the full page and important interactive states.
5. Exercise primary conversion/product flows, including validation and failure where feasible.
6. Use keyboard-only navigation; inspect focus visibility and order.
7. Check labels, heading structure, alternative text, contrast, touch/hover parity, and reduced motion.
8. Inspect console output and failed or suspicious network requests.
9. Compare behavior to `docs/acceptance.md` and visual composition to `docs/visual-direction.md`.
10. Write `docs/qa-report.md` with severity, reproduction, evidence, and recommended fix.

A pass requires no critical/high issues. Re-run after fixes rather than assuming they worked.
