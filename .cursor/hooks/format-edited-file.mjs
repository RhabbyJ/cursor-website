#!/usr/bin/env node

import { accessSync, constants, readFileSync } from "node:fs";
import { extname, resolve } from "node:path";
import { spawnSync } from "node:child_process";

const supported = new Set([
  ".js", ".jsx", ".mjs", ".cjs", ".ts", ".tsx", ".json", ".css", ".scss", ".md", ".mdx", ".yaml", ".yml"
]);

function readStdin() {
  try {
    return readFileSync(0, "utf8");
  } catch {
    return "";
  }
}

try {
  const payload = JSON.parse(readStdin() || "{}");
  const filePath = payload.file_path;
  if (typeof filePath !== "string" || !supported.has(extname(filePath))) process.exit(0);

  const prettier = resolve(process.cwd(), "node_modules", ".bin", process.platform === "win32" ? "prettier.cmd" : "prettier");
  try {
    accessSync(prettier, constants.X_OK);
  } catch {
    process.exit(0);
  }

  const result = spawnSync(prettier, ["--write", filePath], {
    cwd: process.cwd(),
    stdio: "inherit",
    shell: false
  });

  process.exit(result.status ?? 0);
} catch (error) {
  console.error(`[website-os] formatter hook skipped: ${error instanceof Error ? error.message : String(error)}`);
  process.exit(0);
}
