import React, { useEffect } from 'react';
import type { Stage } from '../../data/arcade-portfolio';
import { PixelCross } from '../ui/pixel-icons';
import { useArcadeAudio } from '../../hooks/use-arcade-audio';

interface ProjectModalProps {
  stage: Stage | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ stage, onClose }) => {
  const { playBleep } = useArcadeAudio();

  // Close on Escape key and lock body scroll
  useEffect(() => {
    if (!stage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playBleep(360, 'square', 0.05);
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [stage, onClose, playBleep]);

  if (!stage) return null;

  const stackPills = stage.stack.split(' · ');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => {
        playBleep(360, 'square', 0.05);
        onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto border-2 border-[var(--amber)] bg-[var(--panel)] shadow-[10px_10px_0_rgba(0,0,0,0.95)] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="sticky top-0 z-10 flex items-center justify-between px-4 py-3 border-b-2 border-[var(--line)] bg-[var(--panel-2)]">
          <div className="flex items-center gap-3">
            <span className="font-pixel text-[10px] text-[var(--amber)]">
              [{stage.code}]
            </span>
            <span className="px-2 py-0.5 border border-[var(--line-2)] font-mono text-[9px] uppercase tracking-wider text-[var(--blue)] font-bold bg-[var(--panel)]">
              {stage.flag}
            </span>
            <span className="font-mono text-[10px] text-[#8e8878]">
              {stage.year}
            </span>
          </div>

          <button
            type="button"
            onClick={() => {
              playBleep(360, 'square', 0.05);
              onClose();
            }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 border-2 border-[var(--line-2)] hover:border-[var(--amber)] bg-[var(--panel)] text-[var(--cream)] hover:text-[var(--amber)] font-mono text-[10px] tracking-wider uppercase transition-colors cursor-pointer"
            aria-label="Tutup jendela modal"
          >
            <span>TUTUP</span>
            <PixelCross className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Modal Visual Media Banner */}
        {stage.image ? (
          <div className="relative w-full aspect-video sm:aspect-[21/9] overflow-hidden bg-black border-b-2 border-[var(--line)]">
            <img
              src={stage.image}
              alt={`Tangkapan layar ${stage.name}`}
              className="w-full h-full object-cover object-top"
            />
            <div 
              className="absolute inset-0 pointer-events-none bg-[repeating-linear-gradient(to_bottom,rgba(0,0,0,0.12)_0px,rgba(0,0,0,0.12)_2px,transparent_2px,transparent_6px)]" 
              aria-hidden="true" 
            />
          </div>
        ) : (
          <div className="w-full py-8 px-6 bg-[var(--ink)] border-b-2 border-[var(--line)] flex flex-col items-center justify-center text-center">
            <div className="font-pixel text-[10px] text-[var(--amber)] mb-2">
              [ENTERPRISE SYSTEM BLUEPRINT]
            </div>
            <div className="font-mono text-xs text-[#8e8878] max-w-md">
              Screenshot tidak dipublikasikan ke publik karena mencakup data internal &amp; operasional {stage.context}.
            </div>
          </div>
        )}

        {/* Modal Main Content */}
        <div className="p-5 sm:p-7 space-y-6">
          {/* Title & Lede */}
          <div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold text-[var(--cream)] tracking-tight">
              {stage.name}
            </h2>
            <div className="font-mono text-xs text-[var(--blue)] font-bold mt-1 tracking-wide">
              ROLE: {stage.role} · {stage.context}
            </div>
            <p className="mt-3 text-sm text-[#d8d0bd] leading-relaxed font-sans">
              {stage.summary}
            </p>
          </div>

          {/* Grid: Yang dibangun vs Tantangan */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t-2 border-[var(--line)]">
            
            {/* Features Built */}
            <div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--amber)] mb-3 font-bold">
                [FITUR YANG DIBANGUN]
              </div>
              <ul className="space-y-2.5 text-xs text-[#cfc7b4]">
                {stage.built.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-[var(--amber)] select-none mt-0.5">■</span>
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technical Context & Details */}
            <div className="space-y-4">
              <div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--amber)] mb-2 font-bold">
                  [STATUS &amp; LINGKUP]
                </div>
                <p className="text-xs text-[#cfc7b4] leading-relaxed font-sans">
                  Status: {stage.status}. Tipe arsitektur {stage.kind.toLowerCase()} dirancang untuk keandalan dan stabilitas tinggi.
                </p>
              </div>

              {/* Tech Stack */}
              <div>
                <div className="font-mono text-[10px] tracking-widest uppercase text-[var(--amber)] mb-2 font-bold">
                  [STACK TEKNOLOGI]
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {stackPills.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 border border-[var(--line)] bg-[var(--ink)] font-mono text-[9px] text-[var(--cream)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Modal Sticky Footer Links */}
        <div className="sticky bottom-0 z-10 flex items-center justify-between px-5 py-3.5 border-t-2 border-[var(--line)] bg-[var(--panel-2)] gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            {stage.repo && (
              <a
                href={stage.repo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-[var(--line-2)] hover:border-[var(--cream)] bg-[var(--panel)] text-[var(--cream)] font-mono text-[10px] tracking-wider uppercase transition-colors"
              >
                <span>[KODE REPO]</span>
                <span>↗</span>
              </a>
            )}

            {stage.demo && (
              <a
                href={stage.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 border-2 border-[var(--amber)] bg-[var(--amber)] text-[var(--ink)] font-pixel text-[9px] tracking-wider uppercase shadow-[2px_2px_0_rgba(0,0,0,0.8)] hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span>DEMO ONLINE</span>
                <span>▶</span>
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={() => {
              playBleep(360, 'square', 0.05);
              onClose();
            }}
            className="px-4 py-1.5 border-2 border-[var(--line-2)] hover:border-[var(--line)] bg-[var(--panel)] text-[#a39c8a] hover:text-[var(--cream)] font-mono text-[10px] tracking-wider uppercase transition-colors cursor-pointer"
          >
            SELESAI [ESC]
          </button>
        </div>

      </div>
    </div>
  );
};
