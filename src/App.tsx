import { useState } from 'react';
import { ScanlinesOverlay } from '@/components/layout/scanlines-overlay';
import { ArcadeHud } from '@/components/layout/arcade-hud';
import { HeroArcade } from '@/components/sections/hero-arcade';
import { ScoreBar } from '@/components/sections/score-bar';
import { ProjectCarousel } from '@/components/sections/project-carousel';
import { TechTree } from '@/components/sections/tech-tree';
import { TrophyVault } from '@/components/sections/trophy-vault';
import { ContactArcade } from '@/components/sections/contact-arcade';
import { ArcadeFooter } from '@/components/layout/arcade-footer';
import { ProjectModal } from '@/components/sections/project-modal';
import { STAGES } from '@/data/arcade-portfolio';
import type { Stage } from '@/data/arcade-portfolio';

export default function App() {
  const [selectedStage, setSelectedStage] = useState<Stage | null>(null);

  const handleOpenStageByCode = (code: string) => {
    const found = STAGES.find((s) => s.code === code);
    if (found) {
      setSelectedStage(found);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--ink)] text-[var(--cream)] selection:bg-[var(--amber)] selection:text-[var(--ink)] font-sans relative">
      {/* CRT Scanline Overlay Effect */}
      <ScanlinesOverlay />

      {/* Retro Sticky HUD Navigation */}
      <ArcadeHud />

      {/* Main Arcade Experience */}
      <main id="main-content">
        <HeroArcade />
        <ScoreBar />
        <ProjectCarousel
          onSelectStage={(stage) => setSelectedStage(stage)}
          activeStageCode={selectedStage?.code}
        />
        <TechTree onOpenStage={handleOpenStageByCode} />
        <TrophyVault />
        <ContactArcade />
      </main>

      {/* Arcade Footer Credits */}
      <ArcadeFooter />

      {/* Stage Detail Modal */}
      <ProjectModal
        stage={selectedStage}
        onClose={() => setSelectedStage(null)}
      />
    </div>
  );
}
