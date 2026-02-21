import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-950 flex items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 font-['Syne']">
          404
        </h2>
        <p className="text-xl text-white/70 mb-8">
          Halaman tidak ditemukan
        </p>
        <Link 
          href="/information"
          className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
        >
          Kembali ke Information
        </Link>
      </div>
    </div>
  )
}