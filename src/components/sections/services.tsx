import type { Icon } from "@phosphor-icons/react";
import {
  Buildings,
  CalendarCheck,
  Cube,
  FlowArrow,
  GlobeHemisphereWest,
  MagnifyingGlass,
  Sparkle,
  Table,
  UserCircle,
} from "@phosphor-icons/react/dist/ssr";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { services } from "@/lib/content";

const icons: Record<string, Icon> = {
  GlobeHemisphereWest,
  Table,
  Sparkle,
  Buildings,
  UserCircle,
  MagnifyingGlass,
  FlowArrow,
  CalendarCheck,
  Cube,
};

export function ServicesSection() {
  return (
    <Section
      id="services"
      className="border-y border-[var(--border)] bg-[var(--surface)]/40"
      eyebrow="L02 · Services"
      title="What we build"
      description="From marketing sites to full applications—choose the layer your business needs next, or connect several into one system."
    >
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => {
          const Icon = icons[service.icon] ?? Cube;
          return (
            <Reveal key={service.title} delay={Math.min(index * 0.04, 0.24)}>
              <li className="flex h-full gap-4 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--bg)]/50 p-5 transition-colors hover:border-[var(--border-strong)]">
                <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]">
                  <Icon className="size-5" weight="duotone" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg text-[var(--fg)]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                    {service.description}
                  </p>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
