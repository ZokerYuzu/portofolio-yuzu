# Design Document: Arcade 8-Bit Portfolio Migration to React 19

**Date:** 2026-11-03  
**Status:** Approved  
**Topic:** Full migration of 8-bit Arcade aesthetic into React 19 codebase with idle character animation and zero emojis

---

## 1. Intent & Context
Portofolio utama saat ini di folder `src/` masih menggunakan desain lama (template AI generik dengan card standar). Pengguna ingin memindahkan konsep 8-Bit Arcade yang telah disempurnakan di mockup ke codebase React 19 + TypeScript + Vite + Tailwind CSS agar siap di-push ke GitHub.

Dua penegasan penting dari pengguna:
1. **Animasi Karakter & Ornamen 8-Bit:** Potret karakter memiliki animasi *stepped idle bobbing*, kursor retro berkedip, scanline overlay, dan ornamen HUD pixel (Hearts, Coin slot, Status bar).
2. **Bebas Emoji 100%:** Seluruh emoji dihilangkan secara mutlak, diganti dengan ikon pixel SVG atau retro glyphs (`[P1]`, `★`, `▶`, `+`, `[VERIFIED]`).

---

## 2. Goals, Non-Goals, and Anti-Goals

### Goals
- Mengadopsi font *Press Start 2P*, *Geist*, dan *Geist Mono* serta palet arcade (`#08080a`, `#111116`, `#f3ead3`, `#f5a524`, `#2b6bd4`).
- Memasang animasi sprite 8-bit pada potret karakter di Hero (`sprite-840.png` dengan `image-rendering: pixelated` dan animasi `idle-bob` stepped 4-frame).
- Mengimplementasikan section proyek sebagai **Horizontal Snap Carousel** dengan kontrol `◄ PREV` / `NEXT ►`, counter posisi, dan Dialog modal penjelasan lengkap.
- Mengimplementasikan **Interactive Tech Tree** dengan panel HUD Inspector dan navigasi silang langsung ke modal proyek.
- Mengimplementasikan **Achievement & Trophy Vault** (UMSU, BNSP, IBM Granite) dengan lencana `[VERIFIED]` dan ikon pixel SVG (tanpa emoji).
- Memastikan `npm run build` (`tsc -b && vite build`) lulus 100% tanpa error TypeScript maupun linting.

### Non-Goals
- Tidak menggunakan library animasi berat pihak ketiga untuk efek retro. Mengutamakan CSS stepped animations (`steps(4)`) dan native Web Audio API.

### Anti-Goals
- Tidak ada emoji satu pun (0 emoji) di seluruh antarmuka web.
- Tidak ada horizontal overflow tak terduga pada layar mobile.
- Tidak ada breaking changes pada struktur aset publik (`public/assets/`).

---

## 3. Component Architecture & Data Flow

```
src/
├── components/
│   ├── layout/
│   │   ├── arcade-hud.tsx         (Header sticky dengan coin logo, nav link, Hi-Score, SFX toggle)
│   │   ├── scanlines-overlay.tsx  (Overlay scanline scan-beam retro)
│   │   └── arcade-footer.tsx      (Footer retro arcade coin credits)
│   ├── sections/
│   │   ├── hero-arcade.tsx        (Player card dengan idle animation sprite, HP hearts, lede & CTA)
│   │   ├── score-bar.tsx          (HUD Score status: 04 sistem internal, 11 proyek, 3.83 IPK)
│   │   ├── project-carousel.tsx   (Horizontal snap strip, filter tabs, modal trigger)
│   │   ├── project-modal.tsx      (Native Radix / Dialog modal detail proyek, arrow navigation)
│   │   ├── tech-tree.tsx          (Interactive skill matrix + HUD RPG Inspector)
│   │   ├── trophy-vault.tsx       (3 achievement plakat lisensi resmi UMSU, BNSP, IBM)
│   │   └── contact-arcade.tsx     (Retro CONTINUE 9-8-7 countdown box, copy email button)
│   └── ui/
│       └── pixel-icons.tsx        (SVG pixel icons: Trophy, Scroll, Bolt, Heart, Coin, Terminal)
├── data/
│   └── arcade-portfolio.ts        (Data terstruktur: STAGES, TECH_TREE, TROPHIES, SITE)
├── hooks/
│   └── use-arcade-audio.ts        (Web Audio API synthesizer chiptune hook: bleep, coin, level-up)
├── App.tsx                        (Main composition layout)
└── index.css                      (Arcade design tokens, pixel fonts, stepped keyframe animations)
```
