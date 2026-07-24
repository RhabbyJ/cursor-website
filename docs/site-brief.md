# Site Brief

## Business and offer

Operator is an AI-enabled website and software studio that builds digital systems for businesses: premium marketing websites, Google Sheets–powered operational sites, AI tools, internal portals, customer dashboards, searchable databases, workflow automation, booking and lead-generation systems, and full web applications.

Central positioning: we do not just build websites. We build the system behind the website—editable data, automation, and software that helps the business operate.

## Primary audience

- Local businesses (bars, restaurants, hospitality)
- Real-estate businesses
- Professional-service companies
- Engineering and technical companies
- Founders who need custom software

## User job and pain

**Job:** Find a partner who can build a website that also supports day-to-day operations—not a brochure that goes stale.

**Pain:** Agencies deliver static sites that require developer edits for every menu change, listing update, or process improvement. Off-the-shelf tools do not fit specialized workflows (engineering selection, property discovery, staff-updated content).

## Desired belief after the first screen

“This studio builds websites, operational systems, and AI software that help my business run—not just look good online. I can request a consultation now.”

## Primary conversion

Request a consultation / project estimate (primary CTA).

## Secondary actions

- View selected work (HarnessMate, Sheets-powered bar sites, MyBird Real Estate)
- Jump to services or process sections via in-page navigation

## Functional capabilities

This marketing site itself is static/hybrid marketing. It must *demonstrate* (via interface-style compositions, not live client data) the capabilities offered:

- Multi-layer product storytelling (public site → editable data → automation → AI/software)
- Sheets-powered operating model explanation
- Featured project presentations for HarnessMate, bar websites, MyBird

No live Google Sheets, CRM, or AI backend is required for the initial landing page. Consultation CTA may use a mail/link or lightweight form placeholder wired for future expansion.

## Data sources and operational owners

| Source | Owner | Notes |
|---|---|---|
| Page copy and project descriptions | Studio owner | Static content in codebase |
| Project demos | Studio owner | HTML/CSS interface compositions; no invented metrics |
| Consultation requests | Studio owner | mailto or form endpoint TBD |

## AI capability contract

Not applicable to this marketing landing page runtime. AI capabilities are *communicated* as services (AI tools, decision support, workflow automation). No model calls on this page.

## Proof available

- Named projects: HarnessMate (engineering platform), Google Sheets–powered bar websites, MyBird Real Estate
- Capability descriptions tied to real product behaviors (connector search, mate finding, sheet → site update path, property discovery / lead gen)

## Proof missing

- Testimonials, revenue figures, traffic stats, conversion rates, client logos beyond named projects, awards, team photos

## Content and assets

- Available: project narratives and capability lists from the owner request
- Missing: brand name confirmation, logo files, photography, live demos, contact email confirmation, legal/privacy pages

## Constraints

- Greenfield: empty application; Website OS overlay only in repo
- Stack: Next.js App Router, TypeScript, Tailwind, shadcn/ui, Motion, Phosphor Icons
- Single-page landing initially; architecture must allow additional routes later
- No invented customer results or testimonials
- Accessibility and reduced-motion required
- Prefer HTML/CSS interface compositions over stock imagery

## Assumptions

1. **Brand name:** “Operator” (placeholder wordmark until a legal/trade name is confirmed).
2. **Primary CTA destination:** `#consult` section with a contact form that currently submits via `mailto:` or a client-side success state; no backend yet.
3. **Contact email:** `hello@operator.studio` as a placeholder address in copy/form (replace before launch).
4. **Location:** Serves businesses generally; no city-specific SEO claim.
5. **Studio size:** Solo/small studio voice—precise and confident, not enterprise agency fluff.
6. **Legal pages:** Footer links to Privacy / Terms as `#` placeholders until real pages exist.

## Material risks

- Placeholder brand name may need a rename before public launch.
- Mailto consultation flow is weaker than a real booking/CRM integration.
- Without photography, visual quality depends entirely on interface storytelling and typography.
- Over-claiming “AI” without a live demo could feel hollow—mitigate with concrete capability language and HarnessMate-style decision-support framing.
