import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { fadeUp, heroEntrance, stagger } from '../lib/animations'

interface SlideProps { step: number }

export default function FutureSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size={900} opacity={0.05} />

      {/* Grid lines subtle */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'radial-gradient(circle, rgba(0,135,248,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center max-w-4xl px-10"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <MonoLabel>The Future of Software Architecture</MonoLabel>
        </motion.div>

        <motion.h2
          variants={heroEntrance}
          className="font-sans font-bold leading-tight tracking-tight mb-6"
          style={{ fontSize: 'clamp(32px, 5vw, 68px)' }}
        >
          Architecture becomes
          <br />
          <span className="gradient-text">continuous.</span>
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="font-sans text-[#94a3b8] font-light mb-10"
          style={{ fontSize: 'clamp(14px, 1.5vw, 18px)' }}
        >
          Not a phase.{' '}
          <span className="text-[#f9fdfe]">A constant.</span>
        </motion.p>

        <motion.div
          variants={stagger}
          className="grid grid-cols-3 gap-4 w-full"
        >
          {[
            { icon: '◉', label: 'Living Systems',        desc: 'Diagrams that update as code changes' },
            { icon: '⟳', label: 'Real-time Decisions',   desc: 'Trade-offs surfaced as you build' },
            { icon: '❆', label: 'AI Co-architect',       desc: 'Your thinking partner, not your replacement' },
          ].map(item => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              className="glass rounded-xl p-5 flex flex-col items-center text-center border border-white/[0.05]"
            >
              <span
                className="text-2xl mb-3 w-10 h-10 rounded-lg flex items-center justify-center"
                style={{ background: 'rgba(0,135,248,0.1)', border: '1px solid rgba(0,135,248,0.2)' }}
              >
                {item.icon}
              </span>
              <p className="font-sans font-semibold text-[#f9fdfe] text-[16px] mb-1">{item.label}</p>
              <p className="font-sans text-[#94a3b8] font-light text-[14px]">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </SlideWrapper>
  )
}
