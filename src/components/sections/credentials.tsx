import { BadgeCheck, GraduationCap } from 'lucide-react'

import { Reveal } from '@/components/reveal'

const CERTIFICATIONS = [
  { title: 'Junior Web Developer', issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)' },
  { title: 'Code Generation & Optimization', issuer: 'IBM Granite / Hacktiv8 Indonesia' },
]

export function Credentials() {
  return (
    <section
      className="section-divider relative bg-deep-navy py-24"
      aria-labelledby="gelar-heading"
    >
      <div className="mx-auto max-w-5xl px-6">
        <Reveal className="mb-16 text-center">
          <h2 id="gelar-heading" className="mb-4 text-3xl font-bold text-white md:text-5xl">
            Gelar &amp; <span className="gradient-text-blue">Lisensi</span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-primary to-electric" />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <Reveal className="group rounded-3xl border border-primary/15 bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
            <div className="pointer-events-none mb-6 flex size-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
              <GraduationCap className="size-7" aria-hidden="true" />
            </div>
            <h3 className="mb-2 text-2xl font-bold text-white">S1 Sistem Informasi</h3>
            <p className="mb-1 font-medium text-muted-foreground">Universitas Muhammadiyah Sumatera Utara</p>
            <p className="mb-6 inline-block rounded border border-primary/15 bg-primary/10 px-3 py-1 text-sm font-semibold text-blue-300">
              2023 - Sekarang
            </p>
            <div className="border-t border-primary/15 pt-4">
              <p className="text-4xl font-extrabold text-white">
                3.83<span className="text-lg font-normal text-muted-foreground"> / 4.00 IPK</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="group rounded-3xl border border-primary/15 bg-card p-8 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/30">
            <div className="mb-6 flex size-16 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-electric transition-transform duration-300 group-hover:scale-110">
              <BadgeCheck className="size-7" aria-hidden="true" />
            </div>
            <h3 className="mb-4 text-2xl font-bold text-white">Sertifikasi Profesional</h3>
            <ul className="space-y-4">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.title} className="flex items-start gap-3">
                  <BadgeCheck className="mt-0.5 size-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <h4 className="font-bold text-slate-200">{cert.title}</h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
