import React from 'react';

interface ScoreItem {
  value: string;
  label: string;
  sub: string;
}

const STATS: ScoreItem[] = [
  {
    value: '04',
    label: 'SISTEM INTERNAL',
    sub: 'Production Ready'
  },
  {
    value: '11',
    label: 'TOTAL PROYEK',
    sub: 'Full-Stack & APIs'
  },
  {
    value: '02',
    label: 'PENGALAMAN KERJA',
    sub: 'Staff IT & Freelance'
  },
  {
    value: '3.83',
    label: 'IPK UMSU',
    sub: 'Sistem Informasi'
  }
];

export const ScoreBar: React.FC = () => {
  return (
    <section className="border-b-2 border-[var(--line)] bg-[var(--ink)]" aria-label="Arcade Player Statistics">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 border-2 border-[var(--line)] bg-[var(--panel)] shadow-[4px_4px_0_rgba(0,0,0,0.6)] flex flex-col justify-between group hover:border-[var(--line-2)] transition-colors"
            >
              <div className="flex items-center justify-between font-mono text-[9px] text-[#8e8878] tracking-widest uppercase mb-2">
                <span>STAT 0{idx + 1}</span>
                <span className="text-[var(--blue)] font-bold">[ONLINE]</span>
              </div>
              <div className="font-pixel text-xl sm:text-2xl lg:text-3xl text-[var(--amber)] tracking-tight my-1">
                {stat.value}
              </div>
              <div className="font-mono text-[10px] tracking-wider uppercase text-[var(--cream)] mt-1 font-bold">
                {stat.label}
              </div>
              <div className="font-mono text-[9px] text-[#8e8878] tracking-wide mt-0.5">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
