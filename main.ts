// One Word From Grandma — make.fun entry (program/v1, Node 22, stdlib only).
//
// The deliverable is exactly one word: the single word grandma would text
// about AI. The gate requires /output/entry.txt to be UTF-8 text of 1 to 30
// characters, not only whitespace. This program writes the word with no
// trailing newline, no punctuation, and nothing else.

import { mkdirSync, writeFileSync } from "node:fs";

// Grandma's word for AI: the chatterbox. She has a name for anyone who never
// stops talking, and the machine that answers every question with a whole
// paragraph is exactly that — a chatterbox. Warm, a little baffled, funny in
// one word, and tied straight to the chatbot that chatters back.
const WORD = "chatterbox";

// Self-check against the kit gate before writing: one word, 1-30 chars,
// not only whitespace, no spaces or punctuation smuggled in.
if (!/^[^\s]{1,30}$/.test(WORD)) {
  throw new Error(`entry word fails the gate: ${JSON.stringify(WORD)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
