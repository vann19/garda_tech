export interface Project {
  id: number
  slug: string
  title: string
  titleEn: string
  category: string
  categoryEn: string
  description: string
  descriptionEn: string
  descriptionFull: string
  descriptionFullEn: string
  tags: string[]
  tagsEn: string[]
  image?: string
  year?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    slug: 'ramadhan-kareem',
    title: 'Ramadhan Kareem',
    titleEn: 'Ramadhan Kareem',
    category: 'UI/UX Design',
    categoryEn: 'UI/UX Design',
    description: 'Desain antarmuka bertema Ramadhan yang memberikan kesan nyaman dan menenangkan bagi pengguna.',
    descriptionEn: 'Ramadan-themed interface design that provides a comfortable and calming impression for users.',
    descriptionFull: 'Desain ini adalah desain untuk menyambut bulan suci ramadhan. Dimana pada desain ini saya ingin memberikan kesan yang nyaman dan menenangkan bagi para pengguna.',
    descriptionFullEn: 'This design is to welcome the holy month of Ramadan. In this design, I want to give a comfortable and calming impression for users.',
    tags: ['Figma', 'UI/UX', 'Mobile'],
    tagsEn: ['Figma', 'UI/UX', 'Mobile'],
    image: '/img/rama1.png',
    year: '2025',
  },
  {
    id: 2,
    slug: 'web-sejarah-yogyakarta',
    title: 'Web Sejarah Yogyakarta',
    titleEn: 'Yogyakarta History Web',
    category: 'Website Informasi',
    categoryEn: 'Information Website',
    description: 'Website informatif yang mengenalkan sejarah dan budaya kota Yogyakarta kepada pengguna.',
    descriptionEn: 'An informative website that introduces the history and culture of Yogyakarta to users.',
    descriptionFull: 'Web ini bertujuan untuk mengenalkan sejarah di Yogyakarta kepada para pengguna.',
    descriptionFullEn: 'This web aims to introduce the history of Yogyakarta to users.',
    tags: ['Next.js', 'React', 'Tailwind'],
    tagsEn: ['Next.js', 'React', 'Tailwind'],
    image: '/img/kiri.jpeg',
    year: '2025',
  },
  {
    id: 3,
    slug: 'restoran-sikumbang',
    title: 'Restoran Sikumbang',
    titleEn: 'Sikumbang Restaurant',
    category: 'Website Restoran',
    categoryEn: 'Restaurant Website',
    description: 'Website restoran modern untuk mengenalkan menu dan layanan Restoran Sikumbang.',
    descriptionEn: 'A modern restaurant website to introduce the menu and services of Sikumbang Restaurant.',
    descriptionFull: 'Website ini bertujuan untuk mengenalkan restoran sikumbang kepada para pengguna.',
    descriptionFullEn: 'This website aims to introduce Sikumbang restaurant to users.',
    tags: ['Laravel', 'MySQL', 'Bootstrap'],
    tagsEn: ['Laravel', 'MySQL', 'Bootstrap'],
    image: '/img/menu.png',
    year: '2025',
  },
  {
    id: 4,
    slug: 'sistem-pengaduan',
    title: 'Sistem Pengaduan Online',
    titleEn: 'Online Complaint System',
    category: 'Platform Pengaduan',
    categoryEn: 'Complaint Platform',
    description: 'Platform pengaduan digital yang memudahkan masyarakat menyampaikan laporan secara online dengan alur yang transparan dan terstruktur.',
    descriptionEn: 'A digital complaint platform that makes it easy for the public to submit reports online with a transparent and structured flow.',
    descriptionFull: 'Platform pengaduan digital yang memudahkan masyarakat menyampaikan laporan secara online dengan alur yang transparan dan terstruktur.',
    descriptionFullEn: 'A digital complaint platform that makes it easy for the public to submit reports online with a transparent and structured flow.',
    tags: ['Laravel', 'MySQL', 'Tailwind'],
    tagsEn: ['Laravel', 'MySQL', 'Tailwind'],
    image: '/img/pengaduan/WhatsApp_Image_2026-06-02_at_23.21.42.jpeg',
    year: '2025',
  },
  {
    id: 5,
    slug: 'aigency',
    title: 'AI Gency',
    titleEn: 'AI Gency',
    category: 'AI Platform',
    categoryEn: 'AI Platform',
    description: 'Platform AI all-in-one untuk otomasi pembuatan konten, caption, dan auto-posting ke media sosial.',
    descriptionEn: 'All-in-one AI platform for automated content creation, captions, and auto-posting to social media.',
    descriptionFull: `AI Gency merupakan sebuah platform inovasi digital berbasis Artificial Intelligence (AI) yang dikembangkan untuk membantu pelaku usaha, content creator, dan digital marketer dalam mengotomatisasi proses pembuatan hingga publikasi konten media sosial. Platform ini hadir sebagai solusi atas permasalahan umum dalam digital marketing, yaitu proses pembuatan konten yang masih dilakukan secara manual, memakan waktu, serta membutuhkan keterampilan desain dan copywriting. Dengan memanfaatkan teknologi AI, pengguna cukup mengunggah gambar atau video produk, kemudian sistem akan secara otomatis menghasilkan konten visual yang lebih menarik, caption yang relevan, serta menyediakan fitur penjadwalan dan auto-posting ke berbagai platform seperti Instagram, Facebook, dan Telegram dalam satu sistem terintegrasi.

Dari sisi teknologi, AI GencyBooster dibangun menggunakan arsitektur modern berbasis backend FastAPI dengan Python yang terhubung ke PostgreSQL sebagai database utama. Sistem ini juga mengintegrasikan berbagai layanan AI seperti Google Gemini AI untuk generate caption, Alibaba Qwen untuk pembuatan gambar, serta Magic Hour API untuk konversi gambar menjadi video. Selain itu, integrasi Cloudinary digunakan untuk manajemen media, serta Meta Graph API dan Telegram Bot API untuk proses publikasi otomatis ke media sosial. Pada sisi frontend, sistem dibangun menggunakan React 19 dengan TypeScript, Vite, Tailwind CSS, serta komponen UI modern seperti Shadcn UI dan Radix UI untuk menghasilkan tampilan yang responsif, interaktif, dan mudah digunakan.

Platform ini ditujukan untuk UMKM, content creator, digital marketer, serta pemilik brand yang membutuhkan solusi praktis dalam mengelola konten digital tanpa harus memiliki keahlian teknis yang mendalam. Keunggulan utama AI GencyBooster terletak pada konsep all-in-one system yang mengintegrasikan seluruh proses mulai dari pembuatan konten, editing, penulisan caption, hingga publikasi otomatis dalam satu platform.`,
    descriptionFullEn: `AI Gency is a digital innovation platform based on Artificial Intelligence (AI) developed to help business owners, content creators, and digital marketers automate the process of creating and publishing social media content. This platform comes as a solution to common problems in digital marketing, where content creation is still done manually, time-consuming, and requires design and copywriting skills. By utilizing AI technology, users simply upload product images or videos, then the system will automatically generate more attractive visual content, relevant captions, and provide scheduling and auto-posting features to various platforms such as Instagram, Facebook, and Telegram in one integrated system.

From a technological perspective, AI GencyBooster is built using a modern architecture based on FastAPI backend with Python connected to PostgreSQL as the main database. This system also integrates various AI services such as Google Gemini AI for caption generation, Alibaba Qwen for image generation, and Magic Hour API for image-to-video conversion. Additionally, Cloudinary integration is used for media management, as well as Meta Graph API and Telegram Bot API for automated publishing to social media. On the frontend side, the system is built using React 19 with TypeScript, Vite, Tailwind CSS, and modern UI components like Shadcn UI and Radix UI to produce a responsive, interactive, and user-friendly interface.

This platform is intended for MSMEs, content creators, digital marketers, and brand owners who need practical solutions in managing digital content without having in-depth technical expertise. The main advantage of AI GencyBooster lies in its all-in-one system concept that integrates the entire process from content creation, editing, caption writing, to automatic publishing in one platform.`,
    tags: ['FastAPI', 'React', 'AI'],
    tagsEn: ['FastAPI', 'React', 'AI'],
    image: '/img/aigency/WhatsApp_Image_2026-06-02_at_23.26.34.jpeg',
    year: '2025',
    liveUrl: 'https://aigency.example.com',
  },
  {
    id: 6,
    slug: 'qhome',
    title: 'QHome B2B Pro-Assistant',
    titleEn: 'QHome B2B Pro-Assistant',
    category: 'AI Platform',
    categoryEn: 'AI Platform',
    description: 'Platform pengadaan bahan bangunan cerdas berbasis Multi-Agent AI untuk kontraktor.',
    descriptionEn: 'Multi-Agent AI-based intelligent building material procurement platform for contractors.',
    descriptionFull: `QHome B2B Pro-Assistant adalah platform pengadaan bahan bangunan cerdas yang dirancang untuk mendigitalisasi dan mengotomatisasi alur kerja B2B bagi kontraktor. Proyek ini muncul sebagai solusi atas lambatnya proses pembuatan penawaran harga (RAB) yang selama ini memakan waktu berhari-hari dan rentan terhadap kesalahan manusia. Dengan mengimplementasikan arsitektur Multi-Agent yang modular, sistem ini mengintegrasikan Document Extractor untuk membaca dokumen fisik maupun digital, Visual Catalog Agent untuk pemetaan material berbasis AI, serta Pricing Optimizer yang menjamin akurasi finansial.

Inovasi utama terletak pada penerapan prinsip Zero-Hallucination Finance, di mana logika penalaran LLM dipisahkan dari mesin kalkulasi matematika deterministik. Seluruh perhitungan harga, diskon grosir, dan analisis biaya dilakukan sepenuhnya oleh fungsi Python murni yang terhubung langsung ke database PostgreSQL (Neon Tech) — memastikan output penawaran 100% akurat secara numerik.

Sistem ini dilengkapi Transparent Decision Logs yang memungkinkan pengguna memantau proses berpikir setiap agen secara real-time. Dengan Clean Architecture berbasis FastAPI, QHome berhasil mentransformasi proses pengadaan yang kompleks menjadi layanan digital yang efisien, transparan, dan mampu memberikan simulasi penghematan biaya secara proaktif bagi para kontraktor.`,
    descriptionFullEn: `QHome B2B Pro-Assistant is an intelligent building material procurement platform designed to digitize and automate B2B workflows for contractors. This project emerged as a solution to the slow process of creating cost estimates (RAB) that has taken days and is prone to human error. By implementing a modular Multi-Agent architecture, this system integrates Document Extractor to read physical and digital documents, Visual Catalog Agent for AI-based material mapping, and Pricing Optimizer that ensures financial accuracy.

The main innovation lies in the application of the Zero-Hallucination Finance principle, where LLM reasoning logic is separated from deterministic mathematical calculation engines. All price calculations, wholesale discounts, and cost analysis are performed entirely by pure Python functions directly connected to the PostgreSQL database (Neon Tech) — ensuring 100% numerically accurate offer output.

This system is equipped with Transparent Decision Logs that allow users to monitor the thinking process of each agent in real-time. With Clean Architecture based on FastAPI, QHome has successfully transformed complex procurement processes into efficient, transparent digital services capable of proactively providing cost-saving simulations for contractors.`,
    tags: ['FastAPI', 'PostgreSQL', 'AI'],
    tagsEn: ['FastAPI', 'PostgreSQL', 'AI'],
    image: '/img/qhome/WhatsApp_Image_2026-06-02_at_23.34.52.jpeg',
    year: '2025',
    liveUrl: 'https://qhome.example.com',
  },
]