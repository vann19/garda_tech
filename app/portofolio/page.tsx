import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Footer from '@/components/Footer';

const projects = [
  {
    id: 1,
    slug: "ramadhan-kareem",
    title: "Desain UI/UX Tema Ramadhan",
    description: "Desain ini adalah desain untuk menyambut bulan suci ramadhan. Dimana pada desain ini saya ingin memberikan kesan yang nyaman dan menenangkan bagi para pengguna.",
    image: "/img/rama2.png",
  },
  {
    id: 2,
    slug: "project-2",
    title: "Ramadhan Kareem",
    description: "Selamat menunaikan ibadah puasa blaba danadanajsnduyashindajhgfvvgb fryguhjhgfdresw.",
    image: null,
  },
  {
    id: 3,
    slug: "project-3",
    title: "Ramadhan Kareem",
    description: "Selamat menunaikan ibadah puasa blaba danadanajsnduyashindajhgfvvgb fryguhjhgfdresw.",
    image: null,
  },
  {
    id: 4,
    slug: "project-4",
    title: "Ramadhan Kareem",
    description: "Selamat menunaikan ibadah puasa blaba danadanajsnduyashindajhgfvvgb fryguhjhgfdresw.",
    image: null,
  },
]

{/* === Komponen ProjectImage: gambar + tombol arrow di pojok kanan bawah === */}
function ProjectImage({ image, title, slug }: { image: string | null; title: string; slug: string }) {
  return (
    <div className="relative w-full rounded-lg overflow-hidden group">
      {/* Image */}
      {image ? (
        <Image
          src={image}
          alt={title}
          width={715}
          height={492}
          className="w-full h-auto rounded-lg"
        />
      ) : (
        <div className="w-full aspect-[715/492] bg-violet-500 rounded-lg" />
      )}

      {/* Arrow button — link ke detail page */}
      <Link href={`/portofolio/${slug}`} className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 lg:bottom-6 lg:right-6 w-12 h-12 sm:w-14 sm:h-14 lg:w-20 lg:h-20 bg-zinc-300 rounded-full flex items-center justify-center hover:bg-white transition-colors z-10 cursor-pointer">
        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-indigo-900" strokeWidth={3} />
      </Link>
    </div>
  )
}

const PortfolioPage = () => {
  return (
    <div className="relative w-full min-h-screen bg-black overflow-hidden">

      {/* === Background blur === */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-[30%] w-[130%] aspect-square bg-violet-900/30 rounded-full blur-[120px] sm:blur-[188px]" />

      {/* === CONTENT === */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-24">

        {/* Pill Badge */}
        <div className="flex justify-center">
          <div className="bg-violet-800/60 rounded-[57px] shadow-[inset_-1px_-1px_47.8px_rgba(208,186,232,0.8)] border-4 border-violet-500/95 px-10 py-5 flex items-center justify-center">
            <span className="text-white text-2xl font-bold font-['Syne']">
              Portofolio
            </span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-10 sm:mt-14 lg:mt-16 text-center text-white text-3xl sm:text-5xl lg:text-6xl font-bold font-['Syne']">
          Proof in Every Project.
        </h1>

        {/* Projects */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-col gap-12 sm:gap-16 lg:gap-20 max-w-6xl mx-auto">

          {projects.map((project, index) => {
            const isEven = index % 2 === 0
            return (
              <div
                key={project.id}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 sm:gap-8 lg:gap-12 items-center`}
              >
                {/* Image + Arrow */}
                <div className="w-full md:w-1/2">
                  <ProjectImage image={project.image} title={project.title} slug={project.slug} />
                </div>

                {/* Text */}
                <div className={`w-full md:w-1/2 flex flex-col ${isEven ? 'md:items-start' : 'md:items-end md:text-right'}`}>
                  <h2 className="text-violet-800 text-2xl sm:text-3xl lg:text-5xl font-bold font-['Syne']">
                    {project.title}
                  </h2>
                  <p className="mt-3 sm:mt-4 text-white text-sm sm:text-lg lg:text-xl font-medium font-['Inter'] leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            )
          })}

        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PortfolioPage