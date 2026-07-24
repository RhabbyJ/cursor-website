import { cn } from "@/lib/utils";

import { Container } from "@/components/layout/container";

export function Section({
  id,
  className,
  children,
  bare = false,
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bare?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn("scroll-target relative py-16 sm:py-20 lg:py-24", className)}
    >
      {bare ? children : <Container>{children}</Container>}
    </section>
  );
}

export function SectionIntro({
  kicker,
  title,
  children,
  className,
}: {
  kicker?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <header className={cn("mb-10 max-w-2xl", className)}>
      {kicker ? (
        <p className="mb-3 font-mono text-[11px] tracking-[0.14em] text-[var(--accent)] uppercase">
          {kicker}
        </p>
      ) : null}
      <h2 className="font-display text-3xl tracking-tight text-[var(--fg)] sm:text-4xl">
        {title}
      </h2>
      {children ? (
        <div className="mt-4 text-base leading-relaxed text-[var(--muted)]">
          {children}
        </div>
      ) : null}
    </header>
  );
}
