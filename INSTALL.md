# Installation

## 1. Checkpoint the current project

```bash
git add .
git commit -m "Checkpoint before Website OS v2"
```

For an existing v1 installation, follow `MIGRATION_FROM_V1.md` instead of merging files manually.

## 2. Copy the starter contents into the repository root

Correct:

```text
project/
  .cursor/
  docs/
  prompts/
  scripts/
  package.json
  src/
```

Incorrect:

```text
project/
  website-os-cursor-v2-visual-first/
    .cursor/
```

Restart Cursor after copying the files.

## 3. Initialize project documents

macOS, Linux, Git Bash, or WSL:

```bash
bash scripts/new-site-docs.sh
```

PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/new-site-docs.ps1
```

## 4. Configure the component foundation

For a Next.js/Tailwind project that has not initialized shadcn:

```bash
npx shadcn@latest init
```

Install the official shadcn Agent Skill:

```bash
pnpm dlx skills add shadcn/ui
```

The starter includes `.cursor/mcp.json` for the project-scoped shadcn MCP. Open Cursor Settings → Tools & MCP, enable `shadcn`, and confirm that tools appear.

## 5. Connect 21st.dev

Use 21st's current Cursor setup flow. The current CLI workflow is normally:

```bash
npm install --global @21st-dev/cli
21st login
21st init --client cursor
```

`21st init --client cursor` writes or merges the Cursor MCP configuration in the user-level Cursor directory. Do not commit API keys or local auth tokens.

Restart Cursor and verify the server is enabled.

## 6. Optional Motion AI Kit / Motion UI access

The normal `motion` package is sufficient for custom animation. For the Motion AI Kit, Motion UI catalogue, current examples, and motion auditing, run:

```bash
npx motion-ai
```

This requires Motion+ and prompts for project/global setup. It should configure the MCP and skills; do not paste private API keys into committed files.

## 7. Optional React Bits

React Bits should be treated as a component/visual-effect source, not as the page's design system. Current React Bits Pro distribution uses the shadcn registry protocol and an Agent Skill rather than requiring a separate runtime package for every component.

When licensed and appropriate, install the provided skill through its documented shadcn registry command, then access components through shadcn-compatible tooling. Do not assume that a standalone React Bits MCP exists merely because Cursor lists other component servers.

## 8. Run the tool preflight

In Cursor:

```text
/tool-preflight

Test every enabled design/component MCP and CLI. Save actual proof of availability and at least one useful search result from each available source to docs/tool-preflight.md. Do not begin visual exploration until this report exists.
```

## 9. Verify the operating system

```bash
node scripts/visual-system-audit.mjs
bash scripts/verify-web.sh
```

The visual audit produces warnings before the full site is allowed to pass. For strict mode:

```bash
node scripts/visual-system-audit.mjs --strict
```
