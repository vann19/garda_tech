import React from 'react'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden grid-kotak">

      {/* === BLUR BACKGROUNDS === */}
      <div className="absolute inset-x-0 top-[13%] w-full h-[62%] bg-violet-800 blur-[133px]" />
      <div className="absolute inset-x-0 -top-[13%] w-full h-[75%] bg-violet-500 blur-[133px]" />
      <div className="absolute inset-x-0 -top-[25%] w-full h-[75%] bg-purple-300 blur-[133px]" />
      <div className="absolute inset-x-0 -top-[49%] w-full h-[75%] bg-white blur-[133px]" />

      {/* === CONTENT === */}
      <div className="relative z-10 flex flex-col items-center pt-16 sm:pt-20 px-4">

       

        {/* Heading */}
        <h1 className="mt-12 sm:mt-16 text-center text-indigo-900 text-3xl sm:text-5xl lg:text-6xl font-bold font-['Syne'] leading-tight">
          Building with Purpose.
          <br />
          Delivering with Responsibility.
        </h1>

        {/* === CONCENTRIC RINGS + BRAND CENTER === */}
        <div className="relative mt-16 sm:mt-24 w-full max-w-[1263px] aspect-[1263/628] mx-auto">

          {/* Ring 4 — outermost */}
          <div className="absolute inset-0 rounded-[246px] border-4 border-violet-800/20" />

          {/* Ring 3 */}
          <div className="absolute left-[7%] right-[7%] top-[11%] bottom-[11%] rounded-[211px] border-4 border-violet-800/60" />

          {/* Ring 2 */}
          <div className="absolute left-[13%] right-[13%] top-[22%] bottom-[22%] rounded-full border-4 border-violet-800/75" />

          {/* Ring 1 — innermost */}
          <div className="absolute left-[20%] right-[20%] top-[33%] bottom-[33%] rounded-[135px] border-4 border-violet-800/80" />

          {/* Brand Center Card */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] max-w-[629px]">
            {/* Outer glow */}
            <div className="absolute inset-0 bg-violet-500/95 rounded-[62px] translate-y-[-3px]" />
            {/* Inner dark card */}
            <div className="relative bg-ungu rounded-[62px] px-6 py-7 sm:py-8 flex items-center justify-center gap-3 sm:gap-4">
              <Image
                src="/img/logo.png"
                alt="Garda Tech Logo"
                width={64}
                height={64}
                className="w-10 h-10 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
              />
              <span className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold font-['Syne']">
                Garda Tech
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutPage