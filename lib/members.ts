export type Experience = {
  company: string
  position: string
  positionEn: string
  period: string
  periodEn: string
}

export type Education = {
  institution: string
  major: string
  majorEn: string
  period: string
  periodEn: string
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
      { company: 'Garda Tech', position: 'Frontend Developer', positionEn: 'Frontend Developer', period: '2025 - Sekarang', periodEn: '2025 - Present' },
      { company: 'Freelance', position: 'Frontend Developer', positionEn: 'Frontend Developer', period: '2023 - Sekarang', periodEn: '2023 - Present' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2024 - Sekarang', periodEn: '2024 - Present' },
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
      { company: 'Garda Tech', position: 'Fullstack Developer', positionEn: 'Fullstack Developer', period: '2025 - Sekarang', periodEn: '2025 - Present' },
      { company: 'Freelance', position: 'Fullstack Developer', positionEn: 'Fullstack Developer', period: '2023 - 2025', periodEn: '2023 - 2025' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Teknik Informatika', majorEn: 'Informatics Engineering', period: '2022 - Sekarang', periodEn: '2022 - Present' },
    ],
  },
  {
    slug: 'Fadly-maulana',
    name: 'Fadly Maulana',
    role: 'Business Development',
    roleEn: 'Business Development',
    specialty: 'Business Development',
    specialtyEn: 'Business Development',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    experienceEn: '2 Years Experience',
    photo: '/img/fadliy2.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya adalah Founder sekaligus Business Development di Garda Tech yang berkomitmen membangun perusahaan dengan menghadirkan solusi bisnis berbasis teknologi yang inovatif, terstruktur, dan berkelanjutan. Dalam peran tersebut, saya berfokus pada pengembangan strategi bisnis, identifikasi peluang pasar, pengelolaan kemitraan strategis, serta pengembangan solusi yang mampu menciptakan nilai tambah bagi klien dan mendorong pertumbuhan perusahaan secara berkelanjutan.',
    bioEn: 'I am the Founder and Business Development at Garda Tech, committed to building the company by delivering innovative, structured, and sustainable technology-based business solutions. In this role, I focus on developing business strategies, identifying market opportunities, managing strategic partnerships, and developing solutions that can create added value for clients and drive sustainable company growth.',
    instagram: 'https://www.instagram.com/faaddlyy_',
    linkedin: 'https://www.linkedin.com/in/fadly-maulana',
    experiences: [
      { company: 'Garda Tech', position: 'Business Development', positionEn: 'Business Development', period: '2026 - Sekarang', periodEn: '2026 - Present' },
      { company: 'PKM 2026 Universitas Teknologi Yogyakarta', position: 'Project Manager', positionEn: 'Project Manager', period: '2025 - 2026', periodEn: '2025 - 2026' },
      { company: 'Garda Tech', position: 'Project Manager', positionEn: 'Project Manager', period: '2025 - 2026', periodEn: '2025 - 2026' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - Sekarang', periodEn: '2023 - Present' },
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
      { company: 'Garda Tech', position: 'Ui/Ux Designer', positionEn: 'UI/UX Designer', period: '2025 - Sekarang', periodEn: '2025 - Present' },
      { company: 'Freelance', position: 'Ui/Ux Designer', positionEn: 'UI/UX Designer', period: '2023 - 2025', periodEn: '2023 - 2025' },
      { company: 'HMSI Universitas Teknologi Yogyakarta', position: 'Desain Visual', positionEn: 'Visual Design', period: '2023 - 2025', periodEn: '2023 - 2025' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - Sekarang', periodEn: '2023 - Present' },
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
      { company: 'Garda Tech', position: 'Marketing & Client Acquisition', positionEn: 'Marketing & Client Acquisition', period: '2025 - Sekarang', periodEn: '2025 - Present' },
      { company: 'Bursa Efek Indonesia', position: 'Analis Bursa Efek', positionEn: 'Stock Exchange Analyst', period: '2024 - 2025', periodEn: '2024 - 2025' },
      { company: 'Magang', position: 'System Analyst', positionEn: 'System Analyst', period: '2023 - 2024', periodEn: '2023 - 2024' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - Sekarang', periodEn: '2023 - Present' },
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
        periodEn: '2024 - Present',
      },
      {
        company: 'PKM 2025',
        position: 'Chief Finance Officer',
        positionEn: 'Chief Finance Officer',
        period: '2025',
        periodEn: '2025',
      },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - Sekarang', periodEn: '2023 - Present' },
    ],
  },
  {
    slug: 'Choiruddin-Effendi',
    name: 'Choiruddin Effendi',
    role: 'Project Manager',
    roleEn: 'Project Manager',
    specialty: 'Project Management',
    specialtyEn: 'Project Management',
    company: 'Garda Tech',
    experience: '2+ Tahun Pengalaman',
    experienceEn: '2+ Years Experience',
    photo: '/img/choiruddin.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Saya merupakan individu yang berorientasi pada pencapaian target, memiliki kemampuan komunikasi yang baik, serta mampu memimpin dan mengoordinasikan tim secara efektif. Saya memiliki ketertarikan pada perencanaan, koordinasi, dan pengelolaan proyek untuk memastikan setiap tahapan berjalan sesuai target, anggaran, dan jadwal yang telah ditetapkan. Sebagai CEO, saya juga menjalankan peran sebagai Project Manager, dengan bertanggung jawab mengarahkan pelaksanaan proyek, mengelola sumber daya, mengidentifikasi risiko, serta memastikan setiap proyek selesai tepat waktu dan mencapai tujuan yang telah ditetapkan. Dengan kemampuan analisis, pemecahan masalah, dan adaptasi yang baik, saya selalu berupaya menghadirkan solusi yang efektif untuk mendukung keberhasilan proyek dan pertumbuhan perusahaan.',
    bioEn: 'I am a target-oriented individual with good communication skills, capable of leading and coordinating teams effectively. I have an interest in planning, coordination, and project management to ensure every stage runs according to the target, budget, and schedule that has been set. As CEO, I also serve as Project Manager, responsible for directing project execution, managing resources, identifying risks, and ensuring every project is completed on time and achieves its goals. With good analytical, problem-solving, and adaptability skills, I always strive to provide effective solutions to support project success and company growth.',
    instagram: 'https://www.instagram.com/bnguden',
    linkedin: '',
    experiences: [
      {
        company: 'Garda Tech',
        position: 'Business Development',
        positionEn: 'Business Development',
        period: '2025 - 2026',
        periodEn: '2025 - 2026',
      },
      {
        company: 'Organisasi & Proyek Mahasiswa',
        position: 'Project Manager',
        positionEn: 'Project Manager',
        period: '2023 - 2025',
        periodEn: '2023 - 2025',
      },
      {
        company: 'Garda Tech',
        position: 'Project Manager',
        positionEn: 'Project Manager',
        period: '2025 - Sekarang',
        periodEn: '2025 - Present',
      },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2023 - Sekarang', periodEn: '2023 - Present' },
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
        periodEn: '2023 - Present',
      },
      {
        company: 'Bengkel AC',
        position: 'Mekanik AC Mobil dan Ruangan',
        positionEn: 'Car and Room AC Mechanic',
        period: '2022 - 2024',
        periodEn: '2022 - 2024',
      },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', majorEn: 'Information Systems', period: '2024 - Sekarang', periodEn: '2024 - Present' },
    ],
  },
]