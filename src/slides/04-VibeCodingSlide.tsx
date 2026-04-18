import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { fadeUp, heroEntrance, stagger } from '../lib/animations'

interface SlideProps { step: number }

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
          vibe · coding
        </motion.div>

        <motion.h2
          variants={heroEntrance}
          className="font-sans font-bold leading-tight tracking-tight mb-8"
          style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
        >
          <span className="gradient-text">Describe. Generate. Ship.</span>
          <br />
          <span className="text-[#94a3b8] font-light" style={{ fontSize: '70%' }}>
            No architecture phase. No trade-off review.
          </span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-mono text-[13px] tracking-[0.2em] uppercase text-[#94a3b8]/60 mt-4"
        >
          No architecture. No thinking.
        </motion.p>
      </motion.div>
    </SlideWrapper>
  )
}
