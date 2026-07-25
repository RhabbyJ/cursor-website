# Migrate from Website OS v1

Do not merge v1 and v2 rule-by-rule. That preserves the constraint accumulation that v2 is designed to remove.

## Safe migration

1. Create a branch and commit the current site.
2. Rename the old operating layer:

```bash
mv .cursor .cursor-v1-backup
```

PowerShell:

```powershell
Rename-Item .cursor .cursor-v1-backup
```

3. Copy the v2 `.cursor` directory into the project root.
4. Keep existing application source and working product logic.
5. Move old generated planning documents into `docs/archive-v1/` rather than treating them as authoritative.
6. Run `scripts/new-site-docs.*` to create the new v2 templates.
7. Reconnect and test MCP tools through `/tool-preflight`.
8. Run `/asset-inventory`.
9. Use `prompts/visual-reset-existing-page.md`.

## Preserve

- application behavior;
- data integrations;
- routes and production configuration;
- truthful business content;
- accessibility and test coverage;
- reusable components that are visually neutral or genuinely strong.

## Replace or re-evaluate

- prose-only visual direction documents;
- blanket anti-style rules;
- repeated card/rail systems selected merely because they are safe;
- synthetic project mockups presented as evidence;
- completion checklists that pass without screenshot scoring;
- placeholder founder/project assets marked as a completed visual phase.

## Do not delete the baseline deployment

Keep the prior Vercel URL or deployment as a comparison target until the new route is visibly better.
