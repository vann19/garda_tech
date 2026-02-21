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
    <section className="w-full py-2 mt-12 overflow-visible bg-transparent animate-slideUp ">
       
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
    max-w-sm sm:max-w-xl md:max-w-2xl lg:max-w-7xl
    px-4
  "
>
  <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger className="text-base  sm:text-lg lg:text-xl font-semibold">
        What services do you offer?
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        We offer a wide range of services including web development, mobile app development, UI/UX design, and digital marketing.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-semibold">
        How long does a typical project take?
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        The timeline for a project varies depending on its complexity and scope. Typically, a standard website project takes 4-8 weeks.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger className="text-base sm:text-lg lg:text-xl font-semibold">
        Do you provide ongoing support?
      </AccordionTrigger>
      <AccordionContent className="text-sm sm:text-base lg:text-lg text-white/80">
        Yes, we offer ongoing support and maintenance packages to ensure your project continues to run smoothly after launch.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
</div>
    
    </section>
  )
}

export default FaqPage