# Start Here

## 1. Begin with a new project

The cleanest comparison is a fresh repository with no prior Website OS, generated design documents, or inherited homepage.

Create one with the included script or with `create-next-app@latest`, then copy this OS into the repository root.

## 2. Reopen Cursor

Confirm that Cursor shows:

- Rules under `.cursor/rules`;
- Skills under `.cursor/skills`;
- Subagents under `.cursor/agents`;
- the `shadcn` server under Tools & MCPs.

Enable the shadcn server manually if Cursor shows it as disabled.

## 3. Add design tools selectively

Read `website-os/MCP_SETUP.md`.

Recommended starting stack:

- shadcn MCP;
- 21st CLI/MCP;
- Magic UI MCP;
- Motion library.

Optional premium stack:

- Motion AI Kit / Motion+;
- React Bits Pro.

Do not install a library merely because it exists. Install it when the project concept calls for its capabilities.

## 4. Define the project—not the OS

Fill in `PROJECT_BRIEF.md` or paste a project prompt that covers the same decisions.

The most important fields are:

- business or product;
- audience;
- primary action;
- content and proof;
- desired emotional effect;
- visual references or anti-references;
- design mode;
- visual ambition;
- motion intensity;
- real assets available.

## 5. Run the appropriate workflow

Use:

```text
/build-web-experience
```

For an important new brand without a precise visual target, begin in `explore` mode. Cursor should build compact concept routes rather than an entire site three times.

For a project with a supplied Figma design, reference site, screenshot, or explicit visual direction, use `directed` mode.

For maximum automation, use `autonomous` mode and require the visual critic to compare rendered routes before one is selected.

## 6. Judge the browser—not the explanation

A convincing design rationale does not prove that the page looks good.

Review:

- the actual first screen;
- the real navigation interaction;
- one representative content section;
- mobile composition;
- motion behavior;
- real imagery and proof.

Only then let Cursor expand the selected language across the site.


## 7. Refine the winner before building the whole site

After selecting a route, run:

```text
Read website-os/prompts/refine-selected-concept-source-first.md and execute it.
```

Do not jump directly from concept selection to full-site expansion. The winning route must first pass source-first signature-surface, asset-quality, responsive-motion, and browser-critique gates.
