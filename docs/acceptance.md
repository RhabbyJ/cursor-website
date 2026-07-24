# Acceptance Criteria — Redesign v2

## Structure

- [x] Navigation
- [x] Hero with edit → validate → publish → customer flow
- [x] Selected-work proof strip with honest statuses
- [x] Three progressive engagement modes
- [x] HarnessMate flagship case study
- [x] Interactive Sheets demonstration
- [x] MyBird case study
- [x] Four-stage process
- [x] Founder / trust (placeholders where identity missing)
- [x] Consultation form
- [x] Footer
- [x] Removed Studio / AI map / agency comparison as standalone sections

## Copy

- [x] Headline retained
- [x] “We build the system behind the website” appears once after hero
- [x] No public guardrail meta-copy
- [x] No invented metrics / testimonials

## Interaction

- [x] Sheets demo updates preview; invalid rows blocked
- [x] Form: client + server validation, loading, success, error, honeypot, privacy link
- [x] Form tested via POST /api/consult → `{ ok: true }` and Playwright success state

## Motion

- [x] Signature Motion only on hero flow, Sheets preview, HarnessMate steps
- [x] Reduced motion preserves information

## Visual (Field Manual)

- [x] Brass signal accent; fewer repeated kicker+panel blocks
- [x] Shared DataRail motif in hero + differentiator + process
- [x] HarnessMate emphasized in proof strip; Sheets demo reserved for `#sheets`
- [x] Differentiator strip carries the single “system behind the website” line

## Engineering

- [x] lint / typecheck / build pass
- [x] Browser QA across 320–1728 widths

## Still placeholder / unverified

- [ ] Founder name, photo, biography
- [ ] Real project screenshots / asset pack (none in repo)
- [ ] CONSULT_WEBHOOK_URL / email provider (defaults to local `data/consult-inbox.jsonl`)
- [ ] Brand name and contact email confirmation
- [ ] Production deploy / real spam volume under load
