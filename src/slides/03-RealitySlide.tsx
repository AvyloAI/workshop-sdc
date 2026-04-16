import { motion, AnimatePresence } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import { fadeUp, stagger, EASE } from '../lib/animations'

interface SlideProps { step: number }

export default function RealitySlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="-top-20 right-0" color="secondary" size={500} opacity={0.05} />

      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-16">
          <motion.div variants={fadeUp} className="mb-6">
            <MonoLabel>02 — Reality</MonoLabel>
          </motion.div>
        </motion.div>

        <div className="w-full flex flex-col items-center gap-6">
          {/* Line 1 — always visible */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="flex items-center gap-4 glass rounded-2xl px-10 py-7 w-full max-w-2xl"
          >
            <span className="text-3xl">🤖</span>
            <p
              className="font-sans font-semibold text-[#f9fdfe] tracking-tight"
              style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}
            >
              AI can generate full applications.
            </p>
          </motion.div>

          {/* Divider arrow */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="text-[#94a3b8] text-2xl"
              >
                ↓
              </motion.div>
            )}
          </AnimatePresence>

          {/* Line 2 — step 1 */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="flex items-center gap-4 gradient-border px-10 py-7 w-full max-w-2xl"
                style={{
                  background: 'rgba(0,135,248,0.06)',
                  borderRadius: '1rem',
                }}
              >
                <span className="text-3xl">🧠</span>
                <p
                  className="font-sans font-semibold gradient-text tracking-tight"
                  style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}
                >
                  But it does not design systems.
                </p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Step 2 — consequence */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, ease: EASE }}
                className="font-mono text-[#94a3b8] text-[13px] tracking-widest uppercase mt-4"
              >
                Speed ≠ Structure
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SlideWrapper>
  )
}
