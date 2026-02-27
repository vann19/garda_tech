import React from 'react'
import Contact from '@/components/Contact'
import ConfPage from '@/components/contf'
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen bg-hitam overflow-hidden flex flex-col ">
      {/* Contact section — centered vertically in remaining space */}
      <div className="flex-1 flex items-center justify-center pt-24 sm:pt-28 lg:pt-32 pb-8 sm:pb-12 ">
        <Contact />
      </div>
      <ConfPage />
      <Footer />
    </div>
  )
}

export default ContactPage