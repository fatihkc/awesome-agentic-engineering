# Contributing

Thanks for helping keep this list high-signal. A curated list full of slop is worse than no list, so the
bar is deliberately strict.

## Scope
Agentic engineering means building and shipping software by directing AI coding agents across the
development lifecycle: coding agents and harnesses, loop and context engineering, spec-driven development,
evals, review and verification, and production case studies. Resources about ENGINEERING SOFTWARE WITH
AGENTS belong here.

## What belongs here
- Real, substantive resources across any type: books, courses, podcasts, blogs, essays, talks, tools,
  communities, and case studies.
- Each entry must have an identifiable author or source.
- Prefer primary, hands-on, or rigorously-argued material over SEO filler.

## What does not
- Out-of-scope material: building agent applications or products (agent frameworks, RAG chatbots) and
  general LLM/ML training or research. This list is about engineering software with agents, not building
  agents as products.
- Dead links, pure-marketing pages, low-effort SEO listicles, duplicates.
- Anything you have not actually read or used.

## How to add
- One resource per line: `- [Title](url) - one-line description.` For books, papers, podcasts, and essays, name the author or source in the description where it is the signal.
- Put it in the right section; keep the section's ordering consistent.
- Verify the link resolves.
- Keep pull requests SMALL and high-signal (a few entries), never bulk dumps.
- No em-dashes or en-dashes (use commas or parentheses); no emojis.

## Automated checks
Every pull request runs CI before human review:
- awesome-lint for list formatting, ToC consistency, and duplicate entries. The Start here section
  intentionally repeats a few links; those are allowlisted in `.github/allowed-duplicate-links.txt`. If a
  duplicate check fails on your PR, the resource is almost certainly already on the list.
- A link check (lychee) verifying that every URL resolves.
- A style check: no em-dashes or en-dashes, no emojis.

Passing CI does not guarantee a merge. The quality bar above is applied by the maintainer, and substance
(is this a real, adopted, worthwhile resource) is judged by a human, not a linter.

## Maintenance
The maintainer reviews and merges contributions and periodically checks existing entries for dead links and
staleness. Every pull request goes through the same quality bar.
