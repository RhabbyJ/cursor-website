"use client";

import { useState } from "react";

import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { track } from "@/lib/analytics";
import { projectTypes, site } from "@/lib/content";

type FormState = "idle" | "submitting" | "success" | "error";

type FormValues = {
  name: string;
  business: string;
  email: string;
  projectType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initial: FormValues = {
  name: "",
  business: "",
  email: "",
  projectType: "",
  message: "",
};

export function ConsultSection() {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormState>("idle");

  function validate(next: FormValues): FormErrors {
    const e: FormErrors = {};
    if (!next.name.trim()) e.name = "Name is required.";
    if (!next.business.trim()) e.business = "Business name is required.";
    if (!next.email.trim()) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email)) {
      e.email = "Enter a valid email address.";
    }
    if (!next.projectType) e.projectType = "Select a project type.";
    if (!next.message.trim()) e.message = "Tell us briefly what you need.";
    return e;
  }

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const first = Object.keys(nextErrors)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }

    setState("submitting");
    try {
      const subject = encodeURIComponent(
        `Consultation request — ${values.business} (${values.projectType})`,
      );
      const body = encodeURIComponent(
        [
          `Name: ${values.name}`,
          `Business: ${values.business}`,
          `Email: ${values.email}`,
          `Project type: ${values.projectType}`,
          "",
          values.message,
        ].join("\n"),
      );
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setState("success");
      setValues(initial);
      track("consult_submit_success", { projectType: values.projectType });
    } catch {
      setState("error");
    }
  }

  return (
    <Section
      id="consult"
      eyebrow="L08 · Consultation"
      title="Request a consultation or project estimate"
      description="Tell us what you need to operate online. We’ll follow up to clarify scope, data sources, and a sensible path forward."
    >
      <Reveal>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="panel p-6">
            <p className="font-display text-xl text-[var(--fg)]">What to expect</p>
            <ul className="mt-4 space-y-3 text-sm text-[var(--muted)]">
              <li>A working session on goals, audience, and operational owners</li>
              <li>Clarity on website vs. system vs. AI software scope</li>
              <li>An honest estimate path—no invented timelines or vanity metrics</li>
            </ul>
            <p className="mt-6 text-sm text-[var(--muted)]">
              Prefer email?{" "}
              <a
                href={`mailto:${site.email}`}
                className="text-[var(--accent)] underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {site.email}
              </a>
            </p>
          </div>

          {state === "success" ? (
            <div
              className="panel flex flex-col justify-center p-6"
              role="status"
              aria-live="polite"
            >
              <p className="font-display text-2xl text-[var(--fg)]">Request prepared</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
                Your mail client should open with the consultation details. If it
                did not, email{" "}
                <a className="text-[var(--accent)]" href={`mailto:${site.email}`}>
                  {site.email}
                </a>{" "}
                directly.
              </p>
              <Button
                type="button"
                className="mt-6 w-fit"
                variant="secondary"
                onClick={() => setState("idle")}
              >
                Send another request
              </Button>
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              className="panel grid gap-4 p-5 sm:grid-cols-2 sm:p-6"
            >
              <Field
                id="name"
                label="Name"
                error={errors.name}
                value={values.name}
                onChange={(v) => {
                  setValues((s) => ({ ...s, name: v }));
                  setErrors((e) => ({ ...e, name: undefined }));
                }}
              />
              <Field
                id="business"
                label="Business"
                error={errors.business}
                value={values.business}
                onChange={(v) => {
                  setValues((s) => ({ ...s, business: v }));
                  setErrors((e) => ({ ...e, business: undefined }));
                }}
              />
              <Field
                id="email"
                label="Email"
                type="email"
                error={errors.email}
                value={values.email}
                onChange={(v) => {
                  setValues((s) => ({ ...s, email: v }));
                  setErrors((e) => ({ ...e, email: undefined }));
                }}
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <Label htmlFor="field-projectType">Project type</Label>
                <select
                  id="field-projectType"
                  value={values.projectType}
                  onChange={(e) => {
                    setValues((s) => ({ ...s, projectType: e.target.value }));
                    setErrors((err) => ({ ...err, projectType: undefined }));
                  }}
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={
                    errors.projectType ? "error-projectType" : undefined
                  }
                  className="mt-2 flex h-11 w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-3.5 text-sm text-[var(--fg)] focus-visible:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
                >
                  <option value="">Select…</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType ? (
                  <p id="error-projectType" className="mt-1.5 text-xs text-[var(--danger)]">
                    {errors.projectType}
                  </p>
                ) : null}
              </div>
              <div className="sm:col-span-2">
                <Label htmlFor="field-message">Project notes</Label>
                <Textarea
                  id="field-message"
                  className="mt-2"
                  value={values.message}
                  onChange={(e) => {
                    setValues((s) => ({ ...s, message: e.target.value }));
                    setErrors((err) => ({ ...err, message: undefined }));
                  }}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "error-message" : undefined}
                  placeholder="What needs to run—not just look good?"
                />
                {errors.message ? (
                  <p id="error-message" className="mt-1.5 text-xs text-[var(--danger)]">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {state === "error" ? (
                <p className="sm:col-span-2 text-sm text-[var(--danger)]" role="alert">
                  Something went wrong opening your mail client. Email{" "}
                  {site.email} or try again.
                </p>
              ) : null}

              <div className="sm:col-span-2">
                <Button type="submit" size="lg" disabled={state === "submitting"}>
                  {state === "submitting" ? "Preparing…" : "Request consultation"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </Reveal>
    </Section>
  );
}

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  className,
}: {
  id: keyof FormValues;
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <Label htmlFor={`field-${id}`}>{label}</Label>
      <Input
        id={`field-${id}`}
        type={type}
        className="mt-2"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `error-${id}` : undefined}
      />
      {error ? (
        <p id={`error-${id}`} className="mt-1.5 text-xs text-[var(--danger)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
