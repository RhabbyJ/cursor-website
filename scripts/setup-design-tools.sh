#!/usr/bin/env bash
set -euo pipefail

ask() {
  local prompt="$1"
  read -r -p "$prompt [y/N] " answer
  [[ "${answer:-}" =~ ^[Yy] ]]
}

echo "Web Design OS tool setup"
echo "shadcn MCP is already declared in .cursor/mcp.json; enable it in Cursor after restart."

if ask "Initialize shadcn/ui in this project?"; then
  npx shadcn@latest init
fi

if ask "Register Aceternity UI in components.json? Run shadcn init first."; then
  node scripts/register-visual-registries.mjs
fi

if ask "Install the official shadcn Agent Skill?"; then
  npx skills add shadcn/ui
fi

if ask "Install the Magic UI MCP for Cursor?"; then
  npx -y @magicuidesign/cli@latest install cursor
fi

if ask "Install and configure 21st for Cursor?"; then
  npm i -g @21st-dev/cli
  21st login
  21st init --client cursor
fi

if ask "Install Motion in this project?"; then
  npm install motion
fi

if ask "Run the Motion AI Kit installer? Motion+ and an API key are required."; then
  npx motion-ai
fi

echo
echo "React Bits Pro is license-gated. After configuring its registry, install its Skill with:"
echo "  npx shadcn@latest add @reactbits-starter/skill"
echo
echo "Restart Cursor and verify Tools & MCPs."
