# Design Spec: 100% Parity Alignment with 8-Bit Arcade Mockup

**Date:** 2026-11-03  
**Status:** Approved  
**Author:** AI Pair Programmer & Muhammad Yudha Pratama  

## 1. Goal & Context

Refactor the React 19 application (`src/`) to achieve 1:1 visual, functional, and structural fidelity with `mockup-8bit-arcade.html`, while maintaining:
1. Strict **zero-emoji** policy across the web interface (all unicode emojis replaced by pixelated SVGs like `PixelTrophy`, `PixelScroll`, `PixelBolt`, `PixelStar`).
2. Stepped 4-frame animated character idle bobbing on `sprite-840.png` (`image-rendering: pixelated`).
3. Clean TypeScript 5.8 strict typing, Tailwind CSS v4 design tokens, and modular React 19 components.

---

## 2. Structural & Layout Differences to Reconcile

### 2.1 Missing Section: `02 STAGE CLEAR` (Pengalaman Industri)
- **Problem:** The original mockup contains an entire section dedicated to professional experience and leadership history (`#pengalaman`) which was omitted from the React build.
- **Solution:** Implement `ExperienceArcade` (`src/components/sections/experience-arcade.tsx`) with `.sec-head` styling, 4 milestone rows (`PT Angkasa Pura Aviasi [ONGOING]`, `Innovillage 2025 [CLEARED]`, `PTPN IV [CLEARED]`, `HIMASI UMSU [SIDE QUEST]`), and matching monospace retro badges.

### 2.2 Carousel Card Thumbnails & Ghost Numbers
- **Problem:** Previous React cards lacked the signature `.stage__thumb` container with 16:9 previews, large numbered badges (`01`, `02`), hover "Detail" labels, and retro ghost numbers for internal projects lacking public screenshots.
- **Solution:** Re-architect `ProjectCarousel` cards to include `.stage__thumb` with background image handling (`src(stage.image)`), fallback `.stage__ghost` number, and accurate metadata labels.

### 2.3 Modal Intra-Stage Navigation (Prev/Next)
- **Problem:** In `mockup-8bit-arcade.html`, users can flip between stages directly within the detail modal using `← SEBELUMNYA` and `BERIKUTNYA →` buttons, with a synchronized counter (`01 / 11`) and keyboard arrows (`ArrowLeft` / `ArrowRight`).
- **Solution:** Upgrade `ProjectModal` to support `currentIndex`, `totalStages`, `onPrev`, `onNext`, and arrow key bindings.

### 2.4 Tech Tree Branch Grouping
- **Problem:** Skills in the mockup are grouped under their branch headings (`BACKEND CORE [4]`, `FRONTEND ARC [3]`, etc.) in the node grid, with clear node hierarchy and status indicators (`EQUIPPED`, `MASTERED`, `IN-USE`).
- **Solution:** Render skills grouped by branch category with `.tree-branch-header`, preserving active branch filtering and node selection state.

### 2.5 Integrated Trophy Shelf
- **Problem:** Trophy cards were split into a separate detached section. In the mockup, they are integrated at the bottom of `#skill` as `ACHIEVEMENT & TROPHY VAULT`.
- **Solution:** Place `TrophyShelf` directly inside `#skill` as modeled in the mockup.

### 2.6 Copywriting & HUD Alignment
- **Problem:** Microcopy in hero, headers, and footer deviated from the authentic Indonesian arcade text crafted in the mockup.
- **Solution:** Match exact copy from mockup:
  - HUD: `01 Proyek`, `02 Pengalaman`, `03 Skill`, `04 Kontak`, `HI SCORE 3.83`, `SFX: OFF/ON`.
  - Hero: `Player 1 · Medan, ID`, `YUDHA PRATAMA` H1, `Web & Full-Stack Developer`, `PRESS START` (amber), `KIRIM EMAIL` (ghost), `INSERT COIN · 1 CREDIT · KLIK STAGE UNTUK DETAIL`.
  - Score Bar: `04 Sistem internal`, `11 Proyek`, `02 Pengalaman industri`, `3.83 IPK / 4.00`.
  - Contact: `CONTINUE? 9 · 8 · 7 · 6 · 5`, `PUNYA YANG MAU DIBANGUN?`, `SALIN EMAIL`, `MEDAN · UTC+7`.
  - Footer: `© 2026 Yudha Pratama`, `Built with Laravel, React & terlalu banyak kopi`, `1 CREDIT · GAME OVER?`.

### 2.7 Retro Dot Matrix Background
- **Problem:** Background was plain dark without the 24px dot-matrix grid.
- **Solution:** Add `body::before` background gradient grid matching mockup CSS.
