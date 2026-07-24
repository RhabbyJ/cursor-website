"use client";

import { List, X } from "@phosphor-icons/react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";
import { navLinks, site } from "@/lib/content";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 h-16 border-b transition-[background-color,border-color] duration-200",
        scrolled || open
          ? "border-[var(--border)] bg-[var(--bg)]"
          : "border-transparent bg-transparent",
      )}
    >
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="font-display text-lg tracking-tight text-[var(--fg)]"
        >
          {site.name}
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => track("nav_section_click", { href: link.href })}
              className="rounded-[var(--radius-md)] px-3 py-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--fg)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a
              href="#consult"
              onClick={() => track("cta_consult_click", { location: "header" })}
            >
              Request consultation
            </a>
          </Button>
          <Button
            type="button"
            variant="secondary"
            size="icon"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X weight="bold" /> : <List weight="bold" />}
          </Button>
        </div>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-[var(--border)] bg-[var(--bg)] md:hidden"
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                track("nav_section_click", { href: link.href, mobile: true });
                setOpen(false);
              }}
              className="rounded-[var(--radius-md)] px-3 py-3 text-base text-[var(--fg)]"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="mt-2">
            <a
              href="#consult"
              onClick={() => {
                track("cta_consult_click", { location: "mobile-nav" });
                setOpen(false);
              }}
            >
              Request consultation
            </a>
          </Button>
        </Container>
      </div>
    </header>
  );
}
