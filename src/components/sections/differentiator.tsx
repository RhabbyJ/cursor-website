import { Container } from "@/components/layout/container";
import { DataRail } from "@/components/layout/data-rail";

const rail = [
  { id: "edit", label: "Edit" },
  { id: "validate", label: "Validate" },
  { id: "publish", label: "Publish" },
  { id: "view", label: "View" },
] as const;

export function DifferentiatorStrip() {
  return (
    <section
      aria-label="Studio positioning"
      className="border-b border-[var(--border)] bg-[var(--surface)]/60 py-8 sm:py-10"
    >
      <Container>
        <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <p className="font-display text-2xl tracking-tight text-[var(--fg)] sm:text-3xl">
            We build the system behind the website.
          </p>
          <DataRail steps={rail} activeIndex={3} className="hidden md:grid" />
        </div>
      </Container>
    </section>
  );
}
