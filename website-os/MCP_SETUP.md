# MCP and Design Tool Setup

Prefer official installers and registries over copied configuration.

## 1. shadcn MCP — included

This OS includes `.cursor/mcp.json` with the shadcn MCP. Reopen Cursor and enable it under Tools & MCPs.

Initialize shadcn in the project:

```bash
npx shadcn@latest init
```

Optional official Skill:

```bash
npx skills add shadcn/ui
```

## 2. Aceternity UI — register through shadcn

After shadcn initialization:

```bash
node scripts/register-visual-registries.mjs
```

This adds the namespaced registry:

```json
{
  "registries": {
    "@aceternity": "https://ui.aceternity.com/registry/{name}.json"
  }
}
```

Useful discovery commands:

```bash
npx shadcn@latest view @aceternity
npx shadcn@latest list @aceternity
npx shadcn@latest search @aceternity -q "navigation"
npx shadcn@latest search @aceternity -q "background"
npx shadcn@latest search @aceternity -q "card"
```

The shadcn MCP can browse and install items from configured registries.

## 3. 21st — recommended

```bash
npm i -g @21st-dev/cli
21st login
21st init --client cursor
```

Useful commands:

```bash
21st search "animated navigation"
21st search "category cards motion"
21st search "shader hero"
21st search "project gallery"
```

## 4. Magic UI MCP — recommended

```bash
npx -y @magicuidesign/cli@latest install cursor
```

Restart Cursor afterward.

## 5. Motion library

```bash
npm install motion
```

## 6. Motion UI / Motion AI Kit — optional paid tool

Requires Motion+ and an API key:

```bash
npx motion-ai
```

The installer configures the MCP and Motion Skill for Cursor.

## 7. React Bits Pro — optional paid source registry

After purchasing a license, configure its registries and environment key as documented by React Bits Pro.

Install its Skill:

```bash
npx shadcn@latest add @reactbits-starter/skill
```

## Verification

After setup:

1. restart Cursor;
2. inspect Tools & MCPs;
3. confirm each server is enabled;
4. execute one real search or listing through every source you plan to use;
5. record results, unavailable paid sources, and licensing in `website-os/work/source-scout.md`.

Tool presence does not count as tool use. The source-scout Skill requires observable searches.
