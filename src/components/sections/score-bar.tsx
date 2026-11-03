import React from 'react';

export const ScoreBar: React.FC = () => {
  return (
    <div className="border-t-2 border-b-2 border-[var(--line)] bg-[var(--panel)]">
      <div className="shell grid grid-cols-2 md:grid-cols-4 gap-2">
        <div className="flex items-baseline gap-2.5 py-5 px-1">
          <span className="font-pixel text-base sm:text-[17px] text-[var(--amber)]">04</span>
          <span className="font-mono text-[9.5px] tracking-wider uppercase text-[#a39c8a]">Sistem internal</span>
        </div>
        <div className="flex items-baseline gap-2.5 py-5 px-1">
          <span className="font-pixel text-base sm:text-[17px] text-[var(--amber)]">11</span>
          <span className="font-mono text-[9.5px] tracking-wider uppercase text-[#a39c8a]">Proyek</span>
        </div>
        <div className="flex items-baseline gap-2.5 py-5 px-1">
          <span className="font-pixel text-base sm:text-[17px] text-[var(--amber)]">02</span>
          <span className="font-mono text-[9.5px] tracking-wider uppercase text-[#a39c8a]">Pengalaman industri</span>
        </div>
        <div className="flex items-baseline gap-2.5 py-5 px-1">
          <span className="font-pixel text-base sm:text-[17px] text-[var(--amber)]">3.83</span>
          <span className="font-mono text-[9.5px] tracking-wider uppercase text-[#a39c8a]">IPK / 4.00</span>
        </div>
      </div>
    </div>
  );
};
