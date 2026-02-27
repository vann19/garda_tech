'use client';

import { useState, useEffect } from 'react';

import Hero from '@/components/Hero';
import CardSlug from '@/components/CardSlug';
import WhPage from '@/components/Wh';
import FaqPage from '@/components/Faq';
import Footer from '@/components/Footer';


enum PageView {
  Home = 'home',
  // Add other views as needed
}

export default function Home() {
 

  // Auto scroll to sections based on currentView
 

  return (

    <div className="min-h-screen w-full transition-colors duration-500 bg-hitam ">
      <Hero />
      <CardSlug />
      <WhPage />
      <FaqPage />
      <Footer />
    </div>
  );
}