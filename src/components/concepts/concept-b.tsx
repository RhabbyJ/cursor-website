"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { studio } from "@/lib/studio-content";
import styles from "./concept-b.module.css";

const steps = [
  {
    title: "Site",
    body: "A public surface your customers actually use — not a static brochure.",
  },
  {
    title: "Sheet",
    body: "Menus, events, pricing, and hours updated by staff in Google Sheets.",
  },
  {
    title: "Live ops",
    body: "The website stays current because it is wired to the work behind it.",
  },
] as const;

export function ConceptB() {
  const reduce = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);
  const [workFocus, setWorkFocus] = useState<"harness" | "sheets">("harness");

  return (
    <div className={styles.root}>
      <header className={styles.nav}>
        <Link className={styles.brandMark} href="/">
          {studio.brand}
        </Link>
        <nav className={styles.navLinks} aria-label="Primary">
          {studio.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <span className={styles.routeTag}>Concept B · Editorial</span>
      </header>

      <section className={styles.hero} aria-label="Hero">
        <div className={styles.heroCopy}>
          <motion.h1
            className={styles.brand}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {studio.brand}
          </motion.h1>
          <h2 className={styles.headline}>{studio.headline}</h2>
          <p className={styles.support}>{studio.support}</p>
          <div className={styles.ctaRow}>
            <a className={styles.primary} href="#contact">
              {studio.primaryCta}
              <ArrowRight weight="bold" />
            </a>
            <a className={styles.secondary} href="#contact">
              {studio.secondaryCta}
            </a>
          </div>
        </div>
        <div className={styles.heroMedia}>
          <Image
            src="/concepts/b-atmosphere.png"
            alt=""
            fill
            priority
            sizes="(max-width: 980px) 100vw, 50vw"
          />
        </div>
      </section>

      <section id="services" className={styles.section}>
        <p className={styles.services}>
          We build <em>premium websites</em>,{" "}
          <em>connected operations</em>, and{" "}
          <em>custom software</em> — so the site can run the business, not just
          describe it.
        </p>

        <div className={styles.diagram} role="list" aria-label="Operating model">
          {steps.map((step, index) => (
            <button
              key={step.title}
              type="button"
              role="listitem"
              className={`${styles.step} ${activeStep === index ? styles.stepActive : ""}`}
              onClick={() => setActiveStep(index)}
              onMouseEnter={() => setActiveStep(index)}
              aria-pressed={activeStep === index}
            >
              <span className={styles.stepIndex}>0{index + 1}</span>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <AnimatePresence mode="wait">
                {activeStep === index ? (
                  <motion.p
                    key={step.title}
                    className={styles.stepBody}
                    initial={reduce ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduce ? undefined : { opacity: 0, y: -6 }}
                    transition={{ duration: 0.25 }}
                  >
                    {step.body}
                  </motion.p>
                ) : (
                  <p className={styles.stepBody}>{step.body}</p>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
      </section>

      <section id="work" className={`${styles.section} ${styles.work}`}>
        <div className={styles.workList}>
          <button
            type="button"
            className={`${styles.workItem} ${workFocus === "harness" ? styles.workItemActive : ""}`}
            onMouseEnter={() => setWorkFocus("harness")}
            onFocus={() => setWorkFocus("harness")}
            onClick={() => setWorkFocus("harness")}
          >
            <h3 className={styles.workName}>{studio.harnessMate.name}</h3>
            <p className={styles.workMeta}>{studio.harnessMate.role}</p>
          </button>
          <button
            type="button"
            className={`${styles.workItem} ${workFocus === "sheets" ? styles.workItemActive : ""}`}
            onMouseEnter={() => setWorkFocus("sheets")}
            onFocus={() => setWorkFocus("sheets")}
            onClick={() => setWorkFocus("sheets")}
          >
            <h3 className={styles.workName}>Sheets-powered hospitality</h3>
            <p className={styles.workMeta}>Menus, events, and hours without redeploying</p>
          </button>
        </div>

        <div className={styles.preview}>
          <span className={styles.previewLabel}>
            {studio.harnessMate.placeholderLabel}
          </span>
          <Image
            src="/concepts/b-atmosphere.png"
            alt=""
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
          />
          <p className={styles.previewNote}>
            {workFocus === "harness"
              ? studio.harnessMate.summary
              : "Staff edit a spreadsheet. The live site reflects menus, specials, and hours."}
          </p>
        </div>
      </section>

      <section id="contact" className={`${styles.section} ${styles.closing}`}>
        <h2>Start with the system your team will actually run.</h2>
        <div className={styles.ctaRow}>
          <a className={styles.primary} href="mailto:hello@operator.studio">
            {studio.primaryCta}
            <ArrowRight weight="bold" />
          </a>
          <a className={styles.secondary} href="mailto:hello@operator.studio">
            {studio.secondaryCta}
          </a>
        </div>
      </section>
    </div>
  );
}
