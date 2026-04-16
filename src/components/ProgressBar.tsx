interface ProgressBarProps {
  slideIndex: number
  totalSlides: number
}

export default function ProgressBar({ slideIndex, totalSlides }: ProgressBarProps) {
  const progress = ((slideIndex + 1) / totalSlides) * 100

  return (
    <div className="fixed top-0 left-0 right-0 h-[2px] z-50" style={{ background: 'var(--border-strong)' }}>
      <div
        className="h-full transition-all duration-500"
        style={{
          width: `${progress}%`,
          background: 'linear-gradient(90deg, #0087f8, #44c4f6)',
        }}
      />
    </div>
  )
}
