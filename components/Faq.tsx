'use client';

import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useLanguage } from "@/context/LanguageContext"

const FaqPage = () => {
  const { lang } = useLanguage();

  const t = {
    id: {
      heading: ['Ada', ' Pertanyaan?'],
      sub: 'Mari Bangun Sesuatu yang Nyata.',
      faqs: [
        { q: 'Layanan apa saja yang Kami tawarkan?', a: 'Kami menawarkan berbagai layanan termasuk pengembangan web, pengembangan aplikasi seluler, desain UI/UX, dan pemasaran digital dan masih banyak lagi.' },
        { q: 'Berapa lama waktu yang dibutuhkan untuk sebuah proyek pada umumnya?', a: 'Jangka waktu pengerjaan suatu proyek bervariasi tergantung pada kompleksitas dan ruang lingkupnya. Biasanya, proyek pembuatan situs web standar membutuhkan waktu 4-8 minggu.' },
        { q: 'Apakah Kami menyediakan dukungan berkelanjutan?', a: 'Ya, kami menawarkan paket dukungan dan pemeliharaan berkelanjutan untuk memastikan proyek Anda terus berjalan lancar setelah diluncurkan.' },
        { q: 'Berapa biaya untuk membuat website?', a: 'Biaya pembuatan website bergantung pada kompleksitas, fitur, dan kebutuhan spesifik proyek Anda. Kami menyediakan paket mulai dari harga terjangkau untuk landing page hingga sistem web custom skala enterprise. Hubungi kami untuk mendapatkan estimasi yang sesuai.' },
        { q: 'Bagaimana proses kerja Garda Tech dari awal hingga akhir?', a: 'Proses kami dimulai dari konsultasi dan analisis kebutuhan, lalu perancangan UI/UX, pengembangan, pengujian, hingga peluncuran. Setiap tahap melibatkan persetujuan klien agar hasil akhir sesuai ekspektasi.' },
        { q: 'Apakah saya bisa meminta revisi pada desain atau fitur?', a: 'Tentu. Setiap paket kami mencakup jumlah revisi tertentu selama proses pengerjaan. Revisi tambahan di luar ketentuan dapat dilakukan dengan biaya yang disepakati bersama.' },
        { q: 'Teknologi apa yang digunakan dalam pengembangan website?', a: 'Kami menggunakan teknologi modern seperti Next.js, React, Laravel, dan Tailwind CSS. Stack teknologi disesuaikan dengan kebutuhan dan skala proyek untuk performa dan maintainability terbaik.' },
        { q: 'Apakah website yang dibuat mobile-friendly?', a: 'Ya, semua website yang kami bangun menggunakan desain responsif sehingga tampil optimal di semua perangkat, baik smartphone, tablet, maupun desktop.' },
        { q: 'Apakah saya mendapatkan akses penuh ke source code proyek?', a: 'Ya, setelah proyek selesai dan pembayaran lunas, Anda mendapatkan kepemilikan penuh atas source code, aset desain, dan semua file yang berkaitan dengan proyek Anda.' },
        { q: 'Bagaimana cara pembayarannya?', a: 'Kami menggunakan sistem pembayaran bertahap: DP di awal untuk memulai proyek, dan pelunasan setelah proyek selesai dan disetujui klien. Metode pembayaran bisa melalui transfer bank atau e-wallet.' },
        { q: 'Apakah Garda Tech bisa menangani proyek dari luar kota?', a: 'Tentu. Kami bekerja secara remote dan telah menangani klien dari berbagai kota di Indonesia. Komunikasi dilakukan via WhatsApp, email, atau video call sesuai kebutuhan.' },
        { q: 'Apakah data dan informasi proyek saya dijaga kerahasiaannya?', a: 'Ya, kami menjaga kerahasiaan semua informasi klien dengan serius. Kami siap menandatangani NDA (Non-Disclosure Agreement) jika diperlukan untuk keamanan proyek Anda.' },
        { q: 'Apakah Garda Tech juga membantu domain dan hosting?', a: 'Ya, kami dapat membantu proses pembelian domain dan setup hosting sesuai kebutuhan proyek Anda. Kami juga bisa melakukan deploy ke hosting/server yang sudah Anda miliki.' },
        { q: 'Bagaimana saya bisa memantau progres pengerjaan proyek?', a: 'Kami memberikan update progres secara berkala melalui WhatsApp atau platform komunikasi yang disepakati. Anda juga bisa meminta demo langsung di setiap milestone pengerjaan.' },
        { q: 'Apa yang membedakan Garda Tech dari jasa pembuatan website lainnya?', a: 'Garda Tech mengutamakan presisi, transparansi, dan hasil yang bisa diandalkan. Kami tidak hanya membangun website, tapi juga memastikan solusi yang kami buat selaras dengan tujuan bisnis jangka panjang klien — dengan komunikasi yang jelas di setiap langkahnya.' },
      ],
    },
    en: {
      heading: ['Have', ' Questions?'],
      sub: "Let's Build Something Real.",
      faqs: [
        { q: 'What services do you offer?', a: 'We offer a wide range of services including web development, mobile app development, UI/UX design, digital marketing, and more.' },
        { q: 'How long does a project typically take?', a: 'Project timelines vary depending on complexity and scope. A standard website project usually takes 4–8 weeks.' },
        { q: 'Do you provide ongoing support?', a: 'Yes, we offer ongoing support and maintenance packages to ensure your project runs smoothly after launch.' },
        { q: 'How much does it cost to build a website?', a: 'Website costs depend on complexity, features, and your specific project requirements. We offer packages from affordable landing pages to enterprise-scale custom web systems. Contact us for a tailored estimate.' },
        { q: "What is Garda Tech's end-to-end work process?", a: 'Our process starts with consultation and analysis, then UI/UX design, development, testing, and launch. Every stage involves client approval to ensure the final result meets expectations.' },
        { q: 'Can I request revisions to the design or features?', a: 'Absolutely. Each package includes a set number of revisions during development. Additional revisions beyond the included amount can be arranged at an agreed cost.' },
        { q: 'What technologies are used for development?', a: "We use modern technologies such as Next.js, React, Laravel, and Tailwind CSS. The tech stack is tailored to your project's needs and scale for the best performance and maintainability." },
        { q: 'Is the website mobile-friendly?', a: 'Yes, all websites we build use responsive design to display perfectly on all devices — smartphones, tablets, and desktops.' },
        { q: 'Will I get full access to the project source code?', a: 'Yes, once the project is complete and fully paid, you receive full ownership of the source code, design assets, and all project-related files.' },
        { q: 'How does the payment process work?', a: 'We use a staged payment system: a down payment upfront to begin the project, and the remainder upon completion and client approval. Payment can be made via bank transfer or e-wallet.' },
        { q: 'Can Garda Tech handle projects from outside the city?', a: 'Of course. We work remotely and have served clients from various cities across Indonesia. Communication is done via WhatsApp, email, or video call as needed.' },
        { q: 'Is my project information kept confidential?', a: "Yes, we take client confidentiality seriously. We are prepared to sign an NDA (Non-Disclosure Agreement) if required for your project's security." },
        { q: 'Does Garda Tech also help with domain and hosting?', a: 'Yes, we can assist with domain registration and hosting setup according to your project needs. We can also deploy to an existing hosting or server you already own.' },
        { q: "How can I track my project's progress?", a: 'We provide regular progress updates via WhatsApp or agreed communication platforms. You can also request a live demo at each project milestone.' },
        { q: 'What sets Garda Tech apart from other web development agencies?', a: "Garda Tech prioritizes precision, transparency, and reliable results. We don't just build websites — we ensure the solutions we create align with your long-term business goals, with clear communication at every step." },
      ],
    },
  }[lang];

  return (
    <section className="w-full py-2 mt-12 pb-24 overflow-visible bg-white animate-slideUp">

      <div className="relative z-10 mt-12 text-center">
        <div className="section-title-wrapper inline-block">
          <h2
            className="font-['Syne'] font-bold text-3xl sm:text-5xl lg:text-6xl animate-title-reveal"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="shimmer-text">{t.heading[0]}</span>
            <span className="text-gray-800">{t.heading[1]}</span>
          </h2>
        </div>
      </div>

      <div>
        <p className="text-center mt-4 text-lg text-gray-400 font-['Inter']">
          {t.sub}
        </p>
      </div>

      <div className="mx-auto mt-12 text-gray-900 w-full max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-[1500px] px-4">
        <Accordion type="single" collapsible>
          {t.faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`item-${i + 1}`}
              className={i < t.faqs.length - 1 ? 'border-b border-gray-200' : ''}
            >
              <AccordionTrigger className="text-left font-semibold hover:text-violet-600 transition-colors">
                <div className="flex flex-col gap-1">
                  <span className="text-sm sm:text-base lg:text-xl text-violet-600">{faq.q}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-sm sm:text-base lg:text-lg text-gray-600">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

    </section>
  )
}

export default FaqPage
