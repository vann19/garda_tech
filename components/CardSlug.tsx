import React from 'react'
import Link from 'next/link'

const ArrowIcon = () => (
  <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="40" cy="40" r="40" fill="#D9D9D9"/>
    <path d="M23.6507 54.1344C22.6203 55.4319 22.8369 57.319 24.1344 58.3493C25.4319 59.3797 27.319 59.1631 28.3493 57.8656L26 56L23.6507 54.1344ZM55.9804 21.658C55.7915 20.0119 54.304 18.8307 52.658 19.0196L25.834 22.0977C24.188 22.2866 23.0067 23.7741 23.1956 25.4202C23.3845 27.0662 24.872 28.2475 26.5181 28.0586L50.3616 25.3225L53.0977 49.166C53.2866 50.812 54.7741 51.9933 56.4202 51.8044C58.0662 51.6155 59.2475 50.128 59.0586 48.4819L55.9804 21.658ZM26 56L28.3493 57.8656L55.3493 23.8656L53 22L50.6507 20.1344L23.6507 54.1344L26 56Z" fill="#452273"/>
  </svg>
)

const information = [
  {
    number: '01.',
    title: 'Website\nDevelopment',
    slug: 'website-development',
  },
  {
    number: '02.',
    title: 'UI/UX\nDesign',
    slug: 'ui-ux-design',
  },
  {
    number: '03.',
    title: 'Custom Web\nSystem',
    slug: 'custom-web-system',
  },
  {
    number: '04.',
    title: 'Brand &\nDigital Assets',
    slug: 'brand-digital-assets',
  },
]

const CardSlug = () => {
  return (
    <section className=" relative w-full py-16 px-4 sm:px-8 overflow-hidden">
      {/* Cards Grid */}
      <div className="relative  z-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6  max-w-7xl mx-auto">
        {information.map((info) => (
          <Link
            key={info.slug}
            href={`/${info.slug}`}
            className="group block"
          >
            <div className="card-slug">
              {/* Blur layer di dalam card */}
              <div className="card-blob-primary" />
              <div className="card-blob-secondary" />

              {/* Nomor + Judul */}
              <div className="relative z-10">
                <p className="text-white text-2xl sm:text-3xl font-bold font-['Syne'] mb-3">
                  {info.number}
                </p>
                <p className="text-white text-xl sm:text-2xl font-bold font-['Syne'] leading-snug whitespace-pre-line">
                  {info.title}
                </p>
              </div>

              {/* Arrow Icon */}
              <div className="relative z-10 flex justify-end transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                <ArrowIcon />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CardSlug