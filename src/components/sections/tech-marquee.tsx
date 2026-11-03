import { TECH_MARQUEE } from '@/data/portfolio'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function TechMarquee() {
  return (
    <section className="bg-deep-navy py-16" aria-label="Teknologi yang dikuasai">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="flex flex-wrap items-center justify-center gap-3 py-4">
          {TECH_MARQUEE.map((tech) => (
            <span
              key={tech}
              className={cn(
                'rounded-full border border-primary/20 bg-secondary/80 px-3 py-1.5 text-xs font-semibold text-blue-200 transition-all duration-200 hover:border-primary/50 hover:bg-primary/15 hover:scale-105',
              )}
            >
              {tech}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
