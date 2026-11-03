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
      // playing a chime on turn-on
      setTimeout(() => playBleep(660, 'square', 0.08), 50);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b-2 border-[var(--line)] bg-[var(--ink)]/95 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between min-h-[64px] gap-4">
        {/* Coin Mark / Player Identity */}
        <a 
          href="#top" 
          onClick={(e) => handleNavClick(e, 'top')} 
          className="inline-flex items-center gap-3 no-underline group focus-visible:outline-2 focus-visible:outline-[var(--amber)]"
        >
          <div className="w-8 h-8 grid place-items-center bg-[var(--amber)] text-[var(--ink)] font-pixel text-[10px] font-bold shadow-[2px_2px_0_rgba(0,0,0,0.85)] group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform">
            YP
          </div>
          <div className="hidden sm:block font-pixel text-[9px] leading-tight text-[var(--cream)]">
            <div className="tracking-wide">YUDHA PRATAMA</div>
            <div className="font-mono text-[9px] text-[#8e8878] tracking-widest mt-1">SISTEM INFORMASI · UMSU</div>
          </div>
        </a>

        {/* Center / Right Nav Items */}
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Arcade Main Navigation">
          <a
            href="#stage"
            onClick={(e) => handleNavClick(e, 'stage')}
            className="px-2 sm:px-3 py-1.5 border-2 border-transparent hover:border-[var(--line-2)] hover:bg-[var(--panel)] font-mono text-[10px] tracking-wider text-[#b9b19c] hover:text-[var(--cream)] uppercase transition-colors"
          >
            STAGE
          </a>
          <a
            href="#skill"
            onClick={(e) => handleNavClick(e, 'skill')}
            className="px-2 sm:px-3 py-1.5 border-2 border-transparent hover:border-[var(--line-2)] hover:bg-[var(--panel)] font-mono text-[10px] tracking-wider text-[#b9b19c] hover:text-[var(--cream)] uppercase transition-colors"
          >
            SKILL
          </a>
          <a
            href="#trophy"
            onClick={(e) => handleNavClick(e, 'trophy')}
            className="px-2 sm:px-3 py-1.5 border-2 border-transparent hover:border-[var(--line-2)] hover:bg-[var(--panel)] font-mono text-[10px] tracking-wider text-[#b9b19c] hover:text-[var(--cream)] uppercase transition-colors"
          >
            TROPHY
          </a>
          <a
            href="#kontak"
            onClick={(e) => handleNavClick(e, 'kontak')}
            className="px-2 sm:px-3 py-1.5 border-2 border-transparent hover:border-[var(--line-2)] hover:bg-[var(--panel)] font-mono text-[10px] tracking-wider text-[#b9b19c] hover:text-[var(--cream)] uppercase transition-colors"
          >
            KONTAK
          </a>
        </nav>

        {/* Right HUD Controls: Hi-Score & SFX */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[var(--line)] font-mono text-[10px] tracking-wider text-[#b9b19c]">
            <span>HI-SCORE</span>
            <b className="text-[var(--amber)] font-bold">3.83</b>
          </div>

          <button
            type="button"
            onClick={handleSfxToggle}
            className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 border-2 font-mono text-[10px] tracking-wider transition-colors cursor-pointer ${
              sfxEnabled
                ? 'border-[var(--amber)] text-[var(--amber)] bg-[var(--panel)]'
                : 'border-[var(--line)] text-[#8e8878] hover:border-[var(--line-2)] hover:text-[#b9b19c] bg-transparent'
            }`}
            aria-label={`Toggle sound effects, currently ${sfxEnabled ? 'on' : 'off'}`}
          >
            <span>SFX:</span>
            <span className={sfxEnabled ? 'text-emerald-400 font-bold' : 'text-[#8e8878] font-bold'}>
              {sfxEnabled ? 'ON' : 'OFF'}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};
