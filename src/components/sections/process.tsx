import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { processSteps } from "@/lib/content";

export function ProcessSection() {
  return (
    <Section
      id="process"
      className="border-y border-[var(--border)] bg-[var(--surface)]/35"
      eyebrow="L06 · Process"
      title="How engagement works"
      description="We start from how the business operates, then design the digital system that can keep up—screens included."
    >
      <ol className="grid gap-3 md:grid-cols-2">
        {processSteps.map((step, index) => (
          <Reveal key={step.id} delay={0.04 * index}>
            <li className="flex h-full gap-4 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg)]/40 p-5 sm:p-6">
              <span className="font-mono text-sm text-[var(--accent)]">{step.id}</span>
              <div>
                <h3 className="font-display text-xl text-[var(--fg)]">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {step.description}
                </p>
              </div>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
