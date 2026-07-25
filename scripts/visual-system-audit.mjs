#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const strict = process.argv.includes("--strict");

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (["node_modules", ".next", ".git", "dist", "build"].includes(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function read(file) {
  try { return fs.readFileSync(file, "utf8"); } catch { return ""; }
}

const sourceFiles = walk(path.join(root, "src")).filter((f) => /\.(tsx?|jsx?|css|scss|mdx)$/.test(f));
const source = sourceFiles.map(read).join("\n");
const publicFiles = walk(path.join(root, "public"));
const projectMedia = publicFiles.filter((f) => /\.(png|jpe?g|webp|avif|gif|mp4|webm|svg)$/i.test(f) && !/(next|vercel|globe|window|file)\.svg$/i.test(path.basename(f)));
const routeScreenshots = walk(path.join(root, "docs", "visual-routes")).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
const quality = read(path.join(root, "docs", "quality-profile.md"));
const ambitionMatch = quality.match(/design_ambition\s*:\s*(\d+(?:\.\d+)?)/i);
const ambition = ambitionMatch ? Number(ambitionMatch[1]) : null;
const visualJudge = read(path.join(root, "docs", "visual-judge.md"));
const assetInventory = read(path.join(root, "docs", "asset-inventory.md"));
const toolPreflight = read(path.join(root, "docs", "tool-preflight.md"));

const count = (regex) => (source.match(regex) || []).length;
const metrics = {
  sourceFiles: sourceFiles.length,
  imagesInMarkup: count(/<(?:Image|img)\b/g),
  projectMedia: projectMedia.length,
  routeScreenshots: routeScreenshots.length,
  motionElements: count(/<motion\./g),
  borderTokens: count(/\bborder(?:-[\w\[\]/.-]+)?/g),
  monoTokens: count(/\bfont-mono\b/g),
  roundedTokens: count(/\brounded(?:-[\w\[\]/.-]+)?/g),
};

const warnings = [];
const failures = [];
const add = (severity, message) => (severity === "fail" ? failures : warnings).push(message);

if (ambition == null) add("warn", "docs/quality-profile.md is missing a parseable design_ambition value.");
if ((ambition ?? 0) >= 7 && routeScreenshots.length < 6) add("fail", "High-ambition work requires at least 3 desktop + 3 mobile visual-route screenshots.");
if ((ambition ?? 0) >= 7 && projectMedia.length === 0 && metrics.imagesInMarkup === 0) add("fail", "High-ambition portfolio/marketing work has no non-default project media or rendered images.");
if ((ambition ?? 0) >= 7 && !/Verdict:\s*PASS/i.test(visualJudge)) add("fail", "Visual judge has not recorded a PASS verdict.");
if (!toolPreflight || /\| shadcn MCP \|\s*\|\s*\|/.test(toolPreflight)) add("warn", "Tool preflight appears missing or unfilled.");
if (!assetInventory || /## Real product evidence\s*\n\s*\|[^\n]*\|\s*\n\|[-|]+\|\s*\n\s*$/m.test(assetInventory)) add("warn", "Asset inventory appears unfilled.");
if (metrics.borderTokens > 100 && metrics.imagesInMarkup === 0) add("warn", `The source contains ${metrics.borderTokens} border tokens and no rendered imagery; inspect for boxed/documentation aesthetics.`);
if (metrics.monoTokens > 30) add("warn", `The source contains ${metrics.monoTokens} monospace tokens; verify that monospace is not acting as the entire brand.`);
if ((ambition ?? 0) >= 8 && metrics.motionElements < 3) add("warn", "Design ambition is 8+ but fewer than three Motion elements were detected; verify the signature experience actually exists (custom CSS/WebGL may be valid).\n");

console.log("Website OS visual-system audit\n");
console.log(JSON.stringify({ ambition, ...metrics }, null, 2));

if (warnings.length) {
  console.log("\nWarnings:");
  warnings.forEach((w) => console.log(`- ${w}`));
}
if (failures.length) {
  console.log("\nFailures:");
  failures.forEach((f) => console.log(`- ${f}`));
}
if (!warnings.length && !failures.length) console.log("\nNo deterministic visual-system warnings detected.");

if (strict && failures.length) process.exit(1);
