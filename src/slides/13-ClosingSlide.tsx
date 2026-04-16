import { motion } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import GlowBlob from '../components/GlowBlob'
import { stagger, fadeUp, heroEntrance } from '../lib/animations'

interface SlideProps { step: number }

export default function ClosingSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size={900} opacity={0.05} />

      {/* Barely-visible quote marks */}
      <div
        className="absolute top-1/4 left-8 font-sans font-bold text-[200px] leading-none select-none pointer-events-none"
        style={{ color: 'rgba(0,135,248,0.04)', lineHeight: 1 }}
      >
        "
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-12 max-w-4xl"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-[13px] tracking-[0.25em] uppercase text-[#94a3b8] mb-12"
        >
          Closing
        </motion.p>

        <motion.h2
          variants={fadeUp}
          className="font-sans font-light text-[#94a3b8] leading-tight tracking-tight mb-4"
          style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
        >
          The question is no longer:
        </motion.h2>

        <motion.h2
          variants={fadeUp}
          className="font-sans font-light text-[#f9fdfe]/50 tracking-tight mb-10"
          style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}
        >
          "Can you build it?"
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="w-12 h-px mb-10"
          style={{ background: 'linear-gradient(90deg, transparent, #0087f8, transparent)' }}
        />

        <motion.h2
          variants={heroEntrance}
          className="font-sans font-bold leading-tight tracking-tight"
          style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}
        >
          "Should it be built
          <br />
          <span className="gradient-text">this way?"</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-mono text-[13px] tracking-widest uppercase text-[#94a3b8]/70 mt-14"
        >
          That's a human question. It always will be.
        </motion.p>
      </motion.div>
    </SlideWrapper>
  )
}
