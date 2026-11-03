import React from 'react';

export const ArcadeFooter: React.FC = () => {
  return (
    <footer className="footer">
      <div className="shell footer__in">
        <span>© 2026 Yudha Pratama</span>
        <span>Built with Laravel, React &amp; terlalu banyak kopi</span>
        <span className="font-pixel text-[8.5px] text-[var(--amber)]">
          1 CREDIT · GAME OVER?
        </span>
      </div>
    </footer>
  );
};
