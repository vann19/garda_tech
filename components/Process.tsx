'use client';

import React from 'react';
import { ClipboardList, Palette, Code2, Rocket, CheckCircle2 } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';

const Process = () => {
  const { lang } = useLanguage();

  const t = {
    id: {
      heading: ['Proses ', 'yang Transparan'],
      subheading: 'Kami percaya pada transparansi penuh. Setiap tahap proyek dilakukan secara terstruktur dan Anda selalu diinformasikan perkembangannya.',
      ctaTitle: 'Siap Memulai Proyek Anda?',
      ctaDesc: 'Diskusikan kebutuhan Anda bersama kami secara gratis. Dapatkan estimasi biaya dan timeline yang transparan.',
      ctaBtn: 'Konsultasi Gratis',
      steps: [
        {
          title: 'Konsultasi & Analisis',
          description: 'Kami memahami kebutuhan, tujuan bisnis, dan target pengguna proyek Anda secara mendalam melalui sesi diskusi.',
          details: ['Riset kebutuhan bisnis', 'Analisis target pengguna', 'Penyusunan brief proyek'],
        },
        {
          title: 'Desain & Prototyping',
          description: 'Tim desainer kami merancang wireframe dan prototipe interaktif yang dapat Anda review dan setujui sebelum pengembangan.',
          details: ['Wireframe & mockup', 'Prototipe interaktif', 'Revisi & approval desain'],
        },
        {
          title: 'Pengembangan',
          description: 'Developer kami membangun solusi menggunakan teknologi terkini dengan standar kode yang bersih, aman, dan terstruktur.',
          details: ['Frontend & backend development', 'Testing & QA', 'Laporan progress berkala'],
        },
        {
          title: 'Peluncuran & Perawatan',
          description: 'Setelah pengujian menyeluruh, proyek diluncurkan. Kami terus memantau dan merawat sistem agar selalu optimal.',
          details: ['Deployment & go-live', 'Monitoring performa', 'Dukungan & pembaruan berkala'],
        },
      ],
    },
    en: {
      heading: ['Our ', 'Transparent Process'],
      subheading: 'We believe in full transparency. Every project phase is structured and you are always kept informed of progress.',
      ctaTitle: 'Ready to Start Your Project?',
      ctaDesc: 'Discuss your needs with us for free. Get a transparent cost estimate and timeline.',
      ctaBtn: 'Free Consultation',
      steps: [
        {
          title: 'Consultation & Analysis',
          description: 'We deeply understand your needs, business goals, and target users through dedicated discussion sessions.',
          details: ['Business needs research', 'Target user analysis', 'Project brief preparation'],
        },
        {
          title: 'Design & Prototyping',
          description: 'Our design team creates wireframes and interactive prototypes you can review and approve before development.',
          details: ['Wireframe & mockup', 'Interactive prototype', 'Design revision & approval'],
        },
        {
          title: 'Development',
          description: 'Our developers build solutions using the latest technologies with clean, secure, and structured code standards.',
          details: ['Frontend & backend development', 'Testing & QA', 'Regular progress reports'],
        },
        {
          title: 'Launch & Maintenance',
          description: 'After thorough testing, the project goes live. We continuously monitor and maintain the system to keep it optimal.',
          details: ['Deployment & go-live', 'Performance monitoring', 'Ongoing support & updates'],
        },
      ],
    },
  }[lang];

  const STEPS = [
    { step: '01', icon: <ClipboardList className="w-6 h-6 text-[#7C3AED]" />, ...t.steps[0] },
    { step: '02', icon: <Palette className="w-6 h-6 text-[#7C3AED]" />, ...t.steps[1] },
    { step: '03', icon: <Code2 className="w-6 h-6 text-[#7C3AED]" />, ...t.steps[2] },
    { step: '04', icon: <Rocket className="w-6 h-6 text-[#7C3AED]" />, ...t.steps[3] },
  ];
  return (
    <section className="relative w-full bg-[#7C3AED]/3 py-20 sm:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background dot grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#7C3AED18_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="section-title-wrapper inline-block">
            <h2 className="font-['Inter'] font-extrabold tracking-tight text-gray-900 text-3xl sm:text-4xl lg:text-5xl animate-title-reveal">
              <span className="shimmer-text">{t.heading[0]}</span>
              <span className="text-gray-900">{t.heading[1]}</span>
            </h2>
          </div>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            {t.subheading}
          </p>
        </div>

        {/* Steps Grid — shadcn Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {STEPS.map((step, index) => (
            <div key={step.step} className="relative group">
              {/* Connector line desktop */}
              {index < STEPS.length - 1 && (
                <div className="hidden xl:block absolute top-[48px] -right-4 w-8 h-[2px] z-20 bg-[#7C3AED]/20 rounded-full" />
              )}

              <Card className="relative h-full border-[#7C3AED]/15 hover:border-[#7C3AED]/50 hover:shadow-xl hover:shadow-[#7C3AED]/10 hover:-translate-y-1 transition-all duration-500 py-0 overflow-visible">
                {/* Step badge */}
                <div className="absolute -top-3 -right-2 w-8 h-8 rounded-full bg-[#7C3AED] flex items-center justify-center shadow-md shadow-[#7C3AED]/30 z-10">
                  <span className="text-white text-[10px] font-bold">{step.step}</span>
                </div>

                <CardHeader className="pt-6 pb-2 px-6">
                  <div className="w-12 h-12 rounded-2xl bg-[#7C3AED]/8 border border-[#7C3AED]/15 flex items-center justify-center mb-4 group-hover:bg-[#7C3AED]/15 group-hover:scale-110 transition-all duration-300">
                    {step.icon}
                  </div>
                  <CardTitle className="text-gray-900 font-['Inter'] font-bold text-base leading-snug">
                    {step.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-6 flex flex-col gap-4">
                  <CardDescription className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </CardDescription>

                  {/* Checklist */}
                  <ul className="flex flex-col gap-2">
                    {step.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-xs text-gray-600">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5 text-[#7C3AED]" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 relative overflow-hidden rounded-3xl bg-[#7C3AED] p-8 sm:p-12 shadow-2xl shadow-[#7C3AED]/25 text-white">
          <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-['Inter'] font-extrabold text-2xl sm:text-3xl mb-2">
                {t.ctaTitle}
              </h3>
              <p className="text-white/75 text-sm sm:text-base max-w-lg">
                {t.ctaDesc}
              </p>
            </div>
            <a
              href="/contact"
              className="shrink-0 inline-flex items-center gap-2 bg-white text-[#7C3AED] font-bold text-sm sm:text-base px-7 py-4 rounded-2xl hover:bg-white/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              {t.ctaBtn}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
