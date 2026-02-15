/**
 * One-off script: reads situations from src/data/phrases.ts and writes
 * all Chinese (Mandarin + pinyin) phrases to chinese-phrases.md.
 * Run: npx tsx scripts/extract-chinese.ts
 */

import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { situations } from "../src/data/phrases.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = join(__dirname, "..", "chinese-phrases.md");

const lines: string[] = [
  "# Chinese phrases (Mandarin + Pinyin)",
  "",
  "All phrases from ParentlyWords, grouped by situation.",
  "",
];

for (const situation of situations) {
  lines.push(`## ${situation.title}`);
  lines.push("");
  for (const phrase of situation.phrases) {
    lines.push(`- ${phrase.mandarin} (${phrase.pinyin})`);
  }
  lines.push("");
}

writeFileSync(outPath, lines.join("\n"), "utf-8");
console.log(`Wrote ${outPath}`);
