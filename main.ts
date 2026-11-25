// One Star, Written in Sap — make.fun bounty entry.
// A single one-line 1-star review written by a houseplant about its human
// owner. The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: UTF-8 text, 1-279 characters, not only whitespace, single line.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "One star. I wrote this in sap — he hasn't watered me since March, so it's the only ink I have left.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
mkdirSync(outDir, { recursive: true });

// Self-check the gate before writing: single line, 1-279 chars.
if (LINE.length < 1 || LINE.length > 279) {
  throw new Error(`line is ${LINE.length} chars, outside the 1-279 gate`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("line must be a single non-blank line");
}

writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
console.log(LINE);
