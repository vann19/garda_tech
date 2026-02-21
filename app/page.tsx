'use client';

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';
import CardSlug from '@/components/CardSlug';
import WhPage from '@/components/Wh';
import FaqPage from '@/components/Faq';
import ContactPage from '@/components/Contact';
import FooterPage from '@/components/footer'; 

enum PageView {
  Home = 'home',
  // Add other views as needed
}

export default function Home() {
 

  // Auto scroll to sections based on currentView
 

  return (
<<<<<<< HEAD
    <div className="min-h-screen transition-colors duration-500 bg-hitam ">
      <Navbar />
=======
    <div className="min-h-screen transition-colors duration-500 bg-hitam">
      <Navbar currentView ={currentView} setView={setCurrentView} />
>>>>>>> feature/service
      <Hero />
      <CardSlug />
      <WhPage />
      <FaqPage />
      <ContactPage />
      <FooterPage />
    </div>
  );
}