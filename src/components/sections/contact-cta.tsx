import { Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { CopyEmailButton } from '@/components/copy-email-button'
import { Reveal } from '@/components/reveal'
import { SITE } from '@/data/portfolio'

export function ContactCta() {
  return (
    <section
      className="section-divider relative flex min-h-[80vh] items-center bg-deep-navy py-24"
      aria-labelledby="kontak-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-6">
        <Reveal className="relative w-full overflow-hidden text-center">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[120px]" />
          </div>
          <div className="relative z-10">
            <h2 id="kontak-heading" className="mb-6 text-3xl leading-tight font-extrabold text-white md:text-5xl tracking-tight">
              Siap Membangun Sesuatu yang <br className="hidden sm:block" />
              <span className="gradient-text-blue">Berdampak Nyata?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Tertarik merekrut atau mendiskusikan rekayasa sistem web? Saya siap berkontribusi pada tim Anda — baik untuk posisi full-time, program magang, maupun pengembangan sistem web khusus.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="h-auto rounded-full bg-gradient-to-r from-primary to-electric px-10 py-4 text-lg font-bold text-white shadow-[0_0_40px_rgba(59,130,246,0.25)] transition-transform duration-300 hover:scale-105"
              >
                <a href={`mailto:${SITE.email}`}>
                  <Mail data-icon="inline-start" />
                  Tulis Pesan
                </a>
              </Button>
              <CopyEmailButton
                icon="copy"
                variant="outline"
                className="h-auto rounded-full border-2 border-primary/35 bg-transparent px-8 py-4 text-lg font-semibold hover:border-primary/50 hover:bg-primary/10"
              >
                Salin Email
              </CopyEmailButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
