/* Slide registry — defines step counts and labels */
export interface SlideConfig {
  id: string
  steps: number  // 0 = no step reveals; N = N progressive reveals
}

export const SLIDES: SlideConfig[] = [
  // Part 1 — Hook & Problem
  { id: 'title',            steps: 0 },  // 01
  { id: 'agenda',           steps: 0 },  // 02
  { id: 'speed-paradox',    steps: 3 },  // 03
  { id: 'vibe-coding',      steps: 0 },  // 04
  { id: 'what-breaks',      steps: 4 },  // 05
  // Part 2 — Deep Pain
  { id: 'real-life',        steps: 0 },  // 06
  { id: 'chaos',            steps: 0 },  // 07
  // Part 3 — Core Framework
  { id: 'core-truth',       steps: 0 },  // 08
  { id: 'five-pillars',     steps: 5 },  // 09
  { id: 'thinking-first',   steps: 4 },  // 10
  { id: 'mental-model',     steps: 0 },  // 11
  { id: 'arch-patterns',    steps: 3 },  // 12
  { id: 'ai-blind-spot',    steps: 0 },  // 13
  { id: 'still-manual',     steps: 2 },  // 14
  { id: 'idea-to-infra',    steps: 4 },  // 15
  { id: 'adr',              steps: 0 },  // 16
  { id: 'prompting',        steps: 3 },  // 17
  // Part 4 — Mini Example
  { id: 'mini-example',     steps: 0 },  // 18
  // Part 5 — Interactive Thinking
  { id: 'design-together',  steps: 5 },  // 19 — 4 Q&A reveals + 1 killer question
  { id: 'workshop',         steps: 0 },  // 20
  // Part 6 — Demo
  { id: 'demo',             steps: 0 },  // 21 — self-animating
  // Part 7 — Avylo AI
  { id: 'avylo',            steps: 0 },  // 22
  // Part 8 — Takeaways + Future + Closing
  { id: 'takeaways',        steps: 0 },  // 23
  { id: 'future',           steps: 0 },  // 24
  { id: 'career-evolution', steps: 4 },  // 25
  { id: 'senior-skills',    steps: 4 },  // 26
  { id: 'closing',          steps: 0 },  // 27
]

export const SLIDE_COUNT = SLIDES.length
