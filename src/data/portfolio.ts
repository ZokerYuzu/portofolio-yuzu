import type { LucideIcon } from 'lucide-react'
import {
  Award,
  Building2,
  Crown,
  GraduationCap,
  Rocket,
  Briefcase,
  Server,
  LaptopMinimal,
  Bot,
  Wrench,
} from 'lucide-react'

export const SITE = {
  name: 'Yudha Pratama',
  initials: 'YP',
  role: 'Web & Full-Stack Developer',
  email: 'zokeryudha00@gmail.com',
  status: 'Terbuka untuk Karir & Kolaborasi (Q2 2026)',
  location: 'Medan, Indonesia • UMSU',
  cvPath: '/assets/cv.pdf',
  socials: {
    linkedin: 'https://linkedin.com/in/yudha-pratama-7a10382b4',
    github: 'https://github.com/ZokerYuzu',
    instagram: 'https://instagram.com/yudhavillyy',
  },
}

export const SOCIALS = [
  { href: SITE.socials.github, label: 'GitHub Yudha Pratama', icon: 'github' },
  { href: SITE.socials.linkedin, label: 'LinkedIn Yudha Pratama', icon: 'linkedin' },
  { href: SITE.socials.instagram, label: 'Instagram Yudha Pratama', icon: 'instagram' },
] as const

export interface Stat {
  icon: LucideIcon
  value: number
  decimals?: number
  suffix?: string
  label: string
  accent: string
}

export const STATS: Stat[] = [
  { icon: Rocket, value: 6, label: 'Proyek Terdelivery', accent: 'text-primary' },
  { icon: Briefcase, value: 2, label: 'Pengalaman Industri', accent: 'text-electric' },
  { icon: GraduationCap, value: 3.83, decimals: 2, label: 'IPK dari 4.00', accent: 'text-blue-400' },
  { icon: Award, value: 2, label: 'BNSP & IBM Certified', accent: 'text-blue-300' },
]

export interface Highlight {
  icon: LucideIcon
  title: string
  description: string
}

export const HIGHLIGHTS: Highlight[] = [
  {
    icon: Crown,
    title: 'Project Lead — Innovillage 2025',
    description: 'Memimpin tim pengembangan aplikasi AR & Web edukasi anak tunagrahita.',
  },
  {
    icon: Building2,
    title: 'Intern Programmer — PTPN IV',
    description: 'Membangun sistem Zoom API & otomasi data cleaning Python untuk perusahaan BUMN.',
  },
  {
    icon: Award,
    title: 'Sertifikasi BNSP & IBM',
    description: 'Junior Web Developer (BNSP) & Code Generation Optimization (IBM/Hacktiv8).',
  },
]

export const TECH_MARQUEE = [
  'Laravel 11',
  'React 19',
  'TypeScript',
  'PHP',
  'Python',
  'JavaScript',
  'MySQL',
  'Tailwind CSS v4',
  'REST API',
  'Zoom API',
  'Git / GitHub',
  'Figma',
]

export type ProjectCategory = 'web' | 'mobile' | 'automation'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  image: string
  badge: string
  featured?: boolean
  context: string
  description: string
  longDescription: string
  features: string[]
  techs: string[]
  repoUrl: string | null
}

export const PROJECT_FILTERS = [
  { value: 'all', label: 'Semua' },
  { value: 'web', label: 'Web App' },
  { value: 'mobile', label: 'Mobile & AR' },
  { value: 'automation', label: 'Otomasi' },
] as const

