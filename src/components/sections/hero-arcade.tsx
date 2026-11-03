import React from 'react';
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
    <section className="hero">
      <div className="shell hero__grid">
        {/* Left Column: Bio & CTAs */}
        <div>
          <p className="tag">
            <i aria-hidden="true" /> Player 1 · Medan, ID
          </p>

          <h1 className="hero-h1 pixel">
            YUDHA<br />PRATAMA
            <span className="cursor" aria-hidden="true" />
          </h1>

          <p className="role">Web &amp; Full-Stack Developer</p>

          <p className="lede">
            Saya bangun sistem internal yang dipakai tiap hari. Sekarang magang di Angkasa Pura
            Aviasi, Kualanamu — empat sistem sudah jalan di sana: budaya kerja, tata kelola
            dokumen, manajemen tugas, dan kupon undian event.
          </p>

          <div className="cta">
            <a
              className="btn btn--amber"
              href="#stage"
              onClick={(e) => handleNav(e, 'stage')}
              onMouseEnter={() => playBleep(600, 'square', 0.03)}
            >
              PRESS START
            </a>
            <a
              className="btn btn--ghost"
              href="#kontak"
              onClick={(e) => handleNav(e, 'kontak')}
              onMouseEnter={() => playBleep(440, 'square', 0.03)}
            >
              KIRIM EMAIL
            </a>
          </div>

          <p className="hint">INSERT COIN · 1 CREDIT · KLIK STAGE UNTUK DETAIL</p>
        </div>

        {/* Right Column: Player Sprite Card */}
        <div className="player">
          <div className="player__bar">
            <span>PLAYER 1</span>
            <span>
              LVL <b>4</b>
            </span>
          </div>

          <div className="player__screen">
            <img
              src="/assets/sprite-840.png"
              width={840}
              height={850}
              alt="Potret pixel Yudha Pratama sedang bekerja di laptop"
              className="pixelated animate-idle-bob"
            />
          </div>

          <div className="player__foot">
            <span>HP 5/5</span>
            <span className="hearts" aria-hidden="true">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
            <span>COIN 03</span>
          </div>
        </div>

      </div>
    </section>
  );
};
