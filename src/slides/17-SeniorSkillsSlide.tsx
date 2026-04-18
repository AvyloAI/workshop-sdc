import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import GlowBlob from '../components/GlowBlob'
import { IconPencil, IconScale, IconTelescope } from '../components/Icons'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

const traits: { iconEl: ReactNode; label: string; sub: string }[] = [
  {
    iconEl: <IconTelescope size={24} color="#44c4f6" />,
    label: 'System thinking',
    sub: 'Sees the whole — not just the feature in front of them',
  },
  {
    iconEl: <IconScale size={24} color="#44c4f6" />,
    label: 'Trade-off ownership',
    sub: 'Knows what to sacrifice and can defend why',
  },
  {
    iconEl: <IconPencil size={24} color="#44c4f6" />,
    label: 'Decision ownership',
    sub: 'Writes the reasoning. Future engineers read it.',
  },
]

export default function SeniorSkillsSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-0 right-0" color="primary" size={500} opacity={0.05} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex gap-12 items-center">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="shrink-0 max-w-[260px]">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>Senior vs Junior in the AI Era</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
          >
            AI made juniors
            <br />
            <span className="gradient-text">faster.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-[#94a3b8] font-light text-[13px] leading-relaxed"
          >
            It didn't give them judgment.
          </motion.p>
        </motion.div>

        {/* Right */}
        <div className="flex-1 flex flex-col gap-3">
          {traits.map((t, i) => (
            <AnimatePresence key={t.label}>
              {step > i && (
                <motion.div
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="flex items-center gap-5 glass rounded-xl px-6 py-4 border border-white/[0.05]"
                >
                  <span className="shrink-0">{t.iconEl}</span>
                  <div className="flex-1">
                    <p className="font-sans font-semibold text-[#f9fdfe] mb-0.5 text-[17px]">{t.label}</p>
                    <p className="font-sans text-[#94a3b8] font-light text-[15px]">{t.sub}</p>
                  </div>
                  <div className="w-1.5 h-8 rounded-full shrink-0"
                    style={{ background: 'linear-gradient(180deg, #0087f8, #44c4f6)' }} />
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
