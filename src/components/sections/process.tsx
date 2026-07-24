import { DataRail } from "@/components/layout/data-rail";
import { Section } from "@/components/layout/section";
import { processSteps } from "@/lib/content";

export function ProcessSection() {
  return (
    <Section id="process" className="border-y border-[var(--border)] bg-[var(--surface)]/35">
      <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <h2 className="font-display text-3xl tracking-tight text-[var(--fg)] sm:text-4xl">
            Four stages
          </h2>
          <p className="mt-4 text-base text-[var(--muted)]">
            From how the business operates to a system the team can keep accurate.
          </p>
        </div>
        <div>
          <DataRail
            steps={processSteps.map((s) => ({ id: s.id, label: s.title }))}
            activeIndex={0}
            className="mb-8 hidden lg:grid"
          />
          <ol className="space-y-6">
            {processSteps.map((step) => (
              <li key={step.id} className="grid gap-2 sm:grid-cols-[3rem_1fr]">
                <span className="font-mono text-sm text-[var(--accent)]">{step.id}</span>
                <div>
                  <h3 className="font-display text-xl text-[var(--fg)]">{step.title}</h3>
                  <p className="mt-2 text-sm text-[var(--muted)]">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
