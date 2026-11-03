interface ScrollProgressProps {
  progress: number
}

export function ScrollProgress({ progress }: ScrollProgressProps) {
  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 z-50 h-[3px] w-full bg-gradient-to-r from-primary to-electric shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-[width] duration-100 ease-out"
      style={{ width: `${progress}%` }}
    />
  )
}
