# Tool Preflight

Date: 2026-07-24  
Project state: greenfield Website OS v2 + Next.js foundation (no landing page yet)

| Tool/source | Configured | Connected | Proof command/tool call | Useful result | Limits | Approved |
|---|---:|---:|---|---|---|---:|
| shadcn MCP | yes (`.cursor/mcp.json`) | no | `GetMcpTools` server `shadcn` | Server not found among available MCP servers | Present in project config; not enabled in this Cursor session | no — enable in Settings → Tools & MCP |
| shadcn CLI | yes | yes* | `npx shadcn@latest search '@shadcn' -q button -l 5` (with TLS workaround) | `@shadcn/button`, `@shadcn/button-group`, examples | Host TLS leaf cert verify fails without `NODE_TLS_REJECT_UNAUTHORIZED=0` | yes for local registry use after TLS fix or temporary workaround |
| shadcn skill | yes | yes | `pnpm dlx skills add shadcn/ui -y -g` | Installed at `~/.agents/skills/shadcn` | Git clone needed `GIT_SSL_NO_VERIFY=true`; PromptScript global copy failed | yes |
| 21st.dev MCP/CLI | no | no | `where 21st`; user `mcp.json` has only Supabase | CLI not installed; no 21st MCP in session | Requires `21st login` / `21st init --client cursor`; free tier limits copies | no — browse-only via Browser for now |
| Motion AI Kit / Motion UI | optional | no | `npx motion-ai --help` | CLI exists (`motion-ai 13.1.0`) but kit not installed | Needs Motion+ / `MOTION_TOKEN` interactive setup | no |
| Motion examples (public) | n/a | browse-only | Browser → `https://motion.dev/examples` | Found: Scroll Zoom Hero, OSS Hero, Parallax, Layout animation, Scroll-triggered animations | Free docs/examples; AI Kit paid | yes as reference |
| React Bits registry/skill | no | no | Browser → `https://www.reactbits.dev/` and `/backgrounds/aurora` | Candidates: Aurora, Soft Aurora, Splash Cursor, Circular Gallery, Dome Gallery | Pro is paid; no project skill/registry installed | browse-only until licensed/installed |
| Private registry | no | no | `components.json` → `"registries": {}` | None configured | — | n/a |
| Cursor Browser | built-in | yes | `browser_navigate` to shadcn, 21st, Motion, React Bits | Live catalogue pages loaded and snapshotted | Design Mode not exposed as an MCP tool here | yes |
| Cursor Design Mode | Cursor UI | untested | No MCP tool available in this session | — | Manual IDE feature after routes exist | deferred |
| Cursor image generation | built-in | yes | `GenerateImage` abstract paper texture | Saved `docs/preflight/tool-preflight-texture-test.png` | Must not fabricate product proof | yes for brand art only |
| Supabase MCP | user-level | yes | `list_organizations` | Org: Rhabby's Org | Not a visual/component catalogue | yes for data work later; unused this pass |
| cursor-app-control | built-in | yes | `GetMcpTools` | ready | Workspace control only | yes |

\*CLI works after registry init; HTTPS to `ui.shadcn.com` fails certificate verification on this machine until the CA chain is fixed.

## Environment notes

- **Package manager:** pnpm 9.15.4 (preferred; npm also present). Yarn/Bun not installed.
- **Runtime:** Node v22.23.1
- **Framework:** Next.js 16.2.11 (App Router, `src/`), React 19.2.4, TypeScript 5.9.3
- **Styling:** Tailwind CSS v4 + PostCSS; shadcn `base-nova` style with CSS variables
- **TLS blocker:** Node `UNABLE_TO_VERIFY_LEAF_SIGNATURE` and Git OpenSSL issuer errors for `ui.shadcn.com` / `github.com`. Temporary workarounds used only for preflight install/search; permanent fix is restoring trusted CA certificates on this host.
- **shadcn MCP:** Configured in `.cursor/mcp.json` but **not connected** in the live MCP catalog (available servers: `cursor-app-control`, `cursor-ide-browser`, `user-supabase`).

## Minimum catalogue searches

### Hero

| Source | Query / call | Candidates | Notes |
|---|---|---|---|
| Cursor Browser → 21st.dev | `https://21st.dev/s/hero` | Shape Landing Hero; Animated Shader Hero; Horizon Hero Section; Liquid Metal Hero; Hero Parallax; Scroll Morph Hero | MCP/CLI not connected; web browse only |
| Cursor Browser → shadcn docs | `https://ui.shadcn.com/docs/components` | Button, Navigation Menu, Carousel, etc. (primitives, not marketing heroes) | Catalogue reachable in Browser without TLS workaround |
| shadcn CLI | `search '@shadcn' -q hero -l 8` | Mostly fonts (`font-heading-*`) plus unrelated blocks; no dedicated hero section | Confirms shadcn is primitive-first |
| Motion examples | Filter categories Heros / Scroll | OSS Hero; Scroll Zoom Hero | Free examples; AI Kit unavailable |

### Project showcase

| Source | Query / call | Candidates | Notes |
|---|---|---|---|
| Cursor Browser → 21st.dev | `https://21st.dev/s/gallery` | 3D Gallery Photography; Circular Gallery 2; Immersive Scroll Gallery; Portfolio and Image Gallery; Expandable Gallery | Prefer later with real project screenshots |
| Cursor Browser → 21st.dev | `https://21st.dev/s/case-study` | Page claimed “3 case study components”; results empty under current filters | Weak hit; use gallery/portfolio patterns instead |
| React Bits | Site browse | Circular Gallery; Dome Gallery; Orbit Images; Masonry | Not installed |

### Signature motion / visual treatment

| Source | Query / call | Candidates | Notes |
|---|---|---|---|
| Motion examples | `https://motion.dev/examples` | Scroll Zoom Hero; Parallax; Layout animation; Scroll-triggered animations | Base `motion` package installed |
| React Bits | `/backgrounds/aurora` | Aurora; also Soft Aurora, Beams, Splash Cursor | Free browse; Pro paid |
| Cursor image generation | Abstract paper texture | `docs/preflight/tool-preflight-texture-test.png` | Connectivity proof only — not product evidence |

## Installed this pass (foundation only)

- Next.js app scaffold (App Router, TS, Tailwind v4, ESLint, Turbopack-ready)
- shadcn init (`base-nova`, Button primitive, `src/lib/utils.ts`, theme CSS)
- `motion`, `@phosphor-icons/react`, `clsx`, `tailwind-merge` (+ shadcn-pulled `@base-ui/react`, `class-variance-authority`, `lucide-react`, `shadcn`, `tw-animate-css`)
- Official shadcn Agent Skill under `~/.agents/skills/shadcn`
- Project docs via `scripts/new-site-docs.ps1`

## Explicitly unavailable / not approved yet

- shadcn MCP (configured, not enabled in session)
- 21st.dev MCP and CLI (not installed/authenticated)
- Motion AI Kit / Motion UI MCP (not installed; Motion+ required)
- React Bits skill/registry (not installed; Pro optional/paid)
- Private registries
- Cursor Design Mode (not verified via tool)
- Any fabricated portfolio screenshots
