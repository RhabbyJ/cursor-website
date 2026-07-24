"use client";

import { ArrowRight } from "@phosphor-icons/react";

import { HeroDataFlow } from "@/components/demos/hero-data-flow";
import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { site } from "@/lib/content";

export function HeroSection() {
  return (
    <section className="scroll-target border-b border-[var(--border)] pt-10 pb-14 sm:pt-14 sm:pb-16 lg:pt-16 lg:pb-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
          <div>
            <p className="font-display text-3xl tracking-tight text-[var(--fg)] sm:text-4xl">
              {site.name}
            </p>
            <h1 className="mt-5 max-w-[16ch] font-display text-[2.1rem] leading-[1.1] tracking-tight text-[var(--fg)] sm:text-[2.75rem]">
              Your website should run your business, not just describe it.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-[var(--muted)]">
              Websites connected to business data, workflows, and custom software.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                  Selected work
                </a>
              </Button>
            </div>
          </div>
          <HeroDataFlow />
        </div>
      </Container>
    </section>
  );
}
