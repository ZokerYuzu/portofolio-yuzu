import React, { useState, useRef, useEffect } from 'react';
import { STAGES } from '../../data/arcade-portfolio';
import type { Stage } from '../../data/arcade-portfolio';
import { useArcadeAudio } from '../../hooks/use-arcade-audio';

interface ProjectCarouselProps {
  onSelectStage: (stage: Stage) => void;
  activeStageCode?: string;
}

type FilterCategory = 'SEMUA' | 'INTERNAL' | 'SHIPPED' | 'ARCHIVE';

const FILTERS: FilterCategory[] = ['SEMUA', 'INTERNAL', 'SHIPPED', 'ARCHIVE'];

export const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ onSelectStage, activeStageCode }) => {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('SEMUA');
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const { playBleep } = useArcadeAudio();

  const filteredStages = STAGES.filter((stage) => {
    if (activeFilter === 'SEMUA') return true;
    return stage.flag === activeFilter;
  });

  const handleFilterClick = (filter: FilterCategory) => {
    setActiveFilter(filter);
    setCurrentIndex(0);
    playBleep(480, 'square', 0.04);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
  };

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const items = trackRef.current.children;
    if (index >= 0 && index < items.length) {
      const targetElement = items[index] as HTMLElement;
      targetElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      setCurrentIndex(index);
      playBleep(520, 'square', 0.04);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredStages.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  // Sync scroll position with current index
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const handleScroll = () => {
      const scrollLeft = track.scrollLeft;
      const itemWidth = track.firstElementChild ? (track.firstElementChild as HTMLElement).offsetWidth + 20 : 400;
      const newIndex = Math.round(scrollLeft / itemWidth);
      if (newIndex >= 0 && newIndex < filteredStages.length && newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    track.addEventListener('scroll', handleScroll, { passive: true });
    return () => track.removeEventListener('scroll', handleScroll);
  }, [currentIndex, filteredStages.length]);

  return (
    <section id="stage" className="py-16 md:py-20 border-b-2 border-[var(--line)] bg-[var(--ink)]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border-2 border-[var(--line-2)] bg-[var(--panel)] font-mono text-[9px] tracking-widest uppercase text-[var(--amber)] mb-3">
              <span>[STAGE SELECT]</span>
              <span>·</span>
              <span>11 PROYEK TERUJI</span>
            </div>
            <h2 className="font-pixel text-lg sm:text-2xl text-[var(--cream)] tracking-tight">
              PILIH STAGE PROYEK
            </h2>
            <p className="font-mono text-xs text-[#a39c8a] mt-2 max-w-xl">
              Geser kartu secara horizontal atau klik navigasi untuk meninjau detail arsitektur, stack, dan tantangan teknis.
            </p>
          </div>

          {/* Carousel Controls (PREV / NEXT / COUNTER) */}
          <div className="flex items-center gap-3">
            <div className="px-3 py-2 border-2 border-[var(--line)] bg-[var(--panel-2)] font-mono text-[10px] tracking-widest text-[var(--amber)]">
              STAGE {String(currentIndex + 1).padStart(2, '0')} / {String(filteredStages.length).padStart(2, '0')}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="stage-ctrl-btn px-3 py-2 border-2 border-[var(--line-2)] disabled:border-[var(--line)] disabled:opacity-30 bg-[var(--panel)] hover:border-[var(--amber)] text-[var(--cream)] hover:text-[var(--amber)] font-mono text-[10px] tracking-wider uppercase transition-all shadow-[3px_3px_0_rgba(0,0,0,0.7)] disabled:shadow-none cursor-pointer disabled:cursor-not-allowed"
                aria-label="Previous Project"
              >
                ◀ PREV
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === filteredStages.length - 1}
                className="stage-ctrl-btn px-3 py-2 border-2 border-[var(--line-2)] disabled:border-[var(--line)] disabled:opacity-30 bg-[var(--panel)] hover:border-[var(--amber)] text-[var(--cream)] hover:text-[var(--amber)] font-mono text-[10px] tracking-wider uppercase transition-all shadow-[3px_3px_0_rgba(0,0,0,0.7)] disabled:shadow-none cursor-pointer disabled:cursor-not-allowed"
                aria-label="Next Project"
              >
                NEXT ▶
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 mb-8 flex-wrap" role="tablist" aria-label="Filter proyek">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              role="tab"
              aria-selected={activeFilter === filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-3.5 py-1.5 border-2 font-mono text-[10px] tracking-wider uppercase transition-all cursor-pointer shadow-[3px_3px_0_rgba(0,0,0,0.6)] ${
                activeFilter === filter
                  ? 'border-[var(--amber)] bg-[var(--amber)] text-[var(--ink)] font-bold translate-x-0.5 translate-y-0.5 shadow-none'
                  : 'border-[var(--line-2)] bg-[var(--panel)] text-[#a39c8a] hover:border-[var(--line)] hover:text-[var(--cream)]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Horizontal Snap Track */}
        <div className="relative">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 pt-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {filteredStages.map((stage, idx) => {
              const isSelected = activeStageCode === stage.code;
              const stackPills = stage.stack.split(' · ');

              return (
                <div
                  key={stage.code}
                  className={`flex-shrink-0 w-[88vw] sm:w-[380px] md:w-[420px] snap-start border-2 bg-[var(--panel)] p-5 flex flex-col justify-between cursor-pointer transition-all ${
                    isSelected
                      ? 'border-[var(--amber)] shadow-[6px_6px_0_rgba(245,165,36,0.3)]'
                      : 'border-[var(--line-2)] hover:border-[var(--amber)] shadow-[5px_5px_0_rgba(0,0,0,0.8)] hover:-translate-y-1'
                  }`}
                  onClick={() => {
                    playBleep(580, 'square', 0.05);
                    onSelectStage(stage);
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      playBleep(580, 'square', 0.05);
                      onSelectStage(stage);
                    }
                  }}
                  aria-label={`Lihat detail ${stage.name}`}
                >
                  <div>
                    {/* Stage Header */}
                    <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-[var(--line)]">
                      <div className="flex items-center gap-2">
                        <span className="font-pixel text-[9px] text-[var(--amber)]">
                          STAGE {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span className="font-mono text-[9px] text-[#7d7666]">[{stage.code}]</span>
                      </div>
                      <span className="px-2 py-0.5 border border-[var(--line-2)] font-mono text-[8px] tracking-wider uppercase text-[var(--blue)] font-bold bg-[var(--panel-2)]">
                        {stage.flag}
                      </span>
                    </div>

                    {/* Stage Title & Year */}
                    <div className="flex items-baseline justify-between gap-2 mb-2">
                      <h3 className="text-base sm:text-lg font-bold text-[var(--cream)] group-hover:text-[var(--amber)] leading-tight">
                        {stage.name}
                      </h3>
                      <span className="font-mono text-[9px] text-[#8e8878]">{stage.year}</span>
                    </div>

                    {/* Summary */}
                    <p className="text-xs text-[#b9b19c] leading-relaxed mb-4 line-clamp-3 font-sans">
                      {stage.summary}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {stackPills.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 border border-[var(--line)] bg-[var(--ink)] font-mono text-[8.5px] text-[#cfc7b4]"
                        >
                          {tech}
                        </span>
                      ))}
                      {stackPills.length > 4 && (
                        <span className="px-1.5 py-0.5 font-mono text-[8.5px] text-[#7d7666]">
                          +{stackPills.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Stage Card Footer CTA */}
                  <div className="pt-3 border-t-2 border-[var(--line)] flex items-center justify-between font-mono text-[9.5px]">
                    <span className="text-[#8e8878]">{stage.role}</span>
                    <span className="text-[var(--amber)] font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      <span>DETAIL</span>
                      <span>▶</span>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
