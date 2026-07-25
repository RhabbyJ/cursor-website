import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const errors = [];
const warnings = [];

function exists(relative) {
  return fs.existsSync(path.join(root, relative));
}

const required = [
  ".cursor/mcp.json",
  ".cursor/rules/00-project-authority.mdc",
  ".cursor/rules/10-web-quality-baseline.mdc",
  ".cursor/skills/build-web-experience/SKILL.md",
  ".cursor/skills/visual-source-scout/SKILL.md",
  ".cursor/skills/signature-surface-pass/SKILL.md",
  ".cursor/skills/asset-quality-pass/SKILL.md",
  "PROJECT_BRIEF.md",
  "website-os/PHILOSOPHY.md",
];

for (const file of required) {
  if (!exists(file)) errors.push(`Missing required file: ${file}`);
}

try {
  JSON.parse(fs.readFileSync(path.join(root, ".cursor/mcp.json"), "utf8"));
} catch (error) {
  errors.push(`Invalid .cursor/mcp.json: ${error.message}`);
}

const skillsDir = path.join(root, ".cursor/skills");
if (fs.existsSync(skillsDir)) {
  for (const entry of fs.readdirSync(skillsDir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const skillPath = path.join(skillsDir, entry.name, "SKILL.md");
    if (!fs.existsSync(skillPath)) {
      errors.push(`Skill directory lacks SKILL.md: ${entry.name}`);
      continue;
    }
    const text = fs.readFileSync(skillPath, "utf8");
    if (!text.startsWith("---\n")) errors.push(`Missing frontmatter: ${entry.name}`);
    if (!/^name:\s*\S+/m.test(text)) errors.push(`Missing skill name: ${entry.name}`);
    if (!/^description:\s*.+/m.test(text)) errors.push(`Missing skill description: ${entry.name}`);
    if (/disable-model-invocation:\s*true/i.test(text)) {
      warnings.push(`Skill is hidden from model invocation: ${entry.name}`);
    }
  }
}

const alwaysRules = fs.readdirSync(path.join(root, ".cursor/rules"))
  .filter((name) => name.endsWith(".mdc"))
  .filter((name) => /alwaysApply:\s*true/.test(fs.readFileSync(path.join(root, ".cursor/rules", name), "utf8")));

if (alwaysRules.length > 3) {
  warnings.push(`There are ${alwaysRules.length} always-on Rules. This OS is intended to stay lightweight.`);
}

if (errors.length) {
  console.error("Web Design OS validation failed:\n");
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log("Web Design OS validation passed.");
console.log(`Always-on Rules: ${alwaysRules.length}`);
console.log(`Skills: ${fs.readdirSync(skillsDir, { withFileTypes: true }).filter((e) => e.isDirectory()).length}`);
if (warnings.length) {
  console.warn("\nWarnings:");
  for (const warning of warnings) console.warn(`- ${warning}`);
}
