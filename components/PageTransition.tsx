'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export default function PageTransition() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Reset: show overlay on every route change
    setFadeOut(false)
    setVisible(true)

    const fadeTimer = setTimeout(() => {
      setFadeOut(true)
    }, 900) // loading time

    const hideTimer = setTimeout(() => {
      setVisible(false)
    }, 1400) // after fade-out finishes

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(hideTimer)
    }
  }, [pathname])

  if (!visible) return null

  return (
    <div
      className="fixed inset-0 z-9999 flex flex-col items-center justify-center bg-black transition-opacity duration-500"
      style={{ opacity: fadeOut ? 0 : 1, pointerEvents: fadeOut ? 'none' : 'all' }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">
        <Image
          src="/img/logo.png"
          alt="Garda Tech"
          width={48}
          height={48}
          className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
          priority
        />
        <span className="text-white text-2xl sm:text-3xl font-bold font-['Syne'] tracking-tight">
          Garda Tech
        </span>
      </div>

      {/* Loading bar */}
      <div className="w-40 sm:w-56 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#6a29ff] rounded-full"
          style={{
            animation: 'loadBar 0.85s ease-out forwards',
          }}
        />
      </div>

      <style>{`
        @keyframes loadBar {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  )
}
