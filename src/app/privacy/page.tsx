import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `Privacy — ${site.name}`,
  description: `How ${site.name} handles consultation form data.`,
};

export default function PrivacyPage() {
  return (
    <main id="main" className="border-b border-[var(--border)] py-16 sm:py-20">
      <Container className="max-w-2xl">
        <p className="font-mono text-[11px] tracking-[0.14em] text-[var(--accent)] uppercase">
          Privacy
        </p>
        <h1 className="mt-3 font-display text-4xl tracking-tight text-[var(--fg)]">
          Privacy notice
        </h1>
        <div className="mt-8 space-y-4 text-sm leading-relaxed text-[var(--muted)]">
          <p>
            When you submit the consultation form on this site, we collect the
            information you provide: name, business, email, project type, and
            message.
          </p>
          <p>
            That information is used only to respond to your enquiry and discuss
            a potential project. It is not sold.
          </p>
          <p>
            Submissions are processed on our server. Depending on configuration,
            they may be stored in a private inbox file or forwarded to an
            operator-controlled webhook. Do not include passwords or sensitive
            secrets in the form.
          </p>
          <p>
            Questions:{" "}
            <a className="text-[var(--accent)]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
        <p className="mt-10">
          <Link
            href="/#consult"
            className="text-sm text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Back to consultation
          </Link>
        </p>
      </Container>
    </main>
  );
}
