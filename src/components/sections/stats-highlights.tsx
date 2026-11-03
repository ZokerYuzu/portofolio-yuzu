import { useEffect, useState } from 'react'

import { HIGHLIGHTS, STATS, type Stat } from '@/data/portfolio'
import { useInView } from '@/hooks/use-in-view'
import { usePrefersReducedMotion } from '@/hooks/use-prefers-reduced-motion'
import { Reveal } from '@/components/reveal'

const DURATION = 1600

function Counter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold: 0.5 })
  const reduced = usePrefersReducedMotion()
  const [display, setDisplay] = useState((0).toFixed(decimals))

  useEffect(() => {
    if (!inView || reduced) return

    let raf = 0
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / DURATION, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay((value * eased).toFixed(decimals))
      if (progress < 1) raf = requestAnimationFrame(step)
    }

    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, decimals, reduced])

  return <span ref={ref}>{reduced ? value.toFixed(decimals) : display}</span>
}

function StatCard({ stat }: { stat: Stat }) {
  const Icon = stat.icon
  return (
    <div className="stat-glow navy-glass-solid rounded-2xl px-5 py-6 text-center transition-colors duration-300 hover:border-primary/30">
      <Icon className={`mx-auto mb-2 size-5 ${stat.accent}`} aria-hidden="true" />
      <p className="text-3xl font-extrabold text-white">
        <Counter value={stat.value} decimals={stat.decimals} />
      </p>
      <p className="mt-1 text-xs font-medium text-muted-foreground">{stat.label}</p>
    </div>
  )
}

export function StatsHighlights() {
  return (
    <section className="section-divider relative bg-deep-navy py-24" aria-labelledby="pencapaian-heading">
      <h2 id="pencapaian-heading" className="sr-only">
        Pencapaian Singkat
      </h2>

      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </Reveal>

        <Reveal delay={100} className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {HIGHLIGHTS.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group flex items-start gap-4 rounded-2xl border border-primary/10 bg-card p-5 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.15)]"
              >
                <div className="flex size-12 flex-shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-primary/10 transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-bold text-white">{item.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
