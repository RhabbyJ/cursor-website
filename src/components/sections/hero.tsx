"use client";

import { ArrowRight } from "@phosphor-icons/react";

import { SystemLayersDemo } from "@/components/demos/system-layers";
import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { site } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-[var(--border)] pt-10 pb-16 sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <Reveal>
            <p className="font-mono text-[11px] tracking-[0.18em] text-[var(--accent)] uppercase">
              {site.name} · Website & software studio
            </p>
            <h1 className="mt-4 max-w-[18ch] font-display text-4xl leading-[1.08] tracking-tight text-[var(--fg)] sm:text-5xl lg:text-[3.35rem]">
              Your website should run your business, not just describe it.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              We build premium websites, operational systems, and AI software—
              connected layers for marketing, staff updates, automation, and the
              tools that keep work moving.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg">
                <a
                  href="#consult"
                  onClick={() => track("cta_consult_click", { location: "hero" })}
                >
                  Request a consultation
                  <ArrowRight weight="bold" />
                </a>
              </Button>
              <Button asChild variant="secondary" size="lg">
                <a
                  href="#work"
                  onClick={() => track("cta_work_click", { location: "hero" })}
                >
                  View selected work
                </a>
              </Button>
            </div>
            <p className="mt-6 max-w-md text-sm text-[var(--muted)]">
              We do not just build websites. We build the system behind the
              website.
            </p>
          </Reveal>

          <Reveal delay={0.12} y={16}>
            <SystemLayersDemo />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
