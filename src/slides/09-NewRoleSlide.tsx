import { motion, AnimatePresence } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import { fadeUp, stagger, EASE } from '../lib/animations'

interface SlideProps { step: number }

const roles = [
  { icon: '🧠', label: 'Think in systems', desc: 'See the whole, not just the feature.' },
  { icon: '⚖️', label: 'Make decisions',   desc: 'Own the trade-offs AI won\'t surface.' },
  { icon: '🎯', label: 'Guide AI',          desc: 'Set direction. Verify output. Iterate.' },
]

export default function NewRoleSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="-bottom-40 left-0" color="primary" size={500} opacity={0.05} />

      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col items-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-14">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>08 — New Role</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            Engineers must now
            <br />
            <span className="gradient-text">be the architect.</span>
          </motion.h2>
        </motion.div>

        <div className="w-full flex flex-col gap-3">
          {roles.map((role, i) => (
            <AnimatePresence key={role.label}>
              {step > i && (
                <motion.div
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="flex items-center gap-6 glass rounded-xl px-7 py-5 border border-white/[0.06] group"
                >
                  <span className="text-3xl">{role.icon}</span>
                  <div>
                    <p
                      className="font-sans font-semibold text-[#f9fdfe] mb-0.5"
                      style={{ fontSize: 'clamp(16px, 1.8vw, 20px)' }}
                    >
                      {role.label}
                    </p>
                    <p className="font-sans text-[#94a3b8] font-light text-[14px]">
                      {role.desc}
                    </p>
                  </div>
                  <div className="ml-auto w-1.5 h-8 rounded-full" style={{ background: 'linear-gradient(180deg, #0087f8, #44c4f6)' }} />
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
