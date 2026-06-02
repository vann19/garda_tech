"use client";

import React, { useEffect } from 'react'
import Image from 'next/image'
import TeamMembers from '@/components/TeamMembers'
import Footer from '@/components/Footer';
import CardSlug from '@/components/CardSlug';
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollVelocity from '@/components/ScrollVelocity';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">

      {/* === SECTION: Tentang Kami === */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Gambar */}
          <div className="w-full md:w-1/2 relative aspect-square" data-aos="fade-right">
            <Image
              src="/img/about.png"
              alt="Tim Garda Tech bekerja bersama"
              fill
              className="object-cover mix-blend-multiply"
            />
          </div>

          {/* Teks penjelasan */}
          <div className="w-full md:w-1/2" data-aos="fade-left">
            <div className="section-title-wrapper inline-block">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Syne'] animate-title-reveal">
                <span className="shimmer-text">Siapa </span>
                <span className="text-gray-900">Kami?</span>
              </h2>
            </div>

            <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base lg:text-lg font-['Inter'] leading-relaxed font-medium">
              Garda Tech adalah tim pengembang yang berfokus pada pembuatan solusi digital berkualitas tinggi. Kami percaya bahwa teknologi yang baik dimulai dari proses yang terstruktur dan transparan.
            </p>

            <p className="mt-4 text-gray-600 text-sm sm:text-base lg:text-lg font-['Inter'] leading-relaxed font-medium">
              Dengan pendekatan yang detail dan presisi, kami membangun website, aplikasi mobile, dan solusi digital lainnya yang dirancang untuk mendukung pertumbuhan bisnis jangka panjang Anda.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-violet-500 shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base font-['Inter'] font-semibold">Pengembangan Website & Aplikasi Mobile</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-violet-500 shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base font-['Inter'] font-semibold">Desain UI/UX yang Modern</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-violet-500 shrink-0" />
                <span className="text-gray-700 text-sm sm:text-base font-['Inter'] font-semibold">Proses Transparan & Dukungan Berkelanjutan</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* === SECTION: Stats === */}
      <div className="relative z-10 w-full py-12 overflow-hidden" data-aos="fade-up">
        <ScrollVelocity
          texts={[
            '50+ Proyek Selesai  ✦  30+ Klien Puas  ✦',
            '3+ Tahun Pengalaman  ✦  10+ Anggota Tim  ✦',
          ]}
          velocity={60}
          className="text-violet-600"
          parallaxStyle={{ padding: '0.25rem 0', fontFamily: "'Syne', sans-serif" }}
        />
      </div>

      {/* === SECTION: Visi & Misi === */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 py-16 sm:py-24" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold font-['Syne']">
              <span className="shimmer-text">Visi </span>
              <span className="text-gray-900">& Misi</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Visi */}
            <div className="bg-violet-50 rounded-2xl p-8 border border-violet-100" data-aos="fade-right">
              <div className="w-12 h-12 rounded-xl bg-violet-600 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-['Syne'] mb-3">Visi</h3>
              <p className="text-gray-600 font-['Inter'] leading-relaxed">
                Menjadi mitra teknologi terpercaya bagi bisnis di Indonesia, menghadirkan solusi digital inovatif yang mendorong pertumbuhan dan transformasi di era digital.
              </p>
            </div>
            {/* Misi */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100" data-aos="fade-left">
              <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center mb-6">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 font-['Syne'] mb-3">Misi</h3>
              <ul className="flex flex-col gap-3">
                {[
                  'Membangun produk digital berkualitas tinggi dengan standar internasional',
                  'Menjalin hubungan jangka panjang berbasis kepercayaan dan transparansi',
                  'Terus berinovasi mengikuti perkembangan teknologi terkini',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-600 font-['Inter'] text-sm sm:text-base">
                    <div className="w-2 h-2 rounded-full bg-violet-500 shrink-0 mt-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* === SECTION: Layanan Kami === */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 pb-8" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="section-title-wrapper inline-block mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Syne'] animate-title-reveal">
              <span className="shimmer-text">Layanan </span>
              <span className="text-gray-900">Kami</span>
            </h2>
          </div>
        </div>
      </div>
      
      <div data-aos="fade-up">
        <CardSlug />
      </div>

      {/* === SECTION: Tim Kami === */}
      <div data-aos="fade-up">
        <TeamMembers />
      </div>
      
      <Footer />

    </div>
  )
}

export default AboutPage