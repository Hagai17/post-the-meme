// Entry program for the make.fun bounty "Post the Meme, Win the Feed"
// (u-myronera-post-the-meme-win-the-feed-2de960bf), Node 22, standard library only.
//
// The entry itself is a post on X: the meme in meme.png, posted from a public
// account with @_myronera and a make.fun play code in the post's text. This
// program's only job is to copy POST.json from the repository root to
// /output/POST.json, where the gate reads the post's address. Nothing this
// program writes about the post is scored: the house reads the post's counts
// from X itself. The copy is a plain byte-for-byte file copy, so the two
// grading runs write identical bytes.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const SOURCE = join(BOT_DIR, 'POST.json');
const DESTINATION = join(OUTPUT_DIR, 'POST.json');

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(SOURCE, DESTINATION);
} catch (err) {
  console.error(`POST.json could not be copied from ${SOURCE}: ${(err as Error).message}`);
  process.exit(1);
}
