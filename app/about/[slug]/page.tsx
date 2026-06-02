import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { members } from '@/lib/members'
import Footer from '@/components/Footer';

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return members.map((m) => ({ slug: m.slug }))
}

export default async function MemberBioPage({ params }: Props) {
  const { slug } = await params
  const member = members.find((m) => m.slug === slug)
  if (!member) notFound()

  return (
    <div className="relative pt-2 lg:pt-6 min-h-screen bg-white text-gray-900 overflow-hidden">

      {/* Subtle violet aura top-right */}
      <div className="pointer-events-none absolute right-0 top-0 w-[500px] h-[400px] bg-violet-100/60 blur-[120px] rounded-full" />
      <div className="pointer-events-none absolute left-0 bottom-1/3 w-[350px] h-[350px] bg-purple-50/80 blur-[100px] rounded-full" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 pt-20 pb-24">

        {/* === HEADER === */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-center mb-10">
          {/* Avatar */}
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 rounded-full overflow-hidden ring-4 ring-violet-500/30 shadow-lg shadow-violet-100 shrink-0">
            <Image
              src={member.photo}
              alt={member.name}
              fill
              className="object-cover object-top"
            />
          </div>

          {/* Info */}
          <div className="flex-1">
            <span className="inline-block mb-2 text-xs font-semibold text-violet-700 bg-violet-50 border border-violet-200 rounded-full px-3 py-1">
              {member.specialty}
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-['Syne'] text-gray-900">{member.name}</h1>
            <p className="text-gray-500 text-sm mt-1">{member.role} · {member.company}</p>

            {/* Location + experience */}
            <div className="flex flex-wrap gap-4 mt-3">
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <svg className="w-3.5 h-3.5 text-violet-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"/>
                </svg>
                {member.location}
              </div>
              <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                <svg className="w-3.5 h-3.5 text-violet-500 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"/>
                </svg>
                {member.experience}
              </div>
            </div>

            {/* Social */}
            <div className="flex gap-2 mt-4">
              {member.instagram && (
                <a href={member.instagram} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50 transition-all duration-200">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="3.5"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                  </svg>
                </a>
              )}
              {member.linkedin && (
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 hover:text-violet-600 hover:border-violet-300 hover:bg-violet-50 transition-all duration-200">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                    <rect x="2" y="9" width="4" height="12"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-100 mb-10" />

        {/* === GRID: About + sidebar === */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* LEFT: About, Experiences, Educations */}
          <div className="lg:col-span-2 flex flex-col gap-10">

            {/* About Me */}
            <section>
              <h2 className="text-lg font-bold font-['Syne'] mb-3 text-gray-900">About Me</h2>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{member.bio}</p>
            </section>

            {/* Experiences */}
            <section>
              <h2 className="text-lg font-bold font-['Syne'] mb-4 text-gray-900">Experiences</h2>
              <div className="flex flex-col gap-3">
                {member.experiences.map((exp, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-violet-200 hover:bg-violet-50/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{exp.position}</p>
                      <p className="text-violet-600 text-xs mt-0.5">{exp.company}</p>
                      <p className="text-gray-400 text-xs mt-1">{exp.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Educations */}
            <section>
              <h2 className="text-lg font-bold font-['Syne'] mb-4 text-gray-900">Educations</h2>
              <div className="flex flex-col gap-3">
                {member.educations.map((edu, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-violet-200 hover:bg-violet-50/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-violet-50 border border-violet-100 flex items-center justify-center shrink-0">
                      <svg className="w-5 h-5 text-violet-500" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-gray-900">{edu.institution}</p>
                      <p className="text-violet-600 text-xs mt-0.5">{edu.major}</p>
                      <p className="text-gray-400 text-xs mt-1">{edu.period}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

          </div>

          {/* RIGHT: sidebar card */}
          <div className="flex flex-col gap-4">
            {/* Contact card */}
            <div className="rounded-2xl bg-gradient-to-br from-violet-600 to-indigo-600 p-6 text-white shadow-lg shadow-violet-200">
              <p className="font-bold text-base font-['Syne'] mb-1">Mari Berkolaborasi</p>
              <p className="text-white/75 text-xs mb-5 leading-relaxed">
                Punya ide proyek luar biasa? Diskusikan kebutuhan bisnis Anda bersama kami dan tim ahli kami.
              </p>
              <Link
                href="/about"
                className="block w-full text-center border border-white/40 text-white text-sm py-2.5 rounded-xl mt-2 hover:bg-white/15 transition-colors duration-200"
              >
                Kenali Anggota Tim Lain
              </Link>
            </div>

            {/* Stats */}
            <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-violet-600">3+</span>
                <span className="text-xs text-gray-400 mt-1">Tahun Pengalaman</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-violet-600">20+</span>
                <span className="text-xs text-gray-400 mt-1">Proyek Selesai</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-violet-600">15+</span>
                <span className="text-xs text-gray-400 mt-1">Klien Puas</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-violet-600">100%</span>
                <span className="text-xs text-gray-400 mt-1">Komitmen</span>
              </div>
            </div>

          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
