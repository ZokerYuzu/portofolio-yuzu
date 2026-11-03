import React from 'react';
import { PixelHeart, PixelCoin } from '../ui/pixel-icons';
import { useArcadeAudio } from '../../hooks/use-arcade-audio';

export const HeroArcade: React.FC = () => {
  const { playBleep } = useArcadeAudio();

  const handleScrollTo = (id: string) => {
    playBleep(440, 'square', 0.08);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="top" className="relative pt-12 pb-14 md:pt-20 md:pb-20 border-b-2 border-[var(--line)]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 items-center">
          
          {/* Left Column: Text & Hero Details (col-span-7) */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Tag badge */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 border-2 border-[var(--line-2)] bg-[var(--panel)] font-mono text-[10px] tracking-widest uppercase text-[var(--amber)] mb-6">
              <span className="w-2 h-2 bg-[var(--amber)] animate-pulse" />
              <span>[P1] STATUS: ACTIVE · MEDAN, ID</span>
            </div>

            {/* Main Heading with 8-bit styling */}
            <h1 className="font-pixel text-xl sm:text-2xl md:text-3xl lg:text-[32px] text-[var(--cream)] leading-[1.6] tracking-tight">
              MEMBANGUN SISTEM INTERNAL &amp; APLIKASI WEB YANG RELIABLE
              <span 
                className="inline-block w-3 h-5 md:w-3.5 md:h-6 ml-2 bg-[var(--amber)] animate-blink align-middle" 
                aria-hidden="true" 
              />
            </h1>

            {/* Role subtitle */}
            <div className="mt-4 font-mono text-xs sm:text-sm tracking-wider uppercase text-[var(--blue)] font-bold">
              SISTEM INFORMASI UMSU · FULL-STACK WEB DEVELOPER
            </div>

            {/* Lede / Intro prose */}
            <p className="mt-5 text-sm sm:text-base text-[#cfc7b4] leading-relaxed max-w-xl font-sans">
              Berpengalaman merancang arsitektur sistem enterprise, workflow automation, dan integrasi backend-frontend yang modular. Telah meluncurkan 4 sistem internal teruji untuk operasional institusi dan puluhan proyek web modern.
            </p>

            {/* Retro Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <button
                type="button"
                onClick={() => handleScrollTo('stage')}
                onMouseEnter={() => playBleep(600, 'square', 0.03)}
                className="inline-flex items-center justify-center gap-2.5 px-5 py-3 border-2 border-[var(--amber)] bg-[var(--amber)] text-[var(--ink)] font-pixel text-[10px] uppercase shadow-[4px_4px_0_rgba(0,0,0,0.85)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_rgba(0,0,0,0.85)] active:translate-x-1 active:translate-y-1 transition-all cursor-pointer"
              >
                <span>▶</span>
                <span>JELAJAHI PROYEK</span>
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('skill')}
                onMouseEnter={() => playBleep(520, 'square', 0.03)}
                className="inline-flex items-center justify-center gap-2 px-4 py-3 border-2 border-[var(--line-2)] hover:border-[var(--cream)] bg-[var(--panel)] hover:bg-[var(--panel-2)] text-[var(--cream)] font-pixel text-[10px] uppercase shadow-[4px_4px_0_rgba(0,0,0,0.85)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0_rgba(0,0,0,0.85)] active:translate-x-1 active:translate-y-1 transition-all cursor-pointer"
              >
                <span>POHON SKILL</span>
              </button>

              <button
                type="button"
                onClick={() => handleScrollTo('kontak')}
                onMouseEnter={() => playBleep(440, 'square', 0.03)}
                className="inline-flex items-center justify-center px-4 py-3 border-2 border-[var(--line)] hover:border-[var(--line-2)] bg-transparent text-[#b9b19c] hover:text-[var(--cream)] font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                <span>[KONTAK]</span>
              </button>
            </div>
          </div>

          {/* Right Column: Arcade Character Frame (col-span-5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 flex justify-center">
            <div className="w-full max-w-sm border-2 border-[var(--line-2)] bg-[var(--panel)] shadow-[8px_8px_0_rgba(0,0,0,0.85)] flex flex-col">
              
              {/* Card Header HUD */}
              <div className="flex items-center justify-between px-3.5 py-2.5 border-b-2 border-[var(--line)] font-mono text-[10px] tracking-widest uppercase text-[#b9b19c] bg-[var(--ink)]">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-500 animate-ping inline-block" />
                  <span>PLAYER 1</span>
                </span>
                <span>
                  LVL <b className="text-[var(--amber)]">04</b>
                </span>
              </div>

              {/* Character Viewport (Screen) */}
              <div className="relative aspect-square overflow-hidden bg-[#e6ddc8] flex items-end justify-center border-b-2 border-[var(--line)]">
                {/* 8-bit Character Sprite with idle-bob animation */}
                <img
                  src="/assets/sprite-840.png"
                  alt="Potret 8-bit Muhammad Yudha Pratama sedang coding di laptop"
                  width={420}
                  height={425}
                  className="w-full h-full object-contain object-bottom pixelated animate-idle-bob"
                  loading="eager"
                />

                {/* CRT Screen Scanline Simulation */}
                <div 
                  className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.1)_0px,rgba(0,0,0,0.1)_2px,transparent_2px,transparent_6px)]" 
                  aria-hidden="true" 
                />
              </div>

              {/* Card Footer HUD: Hearts & Coins */}
              <div className="px-3.5 py-2.5 flex items-center justify-between font-mono text-[10px] tracking-wider text-[#b9b19c] bg-[var(--panel)]">
                <div className="flex items-center gap-2">
                  <span>HP:</span>
                  <div className="flex items-center gap-1" aria-label="5 HP out of 5">
                    <PixelHeart filled className="w-3.5 h-3.5 text-rose-500" />
                    <PixelHeart filled className="w-3.5 h-3.5 text-rose-500" />
                    <PixelHeart filled className="w-3.5 h-3.5 text-rose-500" />
                    <PixelHeart filled className="w-3.5 h-3.5 text-rose-500" />
                    <PixelHeart filled className="w-3.5 h-3.5 text-rose-500" />
                  </div>
                </div>

                <div className="flex items-center gap-1.5">
                  <PixelCoin className="w-3.5 h-3.5 text-[var(--amber)]" />
                  <span className="text-[var(--cream)] font-bold">COIN 03</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
