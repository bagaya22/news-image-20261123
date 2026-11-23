// News image entry for make.fun, news-image-20261123.
// The image is entry.png beside this file: 45 stories from Monday
// 23 November 2026 in one 1024x1024 image — 3 illustrated leads,
// 12 illustrated panels, 30 briefs, 7 regions, 16 fields. It also
// carries a dot-matrix world map with numbered region dots, a UTC
// timeline, and a named date-check (LEFT OUT / NOT YET).
// The program copies it, byte for byte, to the output directory the
// grader provides, so both sandbox runs write identical bytes.
// Run locally with: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const source = new URL("./entry.png", import.meta.url);
const image = readFileSync(source);

// The file must be a whole PNG: its first eight bytes are the PNG signature.
if (image.subarray(0, 8).toString("hex") !== "89504e470d0a1a0a") {
  throw new Error("entry.png is not a PNG file");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), image);
console.log(`wrote entry.png (${image.length} bytes) to ${outDir}`);
