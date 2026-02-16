---
title: 'The Hard Part Was Never the Code'
description: 'Agents can write the code. The judgment around it is what actually matters.'
pubDate: 2026-02-15
---

Two things have always mattered in building software: getting from zero to one, and then taking that one to a hundred over time.

**Zero to one is being compressed.** Programming has become more declarative. You describe what you want, and an agent figures out how to build it. A weekend project that once took a month of evenings now takes a Saturday afternoon. Sprint planning, estimation, quarterly roadmaps: these rituals were designed around the assumption that building is slow. When building gets fast, the ceremonies built around its slowness start to lose their purpose.

**But one to one hundred hasn't gotten any easier.** Once a product ships, it faces the same forces it always has: user feedback that contradicts your assumptions, edge cases that multiply, performance under real load, and the slow accumulation of decisions that compound into architecture. None of that is automated away.

Here's the trap: if you let an agent build something you don't understand, you've taken on a codebase with zero institutional knowledge. You can't debug what you can't reason about. You can't refactor what you didn't design. And the next agent will have no memory of the tradeoffs its predecessors made. The speed you gained on day one becomes debt on day thirty.

This is where teams with sound engineering practices will still win. Because writing code quickly isn't the only bottleneck.

**Agents remove one bottleneck. And in doing so, they expose a harder one.** The harder bottleneck is judgment.

Reading code is not the same as writing it. The author questions every choice as they make it. The reader inherits their assumptions. When an agent writes the code and a human only reviews it, there's an automatic bias toward accepting what's already there. You're no longer an author. You're an auditor of decisions you didn't make.

This is why we need to talk to agents the way we talk to colleagues. Not just "build this," but the same hard questions we'd ask in a design review or a pull request:

- What other approaches did you consider? Why is this the right one?
- What technical debt are we taking on to ship this faster?
- What incorrect assumptions about our customers could break this?
- Which of these decisions are one-way doors?
- If we had no deadline, how would this be built differently? What are we giving up?
- If something goes wrong in production, how will we know? How do we roll back?
- What should the next person who touches this codebase understand before they start?

None of these questions are new. They map to practices engineers have valued for decades: design docs, code review, runbooks, post-mortems. But they can't stay informal when you're spinning up dozens of agents a day. They need to become mechanisms. As Bezos put it: **good intentions don't work, mechanisms do.**

- **Tests.** The spec that survives after the agent's context window is gone. And there's no excuse not to be thorough. Agents can write every scenario you can think of. Nobody enjoys reading a thousand lines of test code, but that's a problem worth solving. We need better patterns for organizing and managing test suites, not fewer tests.
- **Documentation.** Every change should carry its reasoning with it. [Architecture Decision Records](https://adr.github.io/), which most teams treat as optional, become essential when the next contributor is an agent with no memory of why things were built this way.
- **Agent instructions.** Files like `claude.md` that every agent reads before it starts, encoding those questions as standing expectations: what to consider before making a decision, what to document after, what to never do without asking.
- **Review agents.** A second agent that evaluates the first agent's work before a human ever sees it, holding it to the same standard.

The idea is *layers of checks and balances*. By the time a human reviews agent written code, the agents should have already done the due diligence.

The engineers who thrive won't be the ones who can spin up twenty agents and ship a prototype in hours. It'll be those who can take a product from zero to one to a hundred, without losing the velocity that agents now make possible.
