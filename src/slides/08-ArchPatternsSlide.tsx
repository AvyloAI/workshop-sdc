import { AnimatePresence, motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'
import { useTheme } from '../lib/theme'

interface SlideProps { step: number }

const patterns = [
  {
    label: 'Monolith',
    tag: '2000s',
    desc: 'One codebase. Simple to start. Hard to scale.',
    icon: '▪',
    col: '#94a3b8',
  },
  {
    label: 'Microservices',
    tag: '2015+',
    desc: 'Independent services. Scalable. Operationally complex.',
    icon: '◈',
    col: '#0087f8',
  },
  {
    label: 'AI Era',
    tag: 'Now',
    desc: 'AI writes code. No one designs the system. Complexity explodes.',
    icon: '✶',
    col: '#44c4f6',
  },
]

export default function ArchPatternsSlide({ step }: SlideProps) {
  const { theme } = useTheme()
  const resolvedPatterns = patterns.map(p =>
    p.col === '#94a3b8' ? { ...p, col: theme === 'light' ? '#475569' : '#94a3b8' } : p
  )
  return (
    <SlideWrapper>
      <GlowBlob className="-bottom-40 left-1/2 -translate-x-1/2" color="primary" size={600} opacity={0.04} />

      <div className="relative z-10 w-full max-w-5xl px-10 flex flex-col items-center">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="text-center mb-12">
          <motion.div variants={fadeUp} className="mb-4">
            <MonoLabel>Architecture Patterns</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}
          >
            The evolution
            <br />
            <span className="text-[#94a3b8] font-light">that led us here</span>
          </motion.h2>
        </motion.div>

        {/* Pattern cards */}
        <div className="grid grid-cols-3 gap-4 w-full">
          {resolvedPatterns.map((p, i) => (
            <AnimatePresence key={p.label}>
              {step >= i && (
                <motion.div
                  initial={{ opacity: 0, y: 28, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, ease: EASE }}
                  className="glass rounded-2xl p-6 flex flex-col border border-white/[0.06]"
                >
                  <div className="flex items-center justify-between mb-5">
                    <span style={{ color: p.col, fontSize: '28px' }}>{p.icon}</span>
                    <span className="font-mono text-[13px] tracking-widest uppercase px-2.5 py-1 rounded-full border"
                      style={{ color: p.col, borderColor: `${p.col}30` }}>
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="font-sans font-bold text-[#f9fdfe] mb-2"
                    style={{ fontSize: 'clamp(18px, 1.8vw, 24px)' }}>
                    {p.label}
                  </h3>
                  <p className="font-sans text-[#94a3b8] font-light text-[15px] leading-relaxed flex-1">
                    {p.desc}
                  </p>

                  {/* Visual representation */}
                  {p.label === 'Monolith' && (
                    <div className="mt-4 w-full h-12 rounded-lg flex items-center justify-center"
                      style={{ background: 'rgba(148,163,184,0.08)', border: '1px solid rgba(148,163,184,0.15)' }}>
                      <span className="font-mono text-[11px] text-[#94a3b8]/60">[ All-in-one ]</span>
                    </div>
                  )}
                  {p.label === 'Microservices' && (
                    <div className="mt-4 flex gap-1.5">
                      {['API', 'Auth', 'DB', 'ML'].map(s => (
                        <div key={s} className="flex-1 h-8 rounded flex items-center justify-center"
                          style={{ background: 'rgba(0,135,248,0.1)', border: '1px solid rgba(0,135,248,0.2)' }}>
                          <span className="font-mono text-[10px] text-primary/70">{s}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  {p.label === 'AI Era' && (
                    <div className="mt-4 flex items-center gap-2">
                      <div className="h-8 px-2 rounded flex items-center justify-center"
                        style={{ background: 'rgba(68,196,246,0.1)', border: '1px solid rgba(68,196,246,0.2)' }}>
                        <span className="font-mono text-[10px] text-secondary/70">Prompt</span>
                      </div>
                      <span className="text-[#44c4f6] text-xs flex-1 text-center">⟶ AI ⟶</span>
                      <div className="h-8 px-2 rounded flex items-center justify-center"
                        style={{ background: 'rgba(68,196,246,0.1)', border: '1px solid rgba(68,196,246,0.2)' }}>
                        <span className="font-mono text-[10px] text-secondary/70">Ship</span>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>
        <motion.p
          variants={fadeUp}
          className="font-mono text-[13px] tracking-widest uppercase text-primary/70 text-center mt-8"
        >
          Every step solved something… and created something worse.
        </motion.p>
      </div>
    </SlideWrapper>
  )
}
