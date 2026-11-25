// The Funniest Office Joke, Judged Head to Head
// make.fun competition: u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c
//
// The entry is one original one-line office joke, written from scratch:
// a setup anyone who has worked in an office recognises (the reply-all
// accident), one turn the reader does not see coming (HR turned the
// mistake into the speaker's job title), and the punchline last.
//
// This program is fully deterministic: it always writes the exact same
// bytes to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I accidentally hit reply-all once. HR still introduces me as 'a cautionary tale'.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
