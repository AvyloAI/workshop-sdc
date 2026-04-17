# Workshop-SDC Slides Full Report

This document contains a comprehensive summary of the slides actually implemented and used in the workshop-sdc presentation app, in the order they appear in the App.tsx slides array.

## Slide 1: TitleSlide (01-TitleSlide.tsx)
**Title:** "Architecting the Future"  
**Subtitle:** Does software architecture still matter when AI writes the code?  
**Meta:** 90 min Workshop for Engineers & Tech Leads

## Slide 2: AgendaSlide (02-AgendaSlide.tsx)
**Title:** Today's roadmap - What we'll cover  
**Meta:** 90 min · no slides after this  
**Tracks:**
- 01 The Speed Paradox (Context)
- 02 Vibe Coding & AI (Problem)
- 03 What Still Breaks (Reality)
- 04 Architecture Patterns (Theory)
- 05 Live Demo (Hands-on)
- 06 The Future Engineer (Career)
- 07 Avylo AI (Product)

## Slide 3: SpeedParadoxSlide (03-SpeedParadoxSlide.tsx)
**Title:** The Speed Paradox  
**Content:** We ship faster than ever. Systems break more than ever.

## Slide 4: VibeCodingSlide (04-VibeCodingSlide.tsx)
**Title:** Defining the era  
**Content:** vibe · cod · ing - Describe. Generate. Ship. No architecture session required.

## Slide 5: WhatBreaksSlide (05-WhatBreaksSlide.tsx)
**Title:** What Actually Broke  
**Subtitle:** hidden tax of vibe coding  
**Points:**
- Diagrams are already fiction (System evolved 5× faster than documentation)
- Scale was never considered ("Works on my machine" shipped to production)
- Junior engineers inherited the blast radius (AI compressed the experience gap — without the intuition)

## Slide 6: CoreTruthSlide (06-CoreTruthSlide.tsx)
**Title:** Core Truth  
**Content:** Architecture is not a diagram. It's a series of decisions. The diagram is just proof you made them.

## Slide 7: FivePillarsSlide (07-FivePillarsSlide.tsx)
**Title:** 5 Things That Never Change  
**Subtitle:** The pillars of good systems - AI changes the velocity. Not the fundamentals.  
**Pillars:**
- Scalability (Handles 10× load without rewrite)
- Reliability (Fails gracefully. Recovers fast.)
- Maintainability (Next engineer reads it in 10 min)
- Security (Defense-in-depth from day one)
- Observability (You know what's wrong before users do)

## Slide 8: ArchPatternsSlide (08-ArchPatternsSlide.tsx)
**Title:** Architecture Patterns  
**Content:** How systems evolved over the last 25 years

## Slide 9: AIBlindSpotSlide (09-AIBlindSpotSlide.tsx)
**Title:** The AI Blind Spot  
**Content:** AI sees code. Not systems. It optimizes the function in front of it. It cannot reason about what happens at 10,000 concurrent users.  
**Section:** What AI misses (various system aspects)

## Slide 10: StillManualSlide (10-StillManualSlide.tsx)
**Title:** Are Engineers Still Doing It Manually?  
**Content:** Mostly yes. And that's the problem.  
**Comparison:** Old way: Whiteboard + Lucidchart (Slow. Disconnected. Manual) vs What's needed (integrated, AI-assisted architecture tools)

## Slide 11: DemoSlide (11-DemoSlide.tsx)
**Label:** 11 — Live Demo  
**Title:** Architecture generation  
**Content:** Self-contained auto-animated SaaS product demo: form fills with typewriter effect, selects project type/tags/DB/scale, generates architecture with progress bar and steps, builds React Flow diagram node-by-node with fitView, goes live with replay button

## Slide 12: AvyloSlide (12-AvyloSlide.tsx)
**Title:** Coming Next  
**Content:** From idea to architecture — instantly, intelligently, continuously. Not a diagram tool. Not a code generator. A system-thinking partner. avylo.ai

## Slide 13: IdeaToInfraSlide (12-IdeaToInfraSlide.tsx)
**Title:** From Idea to Infrastructure  
**Subtitle:** The framework that scales with any project  
**Steps:** Idea → Constraints → Architecture → Code → Deploy → Monitor

## Slide 14: ADRSlide (13-ADRSlide.tsx)
**Title:** Architecture Decision Records  
**Content:** Every decision deserves a record. 3 months from now, nobody will remember why you chose PostgreSQL over MongoDB. Write it down.  
**Example:** ADR-0007 Use PostgreSQL as primary datastore

## Slide 15: ClosingSlide (13-ClosingSlide.tsx)
**Label:** Closing  
**Content:** The question is no longer: "Can you build it?" "Should it be built this way?" That's a human question. It always will be.

## Slide 16: PromptingSlide (14-PromptingSlide.tsx)
**Title:** Prompting for Architecture  
**Subtitle:** Context-rich prompts unlock architectural thinking  
**Examples:**
- Bad: "Build me a SaaS backend" → Good: "I need an API for 10k users/day. Auth via JWT, Postgres DB, scale-out later. What architecture fits?"
- Bad: "Create a notification system" → Good: "Real-time notifications, 5M users, 99.9% uptime required. Event-driven or polling? Trade-offs?"
- Bad: "Add caching" → Good: "Cache layer between API and DB. Read-heavy workload. Redis vs in-memory? Invalidation strategy?"
**Formula:** Constraints → Context → Consequences = better AI output

## Slide 17: FutureSlide (15-FutureSlide.tsx)
**Title:** The Future of Software Architecture  
**Content:** Architecture becomes continuous. Not a phase before coding. A practice alongside it.  
**Features:**
- Living Diagrams (Auto-updated as code changes)
- Continuous ADRs (Decisions captured in real-time)
- AI Co-architect (Trade-offs surfaced instantly)

## Slide 18: CareerEvolutionSlide (16-CareerEvolutionSlide.tsx)
**Title:** Career Evolution  
**Subtitle:** How the architect's role is shifting  
**Eras:**
- 2000–2015: The Architect as Oracle (One senior person decided everything)
- 2015–2022: The Architect as Facilitator (Distributed teams. ADRs. Fitness functions)
- 2022–Now: The Architect as Prompter (AI writes the code. Architecture is improvised)
- Next: The Architect as Systems Thinker (AI handles execution. Humans own constraints, decisions, and direction)

## Slide 19: SeniorSkillsSlide (17-SeniorSkillsSlide.tsx)
**Title:** Senior vs Junior in the AI Era  
**Content:** The gap is no longer how fast you type. AI made juniors faster. It didn't give them judgment.  
**Traits:**
- Sees the whole system (Not just the feature they're building)
- Owns the trade-offs (Knows what to sacrifice and why)
- Documents decisions (Future engineers read their reasoning)
- Asks before prompting ("What are we building?" before "Build this.")

## Slide 20: WorkshopExerciseSlide (19-WorkshopExerciseSlide.tsx)
**Title:** Take-Home Exercise  
**Content:** Design a real system. Apply today's framework. One hour. Any system. Write one ADR.  
**Exercise:** Design a URL shortener at 1M requests/day  
**Steps:**
- 01 Define: What are the 3 non-negotiable requirements?
- 02 Constrain: What's your scale? Read vs write ratio? SLO?
- 03 Decide: Monolith or services? SQL or cache? CDN?
- 04 ADR: Document your biggest trade-off decision.  
**Call to Action:** Share your ADR with the community → avylo.ai/community