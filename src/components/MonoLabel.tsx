import type { ReactNode } from 'react'

interface MonoLabelProps {
  children: ReactNode
  className?: string
}

export default function MonoLabel({ children, className = '' }: MonoLabelProps) {
  return (
    <p
      className={`font-mono text-[13px] tracking-[0.2em] uppercase text-primary font-medium ${className}`}
    >
      {children}
    </p>
  )
}
