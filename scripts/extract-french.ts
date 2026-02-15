/**
 * One-off script: reads situations from src/data/phrases.ts and writes
 * all French phrases to french-phrases.md.
 * Run: npx tsx scripts/extract-french.ts
 */

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { situations } from "../src/data/phrases.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "french-phrases.md");

const lines: string[] = [
  "# French phrases",
  "",
  "All phrases from ParentlyWords, grouped by situation.",
  "",
];

for (const situation of situations) {
  lines.push(`## ${situation.title}`);
  lines.push("");
  for (const phrase of situation.phrases) {
    lines.push(`- ${phrase.french}`);
  }
  lines.push("");
}

writeFileSync(outPath, lines.join("\n"), "utf-8");
console.log(`Wrote ${outPath}`);
