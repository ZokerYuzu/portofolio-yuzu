# AGENTS.md — Project Rules & Skill Enforcement

Dokumen ini adalah aturan wajib (*always-on rules*) untuk semua AI coding agent di repository **portofolio-yuzu**. Pada SETIAP request atau tugas dari user, Anda WAJIB mengacu dan menerapkan prinsip-prinsip dari skill yang terpasang di repository ini:

---

## 1. Skill Consultation & Pre-Execution
Sebelum menulis kode, merancang arsitektur, atau menjawab pertanyaan teknis:
* Periksa skill yang relevan di folder `.agents/skills/` (seperti `ponytail`, `antislop`, `caveman`, `21st`).
* Pastikan solusi yang diberikan mematuhi aturan dan panduan di bawah ini tanpa perlu diminta ulang oleh user.

---

## 2. Prinsip Ponytail (Anti Over-Engineering & YAGNI)
> *"The best code is the code you never wrote."* — Filosofi utama: Solusi paling sederhana, ringkas, dan minimal yang bekerja dengan benar.

Sebelum menambahkan kode atau library baru, ikuti **Ladder of Laziness**:
1. **YAGNI**: Apakah fitur/abstraksi ini benar-benar dibutuhkan sekarang? Jika tidak, jangan buat.
2. **Reuse**: Apakah sudah ada kode, helper, atau komponen serupa di repository ini? Gunakan kembali.
3. **Platform Native**: Utamakan fitur standar web/browser (native CSS, modern JavaScript API, HTML semantic) sebelum membuat custom wrapper.
4. **Standard Library**: Manfaatkan library bawaan sebelum menambah dependensi baru.
5. **Simplicity First**: Jangan membuat generic abstraction, layer adapter yang belum dibutuhkan, atau konfigurasi spekulatif.
6. **One Line vs Fifty**: Jika bisa diselesaikan dengan 3 baris kode yang bersih dan mudah dibaca, jangan buat 30 baris arsitektur berlapis.

---

## 3. Prinsip Anti-Slop (Kualitas Desain, Kode & Copywriting)
Hindari semua karakteristik "AI Slop" yang generik dan membosankan:

### Visual & UI (`antislop-ui` & `antislop-layoutmobile`)
* **Warna & Tema**: Jangan gunakan gradasi ungu klise khas template AI generik. Gunakan palet warna yang kohesif, kontras tinggi, dan berkarakter sesuai tema project.
* **Layout**: Hindari pola kartu seragam (*cookie-cutter cards*) yang monoton. Gunakan hirarki visual, whitespace proporsional, dan tipografi yang tegas.
* **Mobile & Responsivitas**: Desain harus reflow secara rapi dari mobile ke desktop. Tidak boleh ada overflow horizontal tak diinginkan, dan ukuran target sentuh (*tap target*) minimal 44x44px.
* **Aksesibilitas (`antislop-human`)**: Pastikan kontras warna teks terhadap latar belakang memenuhi standar WCAG (minimal 4.5:1), serta sediakan focus state yang jelas untuk navigasi keyboard.

### Kode & Komentar (`antislop-code`)
* **Hygiene Komentar**: Jangan menulis komentar AI yang jelas terlihat dari kode (contoh: `// import react`, `// return the component`, `// handle click event`).
* Tulis komentar HANYA jika menjelaskan alasan arsitektural (*why*), bukan mengulang baris kode (*what*).

### Copywriting (`antislop-copywriting`)
* Hindari frasa klise AI seperti: *"Empowering seamless solutions"*, *"Next-generation revolutionary platform"*, atau basa-basi marketing kosong.
* Gunakan bahasa yang natural, langsung, profesional, dan relevan dengan portofolio pemilik.

---

## 4. Standar Desain Komponen (21st & Shadcn UI)
Repository ini menggunakan:
* **Framework**: React 19 + TypeScript + Vite
* **Styling**: Tailwind CSS v4 + Radix UI
* **Konfigurasi UI**: [components.json](file:///d:/portofolio-yuzu/components.json) dengan alias `@/components`, `@/components/ui`, dan `@/lib/utils`.

### Aturan Komponen:
* Manfaatkan katalog komponen **21st.dev** dan **Shadcn UI** untuk komponen antarmuka yang modern, dinamis, dan accessible.
* Jaga konsistensi token CSS dan variabel warna yang ada di `src/index.css`.

---

## 5. Gaya Komunikasi & Respons
* **To the point**: Langsung ke solusi teknis atau aksi yang dilakukan tanpa filler, basa-basi panjang, atau permohonan maaf berlebih.
* **Jelas & Terverifikasi**: Jika melakukan perubahan kode, jelaskan perubahan secara ringkas dan pastikan kode bebas dari error linting / build.
