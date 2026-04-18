import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import GlowBlob from '../components/GlowBlob'
import { IconEye, IconGrid, IconLock, IconRefresh, IconUpArrow } from '../components/Icons'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

const pillars: { num: string; name: string; iconEl: ReactNode; desc: string }[] = [
  { num: '01', name: 'Scalability',     iconEl: <IconUpArrow size={20} color="#44c4f6" />, desc: 'Scales without a rewrite' },
  { num: '02', name: 'Reliability',     iconEl: <IconRefresh size={20} color="#44c4f6" />, desc: 'Fails safely. Recovers fast.' },
  { num: '03', name: 'Maintainability', iconEl: <IconGrid size={20} color="#44c4f6" />,    desc: 'Easy to understand. Easy to change.' },
  { num: '04', name: 'Security',        iconEl: <IconLock size={20} color="#44c4f6" />,    desc: 'Secure by design, not by patch' },
  { num: '05', name: 'Observability',   iconEl: <IconEye size={20} color="#44c4f6" />,     desc: 'You know what\'s wrong before users do' },
]

export default function FivePillarsSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-0 right-0" color="primary" size={400} opacity={0.05} />
      <GlowBlob className="bottom-0 left-0" color="secondary" size={350} opacity={0.03} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex gap-12 items-center">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="shrink-0 max-w-[240px]">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>5 Things That Never Change</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(26px, 3vw, 42px)' }}
          >
            Things that{' '}
            <span className="gradient-text">never change</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-[#94a3b8] font-light text-[15px] mt-4 leading-relaxed"
          >
            AI changes speed.
            <br />These decide survival.
          </motion.p>
        </motion.div>

        {/* Right - pillars */}
        <div className="flex-1 flex flex-col gap-2.5">
          {pillars.map((p, i) => (
            <AnimatePresence key={p.num}>
              {step > i && (
                <motion.div
                  initial={{ opacity: 0, x: 28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="flex items-center gap-5 glass rounded-xl px-6 py-4 border border-white/[0.05]"
                >
                  <div
                    className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(0,135,248,0.1)', border: '1px solid rgba(0,135,248,0.25)' }}
                  >
                    {p.iconEl}
                  </div>
                  <div className="flex-1">
                    <p className="font-sans font-semibold text-[#f9fdfe] text-[17px]">{p.name}</p>
                    <p className="font-sans text-[#94a3b8] font-light text-[15px]">{p.desc}</p>
                  </div>
                  <span className="font-mono text-[13px] text-primary/50 tracking-widest">{p.num}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
