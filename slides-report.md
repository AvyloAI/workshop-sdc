# Workshop-SDC Slides Full Report

This document contains a comprehensive summary of the slides actually implemented and used in the workshop-sdc presentation app, in the order they appear in the App.tsx slides array.

## Slide 1: TitleSlide (01-TitleSlide.tsx)
**Title:** "Is Software Architecture Dead in the Age of AI?"  
**Subtitle:** AI builds faster. Architecture decides what survives.  
**Meta:** 90 min Workshop for Engineers & Tech Leads

## Slide 2: AgendaSlide (02-AgendaSlide.tsx)
**Title:** Today's Journey  
**Meta:** 90 min · hands-on  
**Tracks:**
- 01 Reality (How we got here)
- 02 Problem (What broke)
- 03 Shift (A new way of thinking)
- 04 Future (Where it goes)

## Slide 3: SpeedParadoxSlide (03-SpeedParadoxSlide.tsx)
**Title:** The Speed Paradox  
**Content:** We build faster than ever. We break faster than ever.  
**Stats (2 only):**
- 10× Faster to scaffold a full-stack app with AI
- 68% Of incidents trace back to sprint-one architecture decisions

## Slide 4: VibeCodingSlide (04-VibeCodingSlide.tsx)
**Title:** Defining the era  
**Content:** vibe · cod · ing — Describe. Generate. Ship.  
**Punchline:** No architecture. No thinking.

## Slide 5: WhatBreaksSlide (05-WhatBreaksSlide.tsx)
**Title:** What Actually Broke  
**Subtitle:** The diagnosis  
**Points (titles only — no sub-text):**
- 01 No one designed the system
- 02 Documentation is already outdated
- 03 Scale was never planned
- 04 Decisions were never made

## Slide 6: CoreTruthSlide (06-CoreTruthSlide.tsx)
**Title:** Core Truth  
**Content:** Architecture is not diagrams. It's decisions. The diagram is just proof you made them.

