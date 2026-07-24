import { Section } from "@/components/layout/section";
import { engagementModes } from "@/lib/content";
import { cn } from "@/lib/utils";

export function EngagementModesSection() {
  return (
    <Section id="modes">
      <div className="mb-10 max-w-xl">
        <h2 className="font-display text-3xl tracking-tight text-[var(--fg)] sm:text-4xl">
          Three engagement modes
        </h2>
        <p className="mt-4 text-base text-[var(--muted)]">
          Each level includes the previous. Start where the business needs to
          operate next—not where an agency stops at launch day.
        </p>
      </div>

      <ol className="space-y-0">
        {engagementModes.map((mode, index) => {
          const priorAdds = engagementModes
            .slice(0, index)
            .flatMap((m) => [...m.adds]);
          return (
            <li
              key={mode.id}
              className="border-t border-[var(--border)] py-8 last:border-b"
              style={{ paddingLeft: `${Math.min(index, 2) * 1.25}rem` }}
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-mono text-sm text-[var(--accent)]">{mode.id}</span>
                <h3 className="font-display text-2xl text-[var(--fg)]">{mode.title}</h3>
              </div>
              <p className="mt-3 max-w-xl text-sm text-[var(--muted)]">{mode.summary}</p>

              <div className="mt-5 grid gap-6 md:grid-cols-2">
                {priorAdds.length > 0 ? (
                  <ul className="space-y-1.5">
                    <li className="mb-2 font-mono text-[10px] tracking-wide text-[var(--muted)] uppercase">
                      Carried forward
                    </li>
                    {priorAdds.map((item) => (
                      <li key={item} className="text-sm text-[var(--muted)]">
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div />
                )}
                <ul
                  className={cn(
                    "space-y-1.5 border-l border-[var(--accent)] pl-4",
                    index === 0 && "md:col-start-1",
                  )}
                >
                  <li className="mb-2 font-mono text-[10px] tracking-wide text-[var(--accent)] uppercase">
                    This level adds
                  </li>
                  {mode.adds.map((item) => (
                    <li key={item} className="text-sm text-[var(--fg)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
