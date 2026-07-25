$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$Templates = Join-Path $Root "docs/templates"

function Copy-IfMissing([string]$Source, [string]$Target) {
    if (-not (Test-Path $Target)) {
        Copy-Item $Source $Target
        Write-Host "created $($Target.Replace($Root + [IO.Path]::DirectorySeparatorChar, ''))"
    } else {
        Write-Host "kept    $($Target.Replace($Root + [IO.Path]::DirectorySeparatorChar, ''))"
    }
}

New-Item -ItemType Directory -Force -Path (Join-Path $Root "docs/visual-routes") | Out-Null
New-Item -ItemType Directory -Force -Path (Join-Path $Root "docs/postmortems") | Out-Null

$Files = @(
    "experience-brief.md",
    "quality-profile.md",
    "tool-preflight.md",
    "asset-inventory.md",
    "visual-routes.md",
    "component-scout.md",
    "visual-judge.md",
    "qa-report.md",
    "acceptance.md"
)

foreach ($File in $Files) {
    Copy-IfMissing (Join-Path $Templates $File) (Join-Path $Root "docs/$File")
}
