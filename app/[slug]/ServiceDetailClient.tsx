'use client'

import React from 'react'
import Link from 'next/link'
import { CheckCircle2, ArrowLeft, ArrowRight, Clock, Users, Zap, Shield } from 'lucide-react'
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import Footer from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

export interface ServiceContent {
  number: string
  title: string
  slug: string
  icon: React.ReactNode
  id: {
    tagline: string
    description: string
    longDescription: string
    features: string[]
    process: string[]
    stats: { label: string; value: string }[]
  }
  en: {
    tagline: string
    description: string
    longDescription: string
    features: string[]
    process: string[]
    stats: { label: string; value: string }[]
  }
  techStack: string[]
}

interface Props {
  info: ServiceContent
  prevService: { slug: string; title: string } | null
  nextService: { slug: string; title: string } | null
}

export default function ServiceDetailClient({ info, prevService, nextService }: Props) {
  const { lang } = useLanguage()
  const t = info[lang]

  const ui = {
    id: {
      back: 'Kembali ke Beranda',
      badge: 'Layanan Kami',
      consultBtn: 'Konsultasi Gratis',
      priceBtn: 'Lihat Harga',
      aboutTitle: 'Tentang Layanan Ini',
      featuresTitle: 'Yang Anda Dapatkan',
      featuresDesc: 'Fitur dan deliverable lengkap dari layanan ini',
      processTitle: 'Alur Pengerjaan',
      processDesc: 'Proses transparan dari awal hingga selesai',
      techTitle: 'Teknologi yang Digunakan',
      whyTitle: 'Mengapa Garda Tech?',
      whyPoints: [
        'Pengerjaan tepat waktu sesuai deadline',
        'Tim berpengalaman & komunikatif',
        'Proses transparan & laporan berkala',
        'Garansi & dukungan pasca peluncuran',
      ],
      ctaTitle: 'Mulai Proyek Anda',
      ctaDesc: 'Konsultasi gratis untuk memahami kebutuhan dan anggaran Anda.',
      ctaBtn: 'Hubungi Kami Sekarang →',
      prevLabel: 'Layanan Sebelumnya',
      nextLabel: 'Layanan Berikutnya',
    },
    en: {
      back: 'Back to Home',
      badge: 'Our Services',
      consultBtn: 'Free Consultation',
      priceBtn: 'View Pricing',
      aboutTitle: 'About This Service',
      featuresTitle: 'What You Get',
      featuresDesc: 'Complete features and deliverables for this service',
      processTitle: 'Our Workflow',
      processDesc: 'Transparent process from start to finish',
      techTitle: 'Technologies Used',
      whyTitle: 'Why Garda Tech?',
      whyPoints: [
        'On-time delivery according to deadline',
        'Experienced & communicative team',
        'Transparent process & regular reports',
        'Warranty & post-launch support',
      ],
      ctaTitle: 'Start Your Project',
      ctaDesc: 'Free consultation to understand your needs and budget.',
      ctaBtn: 'Contact Us Now →',
      prevLabel: 'Previous Service',
      nextLabel: 'Next Service',
    },
  }[lang]

  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* Subtle top aura */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] bg-[#7C3AED]/5 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-28 pb-28 lg:pb-20">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#7C3AED] transition-colors mb-10 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          {ui.back}
        </Link>

        {/* === HERO HEADER === */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 mb-16 items-start">

          {/* Left: Title block */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7C3AED]/8 border border-[#7C3AED]/20 text-[#7C3AED] text-xs font-semibold mb-5">
              <span className="font-mono">{info.number}.</span>
              {ui.badge}
            </div>
            <h1 className="font-['Inter'] font-extrabold text-3xl sm:text-5xl lg:text-6xl text-gray-900 tracking-tighter leading-[1.1] mb-4">
              {info.title}
            </h1>
            <p className="text-[#7C3AED] font-semibold text-lg mb-4">{t.tagline}</p>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl">
              {t.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#7C3AED] text-white font-bold text-sm px-6 py-3.5 rounded-2xl hover:bg-[#6D28D9] hover:shadow-lg hover:shadow-[#7C3AED]/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                {ui.consultBtn}
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/price"
                className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-700 font-semibold text-sm px-6 py-3.5 rounded-2xl hover:border-[#7C3AED]/40 hover:text-[#7C3AED] hover:-translate-y-0.5 transition-all duration-300"
              >
                {ui.priceBtn}
              </Link>
            </div>
          </div>

          {/* Right: Stats cards */}
          <div className="w-full lg:w-72 shrink-0 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3">
            {t.stats.map((stat, i) => (
              <Card key={i} className="border-[#7C3AED]/15 hover:border-[#7C3AED]/30 transition-colors py-4">
                <CardContent className="px-5 text-center sm:text-center lg:text-left">
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
                  {ui.aboutTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-500 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                {t.longDescription}
              </CardContent>
            </Card>

            {/* Features Grid */}
            <Card className="border-gray-100 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-gray-900 font-['Inter'] font-bold text-xl">
                  {ui.featuresTitle}
                </CardTitle>
                <CardDescription>{ui.featuresDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {t.features.map((feature, index) => (
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
                  {ui.processTitle}
                </CardTitle>
                <CardDescription>{ui.processDesc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  {t.process.map((step, index) => (
                    <div key={index} className="flex-1 flex flex-row sm:flex-col items-center sm:items-start gap-3 sm:gap-2">
                      <div className="flex items-center gap-2 sm:w-full shrink-0">
                        <div className="w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center shrink-0">
                          <span className="text-white text-xs font-bold">{String(index + 1).padStart(2, '0')}</span>
                        </div>
                        {index < t.process.length - 1 && (
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
                  {ui.techTitle}
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
                  {ui.whyTitle}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-3">
                {[
                  { icon: <Clock className="w-4 h-4 text-[#7C3AED]" />, text: ui.whyPoints[0] },
                  { icon: <Users className="w-4 h-4 text-[#7C3AED]" />, text: ui.whyPoints[1] },
                  { icon: <CheckCircle2 className="w-4 h-4 text-[#7C3AED]" />, text: ui.whyPoints[2] },
                  { icon: <Shield className="w-4 h-4 text-[#7C3AED]" />, text: ui.whyPoints[3] },
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
                <h3 className="font-['Inter'] font-bold text-lg mb-2">{ui.ctaTitle}</h3>
                <p className="text-white/75 text-sm mb-5 leading-relaxed">
                  {ui.ctaDesc}
                </p>
                <Link
                  href="/contact"
                  className="block w-full text-center bg-white text-[#7C3AED] font-bold text-sm py-3 rounded-xl hover:bg-white/90 transition-colors duration-200"
                >
                  {ui.ctaBtn}
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
                <div className="text-xs text-gray-400 mb-0.5">{ui.prevLabel}</div>
                <div className="text-sm font-semibold text-gray-700 group-hover:text-[#7C3AED] transition-colors">{prevService.title}</div>
              </div>
            </Link>
          ) : <div />}
          {nextService && (
            <Link href={`/${nextService.slug}`} className="group flex items-center justify-end gap-3 p-4 rounded-2xl border border-gray-100 hover:border-[#7C3AED]/30 hover:bg-[#7C3AED]/3 transition-all duration-300 flex-1 sm:max-w-xs text-right ml-auto">
              <div>
                <div className="text-xs text-gray-400 mb-0.5">{ui.nextLabel}</div>
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
