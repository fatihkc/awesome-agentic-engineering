# Changelog

What changed in the list. Each weekly curation run records its additions, swaps, removals, and link fixes
under Unreleased, and a workflow cuts a release from that block on the first of each month. This changelog
starts on 2026-07-26; earlier history is in the git log.

## Unreleased

### Swapped
- [Pi](https://pi.dev) replaces DeepSeek Harness (`https://github.com/deepseek-ai/deepseek-harness`) - Pi is a mature, actively-maintained, provider-agnostic harness with real production adoption (it powers OpenClaw) from identifiable authors, while DeepSeek Harness remains in developer preview with breaking changes still expected, as flagged for a re-check in the 2026.08 release. (Coding agents and tools)
- [Case Study: Refactoring at Scale with Agents](https://codescene.com/blog/case-study-refactoring-at-scale-with-agents) replaces AI-Driven Refactoring in Large-Scale Migrations (`https://medium.com/qonto-way/ai-driven-refactoring-in-large-scale-migrations-strategies-and-techniques-fcdb9b5116c6`) - A quantified, tool-backed refactor (a deterministic CodeHealth quality signal, frame-exact replay verification, and a direct Claude Opus vs Codex comparison) on a larger codebase outweighs a migration anecdote tied to an earlier model generation (Claude 3.5 Sonnet). (Case studies and in practice)
- [How the Claude Code Team Does Code Review](https://claude.dev/blog/solving-code-review-at-anthropic/) replaces My LLM Codegen Workflow (`https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/`) - A fresh, metrics-backed account of how the team building Claude Code layers automated review to double merge throughput and cut reverts over 40 percent covers the review and verification facet this section lacked, while the spec, plan, execute workflow it displaces is already covered more rigorously by Advanced Context Engineering for Coding Agents. (Essays and writing)
- [Redesigning Source Control at Anthropic](https://www.anthropic.com/research/redesigning-source-control) replaces What's the Best Coding Agent? 2026 Edition (`https://www.dolthub.com/blog/2026-08-05-best-coding-agent-2026/`) - A quantified infrastructure overhaul under real agent-driven load (daily monorepo merges rising from 2,500 to over 30,000 in four months, a 200x efficiency gain, Claude writing much of the replacement VCS) is a deeper, more evergreen production case study than a head-to-head tool ranking that its own title dates to a single year. (Case studies and in practice)

### Fixed
- [Claude Code Best Practices](https://code.claude.com/docs/en/best-practices) - Updated to the canonical URL after the page moved from anthropic.com/engineering to code.claude.com/docs. (Start here)
- [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) - Updated to the canonical URL after the page moved from anthropic.com/engineering to anthropic.com/research. (Foundations)
- [How Anthropic Runs Large-Scale Code Migrations with Claude Code](https://claude.com/resources/articles/ai-code-migration) - Updated to the canonical URL after the page moved from claude.com/blog to claude.com/resources/articles. (Case studies and in practice)

## 2026.08 (2026-08-31)

### Swapped
- [Razorpay Engineers Built Slash. Slash Builds the Rest.](https://razorpay.com/blog/razorpay-engineers-built-slash-slash-builds-the-rest/) replaces A Grounded Take on Agentic Coding for Production (`https://iximiuz.com/en/posts/grounded-take-on-agentic-coding/`) - A production engineering org running thousands of agent-merged pull requests a month with quantified review metrics outweighs a single practitioner's personal-scale account. (Case studies and in practice)
- [What's the Best Coding Agent? 2026 Edition](https://www.dolthub.com/blog/2026-08-05-best-coding-agent-2026/) replaces Old and New Apps, via Modern Coding Agents (`https://terrytao.wordpress.com/2026/07/11/old-and-new-apps-via-modern-coding-agents/`) - A quantified three-month, 1,500-PR practitioner comparison across three coding agents on a real production codebase outweighs a single one-off porting anecdote. (Case studies and in practice)
- [Harness Engineering: Leveraging Codex in an Agent-First World](https://openai.com/index/harness-engineering/) replaces Agentic Coding: Things That Didn't Work (`https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/`) - A quantified institutional production build (a three-person team shipping roughly one million lines and 1,500 PRs with Codex over five months) outweighs a single practitioner's post-mortem essay, whose author is already represented in Essays and writing. (Case studies and in practice)
- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) replaces Devin (`https://devin.ai/`) - An open-source, plugin-architecture agent harness published by a frontier lab, inspectable and self-hostable, outweighs a closed commercial product in a section that already covers autonomous long-horizon work. Listed while in developer preview, so it is a re-check candidate next cycle. (Coding agents and tools)

### Fixed
- [Agentic Coding: The Future of Software Development with Agents](https://www.youtube.com/watch?v=nfOVgz_omlU) - Corrected the video URL; the previous ID pointed to a different talk by the same speaker ("Agentic Coding: Armin Ronacher", on another channel). (Videos and talks)

## 2026.07 (2026-07-31)

### Swapped
- [How Anthropic Runs Large-Scale Code Migrations with Claude Code](https://claude.com/blog/ai-code-migration) replaces devopsstart (`https://devopsstart.com`) - A production migration methodology (rulebook, dependency map, verification loop) outweighs the maintainer's own site in a section at cap. (Case studies and in practice)

### Fixed
- [OpenHands](https://github.com/OpenHands/OpenHands) - Repository URL updated after the All-Hands-AI organization was renamed. (Coding agents and tools)
