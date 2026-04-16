import { useTheme } from '../lib/theme'

interface LogoProps {
  className?: string
  /** 'full' shows wordmark+icon, 'symbol' shows just the icon mark */
  variant?: 'full' | 'symbol'
  height?: number
}

export default function Logo({ className = '', variant = 'full', height = 28 }: LogoProps) {
  const { theme } = useTheme()
  // Logo assets are white — invert to dark in light mode
  const filter = theme === 'light' ? 'brightness(0) saturate(100%)' : 'brightness(1)'

  if (variant === 'symbol') {
    return (
      <img
        src="/LogoSymbol.png"
        alt="Avylo AI"
        height={height}
        style={{ height, width: 'auto', objectFit: 'contain', filter }}
        className={className}
      />
    )
  }
  return (
    <img
      src="/Logo.png"
      alt="Avylo AI"
      height={height}
      style={{ height, width: 'auto', objectFit: 'contain', filter }}
      className={className}
    />
  )
}
