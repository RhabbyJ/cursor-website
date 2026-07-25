param(
  [Parameter(Mandatory = $true)]
  [string]$Name,

  [ValidateSet("npm", "pnpm", "yarn", "bun")]
  [string]$PackageManager = "npm"
)

$ErrorActionPreference = "Stop"
$ToolkitRoot = Split-Path -Parent $PSScriptRoot
$Target = Join-Path (Get-Location) $Name

if (Test-Path $Target) {
  throw "Target already exists: $Target"
}

Write-Host "Creating fresh Next.js project: $Name"

switch ($PackageManager) {
  "npm" {
    & npx create-next-app@latest $Name --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
  }
  "pnpm" {
    & pnpm dlx create-next-app@latest $Name --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-pnpm
  }
  "yarn" {
    & yarn create next-app $Name --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-yarn
  }
  "bun" {
    & bunx create-next-app@latest $Name --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-bun
  }
}

if ($LASTEXITCODE -ne 0) {
  throw "create-next-app failed."
}

Copy-Item (Join-Path $ToolkitRoot ".cursor") (Join-Path $Target ".cursor") -Recurse -Force
Copy-Item (Join-Path $ToolkitRoot "website-os") (Join-Path $Target "website-os") -Recurse -Force
Copy-Item (Join-Path $ToolkitRoot "PROJECT_BRIEF.md") (Join-Path $Target "PROJECT_BRIEF.md") -Force
Copy-Item (Join-Path $ToolkitRoot "START_HERE.md") (Join-Path $Target "WEBSITE_OS_START_HERE.md") -Force
Copy-Item (Join-Path $ToolkitRoot "scripts") (Join-Path $Target "scripts") -Recurse -Force

Write-Host ""
Write-Host "Created $Target"
Write-Host "Next:"
Write-Host "  cd $Name"
Write-Host "  cursor ."
Write-Host "Then enable MCPs and complete PROJECT_BRIEF.md."
