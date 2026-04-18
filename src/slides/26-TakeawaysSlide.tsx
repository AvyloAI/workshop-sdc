import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { fadeUp, heroEntrance, stagger } from '../lib/animations'

interface SlideProps { step: number }

const takeaways = [
  { num: '01', text: 'Think before you code' },
  { num: '02', text: 'Decisions matter more than speed' },
  { num: '03', text: 'Systems > features' },
  { num: '04', text: 'AI is a tool — not a brain' },
]

export default function TakeawaysSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size={900} opacity={0.04} />

      <div className="relative z-10 w-full max-w-3xl px-10 flex flex-col items-center text-center">
        <motion.div variants={stagger} initial="hidden" animate="visible">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>What to Remember</MonoLabel>
          </motion.div>

          <motion.h2
            variants={heroEntrance}
            className="font-sans font-bold leading-tight tracking-tight mb-12"
            style={{ fontSize: 'clamp(28px, 4.5vw, 58px)' }}
          >
            Take these{' '}
            <span className="gradient-text">with you.</span>
          </motion.h2>

          <motion.div variants={stagger} className="flex flex-col gap-4 text-left w-full">
            {takeaways.map((item) => (
              <motion.div
                key={item.num}
                variants={fadeUp}
                className="flex items-center gap-6 glass rounded-xl px-7 py-5 border border-white/[0.07]"
              >
                <span
                  className="font-mono text-[13px] tracking-widest shrink-0"
                  style={{ color: 'rgba(0,135,248,0.6)' }}
                >
                  {item.num}
                </span>
                <p
                  className="font-sans font-semibold text-[#f9fdfe]"
                  style={{ fontSize: 'clamp(17px, 1.7vw, 23px)' }}
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
