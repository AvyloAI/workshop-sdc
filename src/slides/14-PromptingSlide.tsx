import { AnimatePresence, motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

const prompts = [
  {
    bad: '❌  "Build me a SaaS backend"',
    good: '✓  "I need an API for 10k users/day. Auth via JWT, Postgres DB, scale-out later. What architecture fits?"',
  },
  {
    bad: '❌  "Create a notification system"',
    good: '✓  "Real-time notifications, 5M users, 99.9% uptime required. Event-driven or polling? Trade-offs?"',
  },
  {
    bad: '❌  "Add caching"',
    good: '✓  "Cache layer between API and DB. Read-heavy workload. Redis vs in-memory? Invalidation strategy?"',
  },
]

export default function PromptingSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="bottom-0 right-0" color="primary" size={450} opacity={0.04} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex flex-col">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-10">
          <motion.div variants={fadeUp} className="mb-4">
            <MonoLabel>Prompting for Architecture</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}
          >
            Better context
            <br />
            <span className="gradient-text">→ better architecture</span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-col gap-4">
          {prompts.map((p, i) => (
            <AnimatePresence key={i}>
              {step > i && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="glass rounded-xl p-5 border border-white/[0.05]"
                >
                  <p className="font-sans text-[#94a3b8] font-light text-[14px] mb-2 line-through opacity-70">{p.bad}</p>
                  <p className="font-sans text-[#f9fdfe] font-light text-[15px] leading-relaxed"
                    style={{ borderLeft: '2px solid #0087f8', paddingLeft: '12px' }}>
                    {p.good}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        <AnimatePresence>
          {step >= 3 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-6 font-mono text-[13px] tracking-widest uppercase text-primary/60 text-center"
            >
              Constraints + Context + Consequences = better AI output
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </SlideWrapper>
  )
}
