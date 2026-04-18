import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { fadeUp, stagger } from '../lib/animations'

interface SlideProps { step: number }

const insights = [
  { issue: 'DB under heavy reads',   fix: 'Cache helps — but adds invalidation complexity' },
  { issue: 'Cache invalidation',     fix: 'Stale data if not handled carefully' },
  { issue: 'No retry logic',         fix: 'Silent failures — hardest bugs to find' },
]

export default function MiniExampleSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-0 right-0" color="primary" size={400} opacity={0.04} />
      <GlowBlob className="bottom-0 left-0" color="secondary" size={350} opacity={0.03} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex gap-12 items-start">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="shrink-0 max-w-[240px] pt-2">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>Mini Example</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight mb-6"
            style={{ fontSize: 'clamp(22px, 3vw, 38px)' }}
          >
            Simple SaaS App
          </motion.h2>

          {/* Flow */}
          <motion.div variants={stagger} className="flex flex-col items-center gap-1">
            {['Users', 'API', 'DB', 'Cache'].map((node, i, arr) => (
              <motion.div key={node} variants={fadeUp} className="flex flex-col items-center gap-1">
                <div
                  className="w-full px-5 py-2.5 rounded-lg text-center font-sans font-semibold text-[#f9fdfe]"
                  style={{
                    background: 'rgba(0,135,248,0.1)',
                    border: '1px solid rgba(0,135,248,0.25)',
                    fontSize: 'clamp(13px, 1.2vw, 16px)',
                  }}
                >
                  {node}
                </div>
                {i < arr.length - 1 && (
                  <span className="text-primary/40 text-sm">↓</span>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] tracking-widest uppercase text-primary mt-6 text-center"
          >
            What breaks first?
          </motion.p>
        </motion.div>

        {/* Right — Insights */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex-1 pt-2"
        >
          <motion.p
            variants={fadeUp}
            className="font-sans font-light text-[#94a3b8] text-[14px] tracking-wide uppercase mb-6"
          >
            Walk through each layer:
          </motion.p>
          <div className="flex flex-col gap-4">
            {insights.map((item) => (
              <motion.div
                key={item.issue}
                variants={fadeUp}
                className="glass rounded-xl px-6 py-4 border border-white/[0.05]"
              >
                <p
                  className="font-sans font-semibold text-[#f9fdfe] mb-1"
                  style={{ fontSize: 'clamp(14px, 1.3vw, 17px)' }}
                >
                  {item.issue}
                </p>
                <p className="font-sans font-light text-[#94a3b8] text-[13px]">
                  {item.fix}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-8 px-6 py-4 rounded-xl border"
            style={{ background: 'rgba(0,135,248,0.06)', borderColor: 'rgba(0,135,248,0.2)' }}
          >
            <p
              className="font-sans font-light text-[#f9fdfe] leading-relaxed"
              style={{ fontSize: 'clamp(14px, 1.3vw, 17px)' }}
            >
              "Every system has a weakest link.{' '}
              <span className="text-primary font-semibold">Architecture means knowing which one it is</span>
              {' '}before users do."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
