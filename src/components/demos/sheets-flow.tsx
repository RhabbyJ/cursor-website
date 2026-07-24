import { ArrowRight, CheckCircle, Table, Globe } from "@phosphor-icons/react/dist/ssr";

const steps = [
  {
    title: "Staff update a Google Sheet",
    detail: "Menus, events, specials, hours—edited in a tool the team already uses.",
    icon: Table,
  },
  {
    title: "Data is validated",
    detail: "Rows are checked for required fields, formats, and duplicates before publish.",
    icon: CheckCircle,
  },
  {
    title: "The website updates",
    detail: "A server adapter syncs validated domain objects on the configured refresh policy.",
    icon: ArrowRight,
  },
  {
    title: "Customers see current content",
    detail: "Guests get tonight’s specials and events without a developer ticket.",
    icon: Globe,
  },
] as const;

export function SheetsFlowDemo() {
  return (
    <div className="panel p-5 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--accent)] uppercase">
            Operating model
          </p>
          <h3 className="mt-2 font-display text-2xl text-[var(--fg)]">
            Google Sheets → live website
          </h3>
        </div>
        <p className="max-w-sm text-sm text-[var(--muted)]">
          Demonstration of the update path. Freshness follows your configured
          sync policy—not a claim of instant magic.
        </p>
      </div>

      <ol className="mt-8 grid gap-3 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li
              key={step.title}
              className="relative rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg)]/40 p-4"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Icon className="size-5 text-[var(--accent)]" weight="duotone" aria-hidden />
              </div>
              <p className="mt-4 text-sm font-medium text-[var(--fg)]">{step.title}</p>
              <p className="mt-2 text-xs leading-relaxed text-[var(--muted)]">
                {step.detail}
              </p>
            </li>
          );
        })}
      </ol>

      <div className="mt-6 grid gap-3 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="overflow-hidden rounded-md border border-[var(--border)]">
          <div className="border-b border-[var(--border)] bg-[var(--surface-2)] px-3 py-2 font-mono text-[10px] text-[var(--muted)]">
            specials.sheet
          </div>
          <div className="grid grid-cols-3 gap-px bg-[var(--border)] text-xs">
            {["Name", "Price", "Active"].map((h) => (
              <div key={h} className="bg-[var(--surface)] px-2 py-2 text-[var(--muted)]">
                {h}
              </div>
            ))}
            {[
              ["Negroni", "$14", "TRUE"],
              ["Oyster Hour", "½ off", "TRUE"],
            ].flatMap((row, rowIndex) =>
              row.map((cell, cellIndex) => (
                <div
                  key={`${rowIndex}-${cellIndex}`}
                  className="bg-[var(--bg)] px-2 py-2 text-[var(--fg)]"
                >
                  {cell}
                </div>
              )),
            )}
          </div>
        </div>
        <div className="hidden justify-center md:flex" aria-hidden>
          <ArrowRight className="size-6 text-[var(--accent)]" weight="bold" />
        </div>
        <div className="rounded-md border border-[var(--border)] bg-[var(--surface)] p-4">
          <p className="font-mono text-[10px] tracking-wide text-[var(--muted)] uppercase">
            Customer view
          </p>
          <p className="mt-3 font-display text-lg text-[var(--fg)]">Tonight</p>
          <ul className="mt-3 space-y-2 text-sm text-[var(--muted)]">
            <li className="flex justify-between gap-4 border-b border-[var(--border)] pb-2">
              <span>Negroni</span>
              <span className="text-[var(--fg)]">$14</span>
            </li>
            <li className="flex justify-between gap-4">
              <span>Oyster Hour</span>
              <span className="text-[var(--fg)]">½ off</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
