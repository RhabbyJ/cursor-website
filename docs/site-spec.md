# Site Specification — Redesign v2

## Experience classification

Hybrid marketing with one interactive operational demonstration (in-browser Sheets preview; no live Google credentials).

## Sitemap

| Route | Purpose |
|---|---|
| `/` | Landing (all sections) |
| `/api/consult` | Server consultation submit |
| `/privacy` | Privacy notice (minimal, honest) |

## Page narrative

| Section | User question | Answer | Proof | Action |
|---|---|---|---|---|
| Nav | Where? | Work / Modes / Process / Consult | Persistent CTA | Jump / consult |
| Hero | What do you build? | Sites tied to data, workflows, software | Animated edit→validate→site→customer | Consult / Work |
| Proof strip | Who have you built for? | Named projects + honest status | Compact project chips | Deep-link cases |
| Modes | How do we engage? | Communicate → Operate → Perform | Progressive capability stack | Consult |
| HarnessMate | Can you build real software? | Engineering platform workflow | Search/mate/decision path UI | — |
| Sheets | How do staff update a site? | Sheet drives public view | Interactive demo + invalid row | Try demo |
| MyBird | Real estate too? | Discovery → contextual inquiry | Flow composition | — |
| Process | How do we work? | Four stages | Numbered rail | Consult |
| Founder | Who do I work with? | Solo/studio operator + product proof | Placeholder identity | Consult |
| Consult | What’s next? | Request estimate | Working form | Submit |
| Footer | Contact / legal | Email + privacy | Links | — |

## Removed

- Standalone Studio section
- Nine-service grid / AI capability map
- Agency comparison table

## Integrated ideas

- “System behind the website” → once, immediately after hero
- Agency contrast → one line inside Modes or Founder
- AI capability → mentioned inside Mode 3 and HarnessMate decision support only

## Content rules

- Cut guardrail/meta language from public copy
- Prefer short captions under demos
- Honest status: Prototype demo / In development / Private implementation
- No invented metrics, clients, team, or testimonials

## Form contract

- Server-side validation on `POST /api/consult`
- Fields: name, business, email, projectType, message, website (honeypot)
- States: idle, validating, submitting, success, error
- Spam: honeypot + basic rate limit
- Delivery: write inbox file when no email provider configured; optional `CONSULT_WEBHOOK_URL`
- Privacy: link to `/privacy`

## Acceptance

See `docs/acceptance.md`.
