---
name: site-spec
description: Converts a website brief into an implementable page, content, interaction, data, analytics, and acceptance specification. Use after discovery and before coding.
---
# Site Specification

Create `docs/site-spec.md` and update `docs/acceptance.md`.

## Include

1. Experience classification: marketing, operations/data-powered, AI product, or hybrid.
2. Sitemap and route ownership.
3. Ordered narrative for each page: user question, answer, proof, action.
4. Content model and source for every material claim.
5. Component/section map with reuse candidates versus site-local pieces.
6. Interaction flows with loading, empty, validation, success, error, retry, and permission states.
7. Data contracts: source, adapter, schema validation, caching/freshness, fallback, security boundary.
8. AI contracts where applicable: input, output, limitations, evaluation, safety/privacy, human control.
9. Analytics events tied to decisions, not vanity tracking.
10. SEO/share metadata requirements.
11. Acceptance criteria expressed as observable behavior.

Do not prescribe a library merely because it is popular. The specification describes required behavior; implementation choices are justified separately.
