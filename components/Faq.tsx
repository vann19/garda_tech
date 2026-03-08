import React from "react"
import { Button } from "./ui/button"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const FaqPage = () => {
  return (
    <section className="w-full py-2 mt-12 pb-24 overflow-visible bg-transparent animate-slideUp ">
       
     <div className="relative z-10 mt-12 text-center">
        <h2 className="font-['Syne'] font-bold text-3xl sm:text-5xl lg:text-6xl">
          <span className="text-violet-800">Have</span>
          <span className="text-white"> Quetions?</span>
        </h2>
    </div>

    <div>
      <p className="text-center mt-4 text-lg text-gray-300">
        Let's Build Something Real.
      </p>
    </div>

   <div
  className="
    mx-auto mt-12 text-white
    w-full
    max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-[1500px]
    px-4
  "
>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Layanan apa saja yang Kami tawarkan?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Kami menawarkan berbagai layanan termasuk pengembangan web, pengembangan aplikasi seluler, desain UI/UX, dan pemasaran digital dan masih banyak lagi.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Berapa lama waktu yang dibutuhkan untuk sebuah proyek pada umumnya?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Jangka waktu pengerjaan suatu proyek bervariasi tergantung pada kompleksitas dan ruang lingkupnya. Biasanya, proyek pembuatan situs web standar membutuhkan waktu 4-8 minggu.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Apakah Kami menyediakan dukungan berkelanjutan?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Ya, kami menawarkan paket dukungan dan pemeliharaan berkelanjutan untuk memastikan proyek Anda terus berjalan lancar setelah diluncurkan.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Berapa biaya untuk membuat website?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Biaya pembuatan website bergantung pada kompleksitas, fitur, dan kebutuhan spesifik proyek Anda. Kami menyediakan paket mulai dari harga terjangkau untuk landing page hingga sistem web custom skala enterprise. Hubungi kami untuk mendapatkan estimasi yang sesuai.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-5">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Bagaimana proses kerja Garda Tech dari awal hingga akhir?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Proses kami dimulai dari konsultasi dan analisis kebutuhan, lalu perancangan UI/UX, pengembangan, pengujian, hingga peluncuran. Setiap tahap melibatkan persetujuan klien agar hasil akhir sesuai ekspektasi.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-6">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Apakah saya bisa meminta revisi pada desain atau fitur?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Tentu. Setiap paket kami mencakup jumlah revisi tertentu selama proses pengerjaan. Revisi tambahan di luar ketentuan dapat dilakukan dengan biaya yang disepakati bersama.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-7">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Teknologi apa yang digunakan dalam pengembangan website?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Kami menggunakan teknologi modern seperti Next.js, React, Laravel, dan Tailwind CSS. Stack teknologi disesuaikan dengan kebutuhan dan skala proyek untuk performa dan maintainability terbaik.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-8">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Apakah website yang dibuat mobile-friendly?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Ya, semua website yang kami bangun menggunakan desain responsif sehingga tampil optimal di semua perangkat, baik smartphone, tablet, maupun desktop.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-9">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Apakah saya mendapatkan akses penuh ke source code proyek?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Ya, setelah proyek selesai dan pembayaran lunas, Anda mendapatkan kepemilikan penuh atas source code, aset desain, dan semua file yang berkaitan dengan proyek Anda.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-10">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Bagaimana cara pembayarannya?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Kami menggunakan sistem pembayaran bertahap: DP di awal untuk memulai proyek, dan pelunasan setelah proyek selesai dan disetujui klien. Metode pembayaran bisa melalui transfer bank atau e-wallet.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-11">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Apakah Garda Tech bisa menangani proyek dari luar kota?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Tentu. Kami bekerja secara remote dan telah menangani klien dari berbagai kota di Indonesia. Komunikasi dilakukan via WhatsApp, email, atau video call sesuai kebutuhan.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-12">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Apakah data dan informasi proyek saya dijaga kerahasiaannya?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Ya, kami menjaga kerahasiaan semua informasi klien dengan serius. Kami siap menandatangani NDA (Non-Disclosure Agreement) jika diperlukan untuk keamanan proyek Anda.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-13">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Apakah Garda Tech juga membantu domain dan hosting?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Ya, kami dapat membantu proses pembelian domain dan setup hosting sesuai kebutuhan proyek Anda. Kami juga bisa melakukan deploy ke hosting/server yang sudah Anda miliki.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-14">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Bagaimana saya bisa memantau progres pengerjaan proyek?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Kami memberikan update progres secara berkala melalui WhatsApp atau platform komunikasi yang disepakati. Anda juga bisa meminta demo langsung di setiap milestone pengerjaan.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-15">
      <AccordionTrigger className="text-left font-semibold">
        <div className="flex flex-col gap-1">
          <span className="text-sm sm:text-base lg:text-xl text-primary">Apa yang membedakan Garda Tech dari jasa pembuatan website lainnya?</span>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Garda Tech mengutamakan presisi, transparansi, dan hasil yang bisa diandalkan. Kami tidak hanya membangun website, tapi juga memastikan solusi yang kami buat selaras dengan tujuan bisnis jangka panjang klien — dengan komunikasi yang jelas di setiap langkahnya.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>
    
    </section>
  )
}


export default FaqPage