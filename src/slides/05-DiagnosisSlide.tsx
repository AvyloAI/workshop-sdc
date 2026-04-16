import { motion, AnimatePresence } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import { fadeUp, stagger, EASE } from '../lib/animations'

interface SlideProps { step: number }

const items = [
  {
    num: '01',
    title: 'Architecture became implicit',
    sub: 'Design decisions now emerge from prompts — not intent.',
  },
  {
    num: '02',
    title: 'Diagrams fell behind the code',
    sub: 'Your last diagram is already fiction.',
  },
  {
    num: '03',
    title: 'Scale became an afterthought',
    sub: '"We\'ll add scale later" — never ends well.',
  },
]

export default function DiagnosisSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="bottom-0 right-0" color="primary" size={500} opacity={0.05} />

      <div className="relative z-10 w-full max-w-4xl px-8 flex flex-col items-start">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-12">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>04 — Vibe Coding Diagnosis</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            What <span className="gradient-text">vibe coding</span> actually broke
          </motion.h2>
        </motion.div>

        <div className="w-full flex flex-col gap-px">
          {items.map((item, i) => (
            <AnimatePresence key={item.num}>
              {step > i && (
                <motion.div
                  initial={{ opacity: 0, x: -32 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="flex items-start gap-6 p-6 glass rounded-xl border border-white/[0.06]"
                >
                  <span className="font-mono text-[11px] tracking-widest text-primary pt-1 w-6 shrink-0">
                    {item.num}
                  </span>
                  <div>
                    <p
                      className="font-sans font-semibold text-[#f9fdfe] mb-1"
                      style={{ fontSize: 'clamp(16px, 1.8vw, 20px)' }}
                    >
                      {item.title}
                    </p>
                    <p className="font-sans text-[#94a3b8] font-light text-[14px]">
                      {item.sub}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
      </div>
    </SlideWrapper>
  )
}
