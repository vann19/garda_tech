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
  </Accordion>
</div>
    
    </section>
  )
}


export default FaqPage