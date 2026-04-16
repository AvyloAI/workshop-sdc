import { motion } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import GlowBlob from '../components/GlowBlob'
import { stagger, fadeUp, heroEntrance } from '../lib/animations'

interface SlideProps { step: number }

export default function TruthSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size={800} opacity={0.04} />

      {/* Left accent bar */}
      <div
        className="absolute left-0 top-1/4 h-1/2 w-[3px] rounded-full"
        style={{ background: 'linear-gradient(180deg, transparent, #0087f8, transparent)' }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-12 max-w-4xl"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#94a3b8] mb-10"
        >
          05 — Core Truth
        </motion.p>

        <motion.h2
          variants={heroEntrance}
          className="font-sans font-bold leading-tight tracking-tight mb-8"
          style={{ fontSize: 'clamp(36px, 5.5vw, 72px)' }}
        >
          Architecture is not a diagram.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="w-16 h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #0087f8, transparent)' }}
        />

        <motion.h2
          variants={fadeUp}
          className="font-sans font-light leading-tight tracking-tight text-[#94a3b8]"
          style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
        >
          It's a series of{' '}
          <span className="gradient-text font-semibold">decisions.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-mono text-[12px] tracking-widest uppercase text-[#94a3b8]/50 mt-12"
        >
          The diagram is just proof you made them.
        </motion.p>
      </motion.div>
    </SlideWrapper>
  )
}
