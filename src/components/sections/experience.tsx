import { Reveal } from '@/components/reveal'
import { TIMELINE } from '@/data/portfolio'

export function Experience() {
  return (
    <section
      id="pengalaman"
      className="section-divider relative bg-deep-navy py-24"
      aria-labelledby="pengalaman-heading"
    >
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="mb-16 text-center">
          <h2 id="pengalaman-heading" className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Perjalanan <span className="gradient-text-blue">Karir</span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-electric" />
        </Reveal>

        <div className="relative ml-4 space-y-12 border-l-2 border-secondary md:ml-10">
          {TIMELINE.map((item, i) => (
            <Reveal key={item.role} delay={i === 1 ? 100 : i === 2 ? 200 : undefined} className="group relative pl-8 md:pl-12">
              <span
                aria-hidden="true"
                className="absolute top-1.5 -left-[9px] size-4 rounded-full border-4 border-[#1e3a5f] bg-deep-navy transition-all duration-300 group-hover:border-primary group-hover:shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
              <div className="mb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-primary">{item.role}</h3>
                <span className="mt-2 w-fit rounded-full border border-primary/25 bg-primary/15 px-4 py-1.5 text-xs font-semibold text-blue-200 sm:mt-0">
                  {item.period}
                </span>
              </div>
              <p className="mb-3 text-sm font-medium tracking-wider text-blue-400/80 uppercase">{item.org}</p>
              <p className="rounded-xl border border-primary/15 bg-card p-5 text-base leading-relaxed text-muted-foreground transition-colors group-hover:border-primary/30">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
