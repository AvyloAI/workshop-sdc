import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { fadeUp, heroEntrance, stagger } from '../lib/animations'

interface SlideProps { step: number }

export default function AIBlindSpotSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 right-0 -translate-y-1/2" color="primary" size={500} opacity={0.05} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex gap-14 items-center">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="flex-1">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>The AI Blind Spot</MonoLabel>
          </motion.div>
          <motion.h2
            variants={heroEntrance}
            className="font-sans font-bold leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            AI sees{' '}
            <span className="gradient-text">code.</span>
            <br />
            Not systems.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-[#94a3b8] font-light leading-relaxed"
            style={{ fontSize: 'clamp(13px, 1.3vw, 16px)' }}
          >
            It optimizes the function in front of it.
            <br />
            Ask it to design for{' '}
            <span className="text-[#f9fdfe]">10,000 concurrent users</span>{' '}
            and it won't warn you what breaks.
          </motion.p>
        </motion.div>

        {/* Right — what AI misses */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col gap-3"
        >
          {[
            { label: 'Race conditions under load' },
            { label: 'Cascading failure modes' },
            { label: 'Data consistency guarantees' },
            { label: 'Latency at the 99th percentile' },
            { label: 'Operational runbooks' },
            { label: 'Cost at scale' },
          ].map((item) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="flex items-center gap-3 px-4 py-3 glass rounded-lg border border-white/[0.05]"
            >
              <span className="text-[#94a3b8]/50 text-sm">✕</span>
              <span className="font-sans text-[#94a3b8] font-light text-[14px]">{item.label}</span>
            </motion.div>
          ))}
          <motion.p
            variants={fadeUp}
            className="font-mono text-[10px] tracking-widest uppercase text-primary/50 mt-2 text-center"
          >
            ↑ AI doesn't warn you about any of this
          </motion.p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
