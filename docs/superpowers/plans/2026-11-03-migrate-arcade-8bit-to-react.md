# Migrate 8-Bit Arcade Portfolio to React 19 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [x]`) syntax for tracking.

**Goal:** Transform the primary React 19 portfolio application (`src/`) into an authentic, highly-polished 8-bit arcade web experience featuring an idle-animated character sprite, a minimalist horizontal project carousel, an interactive skill matrix, and arcade achievement cards—with a strict zero-emoji policy.

**Architecture:** Implement modular React 19 functional components utilizing TypeScript and Tailwind CSS v4. Embed retro CSS stepped animations (`steps(2)` / `steps(4)`) for character idle bobbing and cursor blinking. Synthesize 8-bit chiptune sound effects via a lightweight custom React hook powered by the native Web Audio API.

**Tech Stack:** React 19, TypeScript 5.8, Vite 8, Tailwind CSS v4, Radix UI Primitives, Web Audio API, Google Fonts (`Press Start 2P`, `Geist`, `Geist Mono`).

**Spec:** [docs/superpowers/specs/2026-11-03-arcade-8bit-react-migration-design.md](file:///d:/portofolio-yuzu/docs/superpowers/specs/2026-11-03-arcade-8bit-react-migration-design.md)

## Global Constraints

- **Zero Emojis:** Absolutely NO unicode emoji characters in any UI element. All icons must be custom pixelated SVGs or retro glyphs (`[P1]`, `★`, `▶`, `+`, `[VERIFIED]`).
- **Character Animation:** Hero portrait must use `image-rendering: pixelated` with a 4-step idle breathing animation (`idle-bob`).
- **Type Safety:** Full TypeScript strict mode compliance; `tsc -b && vite build` must pass with zero errors and zero warnings.
- **Component File Isolation:** Each section lives in its own dedicated component under `src/components/sections/` or `src/components/layout/`.
- **Responsive Layout:** Fluid reflow from mobile (360px) to desktop (1280px) without unwanted horizontal document overflow.

## Review Focus

1. **Zero-emoji verification:** Grep all files in `src/` to guarantee no emoji code points exist in the codebase.
2. **Character sprite rendering:** Confirm `sprite-840.png` renders without blurriness using `image-rendering: pixelated` and animates with stepped motion.
3. **Carousel scroll-snap integrity:** Confirm project carousel scrolls horizontally with native CSS snap and touch swipe support.
4. **Modal cross-linking:** Confirm clicking a stage badge inside the Tech Tree Inspector opens the respective project modal dialog directly.
5. **Clean production build:** Execute `npm run build` and ensure complete compilation without bundling errors.

---

### Task 1: Design Tokens, Pixel Fonts, 8-bit Keyframes & Scanlines

**Files:**
- Modify: `D:/portofolio-yuzu/index.html`
- Modify: `D:/portofolio-yuzu/src/index.css`
- Create: `D:/portofolio-yuzu/src/components/layout/scanlines-overlay.tsx`

**Interfaces:**
- Produces: CSS variables (`--ink`, `--panel`, `--cream`, `--amber`, `--blue`, `--line`), font classes (`.font-pixel`, `.font-mono`), keyframe animations (`animate-idle-bob`, `animate-blink`), and `<ScanlinesOverlay />`.

- [x] **Step 1: Write verification script for Task 1 tokens and fonts**

```javascript
// scratch/verify-task1-tokens.cjs
const fs = require('fs');
const indexHtml = fs.readFileSync('D:/portofolio-yuzu/index.html', 'utf8');
const indexCss = fs.readFileSync('D:/portofolio-yuzu/src/index.css', 'utf8');

if (!indexHtml.includes('Press+Start+2P')) {
  throw new Error('Google Font Press Start 2P not found in index.html');
}
if (!indexCss.includes('--ink:') || !indexCss.includes('idle-bob')) {
  throw new Error('Arcade design tokens or idle-bob keyframes missing in index.css');
}
console.log('Task 1 tokens verification passed');
```

- [x] **Step 2: Run verification script to confirm failure**

Run: `node scratch/verify-task1-tokens.cjs`  
Expected: FAIL with "Google Font Press Start 2P not found in index.html"

- [x] **Step 3: Update `index.html` and `src/index.css`**

- Add Google Font preconnect and stylesheet link for `Press Start 2P` in `index.html`.
- Define arcade color tokens in `src/index.css`:
  - `--ink: #08080a; --panel: #111116; --panel-2: #17171d; --cream: #f3ead3; --amber: #f5a524; --blue: #2b6bd4; --line: #2c2c33; --line-2: #3d3d46;`
- Add `@keyframes idle-bob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }` with `steps(2)`.
- Create `src/components/layout/scanlines-overlay.tsx` for retro CRT scanlines.

- [x] **Step 4: Run verification script to confirm pass**

Run: `node scratch/verify-task1-tokens.cjs`  
Expected: PASS with "Task 1 tokens verification passed"

---

### Task 2: Pixel Icons (Zero Emojis) & Arcade Audio Hook

**Files:**
- Create: `D:/portofolio-yuzu/src/components/ui/pixel-icons.tsx`
- Create: `D:/portofolio-yuzu/src/hooks/use-arcade-audio.ts`

**Interfaces:**
- Produces: `PixelTrophy`, `PixelScroll`, `PixelBolt`, `PixelHeart`, `PixelCoin`, `PixelCross`, `useArcadeAudio()` hook (`playBleep`, `sfxEnabled`, `toggleSfx`).

- [x] **Step 1: Write verification script for Pixel Icons & Audio Hook**

```javascript
// scratch/verify-task2-icons-audio.cjs
const fs = require('fs');
const iconsFile = fs.readFileSync('D:/portofolio-yuzu/src/components/ui/pixel-icons.tsx', 'utf8');
const audioFile = fs.readFileSync('D:/portofolio-yuzu/src/hooks/use-arcade-audio.ts', 'utf8');

if (!iconsFile.includes('PixelTrophy') || !iconsFile.includes('PixelHeart')) {
  throw new Error('Pixel icons missing');
}
if (!audioFile.includes('useArcadeAudio') || !audioFile.includes('playBleep')) {
  throw new Error('useArcadeAudio hook missing');
}
console.log('Task 2 icons and audio verification passed');
```

- [x] **Step 2: Run verification script to confirm failure**

Run: `node scratch/verify-task2-icons-audio.cjs`  
Expected: FAIL with file not found error

- [x] **Step 3: Implement `pixel-icons.tsx` and `use-arcade-audio.ts`**

- Build clean pixelated SVG icons with square paths (`rect`) preserving crisp 8-bit look.
- Build `useArcadeAudio` utilizing standard browser `AudioContext` with square wave oscillators and gentle gain envelope.

- [x] **Step 4: Run verification script to confirm pass**

Run: `node scratch/verify-task2-icons-audio.cjs`  
Expected: PASS with "Task 2 icons and audio verification passed"

---

### Task 3: Portfolio Data Module (`src/data/arcade-portfolio.ts`)

**Files:**
- Create: `D:/portofolio-yuzu/src/data/arcade-portfolio.ts`

**Interfaces:**
- Produces: `STAGES` (11 projects), `TECH_BRANCHES`, `TECH_TREE` (12 skills with perks & stage links), `TROPHIES` (3 credentials), `SITE_META`.

- [x] **Step 1: Write verification script for arcade data module**

```javascript
// scratch/verify-task3-data.cjs
const fs = require('fs');
const dataContent = fs.readFileSync('D:/portofolio-yuzu/src/data/arcade-portfolio.ts', 'utf8');

if (!dataContent.includes('STAGES') || !dataContent.includes('TECH_TREE') || !dataContent.includes('TROPHIES')) {
  throw new Error('Arcade portfolio data structures missing');
}
console.log('Task 3 data module verification passed');
```

- [x] **Step 2: Run test to verify failure**

Run: `node scratch/verify-task3-data.cjs`  
Expected: FAIL with file not found

- [x] **Step 3: Implement `src/data/arcade-portfolio.ts`**

- Export typed arrays: `STAGES` with `AVI-001` through `ARS-003`, `TECH_TREE` with real-world descriptions, and `TROPHIES` for UMSU, BNSP, IBM Granite.

- [x] **Step 4: Run test to verify pass**

Run: `node scratch/verify-task3-data.cjs`  
Expected: PASS with "Task 3 data module verification passed"

---

### Task 4: Hero Section with Character Idle Animation & HUD Header

**Files:**
- Create: `D:/portofolio-yuzu/src/components/layout/arcade-hud.tsx`
- Create: `D:/portofolio-yuzu/src/components/sections/hero-arcade.tsx`
- Create: `D:/portofolio-yuzu/src/components/sections/score-bar.tsx`

**Interfaces:**
- Consumes: `sprite-840.png`, `PixelHeart`, `PixelCoin`, `useArcadeAudio`.
- Produces: `<ArcadeHud />`, `<HeroArcade />`, `<ScoreBar />`.

- [x] **Step 1: Write verification script for Hero and HUD**

```javascript
// scratch/verify-task4-hero.cjs
const fs = require('fs');
const hud = fs.readFileSync('D:/portofolio-yuzu/src/components/layout/arcade-hud.tsx', 'utf8');
const hero = fs.readFileSync('D:/portofolio-yuzu/src/components/sections/hero-arcade.tsx', 'utf8');

if (!hud.includes('ArcadeHud') || !hero.includes('sprite-840.png') || !hero.includes('idle-bob')) {
  throw new Error('Hero character animation or HUD component missing');
}
console.log('Task 4 Hero and HUD verification passed');
```

- [x] **Step 2: Run test to verify failure**

Run: `node scratch/verify-task4-hero.cjs`  
Expected: FAIL with file not found

- [x] **Step 3: Implement `ArcadeHud`, `HeroArcade`, and `ScoreBar`**

- `ArcadeHud`: Sticky header with `YP` coin mark, navigation links, HI-SCORE, and SFX button.
- `HeroArcade`: Player 1 card with `sprite-840.png`, `animate-idle-bob`, HP hearts, LVL indicator, typing/blinking cursor, and arcade buttons.
- `ScoreBar`: 4 retro cells (04 Sistem Internal, 11 Proyek, 02 Pengalaman, 3.83 IPK).

- [x] **Step 4: Run test to verify pass**

Run: `node scratch/verify-task4-hero.cjs`  
Expected: PASS with "Task 4 Hero and HUD verification passed"

---

### Task 5: Project Section: Horizontal Snap Carousel & Detail Modal

**Files:**
- Create: `D:/portofolio-yuzu/src/components/sections/project-carousel.tsx`
- Create: `D:/portofolio-yuzu/src/components/sections/project-modal.tsx`

**Interfaces:**
- Consumes: `STAGES` from `arcade-portfolio.ts`, `useArcadeAudio`.
- Produces: `<ProjectCarousel onSelectStage={(idx) => ...} />`, `<ProjectModal />`.

- [x] **Step 1: Write verification script for Project Carousel & Modal**

```javascript
// scratch/verify-task5-carousel.cjs
const fs = require('fs');
const carousel = fs.readFileSync('D:/portofolio-yuzu/src/components/sections/project-carousel.tsx', 'utf8');
const modal = fs.readFileSync('D:/portofolio-yuzu/src/components/sections/project-modal.tsx', 'utf8');

if (!carousel.includes('scroll-snap-type') || !carousel.includes('stage-ctrl-btn')) {
  throw new Error('Project carousel structure missing');
}
if (!modal.includes('ProjectModal')) {
  throw new Error('Project modal missing');
}
console.log('Task 5 carousel & modal verification passed');
```

- [x] **Step 2: Run test to verify failure**

Run: `node scratch/verify-task5-carousel.cjs`  
Expected: FAIL with file not found

- [x] **Step 3: Implement `ProjectCarousel` and `ProjectModal`**

- `ProjectCarousel`: Filter pills (`SEMUA`, `INTERNAL`, `SHIPPED`, `ARCHIVE`), horizontal track with `scroll-snap-type: x mandatory`, prev/next buttons, and position counter.
- `ProjectModal`: Radix Dialog or custom accessible modal with keyboard listeners (`ESC`, Arrow keys), feature breakdown, and external links.

- [x] **Step 4: Run test to verify pass**

Run: `node scratch/verify-task5-carousel.cjs`  
Expected: PASS with "Task 5 carousel & modal verification passed"

---

### Task 6: Interactive Tech Tree & Skill Matrix with RPG Inspector

**Files:**
- Create: `D:/portofolio-yuzu/src/components/sections/tech-tree.tsx`

**Interfaces:**
- Consumes: `TECH_BRANCHES`, `TECH_TREE`, `onOpenStageModal(code: string)`.
- Produces: `<TechTree onOpenStage={(code) => ...} />`.

- [x] **Step 1: Write verification script for Tech Tree**

```javascript
// scratch/verify-task6-techtree.cjs
const fs = require('fs');
const tree = fs.readFileSync('D:/portofolio-yuzu/src/components/sections/tech-tree.tsx', 'utf8');

if (!tree.includes('TechTree') || !tree.includes('inspector-xp-gauge')) {
  throw new Error('Tech tree component missing');
}
console.log('Task 6 tech tree verification passed');
```

- [x] **Step 2: Run test to verify failure**

Run: `node scratch/verify-task6-techtree.cjs`  
Expected: FAIL with file not found

- [x] **Step 3: Implement `TechTree` component**

- Branch navigation tabs (`all`, `backend`, `frontend`, `data`, `practice`).
- Grid of interactive nodes with level stars, tier pills, and selection state.
- Sticky RPG HUD Inspector displaying XP gauge (10 pips), real-world production context, perks, and clickable stage pills triggering project modals.

- [x] **Step 4: Run test to verify pass**

Run: `node scratch/verify-task6-techtree.cjs`  
Expected: PASS with "Task 6 tech tree verification passed"

---

### Task 7: Trophy Vault, Contact Box, and Full App Assembly

**Files:**
- Create: `D:/portofolio-yuzu/src/components/sections/trophy-vault.tsx`
- Create: `D:/portofolio-yuzu/src/components/sections/contact-arcade.tsx`
- Create: `D:/portofolio-yuzu/src/components/layout/arcade-footer.tsx`
- Modify: `D:/portofolio-yuzu/src/App.tsx`

**Interfaces:**
- Integrates all components into `src/App.tsx`.

- [x] **Step 1: Write zero-emoji check script**

```javascript
// scratch/verify-no-emojis.cjs
const fs = require('fs');
const path = require('path');

const emojiRegex = /[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/u;

function scanDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) {
      if (file !== 'node_modules' && file !== '.git') scanDir(full);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      if (emojiRegex.test(content)) {
        throw new Error(`Emoji detected in file: ${full}`);
      }
    }
  }
}

scanDir('D:/portofolio-yuzu/src');
console.log('Zero emoji audit passed! No emojis found in src/');
```

- [x] **Step 2: Implement Trophy Vault, Contact, Footer, and update `App.tsx`**

- `TrophyVault`: 3 plakat cards using `PixelTrophy`, `PixelScroll`, `PixelBolt` with `[VERIFIED]` badge.
- `ContactArcade`: Countdown box `CONTINUE? 9 · 8 · 7 · 6 · 5`, email link, copy email button with chiptune audio.
- Assemble everything cleanly in `src/App.tsx`.

- [x] **Step 3: Run zero-emoji audit script**

Run: `node scratch/verify-no-emojis.cjs`  
Expected: PASS with "Zero emoji audit passed!"

- [x] **Step 4: Run full project compilation**

Run: `npm run build`  
Expected: `tsc -b && vite build` exits with code 0.
