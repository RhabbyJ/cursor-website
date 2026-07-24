import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { aiCapabilities } from "@/lib/content";

export function AiCapabilitiesSection() {
  return (
    <Section
      id="ai"
      eyebrow="L05 · AI & software"
      title="Software and AI when the workflow needs more than a page"
      description="Portals, dashboards, searchable databases, automation, and AI tools—designed with inputs, outputs, failure states, and human override in mind."
    >
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="panel h-full p-6">
            <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
              Capability map
            </p>
            <ul className="mt-5 space-y-3 text-sm text-[var(--fg)]">
              {[
                "Internal business portals",
                "Customer dashboards",
                "Searchable technical databases",
                "Workflow automation across tools",
                "Booking and lead-generation systems",
                "Full web applications",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 border-b border-[var(--border)] pb-3 last:border-0 last:pb-0"
                >
                  <span className="font-mono text-[11px] text-[var(--accent)]">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
        <div className="grid gap-3 sm:grid-cols-2">
          {aiCapabilities.map((item, index) => (
            <Reveal key={item.title} delay={0.05 * index}>
              <article className="h-full rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5">
                <h3 className="font-display text-lg text-[var(--fg)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
