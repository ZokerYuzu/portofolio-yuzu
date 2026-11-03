import React from 'react';
import { TROPHIES } from '../../data/arcade-portfolio';
import { PixelTrophy, PixelScroll, PixelBolt } from '../ui/pixel-icons';
import { useArcadeAudio } from '../../hooks/use-arcade-audio';

export const TrophyVault: React.FC = () => {
  const { playBleep } = useArcadeAudio();

  const getTrophyIcon = (icon: 'trophy' | 'scroll' | 'bolt') => {
    switch (icon) {
      case 'trophy':
        return <PixelTrophy className="w-5 h-5 text-[var(--amber)]" />;
      case 'scroll':
        return <PixelScroll className="w-5 h-5 text-[var(--blue)]" />;
      case 'bolt':
        return <PixelBolt className="w-5 h-5 text-amber-400" />;
      default:
        return <PixelTrophy className="w-5 h-5 text-[var(--amber)]" />;
    }
  };

  return (
    <section id="trophy" className="py-16 md:py-20 border-b-2 border-[var(--line)] bg-[var(--ink)]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-[var(--line-2)] bg-[var(--panel)] font-mono text-[9px] tracking-widest uppercase text-[var(--amber)] mb-3">
            <span>[TROPHY VAULT]</span>
            <span>·</span>
            <span>AKADEMIK &amp; SERTIFIKASI</span>
          </div>
          <h2 className="font-pixel text-lg sm:text-2xl text-[var(--cream)] tracking-tight">
            PENCAPAIAN &amp; KREDENSIAL
          </h2>
          <p className="font-mono text-xs text-[#a39c8a] mt-2 max-w-xl">
            Bukti kompetensi formal, sertifikasi standar nasional BNSP, dan penghargaan akademik resmi.
          </p>
        </div>

        {/* 3 Plakat Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {TROPHIES.map((trophy) => (
            <div
              key={trophy.id}
              onMouseEnter={() => playBleep(620, 'square', 0.03)}
              className="p-5 border-2 border-[var(--line-2)] hover:border-[var(--amber)] bg-[var(--panel)] shadow-[5px_5px_0_rgba(0,0,0,0.8)] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Top Bar with Icon & Verified Badge */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[var(--line)]">
                  <div className="w-9 h-9 grid place-items-center bg-[var(--panel-2)] border border-[var(--line)]">
                    {getTrophyIcon(trophy.icon)}
                  </div>
                  <span className="px-2 py-0.5 border border-emerald-500/40 bg-emerald-950/30 font-mono text-[8px] tracking-widest uppercase text-emerald-400 font-bold">
                    [VERIFIED]
                  </span>
                </div>

                {/* Trophy Title */}
                <h3 className="text-base font-bold text-[var(--cream)] leading-snug mb-1">
                  {trophy.name}
                </h3>

                {/* Subtitle / Role */}
                <div className="font-mono text-[10px] text-[var(--amber)] font-bold mb-3">
                  {trophy.role}
                </div>

                {/* Issuer */}
                <p className="text-xs text-[#a39c8a] leading-relaxed font-sans mb-4">
                  {trophy.issuer}
                </p>
              </div>

              {/* Card Footer: Metric & Badge */}
              <div className="pt-3 border-t border-[var(--line)] flex items-center justify-between font-mono text-[9px] text-[#7d7666]">
                <span className="text-[var(--blue)] font-bold">{trophy.badge}</span>
                <span className="text-[var(--cream)] font-bold">
                  {trophy.metricLabel}: <b className="text-[var(--amber)]">{trophy.metricValue}</b>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
