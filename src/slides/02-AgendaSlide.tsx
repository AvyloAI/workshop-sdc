import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

const tracks = [
  { num: '01', label: 'Reality',       tag: 'How we got here' },
  { num: '02', label: 'Problem',       tag: 'What broke' },
  { num: '03', label: 'Shift',         tag: 'A new way of thinking' },
  { num: '04', label: 'Future',        tag: 'Where it goes' },
]

export default function AgendaSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-0 right-0" color="primary" size={400} opacity={0.04} />
      <GlowBlob className="bottom-0 left-0" color="secondary" size={350} opacity={0.03} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex gap-16 items-center">
        {/* Left label */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="shrink-0"
        >
          <p className="font-mono text-[13px] tracking-[0.25em] uppercase text-[#94a3b8] mb-3">
            Today's Journey
          </p>
          <h2
            className="font-sans font-bold leading-tight tracking-tight text-[#f9fdfe]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
          >
            Four
            <br />
            <span className="gradient-text">big ideas</span>
          </h2>
          <div className="mt-6 font-mono text-[13px] text-[#94a3b8]/70 tracking-wider">
            90 min · hands-on
          </div>
        </motion.div>

        {/* Track list */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col gap-2"
        >
          {tracks.map((t) => (
            <motion.div
              key={t.num}
              variants={fadeUp}
              className="flex items-center gap-4 glass rounded-xl px-5 py-3.5 border border-white/[0.05] group hover:border-primary/20 transition-colors duration-300"
            >
              <span className="font-mono text-[13px] text-primary/60 tracking-widest w-6 shrink-0">{t.num}</span>
              <span className="font-sans text-[#e2e8f0] font-medium flex-1"
                style={{ fontSize: 'clamp(16px, 1.5vw, 18px)' }}>
                {t.label}
              </span>
              <span className="font-mono text-[11px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full border border-white/10 text-[#94a3b8]">
                {t.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
