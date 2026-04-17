import { AnimatePresence, motion } from 'framer-motion'
import type { ReactNode } from 'react'
import GlowBlob from '../components/GlowBlob'
import { IconExplosion, IconFile, IconGhost, IconWarning } from '../components/Icons'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

const breaks: { num: string; title: string; sub: string; iconEl: ReactNode }[] = [
  {
    num: '01',
    title: 'No one designed the system',
    sub: 'Decisions happened inside prompts, not heads.',
    iconEl: <IconGhost size={26} color="#44c4f6" />,
  },
  {
    num: '02',
    title: 'Documentation is already outdated',
    sub: 'The system evolved faster than anyone tracked.',
    iconEl: <IconFile size={26} color="#44c4f6" />,
  },
  {
    num: '03',
    title: 'Scale was never planned',
    sub: '"Works on my machine" became a production incident.',
    iconEl: <IconExplosion size={26} color="#44c4f6" />,
  },
  {
    num: '04',
    title: 'Responsibility shifted too early',
    sub: 'AI compressed the experience gap — not the judgment gap.',
    iconEl: <IconWarning size={26} color="#44c4f6" />,
  },
]

export default function WhatBreaksSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="bottom-0 right-0" color="primary" size={450} opacity={0.04} />

      <div className="relative z-10 w-full max-w-4xl px-10 flex flex-col">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-10">
          <motion.div variants={fadeUp} className="mb-4">
            <MonoLabel>What Actually Broke</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 50px)' }}
          >
            The <span className="gradient-text">diagnosis</span>
          </motion.h2>
        </motion.div>

        <div className="flex flex-col gap-2.5 w-full">
          {breaks.map((item, i) => (
            <AnimatePresence key={item.num}>
              {step > i && (
                <motion.div
                  initial={{ opacity: 0, x: -28 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="flex items-center gap-5 glass rounded-xl px-6 py-4 border border-white/[0.05]"
                >
                  <span className="shrink-0">{item.iconEl}</span>
                  <div className="flex-1">
                    <p className="font-sans font-semibold text-[#f9fdfe] mb-0.5"
                      style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}>
                      {item.title}
                    </p>
                    <p className="font-sans text-[#94a3b8] font-light text-[15px]">{item.sub}</p>
                  </div>
                  <span className="font-mono text-[13px] text-primary/50 tracking-widest shrink-0">{item.num}</span>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
