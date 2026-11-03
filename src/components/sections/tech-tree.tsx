import React, { useState } from 'react';
import { TECH_BRANCHES, TECH_TREE } from '../../data/arcade-portfolio';
import type { TechSkill } from '../../data/arcade-portfolio';
import { PixelStar } from '../ui/pixel-icons';
import { useArcadeAudio } from '../../hooks/use-arcade-audio';

interface TechTreeProps {
  onOpenStage: (code: string) => void;
}

export const TechTree: React.FC<TechTreeProps> = ({ onOpenStage }) => {
  const [activeBranch, setActiveBranch] = useState<string>('all');
  const [selectedSkillId, setSelectedSkillId] = useState<string>(TECH_TREE[0]?.id || 'laravel');
  const { playBleep } = useArcadeAudio();

  const filteredSkills = TECH_TREE.filter((skill) => {
    if (activeBranch === 'all') return true;
    return skill.branch === activeBranch;
  });

  const selectedSkill: TechSkill = TECH_TREE.find((s) => s.id === selectedSkillId) || TECH_TREE[0];

  const handleBranchClick = (branchId: string) => {
    setActiveBranch(branchId);
    playBleep(440, 'square', 0.04);
  };

  const handleSkillSelect = (skill: TechSkill) => {
    setSelectedSkillId(skill.id);
    playBleep(640, 'square', 0.04);
  };

  // Convert skill.level (1-5) to 10 XP pips
  const filledPips = Math.round((selectedSkill.level / 5) * 10);

  return (
    <section id="skill" className="py-16 md:py-20 border-b-2 border-[var(--line)] bg-[var(--ink)]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-[var(--line-2)] bg-[var(--panel)] font-mono text-[9px] tracking-widest uppercase text-[var(--amber)] mb-3">
            <span>[SKILL MATRIX]</span>
            <span>·</span>
            <span>TECH TREE HUD</span>
          </div>
          <h2 className="font-pixel text-lg sm:text-2xl text-[var(--cream)] tracking-tight">
            POHON SKILL &amp; KOMPETENSI
          </h2>
          <p className="font-mono text-xs text-[#a39c8a] mt-2 max-w-xl">
            Pilih node keahlian untuk memeriksa level penguasaan, implementasi production, dan stage proyek terkait.
          </p>
        </div>

        {/* Branch Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 flex-wrap" role="tablist" aria-label="Kategori skill">
          <button
            type="button"
            role="tab"
            aria-selected={activeBranch === 'all'}
            onClick={() => handleBranchClick('all')}
            className={`px-3.5 py-1.5 border-2 font-mono text-[10px] tracking-wider uppercase transition-all cursor-pointer shadow-[3px_3px_0_rgba(0,0,0,0.6)] ${
              activeBranch === 'all'
                ? 'border-[var(--amber)] bg-[var(--amber)] text-[var(--ink)] font-bold translate-x-0.5 translate-y-0.5 shadow-none'
                : 'border-[var(--line-2)] bg-[var(--panel)] text-[#a39c8a] hover:border-[var(--line)] hover:text-[var(--cream)]'
            }`}
          >
            SEMUA CABANG
          </button>
          {TECH_BRANCHES.map((branch) => (
            <button
              key={branch.id}
              type="button"
              role="tab"
              aria-selected={activeBranch === branch.id}
              onClick={() => handleBranchClick(branch.id)}
              className={`px-3.5 py-1.5 border-2 font-mono text-[10px] tracking-wider uppercase transition-all cursor-pointer shadow-[3px_3px_0_rgba(0,0,0,0.6)] ${
                activeBranch === branch.id
                  ? 'border-[var(--amber)] bg-[var(--amber)] text-[var(--ink)] font-bold translate-x-0.5 translate-y-0.5 shadow-none'
                  : 'border-[var(--line-2)] bg-[var(--panel)] text-[#a39c8a] hover:border-[var(--line)] hover:text-[var(--cream)]'
              }`}
            >
              {branch.name}
            </button>
          ))}
        </div>

        {/* Grid Layout: Left Nodes + Right RPG Inspector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Skill Nodes (col-span-7) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {filteredSkills.map((skill) => {
                const isSelected = selectedSkill.id === skill.id;
                return (
                  <button
                    key={skill.id}
                    type="button"
                    onClick={() => handleSkillSelect(skill)}
                    className={`p-3.5 border-2 text-left transition-all flex flex-col justify-between cursor-pointer ${
                      isSelected
                        ? 'border-[var(--amber)] bg-[var(--panel)] shadow-[4px_4px_0_rgba(245,165,36,0.35)] translate-x-0.5 translate-y-0.5'
                        : 'border-[var(--line-2)] bg-[var(--panel-2)] hover:border-[var(--line)] text-[#cfc7b4] shadow-[3px_3px_0_rgba(0,0,0,0.7)] hover:-translate-y-0.5'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div>
                      {/* Node Top Header */}
                      <div className="flex items-center justify-between font-mono text-[8.5px] uppercase tracking-wider text-[#8e8878] mb-1.5">
                        <span className="flex items-center gap-1.5">
                          {isSelected && <span className="text-[var(--amber)] font-bold">▶</span>}
                          <span>{skill.branch}</span>
                        </span>
                        <span className="px-1.5 py-0.2 border border-[var(--line)] bg-[var(--ink)] text-[var(--blue)] font-bold">
                          {skill.tier}
                        </span>
                      </div>

                      {/* Skill Name */}
                      <div className="text-sm font-bold text-[var(--cream)] leading-snug">
                        {skill.name}
                      </div>
                    </div>

                    {/* Star Rating & Stage Count */}
                    <div className="flex items-center justify-between pt-2.5 mt-2.5 border-t border-[var(--line)] font-mono text-[9px]">
                      <div className="flex items-center gap-1" aria-label={`Rating ${skill.level} dari 5`}>
                        {[1, 2, 3, 4, 5].map((star) => (
                          <PixelStar
                            key={star}
                            size={11}
                            className={star <= skill.level ? 'text-[var(--amber)]' : 'text-[#3d3d46]'}
                          />
                        ))}
                      </div>
                      <span className="text-[#8e8878]">
                        {skill.stages.length} STAGE
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: RPG HUD Inspector (col-span-5) */}
          <div className="lg:col-span-5">
            <div className="sticky top-20 border-2 border-[var(--amber)] bg-[var(--panel)] p-5 sm:p-6 shadow-[8px_8px_0_rgba(0,0,0,0.9)] flex flex-col gap-4">
              
              {/* Inspector Top Bar */}
              <div className="flex items-center justify-between pb-3 border-b-2 border-[var(--line)]">
                <span className="font-pixel text-[9px] text-[var(--amber)]">
                  [INSPECTOR]
                </span>
                <span className="px-2 py-0.5 border border-emerald-500/40 bg-emerald-950/30 font-mono text-[8.5px] tracking-widest uppercase text-emerald-400 font-bold">
                  {selectedSkill.status}
                </span>
              </div>

              {/* Title & Tier */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--cream)] tracking-tight">
                  {selectedSkill.name}
                </h3>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--blue)] font-bold mt-1">
                  {selectedSkill.tier} · {selectedSkill.branch.toUpperCase()}
                </div>
              </div>

              {/* 10-Pip XP Gauge */}
              <div className="p-3 border border-[var(--line)] bg-[var(--panel-2)]">
                <div className="flex items-center justify-between font-mono text-[9px] tracking-widest uppercase text-[#a39c8a] mb-2">
                  <span>MASTERY GAUGE</span>
                  <span className="text-[var(--amber)] font-bold">{selectedSkill.level} / 5 ({selectedSkill.xp}% XP)</span>
                </div>
                <div className="inspector-xp-gauge flex gap-1 h-2.5">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`flex-1 transition-colors ${
                        i < filledPips ? 'bg-[var(--amber)]' : 'bg-[#2a2a34]'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Real-World Context Description */}
              <p className="text-xs sm:text-sm text-[#d8d0bd] leading-relaxed font-sans">
                {selectedSkill.desc}
              </p>

              {/* Production Perks */}
              <div className="pt-2 border-t border-[var(--line)]">
                <div className="font-mono text-[9px] tracking-widest uppercase text-[#8e8878] mb-2 font-bold">
                  [FITUR &amp; PERK PRODUKSI]
                </div>
                <ul className="space-y-1.5 text-xs text-[#cfc7b4]">
                  {selectedSkill.perks.map((perk, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[var(--amber)] select-none mt-0.5">■</span>
                      <span className="leading-snug">{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cross-Link Stage Pills */}
              <div className="pt-3 border-t border-[var(--line)]">
                <div className="font-mono text-[9px] tracking-widest uppercase text-[#8e8878] mb-2 font-bold">
                  [TERVERIFIKASI PADA STAGE]
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedSkill.stages.length > 0 ? (
                    selectedSkill.stages.map((stageCode) => (
                      <button
                        key={stageCode}
                        type="button"
                        onClick={() => {
                          playBleep(600, 'square', 0.05);
                          onOpenStage(stageCode);
                        }}
                        className="px-2.5 py-1 border border-[var(--line-2)] hover:border-[var(--amber)] bg-[var(--ink)] text-[var(--cream)] hover:text-[var(--amber)] font-mono text-[9.5px] uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5"
                        aria-label={`Buka modal untuk stage ${stageCode}`}
                      >
                        <span>[{stageCode}]</span>
                        <span>▶</span>
                      </button>
                    ))
                  ) : (
                    <span className="font-mono text-[9px] text-[#7d7666]">
                      [CORE ARCHITECTURE &amp; WORKFLOW]
                    </span>
                  )}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
