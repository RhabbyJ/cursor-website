# QA Report — Redesign v2

Date: 2026-07-24  
Branch: `redesign/operational-editorial`  
Baseline tag: `baseline/operator-v1`

## Passed

- Required section IDs: work, modes, harnessmate, sheets, mybird, process, about, consult
- Hero operating flow demo present; system-behind phrase once under hero
- Sheets: invalid price blocked; fixing price validates; preview updates
- Consult API success; Playwright success UI; privacy page `/privacy`
- Mobile menu open / Escape close; desktop nav hidden on mobile
- Reduced motion: no console errors
- Viewports: 320, 390, 768, 1280, 1440, 1728
- lint, typecheck, production build

## Fixes during QA

- Client-side form validation restored for immediate accessible errors (server still authoritative)
- Sheets preview price formatting for non-numeric values (e.g. `½ off`)
- Hero reduced-motion no longer setStates in effect
- Browser QA wait strategy changed off `networkidle` (slow font/compiles)

## Remaining limitations

- No real HarnessMate/MyBird/hospitality screenshots in repository — compositions are structured product UI, honestly labeled
- Founder identity placeholders
- Form persistence is local JSONL unless `CONSULT_WEBHOOK_URL` is set
- Homepage cold compile can be slow in dev (~3–14s observed)
