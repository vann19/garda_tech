import React from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { CheckCircle2, ArrowLeft, ArrowRight, Globe, Palette, Settings, Smartphone, Clock, Users, Zap, Shield } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import Footer from '@/components/Footer'

const information = [
  {
    number: '01',
    icon: <Globe className="w-8 h-8" />,
    title: 'Website Development',
    tagline: 'Bangun Kehadiran Digital yang Kuat',
    slug: 'website-development',
    description: 'Kami mengembangkan website profesional dengan teknologi terkini untuk memenuhi kebutuhan bisnis Anda — dari company profile hingga platform e-commerce berperforma tinggi.',
    longDescription: 'Layanan Website Development kami mencakup pembuatan company profile, e-commerce, portal berita, landing page promosi, dan berbagai jenis website lainnya. Kami menggunakan teknologi modern seperti React, Next.js, dan Node.js untuk menghasilkan website yang cepat, responsif, dan SEO-friendly.\n\nSetiap website yang kami bangun dirancang dengan mempertimbangkan konversi bisnis — bukan hanya tampilan yang indah, tapi juga pengalaman yang mendorong pengunjung untuk menjadi pelanggan Anda.',
    features: [
      'Responsive Design (Mobile & Desktop)',
      'SEO Optimization',
      'Performa Loading Cepat',
      'Antarmuka Ramah Pengguna',
      'Content Management System (CMS)',
      'Keamanan & SSL',
      'Integrasi Google Analytics',
      'Dukungan Multi-bahasa',
    ],
    process: ['Konsultasi & Brief', 'Wireframe & Desain', 'Development', 'Testing & Launch'],
    stats: [{ label: 'Proyek Selesai', value: '30+' }, { label: 'Waktu Pengerjaan', value: '2-4 Minggu' }, { label: 'Kepuasan Klien', value: '99%' }],
    techStack: ['Next.js', 'React', 'Node.js', 'Laravel', 'MySQL', 'Tailwind CSS'],
  },
  {
    number: '02',
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX Design',
    tagline: 'Desain yang Berbicara kepada Pengguna',
    slug: 'ui-ux-design',
    description: 'Menciptakan pengalaman pengguna yang intuitif dan antarmuka yang menarik — karena desain yang baik adalah investasi bisnis, bukan sekadar estetika.',
    longDescription: 'Tim desainer kami akan membantu menciptakan desain yang tidak hanya indah secara visual, tetapi juga fungsional dan mudah digunakan. Kami melakukan riset pengguna, pembuatan wireframe, prototyping, dan pengujian untuk memastikan desain yang dihasilkan sesuai dengan kebutuhan pengguna.\n\nDengan pendekatan design thinking yang berpusat pada pengguna, kami memastikan setiap elemen UI dirancang untuk meningkatkan konversi dan kepuasan pengguna akhir produk Anda.',
    features: [
      'User Research & Persona',
      'Wireframing & Sitemap',
      'Interactive Prototyping',
      'Visual & Brand Design',
      'Usability Testing',
      'Design System & Component Library',
      'Handoff ke Developer',
      'Revisi hingga Disetujui',
    ],
    process: ['Riset Pengguna', 'Wireframe', 'Visual Design', 'Prototyping'],
    stats: [{ label: 'Proyek Selesai', value: '25+' }, { label: 'Waktu Pengerjaan', value: '1-3 Minggu' }, { label: 'Kepuasan Klien', value: '100%' }],
    techStack: ['Figma', 'FigJam', 'Adobe XD', 'Notion', 'Zeplin'],
  },
  {
    number: '03',
    icon: <Settings className="w-8 h-8" />,
    title: 'Custom Web System',
    tagline: 'Otomasi Proses Bisnis Anda',
    slug: 'custom-web-system',
    description: 'Solusi sistem web kustom yang dirancang khusus sesuai kebutuhan unik bisnis Anda — dari sistem inventory hingga ERP terintegrasi.',
    longDescription: 'Kami mengembangkan sistem web kustom untuk mengotomatisasi proses bisnis Anda. Mulai dari sistem inventory, manajemen keuangan, CRM, sistem absensi, hingga platform internal perusahaan yang terintegrasi penuh.\n\nSistem yang kami bangun dirancang untuk tumbuh bersama bisnis Anda. Arsitektur yang modular memungkinkan penambahan fitur baru tanpa mengganggu operasional yang sudah berjalan.',
    features: [
      'Desain Database Kustom',
      'Otomasi Proses Bisnis',
      'Integrasi Third-Party API',
      'Dashboard Real-time',
      'Manajemen Pengguna & Role',
      'Laporan & Analitik Lanjutan',
      'Sistem Notifikasi',
      'Backup & Recovery',
    ],
    process: ['Analisis Kebutuhan', 'Arsitektur Sistem', 'Development', 'Training & Deploy'],
    stats: [{ label: 'Sistem Dibangun', value: '15+' }, { label: 'Waktu Pengerjaan', value: '4-12 Minggu' }, { label: 'Uptime Sistem', value: '99.9%' }],
    techStack: ['Next.js', 'Laravel', 'PostgreSQL', 'Redis', 'Docker', 'REST API'],
  },
  {
    number: '04',
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Brand & Digital Assets',
    tagline: 'Identitas Brand yang Tak Terlupakan',
    slug: 'brand-digital-assets',
    description: 'Membangun identitas merek yang kuat dan konsisten — dari logo yang bercerita hingga aset digital yang siap pakai di semua platform.',
    longDescription: 'Kami membantu membangun identitas merek yang kuat melalui desain logo, pemilihan warna, tipografi, dan aset visual lainnya yang mencerminkan nilai dan kepribadian bisnis Anda.\n\nKami juga menciptakan berbagai aset digital untuk kebutuhan marketing — dari template media sosial, presentasi bisnis, hingga materi promosi cetak yang konsisten dan profesional.',
    features: [
      'Logo Design & Variasi',
      'Brand Identity Guidelines',
      'Template Media Sosial',
      'Marketing Collateral',
      'Kartu Nama & Stationery',
      'Template Presentasi Digital',
      'Aset Iklan Digital',
      'Brand Refresh / Rebrand',
    ],
    process: ['Brand Discovery', 'Konsep & Eksplorasi', 'Finalisasi Desain', 'Deliverable Aset'],
    stats: [{ label: 'Brand Dibangun', value: '40+' }, { label: 'Waktu Pengerjaan', value: '1-2 Minggu' }, { label: 'Revisi Gratis', value: '3x' }],
    techStack: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'Canva Pro'],
  },
]

