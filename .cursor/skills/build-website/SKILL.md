---
name: build-website
description: Orchestrates a complete, production-quality website or web-product build from discovery through browser verification. Use for new client sites, major redesigns, landing pages, portfolios, dashboards, and AI-enabled product experiences.
disable-model-invocation: true
---
# Build Website

Deliver a validated business experience, not a one-shot code generation.

## Workflow

1. **Inspect**
   - Identify framework, package manager, routes, design tokens, components, data sources, current tests, and deployment constraints.
   - Review current Git changes before editing.

2. **Brief**
   - Apply the `discovery-brief` skill.
   - Infer missing details from the repository and request; mark them as assumptions rather than blocking.

3. **Specify**
   - Apply the `site-spec` skill.
   - Classify the experience as marketing, operations/data-powered, AI product, or hybrid.

4. **Direct**
   - Delegate visual/narrative planning to `/creative-director`.
   - Save the selected direction to `docs/visual-direction.md`.

5. **Scout**
   - Apply `component-scout`. Search owned components first, then official shadcn, then 21st.dev/community sources.
   - Record material component and dependency decisions.

6. **Implement**
   - Delegate to `/implementation-engineer`.
   - Build the first meaningful viewport and one complete interaction before the rest of the page.
   - Open the result in the browser early; do not wait until the end.

7. **Add capability-specific work**
   - Use `marketing-experience` for conversion/narrative sites.
   - Use `ai-product-experience` for AI tools and workflows.
   - Use `sheets-powered` for Google Sheets-backed experiences.

8. **Motion**
   - After the static hierarchy works, apply `motion-direction` and delegate specialist work to `/motion-engineer`.

9. **Verify**
   - Apply `browser-qa` and run `/qa-verifier`.
   - Fix all critical/high issues and rerun verification.
   - Run `bash scripts/verify-web.sh` when available.

10. **Report**
    - Summarize the user outcome, architecture, changed files, commands/tests, browser viewports/flows checked, assumptions, and remaining limitations.
    - Do not say “done” when any critical flow was not opened and exercised.

## Quality bar

Reject generic structure, placeholder copy, invented proof, hidden functionality, inaccessible controls, unexplained data freshness, console errors, and unverified responsive layouts.
