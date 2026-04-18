import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { fadeUp, heroEntrance, stagger } from '../lib/animations'

interface SlideProps { step: number }

const nodes = [
  { label: 'Input',         sub: 'Requests, events, data' },
  { label: 'Processing',    sub: 'Logic, transforms, rules' },
  { label: 'Storage',       sub: 'DB, cache, files' },
  { label: 'Communication', sub: 'APIs, queues, events' },
  { label: 'Failure',       sub: 'Timeouts, errors, retries' },
]

export default function MentalModelSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size={800} opacity={0.03} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex flex-col items-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-12">
          <motion.div variants={fadeUp} className="mb-4">
            <MonoLabel>Simple Mental Model</MonoLabel>
          </motion.div>
          <motion.h2
            variants={heroEntrance}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(26px, 3.8vw, 50px)' }}
          >
            Every system{' '}
            <span className="gradient-text">follows this model.</span>
          </motion.h2>
        </motion.div>

        {/* Node chain */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex items-stretch gap-0 w-full"
        >
          {nodes.map((node, i) => (
            <motion.div key={node.label} variants={fadeUp} className="flex items-stretch flex-1">
              <div className="flex-1 flex flex-col items-center gap-2 glass rounded-xl px-4 py-5 border border-white/[0.05]">
                <span
                  className="font-mono text-[10px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-full"
                  style={{ background: 'rgba(0,135,248,0.1)', color: '#0087f8' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p
                  className="font-sans font-bold text-[#f9fdfe] text-center leading-tight"
                  style={{ fontSize: 'clamp(13px, 1.3vw, 17px)' }}
                >
                  {node.label}
                </p>
                <p className="font-sans text-[#94a3b8] text-center text-[11px] leading-snug">
                  {node.sub}
                </p>
              </div>
              {i < nodes.length - 1 && (
                <div className="flex items-center px-1">
                  <span className="text-primary/40 text-lg">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-sans italic text-[#94a3b8] mt-10 text-center"
          style={{ fontSize: 'clamp(13px, 1.2vw, 16px)' }}
        >
          "Every system follows this model.{' '}
          <span className="text-[#f9fdfe]">AI can't see past step 2.</span>"
        </motion.p>
      </div>
    </SlideWrapper>
  )
}
