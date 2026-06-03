import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, ExternalLink } from 'lucide-react'
import Footer from '@/components/Footer'
import { projects } from '@/lib/projects'

export const metadata = {
  title: 'Portofolio | GardaTech',
  description: 'Kumpulan proyek digital yang telah kami kerjakan — website, aplikasi mobile, sistem kustom, dan desain UI/UX.',
}

export default function PortfolioPage() {
  return (
    <div className="relative w-full min-h-screen bg-white overflow-hidden">

      {/* ── Background aura ── */}
      <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-[15%] w-[70%] aspect-square bg-violet-400/8 rounded-full blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 w-[400px] h-[400px] bg-indigo-100/40 rounded-full blur-[100px]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20">

        {/* ── Header ── */}
        <div className="text-center mb-14 sm:mb-20">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 border border-violet-200 text-violet-700 text-xs font-semibold tracking-wider uppercase mb-5">
            ✦ Portofolio Kami
          </span>
          <h1 className="font-['Syne'] font-bold text-gray-900 text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Proof in Every{' '}
            <span className="shimmer-text">Project.</span>
          </h1>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Setiap proyek adalah bukti komitmen kami terhadap kualitas, performa, dan kepuasan klien.
          </p>
        </div>

        {/* ── Project Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg hover:border-violet-200 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Thumbnail */}
              <div className="relative w-full aspect-[4/3] bg-gray-50 overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
                    <span className="text-violet-400 text-4xl font-bold font-['Syne']">GT</span>
                  </div>
                )}

                {/* Category badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-violet-700 border border-violet-100 shadow-sm">
                  {project.category}
                </span>

                {/* Year badge */}
                {project.year && (
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-[10px] font-semibold text-gray-500 border border-gray-100 shadow-sm">
                    {project.year}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-4 gap-3">
                <h2 className="font-['Syne'] font-bold text-gray-900 text-sm sm:text-base leading-snug line-clamp-2">
                  {project.title}
                </h2>

                <p className="text-gray-500 text-xs leading-relaxed line-clamp-2 flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex gap-2 pt-1">
                  {/* Detail button */}
                  <Link
                    href={`/portofolio/${project.slug}`}
                    className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl border border-gray-200 text-xs font-semibold text-gray-700 hover:border-violet-300 hover:text-violet-700 hover:bg-violet-50 transition-all duration-200"
                  >
                    Lihat Detail
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  {/* Live URL button — hanya muncul jika ada */}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-9 h-9 rounded-xl border border-violet-200 text-violet-600 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all duration-200"
                      title="Lihat Live"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA bottom ── */}
        <div className="mt-20 text-center">
          <p className="text-gray-500 text-sm mb-4">Punya proyek yang ingin dikerjakan bersama kami?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-sm font-semibold shadow-lg shadow-violet-200 hover:shadow-violet-300/50 hover:-translate-y-0.5 transition-all duration-300"
          >
            Hubungi Kami
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  )
}