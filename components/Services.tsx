'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, Smartphone, Settings, Palette, ArrowRight, Star, Zap, Shield } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';

const SERVICES = [
  {
    icon: <Globe className="w-6 h-6 text-[#7C3AED]" />,
    number: '01',
    title: 'Website Development',
    description: 'Website modern, cepat, dan responsif menggunakan teknologi terkini seperti Next.js, React, dan Laravel.',
    tags: ['Next.js', 'React', 'Laravel'],
    href: '/website-development',
  },
  {
    icon: <Palette className="w-6 h-6 text-[#7C3AED]" />,
    number: '02',
    title: 'UI/UX Design',
    description: 'Desain antarmuka yang intuitif, menarik, dan berpusat pada pengalaman pengguna yang optimal.',
    tags: ['Figma', 'Prototyping', 'User Research'],
    href: '/ui-ux-design',
  },
  {
    icon: <Settings className="w-6 h-6 text-[#7C3AED]" />,
    number: '03',
    title: 'Custom Web System',
    description: 'Sistem web kustom yang dirancang khusus sesuai kebutuhan operasional dan proses bisnis unik Anda.',
    tags: ['ERP', 'CRM', 'Dashboard'],
    href: '/custom-web-system',
  },
  {
    icon: <Smartphone className="w-6 h-6 text-[#7C3AED]" />,
    number: '04',
    title: 'Brand & Digital Assets',
    description: 'Identitas brand yang kuat — dari logo, panduan visual, hingga seluruh aset digital bisnis Anda.',
    tags: ['Logo', 'Brand Guide', 'Social Kit'],
    href: '/brand-digital-assets',
  },
];

const STATS = [
  { icon: <Star className="w-5 h-5 text-[#7C3AED]" />, value: '15+', label: 'Proyek Selesai' },
  { icon: <Zap className="w-5 h-5 text-[#7C3AED]" />, value: '99%', label: 'Kepuasan Klien' },
  { icon: <Shield className="w-5 h-5 text-[#7C3AED]" />, value: '2', label: 'Tahun Berpengalaman' },
  { icon: <Globe className="w-5 h-5 text-[#7C3AED]" />, value: '24/7', label: 'Dukungan Teknis' },
];

const Services = () => {
  return (
    <section className="relative w-full bg-white py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#7C3AED]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="section-title-wrapper inline-block">
            <h2 className="font-['Inter'] font-extrabold tracking-tight text-gray-900 text-3xl sm:text-4xl lg:text-5xl animate-title-reveal">
              <span className="shimmer-text">Apa yang </span>
              <span className="text-gray-900">Kami Tawarkan</span>
            </h2>
          </div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Dari konsep hingga peluncuran, kami menyediakan solusi digital lengkap yang disesuaikan dengan kebutuhan spesifik bisnis Anda.
          </p>
        </div>

        {/* Stats Strip — shadcn Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {STATS.map((stat, i) => (
            <Card
              key={i}
              className="border-[#7C3AED]/15 hover:border-[#7C3AED]/40 hover:shadow-md hover:shadow-[#7C3AED]/10 transition-all duration-300 py-4"
            >
              <CardContent className="flex items-center gap-3 px-5">
                <div className="p-2 rounded-xl bg-[#7C3AED]/8 shrink-0">
                  {stat.icon}
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">{stat.value}</div>
                  <div className="text-xs text-gray-500">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Service Cards — shadcn Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Link
              key={service.href}
              href={service.href}
              className="group block"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card className="h-full flex flex-col border-[#7C3AED]/10 hover:border-[#7C3AED]/40 hover:shadow-xl hover:shadow-[#7C3AED]/10 hover:-translate-y-1.5 transition-all duration-500 py-0 overflow-hidden">
                {/* Top accent bar */}
                <div className="h-1 w-full bg-[#7C3AED] rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="pt-6 pb-2 px-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/8 border border-[#7C3AED]/15 flex items-center justify-center group-hover:bg-[#7C3AED]/15 group-hover:scale-110 transition-all duration-300">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold font-mono text-[#7C3AED]/50 tracking-widest">
                      {service.number}.
                    </span>
                  </div>
                  <CardTitle className="text-gray-900 font-['Inter'] font-bold text-base sm:text-lg leading-snug">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-0 flex-1">
                  <CardDescription className="text-gray-500 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-[#7C3AED]/8 text-[#7C3AED] border border-[#7C3AED]/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="px-6 pt-4 pb-5 mt-auto">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-[#7C3AED] group-hover:gap-2.5 transition-all duration-300">
                    <span>Pelajari Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" />
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
