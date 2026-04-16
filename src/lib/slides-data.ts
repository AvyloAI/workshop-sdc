/* Slide registry — defines step counts and labels */
export interface SlideConfig {
  id: string
  steps: number  // 0 = no step reveals; N = N progressive reveals
}

export const SLIDES: SlideConfig[] = [
  { id: 'title',            steps: 0 },  // 01
  { id: 'agenda',           steps: 0 },  // 02
  { id: 'speed-paradox',    steps: 3 },  // 03
  { id: 'vibe-coding',      steps: 0 },  // 04
  { id: 'what-breaks',      steps: 4 },  // 05
  { id: 'core-truth',       steps: 0 },  // 06
  { id: 'five-pillars',     steps: 5 },  // 07
  { id: 'arch-patterns',    steps: 3 },  // 08
  { id: 'ai-blind-spot',    steps: 0 },  // 09
  { id: 'still-manual',     steps: 2 },  // 10
  { id: 'demo',             steps: 0 },  // 11 — self-animating
  { id: 'idea-to-infra',    steps: 4 },  // 12
  { id: 'adr',              steps: 0 },  // 13
  { id: 'prompting',        steps: 3 },  // 14
  { id: 'future',           steps: 0 },  // 15
  { id: 'career-evolution', steps: 4 },  // 16
  { id: 'senior-skills',    steps: 4 },  // 17
  { id: 'avylo',            steps: 0 },  // 18
  { id: 'workshop',         steps: 0 },  // 19
  { id: 'closing',          steps: 0 },  // 20
]

export const SLIDE_COUNT = SLIDES.length
