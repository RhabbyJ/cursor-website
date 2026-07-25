#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT"

run_script() {
  local name="$1"
  if node -e "const p=require('./package.json'); process.exit(p.scripts&&p.scripts['$name']?0:1)"; then
    echo "\n==> $name"
    if [[ -f pnpm-lock.yaml ]]; then pnpm "$name";
    elif [[ -f yarn.lock ]]; then yarn "$name";
    elif [[ -f bun.lockb || -f bun.lock ]]; then bun run "$name";
    else npm run "$name"; fi
  else
    echo "skip: package.json has no $name script"
  fi
}

node scripts/visual-system-audit.mjs --strict
run_script lint
run_script typecheck
run_script test
run_script build
