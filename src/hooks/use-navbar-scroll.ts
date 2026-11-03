import { useEffect, useState } from 'react'

export function useNavbarScroll() {
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    let lastScroll = window.scrollY

    const onScroll = () => {
      const current = window.scrollY

      setHidden(current > lastScroll && current > 100)
      setScrolled(current > 60)
      setShowBackToTop(current > 350)

      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setProgress(height > 0 ? (current / height) * 100 : 0)

      lastScroll = current
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return { hidden, scrolled, progress, showBackToTop } as const
}
