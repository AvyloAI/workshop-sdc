# Workshop-SDC Complete Slides Report

This document contains a comprehensive summary of all 27 slides implemented and used in the workshop-sdc presentation app, in the correct order per the talk plan structure (8 parts).

---

## 🎯 INTERACTIVE Q&A GUIDE (NEW)

**Key Interactive Slide:** Slide 19 — Design Together (Part 5)

**Format:** Questions display first → Audience answers → Step reveals answers + feedback criteria

**How it works:**
1. **Step 0:** Show question only. Audience thinks & discusses.
2. **Step 1+:** Reveal suggested answer with what to "look for" in good answers.
3. **Step 5:** Reveal killer question ("What breaks first if traffic goes 10×?") with suggested answer.

**Suggested Answers Provided For:**
- Storage decision (PostgreSQL + Redis cache)
- Algorithm decision (Auto-increment + base62 encoding)
- Failure decision (Database sharding)
- Pattern decision (100:1 read-heavy ratio)
- Killer question (Sharding limits or cache invalidation)

**Presenter Notes:** 
- Celebrate close answers — award points mentally to teams that think systematically
- Use "Look for" criteria to validate responses
- No wrong answer if reasoning is documented
- This builds confidence in decision-making, not punishment

---

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

---

## **PART 2 — DEEP PAIN (10 min)**

## Slide 6: RealLifeSlide (20-RealLifeSlide.tsx)
**Title:** Real Life  
**Headline:** Everything works… until it doesn't.  
**Content (3 bullet items with arrows):**
- Add a feature → something breaks
- Scale → system collapses
- Debug → no one understands the code  
**Relatable pain statement:** "You're afraid to touch the code… because you don't know what breaks."

## Slide 7: ChaosSlide (21-ChaosSlide.tsx)
**Title:** The Pattern  
**Headline:** We didn't build systems. We built chaos that works…  
**Subtext:** temporarily.  
**Key insight:** "The problem isn't the tools. The problem is we skipped the thinking."

---

## **PART 3 — CORE FRAMEWORK (25 min)**

## Slide 8: CoreTruthSlide (06-CoreTruthSlide.tsx)
**Title:** Core Truth  
**Content:** Architecture is not diagrams. It's decisions. The diagram is just proof you made them.  
**Note:** _(silence beat — pause 2–3 seconds, look at audience)_

