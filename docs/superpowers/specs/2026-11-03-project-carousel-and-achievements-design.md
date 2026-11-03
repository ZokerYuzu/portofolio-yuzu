# Design Document: Project Carousel & Achievement Badges

**Date:** 2026-11-03  
**Status:** Pending Approval  
**Topic:** Minimalist Horizontal Snap Strip for Projects & Arcade Achievement Cards for Credentials

---

## 1. Intent & Context
Pengguna merasa tata letak kumpulan proyek saat ini (grid 3 kolom vertikal) terlalu padat, ramai, dan melelahkan untuk dipindai. Selain itu, bagian kredensial/sertifikasi akademik di bawah Tech Tree saat ini hanya berupa sebaris teks polos monoton tanpa perlakuan visual arcade.

Tujuan perubahan ini adalah:
1. Mengubah kumpulan proyek menjadi **Horizontal Snap Carousel** yang lapang, tidak ramai, dan mulus saat digeser (baik di mobile touch maupun desktop).
2. Mengubah teks kredensial menjadi **Achievement & Trophy Cards** bergaya plakat lisensi retro yang kredibel dan menarik.

---

## 2. Goals, Non-Goals, and Anti-Goals

### Goals
- Mengurangi kepadatan visual section proyek dengan menampilkan ~2 kartu dengan kartu berikutnya mengintip (*peek hint*) di desktop, dan 1 kartu penuh di mobile.
- Memberikan interaksi geser natural: native touch swipe di smartphone, wheel/drag di desktop, tombol kontrol `[◄ PREV]` dan `[NEXT ►]`, serta navigasi keyboard.
- Mempertahankan filter kategori stage (`SEMUA`, `INTERNAL`, `SHIPPED`, `ARCHIVE`) yang sinkron dengan carousel.
- Mempertahankan integrasi modal detail stage saat kartu diklik (termasuk saat dibuka dari Tech Tree).
- Merombak bagian sertifikasi menjadi 3 kartu lisensi/trofi terstruktur dengan status `[VERIFIED]`.

### Non-Goals
- Tidak menambahkan library slider pihak ketiga (seperti Swiper.js atau Slick). Semua menggunakan native CSS scroll-snap dan JavaScript DOM API murni sesuai filosofi *Ponytail*.
- Tidak mengubah skema data proyek (`STAGES`) yang sudah ada.

### Anti-Goals
- Tidak membuat carousel yang lambat, glitchy, atau membingungkan pengguna (hindari infinity loop aneh atau autoplay yang mengganggu).
- Tidak menggunakan layout 3D yang berlebihan/berat (*coverflow*) yang berpotensi melanggar pedoman anti-slop.

---

## 3. Approaches Considered

1. **Approach 1: Minimalist Horizontal Snap Strip (Dipilih)**
   - *Mekanisme:* Native CSS `scroll-snap-type: x mandatory` dengan tombol kontrol `◄` / `►` dan indikator progress.
   - *Trade-off:* Paling ringan, 60fps native, whitespace lega, tidak ramai, sangat ramah sentuhan di ponsel.

2. **Approach 2: Arcade Stage Rail with Center Spotlight**
   - *Mekanisme:* Track dengan penekanan kartu aktif di tengah yang terang dan kartu samping redup.
   - *Trade-off:* Sangat kental bertema retro, namun secara visual masih terasa agak ramai bagi pengguna.

3. **Approach 3: Single-Card Showcase**
   - *Mekanisme:* Hanya 1 kartu per tampilan dengan tombol pergantian besar.
   - *Trade-off:* Sangat lapang, namun memerlukan terlalu banyak klik untuk menjelajahi 11 proyek.

**Keputusan:** Pendekatan 1 dipilih karena langsung menyelesaikan masalah "terlalu padat dan ramai", memberikan navigasi geser yang intuitif, dan tetap mempertahankan karakter 8-bit arcade.

---

## 4. Detailed Specification

### A. Section Kumpulan Proyek (`#stage`)
- **Container Track (`.stages-track`):**
  - `display: flex; gap: 20px; overflow-x: auto; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch;`
  - Scrollbar disembunyikan secara visual (`scrollbar-width: none;`) tetapi tetap bisa digeser secara natural.
- **Card Sizing (`.stage`):**
  - Desktop: `flex: 0 0 min(420px, calc(50% - 10px)); scroll-snap-align: start;`
  - Mobile (≤720px): `flex: 0 0 85vw; scroll-snap-align: center;`
- **Header Controls:**
  - Di samping judul section atau filter tabs: Tombol navigasi arcade `[◄ PREV]` dan `[NEXT ►]`.
  - Indikator stage yang sedang aktif (misal `01 / 11`).
  - Baris filter (`SEMUA`, `INTERNAL`, `SHIPPED`, `ARCHIVE`) tetap aktif; saat filter berubah, track me-reset posisi scroll ke awal (`scrollLeft = 0`).

### B. Section Kredensial / Sertifikasi (`#creds`)
- Menggantikan elemen `.creds` lama dengan `.trophy-shelf`:
  - Grid 3 kartu horizontal (`.trophy-grid`):
    1. **Sistem Informasi, UMSU** — *Academic Honor* · IPK 3.83 / 4.00 · Predikat Cum Laude.
    2. **Junior Web Developer** — *National Certification* · BNSP (Badan Nasional Sertifikasi Profesi).
    3. **Code Generation & Optimization** — *Professional Credential* · IBM Granite & Hacktiv8.
  - Setiap kartu dilengkapi:
    - Ikon piala / medali pixel (ASCII atau pixelated SVG).
    - Status badge: `[VERIFIED]`.
    - Border ganda retro dengan hover offset.

---

## 5. What's Left to the Builder
- Memperbarui file `D:/portofolio-yuzu/mockup-8bit-arcade.html` dan `C:/Users/ASUS/.opencode/plan/mockup-8bit-arcade.html`.
- Menghubungkan event listener tombol `prev`/`next` dengan method `scrollBy({ left: ±step, behavior: 'smooth' })`.
- Memastikan Web Audio API SFX berbunyi saat menggeser atau menekan tombol navigasi stage.
