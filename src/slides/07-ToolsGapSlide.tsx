import { motion, AnimatePresence } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import { fadeUp, stagger, EASE } from '../lib/animations'

interface SlideProps { step: number }

const haveItems = ['Code — Copilot, Cursor, Claude', 'Deployment — Vercel, Railway', 'Monitoring — Datadog, Sentry']
const missingItems = ['Thinking in systems', 'Trade-off analysis', 'Architectural evolution']

export default function ToolsGapSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="-top-20 left-0" color="primary" size={400} opacity={0.05} />
      <GlowBlob className="bottom-0 right-0" color="secondary" size={350} opacity={0.04} />

      <div className="relative z-10 w-full max-w-5xl px-8 flex flex-col items-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-14">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>06 — Tools Gap</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Tools for everything
            <br />
            <span className="text-[#94a3b8] font-light">except thinking in systems</span>
          </motion.h2>
        </motion.div>

        <div className="w-full grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/[0.07]">
          {/* Have */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="glass p-8"
              >
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-emerald-400 mb-6">We Have</p>
                <ul className="space-y-3">
                  {haveItems.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-emerald-400 mt-0.5 text-sm">✓</span>
                      <span className="font-sans text-[#f9fdfe] font-light text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Missing */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="p-8"
                style={{ background: 'rgba(0,135,248,0.04)' }}
              >
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#0087f8] mb-6">We're Missing</p>
                <ul className="space-y-3">
                  {missingItems.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-[#0087f8] mt-0.5 text-sm">?</span>
                      <span className="font-sans text-[#f9fdfe] font-semibold text-[15px]">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SlideWrapper>
  )
}
