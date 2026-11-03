import { Sparkles } from 'lucide-react'
import { SKILL_DOMAINS } from '@/data/portfolio'
import { Reveal } from '@/components/reveal'

export function Skills() {
  return (
    <section id="keahlian" className="section-divider relative bg-void py-24" aria-labelledby="keahlian-heading">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal className="mb-16 text-center">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3.5 py-1 text-xs font-semibold text-primary">
            <Sparkles className="size-3.5" aria-hidden="true" />
            <span>Tech Stack &amp; Workflow</span>
          </div>
          <h2 id="keahlian-heading" className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Penguasaan <span className="gradient-text-blue">Keahlian</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Kombinasi kemampuan pengembangan backend yang kokoh, antarmuka modern yang responsif, serta problem solving berbasis data.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {SKILL_DOMAINS.map((domain) => {
            const Icon = domain.icon
            return (
              <div
                key={domain.title}
                className="group relative flex flex-col justify-between rounded-2xl border border-primary/15 bg-card/85 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_12px_35px_-12px_rgba(59,130,246,0.25)]"
              >
                <div>
                  <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className="flex size-11 items-center justify-center rounded-xl border border-primary/25 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                        <Icon className="size-5" aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold tracking-tight text-white">{domain.title}</h3>
                    </div>
                    <span className="rounded-full border border-primary/20 bg-deep-navy px-2.5 py-0.5 text-xs font-medium text-blue-300">
                      {domain.skills.length} Skills
                    </span>
                  </div>

                  <ul className="flex flex-wrap gap-2" aria-label={`Keahlian ${domain.title}`}>
                    {domain.skills.map((skill, sIdx) => {
                      const isPrimarySkill = sIdx < 2
                      return (
                        <li
                          key={skill}
                          className={`rounded-lg border px-3 py-1.5 text-xs font-semibold transition-all duration-200 hover:-translate-y-0.5 ${
                            isPrimarySkill
                              ? 'border-primary/40 bg-primary/20 text-white shadow-sm hover:border-primary hover:bg-primary/30'
                              : 'border-primary/15 bg-secondary/70 text-slate-300 hover:border-primary/35 hover:bg-primary/10 hover:text-white'
                          }`}
                        >
                          {skill}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
