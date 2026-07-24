"use client";

import { useState } from "react";

import { cn } from "@/lib/utils";

const layers = [
  {
    id: "public",
    label: "Public website",
    code: "L01",
    summary: "Menus, offers, and brand pages customers see.",
  },
  {
    id: "data",
    label: "Editable business data",
    code: "L02",
    summary: "Sheets and structured records staff can update.",
  },
  {
    id: "automation",
    label: "Automation layer",
    code: "L03",
    summary: "Validation, sync, routing, and notifications.",
  },
  {
    id: "ai",
    label: "AI & software",
    code: "L04",
    summary: "Search, workflows, decision support, portals.",
  },
] as const;

type LayerId = (typeof layers)[number]["id"];

export function SystemLayersDemo() {
  const [active, setActive] = useState<LayerId>("public");
  const activeIndex = layers.findIndex((layer) => layer.id === active);

  return (
    <div className="panel relative overflow-hidden p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
          System stack
        </p>
        <p className="font-mono text-[11px] text-[var(--accent)]">
          {layers[activeIndex]?.code}
        </p>
      </div>

      <div className="relative mx-auto h-[340px] max-w-[420px] sm:h-[380px]">
        {layers.map((layer, index) => {
          const isActive = active === layer.id;
          const depth = isActive ? 0 : index < activeIndex ? activeIndex - index : index - activeIndex;
          const top = isActive ? 48 : 12 + index * 12;
          const scale = isActive ? 1 : 0.985 - depth * 0.01;

          return (
            <button
              key={layer.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActive(layer.id)}
              className={cn(
                "absolute inset-x-0 rounded-[var(--radius-lg)] border text-left transition-[transform,border-color,background-color,box-shadow] duration-300 ease-[var(--ease-out)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
                isActive
                  ? "border-[var(--accent)] bg-[var(--surface-2)] shadow-[0_18px_40px_rgba(0,0,0,0.35)]"
                  : "border-[var(--border)] bg-[var(--surface)] hover:border-[var(--border-strong)]",
              )}
              style={{
                top: `${top}px`,
                bottom: isActive ? "8px" : `${28 + (layers.length - 1 - index) * 8}px`,
                zIndex: isActive ? 30 : 10 + index,
                transform: `scale(${scale})`,
                transformOrigin: "top center",
              }}
            >
              <div className="flex h-full flex-col overflow-hidden p-4 sm:p-5">
                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono text-[10px] tracking-[0.14em] text-[var(--muted)] uppercase">
                    {layer.code}
                  </span>
                  <span
                    className={cn(
                      "size-2 rounded-full",
                      isActive ? "bg-[var(--accent)]" : "bg-[var(--border-strong)]",
                    )}
                    aria-hidden
                  />
                </div>
                <p className="mt-3 font-display text-lg text-[var(--fg)] sm:text-xl">
                  {layer.label}
                </p>
                {isActive ? <LayerPreview id={layer.id} /> : null}
              </div>
            </button>
          );
        })}
      </div>

      <p className="mt-4 text-sm text-[var(--muted)]" aria-live="polite">
        {layers[activeIndex]?.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="System layers">
        {layers.map((layer) => (
          <button
            key={layer.id}
            type="button"
            role="tab"
            aria-selected={active === layer.id}
            onClick={() => setActive(layer.id)}
            className={cn(
              "rounded-md border px-2.5 py-1.5 font-mono text-[11px] tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
              active === layer.id
                ? "border-[var(--accent)] bg-[var(--accent-soft)] text-[var(--fg)]"
                : "border-[var(--border)] text-[var(--muted)] hover:text-[var(--fg)]",
            )}
          >
            {layer.code}
          </button>
        ))}
      </div>
    </div>
  );
}

function LayerPreview({ id }: { id: LayerId }) {
  if (id === "public") {
    return (
      <div className="mt-4 grid gap-2">
        <div className="h-2 w-1/3 rounded-sm bg-[var(--accent)]/70" />
        <div className="h-2 w-2/3 rounded-sm bg-[var(--border-strong)]" />
        <div className="mt-1 grid grid-cols-3 gap-2">
          <div className="h-12 rounded-md border border-[var(--border)] bg-[var(--bg)]/60" />
          <div className="h-12 rounded-md border border-[var(--border)] bg-[var(--bg)]/60" />
          <div className="h-12 rounded-md border border-[var(--border)] bg-[var(--bg)]/60" />
        </div>
      </div>
    );
  }

  if (id === "data") {
    return (
      <div className="mt-4 overflow-hidden rounded-md border border-[var(--border)]">
        <div className="grid grid-cols-3 gap-px bg-[var(--border)] text-[10px]">
          {["Item", "Price", "Status"].map((h) => (
            <div key={h} className="bg-[var(--surface-2)] px-2 py-1.5 text-[var(--muted)]">
              {h}
            </div>
          ))}
          {[
            ["IPA Flight", "14", "Live"],
            ["Jazz Night", "—", "Tonight"],
          ].flatMap((row, rowIndex) =>
            row.map((cell, cellIndex) => (
              <div
                key={`${rowIndex}-${cellIndex}`}
                className="bg-[var(--bg)]/70 px-2 py-1.5 text-[var(--fg)]"
              >
                {cell}
              </div>
            )),
          )}
        </div>
      </div>
    );
  }

  if (id === "automation") {
    return (
      <div className="mt-4 space-y-2 font-mono text-[11px]">
        <div className="rounded-md border border-[var(--border)] px-3 py-2 text-[var(--ok)]">
          validate → ok
        </div>
        <div className="rounded-md border border-[var(--border)] px-3 py-2 text-[var(--accent)]">
          sync → site
        </div>
        <div className="rounded-md border border-[var(--border)] px-3 py-2 text-[var(--muted)]">
          notify → ops
        </div>
      </div>
    );
  }

  return (
    <div className="mt-4 space-y-2">
      <div className="rounded-md border border-[var(--border)] bg-[var(--bg)]/50 px-3 py-2">
        <p className="font-mono text-[10px] text-[var(--muted)]">QUERY</p>
        <p className="mt-1 text-xs text-[var(--fg)]">Find mates for D38999 Series III</p>
      </div>
      <div className="rounded-md border border-[var(--accent)]/40 bg-[var(--accent-soft)] px-3 py-2 text-xs text-[var(--fg)]">
        Ranked options + spec constraints
      </div>
    </div>
  );
}
