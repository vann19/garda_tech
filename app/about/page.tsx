import React from 'react'
import Image from 'next/image'
import TeamMembers from '@/components/TeamMembers'
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden ">


      {/* === SECTION: Tentang Kami === */}
      <div className="relative z-10 w-full px-4  sm:px-8 lg:px-16 py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 sm:gap-12 lg:gap-16 items-center">

          {/* Gambar */}
          <div className="w-full md:w-1/2 relative aspect-4/3 rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&h=675&fit=crop&q=80"
              alt="Tim Garda Tech bekerja bersama"
              fill
              className="object-cover"
            />
          </div>

          {/* Teks penjelasan */}
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Syne']">
              <span className="text-violet-500">Siapa </span>
              <span className="text-white">Kami?</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-base lg:text-lg font-['Inter'] leading-relaxed">
              Garda Tech adalah tim pengembang yang berfokus pada pembuatan solusi digital berkualitas tinggi. Kami percaya bahwa teknologi yang baik dimulai dari proses yang terstruktur dan transparan.
            </p>

            <p className="mt-4 text-white/80 text-sm sm:text-base lg:text-lg font-['Inter'] leading-relaxed">
              Dengan pendekatan yang detail dan presisi, kami membangun website, aplikasi mobile, dan solusi digital lainnya yang dirancang untuk mendukung pertumbuhan bisnis jangka panjang Anda.
            </p>

            <div className="mt-6 sm:mt-8 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-violet-500 shrink-0" />
                <span className="text-white text-sm sm:text-base font-['Inter']">Pengembangan Website & Aplikasi Mobile</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-violet-500 shrink-0" />
                <span className="text-white text-sm sm:text-base font-['Inter']">Desain UI/UX yang Modern</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-violet-500 shrink-0" />
                <span className="text-white text-sm sm:text-base font-['Inter']">Proses Transparan & Dukungan Berkelanjutan</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* === SECTION: Tim Kami === */}
      <TeamMembers />
      <Footer />

    </div>
  )
}

export default AboutPage