# Installation checklist

1. Copy `.cursor`, `docs`, `scripts`, and `prompts` into the repository root.
2. Run `bash scripts/new-site-docs.sh`.
3. Install the official shadcn skill with the project's package runner.
4. Enable the shadcn MCP server in Cursor Customize.
5. Run `npx 21st` and complete the Cursor setup if 21st.dev will be used.
6. Install `motion` and `@phosphor-icons/react`; install `animejs` only for a defined use case.
7. Add project-specific commands to `package.json`: `lint`, `typecheck`, `test`, `test:e2e`, and `build` where appropriate.
8. Open Cursor and confirm the custom skills and agents appear.
9. Run `/design-critique` on the current homepage before asking for a rewrite.
10. Run `/build-website` for the first structured build.
