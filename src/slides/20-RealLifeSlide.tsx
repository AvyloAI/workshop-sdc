import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { fadeUp, heroEntrance, stagger } from '../lib/animations'

interface SlideProps { step: number }

const bullets = [
  'Add a feature → something breaks',
  'Scale → system collapses',
  'Debug → no one understands the code',
]

export default function RealLifeSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 left-1/4 -translate-y-1/2" color="secondary" size={600} opacity={0.04} />

      <div className="relative z-10 w-full max-w-4xl px-10 flex flex-col items-center text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-6">
            <MonoLabel>Real Life</MonoLabel>
          </motion.div>

          <motion.h2
            variants={heroEntrance}
            className="font-sans font-bold leading-tight tracking-tight mb-8"
            style={{ fontSize: 'clamp(32px, 5vw, 68px)' }}
          >
            Everything works…
            <br />
            <span className="gradient-text">until it doesn't.</span>
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="w-16 h-[1px] mx-auto mb-10"
            style={{ background: 'linear-gradient(90deg, transparent, #0087f8, transparent)' }}
          />

          <motion.div variants={stagger} className="flex flex-col gap-4 text-left max-w-lg mx-auto">
            {bullets.map((b) => (
              <motion.div
                key={b}
                variants={fadeUp}
                className="flex items-start gap-4 px-5 py-3 glass rounded-xl border border-white/[0.05]"
              >
                <span className="text-primary/60 mt-0.5 shrink-0">→</span>
                <span
                  className="font-sans font-light text-[#f9fdfe] leading-relaxed"
                  style={{ fontSize: 'clamp(15px, 1.4vw, 19px)' }}
                >
                  {b}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-sans italic text-[#94a3b8] mt-10 leading-relaxed"
            style={{ fontSize: 'clamp(14px, 1.3vw, 17px)' }}
          >
            "You're afraid to touch the code…<br />
            because you don't know what breaks."
          </motion.p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
