export function HarnessMateDemo() {
  return (
    <div className="panel overflow-hidden">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
        <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--muted)] uppercase">
          HarnessMate · connector workspace
        </p>
        <span className="rounded-sm bg-[var(--accent-soft)] px-2 py-0.5 font-mono text-[10px] text-[var(--accent)]">
          LIVE UI MODEL
        </span>
      </div>
      <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
        <div className="border-b border-[var(--border)] p-4 lg:border-r lg:border-b-0">
          <label className="font-mono text-[10px] tracking-wide text-[var(--muted)] uppercase">
            Search
          </label>
          <div className="mt-2 rounded-md border border-[var(--accent)]/50 bg-[var(--bg)] px-3 py-2 text-sm text-[var(--fg)]">
            D38999 Series III · shell 17
          </div>
          <ul className="mt-4 space-y-2">
            {[
              { name: "TV06RW-17-35P", meta: "Plug · 55 contacts" },
              { name: "D38999/26WD35SN", meta: "Compatible mate candidate" },
              { name: "MS27467T17B35P", meta: "Legacy cross-ref" },
            ].map((row, i) => (
              <li
                key={row.name}
                className={`rounded-md border px-3 py-2 ${
                  i === 0
                    ? "border-[var(--accent)] bg-[var(--accent-soft)]"
                    : "border-[var(--border)] bg-[var(--surface-2)]"
                }`}
              >
                <p className="font-mono text-xs text-[var(--fg)]">{row.name}</p>
                <p className="mt-1 text-[11px] text-[var(--muted)]">{row.meta}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2">
          {[
            {
              title: "Mate finding",
              body: "Rank compatible mates against shell, contact arrangement, and finish constraints.",
            },
            {
              title: "Technical specs",
              body: "Surface voltage, current, materials, and environmental ratings beside the selection path.",
            },
            {
              title: "Engineering workflows",
              body: "Move from search → compare → shortlist without leaving the workspace.",
            },
            {
              title: "AI decision support",
              body: "Assist with option ranking and constraint checks—human override stays explicit.",
            },
          ].map((card) => (
            <article
              key={card.title}
              className="rounded-md border border-[var(--border)] bg-[var(--bg)]/40 p-3"
            >
              <h4 className="text-sm font-medium text-[var(--fg)]">{card.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
