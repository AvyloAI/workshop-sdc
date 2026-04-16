interface GlowBlobProps {
  className?: string
  color?: 'primary' | 'secondary'
  size?: number
  opacity?: number
}

export default function GlowBlob({
  className = '',
  color = 'primary',
  size = 500,
  opacity = 0.06,
}: GlowBlobProps) {
  const colorMap = {
    primary: '#0087f8',
    secondary: '#44c4f6',
  }
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute rounded-full ${className}`}
      style={{
        width: size,
        height: size,
        background: colorMap[color],
        opacity,
        filter: `blur(${Math.round(size * 0.3)}px)`,
      }}
    />
  )
}
