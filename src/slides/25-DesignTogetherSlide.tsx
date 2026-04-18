import { AnimatePresence, motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, heroEntrance, stagger } from '../lib/animations'

interface SlideProps { step: number }

const decisions = [
  { 
    q: 'Where do we store URLs?',
    tag: 'Storage decision',
    answer: 'PostgreSQL + Redis cache. Need ACID for consistency, Redis for speed.',
    lookFor: '✓ Mentions database + cache / ✓ Considers read/write tradeoff'
  },
  { 
    q: 'How do we generate short IDs?',
    tag: 'Algorithm decision',
    answer: 'Auto-increment ID + base62 encoding. Fast, collision-free, URL-safe.',
    lookFor: '✓ Mentions uniqueness / ✓ Considers URL-safe characters'
  },
  { 
    q: 'What happens at scale?',
    tag: 'Failure decision',
    answer: 'Database becomes bottleneck. Solution: sharding by ID prefix or region.',
    lookFor: '✓ Identifies the failure mode / ✓ Proposes a solution'
  },
  { 
    q: 'Read-heavy or write-heavy?',
    tag: 'Pattern decision',
    answer: 'Read-heavy (100:1 ratio). Use cache + CDN. Writes go to primary DB.',
    lookFor: '✓ Recognizes read dominance / ✓ Suggests caching strategy'
  },
]

export default function DesignTogetherSlide({ step }: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-0 left-1/4" color="secondary" size={450} opacity={0.04} />
      <GlowBlob className="bottom-0 right-0" color="primary" size={400} opacity={0.04} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex gap-12 items-start">
        {/* Left */}
        <motion.div variants={stagger} initial="hidden" animate="visible" className="shrink-0 max-w-[280px] pt-2">
          <motion.div variants={fadeUp} className="mb-5">
            <MonoLabel>Let's Design Together</MonoLabel>
          </motion.div>
          <motion.h2
            variants={heroEntrance}
            className="font-sans font-bold leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(22px, 3vw, 40px)' }}
          >
            URL Shortener
            <br />
            <span className="gradient-text">at 1M req/day</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-sans text-[#94a3b8] font-light text-[14px] leading-relaxed"
          >
            Answer these questions{' '}
            <span className="text-[#f9fdfe]">live</span>.
            <br />
            <span className="text-[#f9fdfe] font-semibold">Step through</span> to see answers.
          </motion.p>

          <AnimatePresence>
            {step >= 4 && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="mt-8 px-4 py-3 rounded-lg"
                style={{ background: 'rgba(0,135,248,0.08)', border: '1px solid rgba(0,135,248,0.2)' }}
              >
                <p className="font-mono text-[11px] tracking-widest uppercase text-primary/80 mb-1">Killer question</p>
                <p className="font-sans text-[#f9fdfe] text-[13px] leading-snug mb-3">
                  What breaks first if traffic goes 10×?
                </p>
                <p className="font-sans text-[#44c4f6] font-light text-[12px] leading-snug">
                  💡 Database sharding limit or cache invalidation race conditions.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Right — Questions with Answer Reveals */}
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="flex-1 pt-2 flex flex-col gap-3"
        >
          {decisions.map((item, i) => (
            <motion.div key={item.q} variants={fadeUp}>
              <motion.div
                className="flex items-center gap-5 glass rounded-xl px-6 py-4 border border-white/[0.05]"
              >
                <span className="font-mono text-[13px] text-primary/50 w-5 shrink-0">{i + 1}</span>
                <p
                  className="flex-1 font-sans font-semibold text-[#f9fdfe]"
                  style={{ fontSize: 'clamp(14px, 1.4vw, 18px)' }}
                >
                  {item.q}
                </p>
                <span
                  className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full shrink-0"
                  style={{ background: 'rgba(68,196,246,0.08)', border: '1px solid rgba(68,196,246,0.2)', color: '#44c4f6' }}
                >
                  {item.tag}
                </span>
              </motion.div>

              {/* Answer Reveal on Step */}
              <AnimatePresence>
                {step > i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4, ease: EASE }}
                    className="mt-2 ml-5 pl-4 border-l-2"
                    style={{ borderColor: 'rgba(68,196,246,0.4)' }}
                  >
                    <p className="font-sans text-[#44c4f6] font-light text-[13px] mb-2">
                      ✓ {item.answer}
                    </p>
                    <p className="font-mono text-[11px] tracking-wider text-[#94a3b8]/60 italic">
                      Look for: {item.lookFor}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}

          <motion.p
            variants={fadeUp}
            className="font-mono text-[11px] tracking-widest uppercase text-[#94a3b8]/40 mt-3 text-center"
          >
            No single right answer — only documented decisions.
          </motion.p>
        </motion.div>
      </div>
    </SlideWrapper>
  )
}
