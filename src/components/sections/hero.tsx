import { ArrowRight, Download } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/brand-icons'
import { Reveal } from '@/components/reveal'
import { SITE, SOCIALS } from '@/data/portfolio'
import { useTypingEffect } from '@/hooks/use-typing-effect'
import { cn } from '@/lib/utils'

const TYPING_PHRASES = [
  'Full-Stack Developer',
  'Laravel 11 & PHP Specialist',
  'React 19 & TypeScript Architect',
  'RESTful API & Database Engineer',
]

const SOCIAL_ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
} as const

export function Hero() {
  const typed = useTypingEffect(TYPING_PHRASES)

  return (
    <section
      id="tentang"
      className="section-divider relative flex min-h-svh w-full items-center overflow-hidden bg-gradient-to-b from-void via-deep-navy to-void pt-28 pb-16 md:pt-36 md:pb-24"
    >

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <div className="flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-14">
          <Reveal className="flex-1 text-center lg:text-left">
            {/* Availability Status Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
              <span className="inline-flex size-2 rounded-full bg-primary" />
              <span>{SITE.status}</span>
            </div>

            <h1 className="mb-6 text-4xl leading-[1.12] font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.5rem]">
              Membangun <span className="gradient-text-blue">Sistem Web Tangguh</span>
              <br className="hidden sm:block" /> &amp; Antarmuka yang <span className="text-white">Terukur</span>
              <span className="text-primary">.</span>
            </h1>

            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg lg:mx-0">
              <span className="font-semibold text-white">{SITE.name}</span> — Pengembang perangkat lunak berbasis di {SITE.location}. Fokus pada arsitektur backend yang kokoh, otomasi efisien, dan pengalaman produk yang presisi.{' '}
              <br className="hidden sm:block" />
              <span className="mt-2 inline-block font-semibold text-blue-200">
                {typed}
                <span className="animate-blink text-primary" aria-hidden="true">
                  |
                </span>
              </span>
            </p>

            <div className="flex flex-col items-center gap-3.5 sm:flex-row lg:justify-start">
              <Button
                asChild
                size="lg"
                className="h-auto w-full rounded-full bg-primary hover:bg-blue-600 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 sm:w-auto"
              >
                <a href="#proyek">
                  Jelajahi Proyek <ArrowRight className="size-4" data-icon="inline-end" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-auto w-full rounded-full border-primary/30 bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground hover:bg-primary/10 hover:text-white sm:w-auto"
              >
                <a href={SITE.cvPath} download>
                  <Download className="size-4" data-icon="inline-start" />
                  Download Resume (CV)
                </a>
              </Button>
            </div>
          </Reveal>

          {/* Bento Studio Avatar Module */}
          <Reveal delay={100} className="relative flex-shrink-0">
            <div className="relative flex flex-col items-center">
              {/* Floating Pill: React & TS */}
              <div className="absolute -left-6 top-6 z-20 hidden items-center gap-2 rounded-xl border border-primary/25 bg-[#080e1e]/95 px-3.5 py-1.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/50 sm:flex">
                <span className="size-2 rounded-full bg-electric" />
                <span className="text-xs font-semibold tracking-wide text-white">React 19 &amp; TS</span>
              </div>

              {/* Floating Pill: Laravel & MySQL */}
              <div className="absolute -right-6 bottom-16 z-20 hidden items-center gap-2 rounded-xl border border-primary/25 bg-[#080e1e]/95 px-3.5 py-1.5 shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-primary/50 sm:flex">
                <span className="size-2 rounded-full bg-primary" />
                <span className="text-xs font-semibold tracking-wide text-white">Laravel 11 &amp; MySQL</span>
              </div>

              {/* Avatar Frame with Studio Rim Light */}
              <div className="shimmer-border relative size-64 overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-b from-primary/15 via-transparent to-primary/5 p-2 shadow-[0_16px_50px_-12px_rgba(59,130,246,0.35)] sm:size-72">
                <img
                  src="/assets/profile.webp"
                  alt={`Foto ${SITE.name}`}
                  fetchPriority="high"
                  decoding="async"
                  width={288}
                  height={288}
                  className="size-full rounded-2xl object-cover"
                />
              </div>

              {/* Bento Metadata Pill Underneath */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full border border-primary/20 bg-secondary/80 px-3 py-1 text-[11px] font-semibold text-blue-200">
                  UMSU • Sistem Informasi
                </span>
                <span className="rounded-full border border-primary/20 bg-secondary/80 px-3 py-1 text-[11px] font-semibold text-blue-300">
                  Project Lead Innovillage
                </span>
              </div>

              {/* Social Connect Dock */}
              <div className="mt-4 flex justify-center gap-2.5">
                {SOCIALS.map(({ href, label, icon }) => {
                  const Icon = SOCIAL_ICONS[icon]
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={cn(
                        'flex size-9 items-center justify-center rounded-xl border border-primary/20 bg-card/90',
                        'text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/15 hover:text-white',
                      )}
                    >
                      <Icon className="size-4" />
                    </a>
                  )
                })}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
