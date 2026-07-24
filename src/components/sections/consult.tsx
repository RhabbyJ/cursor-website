"use client";

import { useState } from "react";

import { Section } from "@/components/layout/section";
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
  website: string;
};

type FormErrors = Partial<Record<keyof FormValues | "form", string>>;

const initial: FormValues = {
  name: "",
  business: "",
  email: "",
  projectType: "",
  message: "",
  website: "",
};

export function ConsultSection() {
  const [values, setValues] = useState<FormValues>(initial);
  const [errors, setErrors] = useState<FormErrors>({});
  const [state, setState] = useState<FormState>("idle");

  function validateLocal(next: FormValues): FormErrors {
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
    const localErrors = validateLocal(values);
    if (Object.keys(localErrors).length > 0) {
      setErrors({
        ...localErrors,
        form: "Please fix the highlighted fields.",
      });
      setState("error");
      const first = Object.keys(localErrors)[0];
      document.getElementById(`field-${first}`)?.focus();
      return;
    }

    setState("submitting");
    setErrors({});

    try {
      const res = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = (await res.json()) as {
        ok?: boolean;
        error?: string;
        fieldErrors?: Record<string, string>;
      };

      if (!res.ok || !data.ok) {
        setErrors({
          ...(data.fieldErrors ?? {}),
          form: data.error ?? "Something went wrong.",
        });
        setState("error");
        const first = Object.keys(data.fieldErrors ?? {})[0];
        if (first) document.getElementById(`field-${first}`)?.focus();
        return;
      }

      setState("success");
      setValues(initial);
      track("consult_submit_success", { projectType: values.projectType });
    } catch {
      setErrors({ form: "Network error. Check your connection and try again." });
      setState("error");
    }
  }

  return (
    <Section id="consult">
      <div className="mb-10 max-w-2xl">
        <h2 className="font-display text-3xl tracking-tight text-[var(--fg)] sm:text-4xl">
          Request a consultation
        </h2>
        <p className="mt-4 text-base text-[var(--muted)]">
          Share what needs to operate online.{" "}
          <a
            href="/privacy"
            className="text-[var(--accent)] underline-offset-4 hover:underline"
          >
            Privacy notice
          </a>
          .
        </p>
      </div>

      {state === "success" ? (
        <div
          className="max-w-xl border border-[var(--border)] bg-[var(--surface)] p-6"
          role="status"
          aria-live="polite"
        >
          <p className="font-display text-2xl text-[var(--fg)]">Request received</p>
          <p className="mt-3 text-sm text-[var(--muted)]">
            Thanks — your consultation request was submitted. If you need to add
            detail, email{" "}
            <a className="text-[var(--accent)]" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
          <Button
            type="button"
            className="mt-6"
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
          className="relative grid max-w-2xl gap-4 border border-[var(--border)] bg-[var(--surface)] p-5 sm:grid-cols-2 sm:p-6"
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
              aria-describedby={errors.projectType ? "error-projectType" : undefined}
              className="mt-2 flex h-11 w-full rounded-[var(--radius-md)] border border-[var(--border)] bg-[var(--bg)] px-3.5 text-sm text-[var(--fg)] focus-visible:border-[var(--accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40"
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
              className="mt-2 bg-[var(--bg)]"
              value={values.message}
              onChange={(e) => {
                setValues((s) => ({ ...s, message: e.target.value }));
                setErrors((err) => ({ ...err, message: undefined }));
              }}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? "error-message" : undefined}
              placeholder="What should the site or software do day to day?"
            />
            {errors.message ? (
              <p id="error-message" className="mt-1.5 text-xs text-[var(--danger)]">
                {errors.message}
              </p>
            ) : null}
          </div>

          {/* Honeypot */}
          <div className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden" aria-hidden>
            <Label htmlFor="field-website">Website</Label>
            <Input
              id="field-website"
              tabIndex={-1}
              autoComplete="off"
              value={values.website}
              onChange={(e) => setValues((s) => ({ ...s, website: e.target.value }))}
            />
          </div>

          {errors.form ? (
            <p className="sm:col-span-2 text-sm text-[var(--danger)]" role="alert">
              {errors.form}
            </p>
          ) : null}

          <div className="sm:col-span-2">
            <Button type="submit" size="lg" disabled={state === "submitting"}>
              {state === "submitting" ? "Sending…" : "Request consultation"}
            </Button>
          </div>
        </form>
      )}
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
        className="mt-2 bg-[var(--bg)]"
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
