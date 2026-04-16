import { motion } from 'framer-motion'
import SlideWrapper from '../components/SlideWrapper'
import GlowBlob from '../components/GlowBlob'
import MonoLabel from '../components/MonoLabel'
import { stagger, fadeUp } from '../lib/animations'

interface SlideProps { step: number }

export default function ProblemSlide(_: SlideProps) {
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={700} opacity={0.04} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-8 max-w-5xl"
      >
        <motion.div variants={fadeUp} className="mb-8">
          <MonoLabel>03 — The Problem</MonoLabel>
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-sans font-bold leading-tight tracking-tight mb-6"
          style={{ fontSize: 'clamp(40px, 6vw, 80px)' }}
        >
          Everything works…
          <br />
          <span style={{ color: '#94a3b8', fontWeight: 300 }}>until it doesn't.</span>
        </motion.h2>

        <motion.div
          variants={fadeUp}
          className="flex items-center gap-6 mt-4"
        >
          {['Scaling issues', 'Cascading bugs', 'Full rewrites'].map((item) => (
            <span
              key={item}
              className="font-mono text-[12px] tracking-widest uppercase text-[#0087f8] px-4 py-2 glass rounded-full border border-primary/20"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </SlideWrapper>
  )
}
