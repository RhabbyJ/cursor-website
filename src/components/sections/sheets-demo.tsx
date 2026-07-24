"use client";

import { useReducedMotion } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { useMemo, useState } from "react";

import { Section } from "@/components/layout/section";
import { Button } from "@/components/ui/button";
import { initialSheetRows, type SheetRow } from "@/lib/content";
import { cn } from "@/lib/utils";

function validatePrice(price: string) {
  if (!price.trim()) return false;
  if (price.includes("½") || price.includes("%")) return true;
  return /^[\d.]+$/.test(price.trim());
}

export function SheetsDemoSection() {
  const reduced = useReducedMotion();
  const [rows, setRows] = useState<SheetRow[]>(initialSheetRows);
  const [flash, setFlash] = useState(0);

  const published = useMemo(
    () =>
      rows.filter((row) => row.active && validatePrice(row.price) && !row.invalid),
    [rows],
  );

  const blocked = useMemo(
    () => rows.filter((row) => row.active && (!validatePrice(row.price) || row.invalid)),
    [rows],
  );

  function updateRow(id: string, patch: Partial<SheetRow>) {
    setRows((current) =>
      current.map((row) => {
        if (row.id !== id) return row;
        const next = { ...row, ...patch };
        if (patch.price !== undefined) {
          next.invalid = !validatePrice(patch.price);
        }
        return next;
      }),
    );
    setFlash((n) => n + 1);
  }

  return (
    <Section id="sheets">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div className="max-w-lg">
          <h2 className="font-display text-3xl tracking-tight text-[var(--fg)] sm:text-4xl">
            Edit the Sheet. Watch the site follow.
          </h2>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Toggle a row or change a price. Invalid values stay off the public view.
          </p>
        </div>
        <span className="font-mono text-[10px] tracking-wide text-[var(--accent)] uppercase">
          Prototype demo
        </span>
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        <div className="min-w-0 border border-[var(--border)] bg-[var(--surface)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <p className="font-mono text-[11px] text-[var(--muted)] uppercase">
              Business Sheet
            </p>
            <p className="font-mono text-[11px] text-[var(--muted)]">local model</p>
          </div>
          <div className="max-w-full overflow-x-auto">
            <table className="w-full table-fixed text-left text-sm">
              <colgroup>
                <col className="w-[40%]" />
                <col className="w-[22%]" />
                <col className="w-[18%]" />
                <col className="w-[20%]" />
              </colgroup>
              <thead className="border-b border-[var(--border)] font-mono text-[10px] tracking-wide text-[var(--muted)] uppercase">
                <tr>
                  <th className="px-2 py-2 font-medium sm:px-3">Item</th>
                  <th className="px-2 py-2 font-medium sm:px-3">Price</th>
                  <th className="px-2 py-2 font-medium sm:px-3">Active</th>
                  <th className="px-2 py-2 font-medium sm:px-3">Check</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => {
                  const ok = validatePrice(row.price) && !row.invalid;
                  return (
                    <tr key={row.id} className="border-b border-[var(--border)]">
                      <td className="px-2 py-2 sm:px-3">
                        <input
                          aria-label={`Item name for row ${row.id}`}
                          className="w-full min-w-0 truncate bg-transparent text-[var(--fg)] outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]"
                          value={row.item}
                          onChange={(e) => updateRow(row.id, { item: e.target.value })}
                        />
                      </td>
                      <td className="px-2 py-2 sm:px-3">
                        <input
                          aria-label={`Price for ${row.item}`}
                          className={cn(
                            "w-full min-w-0 bg-transparent font-mono outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent)]",
                            ok ? "text-[var(--fg)]" : "text-[var(--danger)]",
                          )}
                          value={row.price}
                          onChange={(e) => updateRow(row.id, { price: e.target.value })}
                        />
                      </td>
                      <td className="px-2 py-2 sm:px-3">
                        <input
                          type="checkbox"
                          aria-label={`Active ${row.item}`}
                          checked={row.active}
                          onChange={(e) =>
                            updateRow(row.id, { active: e.target.checked })
                          }
                          className="size-4 accent-[var(--accent)]"
                        />
                      </td>
                      <td className="px-2 py-2 font-mono text-[11px] sm:px-3">
                        {ok ? (
                          <span className="text-[var(--ok)]">ok</span>
                        ) : (
                          <span className="text-[var(--danger)]">blocked</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p
            className={cn(
              "border-t border-[var(--border)] px-4 py-3 text-xs",
              blocked.length > 0 ? "text-[var(--danger)]" : "text-[var(--ok)]",
            )}
            role="status"
          >
            {blocked.length > 0
              ? `${blocked.length} invalid row${blocked.length > 1 ? "s" : ""} held back`
              : "All active rows valid"}
          </p>
        </div>

        <div className="border border-[var(--border)] bg-[var(--bg)] lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <p className="font-mono text-[11px] text-[var(--muted)] uppercase">
              Customer site
            </p>
            <AnimatePresence mode="wait">
              <motion.p
                key={flash}
                initial={reduced ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-mono text-[11px] text-[var(--accent)]"
              >
                updated
              </motion.p>
            </AnimatePresence>
          </div>
          <div className="p-5">
            <p className="font-display text-2xl text-[var(--fg)]">Tonight</p>
            <ul className="mt-4 space-y-0">
              <AnimatePresence initial={false}>
                {published.map((row) => (
                  <motion.li
                    key={row.id}
                    layout={!reduced}
                    initial={reduced ? false : { opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduced ? undefined : { opacity: 0, height: 0 }}
                    className="flex items-center justify-between border-b border-[var(--border)] py-3 text-sm"
                  >
                    <span className="text-[var(--muted)]">{row.item}</span>
                    <span className="font-mono text-[var(--fg)]">
                      {/^[\d.]+$/.test(row.price.trim())
                        ? `$${row.price.trim()}`
                        : row.price}
                    </span>
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
            {published.length === 0 ? (
              <p className="mt-4 text-sm text-[var(--muted)]">No published items.</p>
            ) : null}
            <Button
              type="button"
              variant="secondary"
              size="sm"
              className="mt-6"
              onClick={() => setRows(initialSheetRows)}
            >
              Reset
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