const getInformationBySlug = (slug: string) => {
  return information.find(item => item.slug === slug)
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return information.map((item) => ({ slug: item.slug }))
}

export default async function InformationDetailPage({ params }: PageProps) {
  const { slug } = await params
  const info = getInformationBySlug(slug)

  if (!info) notFound()

  const currentIndex = information.findIndex(i => i.slug === slug)
  const prevService = currentIndex > 0 ? information[currentIndex - 1] : null
  const nextService = currentIndex < information.length - 1 ? information[currentIndex + 1] : null

  return (
    <main className="min-h-screen bg-white">
      {/* Subtle top aura */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#7C3AED]/5 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#7C3AED] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Beranda
        </Link>

        {/* === HERO HEADER === */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16 items-start">

          {/* Left: Title block */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-semibold mb-5">
              <span className="font-mono">{info.number}.</span>
              Layanan Kami
            </div>
            <h1 className="font-['Inter'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tighter leading-[1.1] mb-4">
              {info.title}
            </h1>
            <p className="text-[#7C3AED] font-semibold text-lg mb-4">{info.tagline}</p>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl">
              {info.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7C3AED] text-white font-bold text-sm px-6 py-3.5 rounded-2xl hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-[#7C3AED]/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                Konsultasi Gratis
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/price"
                className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-700 font-semibold text-sm px-6 py-3.5 rounded-2xl hover:border-[#7C3AED]/40 hover:text-[#7C3AED] hover:-translate-y-0.5 transition-all duration-300"
              >
                Lihat Harga
              </Link>
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="w-full lg:w-72 shrink-0 grid grid-cols-3 lg:grid-cols-1 gap-3">
            {info.stats.map((stat, i) => (
              <Card key={i} className="border-[#7C3AED]/15 hover:border-[#7C3AED]/30 transition-colors py-4">
                <CardContent className="px-5 text-center lg:text-left">
                  <div className="text-2xl font-extrabold text-[#7C3AED]">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-0.5">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* === MAIN CONTENT GRID === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Long description + Features */}
          <div className="lg:col-span-2 flex flex-col gap-8">

            {/* About section */}
            <Card className="border-gray-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-900 font-['Inter'] font-bold text-xl">
                  Tentang Layanan Ini
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-500 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {info.longDescription}
              </CardContent>
            </Card>

            {/* Features Grid */}
            <Card className="border-gray-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-900 font-['Inter'] font-bold text-xl">
                  Yang Anda Dapatkan
                </CardTitle>
                <CardDescription>Fitur dan deliverable lengkap dari layanan ini</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {info.features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-[#7C3AED]/4 border border-[#7C3AED]/10 hover:border-[#7C3AED]/25 hover:bg-[#7C3AED]/8 transition-colors">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Process steps */}
            <Card className="border-gray-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-900 font-['Inter'] font-bold text-xl">
                  Alur Pengerjaan
                </CardTitle>
                <CardDescription>Proses transparan dari awal hingga selesai</CardDescription>
              </CardHeader>
              <CardContent>
                {/* Mobile: vertical list sejajar | Desktop: horizontal row */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {info.process.map((step, index) => (
                    <div key={index} className="flex-1 flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                      {/* Row: nomor + connector (desktop) + label sejajar */}
                      <div className="flex items-center gap-2 sm:w-full shrink-0">
                        <div className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        {index < info.process.length - 1 && (
                          <div className="hidden sm:block flex-1 h-[2px] bg-[#7C3AED]/20 rounded-full" />
                        )}
                      </div>
                      <span className="text-xs font-semibold text-gray-700 leading-tight">{step}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

          </div>

          {/* Right Sidebar */}
          <div className="flex flex-col gap-5">

            {/* Tech Stack */}
            <Card className="border-[#7C3AED]/15 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-900 font-['Inter'] font-bold text-base flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#7C3AED]" />
                  Teknologi yang Digunakan
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {info.techStack.map((tech) => (
                    <span key={tech} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#7C3AED]/8 text-[#7C3AED] border border-[#7C3AED]/15">
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Why choose us */}
            <Card className="border-[#7C3AED]/15 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-900 font-['Inter'] font-bold text-base flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#7C3AED]" />
                  Mengapa Garda Tech?
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {[
                  { icon: <Clock className="w-4 h-4 text-[#7C3AED]" />, text: 'Pengerjaan tepat waktu sesuai deadline' },
                  { icon: <Users className="w-4 h-4 text-[#7C3AED]" />, text: 'Tim berpengalaman & komunikatif' },
                  { icon: <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />, text: 'Proses transparan & laporan berkala' },
                  { icon: <Shield className="w-4 h-4 text-[#7C3AED]" />, text: 'Garansi & dukungan pasca peluncuran' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <div className="shrink-0 mt-0.5">{item.icon}</div>
                    <span className="text-sm text-gray-600">{item.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-[#7C3AED] border-0 text-white shadow-xl shadow-[#7C3AED]/20">
              <CardContent className="p-6">
                <h3 className="font-['Inter'] font-bold text-lg mb-2">Mulai Proyek Anda</h3>
                <p className="text-white/75 text-sm mb-5 leading-relaxed">
                  Konsultasi gratis untuk memahami kebutuhan dan anggaran Anda.
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-white text-[#7C3AED] font-bold text-sm py-3 rounded-xl hover:bg-white/90 transition-colors duration-200"
                >
                  Hubungi Kami Sekarang →
                </Link>
              </CardContent>
            </Card>

          </div>
        </div>

        {/* === Navigation between services === */}
        <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-between">
          {prevService ? (
            <Link href={`/${prevService.slug}`} className="group flex items-center gap-3 p-4 rounded-2xl border border-gray-100 hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/3 transition-all duration-300 flex-1 sm:max-w-xs">
              <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-[#7C3AED] group-hover:-translate-x-1 transition-all" />
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Layanan Sebelumnya</div>
                <div className="text-sm font-semibold text-gray-700 group-hover:text-[#7C3AED] transition-colors">{prevService.title}</div>
              </div>
            </Link>
          ) : <div />}
          {nextService && (
            <Link href={`/${nextService.slug}`} className="group flex items-center justify-end gap-3 p-4 rounded-2xl border border-gray-100 hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/3 transition-all duration-300 flex-1 sm:max-w-xs text-right ml-auto">
              <div>
                <div className="text-xs text-gray-400 mb-0.5">Layanan Berikutnya</div>
                <div className="text-sm font-semibold text-gray-700 group-hover:text-[#7C3AED] transition-colors">{nextService.title}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-[#7C3AED] group-hover:translate-x-1 transition-all" />
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </main>
  )
}