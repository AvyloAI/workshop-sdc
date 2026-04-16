import { AnimatePresence, motion } from 'framer-motion'
import { slideVariants } from './lib/animations'
import { usePresentation } from './hooks/usePresentation'
import Navigation from './components/Navigation'
import ProgressBar from './components/ProgressBar'
import Logo from './components/Logo'

import TitleSlide           from './slides/01-TitleSlide'
import AgendaSlide          from './slides/02-AgendaSlide'
import SpeedParadoxSlide    from './slides/03-SpeedParadoxSlide'
import VibeCodingSlide      from './slides/04-VibeCodingSlide'
import WhatBreaksSlide      from './slides/05-WhatBreaksSlide'
import CoreTruthSlide       from './slides/06-CoreTruthSlide'
import FivePillarsSlide     from './slides/07-FivePillarsSlide'
import ArchPatternsSlide    from './slides/08-ArchPatternsSlide'
import AIBlindSpotSlide     from './slides/09-AIBlindSpotSlide'
import StillManualSlide     from './slides/10-StillManualSlide'
import DemoSlide            from './slides/11-DemoSlide'
import IdeaToInfraSlide     from './slides/12-IdeaToInfraSlide'
import ADRSlide             from './slides/13-ADRSlide'
import PromptingSlide       from './slides/14-PromptingSlide'
import FutureSlide          from './slides/15-FutureSlide'
import CareerEvolutionSlide from './slides/16-CareerEvolutionSlide'
import SeniorSkillsSlide    from './slides/17-SeniorSkillsSlide'
import AvyloSlide           from './slides/12-AvyloSlide'
import WorkshopExerciseSlide from './slides/19-WorkshopExerciseSlide'
import ClosingSlide         from './slides/13-ClosingSlide'

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

  return (
    <div
      className="relative w-screen h-screen overflow-hidden"
      style={{ background: 'var(--background)', transition: 'background 0.35s ease' }}
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
  )
}
