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
    photo: '/img/joko.jpeg',
    location: 'Yogyakarta, Indonesia',
    bio: 'Fullstack developer dengan pengalaman 3 tahun dalam membangun aplikasi web dan mobile. Berpengalaman dalam teknologi modern seperti Next.js, React Native, dan Node.js, dengan fokus pada performa dan pengalaman pengguna yang optimal.',
    instagram: '#',
    linkedin: '#',
    experiences: [
      { company: 'Garda Tech', position: 'Frontend Developer', period: '2022 - Sekarang' },
      { company: 'Startup Lokal', position: 'Backend Developer', period: '2021 - 2022' },
    ],
    educations: [
      { institution: 'Universitas Teknologi Yogyakarta', major: 'Sistem Informasi', period: '2024 - 2026' },
    ],
  },
  {
    slug: 'rama-uiux',
    name: 'Rama',
    role: 'UI/UX Design',
    specialty: 'Product Design',
    company: 'Garda Tech',
    experience: '3 Tahun Pengalaman',
    photo: '/img/rama2.png',
    location: 'Bandung, Indonesia',
    bio: 'UI/UX Designer dengan passion dalam menciptakan pengalaman digital yang intuitif dan estetis. Berpengalaman dalam Figma, Design System, dan riset pengguna untuk menghadirkan produk yang berpusat pada manusia.',
    instagram: '#',
    linkedin: '#',
    experiences: [
      { company: 'Garda Tech', position: 'UI/UX Designer', period: '2022 - Sekarang' },
      { company: 'Agency Kreatif', position: 'Junior Designer', period: '2021 - 2022' },
    ],
    educations: [
      { institution: 'Institut Teknologi Bandung', major: 'Desain Komunikasi Visual', period: '2018 - 2022' },
    ],
  },
  {
    slug: 'rama-frontend',
    name: 'Rama',
    role: 'Frontend Development',
    specialty: 'Web Programming',
    company: 'Garda Tech',
    experience: '3 Tahun Pengalaman',
    photo: '/img/rama3.png',
    location: 'Yogyakarta, Indonesia',
    bio: 'Frontend developer yang berdedikasi dalam membangun antarmuka web yang responsif dan performan. Menguasai React, Next.js, dan Tailwind CSS untuk menghadirkan tampilan yang sesuai desain dengan kualitas tinggi.',
    instagram: '#',
    linkedin: '#',
    experiences: [
      { company: 'Garda Tech', position: 'Frontend Developer', period: '2022 - Sekarang' },
      { company: 'Freelance', position: 'Web Developer', period: '2020 - 2022' },
    ],
    educations: [
      { institution: 'Universitas Gadjah Mada', major: 'Ilmu Komputer', period: '2017 - 2021' },
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
