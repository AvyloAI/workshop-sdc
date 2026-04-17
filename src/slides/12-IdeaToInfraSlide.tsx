import { AnimatePresence, motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

const steps = [
  {
    num: '01',
    phase: 'Idea',
    detail: 'What problem? Who needs it? What must never fail?',
    icon: '◎',
  },
  {
    num: '02',
    phase: 'Constraints',
    detail: 'Scale? Budget? Team? Compliance? Latency?',
    icon: '⊞',
  },
  {
    num: '03',
    phase: 'Architecture',
    detail: 'Choose patterns. Document trade-offs. Write ADRs.',
    icon: '⟐',
  },
  {
    num: '04',
    phase: 'Code',
    detail: 'Now write — or prompt AI to write.',
    icon: '⚡',
  },
]

export default function IdeaToInfraSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-0 right-0" color="secondary" size={400} opacity={0.04} />
      <GlowBlob className="bottom-0 left-0" color="primary" size={450} opacity={0.04} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex flex-col items-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-12">
          <motion.div variants={fadeUp} className="mb-4">
            <MonoLabel>From Idea to Infrastructure</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Before you write{' '}
            <span className="gradient-text">a single line</span>
          </motion.h2>
        </motion.div>

        {/* Step flow */}
        <div className="w-full flex items-stretch gap-2">
          {steps.map((s, i) => (
            <AnimatePresence key={s.num}>
              {step > i && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 16 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex-1 flex flex-col glass rounded-xl p-5 border border-white/[0.06]"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-[13px] tracking-widest text-primary/60">{s.num}</span>
                    <span
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-[16px]"
                      style={{ background: 'rgba(0,135,248,0.1)', border: '1px solid rgba(0,135,248,0.2)' }}
                    >
                      {s.icon}
                    </span>
                  </div>
                  <p className="font-sans font-bold text-[#f9fdfe] mb-2"
                    style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
                    {s.phase}
                  </p>
                  <p className="font-sans text-[#94a3b8] font-light text-[15px] leading-relaxed flex-1">
                    {s.detail}
                  </p>
                </motion.div>
              )}

              {/* Arrow between steps */}
              {step > i && i < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  className="flex items-center shrink-0 text-primary/40 text-lg"
                >
                  →
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        <AnimatePresence>
          {step >= 4 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="mt-8 font-mono text-[13px] tracking-widest uppercase text-primary/60"
            >
              AI owns step 4. Only humans can own steps 1–3.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </SlideWrapper>
  )
}
