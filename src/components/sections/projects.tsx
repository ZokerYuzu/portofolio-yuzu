import { motion } from 'framer-motion'
import { useState } from 'react'
import { Lock, Star, Trophy, Building2, GraduationCap } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { cn } from '@/lib/utils'
import {
  PROJECT_FILTERS,
  PROJECTS,
  type Project,
} from '@/data/portfolio'

function ContextIcon({ context }: { context: string }) {
  if (context.includes('Innovillage')) return <Trophy className="size-3" aria-hidden="true" />
  if (context.includes('PTPN')) return <Building2 className="size-3" aria-hidden="true" />
  return <GraduationCap className="size-3" aria-hidden="true" />
}

function handleSpotlight(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget
  const rect = el.getBoundingClientRect()
  el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
  el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
}

function handleImageError(e: React.SyntheticEvent<HTMLImageElement>) {
  const img = e.currentTarget
  img.style.display = 'none'
  img.parentElement?.classList.add('img-placeholder')
}

function ProjectCard({
  project,
  onOpen,
}: {
  project: Project
  onOpen: (p: Project) => void
}) {
  return (
    <motion.article
      layout
      onMouseMove={handleSpotlight}
      onClick={() => onOpen(project)}
      className={cn(
        'spotlight-card flex cursor-pointer flex-col overflow-hidden rounded-2xl',
        'border border-primary/10 bg-card transition-all duration-300',
        'hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_8px_40px_-12px_rgba(59,130,246,0.25)]',
      )}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 28 }}
    >
      <div className="relative h-52 overflow-hidden bg-deep-navy">
        <img
          src={project.image}
          alt={`Tangkapan layar ${project.title}`}
          loading="lazy"
          decoding="async"
          width={600}
          height={330}
          onError={handleImageError}
          className="size-full object-cover opacity-90 transition-all duration-500 group-hover:scale-105 group-hover:opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {project.featured && (
            <Badge className="border-primary/40 bg-primary/35 text-white backdrop-blur-sm">
              <Star className="size-3!" aria-hidden="true" /> Unggulan
            </Badge>
          )}
          <Badge className="border-secondary bg-deep-navy/70 font-semibold text-foreground backdrop-blur-sm">
            {project.badge}
          </Badge>
        </div>
      </div>

      <div className="flex flex-grow flex-col p-6">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onOpen(project)
          }}
          className="text-left"
          aria-label={`Lihat detail ${project.title}`}
        >
          <h3 className="mb-1 text-xl font-bold text-white transition-colors group-hover:text-primary">
            {project.title}
          </h3>
        </button>
        <p className="mb-3 flex items-center gap-1.5 text-xs font-medium tracking-wide text-blue-300 uppercase">
          <ContextIcon context={project.context} />
          {project.context}
        </p>
        <p className="mb-5 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {project.techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-primary/20 bg-secondary/80 px-3 py-1 text-xs font-semibold text-muted-foreground transition-colors duration-300 group-hover:border-primary/30 group-hover:text-blue-200"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-2 pt-3">
          {project.repoUrl ? (
            <Button asChild variant="outline" size="sm" className="rounded-full" onClick={(e) => e.stopPropagation()}>
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                Source Code
              </a>
            </Button>
          ) : (
            <span className="inline-flex h-7 items-center gap-1.5 rounded-full border border-primary/15 px-3.5 text-xs font-semibold text-muted-foreground opacity-70">
              <Lock className="size-3" aria-hidden="true" /> Proyek Privat
            </span>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export function Projects() {
  const [filter, setFilter] = useState<string>('all')
  const [selected, setSelected] = useState<Project | null>(null)

  const visible =
    filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="proyek" className="section-divider relative w-full bg-void py-24" aria-labelledby="proyek-heading">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 id="proyek-heading" className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Semua <span className="gradient-text-blue">Proyek</span>
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Kompilasi proyek riil dan akademik yang menonjolkan kemampuan problem-solving dan penguasaan teknologi
            pengembangan perangkat lunak.
          </p>
        </motion.div>

        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex h-auto flex-wrap gap-2 rounded-full border border-primary/25 bg-transparent p-1.5">
            {PROJECT_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  'relative rounded-full px-5 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2 focus-visible:ring-primary',
                  filter === f.value ? 'text-white' : 'text-muted-foreground hover:text-white',
                )}
              >
                {filter === f.value && (
                  <motion.div
                    layoutId="active-filter"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-electric"
                    transition={{ type: 'spring', stiffness: 300, damping: 28 }}
                  />
                )}
                <span className="relative z-10">{f.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div
          key={filter}
          layout
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {visible.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpen={setSelected}
            />
          ))}
        </motion.div>
      </div>

      <Dialog open={selected !== null} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto border-primary/25 bg-gradient-to-br from-card to-accent sm:max-w-[700px]">
          {selected && (
            <>
              <DialogHeader className="text-left">
                <img
                  src={selected.image}
                  alt={`Tangkapan layar ${selected.title}`}
                  loading="lazy"
                  decoding="async"
                  onError={handleImageError}
                  className="mb-6 h-64 w-full rounded-xl border border-primary/20 object-cover sm:h-72"
                />
                <DialogTitle className="text-2xl font-bold text-white">{selected.title}</DialogTitle>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selected.featured && (
                    <Badge className="bg-primary/20 text-blue-200">
                      <Star className="size-3!" aria-hidden="true" /> Unggulan
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-primary/15 text-blue-200">
                    {selected.badge}
                  </Badge>
                  <Badge variant="secondary" className="bg-primary/15 text-blue-200">
                    {selected.context}
                  </Badge>
                </div>
                <DialogDescription className="pt-4 text-base leading-relaxed text-foreground/90">
                  {selected.longDescription}
                </DialogDescription>
              </DialogHeader>

              <div className="mb-6">
                <h4 className="mb-3 text-xs font-semibold tracking-wide text-white uppercase">Fitur Utama</h4>
                <ul className="space-y-2">
                  {selected.features.map((feature) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 size-1.5 flex-shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-xs font-semibold tracking-wide text-white uppercase">Teknologi</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-3 border-t border-primary/15 pt-5">
                {selected.repoUrl ? (
                  <Button asChild className="flex-1 bg-gradient-to-r from-primary to-electric font-semibold text-white">
                    <a href={selected.repoUrl} target="_blank" rel="noopener noreferrer">
                      Lihat Source Code
                    </a>
                  </Button>
                ) : (
                  <p className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Lock className="size-4" aria-hidden="true" />
                    Repositori privat — tidak tersedia untuk publik.
                  </p>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
