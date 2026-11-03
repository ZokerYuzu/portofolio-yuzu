import { useState } from 'react';
import { ScanlinesOverlay } from '@/components/layout/scanlines-overlay';
import { ArcadeHud } from '@/components/layout/arcade-hud';
import { HeroArcade } from '@/components/sections/hero-arcade';
import { ScoreBar } from '@/components/sections/score-bar';
import { ProjectCarousel } from '@/components/sections/project-carousel';
import { ProjectModal } from '@/components/sections/project-modal';
import { ExperienceArcade } from '@/components/sections/experience-arcade';
import { TechTree } from '@/components/sections/tech-tree';
import { ContactArcade } from '@/components/sections/contact-arcade';
import { ArcadeFooter } from '@/components/layout/arcade-footer';
import { STAGES } from '@/data/arcade-portfolio';
import type { Stage } from '@/data/arcade-portfolio';

export default function App() {
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);
  const [selectedStageIndex, setSelectedStageIndex] = useState<number>(0);

  const handleSelectStage = (stage: Stage, index: number) => {
    setSelectedStage(stage);
    setSelectedStageIndex(index);
  };

  const handlePrevStage = () => {
    if (selectedStageIndex > 0) {
      const newIdx = selectedStageIndex - 1;
      setSelectedStageIndex(newIdx);
      setSelectedStage(STAGES[newIdx]);
    }
  };

  const handleNextStage = () => {
    if (selectedStageIndex < STAGES.length - 1) {
      const newIdx = selectedStageIndex + 1;
      setSelectedStageIndex(newIdx);
      setSelectedStage(STAGES[newIdx]);
    }
  };

  const handleOpenStageByCode = (code: string) => {
    const idx = STAGES.findIndex((s) => s.code === code);
    if (idx !== -1) {
      setSelectedStageIndex(idx);
      setSelectedStage(STAGES[idx]);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--cream)] selection:bg-[var(--amber)] selection:text-[var(--ink)] font-sans relative">
      <a className="skip" href="#main">
        LEWATI KE KONTEN
      </a>

      {/* CRT Scanline Overlay */}
      <ScanlinesOverlay />

      {/* Sticky HUD Navigation */}
      <ArcadeHud />

      {/* Main Sections */}
      <main id="main">
        <HeroArcade />
        <ScoreBar />
        <ProjectCarousel
          onSelectStage={handleSelectStage}
          activeStageCode={selectedStage?.code}
        />
        <ExperienceArcade />
        <TechTree onOpenStage={handleOpenStageByCode} />
        <ContactArcade />
      </main>

      {/* Footer */}
      <ArcadeFooter />

      {/* Stage Detail Modal */}
      <ProjectModal
        stage={selectedStage}
        currentIndex={selectedStageIndex}
        totalStages={STAGES.length}
        onPrev={handlePrevStage}
        onNext={handleNextStage}
        onClose={() => setSelectedStage(null)}
      />
    </div>
  );
}
