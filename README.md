# Website OS v2 — Visual-First Cursor Starter

This starter turns Cursor into a **visual-first website studio**, not a checklist-driven page generator.

Version 1 improved structure and engineering discipline, but it could still produce austere, repetitive websites because a prose design document was allowed to stand in for visual art direction. Version 2 changes the order of work:

```text
Brief and quality profile
        ↓
Tool and asset preflight
        ↓
Three rendered visual routes
        ↓
Route selection
        ↓
Hero + one proof slice prototype
        ↓
Screenshot-based visual gate
        ↓
Full-page implementation
        ↓
Editorial subtraction
        ↓
Motion composition
        ↓
Blind visual judgment + technical QA
```

## The non-negotiable change

For high-ambition marketing, portfolio, and studio work, Cursor **must not build the entire page immediately**. It first creates three materially different visual routes as runnable prototypes. A route is selected only after viewing the rendered output. Prose such as “industrial,” “editorial,” or “premium” is not accepted as visual proof.

## What this starter fixes

- MCP tools are tested and logged before design work begins.
- External component discovery is required at higher design-ambition levels, but installation remains selective.
- Real project evidence is required for portfolio acceptance.
- Utility icons and brand expression are treated differently.
- One signature visual experience is expected on high-ambition pages.
- A blind visual judge can reject a technically correct but visually weak result.
- Editorial reduction happens after implementation so the first draft does not remain bloated.
- Rules are shorter and more positive; procedural detail lives in dynamically loaded skills.

## Important terms

### Design ambition

A 1–10 target stored in `docs/quality-profile.md`.

- Internal/admin UI: usually 4–6
- Operational product UI: usually 5–7
- Product marketing: usually 7–8
- Creative studio/portfolio: usually 8–9
- Campaign or experimental experience: usually 9–10

The studio landing-page prompt defaults to **9**.

### Signature experience

One polished visual or interactive moment that could be recognized in a screenshot or short recording. Examples include a beautifully choreographed product flow, shader-backed hero, spatial project gallery, kinetic typography sequence, or a highly polished interactive business-data demonstration.

### Visual route

A runnable mini-page containing the hero and one proof/case-study slice. Route A, B, and C must differ in composition, typography character, depth, imagery, and motion—not merely accent color.

## Install

Read `INSTALL.md`, then copy this starter's **contents** into the root of a fresh or existing Cursor project. For an existing v1 project, read `MIGRATION_FROM_V1.md` first.

## First command in Cursor

For a new site:

```text
/build-website

Read prompts/build-studio-landing-page.md and execute it exactly.
```

For the current austere or generic build:

```text
/build-website

Read prompts/visual-reset-existing-page.md. Preserve working behavior, but replace the visual direction using the v2 visual-route workflow. Do not build the complete redesign until a route passes the hero prototype gate.
```

## Directory map

```text
.cursor/
  rules/                 short persistent standards
  skills/                dynamic workflows
  agents/                independent specialists
  mcp.json               project-scoped shadcn MCP

docs/
  templates/             generated project documents
  AUDIT_V1_FAILURE.md    why the prior system produced weak output
  TOOL_SETUP.md          current tool setup and expectations

prompts/
  build-studio-landing-page.md
  visual-reset-existing-page.md

scripts/
  new-site-docs.sh
  new-site-docs.ps1
  verify-web.sh
  visual-system-audit.mjs
```

## Philosophy

The machine should reduce repetitive labor without removing the highest-leverage human decision: selecting the visual direction. Everything after that selection can be heavily automated.
