export type Project = {
  id: number
  slug: string
  title: string
  description: string
  image: string | null
  /** URL hosting live — jika null maka tombol tidak ditampilkan */
  liveUrl?: string | null
  /** Kategori proyek, dipakai untuk filter */
  category: 'Web' | 'Mobile' | 'UI/UX' | 'Sistem'
  /** Teknologi yang digunakan */
  tags: string[]
  year?: number
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "ramadhan-kareem",
    title: "Desain UI/UX Tema Ramadhan",
    description: "Desain antarmuka bertema Ramadhan yang memberikan kesan nyaman dan menenangkan bagi pengguna.",
    image: "/img/rama2.png",
    liveUrl: null,
    category: "UI/UX",
    tags: ["Figma", "UI/UX", "Mobile"],
    year: 2024,
  },
  {
    id: 2,
    slug: "web-sejarah-yogyakarta",
    title: "Web Sejarah Yogyakarta",
    description: "Website informatif yang mengenalkan sejarah dan budaya kota Yogyakarta kepada pengguna.",
    image: "/img/tengah.jpeg",
    liveUrl: null,
    category: "Web",
    tags: ["Next.js", "React", "Tailwind"],
    year: 2024,
  },
  {
    id: 3,
    slug: "restoran-sikumbang",
    title: "Restoran Sikumbang",
    description: "Website restoran modern untuk mengenalkan menu dan layanan Restoran Sikumbang.",
    image: "/img/profil.png",
    liveUrl: null,
    category: "Web",
    tags: ["Laravel", "MySQL", "Bootstrap"],
    year: 2024,
  },
  {
    id: 4,
    slug: "sistem-pengaduan",
    title: "Sistem Pengaduan Online",
    description: "Platform pengaduan digital yang memudahkan masyarakat menyampaikan laporan secara online dengan alur yang transparan dan terstruktur.",
    image: "/img/pengaduan/WhatsApp_Image_2026-06-02_at_23.21.42.jpeg",
    liveUrl: null,
    category: "Sistem",
    tags: ["Laravel", "MySQL", "Tailwind"],
    year: 2026,
  },
  {
    id: 5,
    slug: "aigency",
    title: "AI Gency",
    description: "Platform AI all-in-one untuk otomasi pembuatan konten, caption, dan auto-posting ke Instagram, Facebook, dan Telegram dalam satu sistem terintegrasi.",
    image: "/img/aigency/WhatsApp_Image_2026-06-02_at_23.26.34.jpeg",
    liveUrl: "https://marketing-ai-gency.vercel.app/",
    category: "Web",
    tags: ["FastAPI", "React 19", "AI", "Tailwind"],
    year: 2026,
  },
  {
    id: 6,
    slug: "qhome",
    title: "QHome B2B Pro-Assistant",
    description: "Platform pengadaan bahan bangunan cerdas berbasis Multi-Agent AI untuk kontraktor. Mengotomasi pembuatan RAB dengan akurasi 100% melalui prinsip Zero-Hallucination Finance.",
    image: "/img/qhome/WhatsApp_Image_2026-06-02_at_23.34.52.jpeg",
    liveUrl: "https://qhome-ai.vercel.app/",
    category: "Sistem",
    tags: ["FastAPI", "PostgreSQL", "AI", "Next.js"],
    year: 2026,
  },
  // ── Tambah proyek baru di bawah ini ──
  // {
  //   id: 5,
  //   slug: "nama-slug",
  //   title: "Nama Proyek",
  //   description: "Deskripsi singkat proyek.",
  //   image: "/img/nama-gambar.png",
  //   liveUrl: "https://namaproyek.com",   // ← isi jika ada hosting
  //   category: "Web",
  //   tags: ["Next.js", "Tailwind"],
  //   year: 2025,
  // },
]
