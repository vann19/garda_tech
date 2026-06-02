"use client";

import React from 'react';
import Link from 'next/link';
import RotatingText from '@/components/RotatingText';
import LogoLoop from '@/components/LogoLoop';
import { Button } from '@/components/ui/button';
import { 
  Laptop, 
  Smartphone, 
  Settings, 
  ArrowRight, 
  Code2, 
  Sparkles, 
  CheckCircle2,
  Terminal,
  Cpu
} from 'lucide-react';

const Hero = () => {
  const HERO_TEXTS = {
    titleStart: 'Jasa Pembuatan &',
    titleHighlight: 'Perawatan Website',
    titleEnd: 'Serta Aplikasi Seluler',
    description:
      'Membangun platform digital berkinerja tinggi, aman, dan responsif. Kami tidak hanya membuat code, tapi juga merawat dan mengoptimalkannya demi kelangsungan bisnis Anda.',
  };

  const CTA_BUTTONS = [
    {
      href: '/price',
      label: 'Mulai Proyek',
      variant: 'primary',
      className: 'bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white shadow-lg shadow-violet-200 hover:shadow-xl hover:shadow-violet-300/40 hover:-translate-y-0.5 transition-all duration-300',
    },
    {
      href: '/portofolio',
      label: 'Lihat Portfolio',
      variant: 'outline',
      className: 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-violet-600 hover:border-violet-200 hover:-translate-y-0.5 transition-all duration-300',
    },
  ] as const;

  const TECH_LOGOS = [
    {
      node: (
        <div className="group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-violet-50/50 transition-colors duration-300">
          <Code2 className="w-6 h-6 lg:w-7 lg:h-7 text-gray-400 group-hover:text-violet-600 transition-colors" />
          <span className="text-sm lg:text-base font-bold text-gray-400 group-hover:text-violet-600 font-['Syne'] transition-colors">
            Next.js
          </span>
        </div>
      ),
      title: 'Next.js'
    },
    {
      node: (
        <div className="group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-violet-50/50 transition-colors duration-300">
          <Sparkles className="w-6 h-6 lg:w-7 lg:h-7 text-gray-400 group-hover:text-violet-600 transition-colors" />
          <span className="text-sm lg:text-base font-bold text-gray-400 group-hover:text-violet-600 font-['Syne'] transition-colors">
            React
          </span>
        </div>
      ),
      title: 'React'
    },
    {
      node: (
        <div className="group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-violet-50/50 transition-colors duration-300">
          <Smartphone className="w-6 h-6 lg:w-7 lg:h-7 text-gray-400 group-hover:text-violet-600 transition-colors" />
          <span className="text-sm lg:text-base font-bold text-gray-400 group-hover:text-violet-600 font-['Syne'] transition-colors">
            Flutter
          </span>
        </div>
      ),
      title: 'Flutter'
    },
    {
      node: (
        <div className="group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-violet-50/50 transition-colors duration-300">
          <Laptop className="w-6 h-6 lg:w-7 lg:h-7 text-gray-400 group-hover:text-violet-600 transition-colors" />
          <span className="text-sm lg:text-base font-bold text-gray-400 group-hover:text-violet-600 font-['Syne'] transition-colors">
            Laravel
          </span>
        </div>
      ),
      title: 'Laravel'
    },
    {
      node: (
        <div className="group flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-violet-50/50 transition-colors duration-300">
          <Cpu className="w-6 h-6 lg:w-7 lg:h-7 text-gray-400 group-hover:text-violet-600 transition-colors" />
          <span className="text-sm lg:text-base font-bold text-gray-400 group-hover:text-violet-600 font-['Syne'] transition-colors">
            Tailwind
          </span>
        </div>
      ),
      title: 'Tailwind'
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-white flex flex-col justify-between pt-[12vh] pb-0 overflow-hidden grid-kotak">
      {/* Dynamic Background Auras */}
      <div className="absolute top-[5%] -left-32 w-[500px] h-[500px] bg-violet-100/60 rounded-full blur-[130px] opacity-70 pointer-events-none" />
      <div className="absolute top-[10%] -right-32 w-[450px] h-[450px] bg-indigo-100/50 rounded-full blur-[120px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-[20%] left-[45%] -translate-x-1/2 w-[600px] h-[300px] bg-purple-50/70 rounded-full blur-[100px] opacity-80 pointer-events-none" />

      {/* Grid Network Visual Node Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:32px_32px] mask-gradient" />

      {/* Main Two-Column Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex-1 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 py-8 lg:py-16">
        
        {/* Left Column: Rich Typography and CTAs */}
        <div className="w-full lg:w-7/12 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Animated Badge */}
          

          {/* Core Headline */}
          <div className="font-['Inter'] font-extrabold tracking-tighter text-gray-900 text-[30px] sm:text-[42px] md:text-[50px] lg:text-[56px] xl:text-[64px]">
            <h1 className="leading-[1.15]">
              Jasa Pembuatan &{' '}
            </h1>
            <div className="flex items-center justify-center lg:justify-start overflow-visible" style={{ height: '1.4em', paddingBottom: '0.15em' }}>
              <RotatingText
                texts={['Perawatan Website', 'Pembuatan Aplikasi', 'Sistem Kustom', 'Desain UI/UX']}
                mainClassName="text-violet-600"
                elementLevelClassName="text-violet-600"
                staggerFrom="first"
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: "-120%", opacity: 0 }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden"
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                rotationInterval={3000}
              />
            </div>
            <p className="leading-[1.15] mt-1">
              Serta Aplikasi Seluler
            </p>
          </div>

          {/* Description */}
          <p className="text-gray-500 max-w-[580px] text-xs sm:text-sm md:text-base leading-relaxed sm:leading-relaxed lg:leading-loose mt-4">
            {HERO_TEXTS.description}
          </p>

          {/* Core Feature Bullet Highlights */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2.5 mt-6 max-w-lg">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0" />
              <span>Full SLA Maintenance</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0" />
              <span>High Uptime & Security</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-gray-700">
              <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0" />
              <span>Proses 100% Transparan</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-row gap-4 mt-6 sm:mt-8 w-full justify-center lg:justify-start">
            {CTA_BUTTONS.map((button) => (
              <Button
                key={button.href}
                asChild
                className={`rounded-full px-6 sm:px-8 py-5 text-sm sm:text-base transition-all duration-300 font-semibold cursor-pointer ${button.className}`}
              >
                <Link href={button.href} className="inline-flex items-center gap-2">
                  {button.label}
                  {button.variant === 'primary' && <ArrowRight className="w-4 h-4 ml-0.5" />}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        {/* Right Column: Stunning Glassmorphic Coding illustration */}
        <div className="w-full lg:w-5/12 flex justify-center items-center relative lg:pl-4">
          {/* Glowing Orb Behind Card */}
          <div className="absolute w-72 h-72 bg-gradient-to-tr from-violet-400 to-indigo-400 rounded-full blur-[60px] opacity-20 animate-pulse" />

          {/* Interactive Modern Dashboard Card - Reduced height/padding slightly for better fit */}
          <div className="relative w-full max-w-md bg-white/70 backdrop-blur-md rounded-3xl border border-violet-100 shadow-2xl p-5 overflow-hidden hover:scale-[1.02] transition-transform duration-500">
            {/* Mock Header Controls */}
            <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-violet-50 text-violet-700 text-[10px] font-semibold font-mono">
                <Terminal className="w-3 h-3" /> gardatech.tsx
              </div>
            </div>

            {/* Mock Code Block with colors */}
            <div className="font-mono text-xs text-left leading-normal space-y-0.5 bg-gray-950 p-4 rounded-2xl text-white/90 shadow-inner">
              <div><span className="text-pink-400">const</span> <span className="text-blue-300">gardaTech</span> = <span className="text-pink-400">new</span> <span className="text-emerald-400">DigitalPartner</span>();</div>
              <div><span className="text-blue-300">gardaTech</span>.<span className="text-yellow-300">setServices</span>([</div>
              <div className="pl-4 text-orange-300">&apos;Development&apos;,</div>
              <div className="pl-4 text-orange-300">&apos;Maintenance&apos;,</div>
              <div className="pl-4 text-orange-300">&apos;ScaleUp&apos;</div>
              <div>]);</div>
              <div className="text-gray-500">// Menghasilkan website/app berkualitas premium</div>
              <div><span className="text-blue-300">gardaTech</span>.<span className="text-yellow-300">deliver</span>({`{ precision: `}<span className="text-purple-300">100</span>, trust: <span className="text-purple-300">true</span> {`}`});</div>
            </div>

            {/* Performance Indicators */}
            <div className="grid grid-cols-2 gap-3 mt-3">
              <div className="p-3 bg-violet-50/50 rounded-2xl border border-violet-100/50 flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold">System Uptime</span>
                <span className="text-base sm:text-lg font-bold text-violet-600">99.99%</span>
              </div>
              <div className="p-3 bg-violet-50/50 rounded-2xl border border-violet-100/50 flex flex-col gap-0.5">
                <span className="text-[9px] uppercase tracking-wider text-gray-500 font-semibold">Response Time</span>
                <span className="text-base sm:text-lg font-bold text-violet-600">&lt; 150ms</span>
              </div>
            </div>

            {/* Floating decorative absolute card */}
            <div className="absolute -bottom-1 -right-1 p-2.5 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-2xl shadow-lg flex items-center gap-2 transform translate-x-3 -translate-y-3 hover:translate-x-2 transition-all duration-300">
              <div className="p-1 bg-white/20 rounded-lg text-white">
                <Settings className="w-3.5 h-3.5 animate-spin-slow text-white" />
              </div>
              <div className="text-left">
                <div className="text-[8px] uppercase tracking-widest text-white/70 font-semibold leading-none">Auto Update</div>
                <div className="text-[10px] font-bold text-white leading-tight">System Secure</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Client Logos & Technology Banner (Inspired by Sentral.id) - Improved responsive alignment */}
      <div className="w-full bg-gray-50/90 backdrop-blur-sm border-t border-b border-gray-100 py-5 sm:py-6 relative z-10 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Banner Title */}
          <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 font-sans text-center lg:text-left">
            Teknologi Modern Yang Kami Rawat & Kembangkan:
          </div>

          {/* Technology Infinite Loop using LogoLoop */}
          <div className="flex-1 w-full max-w-4xl overflow-hidden py-1">
            <LogoLoop
              logos={TECH_LOGOS}
              speed={45}
              direction="left"
              logoHeight={42}
              gap={32}
              pauseOnHover={true}
              scaleOnHover={true}
              fadeOut={true}
              fadeOutColor="#f9fafb"
              ariaLabel="Technology partners"
            />
          </div>

          {/* Custom Mouse Scroll Indicator Inspired by Sentral.id circular layout */}

        </div>
      </div>
    </section>
  );
};

export default Hero;