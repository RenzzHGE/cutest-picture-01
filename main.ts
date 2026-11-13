// cutest-picture-01: a baby pink axolotl smiling in a pastel-blue teacup,
// a heart of steam rising above it. The program copies the picture in
// this repository to /output/entry.png, byte for byte, so both grading
// runs write the same file.
//
// Run locally: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const dest = join(outDir, 'entry.png');
copyFileSync(new URL('./entry.png', import.meta.url), dest);
console.log(`wrote ${dest} (${statSync(dest).size} bytes)`);
