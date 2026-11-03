import React, { useEffect } from 'react';
import type { Stage } from '../../data/arcade-portfolio';
import { useArcadeAudio } from '../../hooks/use-arcade-audio';

interface ProjectModalProps {
  stage: Stage | null;
  currentIndex: number;
  totalStages: number;
  onPrev: () => void;
  onNext: () => void;
  onClose: () => void;
}

const pad = (n: number) => String(n).padStart(2, '0');

export const ProjectModal: React.FC<ProjectModalProps> = ({
  stage,
  currentIndex,
  totalStages,
  onPrev,
  onNext,
  onClose,
}) => {
  const { playBleep } = useArcadeAudio();

  // Keyboard navigation: Escape to close, ArrowLeft / ArrowRight to navigate
  useEffect(() => {
    if (!stage) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        playBleep(360, 'square', 0.05);
        onClose();
      } else if (e.key === 'ArrowLeft') {
        if (currentIndex > 0) {
          playBleep(440, 'square', 0.05);
          onPrev();
        }
      } else if (e.key === 'ArrowRight') {
        if (currentIndex < totalStages - 1) {
          playBleep(520, 'square', 0.05);
          onNext();
        }
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [stage, currentIndex, totalStages, onPrev, onNext, onClose, playBleep]);

  if (!stage) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm"
      onClick={() => {
        playBleep(360, 'square', 0.05);
        onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-name"
    >
      <div
        className="modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="modal__bar">
          <span className="modal__code pixel" id="modal-code">
            {stage.code}
          </span>
          <span className="modal__flag mono" id="modal-flag">
            {stage.flag}
          </span>
          <button
            className="modal__x"
            type="button"
            onClick={() => {
              playBleep(360, 'square', 0.05);
              onClose();
            }}
          >
            TUTUP [ESC]
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal__body">
          {stage.image && (
            <div
              className="modal__media"
              style={{ backgroundImage: `url('${stage.image}')` }}
            />
          )}

          <div className="modal__text">
            <div className="modal__title">
              <p className="mono modal__year" id="modal-year">
                {stage.year}
              </p>
              <h2 className="modal__name" id="modal-name">
                {stage.name}
              </h2>
              <p className="modal__summary" id="modal-summary">
                {stage.summary}
              </p>
              {!stage.image && (
                <p className="modal__note" id="modal-note">
                  Screenshot tidak dipublikasikan karena sistem internal {stage.context}.
                </p>
              )}
            </div>

            <div className="modal__cols">
              <div>
                <h3 className="modal__h">Yang dibangun</h3>
                <ol className="build" id="modal-built">
                  {stage.built.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ol>
              </div>

              <div>
                <h3 className="modal__h">Data</h3>
                <dl className="meta">
                  <div>
                    <dt>Peran</dt>
                    <dd>{stage.role}</dd>
                  </div>
                  <div>
                    <dt>Stack</dt>
                    <dd>{stage.stack}</dd>
                  </div>
                  <div>
                    <dt>Konteks</dt>
                    <dd>{stage.context}</dd>
                  </div>
                  <div>
                    <dt>Status</dt>
                    <dd>{stage.status}</dd>
                  </div>
                </dl>
              </div>
            </div>

            <div className="modal__actions">
              {stage.repo && (
                <a
                  href={stage.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="modal__act-btn"
                >
                  <span>KODE REPO</span>
                  <span>↗</span>
                </a>
              )}
              {stage.demo && (
                <a
                  href={stage.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="modal__act-btn"
                  style={{ borderColor: 'var(--amber)', color: 'var(--amber)' }}
                >
                  <span>DEMO ONLINE</span>
                  <span>▶</span>
                </a>
              )}
              {!stage.repo && !stage.demo && (
                <span className="modal__act-badge">PROPRIETARY INTERNAL SYSTEM</span>
              )}
            </div>
          </div>
        </div>

        {/* Modal Foot Controls */}
        <div className="modal__foot">
          <button
            className="modal__step"
            type="button"
            disabled={currentIndex === 0}
            onClick={() => {
              playBleep(440, 'square', 0.05);
              onPrev();
            }}
          >
            ← SEBELUMNYA
          </button>

          <span className="modal__index mono" id="modal-index">
            {pad(currentIndex + 1)} / {pad(totalStages)}
          </span>

          <button
            className="modal__step"
            type="button"
            disabled={currentIndex >= totalStages - 1}
            onClick={() => {
              playBleep(520, 'square', 0.05);
              onNext();
            }}
          >
            BERIKUTNYA →
          </button>
        </div>

      </div>
    </div>
  );
};
