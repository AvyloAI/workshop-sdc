import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#f9fdfe',
        'ink-dim': '#94a3b8',
        surface: '#18181c',
        card: '#1a1a1f',
        'card-hover': '#202028',
        border: 'rgba(255,255,255,0.07)',
        primary: '#0087f8',
        secondary: '#44c4f6',
        muted: '#1e1e25',
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '0.75rem',
        sm: '0.45rem',
        md: '0.6rem',
        lg: '0.75rem',
        xl: '1.05rem',
        '2xl': '1.35rem',
        '3xl': '1.65rem',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #0087f8, #44c4f6)',
        'brand-gradient-radial': 'radial-gradient(ellipse at center, #0087f8 0%, #44c4f6 100%)',
      },
      keyframes: {
        'float-y': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.3' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'float-y': 'float-y 4s ease-in-out infinite',
        'pulse-slow': 'pulse-slow 1.6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 6s ease infinite',
      },
    },
  },
  plugins: [],
}

export default config
