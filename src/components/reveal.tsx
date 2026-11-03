import type { HTMLAttributes } from 'react'
import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: 100 | 200
}

export function Reveal({ className, delay, children, ...props }: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({
    once: true,
    threshold: 0.1,
    rootMargin: '0px 0px -80px 0px',
  })

  return (
    <div
      ref={ref}
      className={cn(
        'reveal',
        delay === 100 && 'reveal-delay-100',
        delay === 200 && 'reveal-delay-200',
        inView && 'is-visible',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}
