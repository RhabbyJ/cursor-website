"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { studio } from "@/lib/studio-content";
import { HarnessmateDiagram } from "./harnessmate-diagram";
import { KineticField } from "./kinetic-field";
import styles from "./concept-c.module.css";

const proofSteps = [
  {
    title: "Site",
    body: "A public surface customers use — booking, menus, discovery, inquiry.",
  },
  {
    title: "Sheet",
    body: "Operations update content in Google Sheets without touching code.",
  },
  {
    title: "Live ops",
    body: "The website stays truthful because it is wired to the work behind it.",
  },
] as const;

function BrandMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden>
      <circle cx="16" cy="16" r="14" fill="none" stroke="#8fd4d0" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="3.2" fill="#c9a46c" />
      <circle cx="8" cy="11" r="1.6" fill="#8fd4d0" />
      <circle cx="24" cy="12" r="1.6" fill="#8fd4d0" />
      <circle cx="22" cy="22" r="1.6" fill="#8fd4d0" />
      <path d="M9.4 11.6 L13.4 14.6" stroke="#8fd4d0" strokeWidth="1.2" />
      <path d="M22.6 13 L18.4 15.2" stroke="#8fd4d0" strokeWidth="1.2" />
      <path d="M21.2 20.8 L17.6 17.8" stroke="#c9a46c" strokeWidth="1.2" />
    </svg>
  );
}

export function ConceptC() {
  const reduce = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className={styles.root}>
      <section className={styles.hero} aria-label="Hero">
        <div className={styles.bg}>
          <Image
            src="/concepts/c-atmosphere.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <KineticField className={styles.field} reducedMotion={reduce} />
        <div className={styles.shade} />
        <div className={styles.grain} aria-hidden />

        <header className={styles.nav}>
          <Link className={styles.navBrand} href="/" aria-label={`${studio.brand} home`}>
            <BrandMark className={styles.mark} />
            <span className={styles.navWord}>{studio.brand}</span>
          </Link>
          <nav className={styles.navLinks} aria-label="Primary">
            <a href="#proof">Model</a>
            <a href="#work">Work</a>
            <a href="#work">Contact</a>
          </nav>
          <a className={styles.navCta} href="#work">
            {studio.primaryCta}
            <ArrowRight weight="bold" size={14} />
          </a>
        </header>

        <div className={styles.heroCopy}>
          <motion.h1
            className={styles.brand}
            initial={reduce ? false : { opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
          >
            {studio.brand}
          </motion.h1>
          <motion.p
            className={styles.headline}
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.75 }}
          >
            {studio.headline}
          </motion.p>
          <motion.p
            className={styles.support}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.36, duration: 0.7 }}
          >
            {studio.support}
          </motion.p>
          <motion.div
            className={styles.ctaRow}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.65 }}
          >
            <a className={styles.primary} href="#work">
              {studio.primaryCta}
              <ArrowRight weight="bold" />
            </a>
            <a className={styles.secondary} href="#proof">
              See how it operates
            </a>
          </motion.div>
        </div>
      </section>

      <section id="proof" className={`${styles.section} ${styles.proof}`}>
        <div className={styles.proofIntro}>
          <p className={styles.eyebrow}>Operating model</p>
          <h2>From public surface to live operations.</h2>
          <p>
            The studio builds websites that stay connected to the systems staff
            already use — so the site can run the business, not just describe it.
          </p>
        </div>

        <div className={styles.diagram} role="list">
          {proofSteps.map((step, index) => (
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
                <motion.p
                  key={`${step.title}-${activeStep === index}`}
                  className={styles.stepBody}
                  initial={reduce ? false : { opacity: 0.65 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  {step.body}
                </motion.p>
              </AnimatePresence>
            </button>
          ))}
        </div>
      </section>

      <section id="work" className={`${styles.section} ${styles.work}`}>
        <div className={styles.workCopy}>
          <p className={styles.eyebrow}>{studio.harnessMate.role}</p>
          <h2>{studio.harnessMate.name}</h2>
          <p>{studio.harnessMate.summary}</p>
          <div className={styles.workMeta}>
            <span className={styles.chip}>Connector search</span>
            <span className={styles.chip}>Mate finding</span>
            <span className={styles.chip}>Spec workflows</span>
            <span className={styles.chip}>AI-assisted decisions</span>
          </div>
        </div>

        <div className={styles.planeWrap}>
          <motion.div
            className={styles.plane}
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <HarnessmateDiagram className={styles.diagramSvg} />
            <p className={styles.caption}>
              Designed system diagram of the product model — live UI capture to
              follow.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
