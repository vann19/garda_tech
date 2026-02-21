import React, { JSX } from 'react'
import Image from 'next/image'

const WhPage = (): JSX.Element => {
  return (
    <section className="w-full py-2 bg-transparent overflow-visible animate-slideUp ">
     <div className="relative z-10 mt-auto pb-12 sm:pb-20 pt-16 sm:pt-24 text-center">
        <h2 className="font-['Syne'] font-bold text-3xl sm:text-5xl lg:text-6xl">
          <span className="text-violet-800">Who</span>
          <span className="text-white"> it's for</span>
        </h2>
      </div>
      <div className="relative w-full">
        <Image
          src="/wh.svg"
          alt="who it's for"
          width={2400}
          height={100}
          className="w-screen max-w-none  mx-auto"
          priority
        />
      </div>
    </section>
   
  )
}

export default WhPage