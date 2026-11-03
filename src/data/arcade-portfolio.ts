export interface Stage {
  code: string
  name: string
  year: string
  flag: 'INTERNAL' | 'SHIPPED' | 'ARCHIVE'
  kind: string
  role: string
  stack: string
  context: string
  status: string
  image?: string
  repo?: string
  demo?: string
  summary: string
  built: string[]
}

export const STAGES: Stage[] = [
  {
    code: 'AVI-001',
    name: 'Avi Culture',
    year: '2026',
    flag: 'INTERNAL',
    kind: 'Sistem internal',
    role: 'Fullstack Engineer',
    stack: 'Laravel · Vue · Tailwind',
    context: 'PT Angkasa Pura Aviasi',
    status: 'Dipakai internal',
    summary:
      'Pengukuran budaya kerja per divisi dan per karyawan. Gap dipetakan, lalu diterjemahkan menjadi rencana aksi untuk menaikkan skor budaya kerja.',
    built: ['Penilaian per karyawan', 'Agregasi skor per divisi', 'Peta gap budaya kerja', 'Rencana aksi'],
  },
  {
    code: 'AVI-002',
    name: 'AVI Coupon',
    year: '2026',
    flag: 'SHIPPED',
    kind: 'Sistem internal',
    role: 'Fullstack Developer',
    stack: 'Laravel · Tailwind · PostgreSQL',
    context: 'PT Angkasa Pura Aviasi',
    status: 'Dipakai sampai akhir Autoshow 90s X Kualanamu',
    summary:
      'Kupon undian event Autoshow: kupon dibuat dan dikirim ke email, verifikasi peserta via admin, pemenang diundi otomatis tiap 3 jam.',
    built: [
      'Aturan kupon perusahaan',
      'Approval admin',
      'Pengiriman email otomatis',
      'Undian terjadwal tiap 3 jam',
      'Halaman publik pemenang',
    ],
  },
  {
    code: 'AVI-003',
    name: 'Avi Compass',
    year: '2026',
    flag: 'INTERNAL',
    kind: 'Sistem internal',
    role: 'QA & Security Audit',
    stack: 'PHP Native',
    context: 'PT Angkasa Pura Aviasi',
    status: 'Dipakai internal',
    summary:
      'Tata kelola dokumen rahasia: tiap pengguna menerima dokumen sesuai hak akses, tiap unduhan diberi stempel digital, dan setiap akses tercatat di audit trail append-only.',
    built: ['Kontrol akses berbasis peran', 'Stempel pada setiap unduhan', 'Audit trail akses append-only', 'Pengujian alur dokumen'],
  },
  {
    code: 'AVI-004',
    name: 'Ruangkerja',
    year: '2026',
    flag: 'INTERNAL',
    kind: 'Sistem internal',
    role: 'Backend & Audit UI/UX',
    stack: 'PHP Native',
    context: 'PT Angkasa Pura Aviasi',
    status: 'Dipakai internal',
    summary: 'Tata kelola tugas harian: manager mendelegasikan pekerjaan ke staff, status progres dan riwayat pekerjaan terpantau transparan.',
    built: ['Backend alur delegasi tugas', 'Pengujian fungsional modul', 'Audit kenyamanan antarmuka staff'],
  },
  {
    code: 'INV-001',
    name: 'Hola Web',
    year: '2025',
    flag: 'SHIPPED',
    image: '/assets/webhola.webp',
    kind: 'Program inovasi sosial',
    role: 'Project Lead & UI/UX',
    stack: 'Laravel · Tailwind',
    context: 'Innovillage 2025',
    status: 'Selesai Maret 2025',
    repo: 'https://github.com/ZokerYuzu',
    summary: 'Platform edukasi desa wisata untuk anak berkebutuhan khusus pada program nasional Innovillage 2025.',
    built: ['Arah produk dan alur pengguna inklusif', 'Desain antarmuka aksesibel', 'Koordinasi tim lintas disiplin'],
  },
  {
    code: 'INV-002',
    name: 'Hola AR',
    year: '2025',
    flag: 'SHIPPED',
    image: '/assets/apphola.webp',
    kind: 'Program inovasi sosial',
    role: 'Project Lead & UI/UX',
    stack: 'Unity · AR',
    context: 'Innovillage 2025',
    status: 'Selesai Maret 2025',
    repo: 'https://github.com/ZokerYuzu',
    summary: 'Aplikasi Augmented Reality pendamping platform desa wisata untuk pembelajaran interaktif multisensori.',
    built: ['Konsep pengalaman AR ramah anak', 'Prototipe alur penggunaan', 'Manajemen iterasi build tim'],
  },
  {
    code: 'PTP-001',
    name: 'Zoom Monitoring',
    year: '2024',
    flag: 'SHIPPED',
    image: '/assets/webzoom.webp',
    kind: 'Magang industri',
    role: 'Programmer Intern',
    stack: 'PHP · MySQL · Zoom API',
    context: 'PTPN IV Regional 1',
    status: 'Selesai Februari 2024',
    summary: 'Sistem manajemen rapat berbasis web terintegrasi Zoom API untuk sinkronisasi lisensi akun dan pencegahan jadwal bentrok antar divisi BUMN.',
    built: ['Pencatatan sesi rapat otomatis', 'Pencegahan bentrok jadwal meeting', 'Rekapitulasi penggunaan lisensi'],
  },
  {
    code: 'PTP-002',
    name: 'PDF / Excel Extractor',
    year: '2024',
    flag: 'SHIPPED',
    image: '/assets/pdfconv.webp',
    kind: 'Magang industri',
    role: 'Programmer Intern',
    stack: 'Python · Pandas',
    context: 'PTPN IV Regional 1',
    status: 'Selesai Februari 2024',
    summary: 'Otomasi ekstraksi dan pembersihan data tabel laporan keuangan dari PDF kompleks ke Excel terstruktur, memangkas proses manual berjam-jam menjadi hitungan menit.',
    built: ['Parsing tabel dokumen PDF', 'Pembersihan data otomatis dengan Pandas', 'Batch processing pelaporan'],
  },
  {
    code: 'ARS-001',
    name: 'Laundry Management',
    year: '2024',
    flag: 'ARCHIVE',
    image: '/assets/weblaundry.webp',
    kind: 'Proyek kuliah',
    role: 'Fullstack Developer',
    stack: 'Laravel · MySQL',
    context: 'UMSU',
    status: 'Arsip Akademik',
    repo: 'https://github.com/ZokerYuzu',
    summary: 'Aplikasi manajemen operasional laundry: tracking status pengerjaan pakaian, pencatatan pelanggan, dan laporan kas harian.',
    built: ['Pencatatan order cuci', 'Pelacakan status pengerjaan pakaian', 'Laporan transaksi kas'],
  },
  {
    code: 'ARS-002',
    name: 'Wardah Web Catalog',
    year: '2023',
    flag: 'ARCHIVE',
    image: '/assets/wardah.webp',
    kind: 'Proyek kuliah',
    role: 'Fullstack Developer',
    stack: 'PHP · Tailwind',
    context: 'UMSU',
    status: 'Arsip Akademik',
    repo: 'https://github.com/ZokerYuzu',
    summary: 'Katalog etalase produk kosmetik berbasis web dengan antarmuka elegan dan backend manajemen inventaris.',
    built: ['Halaman etalase katalog produk', 'Detail spesifikasi barang', 'Backend CRUD inventaris'],
  },
  {
    code: 'ARS-003',
    name: 'Desa Wisata Pariangan',
    year: '2024',
    flag: 'ARCHIVE',
    image: '/assets/webdesa.webp',
    kind: 'Proyek kuliah',
    role: 'Fullstack Developer',
    stack: 'PHP · MySQL',
    context: 'UMSU',
    status: 'Arsip Akademik',
    repo: 'https://github.com/ZokerYuzu',
    summary: 'Website profil destinasi Desa Wisata Pariangan yang menyajikan informasi daya tarik budaya dan panduan kunjungan wisatawan.',
    built: ['Halaman profil potensi desa', 'Galeri foto destinasi responsif', 'Informasi akomodasi kunjungan'],
  },
]