## Slide 9: FivePillarsSlide (07-FivePillarsSlide.tsx)
**Title:** 5 Things That Never Change  
**Subtitle:** AI changes speed. These decide survival.  
**Pillars:**
- Scalability (Scales without a rewrite)
- Reliability (Fails safely. Recovers fast.)
- Maintainability (Easy to understand. Easy to change.)
- Security (Secure by design, not by patch)
- Observability (You know what's wrong before users do)

## Slide 10: ThinkingFirstSlide (22-ThinkingFirstSlide.tsx)
**Title:** Think Before You Code  
**Subtitle:** 4 questions every engineer must answer before writing a line  
**Questions (progressive step reveals):**
- 01 What are we building? _(Purpose & scope)_
- 02 What are the constraints? _(Scale, budget, team, time)_
- 03 What can break? _(Failure modes & edge cases)_
- 04 What are the trade-offs? _(Document them before you code)_  
**Final message:** "This is what separates a builder from a systems thinker."

## Slide 11: MentalModelSlide (23-MentalModelSlide.tsx)
**Title:** Simple Mental Model  
**Headline:** Every system follows this model.  
**Node chain (5 steps):**
- 01 Input (Requests, events, data)
- 02 Processing (Logic, transforms, rules)
- 03 Storage (DB, cache, files)
- 04 Communication (APIs, queues, events)
- 05 Failure (Timeouts, errors, retries)  
**Key insight:** "Every system follows this model. AI can't see past step 2."

## Slide 12: ArchPatternsSlide (08-ArchPatternsSlide.tsx)
**Title:** Architecture Patterns  
**Content:** The evolution that led us here  
**Patterns:**
- Monolith (2000s) — One codebase. Simple to start. Hard to scale.
- Microservices (2015+) — Independent services. Scalable. Operationally complex.
- AI Era (Now) — AI writes code. No one designs the system. Complexity explodes.

## Slide 13: AIBlindSpotSlide (09-AIBlindSpotSlide.tsx)
**Title:** The AI Blind Spot  
**Content:** AI sees code. Not systems. It optimizes the function in front of it. Ask it to design for 10,000 concurrent users and it won't warn you what breaks.  
**3 bullets:**
- No scale awareness
- No failure thinking
- No long-term reasoning

## Slide 14: StillManualSlide (10-StillManualSlide.tsx)
**Title:** We modernized coding. Not thinking.  
**Old way:** Whiteboards & Diagrams (Draw.io / Lucidchart · Static RFC docs · Architecture committee · Snapshot in time) — Slow. Disconnected. Forgotten.  
**What's needed:** Integrated, AI-assisted thinking (Conversational design · Living diagrams · Trade-off analysis · Always up to date) — Fast. Continuous. Human-directed.

## Slide 15: IdeaToInfraSlide (12-IdeaToInfraSlide.tsx)
**Title:** From Idea to Infrastructure  
**Subtitle:** Before you write a single line  
**Steps:**
- 01 Idea — What problem? Who needs it? What must never fail?
- 02 Constraints — Scale? Budget? Team? Compliance? Latency?
- 03 Architecture — Choose patterns. Document trade-offs. Write ADRs.
- 04 Code — Now write — or prompt AI to write.  
**Punch line:** AI owns code. Humans own decisions.

## Slide 16: ADRSlide (13-ADRSlide.tsx)
**Title:** Architecture Decision Records  
**Content:** Decisions are forgotten. Systems are not. Six months from now, nobody will remember why you chose PostgreSQL over MongoDB. Write it down.  
**Example:** ADR-0007 Use PostgreSQL as primary datastore (Context: ACID transactions for billing · Decision: PostgreSQL with read replicas · Consequences: Strong consistency. No horizontal write scale.)

## Slide 17: PromptingSlide (14-PromptingSlide.tsx)
**Title:** Prompting for Architecture  
**Subtitle:** Better context → better architecture  
**Single example:**
- Bad: "Build me a SaaS backend" → Good: "I need an API for 10k users/day. Auth via JWT, Postgres DB, scale-out later. What architecture fits?"
**Formula:** Constraints + Context + Consequences = better AI output

---

## **PART 4 — MINI EXAMPLE (5 min)**

## Slide 18: MiniExampleSlide (24-MiniExampleSlide.tsx)
**Title:** Mini Example  
**System:** Simple SaaS App  
**Architecture flow:** Users → API → DB → Cache  
**Question posed:** What breaks first?  
**Insights (3 items):**
- DB under heavy reads → Cache helps — but adds invalidation complexity
- Cache invalidation → Stale data if not handled carefully
- No retry logic → Silent failures — hardest bugs to find  
**Key message:** "Every system has a weakest link. Architecture means knowing which one it is before users do."

---

## **PART 5 — INTERACTIVE THINKING (20 min)**

## Slide 19: DesignTogetherSlide (25-DesignTogetherSlide.tsx)
**Title:** Let's Design Together  
**Challenge:** URL Shortener at 1M req/day  
**Interactive Q&A Format (step-by-step reveal):**

**Questions (display first, let audience answer):**
1. Where do we store URLs? _(Storage decision)_
2. How do we generate short IDs? _(Algorithm decision)_
3. What happens at scale? _(Failure decision)_
4. Read-heavy or write-heavy? _(Pattern decision)_

**Suggested Answers (revealed on step progression):**
- **Q1 Answer:** PostgreSQL + Redis cache. Need ACID for consistency, Redis for speed.
  - _Look for:_ Mentions database + cache / Considers read/write tradeoff
- **Q2 Answer:** Auto-increment ID + base62 encoding. Fast, collision-free, URL-safe.
  - _Look for:_ Mentions uniqueness / Considers URL-safe characters
- **Q3 Answer:** Database becomes bottleneck. Solution: sharding by ID prefix or region.
  - _Look for:_ Identifies the failure mode / Proposes a solution
- **Q4 Answer:** Read-heavy (100:1 ratio). Use cache + CDN. Writes go to primary DB.
  - _Look for:_ Recognizes read dominance / Suggests caching strategy

**Killer Question (revealed at step 5):**
- "What breaks first if traffic goes 10×?"
- _Suggested Answer:_ Database sharding limit or cache invalidation race conditions.

**How to use:** Step through slides to reveal each answer. Let audience guess first, then show the answer with feedback criteria. Celebrate close answers — this teaches systems thinking, not trivia.

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

---

## **PART 6 — DEMO (12–15 min)**

## Slide 21: DemoSlide (11-DemoSlide.tsx)
**Label:** 11 — Live Demo  
**Title:** Architecture generation  
**Guided lens (before demo starts):** 
- What decisions are made automatically?
- What appears that you didn't ask for?
- What would YOU do differently?  
**Content:** Self-contained auto-animated SaaS product demo: form fills with typewriter effect, selects project type/tags/DB/scale, generates architecture with progress bar and steps, builds React Flow diagram node-by-node with fitView, goes live with replay button  
**After-demo message:** "This is what architecture should feel like. Instant. Visible. Yours."

---

## **PART 7 — AVYLO AI (5–8 min)**

## Slide 22: AvyloSlide (12-AvyloSlide.tsx)
**Title:** Avylo AI  
**Headline:** From idea → architecture  
**Subtext:** Instantly. Intelligently. Continuously. A system-thinking partner.  
**Key messages:**
- "This isn't a diagram tool. It's not a code generator. It's the missing layer between your idea and your system."
- "Avylo doesn't replace architects. It helps you think like one."  
**URL:** AvyloAi.com

---

## **PART 8 — TAKEAWAYS + FUTURE + CLOSING (8–10 min)**

## Slide 23: TakeawaysSlide (26-TakeawaysSlide.tsx)
**Title:** What to Remember  
**Headline:** Take these with you.  
**4 Takeaways:**
- 01 Think before you code
- 02 Decisions matter more than speed
- 03 Systems > features
- 04 AI is a tool — not a brain

## Slide 24: FutureSlide (15-FutureSlide.tsx)
**Title:** The Future of Software Architecture  
**Content:** Architecture becomes continuous. Not a phase. A constant.  
**Features:**
- Living Systems (Diagrams that update as code changes)
- Real-time Decisions (Trade-offs surfaced as you build)
- AI Co-architect (Your thinking partner, not your replacement)

## Slide 25: CareerEvolutionSlide (16-CareerEvolutionSlide.tsx)
**Title:** Career Evolution  
**Subtitle:** How the role is transforming  
**Eras:**
- 2000–2015: Oracle — One senior person decided everything. A bottleneck dressed as authority.
- 2015–2022: Facilitator — Distributed teams. ADRs. Fitness functions. Collaborative — still slow.
- 2022–Now: Prompter — AI writes the code. Architecture is improvised. Systems break quietly. _(you are here)_
- Next: **Systems Thinker + AI Collaborator** — AI handles execution. Humans own constraints, context, and direction. _(coming next)_

## Slide 26: SeniorSkillsSlide (17-SeniorSkillsSlide.tsx)
**Title:** Senior vs Junior in the AI Era  
**Content:** AI made juniors faster. It didn't give them judgment.  
**Traits (3 only):**
- System thinking (Sees the whole — not just the feature in front of them)
- Trade-off ownership (Knows what to sacrifice and can defend why)
- Decision ownership (Writes the reasoning. Future engineers read it.)

## Slide 27: ClosingSlide (13-ClosingSlide.tsx)
**Label:** Closing  
**Headline 1 (gradient):** Can you build it?  
**Headline 2 (light):** That's no longer the question.  
**Divider line**  
**Final question (bold):** Should it be built this way?  
**Emotional anchor (spoken, no slide):**  
> "AI will not replace engineers.
>
> But engineers who don't understand systems…  
> will be replaced."

_Pause. Let it land._

**Final interaction — 60 seconds:**
> "One thing. What changed in how you think today?"

_Let 2–3 people answer. No pressure._

**Closing statement:**
> "That shift — from builder to systems thinker —  
> that's the career move AI can't make for you."