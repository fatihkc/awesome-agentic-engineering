import { test } from "node:test";
import assert from "node:assert/strict";
import { parseReadme, countEntries } from "./parse.mjs";

const SAMPLE = `# Awesome Agentic Engineering [![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated map of the best resources.

Agentic engineering is the discipline of building software with agents.

## Contents
- [Start here](#start-here)
- [Foundations](#foundations)

## Start here
A short on-ramp. Read Foundations first.
- [Claude Code Best Practices](https://example.com/best) - How to direct an agent.

## Foundations
- [Building Effective Agents](https://example.com/bea) - Vocabulary and patterns. By Anthropic.
- [ReAct](https://arxiv.org/abs/2210.03629) - The reason-and-act loop.

## Contributing
See CONTRIBUTING.md.

## How this list is maintained
A curation agent drafts PRs; the maintainer merges.
`;

test("parses title without the Awesome badge", () => {
  const m = parseReadme(SAMPLE);
  assert.equal(m.title, "Awesome Agentic Engineering");
});

test("parses tagline and intro", () => {
  const m = parseReadme(SAMPLE);
  assert.equal(m.tagline, "A curated map of the best resources.");
  assert.match(m.intro, /building software with agents/);
});

test("collects only content sections with http entries, skips Contents", () => {
  const m = parseReadme(SAMPLE);
  const headings = m.sections.map((s) => s.heading);
  assert.deepEqual(headings, ["Start here", "Foundations"]);
});

test("captures section intro prose and entries", () => {
  const m = parseReadme(SAMPLE);
  const start = m.sections[0];
  assert.match(start.intro, /on-ramp/);
  assert.equal(start.id, "start-here");
  assert.equal(start.entries.length, 1);
  assert.equal(start.entries[0].title, "Claude Code Best Practices");
  assert.equal(start.entries[0].url, "https://example.com/best");
  assert.equal(start.entries[0].desc, "How to direct an agent.");
});

test("routes Contributing and How-maintained into footer", () => {
  const m = parseReadme(SAMPLE);
  const headings = m.footer.map((f) => f.heading);
  assert.deepEqual(headings, ["Contributing", "How this list is maintained"]);
});

test("countEntries totals entries across content sections", () => {
  assert.equal(countEntries(parseReadme(SAMPLE)), 3);
});