export interface TechBranch {
  id: string
  name: string
  count: string
}

export const TECH_BRANCHES: TechBranch[] = [
  { id: 'backend', name: 'BACKEND CORE', count: '4 NODES' },
  { id: 'frontend', name: 'FRONTEND ARC', count: '3 NODES' },
  { id: 'data', name: 'DATA & OTOMASI', count: '2 NODES' },
  { id: 'practice', name: 'PRACTICE & LEAD', count: '3 NODES' },
]

export interface TechSkill {
  id: string
  name: string
  branch: string
  tier: string
  level: number
  xp: number
  status: 'EQUIPPED' | 'MASTERED' | 'IN-USE'
  freq: number
  desc: string
  perks: string[]
  stages: string[]
}

export const TECH_TREE: TechSkill[] = [
  {
    id: 'php-native',
    name: 'PHP Native',
    branch: 'backend',
    tier: 'FOUNDATION',
    level: 4,
    xp: 90,
    status: 'MASTERED',
    freq: 440,
    desc: 'Fondasi arsitektur procedural & OOP tanpa framework bloated. Menangani sistem enterprise dengan kontrol penuh atas memory, session security, dan optimasi query database.',
    perks: ['Session Security & Custom Auth Guards', 'Direct PDO MySQL Performance Tuning', 'Clean Architectural Seams & No Bloat'],
    stages: ['AVI-003', 'AVI-004', 'ARS-002', 'ARS-003'],
  },
  {
    id: 'laravel',
    name: 'Laravel',
    branch: 'backend',
    tier: 'CORE STACK',
    level: 4,
    xp: 94,
    status: 'EQUIPPED',
    freq: 480,
    desc: 'Framework utama untuk pembangunan backend terstruktur: database migration, queue worker, multi-role middleware, dan REST API enterprise.',
    perks: ['Eloquent Optimization & Indexing', 'Scheduled Background Jobs (Queue Worker)', 'Role-Based Access Control (RBAC)'],
    stages: ['AVI-001', 'AVI-002', 'INV-001', 'ARS-001'],
  },
  {
    id: 'postgres-mysql',
    name: 'PostgreSQL & MySQL',
    branch: 'backend',
    tier: 'DATABASE',
    level: 4,
    xp: 88,
    status: 'EQUIPPED',
    freq: 460,
    desc: 'Perancangan skema relasional, normalisasi data, append-only audit trail logging, dan transaksi aman ACID untuk data perusahaan.',
    perks: ['Foreign Key Relational Data Integrity', 'Append-Only Audit Logs Compliance', 'High-Concurrency Event Draw Indexing'],
    stages: ['AVI-002', 'AVI-001', 'ARS-001'],
  },
  {
    id: 'rest-api',
    name: 'REST API & Integration',
    branch: 'backend',
    tier: 'SYSTEM ARCH',
    level: 4,
    xp: 89,
    status: 'EQUIPPED',
    freq: 500,
    desc: 'Pembuatan endpoint RESTful JSON terstandar, integrasi third-party API (Zoom API, Mailer), dan token auth handler.',
    perks: ['Clean JSON Contract Response', 'OAuth & API Key Handling', 'Rate Limiting & Error Guarding'],
    stages: ['PTP-001', 'AVI-002'],
  },
  {
    id: 'vue-js',
    name: 'Vue.js',
    branch: 'frontend',
    tier: 'REACTIVE UI',
    level: 3,
    xp: 82,
    status: 'IN-USE',
    freq: 550,
    desc: 'Komponen frontend reaktif untuk dashboard internal penilaian budaya kerja PT Angkasa Pura Aviasi.',
    perks: ['State Management & Computed Scores', 'Dynamic Gap Mapping Visuals', 'Instant Real-Time Form Validation'],
    stages: ['AVI-001'],
  },
  {
    id: 'react-ts',
    name: 'React 19 & TypeScript',
    branch: 'frontend',
    tier: 'MODERN CLIENT',
    level: 4,
    xp: 88,
    status: 'EQUIPPED',
    freq: 580,
    desc: 'Membangun Single Page Application type-safe berkinerja tinggi dengan Vite, modular Radix UI primitives, dan custom hooks.',
    perks: ['Strict TypeScript Safety', 'Composable Custom Hooks (useInView, useAudio)', 'Accessible Radix UI Dialogs'],
    stages: [],
  },
  {
    id: 'tailwind-css',
    name: 'Tailwind CSS v4',
    branch: 'frontend',
    tier: 'DESIGN SYSTEM',
    level: 4,
    xp: 95,
    status: 'MASTERED',
    freq: 620,
    desc: 'Pengembangan antarmuka responsif tanpa runtime overhead, kustomisasi design tokens, dan CSS native modern.',
    perks: ['Strict Mobile-First Breakpoints', 'Consistent Design Tokens & Theme Variables', 'Zero-Slop High-Contrast Typography'],
    stages: ['AVI-001', 'AVI-002', 'INV-001', 'ARS-002'],
  },
  {
    id: 'python-pandas',
    name: 'Python & Pandas',
    branch: 'data',
    tier: 'AUTOMATION CORE',
    level: 3,
    xp: 84,
    status: 'EQUIPPED',
    freq: 660,
    desc: 'Pipeline pemrosesan data otomatis di PTPN IV: parsing dokumen PDF tidak terstruktur ke spreadsheet Excel bersih.',
    perks: ['Complex Table Parsing & Regex', 'Automated Data Cleansing with Pandas', 'Batch Processing Engine (Menit vs Jam)'],
    stages: ['PTP-002'],
  },
  {
    id: 'zoom-automation',
    name: 'Zoom API Engine',
    branch: 'data',
    tier: 'INTEGRATION',
    level: 3,
    xp: 80,
    status: 'EQUIPPED',
    freq: 690,
    desc: 'Otomasi monitoring license & meeting room BUMN: sinkronisasi status akun real-time dan pencegahan jadwal bentrok.',
    perks: ['Real-Time Account License Polling', 'Room Conflict Prevention Logic', 'Automated Meeting Session Ledger'],
    stages: ['PTP-001'],
  },
  {
    id: 'qa-testing',
    name: 'QA & Functional Testing',
    branch: 'practice',
    tier: 'QUALITY ASSURANCE',
    level: 4,
    xp: 88,
    status: 'EQUIPPED',
    freq: 720,
    desc: 'Pengujian sistem menyeluruh (role-based matrix, cross-unit boundary checking, data consistency, & security audit).',
    perks: ['Multi-Role Matrix Verification', 'Append-Only DB Audit Verification', 'Negative Testing & Edge Case Traps'],
    stages: ['AVI-003', 'AVI-004'],
  },
  {
    id: 'ui-ux-audit',
    name: 'UI/UX Audit & Design',
    branch: 'practice',
    tier: 'PRODUCT DESIGN',
    level: 4,
    xp: 90,
    status: 'EQUIPPED',
    freq: 750,
    desc: 'Project Lead di Innovillage 2025: perancangan aksesibilitas kognitif, prototipe Figma, dan audit kenyamanan antarmuka internal.',
    perks: ['Cognitive Accessibility Research', 'High-Fidelity Figma Prototyping', 'Cross-Functional Team Leadership'],
    stages: ['INV-001', 'INV-002', 'AVI-004'],
  },
  {
    id: 'git-linux',
    name: 'Git & Linux Environment',
    branch: 'practice',
    tier: 'WORKFLOW',
    level: 4,
    xp: 85,
    status: 'EQUIPPED',
    freq: 780,
    desc: 'Version control rapi, branch hygiene, environment configuration lokal Apache/MySQL, dan deployment server.',
    perks: ['Semantic Commit Hygiene & Clean Branches', 'Local Virtual Host & Apache Configuration', 'Linux Terminal Tooling'],
    stages: [],
  },
]

