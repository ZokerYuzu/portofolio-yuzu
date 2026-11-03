import React from 'react';

export const ArcadeFooter: React.FC = () => {
  return (
    <footer className="border-t-2 border-[var(--line)] bg-[var(--ink)] py-8 text-[#8e8878]">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[10px] tracking-wider uppercase text-center sm:text-left">
        <div>
          © 2026 MUHAMMAD YUDHA PRATAMA
        </div>
        <div className="text-[#a39c8a]">
          BUILT WITH REACT 19 · TYPESCRIPT · TAILWIND CSS
        </div>
        <div className="font-pixel text-[8.5px] text-[var(--amber)]">
          1 CREDIT · GAME OVER?
        </div>
      </div>
    </footer>
  );
};
