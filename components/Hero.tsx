import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative w-full min-h-[70vh] sm:min-h-screen overflow-hidden bg-black flex flex-col items-center grid-kotak">

      {/* Background Image — responsive positioning */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/3 sm:-translate-y-1/4 pointer-events-none animate-fadeIn">
        <Image
          src="/hole.svg"
          alt="hole background"
          width={1920}
          height={800}
          className="w-full h-auto object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 pt-20 sm:pt-28 lg:pt-36">
        {/* Heading */}
        <h1 className="font-sans font-bold leading-tight">
          <span className="block text-white text-3xl sm:text-5xl lg:text-6xl xl:text-7xl">
            Built with Precision.
          </span>
          <span className="block text-violet-800 text-4xl sm:text-6xl lg:text-7xl xl:text-8xl mt-2 sm:mt-3">
            Delivered with Trust.
          </span>
        </h1>

        {/* Subtext */}
        <p className="mt-6 sm:mt-8 lg:mt-10 text-white/90 text-sm sm:text-lg lg:text-2xl xl:text-3xl max-w-[280px] sm:max-w-xl lg:max-w-3xl leading-relaxed sm:leading-10">
          Detail yang presisi, proses yang transparan, dan hasil yang dapat diandalkan untuk mendukung pertumbuhan jangka panjang.
        </p>
      </div>

      {/* What We Do Section */}
      <div className="relative z-10 mt-auto pb-10 sm:pb-20 pt-20 sm:pt-24 text-center">
        <h2 className="font-['Syne'] font-bold text-3xl sm:text-5xl lg:text-6xl">
          <span className="text-violet-800">What</span>
          <span className="text-white"> We Do.</span>
        </h2>
      </div>

    </section>
  )
}

export default Hero