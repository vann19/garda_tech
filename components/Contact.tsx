import React from "react"
import { Button } from "./ui/button"
import Link from "next/link"

const ContactPage = () => {
  return (
    <section className="w-full  overflow-visible  animate-slideUp ">
      <div className="relative z-10 mt-auto pt-12 pb-12 text-center ">
        <h2 className="font-['Syne'] text-3xl font-bold sm:text-5xl lg:text-6xl">
          <span className="text-violet-800">Contact</span>
        </h2>
      </div>

      <div className="flex items-center justify-center sm:text-5xl lg:text-6xl pb-12 ">
        <h2 className="text-white font-bold text-center ">Built for Long-Term Impact.</h2>
      </div>

      <div className="flex items-center justify-center  px-4 text-base sm:text-xl lg:text-2xl xl:text-3xl">
        <p className="text-white text-center leading-[1.6]">
          Solusi digital yang terstruktur bukan hanya tentang hari ini, <br className="hidden sm:block" />
          tetapi tentang bagaimana sistem tetap stabil dan relevan seiring pertumbuhan bisnis Anda. 
        </p>
      </div>

      {/* button */}
      <div className="flex items-center justify-center py-2 mt-8">
              <Button variant="glow" size="pill" asChild>
          <Link href="#contact">
            Let&apos;s Talk
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5 ml-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </Link>
        </Button>
          </div>

    </section>

    
  )
}

export default ContactPage