export const PROJECTS: Project[] = [
  {
    id: 'hola-web',
    title: 'Website Edukasi "Hola!"',
    category: 'web',
    image: '/assets/webhola.webp',
    badge: 'Laravel',
    featured: true,
    context: 'Innovillage 2025',
    description:
      'Aplikasi pembelajaran interaktif berbasis web untuk anak tunagrahita. Menyediakan audio interaktif, materi huruf, angka, bentuk & warna berbasis kartu edukatif, beserta fitur mini-games seperti menebak bentuk, kata, dan menyusun puzzle.',
    longDescription:
      'Aplikasi pembelajaran interaktif berbasis web untuk anak tunagrahita. Sistem ini didesain khusus dengan pendekatan aksesibilitas kognitif, menyediakan media belajar yang menarik dan mudah dipahami.',
    features: [
      'Audio interaktif untuk panduan belajar',
      'Materi pengenalan huruf, angka, bentuk & warna',
      'Sistem flashcard / kartu edukatif',
      'Mini-games kognitif (tebak bentuk, susun kata, puzzle)',
    ],
    techs: ['Laravel', 'PHP', 'Tailwind CSS', 'JavaScript', 'MySQL', 'Figma'],
    repoUrl: null,
  },
  {
    id: 'zoom-monitoring',
    title: 'Monitoring Video Conference',
    category: 'web',
    image: '/assets/webzoom.webp',
    badge: 'Zoom API',
    featured: true,
    context: 'PTPN IV — Regional 1',
    description:
      'Sistem manajemen rapat berbasis web terintegrasi Zoom API. Pengecekan akun real-time dan otomasi pemesanan jadwal untuk mencegah bentrokan lisensi antar divisi perusahaan BUMN.',
    longDescription:
      'Sistem manajemen rapat berbasis web yang terintegrasi penuh dengan Zoom API untuk perusahaan BUMN. Mendigitalisasi proses pemesanan ruang meeting dan lisensi Zoom yang sebelumnya manual.',
    features: [
      'Integrasi Zoom API untuk pengecekan akun real-time',
      'Otomasi pemesanan jadwal anti-bentrok antar divisi',
      'Manajemen lisensi Zoom terpusat',
      'Dashboard monitoring rapat aktif',
    ],
    techs: ['Laravel', 'PHP', 'Zoom API', 'MySQL'],
    repoUrl: null,
  },
  {
    id: 'hola-ar',
    title: 'Aplikasi AR "Hola"',
    category: 'mobile',
    image: '/assets/apphola.webp',
    badge: 'UI/UX',
    context: 'Innovillage 2025',
    description:
      'Memimpin proyek aplikasi edukasi anak tunagrahita. Merancang UI/UX dan prototipe interaktif menggunakan Figma.',
    longDescription:
      'Memimpin tim dalam pengembangan aplikasi Augmented Reality untuk edukasi anak tunagrahita. Berfokus pada perancangan UI/UX, prototipe interaktif di Figma, serta manajemen alur kerja tim.',
    features: [
      'Riset & perancangan UI/UX untuk aksesibilitas kognitif',
      'Prototipe interaktif high-fidelity di Figma',
      'Konsep AR untuk pembelajaran multisensori',
      'Manajemen proyek tim lintas disiplin',
    ],
    techs: ['Project Lead', 'Figma', 'UI/UX'],
    repoUrl: null,
  },
  {
    id: 'pdf-extractor',
    title: 'PDF/Excel Extractor',
    category: 'automation',
    image: '/assets/pdfconv.webp',
    badge: 'Automation',
    context: 'PTPN IV — Regional 1',
    description:
      'Otomasi konversi laporan dari PDF ke Excel menggunakan Python. Mengurangi proses manual berjam-jam menjadi hitungan menit.',
    longDescription:
      'Skrip otomasi berbasis Python untuk mengonversi laporan PDF menjadi Excel terstruktur. Algoritma ekstraksi data menangani tabel kompleks dan membersihkan data secara otomatis.',
    features: [
      'Ekstraksi tabel PDF kompleks ke Excel',
      'Data cleaning otomatis dengan Pandas',
      'Batch processing ratusan halaman laporan',
      'Menghemat proses manual berjam-jam menjadi menit',
    ],
    techs: ['Python', 'Pandas', 'Automation'],
    repoUrl: null,
  },
  {
    id: 'laundry-management',
    title: 'Laundry Management',
    category: 'web',
    image: '/assets/weblaundry.webp',
    badge: 'Web App',
    context: 'Proyek Akademik',
    description:
      'Aplikasi manajemen operasional laundry: tracking status cucian, manajemen pelanggan, dan laporan keuangan.',
    longDescription:
      'Aplikasi manajemen operasional laundry end-to-end: tracking status cucian real-time, manajemen pelanggan, transaksi, dan laporan keuangan.',
    features: [
      'Tracking status cucian real-time',
      'Manajemen pelanggan & transaksi',
      'Laporan keuangan periodik',
      'Autentikasi multi-peran',
    ],
    techs: ['PHP Native', 'MySQL', 'Bootstrap'],
    repoUrl: null,
  },
  {
    id: 'wardah-catalog',
    title: 'Wardah Web Catalog',
    category: 'web',
    image: '/assets/wardah.webp',
    badge: 'Web Catalog',
    context: 'Proyek Akademik',
    description:
      'Katalog produk kosmetik Wardah dengan UI elegan, dilengkapi backend untuk manajemen inventaris produk.',
    longDescription:
      'Katalog produk kosmetik Wardah dengan UI elegan dan backend CRUD untuk manajemen inventaris produk.',
    features: [
      'Katalog produk dengan filter kategori',
      'Backend manajemen inventaris (CRUD)',
      'Halaman detail produk responsif',
    ],
    techs: ['PHP', 'MySQL', 'Bootstrap'],
    repoUrl: null,
  },
  {
    id: 'desa-pariangan',
    title: 'Desa Wisata Pariangan',
    category: 'web',
    image: '/assets/webdesa.webp',
    badge: 'Web Profile',
    context: 'Proyek Akademik',
    description:
      'Website profil dan promosi Desa Wisata Pariangan, desa wisata terbaik se-Asia Tenggara.',
    longDescription:
      'Website profil dan promosi Desa Wisata Pariangan — desa wisata terbaik se-Asia Tenggara. Menampilkan potensi budaya, atraksi wisata, dan informasi kunjungan.',
    features: [
      'Profil budaya & atraksi wisata',
      'Galeri foto responsif',
      'Informasi lokasi & kontak',
    ],
    techs: ['PHP Native', 'Bootstrap', 'JavaScript'],
    repoUrl: null,
  },
]

