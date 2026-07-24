#!/usr/bin/env bash
set -euo pipefail

mkdir -p docs docs/postmortems

copy_if_missing() {
  local source="$1"
  local target="$2"
  if [[ ! -f "$target" ]]; then
    cp "$source" "$target"
    echo "created $target"
  else
    echo "kept existing $target"
  fi
}

copy_if_missing docs/site-brief.example.md docs/site-brief.md
copy_if_missing docs/site-spec.example.md docs/site-spec.md
copy_if_missing docs/visual-direction.example.md docs/visual-direction.md
copy_if_missing docs/acceptance.example.md docs/acceptance.md
