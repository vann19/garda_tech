import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/Footer';

// Data proyek — nanti bisa dipindah ke file terpisah atau CMS
const projectsData: Record<string, {
  title: string
  titleHighlight: string
  description: string
  images: { src: string; width: number; height: number }[]
}> = {
  'ramadhan-kareem': {
    title: 'Desain UI/UX',
    titleHighlight: 'Ramadhan Kareem',
    description: 'Desain ini adalah desain untuk menyambut bulan suci ramadhan. Dimana pada desain ini saya ingin memberikan kesan yang nyaman dan menenangkan bagi para pengguna.',
    images: [
      { src: '/img/rama1.png', width: 442, height: 553 },
      { src: '/img/rama2.png', width: 544, height: 680 },
      { src: '/img/rama3.png', width: 445, height: 556 },
    ],
  },
  'project-2': {
    title: 'Ramadhan',
    titleHighlight: 'Kareem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    images: [
      { src: '/img/project1.jpg', width: 442, height: 553 },
      { src: '/img/project1.jpg', width: 544, height: 680 },
      { src: '/img/project1.jpg', width: 445, height: 556 },
    ],
  },
  'project-3': {
    title: 'Ramadhan',
    titleHighlight: 'Kareem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: [
      { src: '/img/project1.jpg', width: 442, height: 553 },
      { src: '/img/project1.jpg', width: 544, height: 680 },
      { src: '/img/project1.jpg', width: 445, height: 556 },
    ],
  },
  'project-4': {
    title: 'Ramadhan',
    titleHighlight: 'Kareem',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    images: [
      { src: '/img/project1.jpg', width: 442, height: 553 },
      { src: '/img/project1.jpg', width: 544, height: 680 },
      { src: '/img/project1.jpg', width: 445, height: 556 },
    ],
  },
}

export default async function PortfolioDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = projectsData[slug]

  if (!project) {
    return (
      <div className="w-full min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold font-['Syne']">Proyek tidak ditemukan</h1>
          <Link href="/portofolio" className="text-violet-500 mt-4 inline-block hover:underline">
            ← Kembali ke Portofolio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="relative w-full min-h-screen bg-indigo-900 overflow-hidden">

      {/* === Background blur === */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[40%] w-[140%] aspect-square bg-black rounded-full blur-[120px] sm:blur-[188px]" />

      {/* === CONTENT === */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">

        {/* Pill Badge */}
        <div className="flex justify-center">
          <div className="bg-violet-800/60 rounded-[57px] shadow-[inset_-1px_-1px_47.8px_rgba(208,186,232,0.8)] border-4 border-violet-500/95 px-10 py-5 flex items-center justify-center">
            <span className="text-white text-xl sm:text-2xl font-bold font-['Syne']">
              Portofolio
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-10 sm:mt-14 lg:mt-16 text-center text-white text-3xl sm:text-5xl lg:text-6xl font-bold font-['Syne']">
          Proof in Every Project.
        </h1>

        {/* === Image Gallery === */}
        <div className="mt-12 sm:mt-16 lg:mt-20 max-w-6xl mx-auto">

          {/* Mobile: stack vertikal */}
          <div className="flex flex-col sm:hidden gap-4">
            {project.images.map((img, i) => (
              <div key={i} className="relative w-full aspect-[4/5] rounded-lg overflow-hidden">
                <Image src={img.src} alt={`${project.title} ${i + 1}`} fill className="object-cover" />
              </div>
            ))}
          </div>

          {/* Tablet & Desktop: 3 kolom dengan gambar tengah lebih besar */}
          <div className="hidden sm:flex gap-4 lg:gap-6 items-end justify-center">
            {/* Gambar kiri — lebih kecil */}
            <div className="relative w-[28%] aspect-[442/553] rounded-lg overflow-hidden">
              <Image src={project.images[0].src} alt={`${project.title} 1`} fill className="object-cover" />
            </div>

            {/* Gambar tengah — lebih besar */}
            <div className="relative w-[38%] aspect-[544/680] rounded-lg overflow-hidden">
              <Image src={project.images[1].src} alt={`${project.title} 2`} fill className="object-cover" />
            </div>

            {/* Gambar kanan — lebih kecil */}
            <div className="relative w-[28%] aspect-[445/556] rounded-lg overflow-hidden">
              <Image src={project.images[2].src} alt={`${project.title} 3`} fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* === Title + Description === */}
        <div className="mt-12 sm:mt-16 lg:mt-20 max-w-5xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-['Syne']">
            <span className="text-violet-800">{project.title} </span>
            <span className="text-white">{project.titleHighlight}</span>
          </h2>

          <p className="mt-6 sm:mt-8 text-white text-sm sm:text-lg lg:text-xl font-medium font-['Inter'] leading-relaxed sm:leading-9">
            {project.description}
          </p>
        </div>

        {/* Back Link */}
        {/* <div className="mt-12 text-center">
          <Link href="/portofolio" className="text-violet-400 hover:text-violet-300 font-['Syne'] font-bold text-lg transition-colors">
            ← Kembali ke Portofolio
          </Link>
        </div> */}
      </div>
      <Footer />
    </div>
  )
}
