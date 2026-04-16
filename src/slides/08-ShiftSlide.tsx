import { motion, AnimatePresence } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import { fadeUp, stagger, EASE } from '../lib/animations'

interface SlideProps { step: number }

export default function ShiftSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/4 right-0" color="primary" size={500} opacity={0.05} />

      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-16">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>07 — The Shift</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            How we build has changed.
          </motion.h2>
        </motion.div>

        <div className="w-full flex items-center justify-center gap-px max-w-3xl">
          {/* Old */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex-1 glass rounded-2xl p-8 flex flex-col items-center gap-4"
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#94a3b8]">Old</span>
                <div className="flex flex-col items-center gap-2 text-[#f9fdfe]"
                  style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
                  <span className="font-semibold">Design</span>
                  <span className="text-[#94a3b8] text-xl">↓</span>
                  <span className="font-semibold">Build</span>
                </div>
                <p className="font-mono text-[11px] tracking-wider text-[#94a3b8] uppercase">Structure first</p>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Arrow */}
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="px-4 text-[#0087f8] text-2xl select-none"
              >
                →
              </motion.div>
            )}
          </AnimatePresence>

          {/* New */}
          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="flex-1 rounded-2xl p-8 flex flex-col items-center gap-4 gradient-border"
                style={{ background: 'rgba(0,135,248,0.06)' }}
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#0087f8]">Now</span>
                <div className="flex flex-col items-center gap-2"
                  style={{ fontSize: 'clamp(18px, 2vw, 24px)' }}>
                  <span className="font-semibold gradient-text">Generate</span>
                  <span className="text-[#94a3b8] text-xl">↓</span>
                  <span className="font-semibold gradient-text">Ship</span>
                  <span className="text-[#94a3b8] text-xl">↓</span>
                  <span className="font-semibold text-[#94a3b8]">Fix</span>
                </div>
                <p className="font-mono text-[11px] tracking-wider text-[#0087f8] uppercase">Speed first</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SlideWrapper>
  )
}