export interface TimelineItem {
  role: string
  period: string
  org: string
  description: string
}

export const TIMELINE: TimelineItem[] = [
  {
    role: 'Project Lead & UI/UX Designer "Hola"',
    period: 'Sept 2024 - Sekarang',
    org: 'Innovillage 2025',
    description:
      'Memimpin tim dalam perancangan UI/UX interaktif dan pengembangan aplikasi edukasi tunagrahita berbasis web & AR, mengoordinasikan eksekusi sprint lintas disiplin serta riset aksesibilitas kognitif.',
  },
  {
    role: 'Programmer Intern',
    period: 'Januari - Februari 2024',
    org: 'PTPN IV - Regional 1',
    description:
      'Mendigitalisasi sistem operasional BUMN dengan merancang algoritma ekstraksi data Python (PDF to Excel otomatis) dan membangun sistem pemesanan video conference terintegrasi Zoom API dengan Laravel.',
  },
  {
    role: 'Ketua Unit Riset & Mentoring',
    period: '2024 - Sekarang',
    org: 'HIMASI UMSU',
    description:
      'Menginisiasi workshop integrasi API dan modern web tooling untuk mempercepat keterampilan teknis rekayasa perangkat lunak bagi mahasiswa Sistem Informasi.',
  },
]

export interface SkillDomain {
  icon: LucideIcon
  title: string
  skills: string[]
}

export const SKILL_DOMAINS: SkillDomain[] = [
  {
    icon: Server,
    title: 'Backend & Architecture',
    skills: ['Laravel', 'PHP Native', 'Python', 'REST API', 'MySQL', 'SQL Server', 'Zoom API'],
  },
  {
    icon: LaptopMinimal,
    title: 'Frontend & UI/UX',
    skills: ['React 19', 'TypeScript', 'Tailwind CSS v4', 'HTML5 & CSS3', 'JavaScript', 'Figma'],
  },
  {
    icon: Bot,
    title: 'Data & Automation',
    skills: ['Python Pandas', 'Data Cleaning', 'PDF Extraction', 'Automation Scripts'],
  },
  {
    icon: Wrench,
    title: 'Tools & Methodologies',
    skills: ['Git / GitHub', 'Project Management', 'Problem Solving', 'ERD & System Design', 'Agile'],
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
  org?: string
  badge?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Yudha menunjukkan inisiatif tinggi dan kemampuan teknis yang solid selama magang. Ia mampu mengembangkan sistem terintegrasi Zoom API secara mandiri dan menyelesaikan otomasi data cleaning yang menghemat waktu kerja signifikan.',
    name: 'Evaluasi Pembimbing Magang',
    role: 'Divisi TI & Transformasi Digital',
    org: 'PTPN IV — Regional 1',
    badge: 'Program Magang BUMN',
  },
  {
    quote:
      'Sebagai project lead, Yudha berhasil mengkoordinasikan tim dengan baik dan menghasilkan prototipe UI/UX yang intuitif untuk aplikasi edukasi Hola. Ia memiliki kemampuan komunikasi dan manajemen proyek yang sangat baik.',
    name: 'Evaluasi Tim Pembimbing',
    role: 'Program Hibah Inovasi Sosial',
    org: 'Innovillage 2025 — UMSU',
    badge: 'Project Leadership Review',
  },
]
