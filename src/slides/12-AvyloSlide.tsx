import { motion } from 'framer-motion'
import GlowBlob from '../components/GlowBlob'
import GradientText from '../components/GradientText'
import SlideWrapper from '../components/SlideWrapper'
import { stagger, fadeUp, heroEntrance, scaleIn } from '../lib/animations'
import { useTheme } from '../lib/theme'

interface SlideProps { step: number }

export default function AvyloSlide(_: SlideProps) {
  const { theme } = useTheme()
  const logoFilter = theme === 'light' ? 'brightness(0) saturate(100%)' : 'brightness(1.1)'
  return (
    <SlideWrapper>
      <GlowBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="primary" size={800} opacity={0.09} />
      <GlowBlob className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" color="secondary" size={500} opacity={0.04} />

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex flex-col items-center text-center px-12 max-w-4xl"
      >
        {/* Real logo */}
        <motion.div variants={scaleIn} className="mb-10">
          <img
            src="/LogoSymbol.png"
            alt="Avylo AI"
            style={{
              height: 80,
              width: 'auto',
              filter: theme === 'light'
                ? 'brightness(0) saturate(100%) drop-shadow(0 0 32px rgba(0,135,248,0.35))'
                : 'drop-shadow(0 0 32px rgba(0,135,248,0.5)) drop-shadow(0 0 64px rgba(0,135,248,0.2))',
            }}
          />
        </motion.div>

        <motion.p variants={fadeUp} className="font-mono text-[11px] tracking-[0.25em] uppercase text-primary mb-4">
          Coming Next
        </motion.p>

        <motion.div variants={heroEntrance} className="mb-6">
          <img
            src="/Logo.png"
            alt="Avylo AI"
            style={{
              height: 46,
              width: 'auto',
              filter: logoFilter,
            }}
          />
        </motion.div>

        <motion.h2
          variants={fadeUp}
          className="font-sans font-bold leading-tight tracking-tight text-[#f9fdfe] mb-4"
          style={{ fontSize: 'clamp(18px, 2.2vw, 28px)' }}
        >
          From idea to architecture —<br />
          <GradientText>instantly, intelligently, continuously.</GradientText>
        </motion.h2>

        <motion.p variants={fadeUp} className="font-sans text-[#94a3b8] font-light text-[14px] mt-3">
          Not a diagram tool. Not a code generator.
          <br />
          <span className="text-[#f9fdfe]">A system-thinking partner.</span>
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <div
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-lg font-sans text-[13px] font-semibold text-white tracking-wide"
            style={{
              background: 'linear-gradient(135deg, #0087f8, #44c4f6)',
              boxShadow: '0 0 32px rgba(0,135,248,0.35), 0 0 64px rgba(0,135,248,0.12)',
            }}
          >
            avylo.ai
            <span>→</span>
          </div>
        </motion.div>
      </motion.div>
    </SlideWrapper>
  )
}
