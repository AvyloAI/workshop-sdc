/* Central icon library — all SVG, no emoji */

interface IconProps {
  size?: number
  color?: string
  className?: string
}

/* ── Individual icons ─────────────────────────────────────────────── */

export function IconRobot({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="10" width="14" height="9" rx="2" stroke={color} strokeWidth="1.5" />
      <circle cx="9" cy="14.5" r="1.5" fill={color} />
      <circle cx="15" cy="14.5" r="1.5" fill={color} />
      <path d="M9 19v1M15 19v1" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 10V8M10 8h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconBrain({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M9.5 4C7 4 5 6 5 8.5c0 1-.3 1.9-.8 2.6C3.5 12 3 13 3 14c0 2.2 1.8 4 4 4h3v-2H7a2 2 0 01-2-2c0-.6.3-1.2.7-1.6.8-1 1.3-2.3 1.3-3.9C7 7 8 6 9.5 6 10 6 10.4 6.1 10.8 6.3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.5 4C17 4 19 6 19 8.5c0 1 .3 1.9.8 2.6.7.9 1.2 1.9 1.2 2.9 0 2.2-1.8 4-4 4h-3v-2h3a2 2 0 002-2c0-.6-.3-1.2-.7-1.6-.8-1-1.3-2.3-1.3-3.9C17 7 16 6 14.5 6 14 6 13.6 6.1 13.2 6.3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 6v12M10 10h4M10 14h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconChat({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M8 12h.01M12 12h.01M16 12h.01" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M20 12c0 4.4-3.6 8-8 8a8 8 0 01-4.5-1.4L4 20l1.4-3.5A8 8 0 114 12c0 4.4 3.6 8 8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconRocket({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C12 2 7 6 7 13H17C17 6 12 2 12 2Z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 13l-2 5 5-2M17 13l2 5-5-2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="11" r="1.5" fill={color} />
    </svg>
  )
}

export function IconGhost({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3a7 7 0 00-7 7v9l2.5-2.5L10 19l2-2 2 2 2.5-2.5L19 19v-9a7 7 0 00-7-7z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="9" cy="11" r="1" fill={color} />
      <circle cx="15" cy="11" r="1" fill={color} />
    </svg>
  )
}

export function IconFile({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V9l-5-6z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M14 3v6h6M9 13h6M9 17h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconExplosion({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2l2 5h5l-4 3 1.5 5L12 12l-4.5 3L9 10 5 7h5L12 2z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M4 18l3-3M20 18l-3-3M12 20v-3" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconWarning({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M10.3 4.8L2.6 18A2 2 0 004.3 21h15.4a2 2 0 001.7-3L13.7 4.8a2 2 0 00-3.4 0z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M12 10v4M12 17.5v.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconLock({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="5" y="11" width="14" height="10" rx="2" stroke={color} strokeWidth="1.5" />
      <path d="M8 11V7a4 4 0 018 0v4" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="16" r="1.5" fill={color} />
    </svg>
  )
}

export function IconTelescope({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 7l4 10M3 7l14-4 3 8-14 4L3 7z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M11 17l2 5M13 17l-2 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconScale({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 3v18M6 20h12" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M5 8l-3 5h6L5 8zM19 8l-3 5h6L19 8z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M5 8h14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function IconPencil({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M15.5 4.5l4 4L8 20H4v-4L15.5 4.5z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function IconHandshake({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 12l4-4h4l2 2 4-2h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 8l3 3-3 5M15 8l-3 3 3 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconLightning({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function IconUpArrow({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 19V5M5 12l7-7 7 7" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconTarget({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="5" stroke={color} strokeWidth="1.5" />
      <circle cx="12" cy="12" r="1.5" fill={color} />
    </svg>
  )
}

export function IconEye({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}

export function IconRefresh({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 12a8 8 0 018-8v0a8 8 0 018 8 8 8 0 01-8 8" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 8v4h4" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function IconStar({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2l3 6.5 7 .9-5 5 1.2 7L12 18l-6.2 3.4L7 14.4 2 9.4l7-.9L12 2z" stroke={color} strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function IconGrid({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="7" height="7" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1" stroke={color} strokeWidth="1.5" />
      <rect x="14" y="14" width="7" height="7" rx="1" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}
