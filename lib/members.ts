export type Experience = {
  company: string
  position: string
  period: string
}

export type Education = {
  institution: string
  major: string
  period: string
}

export type Member = {
  slug: string
  name: string
  role: string
  specialty: string
  company: string
  experience: string
  photo: string
  location: string
  bio: string
  instagram?: string
  linkedin?: string
  experiences: Experience[]
  educations: Education[]
}

export const members: Member[] = [
  {
    slug: 'imron-bagas-sadewo',
    name: 'Imron Bagas Sadewo',
    role: 'Frontend Developer',
    specialty: 'Frontend Developer',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    photo: '/img/member1.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah seorang frontend developer yang fokus pada pengembangan web dan mobile. Saya memiliki pengalaman dalam teknologi modern seperti Next.js, React Native, dan Node.js, dengan fokus pada performa dan pengalaman pengguna yang optimal.',
    instagram: 'https://www.instagram.com/imron.bagas/',
    linkedin: 'https://www.linkedin.com/in/imron-bagas-sajiwo-37755a3b6',
    experiences: [
      { company: 'Garda Tech', position: 'Frontend Developer', period: '2025 - Sekarang' },
      { company: 'Freelance', position: 'Frontend Developer', period: '2023 - Sekarang' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', period: '2024 - 2026' },
    ],
  },
  {
    slug: 'Fansyah',
    name: 'La Ode Muhammad Nurfansyah',
    role: 'Fullstack Developer',
    specialty: 'Back end Developer',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    photo: '/img/fan2.jpg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Fullstack developer dengan pengalaman 2 tahun dalam membangun aplikasi web dan mobile. Berpengalaman dalam teknologi modern seperti Next.js, React Native, dan Node.js, dengan fokus pada performa dan pengalaman pengguna yang optimal.',
    linkedin: 'https://www.linkedin.com/in/fansyalaode',
    experiences: [
      { company: 'Garda Tech', position: 'Back end Developer', period: '2025 - Sekarang' },
      { company: 'Freelance', position: 'Fullstack Developer', period: '2023 - 2025' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta ', major: 'Teknik Informatika', period: '2022 - 2026' },
    ],
  },
  {
    slug: 'Fadly-maulana',
    name: 'Fadly Maulana',
    role: 'Project Manager',
    specialty: 'Project Management',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    photo: '/img/fadliy2.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah Founder sekaligus Project Manager di Garda Tech yang berkomitmen membangun dan mengelola solusi bisnis berbasis teknologi secara terstruktur, terukur, dan berkelanjutan untuk membantu perusahaan bertumbuh melalui sistem yang efisien, scalable, dan berdampak nyata.',
    instagram: 'https://www.instagram.com/faaddlyy_',
    linkedin: 'https://www.linkedin.com/in/fadly-maulana',
    experiences: [
      { company: 'Garda Tech', position: 'Project Manager', period: '2025 - Sekarang' },
      { company: 'PKM 2026 Universitas Teknologi Yogyakarta', position: 'Project Manager', period: '2026 - 2026' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', period: '2023 - 2027' },
    ],
  },
  {
    slug: 'Khansa-Septia-Aulia-Budiyanto',
    name: 'Khansa Septia Aulia Budiyanto',
    role: 'Ui/Ux Designer',
    specialty: 'Ui/Ux Design',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    photo: '/img/khansa.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah seorang UI/UX Designer yang fokus merancang pengalaman digital yang mudah digunakan dan nyaman bagi pengguna. Melalui perpaduan antara desain visual yang jelas dan alur interaksi yang terstruktur, saya berusaha menghadirkan produk digital yang tidak hanya menarik, tetapi juga fungsional. Bagi saya, desain bukan sekadar tampilan, tetapi bagaimana setiap elemen dapat membantu pengguna mencapai tujuannya dengan lebih mudah dan efisien.',
    instagram: ' https://www.instagram.com/khansasab/?utm_source=ig_web_button_share_sheet',
    experiences: [
      { company: 'Garda Tech', position: 'Ui/Ux Designer', period: '2025 - Sekarang' },
      { company: 'Freelance', position: 'Ui/Ux Designer', period: '2023 - 2025' },
      { company: 'HMSI Universitas Teknologi Yogyakarta', position: 'Desain Visual', period: '2023 - 2025' },

    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', period: '2023 - 2027' },
    ],
  },
  {
    slug: 'Dian-Nugraheni',
    name: 'Dian Nugraheni',
    role: 'Sosial Media Specialist',
    specialty: 'Sosial Media',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    photo: '/img/dian2.png',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah seorang sosial media spesialis yang fokus membantu brand menceritakan kisah mereka dengan cara yang lebih menarik dan dekat dengan audiens. Lewat kombinasi konten visual yang apik dan tulisan yang pas, saya berusaha membangun hubungan yang nyata antara brand dan pengikutnya. Tugas saya bukan hanya sekadar mengunggah konten, tapi memastikan setiap postingan bisa membangun komunitas yang aktif dan membuat identitas brand semakin dikenal di dunia digital.',
    instagram: 'https://www.instagram.com/diannngrhn?igsh=MXZqM3htazN6Nmd1Nw==',
    experiences: [
      { company: 'Garda Tech', position: 'Sosial Media Specialist', period: '2025 - Sekarang' },
      { company: 'Freelance', position: 'Sosial Media Specialist', period: '2023 - 2025' },
      { company: 'Divisi Infokom HMSI', position: 'Sosial Media Specialist', period: '2023 - 2025' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', period: '2023 - 2027' },
    ],
  },
  {
    slug: 'Dimas-Nur-Huda',
    name: 'Dimas Nur Huda',
    role: 'Marketing & Client Acquisition',
    specialty: 'Spesialis Analisis & Marketing',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    photo: '/img/dimas.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah seorang Spesialis Analisis dan Marketing yang berpengalaman dalam menganalisis pasar serta membangun strategi akuisisi klien yang efektif. Dengan latar belakang di analisis Bursa Efek dan pengalaman magang sebagai Sistem Analis, saya memiliki kemampuan unik untuk menggabungkan pendekatan analitik berbasis data dengan kreativitas dalam pemasaran digital. Fokus saya adalah membantu brand menceritakan kisah mereka dengan cara yang relevan dan menarik, membangun hubungan nyata antara brand dan audiens, serta memastikan setiap strategi konten berkontribusi langsung pada pertumbuhan bisnis.',
    instagram: 'https://www.instagram.com/dimaseeq__?igsh=ZnI5M2xlZGViOGlz',
    experiences: [
      { company: 'Garda Tech', position: 'Marketing & Client Acquisition', period: '2025 - Sekarang' },
      { company: 'Bursa Efek Indonesia', position: 'Analis Bursa Efek', period: '2024 - 2025' },
      { company: 'Magang', position: 'System Analyst', period: '2023 - 2024' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', period: '2023 - 2027' },
    ],
  },
  {
  slug: 'Yovella-Jeny-Lianasari',
  name: 'Yovella Jeny Lianasari',
  role: 'Finance & Accounting',
  specialty: 'Finance',
  company: 'Garda Tech',
  experience: '2+ Tahun Pengalaman Organisasi',
  photo: '/img/yovella.webp',
  location: 'Yogyakarta, Indonesia',
  bio: 'Saya memiliki minat yang besar dalam bidang keuangan dan manajemen organisasi. Berpengalaman dalam mengelola administrasi keuangan, penyusunan anggaran, serta memastikan pengelolaan dana berjalan secara efektif dan transparan. Saya senang bekerja secara detail, terorganisir, dan mampu berkolaborasi dengan tim untuk mendukung pencapaian tujuan organisasi maupun perusahaan.',
  instagram: 'https://www.instagram.com/yovellajeny_?igsh=Z3NyNWhtOHM2dHE5',
  linkedin: '',
  experiences: [
    {
      company: 'HMSI',
      position: 'Bendahara Umum',
      period: '2024 - Sekarang',
    },
    {
      company: 'PKM 2025',
      position: 'Chief Finance Officer',
      period: '2025',
    },
  ],
  educations: [
    { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', period: '2023 - 2027' },
  ],
},
{
  slug: 'Choiruddin-Effendi',
  name: 'Choiruddin Effendi',
  role: 'Business Development',
  specialty: 'Business Development',
  company: 'Garda Tech',
  experience: '2+ Tahun Pengalaman',
  photo: '/img/choiruddin.jpeg',
  location: 'Yogyakarta, Indonesia',
  bio: 'Saya merupakan individu yang berorientasi pada pertumbuhan bisnis, memiliki kemampuan komunikasi yang baik, serta senang membangun relasi profesional. Saya tertarik pada strategi pengembangan bisnis, analisis peluang pasar, dan pengelolaan kemitraan yang dapat memberikan nilai tambah bagi perusahaan. Dengan kemampuan adaptasi yang baik, saya selalu berupaya menemukan solusi kreatif untuk mendukung pencapaian target bisnis.',
  instagram: 'https://www.instagram.com/bnguden',
  linkedin: '',
  experiences: [
    {
      company: 'Garda Tech',
      position: 'Business Development',
      period: '2025 - Sekarang',
    },
    {
      company: 'Organisasi & Proyek Mahasiswa',
      position: 'Business Development dan Partnership',
      period: '2023 - 2025',
    },
  ],
  educations: [
    { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', period: '2023 - 2027' },
  ],
},
{
  slug: 'Alfan-Maulana-Irsyad',
  name: 'Alfan Maulana Irsyad',
  role: 'Social Media Specialist',
  specialty: 'Social Media',
  company: 'Garda Tech',
  experience: '2+ Tahun Pengalaman',
  photo: '/img/alfan.png',
  location: 'Yogyakarta, Indonesia',
  bio: 'Saya adalah individu yang bertanggung jawab, mampu memahami pembelajaran dengan cepat, serta memiliki kemampuan adaptasi yang baik dalam berbagai situasi. Saya memiliki ketertarikan pada bidang media sosial dan konten digital, serta senang mempelajari hal-hal baru untuk meningkatkan kemampuan diri dan memberikan hasil kerja yang optimal.',
  instagram: 'https://www.instagram.com/mangehem.000/',
  linkedin: '',
  experiences: [
    {
      company: 'Freelance',
      position: 'Video Editor',
      period: '2023 - Sekarang',
    },
    {
      company: 'Bengkel AC',
      position: 'Mekanik AC Mobil dan Ruangan',
      period: '2022 - 2024',
    },
  ],
  educations: [
    { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', period: '2023 - 2027' },
  ],
},
  
]
