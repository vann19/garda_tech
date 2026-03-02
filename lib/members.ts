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
    specialty: 'Web & Mobile',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    photo: '/img/member1.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Fullstack developer dengan pengalaman 3 tahun dalam membangun aplikasi web dan mobile. Berpengalaman dalam teknologi modern seperti Next.js, React Native, dan Node.js, dengan fokus pada performa dan pengalaman pengguna yang optimal.',
    instagram: '#',
    linkedin: '#',
    experiences: [
      { company: 'Garda Tech', position: 'Frontend Developer', period: '2025 - Sekarang' },
      { company: 'Startup Lokal', position: 'Backend Developer', period: '2023 - 2027' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', period: '2024 - 2026' },
    ],
  },
  {
    slug: 'Fansyah',
    name: 'Fansyah',
    role: 'Fullstack Developer',
    specialty: 'Back end Developer',
    company: 'Garda Tech',
    experience: '2 Tahun Pengalaman',
    photo: '/img/gg.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Fullstack developer dengan pengalaman 2 tahun dalam membangun aplikasi web dan mobile. Berpengalaman dalam teknologi modern seperti Next.js, React Native, dan Node.js, dengan fokus pada performa dan pengalaman pengguna yang optimal.',
    instagram: '#',
    linkedin: '#',
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
    photo: '/img/member3.jpeg',
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
    slug: 'tom',
    name: 'Tom',
    role: 'Backend Development',
    specialty: 'Web Programming',
    company: 'Garda Tech',
    experience: '4 Tahun Pengalaman',
    photo: '/img/tom.png',
    location: 'Surabaya, Indonesia',
    bio: 'Backend developer dengan 4 tahun pengalaman membangun sistem yang skalabel dan aman. Ahli dalam Node.js, PostgreSQL, dan arsitektur REST/GraphQL API yang mendukung aplikasi dengan trafik tinggi.',
    instagram: '#',
    linkedin: '#',
    experiences: [
      { company: 'Garda Tech', position: 'Backend Developer', period: '2021 - Sekarang' },
      { company: 'Tech Corp', position: 'Software Engineer', period: '2020 - 2021' },
    ],
    educations: [
      { institution: 'Institut Teknologi Sepuluh Nopember', major: 'Teknik Informatika', period: '2016 - 2020' },
    ],
  },
  {
    slug: 'jerry',
    name: 'Jerry',
    role: 'Backend Development',
    specialty: 'Web Programming',
    company: 'Garda Tech',
    experience: '4 Tahun Pengalaman',
    photo: '/img/tom.png',
    location: 'Surabaya, Indonesia',
    bio: 'Backend developer dengan 4 tahun pengalaman membangun sistem yang skalabel dan aman. Ahli dalam Node.js, PostgreSQL, dan arsitektur REST/GraphQL API yang mendukung aplikasi dengan trafik tinggi.',
    instagram: '#',
    linkedin: '#',
    experiences: [
      { company: 'Garda Tech', position: 'Backend Developer', period: '2021 - Sekarang' },
      { company: 'Tech Corp', position: 'Software Engineer', period: '2020 - 2021' },
    ],
    educations: [
      { institution: 'Institut Teknologi Sepuluh Nopember', major: 'Teknik Informatika', period: '2016 - 2020' },
    ],
  },
]
