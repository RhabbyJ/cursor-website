import { HouseLine, MagnifyingGlass, PaperPlaneTilt } from "@phosphor-icons/react/dist/ssr";

export function MyBirdDemo() {
  return (
    <div className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
        <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--muted)] uppercase">
          MyBird Real Estate · discovery
        </p>
        <span className="rounded-sm bg-[var(--accent-soft)] px-2 py-0.5 font-mono text-[10px] text-[var(--accent)]">
          UI COMPOSITION
        </span>
      </div>
      <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="border-b border-[var(--border)] p-4 lg:border-r lg:border-b-0">
          <div className="flex items-center gap-2 rounded-md border border-[var(--border)] bg-[var(--bg)] px-3 py-2">
            <MagnifyingGlass className="size-4 text-[var(--muted)]" aria-hidden />
            <span className="text-sm text-[var(--muted)]">
              Downtown · 2+ beds · under asking
            </span>
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              { title: "Cedar Loft 4B", meta: "2 bed · open house Sat" },
              { title: "Harbor View 12", meta: "3 bed · inquiry open" },
            ].map((listing) => (
              <article
                key={listing.title}
                className="rounded-md border border-[var(--border)] bg-[var(--surface-2)] p-3"
              >
                <div className="mb-3 flex h-20 items-center justify-center rounded-md border border-dashed border-[var(--border)] bg-[var(--bg)]/50">
                  <HouseLine className="size-7 text-[var(--border-strong)]" aria-hidden />
                </div>
                <p className="text-sm font-medium text-[var(--fg)]">{listing.title}</p>
                <p className="mt-1 text-xs text-[var(--muted)]">{listing.meta}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="space-y-3 p-4">
          <p className="text-sm text-[var(--muted)]">
            Custom real-estate digital experience: property discovery, customer
            workflows, and lead generation designed as one path.
          </p>
          <div className="rounded-md border border-[var(--border)] bg-[var(--bg)]/40 p-3">
            <p className="font-mono text-[10px] text-[var(--muted)] uppercase">
              Inquiry workflow
            </p>
            <ol className="mt-3 space-y-2 text-xs text-[var(--fg)]">
              <li>1. Browse filtered inventory</li>
              <li>2. Save / request details</li>
              <li>3. Lead routed to the right agent</li>
            </ol>
          </div>
          <div className="flex items-center gap-2 rounded-md border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-3 py-2 text-xs text-[var(--fg)]">
            <PaperPlaneTilt className="size-4 text-[var(--accent)]" aria-hidden />
            Lead captured with listing context attached
          </div>
        </div>
      </div>
    </div>
  );
}
