import React from 'react';
import { useArcadeAudio } from '../../hooks/use-arcade-audio';

export const ArcadeHud: React.FC = () => {
  const { sfxEnabled, toggleSfx, playBleep } = useArcadeAudio();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    playBleep(520, 'square', 0.05);
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSfxToggle = () => {
    toggleSfx();
    if (!sfxEnabled) {
      setTimeout(() => playBleep(660, 'square', 0.08), 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--line)] bg-[var(--ink)]/95 backdrop-blur-md">
      <div className="shell flex items-center gap-6 min-h-[64px]">
        {/* Coin / Logo */}
        <a
          href="#main"
          onClick={(e) => handleNavClick(e, 'main')}
          className="inline-flex items-center gap-2.5 no-underline group focus-visible:outline-2 focus-visible:outline-[var(--amber)]"
        >
          <span className="grid place-items-center w-[30px] h-[30px] bg-[var(--amber)] text-[var(--ink)] font-pixel text-[9px] font-bold shadow-[2px_2px_0_rgba(0,0,0,0.85)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
            YP
          </span>
          <span className="font-pixel text-[9px] leading-snug text-[var(--cream)]">
            YUDHA<br />PRATAMA
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="flex items-center gap-1 ml-auto" aria-label="Navigasi utama">
          <a
            href="#stage"
            onClick={(e) => handleNavClick(e, 'stage')}
            className="inline-flex items-center gap-2 min-h-[40px] px-3 border-2 border-transparent hover:border-[var(--line-2)] hover:bg-[var(--panel)] font-mono text-[10px] tracking-widest text-[#b9b19c] hover:text-[var(--cream)] uppercase transition-colors before:content-['·'] hover:before:content-['▶'] hover:before:text-[var(--amber)]"
          >
            01 Proyek
          </a>
          <a
            href="#pengalaman"
            onClick={(e) => handleNavClick(e, 'pengalaman')}
            className="hidden sm:inline-flex items-center gap-2 min-h-[40px] px-3 border-2 border-transparent hover:border-[var(--line-2)] hover:bg-[var(--panel)] font-mono text-[10px] tracking-widest text-[#b9b19c] hover:text-[var(--cream)] uppercase transition-colors before:content-['·'] hover:before:content-['▶'] hover:before:text-[var(--amber)]"
          >
            02 Pengalaman
          </a>
          <a
            href="#skill"
            onClick={(e) => handleNavClick(e, 'skill')}
            className="inline-flex items-center gap-2 min-h-[40px] px-3 border-2 border-transparent hover:border-[var(--line-2)] hover:bg-[var(--panel)] font-mono text-[10px] tracking-widest text-[#b9b19c] hover:text-[var(--cream)] uppercase transition-colors before:content-['·'] hover:before:content-['▶'] hover:before:text-[var(--amber)]"
          >
            03 Skill
          </a>
          <a
            href="#kontak"
            onClick={(e) => handleNavClick(e, 'kontak')}
            className="inline-flex items-center gap-2 min-h-[40px] px-3 border-2 border-transparent hover:border-[var(--line-2)] hover:bg-[var(--panel)] font-mono text-[10px] tracking-widest text-[#b9b19c] hover:text-[var(--cream)] uppercase transition-colors before:content-['·'] hover:before:content-['▶'] hover:before:text-[var(--amber)]"
          >
            04 Kontak
          </a>
        </nav>

        {/* Hi Score & SFX */}
        <div className="flex items-center gap-3">
          <span className="hidden md:inline-flex items-center gap-2 px-3 py-2 border-2 border-[var(--line)] font-mono text-[10px] tracking-wider text-[#b9b19c] whitespace-nowrap">
            HI SCORE <b className="text-[var(--amber)] font-bold">3.83</b>
          </span>

          <button
            type="button"
            onClick={handleSfxToggle}
            className={`inline-flex items-center gap-1.5 px-3 py-2 border-2 font-mono text-[10px] tracking-wider transition-colors cursor-pointer whitespace-nowrap ${
              sfxEnabled
                ? 'border-[var(--amber)] text-[var(--amber)] bg-[var(--panel)]'
                : 'border-[var(--line)] text-[#b9b19c] hover:border-[var(--line-2)] bg-transparent'
            }`}
            aria-pressed={sfxEnabled}
            title="Efek Suara 8-Bit Chiptune"
          >
            <span>SFX:</span>
            <b className={sfxEnabled ? 'text-emerald-400 font-bold' : 'text-[#7d7666] font-bold'}>
              {sfxEnabled ? 'ON' : 'OFF'}
            </b>
          </button>
        </div>
      </div>
    </header>
  );
};
