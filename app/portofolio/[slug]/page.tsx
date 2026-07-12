'use client';

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, ArrowLeft } from 'lucide-react'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'
import { useLanguage } from '@/context/LanguageContext'

// Data detail per proyek (gallery + highlight title)
// Tambah entry baru di sini setiap kali ada proyek baru di lib/projects.ts
const projectDetails: Record<string, {
  titleHighlight: string
  titleHighlightEn: string
  description: string
  descriptionEn: string
  images: { src: string }[]
  layout?: 'default' | 'mobile-grid'
}> = {
  'ramadhan-kareem': {
    titleHighlight: 'Kareem',
    titleHighlightEn: 'Kareem',
    description: 'Desain ini adalah desain untuk menyambut bulan suci ramadhan. Dimana pada desain ini saya ingin memberikan kesan yang nyaman dan menenangkan bagi para pengguna.',
    descriptionEn: 'This design is to welcome the holy month of Ramadan. In this design, I want to give a comfortable and calming impression for users.',
    images: [
      { src: '/img/rama1.png' },
      { src: '/img/rama2.png' },
      { src: '/img/rama3.png' },
    ],
  },
  'web-sejarah-yogyakarta': {
    titleHighlight: 'Yogyakarta',
    titleHighlightEn: 'Yogyakarta',
    description: 'Web ini bertujuan untuk mengenalkan sejarah di Yogyakarta kepada para pengguna.',
    descriptionEn: 'This web aims to introduce the history of Yogyakarta to users.',
    images: [
      { src: '/img/kiri.jpeg' },
      { src: '/img/tengah.jpeg' },
      { src: '/img/kanan.jpeg' },
    ],
  },
  'restoran-sikumbang': {
    titleHighlight: 'Sikumbang',
    titleHighlightEn: 'Sikumbang',
    description: 'Website ini bertujuan untuk mengenalkan restoran sikumbang kepada para pengguna.',
    descriptionEn: 'This website aims to introduce Sikumbang restaurant to users.',
    images: [
      { src: '/img/keranjang.png' },
      { src: '/img/profil.png' },
      { src: '/img/menu.png' },
    ],
  },
  'sistem-pengaduan': {
    titleHighlight: 'Pengaduan Online',
    titleHighlightEn: 'Online Complaint',
    description: 'Platform pengaduan digital yang memudahkan masyarakat menyampaikan laporan secara online dengan alur yang transparan dan terstruktur.',
    descriptionEn: 'A digital complaint platform that makes it easy for the public to submit reports online with a transparent and structured flow.',
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
    titleHighlightEn: 'Gency',
    description: `AI Gency merupakan sebuah platform inovasi digital berbasis Artificial Intelligence (AI) yang dikembangkan untuk membantu pelaku usaha, content creator, dan digital marketer dalam mengotomatisasi proses pembuatan hingga publikasi konten media sosial. Platform ini hadir sebagai solusi atas permasalahan umum dalam digital marketing, yaitu proses pembuatan konten yang masih dilakukan secara manual, memakan waktu, serta membutuhkan keterampilan desain dan copywriting. Dengan memanfaatkan teknologi AI, pengguna cukup mengunggah gambar atau video produk, kemudian sistem akan secara otomatis menghasilkan konten visual yang lebih menarik, caption yang relevan, serta menyediakan fitur penjadwalan dan auto-posting ke berbagai platform seperti Instagram, Facebook, dan Telegram dalam satu sistem terintegrasi.

Dari sisi teknologi, AI GencyBooster dibangun menggunakan arsitektur modern berbasis backend FastAPI dengan Python yang terhubung ke PostgreSQL sebagai database utama. Sistem ini juga mengintegrasikan berbagai layanan AI seperti Google Gemini AI untuk generate caption, Alibaba Qwen untuk pembuatan gambar, serta Magic Hour API untuk konversi gambar menjadi video. Selain itu, integrasi Cloudinary digunakan untuk manajemen media, serta Meta Graph API dan Telegram Bot API untuk proses publikasi otomatis ke media sosial. Pada sisi frontend, sistem dibangun menggunakan React 19 dengan TypeScript, Vite, Tailwind CSS, serta komponen UI modern seperti Shadcn UI dan Radix UI untuk menghasilkan tampilan yang responsif, interaktif, dan mudah digunakan.

Platform ini ditujukan untuk UMKM, content creator, digital marketer, serta pemilik brand yang membutuhkan solusi praktis dalam mengelola konten digital tanpa harus memiliki keahlian teknis yang mendalam. Keunggulan utama AI GencyBooster terletak pada konsep all-in-one system yang mengintegrasikan seluruh proses mulai dari pembuatan konten, editing, penulisan caption, hingga publikasi otomatis dalam satu platform.`,
    descriptionEn: `AI Gency is a digital innovation platform based on Artificial Intelligence (AI) developed to help business owners, content creators, and digital marketers automate the process of creating and publishing social media content. This platform comes as a solution to common problems in digital marketing, where content creation is still done manually, time-consuming, and requires design and copywriting skills. By utilizing AI technology, users simply upload product images or videos, then the system will automatically generate more attractive visual content, relevant captions, and provide scheduling and auto-posting features to various platforms such as Instagram, Facebook, and Telegram in one integrated system.

From a technological perspective, AI GencyBooster is built using a modern architecture based on FastAPI backend with Python connected to PostgreSQL as the main database. This system also integrates various AI services such as Google Gemini AI for caption generation, Alibaba Qwen for image generation, and Magic Hour API for image-to-video conversion. Additionally, Cloudinary integration is used for media management, as well as Meta Graph API and Telegram Bot API for automated publishing to social media. On the frontend side, the system is built using React 19 with TypeScript, Vite, Tailwind CSS, and modern UI components like Shadcn UI and Radix UI to produce a responsive, interactive, and user-friendly interface.

This platform is intended for MSMEs, content creators, digital marketers, and brand owners who need practical solutions in managing digital content without having in-depth technical expertise. The main advantage of AI GencyBooster lies in its all-in-one system concept that integrates the entire process from content creation, editing, caption writing, to automatic publishing in one platform.`,
    images: [
      { src: '/img/aigency/WhatsApp_Image_2026-06-02_at_23.26.34.jpeg' },
      { src: '/img/aigency/WhatsApp_Image_2026-06-02_at_23.26.34_(1).jpeg' },
      { src: '/img/aigency/WhatsApp_Image_2026-06-02_at_23.26.34_(2).jpeg' },
      { src: '/img/aigency/WhatsApp_Image_2026-06-02_at_23.26.34_(3).jpeg' },
    ],
  },
  'qhome': {
    titleHighlight: 'B2B Pro-Assistant',
    titleHighlightEn: 'B2B Pro-Assistant',
    description: `QHome B2B Pro-Assistant adalah platform pengadaan bahan bangunan cerdas yang dirancang untuk mendigitalisasi dan mengotomatisasi alur kerja B2B bagi kontraktor. Proyek ini muncul sebagai solusi atas lambatnya proses pembuatan penawaran harga (RAB) yang selama ini memakan waktu berhari-hari dan rentan terhadap kesalahan manusia. Dengan mengimplementasikan arsitektur Multi-Agent yang modular, sistem ini mengintegrasikan Document Extractor untuk membaca dokumen fisik maupun digital, Visual Catalog Agent untuk pemetaan material berbasis AI, serta Pricing Optimizer yang menjamin akurasi finansial.

Inovasi utama terletak pada penerapan prinsip Zero-Hallucination Finance, di mana logika penalaran LLM dipisahkan dari mesin kalkulasi matematika deterministik. Seluruh perhitungan harga, diskon grosir, dan analisis biaya dilakukan sepenuhnya oleh fungsi Python murni yang terhubung langsung ke database PostgreSQL (Neon Tech) — memastikan output penawaran 100% akurat secara numerik.

Sistem ini dilengkapi Transparent Decision Logs yang memungkinkan pengguna memantau proses berpikir setiap agen secara real-time. Dengan Clean Architecture berbasis FastAPI, QHome berhasil mentransformasi proses pengadaan yang kompleks menjadi layanan digital yang efisien, transparan, dan mampu memberikan simulasi penghematan biaya secara proaktif bagi para kontraktor.`,
    descriptionEn: `QHome B2B Pro-Assistant is an intelligent building material procurement platform designed to digitize and automate B2B workflows for contractors. This project emerged as a solution to the slow process of creating cost estimates (RAB) that has taken days and is prone to human error. By implementing a modular Multi-Agent architecture, this system integrates Document Extractor to read physical and digital documents, Visual Catalog Agent for AI-based material mapping, and Pricing Optimizer that ensures financial accuracy.

The main innovation lies in the application of the Zero-Hallucination Finance principle, where LLM reasoning logic is separated from deterministic mathematical calculation engines. All price calculations, wholesale discounts, and cost analysis are performed entirely by pure Python functions directly connected to the PostgreSQL database (Neon Tech) — ensuring 100% numerically accurate offer output.

This system is equipped with Transparent Decision Logs that allow users to monitor the thinking process of each agent in real-time. With Clean Architecture based on FastAPI, QHome has successfully transformed complex procurement processes into efficient, transparent digital services capable of proactively providing cost-saving simulations for contractors.`,
    images: [
      { src: '/img/qhome/WhatsApp_Image_2026-06-02_at_23.34.52.jpeg' },
      { src: '/img/qhome/WhatsApp_Image_2026-06-02_at_23.41.52.jpeg' },
      { src: '/img/qhome/WhatsApp_Image_2026-06-02_at_23.41.52_(1).jpeg' },
    ],
  },
  'daily-mood': {
    titleHighlight: 'Mood',
    titleHighlightEn: 'Mood',
    description: `Daily Mood adalah sebuah aplikasi mobile yang dirancang khusus untuk mendukung kesehatan mental pengguna secara menyeluruh. Proyek ini berfokus pada perancangan UI/UX yang mengintegrasikan berbagai fitur utama seperti mood tracking harian, akses konsultasi dengan profesional kesehatan mental, sesi meditasi terpandu, forum komunitas, serta konten edukasi seputar kesehatan jiwa — semua dalam satu platform yang intuitif dan mudah digunakan.

Pendekatan desain yang digunakan menempatkan pengalaman pengguna (user experience) sebagai prioritas utama. Setiap alur navigasi dirancang agar terasa natural dan tidak membebani pengguna, terutama bagi mereka yang sedang dalam kondisi rentan secara emosional. Palet warna yang lembut, tipografi yang ramah baca, serta ikon-ikon yang jelas dipilih secara seksama untuk menciptakan suasana yang menenangkan dan mendukung pemulihan.

Fitur mood tracking memungkinkan pengguna mencatat kondisi emosional mereka setiap hari melalui jurnal digital, yang kemudian divisualisasikan dalam bentuk kalender dan grafik perkembangan. Hal ini membantu pengguna maupun konselor memahami pola mood dari waktu ke waktu. Secara keseluruhan, Daily Mood hadir sebagai teman digital yang mendampingi perjalanan kesehatan mental pengguna dengan pendekatan yang hangat, personal, dan berbasis bukti.`,
    descriptionEn: `Daily Mood is a mobile application specifically designed to comprehensively support users' mental health. This project focuses on UI/UX design that integrates various key features such as daily mood tracking, access to professional mental health consultations, guided meditation sessions, community forums, and mental health educational content — all in one intuitive and easy-to-use platform.

The design approach places user experience as the top priority. Every navigation flow is designed to feel natural and non-burdensome for users, especially for those who are in an emotionally vulnerable state. Soft color palettes, readable typography, and clear icons are carefully chosen to create a calming atmosphere that supports recovery.

The mood tracking feature allows users to record their emotional state every day through a digital journal, which is then visualized in the form of a calendar and progress charts. This helps both users and counselors understand mood patterns over time. Overall, Daily Mood serves as a digital companion accompanying users' mental health journey with a warm, personal, and evidence-based approach.`,
    images: [
      { src: '/img/moodhealty/Dashboard 1.png' },
      { src: '/img/moodhealty/Jurnal.png' },
      { src: '/img/moodhealty/Calendar.png' },
      { src: '/img/moodhealty/Setting.png' },
    ],
    layout: 'mobile-grid',
    titleFull: true,
  },
  'mood-tracking': {
    titleHighlight: 'Tracking',
    titleHighlightEn: 'Tracking',
    description: `Mood Tracking adalah aplikasi mobile yang dirancang untuk membantu pengguna memantau dan memahami kondisi emosional mereka secara rutin. Proyek ini berfokus pada perancangan UI/UX menggunakan Figma dengan mengutamakan pengalaman pengguna yang intuitif, konsisten, dan mudah digunakan.

Fitur utama yang dirancang meliputi pencatatan suasana hati harian, jurnal digital untuk mengekspresikan perasaan secara lebih mendalam, kalender mood untuk melihat pola emosi dari waktu ke waktu, serta statistik perkembangan emosi yang divisualisasikan secara jelas. Selain itu, aplikasi ini juga dilengkapi dengan fitur meditasi terpandu sebagai sarana relaksasi dan penenang pikiran.

Pendekatan desain yang diterapkan menempatkan kemudahan penggunaan sebagai prioritas utama. Setiap layar dirancang dengan alur yang natural, palet warna yang lembut, dan navigasi yang sederhana agar pengguna dapat menggunakan aplikasi tanpa hambatan, bahkan di saat kondisi emosional sedang tidak stabil. Mood Tracking hadir sebagai pendamping digital harian yang mendukung kesadaran diri dan kesehatan mental pengguna.`,
    descriptionEn: `Mood Tracking is a mobile application designed to help users monitor and understand their emotional state on a regular basis. This project focuses on UI/UX design using Figma, prioritizing an intuitive, consistent, and easy-to-use user experience.

The main features designed include daily mood recording, a digital journal for expressing feelings more deeply, a mood calendar to see emotional patterns over time, and clearly visualized emotion development statistics. In addition, the app also features guided meditation as a means of relaxation and calming the mind.

The design approach applied places ease of use as the top priority. Every screen is designed with a natural flow, soft color palette, and simple navigation so users can use the app without obstacles, even when their emotional state is unstable. Mood Tracking serves as a daily digital companion that supports self-awareness and users' mental health.`,
    images: [
      { src: '/img/himatic/Home Page.png' },
      { src: '/img/himatic/Halaman Awal.png' },
      { src: '/img/himatic/Konsultasi.png' },
      { src: '/img/himatic/Sana Bot 1.png' },
    ],
    layout: 'mobile-grid',
    titleFull: true,
  },
  'momi': {
    titleHighlight: 'Aplikasi Belajar Sosial & Emosi',
    titleHighlightEn: 'Social & Emotional Learning App',
    description: `Momi adalah aplikasi edukasi anak yang dirancang dengan pendekatan gamifikasi untuk membuat pembelajaran sosial dan emosi menjadi menyenangkan dan menarik. Proyek ini berfokus pada perancangan UI/UX yang menggabungkan berbagai elemen interaktif seperti mini games, pengenalan budaya lokal, pembelajaran emosi, sesi relaksasi, serta sistem reward yang memotivasi anak untuk terus belajar.

Desain antarmuka Momi dibuat khusus agar ramah anak — menggunakan warna-warna cerah dan hangat, ilustrasi karakter yang menggemaskan, tipografi yang besar dan mudah dibaca, serta navigasi yang sederhana sehingga anak-anak dapat menggunakannya secara mandiri tanpa kebingungan. Setiap elemen visual dirancang untuk memancing rasa ingin tahu dan semangat eksplorasi.

Fitur utama mencakup peta petualangan interaktif sebagai jalur pembelajaran, mini games edukatif untuk melatih kecerdasan emosional dan sosial, modul pengenalan budaya nusantara, serta mekanisme reward berupa bintang dan hadiah virtual yang mendorong konsistensi belajar. Momi hadir sebagai teman belajar digital yang menyenangkan, mendukung tumbuh kembang anak secara holistik melalui pendekatan bermain sambil belajar.`,
    descriptionEn: `Momi is a children's educational application designed with a gamification approach to make social and emotional learning fun and engaging. This project focuses on UI/UX design that combines various interactive elements such as mini games, local cultural recognition, emotion learning, relaxation sessions, and a reward system that motivates children to keep learning.

Momi's interface design is specially made to be child-friendly — using bright and warm colors, adorable character illustrations, large and easy-to-read typography, and simple navigation so children can use it independently without confusion. Every visual element is designed to spark curiosity and the spirit of exploration.

Key features include an interactive adventure map as a learning path, educational mini games to train emotional and social intelligence, a Nusantara cultural recognition module, and a reward mechanism of stars and virtual prizes that encourages learning consistency. Momi serves as a fun digital learning companion, supporting children's holistic development through a play-while-learning approach.`,
    images: [
      { src: '/img/momi/UI landing page.jpg' },
      { src: '/img/momi/UI MAP.png' },
      { src: '/img/momi/UI PETUALANGANKU.png' },
      { src: '/img/momi/pilihan budayaku.jpg' },
    ],
  },
  'hikely': {
    titleHighlight: 'App',
    titleHighlightEn: 'App',
    description: `Hikely adalah aplikasi mobile yang dirancang untuk memenuhi kebutuhan para pendaki gunung secara lengkap dalam satu platform terintegrasi. Proyek ini berfokus pada perancangan UI/UX yang menggabungkan fitur penyewaan perlengkapan outdoor, informasi gunung, dan proses pemesanan dengan antarmuka yang intuitif, responsif, dan berorientasi pada kemudahan pengguna.

Desain mencakup katalog perlengkapan outdoor yang terstruktur, halaman detail produk dengan informasi lengkap, alur checkout yang sederhana, integrasi pembayaran digital, serta fitur pelacakan status pesanan secara real-time. Setiap layar dirancang dengan mempertimbangkan konteks penggunaan di lapangan, di mana pengguna membutuhkan akses informasi yang cepat dan navigasi yang tidak membingungkan.

Pendekatan desain mengutamakan efisiensi alur pengguna dari pencarian perlengkapan hingga konfirmasi pemesanan. Visual yang digunakan menggambarkan nuansa alam dan petualangan, menciptakan pengalaman yang relevan dan menginspirasi bagi komunitas pendaki. Hikely hadir sebagai solusi digital terpadu yang memudahkan persiapan pendakian dari mana saja.`,
    descriptionEn: `Hikely is a mobile application designed to comprehensively meet the needs of mountain hikers in one integrated platform. This project focuses on UI/UX design that combines outdoor gear rental features, mountain information, and booking processes with an intuitive, responsive, and user-friendly interface.

The design covers a structured outdoor gear catalog, product detail pages with complete information, a simple checkout flow, digital payment integration, and real-time order status tracking. Every screen is designed with field usage context in mind, where users need quick information access and non-confusing navigation.

The design approach prioritizes user flow efficiency from gear search to booking confirmation. The visuals used depict the nuances of nature and adventure, creating a relevant and inspiring experience for the hiking community. Hikely serves as an integrated digital solution that makes hiking preparation easier from anywhere.`,
    images: [
      { src: '/img/hikely/beranda 2.png' },
      { src: '/img/hikely/katalog tenda.png' },
      { src: '/img/hikely/KP Menunggu.png' },
      { src: '/img/hikely/Member.png' },
    ],
    layout: 'mobile-grid',
  },
  // ── Tambah detail proyek baru di bawah ini ──
  'e-kelurahan': {
    titleHighlight: 'Tulang Bawang',
    titleHighlightEn: 'Tulang Bawang',
    description: `Website Desa Tulang Bawang merupakan sistem informasi desa berbasis web yang dirancang untuk memudahkan masyarakat dalam mengakses informasi desa secara digital. Website ini menyediakan informasi profil desa, berita, pengumuman, galeri, serta layanan informasi yang dapat diakses secara online sehingga meningkatkan transparansi dan pelayanan kepada masyarakat.`,
    descriptionEn: `Tulang Bawang Village Website is a web-based village information system designed to make it easy for residents to access village information digitally. This website provides village profile information, news, announcements, a gallery, and information services that can be accessed online, thereby increasing transparency and service to the community.`,
    images: [
      { src: '/img/kelurahan/e-1.jpeg' },
      { src: '/img/kelurahan/e-2.jpeg' },
      { src: '/img/kelurahan/e-3.jpeg' },
      { src: '/img/kelurahan/e-4.jpeg' },
    ],
  },
  'findash': {
    titleHighlight: 'Financial',
    titleHighlightEn: 'Financial',
    description: `Findash adalah aplikasi financial dashboard berbasis web yang dirancang untuk membantu pengguna memantau kondisi keuangan melalui pencatatan transaksi, analisis pengeluaran, serta penyajian data dalam bentuk grafik dan laporan yang mudah dipahami.`,
    descriptionEn: `Findash is a web-based financial dashboard application designed to help users monitor their financial condition through transaction recording, expense analysis, and data presentation in the form of easy-to-understand charts and reports.`,
    images: [
      { src: '/img/findash/1.jpeg' },
      { src: '/img/findash/2.jpeg' },
      { src: '/img/findash/3.jpeg' },
      { src: '/img/findash/4.jpeg' },
    ],
  },
}

