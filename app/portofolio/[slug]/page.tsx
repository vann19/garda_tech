import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'

// Data detail per proyek (gallery + highlight title)
// Tambah entry baru di sini setiap kali ada proyek baru di lib/projects.ts
const projectDetails: Record<string, {
  titleHighlight: string
  description: string
  images: { src: string }[]
}> = {
  'ramadhan-kareem': {
    titleHighlight: 'Ramadhan Kareem',
    description: 'Desain ini adalah desain untuk menyambut bulan suci ramadhan. Dimana pada desain ini saya ingin memberikan kesan yang nyaman dan menenangkan bagi para pengguna.',
    images: [
      { src: '/img/rama1.png' },
      { src: '/img/rama2.png' },
      { src: '/img/rama3.png' },
    ],
  },
  'web-sejarah-yogyakarta': {
    titleHighlight: 'Yogyakarta',
    description: 'Web ini bertujuan untuk mengenalkan sejarah di Yogyakarta kepada para pengguna.',
    images: [
      { src: '/img/kiri.jpeg' },
      { src: '/img/tengah.jpeg' },
      { src: '/img/kanan.jpeg' },
    ],
  },
  'restoran-sikumbang': {
    titleHighlight: 'Sikumbang',
    description: 'Website ini bertujuan untuk mengenalkan restoran sikumbang kepada para pengguna.',
    images: [
      { src: '/img/keranjang.png' },
      { src: '/img/profil.png' },
      { src: '/img/menu.png' },
    ],
  },
  'sistem-pengaduan': {
    titleHighlight: 'Pengaduan Online',
    description: 'Platform pengaduan digital yang memudahkan masyarakat menyampaikan laporan secara online dengan alur yang transparan dan terstruktur.',
    images: [
      { src: '/img/pengaduan/WhatsApp_Image_2026-06-02_at_23.21.42.jpeg' },
      { src: '/img/pengaduan/WhatsApp_Image_2026-06-02_at_23.21.42_(1).jpeg' },
      { src: '/img/pengaduan/WhatsApp_Image_2026-06-02_at_23.21.42_(2).jpeg' },
      { src: '/img/pengaduan/WhatsApp_Image_2026-06-02_at_23.21.42_(3).jpeg' },
      { src: '/img/pengaduan/WhatsApp_Image_2026-06-02_at_23.21.42_(4).jpeg' },
      { src: '/img/pengaduan/WhatsApp_Image_2026-06-02_at_23.21.43.jpeg' },
      { src: '/img/pengaduan/WhatsApp_Image_2026-06-02_at_23.21.43_(1).jpeg' },
    ],
  },
  'aigency': {
    titleHighlight: 'Gency',
    description: `AI Gency merupakan sebuah platform inovasi digital berbasis Artificial Intelligence (AI) yang dikembangkan untuk membantu pelaku usaha, content creator, dan digital marketer dalam mengotomatisasi proses pembuatan hingga publikasi konten media sosial. Platform ini hadir sebagai solusi atas permasalahan umum dalam digital marketing, yaitu proses pembuatan konten yang masih dilakukan secara manual, memakan waktu, serta membutuhkan keterampilan desain dan copywriting. Dengan memanfaatkan teknologi AI, pengguna cukup mengunggah gambar atau video produk, kemudian sistem akan secara otomatis menghasilkan konten visual yang lebih menarik, caption yang relevan, serta menyediakan fitur penjadwalan dan auto-posting ke berbagai platform seperti Instagram, Facebook, dan Telegram dalam satu sistem terintegrasi.

Dari sisi teknologi, AI GencyBooster dibangun menggunakan arsitektur modern berbasis backend FastAPI dengan Python yang terhubung ke PostgreSQL sebagai database utama. Sistem ini juga mengintegrasikan berbagai layanan AI seperti Google Gemini AI untuk generate caption, Alibaba Qwen untuk pembuatan gambar, serta Magic Hour API untuk konversi gambar menjadi video. Selain itu, integrasi Cloudinary digunakan untuk manajemen media, serta Meta Graph API dan Telegram Bot API untuk proses publikasi otomatis ke media sosial. Pada sisi frontend, sistem dibangun menggunakan React 19 dengan TypeScript, Vite, Tailwind CSS, serta komponen UI modern seperti Shadcn UI dan Radix UI untuk menghasilkan tampilan yang responsif, interaktif, dan mudah digunakan.

Platform ini ditujukan untuk UMKM, content creator, digital marketer, serta pemilik brand yang membutuhkan solusi praktis dalam mengelola konten digital tanpa harus memiliki keahlian teknis yang mendalam. Keunggulan utama AI GencyBooster terletak pada konsep all-in-one system yang mengintegrasikan seluruh proses mulai dari pembuatan konten, editing, penulisan caption, hingga publikasi otomatis dalam satu platform.`,
    images: [
      { src: '/img/aigency/WhatsApp_Image_2026-06-02_at_23.26.34.jpeg' },
      { src: '/img/aigency/WhatsApp_Image_2026-06-02_at_23.26.34_(1).jpeg' },
      { src: '/img/aigency/WhatsApp_Image_2026-06-02_at_23.26.34_(2).jpeg' },
      { src: '/img/aigency/WhatsApp_Image_2026-06-02_at_23.26.34_(3).jpeg' },
    ],
  },
  'qhome': {
    titleHighlight: 'B2B Pro-Assistant',
    description: `QHome B2B Pro-Assistant adalah platform pengadaan bahan bangunan cerdas yang dirancang untuk mendigitalisasi dan mengotomatisasi alur kerja B2B bagi kontraktor. Proyek ini muncul sebagai solusi atas lambatnya proses pembuatan penawaran harga (RAB) yang selama ini memakan waktu berhari-hari dan rentan terhadap kesalahan manusia. Dengan mengimplementasikan arsitektur Multi-Agent yang modular, sistem ini mengintegrasikan Document Extractor untuk membaca dokumen fisik maupun digital, Visual Catalog Agent untuk pemetaan material berbasis AI, serta Pricing Optimizer yang menjamin akurasi finansial.

Inovasi utama terletak pada penerapan prinsip Zero-Hallucination Finance, di mana logika penalaran LLM dipisahkan dari mesin kalkulasi matematika deterministik. Seluruh perhitungan harga, diskon grosir, dan analisis biaya dilakukan sepenuhnya oleh fungsi Python murni yang terhubung langsung ke database PostgreSQL (Neon Tech) — memastikan output penawaran 100% akurat secara numerik.

Sistem ini dilengkapi Transparent Decision Logs yang memungkinkan pengguna memantau proses berpikir setiap agen secara real-time. Dengan Clean Architecture berbasis FastAPI, QHome berhasil mentransformasi proses pengadaan yang kompleks menjadi layanan digital yang efisien, transparan, dan mampu memberikan simulasi penghematan biaya secara proaktif bagi para kontraktor.`,
    images: [
      { src: '/img/qhome/WhatsApp_Image_2026-06-02_at_23.34.52.jpeg' },
      { src: '/img/qhome/WhatsApp_Image_2026-06-02_at_23.41.52.jpeg' },
      { src: '/img/qhome/WhatsApp_Image_2026-06-02_at_23.41.52_(1).jpeg' },
    ],
  },
  // ── Tambah detail proyek baru di bawah ini ──
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export default async function PortfolioDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  // Ambil data dasar dari lib/projects.ts
  const base = projects.find((p) => p.slug === slug)
  // Ambil data detail (gallery, dll)
  const detail = projectDetails[slug]

  if (!base || !detail) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-gray-900 text-4xl font-bold font-['Syne']">Proyek tidak ditemukan</h1>
          <Link href="/portofolio" className="text-violet-500 mt-4 inline-block hover:underline">
            ← Kembali ke Portofolio
          </Link>
        </div>
      </div>
    )
  }

  const images = detail.images

  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* Background blur */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[20%] w-[80%] aspect-square bg-violet-400/10 rounded-full blur-[120px] sm:blur-[160px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">

        {/* Back */}
        <Link
          href="/portofolio"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-violet-600 transition-colors mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Kembali ke Portofolio
        </Link>

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="px-3 py-1 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold">
              {base.category}
            </span>
            {base.year && (
              <span className="px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-500 text-xs font-semibold">
                {base.year}
              </span>
            )}
          </div>

          <h1 className="text-gray-900 text-3xl sm:text-5xl lg:text-6xl font-bold font-['Syne'] leading-tight">
            <span className="text-violet-600">{base.title.split(' ')[0]} </span>
            {detail.titleHighlight}
          </h1>

          <div className="mt-4 text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl space-y-4">
            {detail.description.split('\n\n').map((para, i) => (
              <p key={i}>{para.trim()}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-5">
            {base.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full bg-violet-50 text-violet-700 border border-violet-100"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Live URL */}
          {base.liveUrl && (
            <a
              href={base.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold shadow-md shadow-violet-200 hover:shadow-violet-300/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              Lihat Live Website
            </a>
          )}
        </div>

        {/* Gallery */}
        {images.length > 0 && (
          <div className="mt-4">
            {/* Gambar utama */}
            <div className="relative w-full rounded-2xl overflow-hidden border border-gray-100 shadow-lg mb-4">
              <Image
                src={images[0].src}
                alt={`${base.title} - main`}
                width={1200}
                height={700}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {/* Grid gambar tambahan */}
            {images.length > 1 && (
              <div className={`grid gap-4 ${images.length === 2 ? 'grid-cols-1' : images.length === 3 ? 'grid-cols-3' : 'grid-cols-2 sm:grid-cols-3'}`}>
                {images.slice(1).map((img, i) => (
                  <div key={i} className="relative w-full rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300">
                    <Image
                      src={img.src}
                      alt={`${base.title} - ${i + 2}`}
                      width={600}
                      height={400}
                      className="w-full h-auto object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

      </div>

      <Footer />
    </div>
  )
}