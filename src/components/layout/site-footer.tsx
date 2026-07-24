import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

import { Container } from "@/components/layout/container";
import { navLinks, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <Container className="grid gap-10 py-14 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl text-[var(--fg)]">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            We do not just build websites. We build the system behind the
            website—editable data, automation, and software that helps the
            business operate.
          </p>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--fg)] transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-[11px] tracking-[0.16em] text-[var(--muted)] uppercase">
            Contact
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--fg)] transition-colors hover:text-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          >
            {site.email}
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
          <ul className="mt-6 flex flex-wrap gap-4 text-sm text-[var(--muted)]">
            <li>
              <a
                href="#privacy"
                className="hover:text-[var(--fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                aria-disabled="true"
                title="Privacy page coming soon"
              >
                Privacy
              </a>
            </li>
            <li>
              <a
                href="#terms"
                className="hover:text-[var(--fg)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
                aria-disabled="true"
                title="Terms page coming soon"
              >
                Terms
              </a>
            </li>
          </ul>
        </div>
      </Container>
      <Container className="border-t border-[var(--border)] py-5">
        <p className="font-mono text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} {site.name}. Systems for businesses that
          need to operate online.
        </p>
      </Container>
    </footer>
  );
}
