import { mkdir, appendFile } from "fs/promises";
import path from "path";
import { NextResponse } from "next/server";

import { projectTypes } from "@/lib/content";

type Body = {
  name?: string;
  business?: string;
  email?: string;
  projectType?: string;
  message?: string;
  website?: string; // honeypot
};

const hits = new Map<string, { count: number; reset: number }>();

function rateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 60_000;
  const max = 8;
  const entry = hits.get(ip);
  if (!entry || entry.reset < now) {
    hits.set(ip, { count: 1, reset: now + windowMs });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count += 1;
  return true;
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!rateLimit(ip)) {
    return NextResponse.json(
      { ok: false, error: "Too many requests. Try again shortly." },
      { status: 429 },
    );
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 },
    );
  }

  if (body.website && body.website.trim() !== "") {
    // Honeypot tripped — pretend success.
    return NextResponse.json({ ok: true });
  }

  const name = body.name?.trim() ?? "";
  const business = body.business?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const projectType = body.projectType?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  const fieldErrors: Record<string, string> = {};
  if (!name) fieldErrors.name = "Name is required.";
  if (!business) fieldErrors.business = "Business name is required.";
  if (!email) fieldErrors.email = "Email is required.";
  else if (!isEmail(email)) fieldErrors.email = "Enter a valid email address.";
  if (!projectType || !(projectTypes as readonly string[]).includes(projectType)) {
    fieldErrors.projectType = "Select a project type.";
  }
  if (!message) fieldErrors.message = "Tell us briefly what you need.";
  else if (message.length > 4000) fieldErrors.message = "Message is too long.";

  if (Object.keys(fieldErrors).length > 0) {
    return NextResponse.json(
      { ok: false, error: "Please fix the highlighted fields.", fieldErrors },
      { status: 400 },
    );
  }

  const record = {
    at: new Date().toISOString(),
    ip,
    name,
    business,
    email,
    projectType,
    message,
  };

  try {
    const webhook = process.env.CONSULT_WEBHOOK_URL;
    if (webhook) {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(record),
      });
      if (!res.ok) {
        throw new Error(`Webhook failed: ${res.status}`);
      }
    } else {
      const dir = path.join(process.cwd(), "data");
      await mkdir(dir, { recursive: true });
      await appendFile(
        path.join(dir, "consult-inbox.jsonl"),
        `${JSON.stringify(record)}\n`,
        "utf8",
      );
    }
  } catch {
    return NextResponse.json(
      {
        ok: false,
        error: "Could not save your request. Email hello@operator.studio instead.",
      },
      { status: 500 },
    );
  }

  return NextResponse.json({ ok: true });
}
