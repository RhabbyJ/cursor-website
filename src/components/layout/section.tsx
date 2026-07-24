import { cn } from "@/lib/utils";

import { Container } from "@/components/layout/container";

export function Section({
  id,
  className,
  containerClassName,
  children,
  eyebrow,
  title,
  description,
}: {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
}) {
  return (
    <section id={id} className={cn("relative scroll-mt-24 py-20 sm:py-24 lg:py-28", className)}>
      <Container className={containerClassName}>
        {(eyebrow || title || description) && (
          <header className="mb-10 max-w-2xl sm:mb-12">
            {eyebrow ? (
              <p className="mb-3 font-mono text-[11px] tracking-[0.18em] text-[var(--accent)] uppercase">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="font-display text-3xl leading-tight tracking-tight text-[var(--fg)] sm:text-4xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                {description}
              </p>
            ) : null}
          </header>
        )}
        {children}
      </Container>
    </section>
  );
}
