# Web Design OS for Cursor — Source-First / Style-Neutral Edition

This is a **general operating layer for designing and building websites with Cursor**. It is not a theme, template, landing-page recipe, or fixed visual system.

The project prompt decides what the website should be. The OS contributes a repeatable way to:

- understand the product and audience;
- discover strong references and components;
- choose an intentional art direction;
- compose navigation, backgrounds, sections, imagery, and motion;
- implement the experience cleanly;
- inspect the real browser result;
- and improve it without flattening every project into the same style.

## The central separation

```text
Project prompt / brand / references
             ↓
Defines the site's identity and requirements
             ↓
Web Design OS
             ↓
Guides exploration, implementation, motion, critique, and QA
             ↓
MCPs and component libraries
             ↓
Supply raw materials—not the final design
```

No visual treatment is universally required or prohibited. A project may be minimal, cinematic, playful, editorial, brutalist, elegant, image-led, shader-heavy, quiet, dense, rounded, sharp, light, dark, or something else entirely.

## Why this edition is different

The always-on Rules are intentionally small. They protect project authority, accessibility, responsiveness, honesty, and runtime verification—but they do not dictate an aesthetic.

Most guidance lives in optional Skills that Cursor loads only when relevant. This prevents the OS from forcing one design grammar onto every website.

## Included

- 2 concise always-on Cursor Rules;
- 15 optional web-design Skills;
- 4 optional specialist Subagents;
- project-scoped shadcn MCP configuration;
- setup guidance for 21st, Magic UI, Motion AI Kit, and React Bits Pro;
- prompts for directed, exploratory, and autonomous design workflows;
- a fresh-project generator for PowerShell and Bash;
- project-brief and review templates;
- a validation script.

## Fast start

### Option A — generate a fresh Next.js project

From this extracted folder:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/create-fresh-next-project.ps1 -Name my-new-site
```

Or:

```bash
bash scripts/create-fresh-next-project.sh my-new-site
```

The script creates a new Next.js project and copies the OS into it.

### Option B — add the OS to an already blank project

Copy these items into the project root:

```text
.cursor/
website-os/
PROJECT_BRIEF.md
scripts/
WEBSITE_OS_START_HERE.md  (copy START_HERE.md under this name if desired)
```

Then reopen Cursor.

## First project workflow

1. Enable the shadcn MCP in Cursor.
2. Configure any optional design tools you own or want to use.
3. Fill in `PROJECT_BRIEF.md` or provide an equally detailed prompt.
4. Choose a design mode:
   - `directed` — follow supplied references and art direction;
   - `explore` — build several compact visual routes for selection;
   - `autonomous` — explore internally and let the agents select the strongest route.
5. Run:

```text
/build-web-experience
```

The OS must follow the active project brief. It must not reuse the look of a previous project.

## Recommended tool roles

- **shadcn/ui:** accessible foundations and registry infrastructure.
- **Aceternity UI:** expressive hero, background, navigation, card, and spatial primitives through the shadcn registry.
- **21st:** discovery across components, themes, templates, SVG assets, and design directions.
- **Magic UI:** animated effects, backgrounds, text treatments, and marketing primitives.
- **Motion / Motion AI Kit:** interaction design, scroll and layout motion, examples, springs, and motion auditing.
- **React Bits Pro:** optional premium shaders, backgrounds, 3D, animated UI, blocks, and templates.
- **Cursor Browser:** rendered inspection, responsive testing, console/network review, and visual iteration.
- **Cursor image generation:** original decorative imagery and concept art—not fake product proof.

Read `website-os/TOOL_ROLES.md` before installing everything. More tools do not automatically produce better design.

## Core principle

> The OS should improve the model's taste and process without deciding what every website should look like.


## The two-stage design loop

External design sourcing happens twice:

1. **Before concepts:** broad scouting gives each route a real visual vocabulary and prevents raw AI-CSS defaults.
2. **After selection:** the winning route receives a mandatory signature-surface, asset-quality, responsive-motion, and browser-critique pass before the complete site is expanded.

This avoids wasting production-level polish on three losing concepts while preventing the selected baseline from being mistaken for a finished design.
