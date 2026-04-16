import { motion, AnimatePresence } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

export default function StillManualSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-0 left-1/2 -translate-x-1/2" color="secondary" size={500} opacity={0.05} />

      <div className="relative z-10 w-full max-w-4xl px-10 flex flex-col items-center text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-12">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>Are Engineers Still Doing It Manually?</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(30px, 4.5vw, 58px)' }}
          >
            Mostly{' '}
            <span className="gradient-text">yes.</span>
            <br />
            <span className="text-[#94a3b8] font-light">And that's the problem.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-px w-full max-w-3xl overflow-hidden rounded-2xl border border-white/[0.07]">
          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="glass p-8 flex flex-col items-center text-center gap-4"
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-[#94a3b8]">Old way</span>
                <p className="font-sans font-semibold text-[#f9fdfe]"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
                  Whiteboard + Lucidchart
                </p>
                <div className="flex flex-col gap-1.5 w-full">
                  {['Draw.io diagrams', 'RFC documents', 'Architecture committee', 'Static PowerPoints'].map(t => (
                    <div key={t} className="font-sans text-[#94a3b8] font-light text-[12px] py-1 border-b border-white/[0.04] last:border-0">{t}</div>
                  ))}
                </div>
                <span className="font-mono text-[10px] tracking-widest text-[#94a3b8]/50 uppercase">Slow. Disconnected. Manual.</span>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {step >= 2 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="p-8 flex flex-col items-center text-center gap-4"
                style={{ background: 'rgba(0,135,248,0.05)' }}
              >
                <span className="font-mono text-[10px] tracking-widest uppercase text-primary">What's needed</span>
                <p className="font-sans font-semibold gradient-text"
                  style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}>
                  AI-assisted thinking
                </p>
                <div className="flex flex-col gap-1.5 w-full">
                  {['Conversational design', 'Living diagrams', 'Trade-off analysis', 'Contextual patterns'].map(t => (
                    <div key={t} className="font-sans text-[#f9fdfe] font-light text-[12px] py-1 border-b border-white/[0.04] last:border-0">{t}</div>
                  ))}
                </div>
                <span className="font-mono text-[10px] tracking-widest text-primary/60 uppercase">Fast. Continuous. Human-directed.</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </SlideWrapper>
  )
}
