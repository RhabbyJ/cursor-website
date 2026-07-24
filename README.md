# Website OS for Cursor

A reusable operating layer for building sophisticated websites and AI-enabled web products with Cursor. This starter is intentionally an overlay: copy it into an existing React/Next.js project or use it in the template repository from which new client projects are created.

The operating loop is:

**Brief → specification → visual direction → component selection → implementation → motion → browser QA → promotion into the internal library.**

The system is designed to prevent the common failure mode where an agent immediately writes a generic hero, three cards, a gradient background, and placeholder copy.

## 1. Install the overlay

Copy these folders into the root of a project:

```text
.cursor/
docs/
prompts/
scripts/
```

Commit them to Git. Project rules, skills, and agents should evolve with the codebase rather than living only in personal Cursor settings.

## 2. Install the official UI context

Use the package runner already used by your project.

```bash
pnpm dlx skills add shadcn/ui
```

The included `.cursor/mcp.json` configures the shadcn MCP server. Enable it under Cursor's Customize/MCP settings after reopening the project.

For 21st.dev, run its current guided CLI and select Cursor during setup:

```bash
npx 21st
```

Use 21st.dev as a searchable source of candidate components, not as an uncontrolled dependency faucet. Every imported component must be reviewed, normalized to the project tokens, tested, and either promoted or discarded.

## 3. Install the runtime tools selectively

Recommended baseline for React projects:

```bash
pnpm add motion @phosphor-icons/react
```

Add Anime.js only when a page genuinely needs a complex timeline, SVG choreography, canvas animation, or imperative sequence:

```bash
pnpm add animejs
```

Animista is a CSS animation playground rather than a required runtime. Copy only the selected keyframes into the local motion layer and rename them semantically.

Motion+ users can install Motion's official AI Kit, skills, performance audit, and MCP:

```bash
npx motion-ai
```

## 4. Initialize the project documents

```bash
bash scripts/new-site-docs.sh
```

Then fill in only the facts you already know. The discovery skill is allowed to infer missing details from the repository and record them explicitly as assumptions rather than blocking the build.

## 5. Start a build

In Cursor Agent, invoke:

```text
/build-website Build or redesign [project/page]. The primary user is [...]. The business outcome is [...]. Use the existing codebase and data integrations. Do not claim completion until browser QA passes.
```

For an existing site, use `prompts/upgrade-existing-site.md` as the starting request.

## 6. Recommended repository architecture

For one or two sites, keep this overlay inside each repository. Once you are repeatedly sharing sections and data adapters, move to a workspace/monorepo:

```text
apps/
  harnessmate/
  mybird-real-estate/
  client-sites/
  component-showcase/
packages/
  ui/                 # shadcn primitives and approved components
  sections/           # heroes, feature narratives, proof, pricing, CTAs
  motion/             # motion tokens and reusable transitions
  data-adapters/      # Google Sheets, CMS, CRM, property feeds
  analytics/          # event names and helpers
  site-spec/          # schemas and generators
registry/             # private shadcn-compatible registry
blueprints/           # industry and product archetypes
```

Do not start with a huge monorepo migration if the current projects are unstable. First install the operating layer, stabilize the sites, and extract only components that have proved reusable.

## 7. The internal component promotion rule

A component is not reusable merely because it looks attractive. Promote it only when:

- it has no client-specific copy or data assumptions;
- its API is smaller than the repeated implementation it replaces;
- it supports keyboard use, reduced motion, and responsive states;
- it has survived browser QA in a real page;
- it is likely to be used again, or has already been used twice.

Everything else remains local to the site.

## 8. How to use the libraries

- **shadcn/ui:** accessible primitives and the foundation of your owned design system.
- **21st.dev:** component discovery and rapid prototyping. Inspect before adopting.
- **Motion:** default animation layer for React interactions, layout transitions, gestures, and scroll-linked effects.
- **Anime.js:** specialist tool for intricate timelines, SVG/canvas work, and imperative choreography.
- **Animista:** source for small CSS entrance/exit keyframes; copy only what is needed.
- **Phosphor Icons:** the single default icon family. Keep one weight per context.
- **Manus:** a separate execution environment and useful workflow/ideation agent. Keep the core Website OS in portable Agent Skills so the same workflows can travel between Cursor, Manus, Codex, and other compatible agents.

## 9. Suggested rollout using your existing portfolio

1. Run `/design-critique` and `/browser-qa` on HarnessMate and MyBird Real Estate.
2. Document the strongest section, interaction, data adapter, and motion pattern from each.
3. Promote only those proven pieces into `packages/` or a private registry.
4. Build a component-showcase app where every approved section can be viewed at phone, tablet, and desktop widths.
5. Turn each project into a case study that explains the operating system behind it: data source, workflow, automation, AI capability, and business outcome.
6. Use the postmortem skill after every launch so recurring failures become rules, scripts, or improved skills.

## 10. Optional deterministic formatting hook

The file `.cursor/hooks.example.json` runs Prettier after agent edits when a local Prettier installation is available. Rename it to `.cursor/hooks.json` only after testing it in the project.

## Definition of done

A website is done only when:

- it communicates a specific promise to a specific audience;
- the first screen contains a real action and real proof;
- its functional/data-powered nature is visible, not hidden in a footnote;
- all important states work: loading, empty, success, validation, error;
- phone, tablet, and desktop layouts have been visually inspected;
- keyboard navigation, focus, contrast, reduced motion, console, and network behavior pass;
- lint, typecheck, tests, and build pass where those scripts exist;
- known assumptions and remaining limitations are reported honestly.
