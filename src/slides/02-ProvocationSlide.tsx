import { motion, AnimatePresence } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import { fadeUp, stagger, EASE } from '../lib/animations'

interface SlideProps { step: number }

const stats = [
  { val: '68%', desc: 'of incidents trace back to architectural decisions made in the first sprint' },
  { val: '4×',  desc: 'more expensive to fix a structural flaw after launch' },
  { val: '~0',  desc: 'mainstream tools that help you think in systems — not just write code' },
]

export default function ProvocationSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" size={500} opacity={0.05} />

      <div className="relative z-10 w-full max-w-5xl px-8 flex flex-col items-center">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <MonoLabel>01 — The Provocation</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
          >
            Everyone is shipping faster.
            <br />
            <span className="text-[#0087f8]">Why are systems breaking more?</span>
          </motion.h2>
        </motion.div>

        {/* Stats — reveal one by one */}
        <div className="grid grid-cols-3 gap-px w-full max-w-3xl overflow-hidden rounded-xl border border-white/[0.07]">
          {stats.map((s, i) => (
            <AnimatePresence key={s.val}>
              {step > i && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="flex flex-col items-center text-center p-8 glass"
                >
                  <span
                    className="font-sans font-bold gradient-text mb-3 leading-none"
                    style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
                  >
                    {s.val}
                  </span>
                  <p className="font-sans text-[#94a3b8] font-light leading-relaxed"
                    style={{ fontSize: 'clamp(12px, 1.1vw, 14px)' }}>
                    {s.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
