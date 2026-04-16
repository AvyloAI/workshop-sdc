import { useCallback, useEffect, useState } from 'react'
import { useTheme } from '../lib/theme'

interface NavigationProps {
  slideIndex: number
  totalSlides: number
  goTo: (index: number) => void
  goPrev: () => void
  goNext: () => void
}

function FullscreenIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M2 2h4M2 2v4M13 2h-4M13 2v4M2 13h4M2 13v-4M13 13h-4M13 13v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function ExitFullscreenIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M6 2v4H2M9 2v4h4M6 13v-4H2M9 13v-4h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <circle cx="7.5" cy="7.5" r="3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7.5 1v1.5M7.5 12.5V14M1 7.5h1.5M12.5 7.5H14M3 3l1 1M11 11l1 1M11 3l-1 1M4 11l-1 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
      <path d="M12.5 9A6.5 6.5 0 016 2.5 6.5 6.5 0 1012.5 9z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Navigation({
  slideIndex,
  totalSlides,
  goTo,
  goPrev,
  goNext,
}: NavigationProps) {
  const { theme, toggle: toggleTheme } = useTheme()
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    const handler = () => setIsFullscreen(!!document.fullscreenElement)
    document.addEventListener('fullscreenchange', handler)
    return () => document.removeEventListener('fullscreenchange', handler)
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }, [])

  const iconColor = theme === 'dark' ? '#b0bcc8' : '#374151'
  const btnStyle: React.CSSProperties = {
    width: 34,
    height: 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '8px',
    border: `1px solid ${theme === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.10)'}`,
    background: theme === 'dark' ? 'rgba(26,26,31,0.65)' : 'rgba(255,255,255,0.80)',
    backdropFilter: 'blur(12px)',
    color: iconColor,
    cursor: 'pointer',
    transition: 'background 0.2s, opacity 0.2s',
  }

  return (
    <>
      {/* Dot indicators — bottom center */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-50">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full focus:outline-none"
            style={{
              width: i === slideIndex ? 22 : 7,
              height: 7,
              background:
                i === slideIndex
                  ? 'var(--primary)'
                  : i < slideIndex
                  ? 'rgba(0,135,248,0.45)'
                  : theme === 'dark' ? 'rgba(255,255,255,0.18)' : 'rgba(0,0,0,0.18)',
            }}
          />
        ))}
      </div>

      {/* Prev arrow */}
      <button
        onClick={goPrev}
        aria-label="Previous"
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 opacity-0 hover:opacity-100 transition-opacity duration-200 w-10 h-10 flex items-center justify-center rounded-full glass"
        style={{ color: iconColor }}
      >
        <ChevronLeft />
      </button>

      {/* Next arrow */}
      <button
        onClick={goNext}
        aria-label="Next"
        className="fixed right-4 top-1/2 -translate-y-1/2 z-50 opacity-0 hover:opacity-100 transition-opacity duration-200 w-10 h-10 flex items-center justify-center rounded-full glass"
        style={{ color: iconColor }}
      >
        <ChevronRight />
      </button>

      {/* Bottom-right controls */}
      <div className="fixed bottom-5 right-6 z-50 flex items-center gap-2">
        {/* Slide counter */}
        <span
          className="font-mono tracking-widest select-none mr-1"
          style={{ fontSize: '14px', color: iconColor }}
        >
          {String(slideIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          style={btnStyle}
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* Fullscreen toggle */}
        <button
          onClick={toggleFullscreen}
          aria-label="Toggle fullscreen"
          style={btnStyle}
          title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen (F11)'}
        >
          {isFullscreen ? <ExitFullscreenIcon /> : <FullscreenIcon />}
        </button>
      </div>
    </>
  )
}

