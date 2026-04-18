import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { fadeUp, heroEntrance, stagger } from '../lib/animations'

interface SlideProps { step: number }

export default function ChaosSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="bottom-0 left-1/2 -translate-x-1/2" color="primary" size={700} opacity={0.04} />

      <div className="relative z-10 w-full max-w-3xl px-10 flex flex-col items-center text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-6">
            <MonoLabel>The Pattern</MonoLabel>
          </motion.div>

          <motion.h2
            variants={heroEntrance}
            className="font-sans font-bold leading-snug tracking-tight mb-6"
            style={{ fontSize: 'clamp(28px, 4.5vw, 62px)' }}
          >
            We didn't build systems.
          </motion.h2>

          <motion.h3
            variants={fadeUp}
            className="font-sans font-light leading-snug tracking-tight text-[#94a3b8]"
            style={{ fontSize: 'clamp(22px, 3.5vw, 48px)' }}
          >
            We built{' '}
            <span className="gradient-text font-semibold">chaos</span>
            {' '}that works…
          </motion.h3>

          <motion.p
            variants={fadeUp}
            className="font-mono text-[13px] tracking-[0.2em] uppercase text-[#94a3b8]/50 mt-4"
          >
            temporarily.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="w-24 h-[1px] mx-auto mt-12 mb-8"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(0,135,248,0.5), transparent)' }}
          />

          <motion.p
            variants={fadeUp}
            className="font-sans font-light text-[#94a3b8] leading-relaxed"
            style={{ fontSize: 'clamp(14px, 1.3vw, 17px)' }}
          >
            The problem isn't the tools.
            <br />
            The problem is we skipped{' '}
            <span className="text-[#f9fdfe]">the thinking.</span>
          </motion.p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
