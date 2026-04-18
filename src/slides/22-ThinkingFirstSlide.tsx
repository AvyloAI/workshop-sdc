import { AnimatePresence, motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

const questions = [
  { num: '01', q: 'What are we building?',     hint: 'Purpose & scope' },
  { num: '02', q: 'What are the constraints?', hint: 'Scale, budget, team, time' },
  { num: '03', q: 'What can break?',           hint: 'Failure modes & edge cases' },
  { num: '04', q: 'What are the trade-offs?',  hint: 'Document them before you code' },
]

export default function ThinkingFirstSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-0 right-0" color="primary" size={400} opacity={0.04} />
      <GlowBlob className="bottom-0 left-0" color="secondary" size={350} opacity={0.03} />

      <div className="relative z-10 w-full max-w-4xl px-10 flex flex-col">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-10">
          <motion.div variants={fadeUp} className="mb-4">
            <MonoLabel>Think Before You Code</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(26px, 3.8vw, 50px)' }}
          >
            4 questions every engineer{' '}
            <span className="gradient-text">must answer</span>
            <br />
            before writing a line
          </motion.h2>
        </motion.div>

        <div className="flex flex-col gap-3 w-full">
          {questions.map((item, i) => (
            <AnimatePresence key={item.num}>
              {step >= i && (
                <motion.div
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex items-center gap-5 glass rounded-xl px-6 py-4 border border-white/[0.05]"
                >
                  <span className="font-mono text-[13px] text-primary/60 tracking-widest w-6 shrink-0">{item.num}</span>
                  <p
                    className="flex-1 font-sans font-semibold text-[#f9fdfe]"
                    style={{ fontSize: 'clamp(15px, 1.5vw, 20px)' }}
                  >
                    {item.q}
                  </p>
                  <span
                    className="font-mono text-[11px] tracking-widest uppercase px-3 py-1 rounded-full shrink-0"
                    style={{ background: 'rgba(0,135,248,0.08)', border: '1px solid rgba(0,135,248,0.2)', color: '#0087f8' }}
                  >
                    {item.hint}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {step >= questions.length && (
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="font-sans italic text-[#94a3b8] text-center mt-8"
            style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}
          >
            "This is what separates a builder from a systems thinker."
          </motion.p>
        )}
      </div>
    </SlideWrapper>
  )
}
