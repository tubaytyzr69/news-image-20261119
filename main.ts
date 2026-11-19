// Entry program for the 19 November 2026 news-image bounty.
//
// The judged image already lives in this repository as entry.png.
// This program only places a copy of it where the grader expects it.

import { copyFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDir = dirname(fileURLToPath(import.meta.url));
const imagePath = join(repoDir, "entry.png");
const targetDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

try {
  await mkdir(targetDir, { recursive: true });
  await copyFile(imagePath, join(targetDir, "entry.png"));
} catch (error) {
  console.error(`Failed to copy entry.png to ${targetDir}:`, error);
  process.exit(1);
}
