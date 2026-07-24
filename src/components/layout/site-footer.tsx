import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { navLinks, site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--surface)]">
      <Container className="grid gap-10 py-12 sm:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl text-[var(--fg)]">{site.name}</p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
            Websites connected to business data, workflows, and custom software.
          </p>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.12em] text-[var(--muted)] uppercase">
            Navigate
          </p>
          <ul className="mt-4 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[var(--fg)] hover:text-[var(--accent)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-[11px] tracking-[0.12em] text-[var(--muted)] uppercase">
            Contact
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-[var(--fg)] hover:text-[var(--accent)]"
          >
            {site.email}
            <ArrowUpRight className="size-3.5" aria-hidden />
          </a>
          <p className="mt-6">
            <Link
              href="/privacy"
              className="text-sm text-[var(--muted)] hover:text-[var(--fg)]"
            >
              Privacy
            </Link>
          </p>
        </div>
      </Container>
      <Container className="border-t border-[var(--border)] py-5">
        <p className="font-mono text-xs text-[var(--muted)]">
          © {new Date().getFullYear()} {site.name}
        </p>
      </Container>
    </footer>
  );
}
