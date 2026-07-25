---
name: browser-qa
description: Technically verifies the rendered website across responsive sizes, interactions, accessibility, console/network behavior, reduced motion, forms, and acceptance criteria after visual approval.
disable-model-invocation: true
---
# Browser QA

Use Cursor Browser or an available browser subagent.

1. Find the existing server and correct port; avoid duplicate servers.
2. Exercise primary routes and conversion/product flows.
3. Test around 390px, 768px, 1024px, 1440px, and a wide desktop.
4. Check keyboard navigation, focus visibility, labels, landmarks, heading order, touch behavior, and reduced motion.
5. Test form validation, loading, success, failure, retry, and spam handling when present.
6. Inspect console errors, failed requests, overflow, layout shift, and broken media.
7. Compare the render to the selected route and the behavioral acceptance criteria.
8. Write `docs/qa-report.md` with severity, evidence, reproduction, and fixes.

Technical QA does not replace the visual judge. Both must pass.
