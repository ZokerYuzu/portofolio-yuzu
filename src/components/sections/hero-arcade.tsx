import React from 'react';
import { PixelHeart } from '../ui/pixel-icons';
import { useArcadeAudio } from '../../hooks/use-arcade-audio';

export const HeroArcade: React.FC = () => {
  const { playBleep } = useArcadeAudio();

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    playBleep(480, 'square', 0.06);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-12 pb-14 md:pt-18 md:pb-16 border-b-2 border-[var(--line)]" id="main">
      <div className="shell grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 md:gap-12 items-start">
        
        {/* Left Column: Player Bio & CTAs */}
        <div>
          <p className="tag">
            <i aria-hidden="true" /> Player 1 · Medan, ID
          </p>

          <h1 className="font-pixel text-3xl sm:text-4xl md:text-5xl lg:text-[46px] leading-[1.4] text-[var(--cream)] m-0">
            YUDHA<br />PRATAMA
            <span className="cursor" aria-hidden="true" />
          </h1>

          <p className="mt-5 font-mono text-xs sm:text-sm tracking-widest uppercase text-[var(--blue)] font-bold brightness-125">
            Web &amp; Full-Stack Developer
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#cfc7b4] leading-relaxed max-w-[46ch] font-sans">
            Saya bangun sistem internal yang dipakai tiap hari. Sekarang magang di Angkasa Pura
            Aviasi, Kualanamu — empat sistem sudah jalan di sana: budaya kerja, tata kelola
            dokumen, manajemen tugas, dan kupon undian event.
          </p>

          <div className="flex items-center gap-3 mt-7 flex-wrap">
            <a
              href="#stage"
              onClick={(e) => handleNav(e, 'stage')}
              onMouseEnter={() => playBleep(600, 'square', 0.03)}
              className="btn btn--amber"
            >
              PRESS START
            </a>
            <a
              href="#kontak"
              onClick={(e) => handleNav(e, 'kontak')}
              onMouseEnter={() => playBleep(440, 'square', 0.03)}
              className="btn btn--ghost"
            >
              KIRIM EMAIL
            </a>
          </div>

          <p className="mt-6 font-mono text-[10px] tracking-widest text-[#7d7666] uppercase">
            INSERT COIN · 1 CREDIT · KLIK STAGE UNTUK DETAIL
          </p>
        </div>

        {/* Right Column: Player Sprite Card */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm border-2 border-[var(--line-2)] bg-[var(--panel)] shadow-[8px_8px_0_rgba(0,0,0,0.85)] flex flex-col">
            
            {/* Player Bar */}
            <div className="flex items-center justify-between px-3 py-2 border-b-2 border-[var(--line)] font-mono text-[9.5px] tracking-wider uppercase text-[#b9b19c]">
              <span>PLAYER 1</span>
              <span>
                LVL <b className="text-[var(--amber)]">4</b>
              </span>
            </div>

            {/* Player Screen */}
            <div className="relative aspect-square overflow-hidden bg-[var(--cream)] border-b-2 border-[var(--line)] flex items-end justify-center">
              <img
                src="/assets/sprite-840.png"
                width={840}
                height={850}
                alt="Potret pixel Yudha Pratama sedang bekerja di laptop"
                className="w-full h-full object-cover object-bottom pixelated animate-idle-bob"
              />
              <div
                className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.09)_0px,rgba(0,0,0,0.09)_2px,transparent_2px,transparent_6px)]"
                aria-hidden="true"
              />
            </div>

            {/* Player Foot */}
            <div className="flex items-center justify-between px-3 py-2.5 font-mono text-[9.5px] text-[#b9b19c] bg-[var(--panel)]">
              <span>HP 5/5</span>
              <span className="flex items-center gap-1" aria-hidden="true">
                <PixelHeart className="w-3 h-3 text-rose-500" />
                <PixelHeart className="w-3 h-3 text-rose-500" />
                <PixelHeart className="w-3 h-3 text-rose-500" />
                <PixelHeart className="w-3 h-3 text-rose-500" />
                <PixelHeart className="w-3 h-3 text-rose-500" />
              </span>
              <span>COIN 03</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