## Slide 7: FivePillarsSlide (07-FivePillarsSlide.tsx)
**Title:** 5 Things That Never Change  
**Subtitle:** AI changes speed. These decide survival.  
**Pillars:**
- Scalability (Scales without a rewrite)
- Reliability (Fails safely. Recovers fast.)
- Maintainability (Easy to understand. Easy to change.)
- Security (Secure by design, not by patch)
- Observability (You know what's wrong before users do)

## Slide 8: ArchPatternsSlide (08-ArchPatternsSlide.tsx)
**Title:** Architecture Patterns  
**Content:** The evolution that led us here  
**Patterns:**
- Monolith (2000s) — One codebase. Simple to start. Hard to scale.
- Microservices (2015+) — Independent services. Scalable. Operationally complex.
- AI Era (Now) — AI writes code. No one designs the system. Complexity explodes.

## Slide 9: AIBlindSpotSlide (09-AIBlindSpotSlide.tsx)
**Title:** The AI Blind Spot  
**Content:** AI sees code. Not systems. It optimizes the function in front of it. Ask it to design for 10,000 concurrent users and it won't warn you what breaks.  
**3 bullets:**
- No scale awareness
- No failure thinking
- No long-term reasoning

## Slide 10: StillManualSlide (10-StillManualSlide.tsx)
**Title:** We modernized coding. Not thinking.  
**Old way:** Whiteboards & Diagrams (Draw.io / Lucidchart · Static RFC docs · Architecture committee · Snapshot in time) — Slow. Disconnected. Forgotten.  
**What's needed:** Integrated, AI-assisted thinking (Conversational design · Living diagrams · Trade-off analysis · Always up to date) — Fast. Continuous. Human-directed.

## Slide 11: DemoSlide (11-DemoSlide.tsx)
**Label:** 11 — Live Demo  
**Title:** Architecture generation  
**Content:** Self-contained auto-animated SaaS product demo: form fills with typewriter effect, selects project type/tags/DB/scale, generates architecture with progress bar and steps, builds React Flow diagram node-by-node with fitView, goes live with replay button

## Slide 12: AvyloSlide (12-AvyloSlide.tsx)
**Title:** Avylo AI  
**Content:** From idea to architecture — instantly, intelligently, continuously. Not a diagram tool. Not a code generator. A system-thinking partner. AvyloAi.com

## Slide 13: IdeaToInfraSlide (12-IdeaToInfraSlide.tsx)
**Title:** From Idea to Infrastructure  
**Subtitle:** Before you write a single line  
**Steps:**
- 01 Idea — What problem? Who needs it? What must never fail?
- 02 Constraints — Scale? Budget? Team? Compliance? Latency?
- 03 Architecture — Choose patterns. Document trade-offs. Write ADRs.
- 04 Code — Now write — or prompt AI to write.  
**Punch line:** AI owns code. Humans own decisions.

## Slide 14: ADRSlide (13-ADRSlide.tsx)
**Title:** Architecture Decision Records  
**Content:** Decisions are forgotten. Systems are not. Six months from now, nobody will remember why you chose PostgreSQL over MongoDB. Write it down.  
**Example:** ADR-0007 Use PostgreSQL as primary datastore (Context: ACID transactions for billing · Decision: PostgreSQL with read replicas · Consequences: Strong consistency. No horizontal write scale.)

## Slide 15: ClosingSlide (13-ClosingSlide.tsx)
**Label:** Closing  
**Content:**  
Can you build it?  
That's no longer the question.  
Should it be built this way?

## Slide 16: PromptingSlide (14-PromptingSlide.tsx)
**Title:** Prompting for Architecture  
**Subtitle:** Better context → better architecture  
**Single example:**
- Bad: "Build me a SaaS backend" → Good: "I need an API for 10k users/day. Auth via JWT, Postgres DB, scale-out later. What architecture fits?"
**Formula:** Constraints + Context + Consequences = better AI output

## Slide 17: FutureSlide (15-FutureSlide.tsx)
**Title:** The Future of Software Architecture  
**Content:** Architecture becomes continuous. Not a phase. A constant.  
**Features:**
- Living Systems (Diagrams that update as code changes)
- Real-time Decisions (Trade-offs surfaced as you build)
- AI Co-architect (Your thinking partner, not your replacement)

## Slide 18: CareerEvolutionSlide (16-CareerEvolutionSlide.tsx)
**Title:** Career Evolution  
**Subtitle:** How the role is transforming  
**Eras:**
- 2000–2015: Oracle — One senior person decided everything. A bottleneck dressed as authority.
- 2015–2022: Facilitator — Distributed teams. ADRs. Fitness functions. Collaborative — still slow.
- 2022–Now: Prompter — AI writes the code. Architecture is improvised. Systems break quietly. *(you are here)*
- Next: **Systems Thinker + AI Collaborator** — AI handles execution. Humans own constraints, context, and direction. *(coming next)*

## Slide 19: SeniorSkillsSlide (17-SeniorSkillsSlide.tsx)
**Title:** Senior vs Junior in the AI Era  
**Content:** AI made juniors faster. It didn't give them judgment.  
**Traits (3 only):**
- System thinking (Sees the whole — not just the feature in front of them)
- Trade-off ownership (Knows what to sacrifice and can defend why)
- Decision ownership (Writes the reasoning. Future engineers read it.)

## Slide 20: WorkshopExerciseSlide (19-WorkshopExerciseSlide.tsx)
**Title:** Take-Home Exercise  
**Content:** Design a system. Make decisions. Any system. One hour. Write one ADR.  
**Exercise:** Design a URL shortener at 1M requests/day  
**Steps:**
- 01 Define — What are the 3 non-negotiable requirements?
- 02 Constrain — Scale? Read/write ratio? SLO? Team size?
- 03 Decide — Monolith or services? Which DB? CDN?
- 04 Write an ADR — Document your biggest trade-off.  
**Call to Action:** Share your ADR with the community → AvyloAi.com/community