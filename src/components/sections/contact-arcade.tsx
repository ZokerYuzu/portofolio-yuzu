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
    <section className="contact" id="kontak">
      <div className="shell">
        <div className="contact__box">
          <p className="continue">
            CONTINUE? <span>9 · 8 · 7 · 6 · 5</span>
          </p>

          <h2>PUNYA YANG MAU DIBANGUN?</h2>

          <a className="contact__mail" href={`mailto:${SITE_META.email}`}>
            {SITE_META.email}
          </a>

          <div className="contact__row">
            <button
              className="btn btn--amber"
              type="button"
              id="copy-mail"
              onClick={handleCopyEmail}
            >
              {copied ? 'EMAIL TERSALIN!' : 'SALIN EMAIL'}
            </button>
            <span className="mono text-[10px] tracking-wider uppercase text-[#7d7666]">
              MEDAN · UTC+7
            </span>
          </div>

          <div className="socials">
            <a href={SITE_META.socials.github} target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            <a href={SITE_META.socials.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn
            </a>
            <a href={SITE_META.socials.instagram} target="_blank" rel="noreferrer noopener">
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
