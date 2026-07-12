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
  {
    id: 7,
    slug: 'daily-mood',
    title: 'Daily Mood',
    titleEn: 'Daily Mood',
    category: 'UI/UX Design',
    categoryEn: 'UI/UX Design',
    description: 'Aplikasi mobile mental health dengan mood tracking, konsultasi profesional, meditasi, komunitas, dan konten edukasi dalam satu platform.',
    descriptionEn: 'A mobile mental health app with mood tracking, professional consultation, meditation, community, and educational content in one platform.',
    descriptionFull: `Daily Mood adalah sebuah aplikasi mobile yang dirancang khusus untuk mendukung kesehatan mental pengguna secara menyeluruh. Proyek ini berfokus pada perancangan UI/UX yang mengintegrasikan berbagai fitur utama seperti mood tracking harian, akses konsultasi dengan profesional kesehatan mental, sesi meditasi terpandu, forum komunitas, serta konten edukasi seputar kesehatan jiwa — semua dalam satu platform yang intuitif dan mudah digunakan.

Pendekatan desain yang digunakan menempatkan pengalaman pengguna (user experience) sebagai prioritas utama. Setiap alur navigasi dirancang agar terasa natural dan tidak membebani pengguna, terutama bagi mereka yang sedang dalam kondisi rentan secara emosional. Palet warna yang lembut, tipografi yang ramah baca, serta ikon-ikon yang jelas dipilih secara seksama untuk menciptakan suasana yang menenangkan dan mendukung pemulihan.

Fitur mood tracking memungkinkan pengguna mencatat kondisi emosional mereka setiap hari melalui jurnal digital, yang kemudian divisualisasikan dalam bentuk kalender dan grafik perkembangan. Hal ini membantu pengguna maupun konselor memahami pola mood dari waktu ke waktu. Secara keseluruhan, Daily Mood hadir sebagai teman digital yang mendampingi perjalanan kesehatan mental pengguna dengan pendekatan yang hangat, personal, dan berbasis bukti.`,
    descriptionFullEn: `Daily Mood is a mobile application specifically designed to comprehensively support users' mental health. This project focuses on UI/UX design that integrates various key features such as daily mood tracking, access to professional mental health consultations, guided meditation sessions, community forums, and mental health educational content — all in one intuitive and easy-to-use platform.

The design approach places user experience as the top priority. Every navigation flow is designed to feel natural and non-burdensome for users, especially for those who are in an emotionally vulnerable state. Soft color palettes, readable typography, and clear icons are carefully chosen to create a calming atmosphere that supports recovery.

The mood tracking feature allows users to record their emotional state every day through a digital journal, which is then visualized in the form of a calendar and progress charts. This helps both users and counselors understand mood patterns over time. Overall, Daily Mood serves as a digital companion accompanying users' mental health journey with a warm, personal, and evidence-based approach.`,
    tags: ['Figma', 'UI/UX', 'Mobile'],
    tagsEn: ['Figma', 'UI/UX', 'Mobile'],
    image: '/img/moodhealty/Dashboard 1.png',
    year: '2025',
  },
  {
    id: 8,
    slug: 'mood-tracking',
    title: 'Mood Tracking',
    titleEn: 'Mood Tracking',
    category: 'UI/UX Design',
    categoryEn: 'UI/UX Design',
    description: 'Aplikasi mobile mood tracking yang membantu pengguna memantau kondisi emosional melalui jurnal harian, kalender mood, statistik emosi, dan meditasi.',
    descriptionEn: 'A mobile mood tracking app that helps users monitor their emotional state through daily journals, mood calendar, emotion statistics, and meditation.',
    descriptionFull: `Mood Tracking adalah aplikasi mobile yang dirancang untuk membantu pengguna memantau dan memahami kondisi emosional mereka secara rutin. Proyek ini berfokus pada perancangan UI/UX menggunakan Figma dengan mengutamakan pengalaman pengguna yang intuitif, konsisten, dan mudah digunakan.

Fitur utama yang dirancang meliputi pencatatan suasana hati harian, jurnal digital untuk mengekspresikan perasaan secara lebih mendalam, kalender mood untuk melihat pola emosi dari waktu ke waktu, serta statistik perkembangan emosi yang divisualisasikan secara jelas. Selain itu, aplikasi ini juga dilengkapi dengan fitur meditasi terpandu sebagai sarana relaksasi dan penenang pikiran.

Pendekatan desain yang diterapkan menempatkan kemudahan penggunaan sebagai prioritas utama. Setiap layar dirancang dengan alur yang natural, palet warna yang lembut, dan navigasi yang sederhana agar pengguna dapat menggunakan aplikasi tanpa hambatan, bahkan di saat kondisi emosional sedang tidak stabil. Mood Tracking hadir sebagai pendamping digital harian yang mendukung kesadaran diri dan kesehatan mental pengguna.`,
    descriptionFullEn: `Mood Tracking is a mobile application designed to help users monitor and understand their emotional state on a regular basis. This project focuses on UI/UX design using Figma, prioritizing an intuitive, consistent, and easy-to-use user experience.

The main features designed include daily mood recording, a digital journal for expressing feelings more deeply, a mood calendar to see emotional patterns over time, and clearly visualized emotion development statistics. In addition, the app also features guided meditation as a means of relaxation and calming the mind.

The design approach applied places ease of use as the top priority. Every screen is designed with a natural flow, soft color palette, and simple navigation so users can use the app without obstacles, even when their emotional state is unstable. Mood Tracking serves as a daily digital companion that supports self-awareness and users' mental health.`,
    tags: ['Figma', 'UI/UX', 'Mobile'],
    tagsEn: ['Figma', 'UI/UX', 'Mobile'],
    image: '/img/himatic/Home Page.png',
    year: '2025',
  },
  {
    id: 9,
    slug: 'momi',
    title: 'Momi',
    titleEn: 'Momi',
    category: 'UI/UX Design',
    categoryEn: 'UI/UX Design',
    description: 'Aplikasi edukasi anak berbasis gamifikasi yang menggabungkan pembelajaran interaktif, mini games, pengenalan budaya dan emosi, serta sistem reward.',
    descriptionEn: 'A gamification-based children\'s education app combining interactive learning, mini games, cultural and emotional recognition, and a reward system.',
    descriptionFull: `Momi adalah aplikasi edukasi anak yang dirancang dengan pendekatan gamifikasi untuk membuat pembelajaran sosial dan emosi menjadi menyenangkan dan menarik. Proyek ini berfokus pada perancangan UI/UX yang menggabungkan berbagai elemen interaktif seperti mini games, pengenalan budaya lokal, pembelajaran emosi, sesi relaksasi, serta sistem reward yang memotivasi anak untuk terus belajar.

Desain antarmuka Momi dibuat khusus agar ramah anak — menggunakan warna-warna cerah dan hangat, ilustrasi karakter yang menggemaskan, tipografi yang besar dan mudah dibaca, serta navigasi yang sederhana sehingga anak-anak dapat menggunakannya secara mandiri tanpa kebingungan. Setiap elemen visual dirancang untuk memancing rasa ingin tahu dan semangat eksplorasi.

Fitur utama mencakup peta petualangan interaktif sebagai jalur pembelajaran, mini games edukatif untuk melatih kecerdasan emosional dan sosial, modul pengenalan budaya nusantara, serta mekanisme reward berupa bintang dan hadiah virtual yang mendorong konsistensi belajar. Momi hadir sebagai teman belajar digital yang menyenangkan, mendukung tumbuh kembang anak secara holistik melalui pendekatan bermain sambil belajar.`,
    descriptionFullEn: `Momi is a children's educational application designed with a gamification approach to make social and emotional learning fun and engaging. This project focuses on UI/UX design that combines various interactive elements such as mini games, local cultural recognition, emotion learning, relaxation sessions, and a reward system that motivates children to keep learning.

Momi's interface design is specially made to be child-friendly — using bright and warm colors, adorable character illustrations, large and easy-to-read typography, and simple navigation so children can use it independently without confusion. Every visual element is designed to spark curiosity and the spirit of exploration.

Key features include an interactive adventure map as a learning path, educational mini games to train emotional and social intelligence, a Nusantara cultural recognition module, and a reward mechanism of stars and virtual prizes that encourages learning consistency. Momi serves as a fun digital learning companion, supporting children's holistic development through a play-while-learning approach.`,
    tags: ['Figma', 'UI/UX', 'Mobile'],
    tagsEn: ['Figma', 'UI/UX', 'Mobile'],
    image: '/img/momi/UI landing page.jpg',
    year: '2025',
  },
  {
    id: 10,
    slug: 'hikely',
    title: 'Hikely',
    titleEn: 'Hikely',
    category: 'Mobile Platform',
    categoryEn: 'Mobile Platform',
    description: 'Aplikasi mobile pendakian yang mengintegrasikan penyewaan perlengkapan outdoor, informasi gunung, dan pemesanan dalam satu platform.',
    descriptionEn: 'A hiking mobile app integrating outdoor gear rental, mountain information, and booking in one platform.',
    descriptionFull: `Hikely adalah aplikasi mobile yang dirancang untuk memenuhi kebutuhan para pendaki gunung secara lengkap dalam satu platform terintegrasi. Proyek ini berfokus pada perancangan UI/UX yang menggabungkan fitur penyewaan perlengkapan outdoor, informasi gunung, dan proses pemesanan dengan antarmuka yang intuitif, responsif, dan berorientasi pada kemudahan pengguna.

Desain mencakup katalog perlengkapan outdoor yang terstruktur, halaman detail produk dengan informasi lengkap, alur checkout yang sederhana, integrasi pembayaran digital, serta fitur pelacakan status pesanan secara real-time. Setiap layar dirancang dengan mempertimbangkan konteks penggunaan di lapangan, di mana pengguna membutuhkan akses informasi yang cepat dan navigasi yang tidak membingungkan.

Pendekatan desain mengutamakan efisiensi alur pengguna dari pencarian perlengkapan hingga konfirmasi pemesanan. Visual yang digunakan menggambarkan nuansa alam dan petualangan, menciptakan pengalaman yang relevan dan menginspirasi bagi komunitas pendaki. Hikely hadir sebagai solusi digital terpadu yang memudahkan persiapan pendakian dari mana saja.`,
    descriptionFullEn: `Hikely is a mobile application designed to comprehensively meet the needs of mountain hikers in one integrated platform. This project focuses on UI/UX design that combines outdoor gear rental features, mountain information, and booking processes with an intuitive, responsive, and user-friendly interface.

The design covers a structured outdoor gear catalog, product detail pages with complete information, a simple checkout flow, digital payment integration, and real-time order status tracking. Every screen is designed with field usage context in mind, where users need quick information access and non-confusing navigation.

The design approach prioritizes user flow efficiency from gear search to booking confirmation. The visuals used depict the nuances of nature and adventure, creating a relevant and inspiring experience for the hiking community. Hikely serves as an integrated digital solution that makes hiking preparation easier from anywhere.`,
    tags: ['Figma', 'Mobile', 'E-Commerce'],
    tagsEn: ['Figma', 'Mobile', 'E-Commerce'],
    image: '/img/hikely/beranda 2.png',
    year: '2025',
  },
  {
    id: 11,
    slug: 'e-kelurahan',
    title: 'E-Kelurahan Web Desa Tulang Bawang',
    titleEn: 'E-Kelurahan Tulang Bawang Village Website',
    category: 'Website Desa',
    categoryEn: 'Village Website',
    description: 'Sistem informasi desa berbasis web untuk memudahkan masyarakat mengakses informasi desa secara digital.',
    descriptionEn: 'A web-based village information system to help residents easily access village information digitally.',
    descriptionFull: `Website Desa Tulang Bawang merupakan sistem informasi desa berbasis web yang dirancang untuk memudahkan masyarakat dalam mengakses informasi desa secara digital. Website ini menyediakan informasi profil desa, berita, pengumuman, galeri, serta layanan informasi yang dapat diakses secara online sehingga meningkatkan transparansi dan pelayanan kepada masyarakat.`,
    descriptionFullEn: `Tulang Bawang Village Website is a web-based village information system designed to make it easy for residents to access village information digitally. This website provides village profile information, news, announcements, a gallery, and information services that can be accessed online, thereby increasing transparency and service to the community.`,
    tags: ['Web', 'Sistem Informasi', 'Desa'],
    tagsEn: ['Web', 'Information System', 'Village'],
    image: '/img/kelurahan/e-1.jpeg',
    year: '2025',
  },
  {
    id: 12,
    slug: 'findash',
    title: 'Findash Aplikasi Financial',
    titleEn: 'Findash Financial App',
    category: 'Financial Dashboard',
    categoryEn: 'Financial Dashboard',
    description: 'Aplikasi financial dashboard berbasis web untuk memantau kondisi keuangan melalui pencatatan transaksi dan analisis pengeluaran.',
    descriptionEn: 'A web-based financial dashboard app to monitor financial health through transaction recording and expense analysis.',
    descriptionFull: `Findash adalah aplikasi financial dashboard berbasis web yang dirancang untuk membantu pengguna memantau kondisi keuangan melalui pencatatan transaksi, analisis pengeluaran, serta penyajian data dalam bentuk grafik dan laporan yang mudah dipahami.`,
    descriptionFullEn: `Findash is a web-based financial dashboard application designed to help users monitor their financial condition through transaction recording, expense analysis, and data presentation in the form of easy-to-understand charts and reports.`,
    tags: ['Web', 'Dashboard', 'Finance'],
    tagsEn: ['Web', 'Dashboard', 'Finance'],
    image: '/img/findash/1.jpeg',
    year: '2025',
  },
]