export interface Trophy {
  id: string
  role: string
  name: string
  issuer: string
  badge: string
  metricLabel: string
  metricValue: string
  icon: 'trophy' | 'scroll' | 'bolt'
}

export const TROPHIES: Trophy[] = [
  {
    id: 'umsu',
    role: 'ACADEMIC EXCELLENCE',
    name: 'Sistem Informasi, S.Kom (Cand.)',
    issuer: 'Universitas Muhammadiyah Sumatera Utara',
    badge: 'VERIFIED',
    metricLabel: 'IPK 3.83 / 4.00',
    metricValue: "DEAN'S LIST",
    icon: 'trophy',
  },
  {
    id: 'bnsp',
    role: 'PROFESSIONAL LICENSE',
    name: 'Junior Web Developer',
    issuer: 'Badan Nasional Sertifikasi Profesi (BNSP)',
    badge: 'VERIFIED',
    metricLabel: 'STANDAR BNSP',
    metricValue: 'NASIONAL ID',
    icon: 'scroll',
  },
  {
    id: 'ibm',
    role: 'AI & OPTIMIZATION',
    name: 'Code Generation & Optimization',
    issuer: 'IBM Granite & Hacktiv8 Indonesia',
    badge: 'VERIFIED',
    metricLabel: 'ENTERPRISE AI',
    metricValue: 'AUTHORIZED',
    icon: 'bolt',
  },
]

export const SITE_META = {
  name: 'Yudha Pratama',
  tagline: 'Web & Full-Stack Developer',
  email: 'zokeryudha00@gmail.com',
  location: 'Medan, Indonesia',
  hiScore: '3.83',
  level: 4,
  hearts: 5,
  socials: {
    github: 'https://github.com/ZokerYuzu',
    linkedin: 'https://linkedin.com/in/yudha-pratama-7a10382b4',
    instagram: 'https://instagram.com/yudhavillyy',
  },
}
