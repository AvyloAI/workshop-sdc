import type { ReactNode } from 'react'

interface SlideWrapperProps {
  children: ReactNode
  className?: string
}

export default function SlideWrapper({ children, className = '' }: SlideWrapperProps) {
  return (
    <div
      className={`slide-root ${className}`}
    >
      {children}
    </div>
  )
}
