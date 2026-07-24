import { CheckCircle, Table } from "@phosphor-icons/react/dist/ssr";

import { HarnessMateDemo } from "@/components/demos/harnessmate-demo";
import { MyBirdDemo } from "@/components/demos/mybird-demo";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export function FeaturedWorkSection() {
  return (
    <Section
      id="work"
      eyebrow="L03 · Selected work"
      title="Systems in production contexts"
      description="Capability-focused presentations—no invented revenue figures or testimonials. Each project shows a different layer of the studio’s work."
    >
      <div className="space-y-16">
        <Reveal>
          <article className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--accent)] uppercase">
                Engineering software
              </p>
              <h3 className="mt-2 font-display text-3xl text-[var(--fg)]">
                HarnessMate
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                An engineering software platform for connector selection, mate
                finding, technical specification data, and engineering
                workflows—with AI-assisted decision support where it helps
                engineers move faster without hiding constraints.
              </p>
              <ul className="mt-5 space-y-2 text-sm text-[var(--fg)]">
                {[
                  "Connector search across structured catalogs",
                  "Mate finding with compatibility constraints",
                  "Technical specification surfaces",
                  "Workflows from search to shortlist",
                  "AI-assisted decision support with human control",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <HarnessMateDemo />
          </article>
        </Reveal>

        <Reveal>
          <article className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--accent)] uppercase">
                Hospitality operations
              </p>
              <h3 className="mt-2 font-display text-3xl text-[var(--fg)]">
                Google Sheets–powered bar websites
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                Bars and restaurants keep menus, events, and specials current in
                Google Sheets. The public site follows after validation—so guests
                see tonight’s reality without a developer ticket.
              </p>
              <a
                href="#sheets"
                className="mt-5 inline-flex text-sm text-[var(--accent)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                See the operating model
              </a>
            </div>
            <div className="panel grid gap-3 p-5 sm:grid-cols-2">
              <div className="rounded-md border border-[var(--border)] bg-[var(--bg)]/50 p-4">
                <Table className="size-5 text-[var(--accent)]" weight="duotone" aria-hidden />
                <p className="mt-3 text-sm font-medium text-[var(--fg)]">Staff sheet</p>
                <p className="mt-2 text-xs text-[var(--muted)]">
                  Familiar rows for items, prices, events, and flags.
                </p>
              </div>
              <div className="rounded-md border border-[var(--border)] bg-[var(--bg)]/50 p-4">
                <CheckCircle
                  className="size-5 text-[var(--ok)]"
                  weight="duotone"
                  aria-hidden
                />
                <p className="mt-3 text-sm font-medium text-[var(--fg)]">Validated publish</p>
                <p className="mt-2 text-xs text-[var(--muted)]">
                  Broken rows stay out of the customer view.
                </p>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal>
          <article className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
            <MyBirdDemo />
            <div>
              <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--accent)] uppercase">
                Real estate experience
              </p>
              <h3 className="mt-2 font-display text-3xl text-[var(--fg)]">
                MyBird Real Estate
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                A custom real-estate digital experience spanning property
                discovery, customer workflows, and lead generation—built as a
                coherent product path rather than a brochure site with a contact
                form taped on.
              </p>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}
