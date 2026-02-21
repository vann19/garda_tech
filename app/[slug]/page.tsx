import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'

// Data yang sama dengan komponen CardSlug
const information = [
  {
    number: '01.',
    title: 'Website Development',
    slug: 'website-development',
    description: 'Kami mengembangkan website profesional dengan teknologi terkini untuk memenuhi kebutuhan bisnis Anda.',
    longDescription: 'Layanan website development kami mencakup pembuatan company profile, e-commerce, portal berita, dan berbagai jenis website lainnya. Kami menggunakan teknologi modern seperti React, Next.js, dan Node.js untuk menghasilkan website yang cepat, responsif, dan SEO friendly.',
    features: [
      'Responsive Design',
      'SEO Optimization',
      'Fast Performance',
      'User Friendly Interface',
      'Content Management System',
      'Security Implementation'
    ]
  },
  {
    number: '02.',
    title: 'UI/UX Design',
    slug: 'ui-ux-design',
    description: 'Menciptakan pengalaman pengguna yang intuitif dan antarmuka yang menarik untuk produk digital Anda.',
    longDescription: 'Tim desainer kami akan membantu menciptakan desain yang tidak hanya indah secara visual, tetapi juga fungsional dan mudah digunakan. Kami melakukan riset pengguna, pembuatan wireframe, prototyping, dan pengujian untuk memastikan desain yang dihasilkan sesuai dengan kebutuhan pengguna.',
    features: [
      'User Research',
      'Wireframing',
      'Interactive Prototyping',
      'Visual Design',
      'Usability Testing',
      'Design System'
    ]
  },
  {
    number: '03.',
    title: 'Custom Web System',
    slug: 'custom-web-system',
    description: 'Solusi sistem web kustom yang dirancang khusus sesuai dengan kebutuhan unik bisnis Anda.',
    longDescription: 'Kami mengembangkan sistem web kustom untuk mengotomatisasi proses bisnis Anda. Mulai dari sistem inventory, manajemen keuangan, CRM, hingga sistem internal perusahaan yang terintegrasi.',
    features: [
      'Custom Database Design',
      'Business Process Automation',
      'Integration with Third Party APIs',
      'Real-time Dashboard',
      'User Management System',
      'Advanced Reporting'
    ]
  },
  {
    number: '04.',
    title: 'Brand & Digital Assets',
    slug: 'brand-digital-assets',
    description: 'Membangun identitas merek yang kuat dan aset digital yang konsisten untuk bisnis Anda.',
    longDescription: 'Kami membantu membangun identitas merek yang kuat melalui desain logo, pemilihan warna, tipografi, dan aset visual lainnya. Kami juga menciptakan berbagai aset digital untuk kebutuhan marketing Anda.',
    features: [
      'Logo Design',
      'Brand Identity Guidelines',
      'Social Media Assets',
      'Marketing Collateral',
      'Business Cards',
      'Digital Presentation Templates'
    ]
  }
]

// Fungsi untuk mendapatkan data berdasarkan slug
const getInformationBySlug = (slug: string) => {
  return information.find(item => item.slug === slug)
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function InformationDetailPage({ params }: PageProps) {
  // Await params karena di Next.js 15 params adalah Promise
  const { slug } = await params
  const info = getInformationBySlug(slug)

  // Jika slug tidak ditemukan, tampilkan halaman 404
  if (!info) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950">
      {/* Background Blobs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-900 rounded-full blur-[132px] opacity-70" />
        <div className="absolute left-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300 rounded-full blur-[132px] opacity-60" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-900 rounded-full blur-[132px] opacity-70" />
        <div className="absolute right-20 top-1/2 -translate-y-1/2 w-64 h-64 bg-purple-300 rounded-full blur-[132px] opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 py-16">
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center text-white mb-8 hover:text-purple-300 transition-colors group"
        >
          <svg 
            className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Kembali
        </Link>

        {/* Main Card Detail */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 border-[3px] border-purple-300 rounded-[38px] backdrop-blur-md p-8 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <p className="text-purple-300 text-2xl font-bold font-['Syne'] mb-2">
                {info.number}
              </p>
              <h1 className="text-white text-4xl md:text-5xl font-bold font-['Syne'] mb-4">
                {info.title}
              </h1>
              <p className="text-white/80 text-lg">
                {info.description}
              </p>
            </div>

            {/* Long Description */}
            <div className="mb-8">
              <h2 className="text-white text-2xl font-bold font-['Syne'] mb-4">
                Tentang Layanan Ini
              </h2>
              <p className="text-white/70 leading-relaxed">
                {info.longDescription}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-white text-2xl font-bold font-['Syne'] mb-4">
                Fitur Unggulan
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {info.features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-2 text-white/70"
                  >
                    <svg 
                      className="w-5 h-5 text-purple-300 flex-shrink-0" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-10">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(167,139,250,0.5)]">
                Konsultasi Kebutuhan Anda
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}