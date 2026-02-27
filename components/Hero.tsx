"use client";

import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] min-h-[600px] overflow-hidden bg-black flex flex-col items-center justify-between grid-kotak">

      {/* Top Section: Heading & Subtext */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 mt-[10vh] sm:mt-[18vh]">
        {/* Heading Container to Prevent Layout Shift */}
        <div className="relative w-full">
          {/* Invisible Static Placeholder */}
          <h1 className="font-sans font-bold leading-tight tracking-tight invisible pointer-events-none select-none" aria-hidden="true">
            <span className="block text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[72px]">
              Built with Precision.
            </span>
            <span className="block text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[72px] mt-1 sm:mt-2">
              Delivered with Trust.
            </span>
          </h1>

          {/* Typewriter Animation */}
          <h1 className="absolute top-0 inset-x-0 font-sans font-bold leading-tight tracking-tight">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('<span class="block text-white text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[72px]">Built with Precision.</span>')
                  .pauseFor(500)
                  .typeString('<span class="block text-[#6a29ff] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[72px] mt-1 sm:mt-2">Delivered with Trust.</span>')
                  .pauseFor(3000)
                  .deleteAll(20)
                  .start();
              }}
              options={{
                loop: true,
                delay: 50,
                cursor: ''
              }}
            />
          </h1>
        </div>

        {/* Subtext */}
        <p className="mt-5 sm:mt-12 text-white/80 text-sm sm:text-base lg:text-xl max-w-[300px] sm:max-w-[700px] md:max-w-[1000px] mx-auto leading-relaxed sm:leading-loose">
          Detail yang presisi, proses yang transparan, dan hasil yang dapat diandalkan untuk mendukung pertumbuhan jangka panjang.
        </p>

        {/* CTA Buttons — mobile only */}
        <div className="flex sm:hidden gap-3 mt-8">
          <a
            href="#services"
            className="px-5 py-2.5 bg-[#6a29ff] text-white text-sm font-semibold rounded-full hover:bg-[#5520d4] transition-colors duration-200"
          >
            Lihat Layanan
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 border border-white/30 text-white/80 text-sm font-semibold rounded-full hover:border-white/60 hover:text-white transition-colors duration-200"
          >
            Hubungi Kami
          </a>
        </div>
      </div>

      {/* Background Image — pushed lower on mobile so heading stays visible */}
      <div className="absolute inset-x-0 top-[48%] sm:top-[10%] pointer-events-none animate-fadeIn z-0">
        <Image
          src="/hole.png"
          alt="hole background"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* What We Do Section - Pinned to bottom, sits above image */}
      <div className="relative z-20 mt-auto w-full text-center pb-10 sm:pb-20">
        <h2 className="font-['Syne'] font-bold text-3xl sm:text-4xl lg:text-5xl tracking-wide">
          <span className="text-[#6a29ff]">What</span>
          <span className="text-white"> We Do.</span>
        </h2>
        {/* Scroll hint — mobile only */}
        <div className="flex sm:hidden justify-center mt-3">
          <div className="flex flex-col items-center gap-1 opacity-50">
            <div className="w-px h-6 bg-white/60" />
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L5 5L9 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Hero