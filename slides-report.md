  # Workshop-SDC Complete Slides Report

  This document contains a comprehensive summary of all 27 slides implemented and used in the workshop-sdc presentation app, in the correct order per the talk plan structure (8 parts).

  ---

  ## 🎯 INTERACTIVITY OVERVIEW — WHERE & HOW IT WORKS

  **Interactive Slides in Order of Appearance:**
  1. **Slide 3 — Speed Paradox** (2 stats reveal progressively)
  2. **Slide 5 — What Breaks** (4 diagnosis items reveal progressively)
  3. **Slide 9 — Five Pillars** (5 pillars reveal progressively)
  4. **Slide 10 — Thinking First** (4 questions reveal progressively)
  5. **Slide 12 — Arch Patterns** (3 patterns reveal progressively)
  6. **Slide 14 — Still Manual** (Old way vs New way comparison)
  7. **Slide 15 — Idea to Infra** (4-step process with flow arrows)
  8. **Slide 17 — Prompting for Architecture** (Example pair reveal)
  9. **Slide 19 — Design Together** (URL Shortener Q&A — **MAIN INTERACTIVE SLIDE**)
  10. **Slide 25 — Career Evolution** (4 eras reveal progressively)

  ---

  ### 📊 STEP REVEAL MECHANICS — HOW THEY WORK

  **Display Rule:** Content shows **immediately** when you arrive at slide, then steps reveal additional items.

  **Example Flow:**
  ```
  Arrival at Slide → Step 0 → Item 1 visible
  Press Next → Step 1 → Item 1 + Item 2 visible
  Press Next → Step 2 → Item 1 + Item 2 + Item 3 visible
  ... and so on
  ```

  **Technical:** Each slide has a `steps` value in `slides-data.ts`:
  - `steps: 0` = No reveals (static content)
  - `steps: 1` = One additional reveal
  - `steps: 2` = Two additional reveals
  - `steps: 4` = Four progressive reveals
  - `steps: 5` = Five progressive reveals

  **Navigation:**
  - Press **Right Arrow**, **Down Arrow**, **Space**, or **Click right side** → Next step
  - Press **Left Arrow**, **Up Arrow**, or **Click left side** → Previous step
  - Once all steps exhausted → Next slide

  ---

### 🎯 QUICK REFERENCE — INTERACTIVE SLIDES BY TYPE

| Slide | Type | Steps | Content Pattern |
|-------|------|-------|-----------------|
| **Slide 3** | Stats | 2 | Stat1, Stat2 (revealed progressively) |
| **Slide 5** | List | 4 | Item1-4 (diagnosis points) |
| **Slide 9** | Pillars | 5 | Pillar1-5 (architectural principles) |
| **Slide 10** | Questions | 4 | Q1-4 (thinking framework) |
| **Slide 12** | Evolution | 3 | Pattern1-3 (architecture history) |
| **Slide 14** | Comparison | 2 | Old way, Then new way |
| **Slide 15** | Process | 4 | Step1-4 (Idea → Code) with arrows |
| **Slide 17** | Example | 1 | Bad prompt → Good prompt |
| **Slide 19** | Q&A ⭐ | 5 | Q1-4 answers + Killer question |
| **Slide 25** | Timeline | 4 | Era1-4 (career evolution) |

