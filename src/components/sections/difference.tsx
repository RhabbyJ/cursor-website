import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { differences } from "@/lib/content";

export function DifferenceSection() {
  return (
    <Section
      id="difference"
      eyebrow="L07 · Difference"
      title="Not a traditional website agency"
      description="Agencies ship pages. We ship the operating layer behind them—when your business needs it."
    >
      <Reveal>
        <div className="overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)]">
          <div className="grid grid-cols-[1fr_1fr] border-b border-[var(--border)] bg-[var(--surface-2)] font-mono text-[11px] tracking-[0.14em] text-[var(--muted)] uppercase">
            <div className="border-r border-[var(--border)] px-4 py-3">Typical agency</div>
            <div className="px-4 py-3 text-[var(--accent)]">Operator</div>
          </div>
          <ul>
            {differences.map((row) => (
              <li
                key={row.agency}
                className="grid grid-cols-1 border-b border-[var(--border)] last:border-0 sm:grid-cols-2"
              >
                <p className="border-b border-[var(--border)] px-4 py-4 text-sm text-[var(--muted)] sm:border-r sm:border-b-0">
                  {row.agency}
                </p>
                <p className="px-4 py-4 text-sm text-[var(--fg)]">{row.operator}</p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
