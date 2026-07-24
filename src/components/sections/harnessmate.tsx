"use client";

import { useReducedMotion } from "motion/react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import { Section } from "@/components/layout/section";
import { cn } from "@/lib/utils";

const steps = [
  {
    id: "search",
    label: "Search",
    title: "Find the connector family",
    body: "Engineers query structured catalogs by series, shell, and arrangement—not brochure pages.",
  },
  {
    id: "detail",
    label: "Connector data",
    title: "Read the specification surface",
    body: "Contact count, finish, and environmental ratings sit beside the part under review.",
  },
  {
    id: "mate",
    label: "Mate finding",
    title: "Rank compatible mates",
    body: "Compatibility constraints narrow the field before anyone shortlists hardware.",
  },
  {
    id: "decide",
    label: "Decision path",
    title: "Move from options to a call",
    body: "Compare, shortlist, and optionally use AI-assisted ranking with human override.",
  },
] as const;

export function HarnessMateSection() {
  const reduced = useReducedMotion();
  const [active, setActive] = useState(0);

  return (
    <Section id="harnessmate" className="border-y border-[var(--border)] bg-[var(--surface)]/40">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="font-mono text-[10px] tracking-wide text-[var(--accent)] uppercase">
            In development
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-[var(--fg)] sm:text-4xl">
            HarnessMate
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            Engineering software for connector selection—not a marketing site with
            a parts PDF attached. The problem is decision speed across dense
            catalogs, compatibility rules, and specification detail.
          </p>
          <ol className="mt-8 space-y-1 border-l border-[var(--border)]">
            {steps.map((step, index) => (
              <li key={step.id}>
                <button
                  type="button"
                  onClick={() => setActive(index)}
                  className={cn(
                    "flex w-full items-center gap-3 border-l-2 py-2.5 pl-4 text-left transition-colors",
                    active === index
                      ? "border-[var(--accent)] text-[var(--fg)]"
                      : "border-transparent text-[var(--muted)] hover:text-[var(--fg)]",
                  )}
                  aria-current={active === index ? "step" : undefined}
                >
                  <span className="font-mono text-[11px]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm">{step.label}</span>
                </button>
              </li>
            ))}
          </ol>
        </div>

        <div className="border border-[var(--border)] bg-[var(--bg)]">
          <div className="flex items-center justify-between border-b border-[var(--border)] px-4 py-3">
            <p className="font-mono text-[11px] text-[var(--muted)] uppercase">
              Workflow
            </p>
            <p className="font-mono text-[11px] text-[var(--accent)]">
              {steps[active].label}
            </p>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={steps[active].id}
              initial={reduced ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="p-4 sm:p-5"
            >
              <h3 className="font-display text-xl text-[var(--fg)]">
                {steps[active].title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{steps[active].body}</p>
              <WorkflowPanel index={active} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Section>
  );
}

function WorkflowPanel({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="mt-5 border border-[var(--border)]">
        <div className="border-b border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-mono text-xs text-[var(--fg)]">
          D38999 Series III · shell 17
        </div>
        <ul className="divide-y divide-[var(--border)] text-sm">
          {[
            ["TV06RW-17-35P", "Plug · 55 contacts"],
            ["D38999/26WD35SN", "Mate candidate"],
            ["MS27467T17B35P", "Legacy cross-ref"],
          ].map(([pn, meta]) => (
            <li key={pn} className="flex justify-between gap-4 px-3 py-2.5">
              <span className="font-mono text-[var(--fg)]">{pn}</span>
              <span className="text-[var(--muted)]">{meta}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (index === 1) {
    return (
      <dl className="mt-5 grid grid-cols-2 gap-px border border-[var(--border)] bg-[var(--border)] text-sm">
        {[
          ["Series", "D38999 III"],
          ["Contacts", "55"],
          ["Shell", "17"],
          ["Finish", "Olive drab"],
        ].map(([k, v]) => (
          <div key={k} className="bg-[var(--surface)] px-3 py-3">
            <dt className="font-mono text-[10px] text-[var(--muted)] uppercase">{k}</dt>
            <dd className="mt-1 text-[var(--fg)]">{v}</dd>
          </div>
        ))}
      </dl>
    );
  }

  if (index === 2) {
    return (
      <ul className="mt-5 space-y-2">
        {[
          { pn: "D38999/26WD35SN", score: "High" },
          { pn: "TV07RW-17-35S", score: "Med" },
        ].map((row) => (
          <li
            key={row.pn}
            className="flex items-center justify-between border border-[var(--border)] px-3 py-2.5 text-sm"
          >
            <span className="font-mono text-[var(--fg)]">{row.pn}</span>
            <span className="font-mono text-[11px] text-[var(--accent)]">{row.score}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div className="mt-5 border border-[var(--border)] p-4">
      <p className="font-mono text-[10px] text-[var(--muted)] uppercase">Shortlist</p>
      <p className="mt-2 font-mono text-sm text-[var(--fg)]">TV06RW-17-35P</p>
      <p className="mt-3 text-xs text-[var(--muted)]">
        Mate: D38999/26WD35SN · constraints reviewed · human confirms
      </p>
    </div>
  );
}
