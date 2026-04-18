import { AnimatePresence, motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

const stats = [
  { val: '10×', label: 'Faster to scaffold a full-stack app with AI' },
  { val: '68%', label: 'Of incidents trace back to sprint-one architecture decisions' },
]

export default function SpeedParadoxSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-0 left-0" color="primary" size={500} opacity={0.06} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex flex-col items-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-14">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>The Speed Paradox</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 4.5vw, 60px)' }}
          >
            We build{' '}
            <span className="gradient-text">faster</span>
            {' '}than ever.
            <br />
            <span className="text-[#94a3b8] font-light">We break faster than ever.</span>
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-px w-full max-w-2xl overflow-hidden rounded-2xl border border-white/[0.07]">
          {stats.map((s, i) => (
            <AnimatePresence key={s.val}>
              {step >= i && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="flex flex-col items-center text-center p-8 glass"
                >
                  <span
                    className="font-sans font-bold gradient-text mb-3"
                    style={{ fontSize: 'clamp(48px, 5.5vw, 72px)', lineHeight: 1 }}
                  >
                    {s.val}
                  </span>
                  <p className="font-sans text-[#94a3b8] font-light leading-relaxed"
                    style={{ fontSize: 'clamp(13px, 1.1vw, 15px)' }}>
                    {s.label}
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
