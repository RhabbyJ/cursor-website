#!/usr/bin/env bash
set -euo pipefail

if [[ ! -f package.json ]]; then
  echo "[website-os] package.json not found; run from the project root." >&2
  exit 1
fi

if [[ -f pnpm-lock.yaml ]]; then
  runner=(pnpm run)
elif [[ -f bun.lockb || -f bun.lock ]]; then
  runner=(bun run)
elif [[ -f yarn.lock ]]; then
  runner=(yarn)
else
  runner=(npm run)
fi

has_script() {
  node -e 'const p=require("./package.json"); process.exit(p.scripts && p.scripts[process.argv[1]] ? 0 : 1)' "$1"
}

run_script() {
  local name="$1"
  if has_script "$name"; then
    echo "\n[website-os] running $name"
    "${runner[@]}" "$name"
  else
    echo "[website-os] skipped $name (script not defined)"
  fi
}

run_script lint
run_script typecheck
run_script test
run_script test:e2e
run_script build

echo "\n[website-os] automated checks completed. Browser QA is still required."
