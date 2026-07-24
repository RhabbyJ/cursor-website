import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { proofStrip } from "@/lib/content";
import { cn } from "@/lib/utils";

export function ProofStripSection() {
  return (
    <section
      id="work"
      className="scroll-target border-b border-[var(--border)] py-10"
      aria-label="Selected work"
    >
      <Container>
        <ul className="grid gap-0 border border-[var(--border)] lg:grid-cols-[1.35fr_1fr_1fr]">
          {proofStrip.map((item, index) => {
            const flagship = index === 0;
            return (
              <li
                key={item.name}
                className={cn(
                  index < proofStrip.length - 1 &&
                    "border-b border-[var(--border)] lg:border-r lg:border-b-0",
                  flagship && "bg-[var(--surface)]",
                )}
              >
                <a
                  href={item.href}
                  className="group flex h-full flex-col gap-3 p-5 transition-colors hover:bg-[var(--surface-2)] sm:p-6"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      {flagship ? (
                        <p className="mb-2 font-mono text-[10px] tracking-wide text-[var(--accent)] uppercase">
                          Flagship
                        </p>
                      ) : null}
                      <span
                        className={cn(
                          "font-display text-[var(--fg)]",
                          flagship ? "text-2xl sm:text-3xl" : "text-lg",
                        )}
                      >
                        {item.name}
                      </span>
                    </div>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-[var(--muted)] transition-colors group-hover:text-[var(--accent)]"
                      aria-hidden
                    />
                  </div>
                  <p className="text-sm text-[var(--muted)]">{item.line}</p>
                  <span className="mt-auto font-mono text-[10px] tracking-wide text-[var(--accent)] uppercase">
                    {item.status}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
