import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import SlideWrapper from '../components/SlideWrapper'
import { heroEntrance, fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

export default function CoreTruthSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size={900} opacity={0.04} />

      <div
        className="absolute left-0 top-1/4 h-1/2 w-[2px]"
        style={{ background: 'linear-gradient(180deg, transparent, #0087f8 40%, #44c4f6 60%, transparent)' }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl px-12"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#94a3b8] mb-10"
        >
          Core Truth
        </motion.p>

        <motion.h2
          variants={heroEntrance}
          className="font-sans font-bold leading-tight tracking-tight mb-8"
          style={{ fontSize: 'clamp(36px, 5.5vw, 76px)' }}
        >
          Architecture is not a diagram.
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="w-20 h-[1px] mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #0087f8, #44c4f6, transparent)' }}
        />

        <motion.h3
          variants={fadeUp}
          className="font-sans font-light text-[#94a3b8] leading-tight tracking-tight"
          style={{ fontSize: 'clamp(24px, 3.5vw, 48px)' }}
        >
          It's a series of{' '}
          <span className="gradient-text font-semibold">decisions.</span>
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] tracking-widest uppercase text-[#94a3b8]/40 mt-12"
        >
          The diagram is just proof you made them.
        </motion.p>
      </motion.div>
    </SlideWrapper>
  )
}
