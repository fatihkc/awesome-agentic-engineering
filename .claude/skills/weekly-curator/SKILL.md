---
name: weekly-curator
description: Weekly maintenance for the awesome-agentic-engineering list. Drafts a pull request that adds newly-published, in-scope resources and flags dead or stale links. A human reviews and merges; never auto-merge.
---

# Weekly curator

Keep the awesome-agentic-engineering list fresh and high-signal. This skill DRAFTS a pull request; a human
reviews and merges it. Never merge, never push to main. That human gate is the anti-slop guardrail, and it
is the whole point: adding slop damages the maintainer's reputation, which is what the list exists to build.

## Scope
Agentic engineering means building and shipping software by directing AI coding agents across the SDLC:
coding agents and harnesses, loop and context engineering, spec-driven development, evals, review, and
production case studies. Keep resources that are about engineering software WITH agents. Out of scope:
building agent applications or products (agent frameworks, RAG chatbots) and general LLM or ML research.

## Steps
1. Read `README.md` and `CONTRIBUTING.md` for the current scope, categories, format, and quality bar.
2. Maintain existing entries:
   - Check every link in `README.md` still resolves (follow redirects, use a browser user agent since some
     hosts block bots). Flag anything that 404s, errors, or is permanently dead.
   - Flag entries that have gone stale or out of scope (abandoned or archived tools, superseded resources,
     moved pages), and note obvious successor URLs.
3. Scan for new resources published or updated in roughly the last one to two weeks, plus anything notable
   that is missing. Look at GitHub Trending and new releases for coding agents and harnesses, Hacker News
   and Show HN, the AI Engineer and Latent Space ecosystem, and practitioner and lab engineering blogs. For
   each candidate capture the title, author or source, URL, a one-line neutral description, and the target
   category. Verify each URL resolves.
4. Apply the quality bar: real, substantive, in-scope resources from an identifiable author or source; no
   dead links; no duplicates; no marketing or SEO-spam pages; no em-dashes or en-dashes; no emojis; neutral
   one-line descriptions matching the format `- [Title](url) - description.`. When in doubt, leave it out.
   Aim for a small, high-signal batch (about three to eight additions), never volume.
5. Create a branch `curate/YYYY-MM-DD`, apply additions to the correct sections keeping formatting and
   ordering consistent, commit, push the branch, and open a pull request titled
   `curate: weekly review YYYY-MM-DD`. Structure the PR body in three parts:
   - Additions, each with a one-line rationale.
   - Dead or broken links found, with entry and status.
   - Stale or out-of-scope entries to review, with entry and reason.
6. Do NOT merge and do NOT push to main. If nothing clears the bar and there are no maintenance findings,
   open no pull request. If there are only maintenance findings, open a pull request with just those.

## Rules
- You draft, the human ships. Never merge, never push to main.
- Small and high-signal beats large and noisy.
- No em-dashes or en-dashes (use commas or parentheses); no emojis.
- When in doubt, leave it out.
