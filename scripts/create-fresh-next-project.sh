#!/usr/bin/env bash
set -euo pipefail

NAME="${1:-}"
PACKAGE_MANAGER="${2:-npm}"

if [[ -z "$NAME" ]]; then
  echo "Usage: bash scripts/create-fresh-next-project.sh <project-name> [npm|pnpm|yarn|bun]" >&2
  exit 1
fi

if [[ -e "$NAME" ]]; then
  echo "Target already exists: $NAME" >&2
  exit 1
fi

TOOLKIT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

case "$PACKAGE_MANAGER" in
  npm)
    npx create-next-app@latest "$NAME" --typescript --tailwind --eslint --app --src-dir --import-alias '@/*' --use-npm
    ;;
  pnpm)
    pnpm dlx create-next-app@latest "$NAME" --typescript --tailwind --eslint --app --src-dir --import-alias '@/*' --use-pnpm
    ;;
  yarn)
    yarn create next-app "$NAME" --typescript --tailwind --eslint --app --src-dir --import-alias '@/*' --use-yarn
    ;;
  bun)
    bunx create-next-app@latest "$NAME" --typescript --tailwind --eslint --app --src-dir --import-alias '@/*' --use-bun
    ;;
  *)
    echo "Unsupported package manager: $PACKAGE_MANAGER" >&2
    exit 1
    ;;
esac

cp -R "$TOOLKIT_ROOT/.cursor" "$NAME/.cursor"
cp -R "$TOOLKIT_ROOT/website-os" "$NAME/website-os"
cp "$TOOLKIT_ROOT/PROJECT_BRIEF.md" "$NAME/PROJECT_BRIEF.md"
cp "$TOOLKIT_ROOT/START_HERE.md" "$NAME/WEBSITE_OS_START_HERE.md"
cp -R "$TOOLKIT_ROOT/scripts" "$NAME/scripts"

echo
echo "Created $NAME"
echo "Next: cd $NAME && cursor ."
echo "Then enable MCPs and complete PROJECT_BRIEF.md."
