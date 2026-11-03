import { TESTIMONIALS } from '@/data/portfolio'
import { Reveal } from '@/components/reveal'
import { Building2, Award } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="section-divider relative bg-void py-24" aria-labelledby="evaluasi-heading">
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-16 text-center">
          <h2 id="evaluasi-heading" className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Evaluasi &amp; <span className="gradient-text-blue">Catatan Proyek</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Ulasan performa teknis dan kepemimpinan dari program magang industri BUMN serta program inovasi sosial.
          </p>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.name}
              className={i === 1 ? 'reveal-delay-100' : undefined}
            >
              <blockquote className="quote-mark relative flex flex-col justify-between h-full rounded-2xl border border-primary/15 bg-card/90 p-7 transition-all duration-300 hover:border-primary/35 hover:-translate-y-0.5">
                <div>
                  <div className="mb-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-blue-300">
                      {i === 0 ? <Building2 className="size-3" /> : <Award className="size-3" />}
                      {t.badge ?? 'Evaluasi Resmi'}
                    </span>
                    <span className="text-xs text-muted-foreground font-medium">{t.org}</span>
                  </div>
                  <p className="mb-6 text-[0.95rem] leading-relaxed text-slate-300">&ldquo;{t.quote}&rdquo;</p>
                </div>
                <figcaption className="flex items-center gap-3.5 border-t border-primary/10 pt-4 not-italic">
                  <span
                    aria-hidden="true"
                    className="flex size-10 items-center justify-center rounded-full border border-primary/20 bg-primary/15 text-sm font-bold text-primary"
                  >
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <span className="block text-sm font-semibold text-white">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </div>
                </figcaption>
              </blockquote>
            </figure>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
