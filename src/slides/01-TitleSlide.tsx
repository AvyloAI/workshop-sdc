import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import GradientText from '../components/GradientText'
import SlideWrapper from '../components/SlideWrapper'
import { EASE, fadeUp, heroEntrance, stagger } from '../lib/animations'

interface SlideProps { step: number }

export default function TitleSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="-top-60 -left-60" color="primary" size={700} opacity={0.08} />
      <GlowBlob className="-bottom-40 right-0" color="secondary" size={500} opacity={0.04} />

      {/* Subtle grid lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(0,135,248,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0,135,248,0.03) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
      }} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-8 max-w-6xl"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="mb-8 flex items-center gap-3">
          <div className="h-px w-12 bg-primary/40" />
          <span className="font-mono text-[13px] tracking-[0.22em] uppercase text-primary">Workshop · System Architecture · AI Era</span>
          <div className="h-px w-12 bg-primary/40" />
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={heroEntrance}
          className="font-sans font-bold leading-[0.95] tracking-tight mb-8"
          style={{ fontSize: 'clamp(60px, 8.5vw, 120px)' }}
        >
          Architecting
          <br />
          <GradientText>the Future</GradientText>
        </motion.h1>

        {/* Sub */}
        <motion.p
          variants={fadeUp}
          className="font-sans font-light text-[#94a3b8] max-w-xl"
          style={{ fontSize: 'clamp(15px, 1.6vw, 20px)' }}
        >
          AI builds faster.{' '}
          <span className="text-[#f9fdfe] font-normal">Architecture decides what survives.</span>
        </motion.p>

        {/* Meta */}
        <motion.div
          variants={fadeUp}
          className="mt-10 flex items-center gap-6"
        >
          {['90 min', 'Workshop', 'Engineers & Tech Leads'].map((item, i) => (
            <span key={i} className="font-mono text-[13px] tracking-widest uppercase text-[#94a3b8]/80">
              {item}
              {i < 2 && <span className="ml-6 text-[#94a3b8]/20">·</span>}
            </span>
          ))}
        </motion.div>

        {/* Hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ delay: 1.8, duration: 1, ease: EASE }}
          className="absolute bottom-[-100px] flex items-center gap-3"
        >
          <kbd className="font-mono text-[12px] tracking-widest px-2.5 py-1 rounded glass text-[#94a3b8]">→</kbd>
          <span className="font-mono text-[12px] tracking-widest text-[#94a3b8] uppercase">begin</span>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  )
}
