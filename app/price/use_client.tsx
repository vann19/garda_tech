"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Kotak() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const designWidth = 1728;
      const designHeight = 1109;
      
      const scaleX = window.innerWidth / designWidth;
      const scaleY = window.innerHeight / designHeight;
      
      const newScale = Math.min(scaleX, scaleY, 1) * (window.innerWidth < 768 ? 0.85 : 1);
      
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-screen h-screen flex justify-center items-center bg-hitam overflow-hidden relative">
      {/* Kode JSX Anda selengkapnya... */}
      {/* ... */}
    </div>
  );
}