import { useEffect, useState } from 'react'
import { usePrefersReducedMotion } from './use-prefers-reduced-motion'

export function useTypingEffect(phrases: string[]): string {
  const reduced = usePrefersReducedMotion()
  const [text, setText] = useState(() => (reduced ? phrases[0] ?? '' : ''))

  useEffect(() => {
    if (reduced) return

    let phraseIndex = 0
    let charIndex = 0
    let deleting = false
    let timer: ReturnType<typeof setTimeout>

    const tick = () => {
      const current = phrases[phraseIndex]

      if (deleting) {
        charIndex--
        setText(current.substring(0, charIndex))
      } else {
        charIndex++
        setText(current.substring(0, charIndex))
      }

      let speed = deleting ? 50 : 100

      if (!deleting && charIndex === current.length) {
        speed = 2000
        deleting = true
      } else if (deleting && charIndex === 0) {
        deleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
        speed = 500
      }

      timer = setTimeout(tick, speed)
    }

    timer = setTimeout(tick, 300)
    return () => clearTimeout(timer)
  }, [phrases, reduced])

  return text
}
