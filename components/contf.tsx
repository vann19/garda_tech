import React from 'react';
import Link from 'next/link';
import { Instagram } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.28 8.28 0 0 0 4.76 1.5V6.83a4.83 4.83 0 0 1-1-.14Z" />
  </svg>
);

const ConfPage = () => {
  return (
    <footer className="relative w-full py-20 px-4 md:px-8 overflow-hidden bg-white">

      {/* --- BACKGROUND BLUR / GLOW ORBS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[500px] h-[400px] bg-violet-100 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none -z-10 opacity-70"></div>
      <div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-purple-100 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none -z-10 opacity-50"></div>

      {/* --- TITLE --- */}
      <div className="text-center mb-12 relative z-10">
        <div className="section-title-wrapper inline-block">
          <h2
            className="text-3xl sm:text-4xl font-bold font-['Syne'] animate-title-reveal"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="shimmer-text">Get In Touch.</span>
          </h2>
        </div>
      </div>

      {/* --- MAIN CARD --- */}
      <div className="relative w-full max-w-6xl mx-auto">

        {/* Outer Glow Card */}
        <div className="absolute inset-0 bg-violet-200 rounded-[40px] sm:rounded-[57px] blur-[30px] sm:blur-[40px] opacity-40 pointer-events-none"></div>

        {/* Actual Card Content */}
        <div className="relative z-10 bg-white rounded-[40px] sm:rounded-[57px] border border-violet-200 shadow-xl p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col gap-12 lg:gap-16">

          {/* Grid Informasi Kontak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-20 md:gap-y-16">

            {/* No Telp */}
            <div className="flex flex-col gap-3">
              <h3 className="text-violet-600 text-2xl sm:text-3xl font-bold font-['Syne']">No. Telp</h3>
              <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-normal font-['Inter']">
                +62 831-2111-3643
              </p>
            </div>

            {/* Jam Kerja */}
            <div className="flex flex-col gap-3">
              <h3 className="text-violet-600 text-2xl sm:text-3xl font-bold font-['Syne']">Jam Kerja</h3>
              <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-normal font-['Inter']">
                08.00 - 16.00 WIB
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <h3 className="text-violet-600 text-2xl sm:text-3xl font-bold font-['Syne']">Email</h3>
              <p className="text-gray-800 text-lg sm:text-xl lg:text-2xl font-normal font-['Inter'] break-words">
                gardatech765@gmail.com
              </p>
            </div>

          </div>

          {/* Garis Pemisah (Divider) */}
          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-violet-200 to-transparent rounded-full"></div>

          {/* Sosial Media */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-violet-600 text-2xl sm:text-3xl font-bold font-['Syne']">Sosial Media</h3>

            {/* Icon Sosial Media */}
            <div className="flex items-center gap-8 sm:gap-12">
              <Link
                href="https://www.instagram.com/garda_tech?igsh=MXJyMXUya2Y4aTBhZA=="
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-violet-50 rounded-xl hover:bg-violet-600 transition-all duration-300 border border-violet-200 hover:border-violet-500 hover:text-white text-violet-600"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300 group-hover:text-white" />
              </Link>

              <Link
                href="https://www.tiktok.com/@garda.tech?_r=1&_t=ZS-94ZlyCv6ozc"
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-violet-50 rounded-xl hover:bg-violet-600 transition-all duration-300 border border-violet-200 hover:border-violet-500 text-violet-600 hover:text-white"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-6 h-6 sm:w-7 sm:h-7 group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default ConfPage;