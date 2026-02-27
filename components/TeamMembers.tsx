import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { members } from '@/lib/members'

const TeamMembers = () => {
  return (
    <div className="relative z-10 w-full px-4 sm:px-8 lg:px-16 pb-24">
      {/* Section heading */}
      <div className="max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Syne']">
          <span className="text-violet-500">Tim </span>
          <span className="text-white">Kami</span>
        </h2>
        <p className="mt-4 text-white/50 text-sm sm:text-base max-w-lg mx-auto">
          Profesional berpengalaman yang berdedikasi untuk menghadirkan solusi terbaik bagi setiap klien.
        </p>
      </div>

      {/* Cards grid */}
      <div className="max-w-[1500px] mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-7">
        {members.map((member) => (
          <Link
            key={member.slug}
            href={`/about/${member.slug}`}
            className="group flex flex-col rounded-2xl overflow-hidden bg-black transition-all duration-300 hover:-translate-y-1"
          >
            {/* Photo */}
            <div className="relative w-full aspect-3/4 overflow-hidden bg-white/5">
              <Image
                src={member.photo}
                alt={member.name}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              {/* Specialty badge */}
              <div className="absolute top-3 left-3">
                <span className="text-[10px] sm:text-xs text-violet-300 font-semibold bg-black/60 backdrop-blur-sm px-2.5 py-1 rounded-full border border-violet-500/30">
                  {member.specialty}
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-4 flex flex-col gap-3 flex-1">
              {/* Name & Role */}
              <div>
                <p className="text-[10px] sm:text-xs text-white/40 uppercase tracking-widest mb-0.5">{member.role}</p>
                <h3 className="text-white font-bold text-sm sm:text-base font-['Syne']">{member.name}</h3>
              </div>

              {/* Meta */}
              <div className="flex flex-col gap-1.5 mt-auto">
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <svg className="w-3.5 h-3.5 shrink-0 text-violet-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                  <span className="truncate">{member.company}</span>
                </div>
                <div className="flex items-center gap-2 text-white/50 text-xs">
                  <svg className="w-3.5 h-3.5 shrink-0 text-violet-400" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
                  </svg>
                  <span>{member.experience}</span>
                </div>
              </div>

              {/* View profile hint — visible on hover */}
              <div className="flex items-center gap-1 text-[10px] text-violet-400/0 group-hover:text-violet-400 transition-colors duration-200 mt-1">
                <span>Lihat Profil</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TeamMembers
