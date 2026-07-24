# QA Report — Operator landing page

Date: 2026-07-24  
Method: Playwright headless Chromium + Cursor Glass open of `http://localhost:3000`  
Artifacts: `docs/qa-artifacts/`

## Verified and passed

- First viewport communicates studio, offer, differentiator, and primary CTA
- Required sections present: nav, hero, studio, services, work, sheets, AI, process, difference, consult, footer
- Viewports inspected: 375, 768, 1280, 1536
- Form validation shows required-field errors; errors clear on edit
- Mobile menu opens; Escape closes it
- Skip link present; keyboard focus rings on interactive controls
- Reduced motion: page remains readable; no console errors
- No failed network requests on load (after fixes)
- `pnpm lint`, `pnpm typecheck`, `pnpm build` pass

## Issues found and fixed

| Severity | Issue | Fix |
|---|---|---|
| High | Duplicate React keys (`TRUE`) in sheet demos → console error | Index-based keys |
| High | Motion hydration mismatch with `prefers-reduced-motion` | Client-gated `Reveal`; CSS transitions for layer stack |
| Medium | Form errors persisted after fields filled | Clear field error on change |
| Medium | Turbopack wrong workspace root / font TLS on build | `turbopack.root` + `turbopackUseSystemTlsCerts` |

## Remaining limitations

- Consultation submit uses `mailto:` (no CRM/backend yet)
- Brand name **Operator** and email **hello@operator.studio** are placeholders
- Privacy/Terms footer links are placeholders
- No live Google Sheets / AI runtime on this marketing page (demonstrations only)
- Playwright is a local QA helper; Cursor Browser MCP was not available in this session

## Assumptions

Documented in `docs/site-brief.md` (brand name, contact email, mailto conversion).
