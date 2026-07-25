"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
} from "motion/react";
import { studio } from "@/lib/studio-content";
import styles from "./concept-a.module.css";

export function ConceptA() {
  const reduce = useReducedMotion();
  const mx = useMotionValue(50);
  const my = useMotionValue(40);
  const veil = useMotionTemplate`linear-gradient(180deg, rgb(12 11 10 / 35%) 0%, rgb(12 11 10 / 15%) 35%, rgb(12 11 10 / 78%) 100%), radial-gradient(ellipse 60% 50% at ${mx}% ${my}%, rgb(232 165 75 / 28%), transparent 55%)`;

  return (
    <div
      className={styles.root}
      onPointerMove={(event) => {
        if (reduce) return;
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set(((event.clientX - rect.left) / rect.width) * 100);
        my.set(((event.clientY - rect.top) / rect.height) * 100);
      }}
    >
      <header className={styles.nav}>
        <span className={styles.routeTag}>Concept A · Cinematic</span>
        <nav className={styles.navLinks} aria-label="Primary">
          {studio.nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <Link href="/">{studio.brand}</Link>
      </header>

      <section className={styles.hero} aria-label="Hero">
        <div className={styles.bg}>
          <Image
            src="/concepts/a-atmosphere.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <motion.div className={styles.veil} style={{ background: veil }} />
        <div className={styles.grain} aria-hidden />

        <div className={styles.heroCopy}>
          <motion.h1
            className={styles.brand}
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {studio.brand}
          </motion.h1>
          <motion.p
            className={styles.headline}
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8 }}
          >
            {studio.headline}
          </motion.p>
          <motion.p
            className={styles.support}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.7 }}
          >
            {studio.support}
          </motion.p>
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
      </section>

      <section id="services" className={styles.section}>
        <p className={styles.sectionLabel}>Positioning</p>
        <div className={styles.services}>
          {studio.servicesLine.map((item, index) => (
            <motion.span
              key={item}
              className={styles.serviceItem}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ delay: index * 0.08 }}
            >
              {item}
              {index < studio.servicesLine.length - 1 ? (
                <span className={styles.serviceSep} aria-hidden>
                  {" "}
                  ·{" "}
                </span>
              ) : null}
            </motion.span>
          ))}
        </div>
      </section>

      <section id="work" className={`${styles.section} ${styles.work}`}>
        <div className={styles.workCopy}>
          <p className={styles.sectionLabel}>{studio.harnessMate.role}</p>
          <h2>{studio.harnessMate.name}</h2>
          <p>{studio.harnessMate.summary}</p>
        </div>
        <div className={styles.study} aria-label="HarnessMate visual study">
          <span className={styles.studyLabel}>
            {studio.harnessMate.placeholderLabel}
          </span>
          <svg
            className={styles.schematic}
            viewBox="0 0 640 320"
            role="img"
            aria-label="Abstract connector mating schematic"
          >
            <defs>
              <linearGradient id="aGlow" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#e8a54b" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#e8a54b" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            <rect x="40" y="60" width="180" height="200" rx="8" fill="none" stroke="#cfc6ba" strokeOpacity="0.35" />
            <rect x="420" y="60" width="180" height="200" rx="8" fill="none" stroke="#cfc6ba" strokeOpacity="0.35" />
            <circle cx="220" cy="120" r="10" fill="url(#aGlow)" />
            <circle cx="220" cy="200" r="10" fill="url(#aGlow)" />
            <circle cx="420" cy="120" r="10" fill="#cfc6ba" fillOpacity="0.55" />
            <circle cx="420" cy="200" r="10" fill="#cfc6ba" fillOpacity="0.55" />
            <path d="M230 120 H410" stroke="#e8a54b" strokeWidth="2" strokeDasharray="6 8" />
            <path d="M230 200 H410" stroke="#e8a54b" strokeWidth="2" strokeDasharray="6 8" />
            <text x="70" y="48" fill="#cfc6ba" fontSize="14">
              Source pinout
            </text>
            <text x="450" y="48" fill="#cfc6ba" fontSize="14">
              Mate candidate
            </text>
          </svg>
        </div>
      </section>

      <section id="contact" className={`${styles.section} ${styles.closing}`}>
        <h2>Build the system behind the site.</h2>
        <div className={styles.ctaRow} style={{ justifyContent: "center" }}>
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
