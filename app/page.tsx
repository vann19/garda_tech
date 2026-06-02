"use client";

import { useEffect } from 'react';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhPage from '@/components/Wh';
import Process from '@/components/Process';
import FaqPage from '@/components/Faq';
import Footer from '@/components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="min-h-screen w-full transition-colors duration-500 bg-white overflow-hidden">
      <Hero />
      
      <div data-aos="fade-up" data-aos-delay="100">
        <Services />
      </div>

      <div data-aos="fade-up">
        <WhPage />
      </div>

      <div data-aos="fade-left">
        <Process />
      </div>

      <div data-aos="fade-right">
        <FaqPage />
      </div>

      <Footer />
    </div>
  );
}