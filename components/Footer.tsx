import React from 'react'
import Image from 'next/image'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative bg-black text-white overflow-hidden">

      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#6a29ff]/60 to-transparent" />

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">

          {/* Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/img/logo.png"
                alt="Garda Tech Logo"
                width={36}
                height={36}
                className="w-9 h-9 object-contain shrink-0"
              />
              <span className="text-xl font-bold tracking-tight">Garda Tech</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[240px]">
              Solusi teknologi profesional yang dibangun dengan presisi, dan dipercaya oleh klien.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-1">
              {[
                {
                  label: 'Instagram',
                  href: '#',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                      <circle cx="12" cy="12" r="3.5"/>
                      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  href: '#',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                      <rect x="2" y="9" width="4" height="12"/>
                      <circle cx="4" cy="4" r="2"/>
                    </svg>
                  ),
                },
                {
                  label: 'WhatsApp',
                  href: '#',
                  icon: (
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M11.994 2C6.477 2 2 6.477 2 11.994c0 1.99.576 3.842 1.57 5.403L2 22l4.75-1.546A9.954 9.954 0 0 0 11.994 22C17.511 22 22 17.511 22 11.994S17.511 2 11.994 2z"/>
                    </svg>
                  ),
                },
              ].map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#6a29ff]/60 hover:bg-[#6a29ff]/10 transition-all duration-200"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Layanan */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">Layanan</h4>
            <ul className="space-y-3">
              {['Web Development', 'UI/UX Design', 'Mobile App', 'Konsultasi IT', 'Maintenance'].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-sm text-white/55 hover:text-white transition-colors duration-150 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#6a29ff] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Perusahaan */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">Perusahaan</h4>
            <ul className="space-y-3">
              {[
                { label: 'Tentang Kami', href: '#about' },
                { label: 'Portfolio', href: '#portfolio' },
                { label: 'Harga', href: '#pricing' },
                { label: 'Kontak', href: '#contact' },
                { label: 'FAQ', href: '#faq' },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a href={href} className="text-sm text-white/55 hover:text-white transition-colors duration-150 flex items-center gap-2 group">
                    <span className="w-1 h-1 rounded-full bg-[#6a29ff] opacity-0 group-hover:opacity-100 transition-opacity duration-150" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontak & Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30">Hubungi Kami</h4>
            <ul className="space-y-3 mb-2">
              <li className="flex items-start gap-2.5 text-sm text-white/55">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#6a29ff]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/></svg>
                gardatech765@gmail.com
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/55">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#6a29ff]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75z"/></svg>
                +62 822-3984-1198
              </li>
              <li className="flex items-start gap-2.5 text-sm text-white/55">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-[#6a29ff]" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0z"/></svg>
                Yogyakarta, Indonesia
              </li>
            </ul>

            {/* Mini newsletter */}
            <div className="mt-1">
              <p className="text-xs text-white/30 mb-2 uppercase tracking-wider">Dapatkan Update</p>
              <div className="flex gap-0 rounded-lg overflow-hidden border border-white/10 focus-within:border-[#6a29ff]/50 transition-colors duration-200">
                <input
                  type="email"
                  placeholder="Email kamu"
                  className="flex-1 bg-white/5 px-3 py-2.5 text-sm text-white placeholder:text-white/25 outline-none min-w-0"
                />
                <button className="px-4 bg-[#6a29ff] hover:bg-[#5520d4] transition-colors duration-200 text-white text-sm font-semibold shrink-0">
                  OK
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/30">
          <p>&copy; {year} Garda Tech. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer