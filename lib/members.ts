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
    photo: '/img/dian.jpeg',
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
]
