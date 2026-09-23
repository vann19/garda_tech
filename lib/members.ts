export type Experience = {
  company: string
  position: string
  positionEn: string
  period: string
}

export type Education = {
  institution: string
  major: string
  majorEn: string
  period: string
}

export type Member = {
  slug: string
  name: string
  role: string
  roleEn: string
  specialty: string
  specialtyEn: string
  company: string
  experience: string
  experienceEn: string
  photo: string
  location: string
  bio: string
  bioEn: string
  instagram?: string
  linkedin?: string
  experiences: Experience[]
  educations: Education[]
}

export const members: Member[] = [
  {
    slug: 'imron-bagas-sadewo',
    name: 'Imron Bagas Sajiwo',
    role: 'Frontend Developer',
    roleEn: 'Frontend Developer',
    specialty: 'Frontend Developer',
    specialtyEn: 'Frontend Developer',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    experienceEn: '2 Years Experience',
    photo: '/img/member1.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah seorang frontend developer yang fokus pada pengembangan web dan mobile. Saya memiliki pengalaman dalam teknologi modern seperti Next.js, React Native, dan Node.js, dengan fokus pada performa dan pengalaman pengguna yang optimal.',
    bioEn: 'I am a frontend developer focused on web and mobile development. I have experience in modern technologies such as Next.js, React Native, and Node.js, with a focus on performance and optimal user experience.',
    instagram: 'https://www.instagram.com/imron.bagas/',
    linkedin: 'https://www.linkedin.com/in/imron-bagas-sajiwo-37755a3b6',
    experiences: [
      { company: 'Garda Tech', position: 'Frontend Developer', positionEn: 'Frontend Developer', period: '2025 - Sekarang' },
      { company: 'Freelance', position: 'Frontend Developer', positionEn: 'Frontend Developer', period: '2023 - Sekarang' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2024 - 2026' },
    ],
  },
  {
    slug: 'Fansyah',
    name: 'La Ode Muhammad Nurfansyah',
    role: 'Fullstack Developer',
    roleEn: 'Fullstack Developer',
    specialty: 'Fullstack Developer',
    specialtyEn: 'Fullstack Developer',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    experienceEn: '2 Years Experience',
    photo: '/img/fan2.jpg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Fullstack developer dengan pengalaman 2 tahun dalam membangun aplikasi web dan mobile. Berpengalaman dalam teknologi modern seperti Next.js, React Native, dan Node.js, dengan fokus pada performa dan pengalaman pengguna yang optimal.',
    bioEn: 'Fullstack developer with 2 years of experience in building web and mobile applications. Experienced in modern technologies such as Next.js, React Native, and Node.js, with a focus on performance and optimal user experience.',
    linkedin: 'https://www.linkedin.com/in/fansyalaode',
    experiences: [
      { company: 'Garda Tech', position: 'Back end Developer', positionEn: 'Backend Developer', period: '2025 - Sekarang' },
      { company: 'Freelance', position: 'Fullstack Developer', positionEn: 'Fullstack Developer', period: '2023 - 2025' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Teknik Informatika', majorEn: 'Informatics Engineering', period: '2022 - 2026' },
    ],
  },
  {
    slug: 'Fadly-maulana',
    name: 'Fadly Maulana',
    role: 'Project Manager',
    roleEn: 'Project Manager',
    specialty: 'Project Management',
    specialtyEn: 'Project Management',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    experienceEn: '2 Years Experience',
    photo: '/img/fadliy2.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah Founder sekaligus Project Manager di Garda Tech yang berkomitmen membangun dan mengelola solusi bisnis berbasis teknologi secara terstruktur, terukur, dan berkelanjutan untuk membantu perusahaan bertumbuh melalui sistem yang efisien, scalable, dan berdampak nyata.',
    bioEn: 'I am the Founder and Project Manager at Garda Tech, committed to building and managing technology-based business solutions in a structured, measurable, and sustainable way to help companies grow through efficient, scalable, and impactful systems.',
    instagram: 'https://www.instagram.com/faaddlyy_',
    linkedin: 'https://www.linkedin.com/in/fadly-maulana',
    experiences: [
      { company: 'Garda Tech', position: 'Project Manager', positionEn: 'Project Manager', period: '2025 - Sekarang' },
      { company: 'PKM 2026 Universitas Teknologi Yogyakarta', position: 'Project Manager', positionEn: 'Project Manager', period: '2026 - 2026' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - 2027' },
    ],
  },
  {
    slug: 'Khansa-Septia-Aulia-Budiyanto',
    name: 'Khansa Septia Aulia Budiyanto',
    role: 'Ui/Ux Designer',
    roleEn: 'UI/UX Designer',
    specialty: 'Ui/Ux Design',
    specialtyEn: 'UI/UX Design',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    experienceEn: '2 Years Experience',
    photo: '/img/khansa.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah seorang UI/UX Designer yang fokus merancang pengalaman digital yang mudah digunakan dan nyaman bagi pengguna. Melalui perpaduan antara desain visual yang jelas dan alur interaksi yang terstruktur, saya berusaha menghadirkan produk digital yang tidak hanya menarik, tetapi juga fungsional. Bagi saya, desain bukan sekadar tampilan, tetapi bagaimana setiap elemen dapat membantu pengguna mencapai tujuannya dengan lebih mudah dan efisien.',
    bioEn: 'I am a UI/UX Designer focused on designing digital experiences that are easy to use and comfortable for users. Through a combination of clear visual design and structured interaction flows, I strive to deliver digital products that are not only attractive but also functional. For me, design is not just about appearance, but how every element can help users achieve their goals more easily and efficiently.',
    instagram: 'https://www.instagram.com/khansasab/?utm_source=ig_web_button_share_sheet',
    experiences: [
      { company: 'Garda Tech', position: 'Ui/Ux Designer', positionEn: 'UI/UX Designer', period: '2025 - Sekarang' },
      { company: 'Freelance', position: 'Ui/Ux Designer', positionEn: 'UI/UX Designer', period: '2023 - 2025' },
      { company: 'HMSI Universitas Teknologi Yogyakarta', position: 'Desain Visual', positionEn: 'Visual Design', period: '2023 - 2025' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - 2027' },
    ],
  },
  {
    slug: 'Dian-Nugraheni',
    name: 'Dian Nugraheni',
    role: 'Sosial Media Specialist',
    roleEn: 'Social Media Specialist',
    specialty: 'Sosial Media',
    specialtyEn: 'Social Media',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    experienceEn: '2 Years Experience',
    photo: '/img/dian2.png',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah seorang sosial media spesialis yang fokus membantu brand menceritakan kisah mereka dengan cara yang lebih menarik dan dekat dengan audiens. Lewat kombinasi konten visual yang apik dan tulisan yang pas, saya berusaha membangun hubungan yang nyata antara brand dan pengikutnya. Tugas saya bukan hanya sekadar mengunggah konten, tapi memastikan setiap postingan bisa membangun komunitas yang aktif dan membuat identitas brand semakin dikenal di dunia digital.',
    bioEn: 'I am a social media specialist focused on helping brands tell their stories in a more engaging and relatable way. Through a combination of beautiful visual content and the right words, I strive to build genuine relationships between brands and their followers. My job is not just about posting content, but ensuring every post can build an active community and make brand identity more recognized in the digital world.',
    instagram: 'https://www.instagram.com/diannngrhn?igsh=MXZqM3htazN6Nmd1Nw==',
    experiences: [
      { company: 'Garda Tech', position: 'Sosial Media Specialist', positionEn: 'Social Media Specialist', period: '2025 - Sekarang' },
      { company: 'Freelance', position: 'Sosial Media Specialist', positionEn: 'Social Media Specialist', period: '2023 - 2025' },
      { company: 'Divisi Infokom HMSI', position: 'Sosial Media Specialist', positionEn: 'Social Media Specialist', period: '2023 - 2025' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - 2027' },
    ],
  },
  {
    slug: 'Dimas-Nur-Huda',
    name: 'Dimas Nur Huda',
    role: 'Marketing & Client Acquisition',
    roleEn: 'Marketing & Client Acquisition',
    specialty: 'Spesialis Analisis & Marketing',
    specialtyEn: 'Analysis & Marketing Specialist',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    experienceEn: '2 Years Experience',
    photo: '/img/dimas.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah seorang Spesialis Analisis dan Marketing yang berpengalaman dalam menganalisis pasar serta membangun strategi akuisisi klien yang efektif. Dengan latar belakang di analisis Bursa Efek dan pengalaman magang sebagai Sistem Analis, saya memiliki kemampuan unik untuk menggabungkan pendekatan analitik berbasis data dengan kreativitas dalam pemasaran digital. Fokus saya adalah membantu brand menceritakan kisah mereka dengan cara yang relevan dan menarik, membangun hubungan nyata antara brand dan audiens, serta memastikan setiap strategi konten berkontribusi langsung pada pertumbuhan bisnis.',
    bioEn: 'I am an Analysis and Marketing Specialist experienced in market analysis and building effective client acquisition strategies. With a background in Stock Exchange analysis and internship experience as a System Analyst, I have the unique ability to combine data-driven analytical approaches with creativity in digital marketing. My focus is helping brands tell their stories in relevant and engaging ways, building genuine relationships between brands and audiences, and ensuring every content strategy directly contributes to business growth.',
    instagram: 'https://www.instagram.com/dimaseeq__?igsh=ZnI5M2xlZGViOGlz',
    experiences: [
      { company: 'Garda Tech', position: 'Marketing & Client Acquisition', positionEn: 'Marketing & Client Acquisition', period: '2025 - Sekarang' },
      { company: 'Bursa Efek Indonesia', position: 'Analis Bursa Efek', positionEn: 'Stock Exchange Analyst', period: '2024 - 2025' },
      { company: 'Magang', position: 'System Analyst', positionEn: 'System Analyst', period: '2023 - 2024' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - 2027' },
    ],
  },
  {
    slug: 'Yovella-Jeny-Lianasari',
    name: 'Yovella Jeny Lianasari',
    role: 'Finance & Accounting',
    roleEn: 'Finance & Accounting',
    specialty: 'Finance',
    specialtyEn: 'Finance',
    company: 'Garda Tech',
    experience: '2+ Tahun Pengalaman Organisasi',
    experienceEn: '2+ Years Organization Experience',
    photo: '/img/yovella.webp',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya memiliki minat yang besar dalam bidang keuangan dan manajemen organisasi. Berpengalaman dalam mengelola administrasi keuangan, penyusunan anggaran, serta memastikan pengelolaan dana berjalan secara efektif dan transparan. Saya senang bekerja secara detail, terorganisir, dan mampu berkolaborasi dengan tim untuk mendukung pencapaian tujuan organisasi maupun perusahaan.',
    bioEn: 'I have a great interest in finance and organizational management. Experienced in managing financial administration, budgeting, and ensuring effective and transparent fund management. I enjoy working in a detailed and organized manner and am able to collaborate with teams to support the achievement of organizational and company goals.',
    instagram: 'https://www.instagram.com/yovellajeny_?igsh=Z3NyNWhtOHM2dHE5',
    linkedin: '',
    experiences: [
      {
        company: 'HMSI',
        position: 'Bendahara Umum',
        positionEn: 'General Treasurer',
        period: '2024 - Sekarang',
      },
      {
        company: 'PKM 2025',
        position: 'Chief Finance Officer',
        positionEn: 'Chief Finance Officer',
        period: '2025',
      },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - 2027' },
    ],
  },
  {
    slug: 'Choiruddin-Effendi',
    name: 'Choiruddin Effendi',
    role: 'Business Development',
    roleEn: 'Business Development',
    specialty: 'Business Development',
    specialtyEn: 'Business Development',
    company: 'Garda Tech',
    experience: '2+ Tahun Pengalaman',
    experienceEn: '2+ Years Experience',
    photo: '/img/choiruddin.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya merupakan individu yang berorientasi pada pertumbuhan bisnis, memiliki kemampuan komunikasi yang baik, serta senang membangun relasi profesional. Saya tertarik pada strategi pengembangan bisnis, analisis peluang pasar, dan pengelolaan kemitraan yang dapat memberikan nilai tambah bagi perusahaan. Dengan kemampuan adaptasi yang baik, saya selalu berupaya menemukan solusi kreatif untuk mendukung pencapaian target bisnis.',
    bioEn: 'I am a business-oriented individual with good communication skills and a passion for building professional relationships. I am interested in business development strategies, market opportunity analysis, and partnership management that can add value to the company. With good adaptability, I always strive to find creative solutions to support the achievement of business targets.',
    instagram: 'https://www.instagram.com/bnguden',
    linkedin: '',
    experiences: [
      {
        company: 'Garda Tech',
        position: 'Business Development',
        positionEn: 'Business Development',
        period: '2025 - Sekarang',
      },
      {
        company: 'Organisasi & Proyek Mahasiswa',
        position: 'Business Development dan Partnership',
        positionEn: 'Business Development and Partnership',
        period: '2023 - 2025',
      },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - 2027' },
    ],
  },
  {
    slug: 'Alfan-Maulana-Irsyad',
    name: 'Alfan Maulana Irsyad',
    role: 'Social Media Specialist',
    roleEn: 'Social Media Specialist',
    specialty: 'Social Media',
    specialtyEn: 'Social Media',
    company: 'Garda Tech',
    experience: '2+ Tahun Pengalaman',
    experienceEn: '2+ Years Experience',
    photo: '/img/alfan.png',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah individu yang bertanggung jawab, mampu memahami pembelajaran dengan cepat, serta memiliki kemampuan adaptasi yang baik dalam berbagai situasi. Saya memiliki ketertarikan pada bidang media sosial dan konten digital, serta senang mempelajari hal-hal baru untuk meningkatkan kemampuan diri dan memberikan hasil kerja yang optimal.',
    bioEn: 'I am a responsible individual who can quickly grasp new learnings and has good adaptability in various situations. I have an interest in social media and digital content, and enjoy learning new things to improve my skills and deliver optimal results.',
    instagram: 'https://www.instagram.com/mangehem.000/',
    linkedin: '',
    experiences: [
      {
        company: 'Freelance',
        position: 'Video Editor',
        positionEn: 'Video Editor',
        period: '2023 - Sekarang',
      },
      {
        company: 'Bengkel AC',
        position: 'Mekanik AC Mobil dan Ruangan',
        positionEn: 'Car and Room AC Mechanic',
        period: '2022 - 2024',
      },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - 2027' },
    ],
  },
]