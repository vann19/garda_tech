import React from 'react';
import Link from 'next/link';
// Import icon dari lucide-react
import { Instagram, Linkedin } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.86a8.28 8.28 0 0 0 4.76 1.5V6.83a4.83 4.83 0 0 1-1-.14Z" />
  </svg>
);

const ConfPage = () => {
  return (
    <footer className="relative w-full py-20 px-4 md:px-8 overflow-hidden bg-transparent">
      
      {/* --- BACKGROUND BLUR / GLOW ORBS --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[581px] h-[555px] bg-indigo-900 rounded-full blur-[100px] sm:blur-[132px] pointer-events-none -z-10"></div>
      <div className="absolute top-[154px] left-1/2 -translate-x-1/2 w-48 sm:w-64 h-48 sm:h-64 bg-purple-300 rounded-full blur-[100px] sm:blur-[132px] pointer-events-none -z-10 opacity-50"></div>

      {/* --- TITLE --- */}
      <h2 className="text-center text-white text-3xl sm:text-4xl font-bold font-['Syne'] mb-12 relative z-10">
        Get In Touch.
      </h2>

      {/* --- MAIN CARD --- */}
      <div className="relative w-full max-w-6xl mx-auto">
        
        {/* Outer Glow Card */}
        <div className="absolute inset-0 bg-purple-800 rounded-[40px] sm:rounded-[57px] blur-[30px] sm:blur-[48.55px] opacity-70 pointer-events-none"></div>
        
        {/* Actual Card Content */}
        <div className="relative z-10 bg-black rounded-[40px] sm:rounded-[57px] border border-violet-500/95 p-8 sm:p-12 md:p-16 lg:p-20 flex flex-col gap-12 lg:gap-16">
          
          {/* Grid Informasi Kontak */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-x-20 md:gap-y-16">
            
            {/* Alamat */}
            <div className="flex flex-col gap-3">
              <h3 className="text-violet-500/95 text-2xl sm:text-3xl font-bold font-['Syne']">Alamat</h3>
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-normal font-['Inter'] leading-relaxed">
                Jl. Siliwangi (Ringroad Utara), Jombor,<br />
                Sleman, Daerah Istimewa Yogyakarta <br />
                55285
              </p>
            </div>

            {/* No Telp */}
            <div className="flex flex-col gap-3">
              <h3 className="text-violet-500/95 text-2xl sm:text-3xl font-bold font-['Syne']">No. Telp</h3>
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-normal font-['Inter']">
                +62 831-2111-3643
              </p>
            </div>

            {/* Jam Kerja */}
            <div className="flex flex-col gap-3">
              <h3 className="text-violet-500/95 text-2xl sm:text-3xl font-bold font-['Syne']">Jam Kerja</h3>
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-normal font-['Inter']">
                08.00 - 16.00 WIB
              </p>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-3">
              <h3 className="text-violet-500/95 text-2xl sm:text-3xl font-bold font-['Syne']">Email</h3>
              <p className="text-white text-lg sm:text-xl lg:text-2xl font-normal font-['Inter'] break-words">
                gardatech765@gmail.com
              </p>
            </div>
            
          </div>

          {/* Garis Pemisah (Divider) */}
          <div className="w-full h-[2px] bg-purple-800/80 rounded-full"></div>

          {/* Sosial Media */}
          <div className="flex flex-col items-center gap-6">
            <h3 className="text-violet-500/95 text-2xl sm:text-3xl font-bold font-['Syne']">Sosial Media</h3>
            
            {/* Icon Sosial Media dengan Lucide */}
            <div className="flex items-center gap-8 sm:gap-12">
              <Link 
                href="#" 
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl hover:bg-violet-600 transition-all duration-300 border border-white/20 hover:border-violet-400"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="#" 
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl hover:bg-violet-600 transition-all duration-300 border border-white/20 hover:border-violet-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
              </Link>
              
              <Link 
                href="#" 
                className="group flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl hover:bg-violet-600 transition-all duration-300 border border-white/20 hover:border-violet-400"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-6 h-6 sm:w-7 sm:h-7 text-white group-hover:scale-110 transition-transform duration-300" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default ConfPage;