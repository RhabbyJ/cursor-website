import { cn } from "@/lib/utils";

type RailStep = {
  id: string;
  label: string;
};

export function DataRail({
  steps,
  activeIndex = 0,
  orientation = "horizontal",
  className,
}: {
  steps: readonly RailStep[];
  activeIndex?: number;
  orientation?: "horizontal" | "vertical";
  className?: string;
}) {
  if (orientation === "vertical") {
    return (
      <ol className={cn("relative flex flex-col gap-0", className)} aria-label="Process rail">
        {steps.map((step, index) => {
          const active = index === activeIndex;
          const done = index < activeIndex;
          return (
            <li key={step.id} className="relative flex gap-3 pb-6 last:pb-0">
              {index < steps.length - 1 ? (
                <span
                  className="absolute top-3 left-[5px] h-[calc(100%-0.5rem)] w-px bg-[var(--border)]"
                  aria-hidden
                />
              ) : null}
              <span
                className={cn(
                  "relative z-[1] mt-1 size-2.5 shrink-0 rounded-full border",
                  active && "border-[var(--accent)] bg-[var(--accent)]",
                  done && !active && "border-[var(--ok)] bg-[var(--ok)]",
                  !active && !done && "border-[var(--border-strong)] bg-[var(--bg)]",
                )}
                aria-hidden
              />
              <div>
                <p className="font-mono text-[10px] tracking-wide text-[var(--muted)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <p
                  className={cn(
                    "mt-1 text-sm",
                    active ? "text-[var(--fg)]" : "text-[var(--muted)]",
                  )}
                >
                  {step.label}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    );
  }

  return (
    <ol
      className={cn(
        "relative grid gap-3",
        className,
      )}
      style={{ gridTemplateColumns: `repeat(${steps.length}, minmax(0, 1fr))` }}
      aria-label="Process rail"
    >
      <span
        className="absolute top-[5px] right-4 left-4 h-px bg-[var(--border)]"
        aria-hidden
      />
      {steps.map((step, index) => {
        const active = index === activeIndex;
        const done = index < activeIndex;
        return (
          <li key={step.id} className="relative pt-0">
            <span
              className={cn(
                "relative z-[1] mb-3 block size-2.5 rounded-full border",
                active && "border-[var(--accent)] bg-[var(--accent)]",
                done && !active && "border-[var(--ok)] bg-[var(--ok)]",
                !active && !done && "border-[var(--border-strong)] bg-[var(--bg)]",
              )}
              aria-hidden
            />
            <p className="font-mono text-[10px] tracking-wide text-[var(--muted)]">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p
              className={cn(
                "mt-1 text-sm leading-snug",
                active ? "text-[var(--fg)]" : "text-[var(--muted)]",
              )}
            >
              {step.label}
            </p>
          </li>
        );
      })}
    </ol>
  );
}
