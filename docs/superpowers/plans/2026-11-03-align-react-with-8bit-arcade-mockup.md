# Align React Portfolio 100% with 8-Bit Arcade Mockup Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Refactor the React 19 codebase (`src/`) to achieve 1:1 visual, structural, and behavioral parity with `mockup-8bit-arcade.html`—including the missing `02 STAGE CLEAR` section, carousel card thumbnails & ghost numbers, in-modal stage flipping (`← SEBELUMNYA` / `BERIKUTNYA →`), branch-grouped Tech Tree with bottom Trophy Shelf, 24px retro dot-matrix background, and exact arcade copywriting, while strictly enforcing zero unicode emojis and stepped character sprite animation.

**Architecture:** React 19 + TypeScript 5.8 + Tailwind CSS v4. Modular component decomposition in `src/components/` mapping directly to the sections of `mockup-8bit-arcade.html`. Custom Web Audio chiptune synthesizer and pixelated SVG glyphs.

**Tech Stack:** React 19, TypeScript 5.8, Vite 8, Tailwind CSS v4, Web Audio API, Google Fonts (`Press Start 2P`, `Geist`, `Geist Mono`).

**Spec:** [docs/superpowers/specs/2026-11-03-align-react-with-8bit-arcade-mockup-design.md](file:///d:/portofolio-yuzu/docs/superpowers/specs/2026-11-03-align-react-with-8bit-arcade-mockup-design.md)

---

## Global Constraints

- **Zero Emojis:** Strictly NO unicode emojis in any UI component. All icons must be custom pixelated SVGs (`PixelTrophy`, `PixelScroll`, `PixelBolt`, `PixelHeart`, `PixelCoin`, `PixelCross`, `PixelStar`) or retro glyphs.
- **Stepped Sprite Animation:** `sprite-840.png` must render with `image-rendering: pixelated` and `animate-idle-bob`.
- **Type Safety & Build:** Zero TypeScript compiler errors with `verbatimModuleSyntax` and zero warnings during `npm run build`.
- **Exact Layout Parity:** Match all `.shell` containers, section headers (`.sec-head`), typography, button styles (`.btn--amber`, `.btn--ghost`), and grid layouts from `mockup-8bit-arcade.html`.

---

### Task 1: CSS Engine, Dot-Matrix Grid, and Global Design Tokens

**Files:**
- Modify: `D:/portofolio-yuzu/src/index.css`
- Modify: `D:/portofolio-yuzu/src/components/layout/scanlines-overlay.tsx`

**Interfaces:**
- Produces: Dot-matrix 24px grid in `body::before`, `.shell` container sizing (`max-width: 1200px`), `.sec-head` styling, `.btn--amber`, `.btn--ghost`, `.tag`, `.cursor`, and CRT scanline styling matching mockup.

- [x] **Step 1: Write verification script for Task 1 CSS tokens and grid**

```javascript
// scratch/verify-step1-css.cjs
const fs = require('fs');
const css = fs.readFileSync('D:/portofolio-yuzu/src/index.css', 'utf8');

if (!css.includes('sec-head') || !css.includes('24px 24px') || !css.includes('btn--amber')) {
  throw new Error('Missing sec-head, 24px grid, or button styles in src/index.css');
}
console.log('Step 1 CSS verification passed');
```

- [x] **Step 2: Run verification script to confirm failure**

Run: `node scratch/verify-step1-css.cjs`  
Expected: FAIL with "Missing sec-head, 24px grid, or button styles"

- [x] **Step 3: Update `src/index.css`**

- Add the authentic dot-matrix grid to `body::before`:
  `background-image: linear-gradient(to right, rgba(243, 234, 211, 0.035) 1px, transparent 1px), linear-gradient(to bottom, rgba(243, 234, 211, 0.035) 1px, transparent 1px); background-size: 24px 24px;`
- Add `.shell`, `.sec-head`, `.btn`, `.btn--amber`, `.btn--ghost`, `.tag`, `.skip`, and `.stage` utility classes from `mockup-styles.css`.

- [x] **Step 4: Run verification script to confirm pass**

Run: `node scratch/verify-step1-css.cjs`  
Expected: PASS with "Step 1 CSS verification passed"

---

### Task 2: HUD & Hero Section Copywriting & Layout Parity

**Files:**
- Modify: `D:/portofolio-yuzu/src/components/layout/arcade-hud.tsx`
- Modify: `D:/portofolio-yuzu/src/components/sections/hero-arcade.tsx`
- Modify: `D:/portofolio-yuzu/src/components/sections/score-bar.tsx`

**Interfaces:**
- Produces:
  - `<ArcadeHud />`: Nav links (`01 Proyek`, `02 Pengalaman`, `03 Skill`, `04 Kontak`), `YP` coin mark with `YUDHA` / `PRATAMA`, `HI SCORE 3.83`, and `SFX: OFF/ON`.
  - `<HeroArcade />`: Left column with `Player 1 · Medan, ID`, H1 `YUDHA PRATAMA` with blinking cursor, role `Web & Full-Stack Developer`, authentic lede, buttons `PRESS START` (amber) & `KIRIM EMAIL` (ghost), and hint. Right column `.player` card with `sprite-840.png`, `animate-idle-bob`, `HP 5/5` hearts, `COIN 03`.
  - `<ScoreBar />`: 4 cells: `04 Sistem internal`, `11 Proyek`, `02 Pengalaman industri`, `3.83 IPK / 4.00`.

- [x] **Step 1: Write verification script for HUD & Hero parity**

```javascript
// scratch/verify-step2-hero.cjs
const fs = require('fs');
const hud = fs.readFileSync('D:/portofolio-yuzu/src/components/layout/arcade-hud.tsx', 'utf8');
const hero = fs.readFileSync('D:/portofolio-yuzu/src/components/sections/hero-arcade.tsx', 'utf8');
const score = fs.readFileSync('D:/portofolio-yuzu/src/components/sections/score-bar.tsx', 'utf8');

if (!hud.includes('02 Pengalaman') || !hud.includes('HI SCORE')) {
  throw new Error('HUD missing 02 Pengalaman link or HI SCORE');
}
if (!hero.includes('PRESS START') || !hero.includes('KIRIM EMAIL') || !hero.includes('sprite-840.png')) {
  throw new Error('Hero missing PRESS START, KIRIM EMAIL, or sprite');
}
if (!score.includes('Pengalaman industri')) {
  throw new Error('Score bar missing Pengalaman industri');
}
console.log('Step 2 Hero parity passed');
```

- [x] **Step 2: Run verification script to confirm failure**

Run: `node scratch/verify-step2-hero.cjs`  
Expected: FAIL

- [x] **Step 3: Implement changes in `arcade-hud.tsx`, `hero-arcade.tsx`, and `score-bar.tsx`**

- Align HUD links: `01 Proyek`, `02 Pengalaman`, `03 Skill`, `04 Kontak`.
- Align Hero texts, button styles (`btn btn--amber`, `btn btn--ghost`), cursor, and card styling.
- Align ScoreBar cells with exact labels and values.

- [x] **Step 4: Run verification script to confirm pass**

Run: `node scratch/verify-step2-hero.cjs`  
Expected: PASS with "Step 2 Hero parity passed"

---

### Task 3: Stage Carousel Thumbnail Previews & Ghost Number Fallback

**Files:**
- Modify: `D:/portofolio-yuzu/src/components/sections/project-carousel.tsx`

**Interfaces:**
- Produces:
  - Header: `.sec-head` with `.sec-head__num` (`01`), `<h2>SELECT STAGE</h2>`, `.sec-head__note` (`11 STAGE · 2023—2026`).
  - Filter tabs: `SEMUA [11]`, `INTERNAL AVI [3]`, `SHIPPED / PUBLIK [5]`, `ARSIP AKADEMIK [3]`.
  - Controls: `◄ PREV`, `01 / 11`, `NEXT ►`.
  - Cards: `.stage__thumb` (with background image for stages that have `image`, or fallback `.stage__ghost` number, badge `.stage__num`, hover `.stage__open` "Detail"), `.stage__body` (`.stage__meta` with `code` + `year`, `.stage__name`, `.stage__stack`).

- [x] **Step 1: Write verification script for Carousel thumbnails & layout**

```javascript
// scratch/verify-step3-carousel.cjs
const fs = require('fs');
const carousel = fs.readFileSync('D:/portofolio-yuzu/src/components/sections/project-carousel.tsx', 'utf8');

if (!carousel.includes('SELECT STAGE') || !carousel.includes('stage__thumb') || !carousel.includes('stage__ghost')) {
  throw new Error('Carousel missing SELECT STAGE header, stage__thumb, or stage__ghost');
}
console.log('Step 3 Carousel verification passed');
```

- [x] **Step 2: Run verification script to confirm failure**

Run: `node scratch/verify-step3-carousel.cjs`  
Expected: FAIL

- [x] **Step 3: Update `src/components/sections/project-carousel.tsx`**

- Implement `.sec-head` markup and exact filter pill names.
- Render `.stage__thumb` with `stage.image ? style={{ backgroundImage: ... }} : ...` and `.stage__ghost`.
- Wire `onSelectStage(stage, index)` passing the stage index.

- [x] **Step 4: Run verification script to confirm pass**

Run: `node scratch/verify-step3-carousel.cjs`  
Expected: PASS with "Step 3 Carousel verification passed"

---

### Task 4: Stage Detail Modal with Intra-Stage Flipping (`← / →`)

**Files:**
- Modify: `D:/portofolio-yuzu/src/components/sections/project-modal.tsx`

**Interfaces:**
- Props:
  - `stage: Stage | null`
  - `currentIndex: number`
  - `totalStages: number`
  - `onPrev: () => void`
  - `onNext: () => void`
  - `onClose: () => void`
- Produces:
  - Header: `.modal__bar` with code, flag, and close button.
  - Media banner: Image with scanlines or enterprise internal note.
  - Text body: 2 columns ("Yang dibangun" ordered list & "Data" definition list: Peran, Stack, Konteks, Status), and action buttons.
  - Footer: `← SEBELUMNYA`, live counter `01 / 11`, `BERIKUTNYA →`.
  - Keyboard handlers: `Escape` to close, `ArrowLeft` for prev, `ArrowRight` for next.

- [x] **Step 1: Write verification script for Modal intra-stage navigation**

```javascript
// scratch/verify-step4-modal.cjs
const fs = require('fs');
const modal = fs.readFileSync('D:/portofolio-yuzu/src/components/sections/project-modal.tsx', 'utf8');

if (!modal.includes('SEBELUMNYA') || !modal.includes('BERIKUTNYA') || !modal.includes('modal__cols')) {
  throw new Error('Modal missing SEBELUMNYA, BERIKUTNYA, or modal__cols structure');
}
console.log('Step 4 Modal verification passed');
```

- [x] **Step 2: Run verification script to confirm failure**

Run: `node scratch/verify-step4-modal.cjs`  
Expected: FAIL

- [x] **Step 3: Update `src/components/sections/project-modal.tsx`**

- Add `onPrev`, `onNext`, `currentIndex`, and `totalStages` to props.
- Add footer buttons `← SEBELUMNYA` and `BERIKUTNYA →` with live index formatting (`String(currentIndex + 1).padStart(2, '0') / String(totalStages).padStart(2, '0')`).
- Add `ArrowLeft` and `ArrowRight` keyboard event listeners.

- [x] **Step 4: Run verification script to confirm pass**

Run: `node scratch/verify-step4-modal.cjs`  
Expected: PASS with "Step 4 Modal verification passed"

---

### Task 5: Implement `02 STAGE CLEAR` (Pengalaman Industri) Section

**Files:**
- Create: `D:/portofolio-yuzu/src/components/sections/experience-arcade.tsx`

**Interfaces:**
- Produces: `<ExperienceArcade />` component with:
  - Header: `.sec-head` with `.sec-head__num` (`02`), `<h2>STAGE CLEAR</h2>`, `.sec-head__note` (`4 STAGE SELESAI`).
  - `.clears` container with 4 `.clear` milestone items:
    1. `Agu 2026 — sekarang`: Staff Corporate Planning (Intern) · PT Angkasa Pura Aviasi · Kualanamu [ONGOING]
    2. `Sep 2024 — Mar 2025`: Project Lead & UI/UX Designer · Innovillage 2025 [CLEARED]
    3. `Jan — Feb 2024`: Programmer Intern · PTPN IV Regional 1 [CLEARED]
    4. `2024 — sekarang`: Ketua Unit Riset & Mentoring · HIMASI UMSU [SIDE QUEST]

- [x] **Step 1: Write verification script for Experience section**

```javascript
// scratch/verify-step5-exp.cjs
const fs = require('fs');

if (!fs.existsSync('D:/portofolio-yuzu/src/components/sections/experience-arcade.tsx')) {
  throw new Error('experience-arcade.tsx missing');
}
const exp = fs.readFileSync('D:/portofolio-yuzu/src/components/sections/experience-arcade.tsx', 'utf8');

if (!exp.includes('STAGE CLEAR') || !exp.includes('Angkasa Pura Aviasi') || !exp.includes('Innovillage')) {
  throw new Error('Experience missing STAGE CLEAR, Angkasa Pura Aviasi, or Innovillage');
}
console.log('Step 5 Experience section verification passed');
```

- [x] **Step 2: Run verification script to confirm failure**

Run: `node scratch/verify-step5-exp.cjs`  
Expected: FAIL with file not found

- [x] **Step 3: Implement `src/components/sections/experience-arcade.tsx`**

- Implement component with `.clears`, `.clear`, `.clear__when`, `.clear__role`, `.clear__org`, `.clear__desc`, `.clear__badge`.
- Zero emojis used.

- [x] **Step 4: Run verification script to confirm pass**

Run: `node scratch/verify-step5-exp.cjs`  
Expected: PASS with "Step 5 Experience section verification passed"

---

### Task 6: Tech Tree Inventory (Branch Grouping) & Integrated Trophy Shelf

**Files:**
- Modify: `D:/portofolio-yuzu/src/components/sections/tech-tree.tsx`

**Interfaces:**
- Produces:
  - Section Header: `.sec-head` with `.sec-head__num` (`03`), `<h2>TECH TREE & INVENTORY</h2>`, `.sec-head__note` (`INTERACTIVE SKILL MATRIX · KLIK NODE UNTUK INSPECT`).
  - Nav filter: `SEMUA CABANG [12]`, `BACKEND CORE [4]`, `FRONTEND ARC [3]`, `DATA & OTOMASI [2]`, `PRACTICE & LEAD [3]`.
  - Node list grouped by branch (`.tree-branch-group` with `.tree-branch-header` title and node count), each node with `.tree-node-top` (tier, status), `.tree-node-name`, `.tree-node-meta` (pixel stars rating, LVL).
  - Sticky RPG Inspector with XP gauge, description, perks list, and clickable stage pills.
  - Integrated Trophy Shelf (`.trophy-shelf`) at the bottom with 3 cards using `PixelTrophy`, `PixelScroll`, `PixelBolt` and `[VERIFIED]` badge.

- [x] **Step 1: Write verification script for Tech Tree and Trophy Shelf**

```javascript
// scratch/verify-step6-techtree.cjs
const fs = require('fs');
const tree = fs.readFileSync('D:/portofolio-yuzu/src/components/sections/tech-tree.tsx', 'utf8');

if (!tree.includes('TECH TREE & INVENTORY') || !tree.includes('tree-branch-header') || !tree.includes('trophy-shelf')) {
  throw new Error('Tech tree missing branch groups or integrated trophy-shelf');
}
console.log('Step 6 Tech Tree & Trophy Shelf verification passed');
```

- [x] **Step 2: Run verification script to confirm failure**

Run: `node scratch/verify-step6-techtree.cjs`  
Expected: FAIL

- [x] **Step 3: Update `src/components/sections/tech-tree.tsx`**

- Implement branch grouping for skills (`tree-branch-group`, `tree-branch-header`).
- Integrate Trophy Shelf at the bottom of the `#skill` section.
- Use `PixelStar` for zero-emoji star ratings.

- [x] **Step 4: Run verification script to confirm pass**

Run: `node scratch/verify-step6-techtree.cjs`  
Expected: PASS with "Step 6 Tech Tree & Trophy Shelf verification passed"

---

### Task 7: Contact Box, Footer & Full App Assembly

**Files:**
- Modify: `D:/portofolio-yuzu/src/components/sections/contact-arcade.tsx`
- Modify: `D:/portofolio-yuzu/src/components/layout/arcade-footer.tsx`
- Modify: `D:/portofolio-yuzu/src/App.tsx`

**Interfaces:**
- Produces:
  - `<ContactArcade />`: `CONTINUE? 9 · 8 · 7 · 6 · 5`, `PUNYA YANG MAU DIBANGUN?`, direct email link, `SALIN EMAIL` button, location `MEDAN · UTC+7`, socials.
  - `<ArcadeFooter />`: `© 2026 Yudha Pratama`, `Built with Laravel, React & terlalu banyak kopi`, `1 CREDIT · GAME OVER?`.
  - `<App />`: Integrates `<ScanlinesOverlay />`, `<ArcadeHud />`, `<HeroArcade />`, `<ScoreBar />`, `<ProjectCarousel />`, `<ExperienceArcade />`, `<TechTree />`, `<ContactArcade />`, `<ArcadeFooter />`, and `<ProjectModal />` with prev/next navigation state.

- [x] **Step 1: Write verification script for assembly and zero-emoji audit**

```javascript
// scratch/verify-step7-assembly.cjs
const fs = require('fs');
const app = fs.readFileSync('D:/portofolio-yuzu/src/App.tsx', 'utf8');
const contact = fs.readFileSync('D:/portofolio-yuzu/src/components/sections/contact-arcade.tsx', 'utf8');
const footer = fs.readFileSync('D:/portofolio-yuzu/src/components/layout/arcade-footer.tsx', 'utf8');

if (!app.includes('ExperienceArcade') || !app.includes('handlePrevStage') || !app.includes('handleNextStage')) {
  throw new Error('App.tsx missing ExperienceArcade or modal navigation handlers');
}
if (!contact.includes('PUNYA YANG MAU DIBANGUN?')) {
  throw new Error('Contact missing exact heading');
}
if (!footer.includes('terlalu banyak kopi')) {
  throw new Error('Footer missing exact arcade credit line');
}
console.log('Step 7 Assembly verification passed');
```

- [x] **Step 2: Run verification script to confirm failure**

Run: `node scratch/verify-step7-assembly.cjs`  
Expected: FAIL

- [x] **Step 3: Implement updates in `contact-arcade.tsx`, `arcade-footer.tsx`, and `App.tsx`**

- Wire state `selectedIndex` and `filteredStages` for intra-modal flipping.
- Assemble `<ExperienceArcade />` between `<ProjectCarousel />` and `<TechTree />`.
- Align Contact and Footer copy to match mockup 1:1.

- [x] **Step 4: Run verification script to confirm pass**

Run: `node scratch/verify-step7-assembly.cjs`  
Expected: PASS with "Step 7 Assembly verification passed"

- [x] **Step 5: Run zero-emoji audit and full production build**

Run:
```bash
node scratch/verify-no-emojis.cjs
npm run build
```
Expected:
- `Zero emoji audit passed! No emojis found in src/`
- `tsc -b && vite build` exits with code 0.
