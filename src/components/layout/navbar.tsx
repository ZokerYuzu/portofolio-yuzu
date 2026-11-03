import { useState } from 'react'
import { Menu } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { CopyEmailButton } from '@/components/copy-email-button'
import { SITE } from '@/data/portfolio'
import { useActiveSection } from '@/hooks/use-active-section'
import { cn } from '@/lib/utils'

const NAV_LINKS = [
  { id: 'tentang', label: 'Tentang' },
  { id: 'proyek', label: 'Portofolio' },
  { id: 'pengalaman', label: 'Pengalaman' },
  { id: 'keahlian', label: 'Keahlian' },
] as const

interface NavbarProps {
  hidden: boolean
  scrolled: boolean
}

export function Navbar({ hidden, scrolled }: NavbarProps) {
  const [open, setOpen] = useState(false)
  const activeId = useActiveSection(NAV_LINKS.map((l) => l.id))

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 flex justify-center px-4 pt-3 sm:pt-4 pointer-events-none transition-all duration-300',
        hidden && !open ? '-translate-y-28 opacity-0' : 'translate-y-0 opacity-100',
      )}
    >
      <nav
        className={cn(
          'pointer-events-auto flex w-full max-w-5xl items-center justify-between rounded-full border border-primary/20 bg-[#060b17]/85 px-4 py-2.5 shadow-[0_10px_35px_-10px_rgba(0,0,0,0.8)] backdrop-blur-xl transition-all duration-300 sm:px-6',
          scrolled && 'border-primary/35 bg-[#030712]/95 py-2 shadow-primary/10 shadow-lg',
        )}
        aria-label="Navigasi utama"
      >
        <a href="#tentang" className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white group">
          <span className="flex size-8 items-center justify-center rounded-full bg-gradient-to-br from-primary to-blue-800 text-xs font-black text-white shadow-md shadow-primary/25 transition-transform group-hover:scale-105">
            {SITE.initials}
          </span>
          <span className="hidden sm:inline">
            Yudha<span className="text-primary">.</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-primary/10 bg-secondary/40 p-1 text-xs font-semibold md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              data-active={activeId === link.id}
              aria-current={activeId === link.id ? 'true' : undefined}
              className={cn(
                'rounded-full px-4 py-1.5 transition-all duration-200',
                activeId === link.id
                  ? 'bg-primary text-white shadow-sm shadow-primary/30'
                  : 'text-muted-foreground hover:text-white hover:bg-primary/10',
              )}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <CopyEmailButton
            icon="copy"
            className="hidden h-auto rounded-full border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-white hover:border-primary/40 hover:bg-primary/20 md:inline-flex"
          />
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-white border border-primary/30 px-4 py-1.5 text-xs font-semibold transition-colors"
          >
            <a href="#kontak">Kontak</a>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Buka menu navigasi">
              <Menu className="size-6!" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-72 border-border bg-popover/95 backdrop-blur-xl">
            <SheetHeader>
              <SheetTitle className="text-left text-white">
                Yudha<span className="text-primary">.</span>
              </SheetTitle>
              <SheetDescription className="sr-only">Menu navigasi portfolio</SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4 pb-6" aria-label="Navigasi seluler">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={activeId === link.id ? 'true' : undefined}
                  className={cn(
                    'rounded-lg px-3 py-2.5 font-semibold transition-colors',
                    activeId === link.id
                      ? 'bg-primary/10 text-white'
                      : 'text-muted-foreground hover:bg-accent hover:text-white',
                  )}
                >
                  {link.label}
                </a>
              ))}
              <CopyEmailButton
                icon="copy"
                onClick={() => setOpen(false)}
                className="mt-3 w-fit rounded-full border-primary/25 bg-primary/10 px-5 py-2.5 font-semibold text-white hover:border-primary/40 hover:bg-primary/20"
              />
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