---
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
  **Interactive (2 step reveals):**
  - **Step 0:** Heading appears  
  - **Step 1:** First stat: "10× Faster to scaffold a full-stack app with AI"  
  - **Step 2:** Second stat: "68% Of incidents trace back to sprint-one architecture decisions"

  **Presenter Notes:** Use this to emphasize the paradox — speed doesn't solve thinking problems.

  ## Slide 4: VibeCodingSlide (04-VibeCodingSlide.tsx)
  **Title:** Defining the era  
  **Content:** vibe · cod · ing — Describe. Generate. Ship.  
  **Punchline:** No architecture. No thinking.

  ## Slide 5: WhatBreaksSlide (05-WhatBreaksSlide.tsx)
  **Title:** What Actually Broke  
  **Subtitle:** The diagnosis  
  **Interactive (4 step reveals):**
  - **Step 0:** Heading appears
  - **Step 1:** "01 No one designed the system" (with ghost icon)
  - **Step 2:** "02 Documentation is already outdated" (with file icon)
  - **Step 3:** "03 Scale was never planned" (with explosion icon)
  - **Step 4:** "04 Decisions were never made" (with warning icon)

  **Presenter Notes:** Pause after each reveal — let audience nod in recognition. Each point builds psychological momentum toward the solution.

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
  **Interactive (5 step reveals):**
  - **Step 0:** Left heading appears
  - **Step 1:** Scalability — Scales without a rewrite
  - **Step 2:** Reliability — Fails safely. Recovers fast.
  - **Step 3:** Maintainability — Easy to understand. Easy to change.
  - **Step 4:** Security — Secure by design, not by patch
  - **Step 5:** Observability — You know what's wrong before users do

  **Presenter Notes:** Each pillar represents a dimension of system thinking. Emphasize that these are independent of tech choice — they're properties of good design.

  ## Slide 10: ThinkingFirstSlide (22-ThinkingFirstSlide.tsx)
  **Title:** Think Before You Code  
  **Subtitle:** 4 questions every engineer must answer before writing a line  
  **Interactive (4 step reveals):**
  - **Step 0:** Heading appears
  - **Step 1:** "01 What are we building?" _(Purpose & scope)_
  - **Step 2:** "02 What are the constraints?" _(Scale, budget, team, time)_
  - **Step 3:** "03 What can break?" _(Failure modes & edge cases)_
  - **Step 4:** "04 What are the trade-offs?" _(Document them before you code)_  

  **Final Reveal (Step >= 4):** Quote appears: *"This is what separates a builder from a systems thinker."*

  **Presenter Notes:** This is a pattern for critical thinking. Each question builds on the previous. Ask audience to write their own answers before revealing the "framework" answer.

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
  **Interactive (3 step reveals):**
  - **Step 0:** Heading appears
  - **Step 1:** Monolith (2000s) — One codebase. Simple to start. Hard to scale. [Visual: single box]
  - **Step 2:** Microservices (2015+) — Independent services. Scalable. Operationally complex. [Visual: API · Auth · DB · ML boxes]
  - **Step 3:** AI Era (Now) — AI writes code. No one designs the system. Complexity explodes. [Visual: chaotic nodes]

  **Presenter Notes:** Show the progression visually. The visual complexity mirrors the conceptual complexity. Ask: "Which phase is your current project in?"

  ## Slide 13: AIBlindSpotSlide (09-AIBlindSpotSlide.tsx)
  **Title:** The AI Blind Spot  
  **Content:** AI sees code. Not systems. It optimizes the function in front of it. Ask it to design for 10,000 concurrent users and it won't warn you what breaks.  
  **3 bullets:**
  - No scale awareness
  - No failure thinking
  - No long-term reasoning

  ## Slide 14: StillManualSlide (10-StillManualSlide.tsx)
  **Title:** We modernized coding. Not thinking.  
  **Subtitle:** Why is architecture still manual?  
  **Interactive (2 step reveals):**
  - **Step 0:** Heading appears
  - **Step 1:** Left box: "Old way — Whiteboards & Diagrams" (Draw.io / Lucidchart · Static RFC docs · Architecture committee · Snapshot in time) — _Slow. Disconnected. Forgotten._
  - **Step 2:** Right box: "What's needed — Integrated, AI-assisted thinking" (Conversational design · Living diagrams · Trade-off analysis · Always up to date) — _Fast. Continuous. Human-directed._

  **Presenter Notes:** The contrast is visual and temporal. Show how old ways are broken, then immediately provide the vision of what's possible.

  ## Slide 15: IdeaToInfraSlide (12-IdeaToInfraSlide.tsx)
  **Title:** From Idea to Infrastructure  
  **Subtitle:** Before you write a single line  
  **Interactive (4 step reveals — horizontal flow):**
  - **Step 0:** Heading appears
  - **Step 1:** Card 1: "01 Idea" — What problem? Who needs it? What must never fail? [Icon: ◎]  
  →
  - **Step 2:** Card 2: "02 Constraints" — Scale? Budget? Team? Compliance? Latency? [Icon: ⊞]  
  →
  - **Step 3:** Card 3: "03 Architecture" — Choose patterns. Document trade-offs. Write ADRs. [Icon: ⟐]  
  →
  - **Step 4:** Card 4: "04 Code" — Now write — or prompt AI to write. [Icon: ⚡]

  **Flow Arrows:** Appear between cards as they're revealed

  **Punch line:** AI owns code. Humans own decisions.

  **Presenter Notes:** Each step is a gate. Rushing past any one of these leads to poor architecture. Use this to validate that your audience has been thinking through these steps.

  ## Slide 16: ADRSlide (13-ADRSlide.tsx)
  **Title:** Architecture Decision Records  
  **Content:** Decisions are forgotten. Systems are not. Six months from now, nobody will remember why you chose PostgreSQL over MongoDB. Write it down.  
  **Example:** ADR-0007 Use PostgreSQL as primary datastore (Context: ACID transactions for billing · Decision: PostgreSQL with read replicas · Consequences: Strong consistency. No horizontal write scale.)

  ## Slide 17: PromptingSlide (14-PromptingSlide.tsx)
  **Title:** Prompting for Architecture  
  **Subtitle:** Better context → better architecture  
  **Interactive (1 step reveal):**
  - **Step 0:** Heading appears
  - **Step 1:** Example pair shows:
    - **Bad (strikethrough):** ❌ "Build me a SaaS backend"
    - **Good (highlighted blue):** ✓ "I need an API for 10k users/day. Auth via JWT, Postgres DB, scale-out later. What architecture fits?"

  **Formula:** Constraints + Context + Consequences = better AI output

  **Presenter Notes:** This is the bridge between human thinking and AI execution. Show how much more information the second prompt contains. Use this to teach audience how to talk to AI systems.

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
  **Challenge:** E-commerce Store with 1M shoppers/day  

  ### MAIN INTERACTIVE SLIDE — Q&A WITH PROGRESSIVE REVEALS

  **Display Mechanics:**

  **Step 0 (Arrival):** 
  - Left: Problem statement with title
  - Right: All 4 questions visible with tags (no answers yet)
  - Audience sees: "Here are 4 questions to think about"

  **Steps 1-4 (Progressive Answer Reveals):**
  - Press Next → Step 1 → Answer to Q1 appears below question
  - Press Next → Step 2 → Answer to Q2 appears below question
  - Press Next → Step 3 → Answer to Q3 appears below question
  - Press Next → Step 4 → Answer to Q4 appears below question

  **Step 4+ (Killer Question):**
  - After Q4 answer appears, can continue to Step 5
  - Press Next → Step 5 → Killer question box appears below with answer

  ---

  ### QUESTIONS & ANSWERS (E-commerce System)

  **Q1: Where do we store products & orders?** _(Storage decision)_
  - **Answer:** Main database for orders. Cache (fast memory) for popular products so lookups are instant.
  - **Look for:** ✓ Separates permanent vs temporary data / ✓ Mentions speed or cache
  - _Display:_ Appears in blue-bordered box below question

  **Q2: How do we show products quickly?** _(Speed decision)_
  - **Answer:** Cache the top 1000 products in memory. Serve them instantly. Update main database in background.
  - **Look for:** ✓ Mentions speed / ✓ Thinks about most popular items first
  - _Display:_ Appears in blue-bordered box below question

  **Q3: What breaks first on Black Friday?** _(Failure decision)_
  - **Answer:** Database gets overwhelmed with updates. Solution: queue up the orders, process them one by one.
  - **Look for:** ✓ Identifies the bottleneck / ✓ Proposes a queuing or batching solution
  - _Display:_ Appears in blue-bordered box below question

  **Q4: Do people browse more than they buy?** _(Traffic pattern)_
  - **Answer:** Yes — 100 people browse for every 1 who buys. So optimize for fast browsing. Buying can be slower.
  - **Look for:** ✓ Recognizes reading > writing / ✓ Prioritizes the common case
  - _Display:_ Appears in blue-bordered box below question

  **KILLER QUESTION** _(Step 5 only)_
  - **Question:** "What breaks first if traffic doubles?"
  - **Answer:** Database connection limits or the cache becoming stale. 💡
  - _Display:_ Appears in special blue highlight box at bottom

  ---

  ### HOW TO USE THIS SLIDE

  **Before Starting:**
  1. Tell audience: "I'm going to show you 4 questions about building an online store. Think about how you'd solve each one."
  2. Let them discuss with their neighbor for 30 seconds per question

  **During Presentation:**
  1. Start at Q1, let audience answer/discuss
  2. Press Next (Step 1) → Answer reveals
  3. Say: "Here's one way to solve it. See if your thinking was close."
  4. Use "Look for" criteria to validate audience responses
  5. Celebrate close answers — this builds confidence, not punishment
  6. Move to Q2, repeat

  **After Q4:**
  7. Ask: "If more people shop at once, what stops working?"
  8. Press Next (Step 5) → Killer question reveals with answer
  9. Emphasize: "This is systems thinking in action."

  **Presenter Notes:**
  - No wrong answers if reasoning is documented
  - This teaches decision-making process, not memorization
  - Award mental points to teams that identify bottlenecks
  - Use this to transition: "This is Avylo's job — finding these breakpoints automatically."

  ---

  ## Slide 20: WorkshopExerciseSlide (19-WorkshopExerciseSlide.tsx)
  **Title:** Take-Home Exercise  
  **Content:** Design a system. Make decisions. Any system. One hour. Write one ADR.  
  **Example Exercise:** Design an e-commerce platform at 1M shoppers/day  
  **Steps:**
  - 01 Define — What are the 3 non-negotiable requirements?
  - 02 Constrain — Scale? Read/write ratio? SLO? Team size?
  - 03 Decide — How do we handle peak traffic? What's our biggest risk?
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
**Interactive (4 step reveals — timeline):**
- **Step 0:** Heading appears with vertical timeline line
- **Step 1:** Era 1: 2000–2015: **Oracle** — One senior person decided everything. A bottleneck dressed as authority. [Color: Gray · Status: Past]
- **Step 2:** Era 2: 2015–2022: **Facilitator** — Distributed teams. ADRs. Fitness functions. Collaborative — still slow. [Color: Gray · Status: Past]
- **Step 3:** Era 3: 2022–Now: **Prompter** — AI writes the code. Architecture is improvised. Systems break quietly. [Color: Orange · Status: NOW — You are here] _(pulsing indicator)_
- **Step 4:** Era 4: Next: **Systems Thinker + AI Collaborator** — AI handles execution. Humans own constraints, context, and direction. [Color: Blue · Status: Future]

**Visual:** Timeline dots with connecting line. Each era card slides in from left.

**Presenter Notes:** This shows the career arc. Emphasize that Systems Thinker is not a promotion from Prompter — it's a fundamentally different skill set. The future role values judgment, not just speed.
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
  > "That shift — from builder to systewms thinker —  
  > that's the career move AI can't make for you."