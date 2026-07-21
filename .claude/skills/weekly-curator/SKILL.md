---
name: weekly-curator
description: Weekly maintenance for the awesome-agentic-engineering list. Drafts a pull request that adds newly-published, in-scope resources and flags dead or stale links. A human reviews and merges; never auto-merge.
---

# Weekly curator

Keep the awesome-agentic-engineering list fresh, high-signal, and LEAN. This list is bounded: each section
has a maximum in `.github/section-caps.txt`, and a full section only gains an entry by displacing a weaker
one. This skill DRAFTS a pull request; a human reviews and merges it. Never merge, never push to main. That
human gate is the anti-slop guardrail, and it is the whole point: adding slop damages the maintainer's
reputation, which is what the list exists to build.

## Scope
Agentic engineering means building and shipping software by directing AI coding agents across the SDLC:
coding agents and harnesses, loop and context engineering, spec-driven development, evals, review, and
production case studies. Keep resources that are about engineering software WITH agents. Out of scope:
building agent applications or products (agent frameworks, RAG chatbots) and general LLM or ML research.

## The cap (what "lean" means here)
Every section has an entry cap in `.github/section-caps.txt`. Read that file each run; never hardcode the
numbers. CI (`.github/check-caps.py`) fails any PR that pushes a section over its cap, so a bare add into a
full section is not an option. When a section is full, you displace, you do not append.

## Steps
1. Read `README.md`, `CONTRIBUTING.md`, and `.github/section-caps.txt` for the current scope, categories,
   format, quality bar, and caps.
2. Maintain existing entries:
   - Check every link in `README.md` still resolves (follow redirects, use a browser user agent since some
     hosts block bots). Flag anything that 404s, errors, or is permanently dead.
   - Flag entries that have gone stale or out of scope (abandoned or archived tools, superseded resources,
     moved pages), and note obvious successor URLs.
   - A dead, broken, or clearly-superseded entry that you remove simply frees a slot. Removal is not a swap.
3. Scan for new resources published or updated in roughly the last one to two weeks, plus anything notable
   that is missing. Look at GitHub Trending and new releases for coding agents and harnesses, Hacker News
   and Show HN, the AI Engineer and Latent Space ecosystem, and practitioner and lab engineering blogs. For
   each candidate capture the title, author or source, URL, a one-line neutral description, and the target
   section. Verify each URL resolves.
4. Apply the quality bar: real, substantive, in-scope resources from an identifiable author or source; no
   dead links; no duplicates; no marketing or SEO-spam pages; no em-dashes or en-dashes; no emojis; neutral
   one-line descriptions matching the format `- [Title](url) - description.`. When in doubt, leave it out.
5. Place each surviving candidate against its section's cap:
   - Section is UNDER cap: add it (a bare add), keeping ordering consistent.
   - Section is AT cap: draft a SWAP. Add the candidate and remove the weakest incumbent in that same
     section, chosen against the quality bar and the "what's real vs theater" spine (least adopted or cited,
     most superseded, most marketing-adjacent, least evergreen; Foundations entries are seminal and are not
     displaced). At most ONE swap per section per run. If several candidates beat incumbents in one section,
     take the single strongest and name the runner-up in the PR body without adding it.
   - Every swap needs a one-line head-to-head rationale: new beats old because X; old is superseded by or
     weaker than Y.
6. Create a branch `curate/YYYY-MM-DD`, apply the changes keeping formatting and ordering consistent,
   commit, push the branch, and open a pull request titled `curate: weekly review YYYY-MM-DD`. Structure the
   PR body in four parts:
   - Additions (to under-cap sections), each with a one-line rationale.
   - Swaps, each as `+ add / - cut` with the head-to-head rationale.
   - Dead or broken links found, with entry and status.
   - Stale or out-of-scope entries to review, with entry and reason.
7. Before opening the PR, run `python3 .github/check-caps.py README.md .github/section-caps.txt` and confirm
   it passes. Do NOT merge and do NOT push to main. If nothing clears the bar and there are no maintenance
   findings, open no pull request. If there are only maintenance findings, open a pull request with just
   those.

## Rules
- You draft, the human ships. Never merge, never push to main.
- The list is bounded. A full section is displaced, never appended to. One swap per section per run.
- Small and high-signal beats large and noisy.
- No em-dashes or en-dashes (use commas or parentheses); no emojis.
- When in doubt, leave it out.
