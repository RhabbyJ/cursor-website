#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TEMPLATES="$ROOT/docs/templates"

copy_if_missing() {
  local source="$1"
  local target="$2"
  if [[ ! -f "$target" ]]; then
    cp "$source" "$target"
    echo "created ${target#$ROOT/}"
  else
    echo "kept    ${target#$ROOT/}"
  fi
}

mkdir -p "$ROOT/docs/visual-routes" "$ROOT/docs/postmortems"
copy_if_missing "$TEMPLATES/experience-brief.md" "$ROOT/docs/experience-brief.md"
copy_if_missing "$TEMPLATES/quality-profile.md" "$ROOT/docs/quality-profile.md"
copy_if_missing "$TEMPLATES/tool-preflight.md" "$ROOT/docs/tool-preflight.md"
copy_if_missing "$TEMPLATES/asset-inventory.md" "$ROOT/docs/asset-inventory.md"
copy_if_missing "$TEMPLATES/visual-routes.md" "$ROOT/docs/visual-routes.md"
copy_if_missing "$TEMPLATES/component-scout.md" "$ROOT/docs/component-scout.md"
copy_if_missing "$TEMPLATES/visual-judge.md" "$ROOT/docs/visual-judge.md"
copy_if_missing "$TEMPLATES/qa-report.md" "$ROOT/docs/qa-report.md"
copy_if_missing "$TEMPLATES/acceptance.md" "$ROOT/docs/acceptance.md"
