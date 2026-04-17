import { AnimatePresence, motion } from 'framer-motion'
import { useCallback } from 'react'
import Logo from './components/Logo'
import Navigation from './components/Navigation'
import ProgressBar from './components/ProgressBar'
import { usePresentation } from './hooks/usePresentation'
import { slideVariants } from './lib/animations'

import TitleSlide from './slides/01-TitleSlide'
import AgendaSlide from './slides/02-AgendaSlide'
import SpeedParadoxSlide from './slides/03-SpeedParadoxSlide'
import VibeCodingSlide from './slides/04-VibeCodingSlide'
import WhatBreaksSlide from './slides/05-WhatBreaksSlide'
import CoreTruthSlide from './slides/06-CoreTruthSlide'
import FivePillarsSlide from './slides/07-FivePillarsSlide'
import ArchPatternsSlide from './slides/08-ArchPatternsSlide'
import AIBlindSpotSlide from './slides/09-AIBlindSpotSlide'
import StillManualSlide from './slides/10-StillManualSlide'
import DemoSlide from './slides/11-DemoSlide'
import AvyloSlide from './slides/12-AvyloSlide'
import IdeaToInfraSlide from './slides/12-IdeaToInfraSlide'
import ADRSlide from './slides/13-ADRSlide'
import ClosingSlide from './slides/13-ClosingSlide'
import PromptingSlide from './slides/14-PromptingSlide'
import FutureSlide from './slides/15-FutureSlide'
import CareerEvolutionSlide from './slides/16-CareerEvolutionSlide'
import SeniorSkillsSlide from './slides/17-SeniorSkillsSlide'
import WorkshopExerciseSlide from './slides/19-WorkshopExerciseSlide'

const slides = [
  TitleSlide,
  AgendaSlide,
  SpeedParadoxSlide,
  VibeCodingSlide,
  WhatBreaksSlide,
  CoreTruthSlide,
  FivePillarsSlide,
  ArchPatternsSlide,
  AIBlindSpotSlide,
  StillManualSlide,
  DemoSlide,
  IdeaToInfraSlide,
  ADRSlide,
  PromptingSlide,
  FutureSlide,
  CareerEvolutionSlide,
  SeniorSkillsSlide,
  AvyloSlide,
  WorkshopExerciseSlide,
  ClosingSlide,
]

export default function App() {
  const state = usePresentation()
  const CurrentSlide = slides[state.slideIndex]

  // Click-to-navigate: right side = next, left side = prev
  // Exclude interactive elements from triggering navigation
  const handleClick = useCallback((e: React.MouseEvent) => {
    const target = e.target as HTMLElement
    if (target.closest('button, a, input, select, textarea, [data-no-nav], .react-flow')) return
    if (e.clientX < window.innerWidth * 0.28) {
      state.goPrev()
    } else {
      state.goNext()
    }
  }, [state.goPrev, state.goNext])

  return (
    <>
      {/* Mobile blocker — visible only on small screens */}
      <div
        className="md:hidden fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-6 px-8 text-center"
        style={{ background: 'var(--background)' }}
      >
        <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ color: 'var(--primary)' }}>
          <rect x="5" y="2" width="14" height="20" rx="2" />
          <line x1="12" y1="18" x2="12.01" y2="18" />
        </svg>
        <h1 className="text-2xl font-bold" style={{ color: 'var(--foreground)' }}>
          Desktop Only
        </h1>
        <p className="text-base leading-relaxed max-w-xs" style={{ color: 'var(--muted-fg)' }}>
          This presentation is optimised for desktop screens.
          <br />
          Please open it on a laptop or desktop for the best experience.
        </p>
      </div>

      {/* Main presentation — hidden on small screens */}
      <div
        className="hidden md:block relative w-screen h-screen overflow-hidden"
        style={{ background: 'var(--background)', transition: 'background 0.35s ease' }}
        onClick={handleClick}
      >
        {/* Top bar */}
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 pt-5 pointer-events-none">
          <div className="pointer-events-auto">
            <Logo height={26} />
          </div>
        </div>

        <ProgressBar slideIndex={state.slideIndex} totalSlides={state.totalSlides} />

        {/* Slide viewport */}
        <AnimatePresence mode="wait">
          <motion.div
            key={state.slideIndex}
            variants={slideVariants}
            initial="enter"
            animate="visible"
            exit="exit"
            style={{
              position: 'fixed',
              inset: 0,
              width: '100vw',
              height: '100vh',
              overflow: 'hidden',
            }}
          >
            <CurrentSlide step={state.step} />
          </motion.div>
        </AnimatePresence>

        <Navigation
          slideIndex={state.slideIndex}
          totalSlides={state.totalSlides}
          goTo={state.goTo}
          goPrev={state.goPrev}
          goNext={state.goNext}
        />
      </div>
    </>
  )
}
