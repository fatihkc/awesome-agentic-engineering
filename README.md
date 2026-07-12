# Awesome Agentic Engineering

[![Awesome](https://awesome.re/badge.svg)](https://awesome.re)

> A curated map of the best resources for learning agentic engineering and the AI-native SDLC.

Agentic engineering is the discipline of building and shipping software by directing AI coding agents across
the development lifecycle: the engineer sets the goal, delegates to agents, and reviews and verifies what
they produce. This list collects the highest-signal resources for learning it, from coding agents and
harnesses to loop and context engineering, spec-driven development, evals, and real production case studies.
It is maintained by Fatih Koc (https://fatihkoc.net), with a bias toward resources that hold up in real
engineering practice rather than hype. Contributions are welcome; see [CONTRIBUTING.md](CONTRIBUTING.md).

## Contents
- [Start here](#start-here)
- [Foundations](#foundations)
- [Coding agents and tools](#coding-agents-and-tools)
- [Books](#books)
- [Courses](#courses)
- [Podcasts](#podcasts)
- [Blogs and newsletters](#blogs-and-newsletters)
- [Essays and writing](#essays-and-writing)
- [Videos and talks](#videos-and-talks)
- [Case studies and in practice](#case-studies-and-in-practice)
- [Communities](#communities)

## Start here
A short on-ramp: read the framing, learn to direct one agent well, then see it running in production.
- [Software Is Changing (Again)](https://www.youtube.com/watch?v=LCEmiRjPEtQ) - Karpathy's keynote on the Software 3.0 shift and choosing autonomy levels when delegating to AI.
- [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) - Anthropic's guide to the vocabulary: workflows vs agents, and the composable patterns.
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices) - How to actually direct a coding agent: workflows, context files, permissions, patterns.
- [12-Factor Agents](https://github.com/humanlayer/12-factor-agents) - Twelve principles for reliable, production-grade LLM software.
- [Designing agentic loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/) - Loop engineering: goals, tools, and safety constraints so an agent can iterate toward a solution.
- [No Vibes Allowed](https://www.youtube.com/watch?v=rmvDxxNubIg) - The Research, Plan, Implement workflow for getting agents to work in complex codebases.
- [Spec-Driven Development with Coding Agents](https://www.deeplearning.ai/courses/spec-driven-development-with-coding-agents) - A hands-on course on the plan, implement, verify workflow with agents.
- [Claude Code](https://claude.com/product/claude-code) - A capable coding agent to start practicing with today.

## Foundations
A small set of the seminal work underneath agentic coding. Background, not the whole research pile.
- [Software Is Changing (Again)](https://www.youtube.com/watch?v=LCEmiRjPEtQ) - Keynote framing the Software 3.0 shift and how to choose autonomy levels when delegating to AI. By Andrej Karpathy.
- [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents) - Distinguishes workflows from agents and catalogues composable patterns (prompt chaining, routing, orchestrator-workers). By Anthropic.
- [ReAct: Synergizing Reasoning and Acting in Language Models](https://arxiv.org/abs/2210.03629) - The interleaved reason-and-act loop where a model alternates thought traces with tool actions, the primitive under most coding agents. Yao et al. (2022).
- [SWE-bench: Can Language Models Resolve Real-World GitHub Issues?](https://arxiv.org/abs/2310.06770) - The benchmark of 2,294 real GitHub issues that anchors how coding-agent progress is measured. Jimenez et al. (2023).
- [SWE-agent: Agent-Computer Interfaces Enable Automated Software Engineering](https://arxiv.org/abs/2405.15793) - Shows a purpose-built agent-computer interface for navigating repos, editing, and running tests sharply improves performance. Yang et al. (2024).

## Coding agents and tools
- [Claude Code](https://claude.com/product/claude-code) - Anthropic's agentic coding tool that runs in the terminal, IDE, and CI, understands a codebase, and executes edits, tests, and git workflows.
- [OpenAI Codex CLI](https://github.com/openai/codex) - Open-source lightweight coding agent that runs locally in the terminal with sandboxed execution. By OpenAI.
- [Cursor](https://cursor.com/) - AI code editor and agent for building software across desktop, CLI, and mobile. By Anysphere.
- [Aider](https://github.com/Aider-AI/aider) - Open-source terminal pair-programming agent that edits code in a local git repository using an LLM of choice.
- [Cline](https://github.com/cline/cline) - Open-source autonomous coding agent available as an IDE extension, CLI, and SDK.
- [Sourcegraph Amp](https://ampcode.com/) - Agentic coding tool with terminal, IDE, and web interfaces plus sub-agents for code review and library research.
- [Factory (Droids)](https://factory.ai/) - Platform of role-specialized coding agents (Droids) that automate tasks across the software development lifecycle.
- [Devin](https://devin.ai/) - Autonomous AI software engineer for long-horizon tasks like migrations, bug fixes, and PRs. By Cognition.
- [Google Jules](https://jules.google/) - Autonomous coding agent that handles bug fixes, dependency updates, and testing asynchronously against a repository.
- [OpenHands](https://github.com/All-Hands-AI/OpenHands) - Open-source, self-hostable platform for running coding agents and automations.
- [Model Context Protocol](https://modelcontextprotocol.io/) - Open standard for connecting coding agents to external tools, data, and workflows. By Anthropic.
- [Terminal-Bench](https://www.tbench.ai/) - Benchmark and Harbor harness measuring agents on realistic command-line tasks, with adapters for Claude Code and Codex CLI. By Stanford and the Laude Institute.
- [CodeRabbit](https://www.coderabbit.ai/) - AI code review tool that reviews pull requests and works in the IDE and CLI.

## Books
- [AI-Assisted Programming](https://www.amazon.com/AI-Assisted-Programming-Planning-Testing-Deployment/dp/1098164563) - Using AI dev tools across the lifecycle: requirements, planning, design, coding, debugging, testing, deployment. By Tom Taulli (O'Reilly).
- [Beyond Vibe Coding](https://www.amazon.com/Beyond-Vibe-Coding-AI-Era-Developer/dp/B0F6S5425Y) - Moving from rapid AI prototyping to disciplined AI-assisted engineering: prompting, review, and shipping production software. By Addy Osmani (O'Reilly).
- [Vibe Coding: Building Production-Grade Software With GenAI, Chat, Agents, and Beyond](https://www.amazon.com/Vibe-Coding-Building-Production-Grade-Software/dp/1966280025) - Practices for building production software using generative AI and autonomous coding agents. By Gene Kim and Steve Yegge.
- [Vibe Engineering](https://www.manning.com/books/vibe-engineering) - An end-to-end process for AI-augmented development: agentic coding, validating AI-generated code, refactoring, and team collaboration. By Tomasz Lelek and Artur Skowronski (Manning).
- [AI-Assisted Coding: The Practical Guide](https://www.sap-press.com/ai-assisted-coding_6058/) - AI pair programming with tools like Copilot, Ollama, and Aider, covering prompts, generation, testing, and local models. By Kofler, Oggl, and Springer (Rheinwerk).
- [Agentic Coding with Claude Code](https://github.com/PacktPublishing/Agentic-Coding-with-Claude-Code) - Directing Claude Code as a development platform: context engineering, memory files, slash commands, hooks, MCP, and subagents. By Eden Marco (Packt).
- [Generative AI for Software Development](https://books.google.com/books/about/Generative_AI_for_Software_Development.html?id=QrZxEQAAQBAJ) - Evaluating AI tools and workflows across code generation, review, testing, and docs, with case studies. By Sergio Pereira (O'Reilly).

## Courses
- [Claude Code: A Highly Agentic Coding Assistant](https://www.deeplearning.ai/courses/claude-code-a-highly-agentic-coding-assistant) - Free short course on Claude Code best practices: codebase exploration, planning, testing, refactoring, and MCP. (DeepLearning.AI and Anthropic)
- [Spec-Driven Development with Coding Agents](https://www.deeplearning.ai/courses/spec-driven-development-with-coding-agents) - Writing project constitutions and feature specs to guide agents through a plan, implement, verify workflow. (DeepLearning.AI and JetBrains)
- [Claude Code in Action](https://anthropic.skilljar.com/claude-code-in-action) - Free course on integrating Claude Code into a workflow: tools, context, plan mode, custom commands, hooks, SDK, and MCP. (Anthropic Academy)
- [Claude Code: Software Engineering with Generative AI Agents](https://www.coursera.org/learn/claude-code) - Orchestrating Claude Code across git worktrees with CLAUDE.md context, reusable commands, subagents, and QA patterns. By Jules White (Vanderbilt, Coursera).
- [Learn Cursor](https://cursor.com/learn) - Cursor's official tutorials on AI foundations, coding with the agent, and reviewing and testing agent-generated code.
- [Anthropic Academy](https://anthropic.skilljar.com/) - Free self-paced catalog including Claude Code 101, Introduction to Subagents, and Introduction to MCP.

## Podcasts
- [The AI Native Dev](https://tessl.io/podcast/) - AI-native software development: coding agents, spec- and context-driven development, and running the SDLC with agents. Hosted by Guy Podjarny and Simon Maple.
- [Latent Space](https://www.latent.space/podcast) - Technical interviews for AI engineers with recurring deep dives on coding agents and harnesses (Claude Code, Cursor, Codex, Devin). Hosted by swyx and Alessio Fanelli.
- [The Pragmatic Engineer Podcast](https://newsletter.pragmaticengineer.com/podcast/archive) - Engineering interviews including Boris Cherny on building Claude Code and Kent Beck on TDD with agents. Hosted by Gergely Orosz.
- [The Agentic Review Podcast](https://www.qodo.ai/podcasts/) - Code quality, review, trust, and governance when shipping software with AI coding agents. By Qodo.
- [AI & I](https://podcasts.apple.com/us/podcast/ai-i/id1719789201) - Builders walking through their workflows, including shipping features with Claude Code and other agentic tools. Hosted by Dan Shipper (Every).
- [Agentic Coding Today](https://podcasts.apple.com/us/podcast/agentic-coding-today/id1878647688) - Short-form show tracking coding agents like Claude Code and Codex: workflows, patterns, and what works versus hype.

## Blogs and newsletters
- [Simon Willison's Weblog](https://simonwillison.net/) - Near-daily hands-on writing on coding agents (Claude Code, Codex), model releases, and agentic engineering patterns.
- [Armin Ronacher (lucumr)](https://lucumr.pocoo.org/) - Recurring essays on coding-agent loops, harnesses, and tooling for LLM-driven development. Creator of Flask.
- [Peter Steinberger](https://steipete.me/) - Field notes on agentic engineering workflows, Claude Code setups, and shipping code by directing agents.
- [The Pragmatic Engineer](https://newsletter.pragmaticengineer.com/) - Engineering newsletter with recurring coverage of AI coding tools, adoption data, and how teams ship with agents. By Gergely Orosz.
- [Factory Blog](https://factory.ai/news) - Company engineering blog on Droid coding agents, Terminal-Bench results, and the agent-native SDLC.
- [Cognition Blog](https://cognition.com/blog) - Engineering blog behind Devin on autonomous coding agents, code review, and enterprise migrations.
- [Anthropic Engineering Blog](https://www.anthropic.com/engineering) - Posts on Claude Code, harness design for long-running development, parallel agents, and coding-agent evals.
- [Exploring Generative AI](https://martinfowler.com/articles/exploring-gen-ai.html) - Ongoing Thoughtworks memo series on harness engineering, context engineering, and spec-driven development. By Birgitta Boeckeler and colleagues.
- [Geoffrey Huntley](https://ghuntley.com/) - Writing on building and running coding agents, loop-based methods (the ralph loop), and software-factory workflows.

## Essays and writing
- [Claude Code Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices) - Workflows, CLAUDE.md files, permissions, and agentic patterns for getting good results from a coding agent. By Anthropic.
- [12-Factor Agents](https://github.com/humanlayer/12-factor-agents) - Twelve principles (own your prompts, context, and control flow) for engineering production-grade LLM software. By Dex Horthy.
- [Designing agentic loops](https://simonwillison.net/2025/Sep/30/designing-agentic-loops/) - Defining goals, tools, and safety constraints so a coding agent can iterate toward a solution. By Simon Willison.
- [Agentic Coding Recommendations](https://lucumr.pocoo.org/2025/6/12/agentic-coding/) - Field-tested advice on language choice, tool speed, logging, and codebase structure that make coding agents effective. By Armin Ronacher.
- [Revenge of the Junior Developer](https://sourcegraph.com/blog/revenge-of-the-junior-developer) - Six overlapping waves from completions to autonomous agents, agent clusters, and agent fleets. By Steve Yegge.
- [Factory 2.0: From Coding Agents to Software Factories](https://factory.ai/news/software-factory) - The software-factory vision of an interconnected, agent-native system spanning bug report to deploy. By Matan Grinberg and Eno Reyes.
- [My LLM Codegen Workflow](https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/) - A spec, then plan, then execute workflow for building software with LLMs on greenfield and existing code. By Harper Reed.
- [Ralph Wiggum as a Software Engineer](https://ghuntley.com/ralph/) - The Ralph technique: running a coding agent in a bash loop that repeatedly feeds one prompt, with progress persisted to files and git. By Geoffrey Huntley.
- [Advanced Context Engineering for Coding Agents](https://github.com/humanlayer/advanced-context-engineering-for-coding-agents/blob/main/ace-fca.md) - Intentional compaction and a research, plan, implement workflow for coding agents in large legacy codebases. By Dex Horthy.
- [Not All AI-Assisted Programming Is Vibe Coding](https://simonwillison.net/2025/Mar/19/vibe-coding/) - Distinguishes unreviewed vibe coding from professional AI-assisted engineering where you review, test, and can explain the code. By Simon Willison.

## Videos and talks
- [Claude Code and the Evolution of Agentic Coding](https://www.youtube.com/watch?v=Lue8K2jqfKk) - How coding agents differ from autocomplete and how agentic coding workflows are evolving. By Boris Cherny (Anthropic).
- [No Vibes Allowed: Solving Hard Problems in Complex Codebases](https://www.youtube.com/watch?v=rmvDxxNubIg) - The Research, Plan, Implement workflow and intentional context compaction for coding agents in large codebases. By Dex Horthy.
- [Engineering Practices That Make Coding Agents Work](https://www.youtube.com/watch?v=owmJyKVu5f8) - Concrete practices, testing, and verification patterns for reliable results from Claude Code and Codex. By Simon Willison.
- [The New Code: Specifications as the Fundamental Unit of AI-Era Programming](https://www.youtube.com/watch?v=8rABwKRsec4) - Argues written specs, not code, become the primary artifact when directing AI. By Sean Grove (OpenAI).
- [Agentic Coding: The Future of Software Development with Agents](https://www.youtube.com/watch?v=bpWPEhO7RqE) - Hands-on experience running Claude Code: tooling, permissions, and language choices for agentic coding. By Armin Ronacher.
- [AI Engineer World's Fair 2025: SWE Agents Track](https://www.youtube.com/watch?v=U-fMsbY-kHY) - Keynotes and the software-engineering agents track: coding agents, loops, and the autonomous SDLC. By AI Engineer.
- [IndyDevDan](https://www.youtube.com/@indydevdan) - Tutorials and patterns for systematically using coding agents (Claude Code, Cursor, Aider) in real engineering work.

## Case studies and in practice
- [How Claude Code Is Used in Practice](https://www.anthropic.com/research/claude-code-expertise) - Analysis of roughly 400,000 real sessions: success rates, the human and agent split between planning and execution, and how outcomes vary by expertise. By Anthropic.
- [How Anthropic Teams Use Claude Code](https://www-cdn.anthropic.com/58284b19e702b49db9302d5b6f135ad8871e7658.pdf) - Team-by-team accounts (data infrastructure, security, product engineering, growth) of how Anthropic staff use Claude Code daily. By Anthropic. (PDF)
- [AI-Driven Refactoring in Large-Scale Migrations](https://medium.com/qonto-way/ai-driven-refactoring-in-large-scale-migrations-strategies-and-techniques-fcdb9b5116c6) - Building an Aider-based agent to migrate roughly one million lines of Ember.js to React, with throughput rising from about 50 to sometimes over 1,000 lines per engineer per day. By Stefano Amorelli (Qonto).
- [WhatsCode: Large-Scale GenAI Deployment at WhatsApp](https://arxiv.org/abs/2512.05314) - 25 months of agentic coding at WhatsApp: over 3,000 accepted code changes and privacy-verification coverage rising from 15 to 53 percent. Mao et al. (Meta).
- [Shipping at Inference Speed](https://steipete.me/posts/2025/shipping-at-inference-speed) - A workflow shipping code the author largely does not read: model choice, context limits, and running three to eight parallel projects. By Peter Steinberger.
- [A Grounded Take on Agentic Coding for Production](https://iximiuz.com/en/posts/grounded-take-on-agentic-coding/) - Generating over 50,000 lines of mostly AI-written code in a month: task decomposition, domain knowledge, and verification through integration tests. By Ivan Velichko.
- [Agentic Coding: Things That Didn't Work](https://lucumr.pocoo.org/2025/7/30/things-that-didnt-work/) - An honest post-mortem of abandoned techniques (slash commands, hooks, subagent parallelization) and why. By Armin Ronacher.
- [devopsstart](https://devopsstart.com) - A DevOps learning site written and operated by an autonomous agentic content pipeline, run by this list's maintainer. By Fatih Koc.

## Communities
- [Cursor Community Forum](https://forum.cursor.com/) - Official forum for the Cursor coding agent: agent workflows, model comparisons, and rules configuration.
- [Latent Space Discord](https://www.latent.space/p/community) - AI engineering community with channels for agents, evals, and coding tools, plus a weekly paper club.
- [Claude Code Builders](https://claude-world.com/community/) - Community for Claude Code users with a Discord, weekly cowork sessions, and monthly tech talks.
- [Aider Discord](https://aider.chat/) - Community for the Aider CLI pair-programming agent where users share configurations, model choices, and workflows.
- [r/ClaudeAI](https://www.reddit.com/r/ClaudeAI/) - Subreddit on Claude and Claude Code: agentic coding workflows, configurations, and results.
- [r/ChatGPTCoding](https://www.reddit.com/r/ChatGPTCoding/) - Tool-agnostic subreddit for AI-assisted and agentic coding (Claude Code, Cursor, Aider, and more).

## Contributing
See [CONTRIBUTING.md](CONTRIBUTING.md). Open a pull request with resources that clear the bar, and the
maintainer will review and merge them.

## License
[CC0 1.0](LICENSE). To the extent possible under law, the maintainer has waived all copyright to this list.
