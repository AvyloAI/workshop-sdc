import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import { IconChat, IconLightning, IconRocket } from '../components/Icons'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { heroEntrance, fadeUp, stagger } from '../lib/animations'
import type { ReactNode } from 'react'

interface SlideProps { step: number }

const STEPS: { iconEl: ReactNode; label: string; sub: string }[] = [
  { iconEl: <IconChat size={32} color="#44c4f6" />, label: 'Prompt',   sub: 'Describe what you want' },
  { iconEl: <IconLightning size={32} color="#44c4f6" />, label: 'Generate', sub: 'AI builds the code' },
  { iconEl: <IconRocket size={32} color="#44c4f6" />, label: 'Ship',    sub: 'Deploy in minutes' },
]

export default function VibeCodingSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="secondary" size={600} opacity={0.04} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl px-10"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <MonoLabel>Defining the era</MonoLabel>
        </motion.div>

        <motion.div
          variants={heroEntrance}
          className="font-mono text-[14px] tracking-widest uppercase text-primary/60 mb-6"
        >
          vibe · cod · ing
        </motion.div>

        <motion.h2
          variants={heroEntrance}
          className="font-sans font-bold leading-tight tracking-tight mb-8"
          style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
        >
          <span className="gradient-text">Describe. Generate. Ship.</span>
          <br />
          <span className="text-[#94a3b8] font-light" style={{ fontSize: '70%' }}>
            No architecture session required.
          </span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="grid grid-cols-3 gap-4 w-full mt-4"
        >
          {STEPS.map(item => (
            <div key={item.label} className="glass rounded-xl p-5 text-center border border-white/[0.05]">
              <div className="mb-3 flex items-center justify-center">{item.iconEl}</div>
              <p className="font-sans font-semibold text-[#f9fdfe] text-[17px] mb-1">{item.label}</p>
              <p className="font-sans text-[#94a3b8] font-light text-[15px]">{item.sub}</p>
            </div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-mono text-[13px] tracking-widest text-[#94a3b8]/60 uppercase mt-8"
        >
          Andrej Karpathy coined it. The industry adopted it overnight.
        </motion.p>
      </motion.div>
    </SlideWrapper>
  )
}
