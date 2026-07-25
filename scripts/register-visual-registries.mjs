import fs from "node:fs";
import path from "node:path";

const file = path.resolve(process.cwd(), "components.json");
if (!fs.existsSync(file)) {
  console.error("components.json was not found. Run `npx shadcn@latest init` first.");
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(file, "utf8"));
data.registries ??= {};
data.registries["@aceternity"] = "https://ui.aceternity.com/registry/{name}.json";
fs.writeFileSync(file, `${JSON.stringify(data, null, 2)}\n`);
console.log("Registered @aceternity in components.json");
