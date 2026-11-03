import { GithubIcon, InstagramIcon, LinkedinIcon } from '@/components/brand-icons'

import { SOCIALS } from '@/data/portfolio'

const SOCIAL_ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  instagram: InstagramIcon,
} as const

export function Footer() {
  return (
    <footer className="bg-void py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <div className="text-xl font-bold text-white">
          Yudha<span className="text-primary">.</span>
        </div>
        <p className="text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Yudha Pratama. Didesain dengan minimalisme &amp; presisi.
        </p>
        <div className="flex gap-3">
          {SOCIALS.map(({ href, label, icon }) => {
            const Icon = SOCIAL_ICONS[icon]
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-primary/10 bg-card text-muted-foreground transition-all hover:bg-primary/10 hover:text-primary"
              >
                <Icon className="size-4" />
              </a>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
