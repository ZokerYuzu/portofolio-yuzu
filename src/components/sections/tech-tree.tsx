import React, { useState } from 'react';
import { TECH_BRANCHES, TECH_TREE, STAGES, TROPHIES } from '../../data/arcade-portfolio';
import type { TechSkill } from '../../data/arcade-portfolio';
import { PixelStar, PixelTrophy, PixelScroll, PixelBolt } from '../ui/pixel-icons';
import { useArcadeAudio } from '../../hooks/use-arcade-audio';

interface TechTreeProps {
  onOpenStage: (code: string) => void;
}

export const TechTree: React.FC<TechTreeProps> = ({ onOpenStage }) => {
  const [activeBranch, setActiveBranch] = useState<string>('all');
  const [selectedSkillId, setSelectedSkillId] = useState<string>(TECH_TREE[0]?.id || 'laravel');
  const { playBleep } = useArcadeAudio();

  const selectedSkill: TechSkill = TECH_TREE.find((s) => s.id === selectedSkillId) || TECH_TREE[0];

  const branchesToShow = activeBranch === 'all'
    ? TECH_BRANCHES
    : TECH_BRANCHES.filter((b) => b.id === activeBranch);

  const handleBranchClick = (branchId: string) => {
    setActiveBranch(branchId);
    playBleep(450, 'square', 0.05);
  };

  const handleSkillSelect = (skill: TechSkill) => {
    setSelectedSkillId(skill.id);
    playBleep(skill.freq, 'square', 0.08);
  };

  const filledPips = Math.round(selectedSkill.xp / 10);

  const getTrophyIcon = (icon: 'trophy' | 'scroll' | 'bolt') => {
    switch (icon) {
      case 'trophy':
        return <PixelTrophy className="w-4 h-4 text-[var(--amber)]" />;
      case 'scroll':
        return <PixelScroll className="w-4 h-4 text-[var(--blue)]" />;
      case 'bolt':
        return <PixelBolt className="w-4 h-4 text-amber-400" />;
      default:
        return <PixelTrophy className="w-4 h-4 text-[var(--amber)]" />;
    }
  };

  return (
    <section className="section py-16 md:py-20 border-b-2 border-[var(--line)]" id="skill">
      <div className="shell">
        
        {/* Section Head */}
        <div className="sec-head">
          <div className="sec-head__left">
            <span className="sec-head__num">03</span>
            <h2>TECH TREE & INVENTORY</h2>
          </div>
          <span className="sec-head__note">INTERACTIVE SKILL MATRIX · KLIK NODE UNTUK INSPECT</span>
        </div>

        {/* Tree Branch Nav */}
        <div className="tree-nav" role="tablist" aria-label="Filter Cabang Keahlian">
          <button
            className={`tree-nav-btn ${activeBranch === 'all' ? 'is-active' : ''}`}
            type="button"
            onClick={() => handleBranchClick('all')}
          >
            SEMUA CABANG [12]
          </button>
          {TECH_BRANCHES.map((b) => {
            const count = TECH_TREE.filter((s) => s.branch === b.id).length;
            return (
              <button
                key={b.id}
                className={`tree-nav-btn ${activeBranch === b.id ? 'is-active' : ''}`}
                type="button"
                onClick={() => handleBranchClick(b.id)}
              >
                {b.name} [{count}]
              </button>
            );
          })}
        </div>

        {/* Tree Shell: Left Branch Groups + Right Inspector */}
        <div className="tree-shell">
          
          {/* Left: Branch Groups */}
          <div className="tree-branches">
            {branchesToShow.map((branch) => {
              const skillsInBranch = TECH_TREE.filter((s) => s.branch === branch.id);
              if (!skillsInBranch.length) return null;

              return (
                <div key={branch.id} className="tree-branch-group">
                  <div className="tree-branch-header">
                    <span className="tree-branch-title">{branch.name}</span>
                    <span className="tree-branch-count">{skillsInBranch.length} NODES</span>
                  </div>

                  <div className="tree-nodes-grid">
                    {skillsInBranch.map((skill) => {
                      const isSelected = skill.id === selectedSkillId;

                      return (
                        <button
                          key={skill.id}
                          type="button"
                          className={`tree-node ${isSelected ? 'is-selected' : ''}`}
                          onMouseEnter={() => playBleep(skill.freq * 0.8, 'triangle', 0.03)}
                          onClick={() => handleSkillSelect(skill)}
                        >
                          <div className="tree-node-top">
                            <span className="tree-node-tier">{skill.tier}</span>
                            <span className="tree-node-status">{skill.status}</span>
                          </div>

                          <div className="tree-node-name">{skill.name}</div>

                          <div className="tree-node-meta">
                            <span className="flex items-center gap-0.5" aria-label={`Rating ${skill.level} dari 5`}>
                              {[1, 2, 3, 4, 5].map((star) => (
                                <PixelStar
                                  key={star}
                                  size={10}
                                  className={star <= skill.level ? 'text-[var(--amber)]' : 'text-[#3d3d46]'}
                                />
                              ))}
                            </span>
                            <span>
                              LVL <b>{skill.level}</b>
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Sticky Inspector */}
          <aside className="tree-inspector" aria-label="Skill Inspector">
            <div className="inspector-bar">
              <span className="inspector-title-code pixel">
                {TECH_BRANCHES.find((b) => b.id === selectedSkill.branch)?.name || 'SKILL MATRIX'}
              </span>
              <span className="inspector-status-badge mono">
                {selectedSkill.status}
              </span>
            </div>

            <div>
              <h3 className="inspector-name">{selectedSkill.name}</h3>
              <div className="inspector-tier">
                {selectedSkill.tier} · LVL {selectedSkill.level}
              </div>
            </div>

            <div className="inspector-xp-wrap">
              <div className="inspector-xp-head">
                <span>PROFICIENCY / XP GAUGE</span>
                <span>{selectedSkill.xp}%</span>
              </div>
              <div className="inspector-xp-gauge">
                {[...Array(10)].map((_, i) => (
                  <div
                    key={i}
                    className={`xp-pip ${i < filledPips ? 'is-filled' : ''}`}
                  />
                ))}
              </div>
            </div>

            <p className="inspector-desc">{selectedSkill.desc}</p>

            <div>
              <h4 className="inspector-h">Yang Dibangun / Production Perks</h4>
              <ul className="inspector-perks">
                {selectedSkill.perks.map((perk, i) => (
                  <li key={i}>{perk}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="inspector-h">Dipakai Di Proyek / Stages (Klik untuk Modal)</h4>
              <div className="inspector-stages">
                {selectedSkill.stages.length > 0 ? (
                  selectedSkill.stages.map((stageCode) => {
                    const stageObj = STAGES.find((s) => s.code === stageCode);
                    const stageName = stageObj ? stageObj.name : stageCode;

                    return (
                      <button
                        key={stageCode}
                        type="button"
                        className="stage-tag-btn"
                        title={`Buka detail modal proyek ${stageName}`}
                        onClick={() => {
                          playBleep(620, 'square', 0.07);
                          onOpenStage(stageCode);
                        }}
                      >
                        <i aria-hidden="true" />
                        <span>{stageCode} · {stageName}</span>
                      </button>
                    );
                  })
                ) : (
                  <span className="mono text-[9px] text-[#7d7666]">
                    DIPAKAI DI WORKFLOW UTAMA
                  </span>
                )}
              </div>
            </div>
          </aside>

        </div>

        {/* Integrated Trophy Shelf */}
        <div className="trophy-shelf">
          <div className="trophy-shelf-header">
            <span className="trophy-shelf-title">ACHIEVEMENT &amp; TROPHY VAULT</span>
            <span className="trophy-shelf-note">OFFICIAL LICENSES &amp; HONORS</span>
          </div>

          <div className="trophy-grid">
            {TROPHIES.map((trophy) => (
              <div key={trophy.id} className="trophy-card">
                <div className="trophy-card-top">
                  <span className="trophy-icon" aria-hidden="true">
                    {getTrophyIcon(trophy.icon)}
                  </span>
                  <span className="trophy-badge">{trophy.badge}</span>
                </div>

                <div>
                  <span className="trophy-role">{trophy.role}</span>
                  <h3 className="trophy-name">{trophy.name}</h3>
                  <p className="trophy-issuer">{trophy.issuer}</p>
                </div>

                <div className="trophy-foot">
                  <span>
                    {trophy.metricLabel} <b>{trophy.metricValue}</b>
                  </span>
                  <span className="trophy-metric">[VERIFIED]</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
