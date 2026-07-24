"use client";

import { useReducedMotion } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

import { DataRail } from "@/components/layout/data-rail";

const stages = [
  {
    id: "edit",
    label: "Staff edits",
    detail: "Business data changes in a familiar source",
  },
  {
    id: "validate",
    label: "Validation",
    detail: "Rules catch incomplete or invalid rows",
  },
  {
    id: "publish",
    label: "Site updates",
    detail: "Valid records reach the public surface",
  },
  {
    id: "customer",
    label: "Customer sees it",
    detail: "Visitors get current information",
  },
] as const;

export function HeroDataFlow() {
  const reduced = useReducedMotion();
  const [step, setStep] = useState(0);
  const activeStep = reduced ? stages.length - 1 : step;

  useEffect(() => {
    if (reduced) return;
    const id = window.setInterval(() => {
      setStep((current) => (current + 1) % stages.length);
    }, 2200);
    return () => window.clearInterval(id);
  }, [reduced]);

  return (
    <div className="border border-[var(--border)] bg-[var(--bg)]">
      <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
        <p className="font-mono text-[11px] tracking-[0.12em] text-[var(--muted)] uppercase">
          Data → site
        </p>
        <p className="font-mono text-[11px] text-[var(--accent)]">
          {String(activeStep + 1).padStart(2, "0")} / 04
        </p>
      </div>

      <div className="border-b border-[var(--border)] px-4 py-4">
        <DataRail
          steps={stages.map(({ id, label }) => ({ id, label }))}
          activeIndex={activeStep}
          className="hidden sm:grid"
        />
        <DataRail
          steps={stages.map(({ id, label }) => ({ id, label }))}
          activeIndex={activeStep}
          orientation="vertical"
          className="sm:hidden"
        />
      </div>

      <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
        <ol className="divide-y divide-[var(--border)] border-b border-[var(--border)] lg:border-r lg:border-b-0">
          {stages.map((stage, index) => {
            const active = index === activeStep;
            return (
              <li key={stage.id}>
                <button
                  type="button"
                  onClick={() => {
                    if (!reduced) setStep(index);
                  }}
                  className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-[var(--surface)]"
                  aria-current={active ? "step" : undefined}
                >
                  <span
                    className={
                      active
                        ? "mt-0.5 font-mono text-[11px] text-[var(--accent)]"
                        : "mt-0.5 font-mono text-[11px] text-[var(--muted)]"
                    }
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span
                      className={
                        active
                          ? "block text-sm text-[var(--fg)]"
                          : "block text-sm text-[var(--muted)]"
                      }
                    >
                      {stage.label}
                    </span>
                    <span className="mt-1 block text-xs text-[var(--muted)]">
                      {stage.detail}
                    </span>
                  </span>
                </button>
              </li>
            );
          })}
        </ol>

        <div className="min-h-[200px] p-4 sm:p-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={stages[activeStep].id}
              initial={reduced ? false : { opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? undefined : { opacity: 0, x: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="border border-[var(--border)] bg-[var(--surface)] p-4"
            >
              <StagePanel step={activeStep} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function StagePanel({ step }: { step: number }) {
  if (step === 0) {
    return (
      <div>
        <p className="font-mono text-[10px] tracking-wide text-[var(--muted)] uppercase">
          source.record
        </p>
        <div className="mt-3 grid grid-cols-[1.2fr_0.8fr] gap-px bg-[var(--border)] text-xs">
          <div className="bg-[var(--surface-2)] px-2 py-2 text-[var(--muted)]">Field</div>
          <div className="bg-[var(--surface-2)] px-2 py-2 text-[var(--muted)]">Value</div>
          <div className="bg-[var(--bg)] px-2 py-2 text-[var(--fg)]">Title</div>
          <div className="bg-[var(--accent-soft)] px-2 py-2 font-mono text-[var(--accent)]">
            updated
          </div>
          <div className="bg-[var(--bg)] px-2 py-2 text-[var(--fg)]">Status</div>
          <div className="bg-[var(--bg)] px-2 py-2 font-mono text-[var(--ok)]">ready</div>
        </div>
      </div>
    );
  }

  if (step === 1) {
    return (
      <div className="space-y-2 font-mono text-xs">
        <p className="text-[var(--ok)]">required fields · ok</p>
        <p className="text-[var(--ok)]">format checks · ok</p>
        <p className="text-[var(--danger)]">invalid row · held back</p>
      </div>
    );
  }

  if (step === 2) {
    return (
      <div>
        <p className="font-mono text-[10px] text-[var(--muted)] uppercase">Publish</p>
        <p className="mt-3 text-sm text-[var(--fg)]">
          Valid records sync to the public route.
        </p>
        <p className="mt-2 font-mono text-[11px] text-[var(--accent)]">status: published</p>
      </div>
    );
  }

  return (
    <div>
      <p className="font-mono text-[10px] text-[var(--muted)] uppercase">Customer view</p>
      <p className="mt-3 font-display text-xl text-[var(--fg)]">Current</p>
      <p className="mt-2 text-sm text-[var(--muted)]">
        Visitors see the updated record—without a developer ticket.
      </p>
    </div>
  );
}
