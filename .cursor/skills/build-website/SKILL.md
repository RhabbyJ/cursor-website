---
name: build-website
description: Orchestrates a visual-first website build from experience brief through route selection, hero prototype, full implementation, visual judgment, and technical QA. Use for new landing pages, studio sites, portfolios, marketing sites, and major redesigns.
disable-model-invocation: true
---
# Build Website — Visual-First Workflow

## Phase 1 — Inspect and classify

- Inspect repository, current route, package manager, framework, assets, tests, and deployment constraints.
- Apply `experience-brief` and set the archetype plus `design_ambition`.
- Review Git status and create a checkpoint before a major redesign.

## Phase 2 — Prove the tools and evidence

- Apply `tool-preflight`; do not assume an MCP is usable merely because a config file exists.
- Apply `asset-inventory`; distinguish real project evidence, brand assets, generated art, and placeholders.

## Phase 3 — Explore visually

- Apply `visual-exploration` and delegate to `/art-director`.
- Create three runnable routes, each containing the hero and one proof/case-study slice.
- Capture screenshots at desktop and mobile.
- Do **not** build the full page yet.

## Phase 4 — Select and prototype

- Obtain user selection when the user is actively reviewing the work.
- When autonomous selection is explicitly authorized, run `/visual-judge` on all routes and choose the highest-scoring route; record the decision.
- Apply `hero-prototype` to polish the selected hero and proof slice until the visual judge passes.

## Phase 5 — Implement the full narrative

- Delegate implementation to `/implementation-engineer`.
- Build from the approved route rather than reverting to a generic section system.
- Add domain skills only when relevant: `sheets-powered` or `ai-product-experience`.
- Use real project assets as they become available.

## Phase 6 — Edit and animate

- Apply `editorial-pass` to remove repetition and prompt leakage.
- Apply `motion-composition` after static composition is strong.

## Phase 7 — Judge and verify

- Capture the actual rendered page.
- Run `/visual-judge` blind. Fix failures and repeat.
- Apply `browser-qa` and run `/qa-verifier`.
- Run `node scripts/visual-system-audit.mjs --strict` and `bash scripts/verify-web.sh` when available.

## Completion

Report selected route, source/catalogue decisions, real versus placeholder assets, signature experience, visual-judge score, browser widths and flows tested, commands run, and remaining limitations.

A complete checklist cannot override a failing screenshot.
