import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { parseReadme, countEntries } from "./parse.mjs";
import { renderPage } from "./template.mjs";

const readme = readFileSync(new URL("../README.md", import.meta.url), "utf8");
const model = parseReadme(readme);

const readmeCount = (readme.match(/^-\s+\[[^\]]+\]\(https?:\/\//gm) || []).length;
const modelCount = countEntries(model);
if (modelCount !== readmeCount) {
  console.error(`Entry parity failed: parsed ${modelCount}, README has ${readmeCount}.`);
  process.exit(1);
}

mkdirSync(new URL("../dist/", import.meta.url), { recursive: true });
writeFileSync(new URL("../dist/index.html", import.meta.url), renderPage(model));
console.log(`Built dist/index.html: ${modelCount} entries across ${model.sections.length} sections.`);
