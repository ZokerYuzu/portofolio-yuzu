import { ArrowUp } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { cn } from '@/lib/utils'

interface BackToTopProps {
  visible: boolean
}

export function BackToTop({ visible }: BackToTopProps) {
  const reduced = usePrefersReducedMotion()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <Button
      type="button"
      variant="outline"
      size="icon-lg"
      onClick={scrollToTop}
      aria-label="Kembali ke atas"
      className={cn(
        'fixed right-8 bottom-8 z-50 size-12 rounded-full border-primary/25 bg-popover/60 text-primary backdrop-blur-md transition-all duration-300 hover:border-primary/50 hover:text-electric',
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0',
      )}
    >
      <ArrowUp />
    </Button>
  )
}
