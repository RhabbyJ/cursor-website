---
name: discovery-brief
description: Creates or repairs the strategic brief for a website or web product. Use before a new build, redesign, new page, or when audience, conversion goal, product capability, data source, or proof is unclear.
---
# Discovery Brief

Create `docs/site-brief.md` from the request, repository, current site, available assets, and integrations.

## Required sections

- Business and offer
- Primary audience and context
- User job and pain
- Desired belief after the first screen
- Primary conversion/action
- Secondary actions
- Functional capabilities
- Data sources and operational owners
- AI capability contract, when applicable
- Proof available and proof missing
- Content/assets available and missing
- Constraints: brand, legal, privacy, accessibility, performance, framework, deadline
- Explicit assumptions
- Open risks that can materially change architecture

## Behavior

- Do not block on ordinary missing marketing details. Infer a defensible draft and label assumptions.
- Never invent facts, testimonials, integrations, metrics, certifications, or customer outcomes.
- Distinguish what the business does from what the website must do.
- For an operational site, document the back-office workflow: who changes the data, where, and what users see.
- For an AI tool, document input, output, model/service boundary, latency expectation, failure state, privacy expectations, and human override.
