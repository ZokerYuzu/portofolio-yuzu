import React, { useState } from 'react';
import { SITE_META } from '../../data/arcade-portfolio';
import { useArcadeAudio } from '../../hooks/use-arcade-audio';

export const ContactArcade: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { playBleep } = useArcadeAudio();

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SITE_META.email);
      setCopied(true);
      playBleep(880, 'square', 0.1);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="kontak" className="py-16 md:py-24 border-b-2 border-[var(--line)] bg-[var(--ink)]">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        
        {/* Retro Continue Dialog Box */}
        <div className="border-2 border-[var(--amber)] bg-[var(--panel)] p-6 sm:p-10 shadow-[10px_10px_0_rgba(0,0,0,0.9)]">
          
          {/* Retro Countdown Header */}
          <div className="font-pixel text-[11px] sm:text-xs text-[var(--amber)] mb-4 tracking-widest flex items-center gap-2 flex-wrap">
            <span>CONTINUE?</span>
            <span className="text-[var(--cream)]">09 · 08 · 07 · 06 · 05</span>
          </div>

          {/* Heading */}
          <h2 className="font-pixel text-lg sm:text-2xl md:text-3xl text-[var(--cream)] leading-[1.5] tracking-tight">
            PUNYA TANTANGAN SISTEM ATAU PROYEK BARU?
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#cfc7b4] leading-relaxed font-sans max-w-2xl">
            Siap membantu merancang arsitektur sistem enterprise, otomasi alur kerja operasional, atau aplikasi web end-to-end yang tangguh dan mudah di-maintain.
          </p>

          {/* Direct Email Display & Copy Button */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href={`mailto:${SITE_META.email}`}
              className="inline-flex items-center gap-2 font-mono text-base sm:text-lg text-[var(--amber)] hover:text-amber-300 border-b-2 border-[var(--amber)] pb-0.5 transition-colors"
            >
              <span>{SITE_META.email}</span>
              <span>↗</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className={`px-3 py-1.5 border-2 font-mono text-[10px] tracking-wider uppercase transition-all cursor-pointer shadow-[2px_2px_0_rgba(0,0,0,0.8)] ${
                copied
                  ? 'border-emerald-400 bg-emerald-950/40 text-emerald-400'
                  : 'border-[var(--line-2)] hover:border-[var(--cream)] bg-[var(--panel-2)] text-[var(--cream)]'
              }`}
            >
              {copied ? '[EMAIL TERSALIN!]' : '[SALIN ALAMAT EMAIL]'}
            </button>
          </div>

          {/* External Social Profiles */}
          <div className="mt-8 pt-6 border-t-2 border-[var(--line)] flex items-center gap-3 flex-wrap">
            <span className="font-mono text-[10px] text-[#7d7666] uppercase tracking-wider mr-1">
              PROFIL:
            </span>

            <a
              href={SITE_META.socials.github}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 border-2 border-[var(--line-2)] hover:border-[var(--cream)] bg-[var(--ink)] text-[var(--cream)] font-mono text-[10px] tracking-wider uppercase transition-colors"
            >
              GITHUB ↗
            </a>

            <a
              href={SITE_META.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 border-2 border-[var(--line-2)] hover:border-[var(--cream)] bg-[var(--ink)] text-[var(--cream)] font-mono text-[10px] tracking-wider uppercase transition-colors"
            >
              LINKEDIN ↗
            </a>

            <a
              href={SITE_META.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 border-2 border-[var(--line-2)] hover:border-[var(--cream)] bg-[var(--ink)] text-[var(--cream)] font-mono text-[10px] tracking-wider uppercase transition-colors"
            >
              INSTAGRAM ↗
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
