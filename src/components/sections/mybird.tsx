import { MagnifyingGlass, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

import { Section } from "@/components/layout/section";

export function MyBirdSection() {
  return (
    <Section id="mybird" className="border-y border-[var(--border)]">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <p className="font-mono text-[10px] tracking-wide text-[var(--accent)] uppercase">
            Private implementation
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--fg)]">
            MyBird Real Estate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            Property discovery to contextual inquiry as one path—listing context
            travels with the lead.
          </p>
        </div>

        <div className="border border-[var(--border)] bg-[var(--surface)]">
          <div className="grid gap-0 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
            <div className="p-4">
              <div className="flex items-center gap-2 border border-[var(--border)] bg-[var(--bg)] px-3 py-2">
                <MagnifyingGlass className="size-4 text-[var(--muted)]" aria-hidden />
                <span className="text-sm text-[var(--muted)]">Downtown · 2+ beds</span>
              </div>
              <div className="mt-4 border border-[var(--border)] bg-[var(--bg)] p-3">
                <p className="font-mono text-[10px] text-[var(--muted)] uppercase">
                  Selected listing
                </p>
                <p className="mt-2 text-sm text-[var(--fg)]">Harbor View 12</p>
                <p className="mt-1 text-xs text-[var(--muted)]">Inquiry open</p>
              </div>
            </div>
            <div
              className="hidden w-px bg-[var(--border)] md:block"
              aria-hidden
            />
            <div className="border-t border-[var(--border)] p-4 md:border-t-0">
              <p className="font-mono text-[10px] text-[var(--muted)] uppercase">
                Inquiry rail
              </p>
              <ol className="mt-3 space-y-2 text-sm text-[var(--fg)]">
                <li className="flex gap-2">
                  <span className="font-mono text-[var(--accent)]">01</span>
                  Browse filtered inventory
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-[var(--accent)]">02</span>
                  Request details on a listing
                </li>
                <li className="flex gap-2">
                  <span className="font-mono text-[var(--accent)]">03</span>
                  Lead routes with listing context
                </li>
              </ol>
              <div className="mt-4 flex items-center gap-2 border border-[var(--border)] px-3 py-2 text-xs text-[var(--fg)]">
                <PaperPlaneTilt className="size-4 text-[var(--accent)]" aria-hidden />
                Attached to Harbor View 12
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
