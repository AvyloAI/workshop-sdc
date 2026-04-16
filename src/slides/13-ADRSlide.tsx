import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { heroEntrance, fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

export default function ADRSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 right-0 -translate-y-1/2" color="primary" size={450} opacity={0.05} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex gap-12 items-center">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="shrink-0 max-w-[260px]">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>Architecture Decision Records</MonoLabel>
          </motion.div>
          <motion.h2
            variants={heroEntrance}
            className="font-sans font-bold leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
          >
            Every decision
            <br />
            <span className="gradient-text">deserves a record.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-[#94a3b8] font-light text-[15px] leading-relaxed"
          >
            3 months from now, nobody will remember why you chose PostgreSQL over MongoDB.
            <br /><br />
            <span className="text-[#f9fdfe]">Write it down.</span>
          </motion.p>
        </motion.div>

        {/* Right — ADR Card */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex-1"
        >
          <motion.div
            variants={fadeUp}
            className="glass-strong rounded-2xl p-7 border border-white/[0.08] font-mono text-[14px]"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-primary tracking-widest uppercase text-[13px]">ADR-0007</span>
              <span className="px-2.5 py-1 rounded-full text-[11px] tracking-widest uppercase"
                style={{ background: 'rgba(0,135,248,0.1)', border: '1px solid rgba(0,135,248,0.25)', color: '#0087f8' }}>
                accepted
              </span>
            </div>

            <p className="text-[#f9fdfe] font-sans font-semibold text-[15px] mb-4">
              Use PostgreSQL as primary datastore
            </p>

            <div className="space-y-3">
              {[
                { label: 'Context', val: 'Need ACID transactions for billing flows' },
                { label: 'Decision', val: 'PostgreSQL with read replicas' },
                { label: 'Consequences', val: 'Strong consistency. No horizontal write scale.' },
              ].map(row => (
                <div key={row.label} className="grid grid-cols-[80px_1fr] gap-3">
                  <span className="text-[#94a3b8] tracking-wider text-[12px] uppercase pt-0.5">{row.label}</span>
                  <span className="text-[#e2e8f0] font-sans font-light text-[15px] leading-relaxed">{row.val}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center gap-3">
              <span className="text-[#94a3b8] text-[13px]">Decided by</span>
              <span className="text-[#f9fdfe] text-[13px]">Team · April 2025</span>
            </div>
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-4 font-mono text-[13px] tracking-widest uppercase text-[#94a3b8]/60 text-center"
          >
            Store in /docs/adr/ · commit with every major decision
          </motion.p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
