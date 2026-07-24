import { Section } from "@/components/layout/section";

export function FounderSection() {
  return (
    <Section id="about">
      <div className="grid gap-8 lg:grid-cols-[180px_1fr] lg:items-start">
        <div
          className="flex aspect-[4/5] max-w-[180px] items-center justify-center border border-[var(--border)] bg-[var(--surface)]"
          role="img"
          aria-label="Founder photograph to be supplied"
        >
          <span className="font-mono text-[10px] tracking-wide text-[var(--muted)] uppercase">
            Photo
          </span>
        </div>
        <div className="max-w-2xl">
          <h2 className="font-display text-3xl tracking-tight text-[var(--fg)]">
            Direct with the builder
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            Operator is run hands-on—you work with the person designing the data,
            workflows, and interfaces. Experience shows through HarnessMate,
            Sheets-powered hospitality sites, and MyBird’s discovery-to-inquiry
            path.
          </p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Founder name and biography will appear here when supplied.
          </p>
        </div>
      </div>
    </Section>
  );
}
