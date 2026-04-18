import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { fadeUp, heroEntrance, stagger } from '../lib/animations'

interface SlideProps { step: number }

export default function WorkshopExerciseSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-0 right-0" color="secondary" size={400} opacity={0.05} />
      <GlowBlob className="bottom-0 left-0" color="primary" size={400} opacity={0.04} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex gap-12 items-start">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="shrink-0 max-w-[260px] pt-4">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>Take-Home Exercise</MonoLabel>
          </motion.div>
          <motion.h2
            variants={heroEntrance}
            className="font-sans font-bold leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}
          >
            Design a system.
            <br />
            <span className="gradient-text">Make decisions.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
              className="font-sans text-[#94a3b8] font-light text-[15px] leading-relaxed"
          >
            Apply today's framework.
            <br />
            Any system. One hour.
            <br />
            Write one ADR.
          </motion.p>
        </motion.div>

        {/* Right — Exercise card */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex-1"
        >
          <motion.div
            variants={fadeUp}
            className="glass-strong rounded-2xl p-7 border border-white/[0.08]"
          >
            <div className="flex items-center gap-3 mb-6">
              <span
                className="font-mono text-[13px] tracking-widest uppercase px-3 py-1.5 rounded-full"
                style={{ background: 'rgba(0,135,248,0.12)', border: '1px solid rgba(0,135,248,0.3)', color: '#0087f8' }}
              >
                Exercise
              </span>
            </div>

            <p className="font-sans font-bold text-[#f9fdfe] text-[18px] mb-6">
              Design a URL shortener at 1M requests/day
            </p>

            <div className="space-y-4">
              {[
                { step: '01', label: 'Define',      q: 'What are the 3 non-negotiable requirements?' },
                { step: '02', label: 'Constrain',   q: 'Scale? Read/write ratio? SLO? Team size?' },
                { step: '03', label: 'Decide',      q: 'Monolith or services? Which DB? CDN?' },
                { step: '04', label: 'Write an ADR', q: 'Document your biggest trade-off.' },
              ].map(row => (
                <div key={row.step} className="flex gap-4 items-start">
                  <span
                    className="font-mono text-[13px] tracking-widest w-6 shrink-0 mt-1"
                    style={{ color: '#0087f8' }}
                  >{row.step}</span>
                  <div>
                    <span className="font-sans font-semibold text-[#f9fdfe] text-[15px]">{row.label} — </span>
                    <span className="font-sans text-[#94a3b8] font-light text-[15px]">{row.q}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-5 border-t border-white/[0.06]">
              <p className="font-mono text-[13px] tracking-widest text-primary/60 uppercase">
                Share your ADR with the community → AvyloAi.com/community
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
