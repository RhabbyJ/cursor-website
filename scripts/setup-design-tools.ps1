$ErrorActionPreference = "Stop"

function Ask-YesNo([string]$Question, [bool]$Default = $false) {
  $suffix = if ($Default) { "[Y/n]" } else { "[y/N]" }
  $answer = Read-Host "$Question $suffix"
  if ([string]::IsNullOrWhiteSpace($answer)) { return $Default }
  return $answer.Trim().ToLower().StartsWith("y")
}

Write-Host "Web Design OS tool setup"
Write-Host "shadcn MCP is already declared in .cursor/mcp.json; enable it in Cursor after restart."

if (Ask-YesNo "Initialize shadcn/ui in this project?") {
  & npx shadcn@latest init
}

if (Ask-YesNo "Register Aceternity UI in components.json? Run shadcn init first.") {
  & node scripts/register-visual-registries.mjs
}

if (Ask-YesNo "Install the official shadcn Agent Skill?") {
  & npx skills add shadcn/ui
}

if (Ask-YesNo "Install the Magic UI MCP for Cursor?") {
  & npx -y @magicuidesign/cli@latest install cursor
}

if (Ask-YesNo "Install and configure 21st for Cursor?") {
  & npm i -g @21st-dev/cli
  & 21st login
  & 21st init --client cursor
}

if (Ask-YesNo "Install Motion in this project?") {
  & npm install motion
}

if (Ask-YesNo "Run the Motion AI Kit installer? Motion+ and an API key are required.") {
  & npx motion-ai
}

Write-Host ""
Write-Host "React Bits Pro is license-gated. After configuring its registry, install its Skill with:"
Write-Host "  npx shadcn@latest add @reactbits-starter/skill"
Write-Host ""
Write-Host "Restart Cursor and verify Tools & MCPs."
