'use client'

import React, { JSX } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'

const WhPage = (): JSX.Element => {
  const { lang } = useLanguage()
  const heading = lang === 'id'
    ? { shimmer: 'Untuk', rest: ' Siapa?' }
    : { shimmer: 'Who', rest: " it's for" }

  return (
    <section className="w-full py-2 bg-white overflow-visible animate-slideUp">
      <div className="relative z-10 mt-auto pb-12 sm:pb-20 pt-16 sm:pt-24 text-center">
        <div className="section-title-wrapper">
          <h2
            className="font-['Syne'] font-bold text-3xl sm:text-5xl lg:text-6xl animate-title-reveal"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="shimmer-text">{heading.shimmer}</span>
            <span className="text-gray-800">{heading.rest}</span>
          </h2>
        </div>
      </div>
      <div className="relative w-full">
        <Image
          src="/wh.svg"
          alt="who it's for"
          width={2400}
          height={100}
          className="w-full h-auto mx-auto"
          style={{ filter: 'hue-rotate(240deg) saturate(0.6) brightness(0.95)' }}
          priority
        />
      </div>
    </section>
  )
}

export default WhPage