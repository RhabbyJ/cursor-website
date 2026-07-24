import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export function StudioIntroSection() {
  return (
    <Section
      id="studio"
      eyebrow="L01 · The studio"
      title="A software studio for businesses that need systems, not just sites."
      description="Operator designs and builds digital layers that marketing teams publish, operations teams update, and customers actually use—websites included, software when the work demands it."
    >
      <Reveal>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Public layer",
              body: "Brand, offers, discovery, booking, and lead capture that stay truthful as the business changes.",
            },
            {
              title: "Operations layer",
              body: "Editable data, portals, and workflows so staff are not blocked waiting on a developer for every update.",
            },
            {
              title: "Intelligence layer",
              body: "Search, automation, and AI assistance grounded in your structured data—with clear failure states and human control.",
            },
          ].map((item) => (
            <article
              key={item.title}
              className="rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6"
            >
              <h3 className="font-display text-xl text-[var(--fg)]">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
