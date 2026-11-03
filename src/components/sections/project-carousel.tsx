import React, { useState, useRef, useEffect } from 'react';
import { STAGES } from '../../data/arcade-portfolio';
import type { Stage } from '../../data/arcade-portfolio';
import { useArcadeAudio } from '../../hooks/use-arcade-audio';

interface ProjectCarouselProps {
  onSelectStage: (stage: Stage, index: number) => void;
  activeStageCode?: string;
}

type FilterCategory = 'all' | 'INTERNAL' | 'SHIPPED' | 'ARCHIVE';

const pad = (n: number) => String(n).padStart(2, '0');

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ onSelectStage, activeStageCode }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const { playBleep } = useArcadeAudio();

  const filteredStagesWithIndex = STAGES.map((stage, originalIdx) => ({ stage, originalIdx })).filter(
    ({ stage }) => {
      if (activeFilter === 'all') return true;
      return stage.flag === activeFilter;
    }
  );

  const handleFilterClick = (filter: FilterCategory) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
    playBleep(480, 'square', 0.05);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const card = trackRef.current.querySelector('.stage') as HTMLElement;
    const cardWidth = card ? card.offsetWidth + 20 : 380;
    trackRef.current.scrollTo({ left: index * cardWidth, behavior: 'smooth' });
    setCurrentIndex(index);
    playBleep(520, 'square', 0.05);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredStagesWithIndex.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const card = track.querySelector('.stage') as HTMLElement;
      const cardWidth = card ? card.offsetWidth + 20 : 380;
      const scrollPos = track.scrollLeft;
      const newIdx = Math.min(
        filteredStagesWithIndex.length - 1,
        Math.max(0, Math.round(scrollPos / cardWidth))
      );
      if (newIdx !== currentIndex) {
        setCurrentIndex(newIdx);
      }
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [currentIndex, filteredStagesWithIndex.length]);

  return (
    <section className="section py-16 md:py-20 border-b-2 border-[var(--line)]" id="stage">
      <div className="shell">
        
        {/* Section Head */}
        <div className="sec-head">
          <div className="sec-head__left">
            <span className="sec-head__num">01</span>
            <h2>SELECT STAGE</h2>
          </div>
          <span className="sec-head__note">11 STAGE · 2023—2026</span>
        </div>

        {/* Head Controls Row: Filters + Prev/Counter/Next */}
        <div className="stages-head-row">
          <div className="stage-filters" role="tablist" aria-label="Filter Proyek">
            <button
              className={`filter-btn ${activeFilter === 'all' ? 'is-active' : ''}`}
              type="button"
              onClick={() => handleFilterClick('all')}
            >
              SEMUA [11]
            </button>
            <button
              className={`filter-btn ${activeFilter === 'INTERNAL' ? 'is-active' : ''}`}
              type="button"
              onClick={() => handleFilterClick('INTERNAL')}
            >
              INTERNAL AVI [4]
            </button>
            <button
              className={`filter-btn ${activeFilter === 'SHIPPED' ? 'is-active' : ''}`}
              type="button"
              onClick={() => handleFilterClick('SHIPPED')}
            >
              SHIPPED / PUBLIK [4]
            </button>
            <button
              className={`filter-btn ${activeFilter === 'ARCHIVE' ? 'is-active' : ''}`}
              type="button"
              onClick={() => handleFilterClick('ARCHIVE')}
            >
              ARSIP AKADEMIK [3]
            </button>
          </div>

          <div className="stages-ctrls">
            <button
              className="stage-ctrl-btn"
              type="button"
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Tahap Sebelumnya"
            >
              ◄ PREV
            </button>
            <span className="stage-counter-badge mono">
              {pad(currentIndex + 1)} / {pad(filteredStagesWithIndex.length)}
            </span>
            <button
              className="stage-ctrl-btn"
              type="button"
              onClick={handleNext}
              disabled={currentIndex >= filteredStagesWithIndex.length - 1}
              aria-label="Tahap Berikutnya"
            >
              NEXT ►
            </button>
          </div>
        </div>

        {/* Carousel Track */}
        <div className="stages-carousel-wrapper">
          <div ref={trackRef} className="stages-track">
            {filteredStagesWithIndex.map(({ stage, originalIdx }, index) => {
              const isSelected = activeStageCode === stage.code;

              return (
                <button
                  key={stage.code}
                  type="button"
                  className="stage"
                  aria-current={isSelected}
                  onMouseEnter={() => playBleep(360, 'triangle', 0.03)}
                  onClick={() => {
                    playBleep(640, 'square', 0.08);
                    onSelectStage(stage, originalIdx);
                  }}
                >
                  <span
                    className={`stage__thumb ${stage.image ? '' : 'stage__thumb--flat'}`}
                    style={stage.image ? { backgroundImage: `url('${stage.image}')` } : undefined}
                  >
                    <span className="stage__num">{pad(index + 1)}</span>
                    {!stage.image && <span className="stage__ghost">{pad(index + 1)}</span>}
                    <span className="stage__open">Detail</span>
                  </span>

                  <span className="stage__body">
                    <span className="stage__meta">
                      <span>{stage.code}</span>
                      <span>{stage.year}</span>
                    </span>
                    <span className="stage__name">{stage.name}</span>
                    <span className="stage__stack">{stage.stack}</span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
