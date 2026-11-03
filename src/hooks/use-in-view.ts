import { useEffect, useRef, useState } from 'react'

interface UseInViewOptions extends IntersectionObserverInit {
  once?: boolean
}

export function useInView<T extends HTMLElement>(options?: UseInViewOptions) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)
  const once = options?.once ?? true

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const { once: _once, ...observerInit } = options ?? {}
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        if (once) observer.unobserve(entry.target)
      } else if (!once) {
        setInView(false)
      }
    }, observerInit)

    observer.observe(el)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, inView } as const
}
