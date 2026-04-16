import { motion } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import GlowBlob from '../components/GlowBlob'
import { stagger, fadeUp, heroEntrance } from '../lib/animations'

interface SlideProps { step: number }

export default function GapSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size={700} opacity={0.05} />

      {/* Horizontal accent lines */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-[190px] pointer-events-none">
        {[0, 1].map(i => (
          <div key={i} className="w-full max-w-xs h-px" style={{ background: 'linear-gradient(90deg, transparent, rgba(0,135,248,0.25), transparent)' }} />
        ))}
      </div>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-12 max-w-3xl"
      >
        <motion.p
          variants={fadeUp}
          className="font-mono text-[11px] tracking-[0.25em] uppercase text-[#94a3b8] mb-10"
        >
          09 — The Real Gap
        </motion.p>

        <motion.h2
          variants={heroEntrance}
          className="font-sans font-bold leading-tight tracking-tight mb-6"
          style={{ fontSize: 'clamp(36px, 5vw, 68px)' }}
        >
          We don't lack
          <br />
          <span className="text-[#94a3b8] font-light">tools.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-sans font-light text-[#94a3b8] mb-6"
          style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}
        >
          We lack{' '}
          <span className="gradient-text font-semibold">structured thinking.</span>
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex items-center gap-3 mt-4 text-[#94a3b8]/50 font-mono text-[12px] tracking-widest uppercase"
        >
          <span>Architectural intuition</span>
          <span>·</span>
          <span>is the new senior skill</span>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  )
}
