import { AnimatePresence, motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, stagger } from '../lib/animations'
import { useTheme } from '../lib/theme'

interface SlideProps { step: number }

const eras = [
  {
    period: '2000–2015',
    role: 'Oracle',
    desc: 'One senior person decided everything. A bottleneck dressed as authority.',
    state: 'past',
  },
  {
    period: '2015–2022',
    role: 'Facilitator',
    desc: 'Distributed teams. ADRs. Fitness functions. Collaborative — still slow.',
    state: 'past',
  },
  {
    period: '2022–Now',
    role: 'Prompter',
    desc: 'AI writes the code. Architecture is improvised. Systems break quietly.',
    state: 'now',
  },
  {
    period: 'Next',
    role: 'Systems Thinker',
    desc: 'AI handles execution. Humans own constraints, context, and direction.',
    state: 'future',
  },
]

const stateColors: Record<string, Record<string, string>> = {
  past:   { dark: '#94a3b8', light: '#64748b' },
  now:    { dark: '#f97316', light: '#ea580c' },
  future: { dark: '#0087f8', light: '#0070d8' },
}

export default function CareerEvolutionSlide({ step }: SlideProps) {
  const { theme } = useTheme()
  return (
    <SlideWrapper>
      <GlowBlob className="top-0 left-0" color="secondary" size={400} opacity={0.04} />
      <GlowBlob className="bottom-0 right-0" color="primary" size={400} opacity={0.04} />

      <div className="relative z-10 w-full max-w-4xl px-10 flex flex-col">
        <motion.div variants={stagger} initial="hidden" animate="visible" className="mb-10">
          <motion.div variants={fadeUp} className="mb-4">
            <MonoLabel>Career Evolution</MonoLabel>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-sans font-bold leading-tight tracking-tight"
            style={{ fontSize: 'clamp(26px, 3.5vw, 48px)' }}
          >
            How the role
            <br />
            <span className="gradient-text">is transforming</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-0 pl-8">
          {/* Vertical line */}
          <div className="absolute left-[13px] top-2 bottom-2 w-[1px]"
            style={{ background: 'linear-gradient(180deg, transparent, rgba(0,135,248,0.3) 20%, rgba(0,135,248,0.3) 80%, transparent)' }} />

          {eras.map((era, i) => (
            <AnimatePresence key={era.period}>
              {step > i && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.45, ease: EASE }}
                  className="relative flex gap-5 pb-6 last:pb-0"
                >
                  {/* Dot */}
                  <div
                    className="absolute -left-8 top-1 w-[26px] h-[26px] rounded-full border-2 flex items-center justify-center shrink-0 z-10"
                    style={{
                      borderColor: stateColors[era.state][theme],
                      background: era.state === 'future' ? 'transparent' : stateColors[era.state][theme] + '20',
                    }}
                  >
                    {era.state === 'now' && (
                      <div className="w-2 h-2 rounded-full animate-pulse-slow"
                        style={{ background: stateColors[era.state][theme] }} />
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <span className="font-mono text-[13px] tracking-widest"
                        style={{ color: stateColors[era.state][theme] }}>
                        {era.period}
                      </span>
                      {era.state === 'now' && (
                        <span className="font-mono text-[11px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(249,115,22,0.15)', color: '#f97316', border: '1px solid rgba(249,115,22,0.3)' }}>
                          you are here
                        </span>
                      )}
                      {era.state === 'future' && (
                        <span className="font-mono text-[11px] tracking-widest uppercase px-2 py-0.5 rounded-full"
                          style={{ background: 'rgba(0,135,248,0.12)', color: '#0087f8', border: '1px solid rgba(0,135,248,0.3)' }}>
                          coming next
                        </span>
                      )}
                    </div>
                    <p className="font-sans font-semibold text-[#f9fdfe] mb-1"
                      style={{ fontSize: 'clamp(16px, 1.5vw, 19px)' }}>
                      {era.role}
                    </p>
                    <p className="font-sans text-[#94a3b8] font-light text-[15px] leading-relaxed">
                      {era.desc}
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