// Note: generateStaticParams tidak bisa digunakan di client component
// Kita tetap export sebagai fungsi biasa untuk Next.js

export default function PortfolioDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { lang } = useLanguage();
  // Unwrap params dengan React.use()
  const { slug } = React.use(params)

  // Ambil data dasar dari lib/projects.ts
  const base = projects.find((p) => p.slug === slug)
  // Ambil data detail (gallery, dll)
  const detail = projectDetails[slug]

  const t = lang === 'id' ? {
    back: 'Kembali ke Portofolio',
    notFound: 'Proyek tidak ditemukan',
    backLink: '← Kembali ke Portofolio',
    liveBtn: 'Lihat Live Website',
  } : {
    back: 'Back to Portfolio',
    notFound: 'Project not found',
    backLink: '← Back to Portfolio',
    liveBtn: 'View Live Website',
  };

  if (!base || !detail) {
    return (
      <div className="w-full min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-gray-900 text-4xl font-bold font-['Syne']">{t.notFound}</h1>
          <Link href="/portofolio" className="text-violet-500 mt-4 inline-block hover:underline">
            {t.backLink}
          </Link>
        </div>
      </div>
    )
  }

  const images = detail.images
  const titleHighlight = lang === 'id' ? detail.titleHighlight : detail.titleHighlightEn
  const description = lang === 'id' ? detail.description : detail.descriptionEn

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
          {t.back}
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
            {titleHighlight}
          </h1>

          <div className="mt-4 text-gray-500 text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl space-y-4">
            {description.split('\n\n').map((para, i) => (
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
              {t.liveBtn}
            </a>
          )}
        </div>

        {/* Gallery */}
        {images.length > 0 && (
          <div className="mt-4">
            {detail.layout === 'mobile-grid' ? (
              /* Layout khusus screenshot mobile — grid sejajar */
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {images.map((img, i) => (
                  <div
                    key={i}
                    className="relative w-full rounded-2xl overflow-hidden border border-gray-100 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                  >
                    <Image
                      src={img.src}
                      alt={`${base.title} - screen ${i + 1}`}
                      width={400}
                      height={700}
                      className="w-full h-auto object-cover"
                      priority={i === 0}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <>
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
              </>
            )}
          </div>
        )}

      </div>

      <Footer />
    </div>
  )
}