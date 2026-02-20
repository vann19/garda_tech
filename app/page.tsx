'use client';

import { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Hero from '@/components/Hero';

enum PageView {
  Home = 'home',
  // Add other views as needed
}

export default function Home() {
  const [currentView, setCurrentView] = useState<PageView>(PageView.Home);

  // Auto scroll to sections based on currentView
  useEffect(() => {
    if (currentView === PageView.Home) {
      window.scrollTo(0, 0);
    } else {
      const element = document.getElementById(currentView);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [currentView]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-hitam">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <Hero />
    </div>
  );
}