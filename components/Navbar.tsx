"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Dock, { DockItemData } from "@/components/Dock";
import { Home, Info, Compass, Briefcase, Tag, Mail } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Our Process" },
    { href: "/portofolio", label: "Portfolio" },
    { href: "/price", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  const dockItems: DockItemData[] = [
    { href: "/", label: "Home", icon: <Home /> },
    { href: "/about", label: "About", icon: <Info /> },
    { href: "/service", label: "Process", icon: <Compass /> },
    { href: "/portofolio", label: "Portfolio", icon: <Briefcase /> },
    { href: "/price", label: "Pricing", icon: <Tag /> },
    { href: "/contact", label: "Contact", icon: <Mail /> },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-violet-100"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto pl-8 pr-4 sm:pl-0 sm:pr-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <Image
              src="/img/logo2.png"
              alt="Garda Tech Logo"
              width={36}
              height={36}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-bold font-sans text-gray-900">
              Garda Tech
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex">
            <li>
              <div className="relative h-14 flex items-center">
                {/* Pill background */}
                <div className="absolute inset-0 bg-white rounded-[33.50px] border border-gray-200 shadow-sm backdrop-blur-md" />
                <div className="relative flex items-center gap-1 px-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-1 text-gray-700 text-base font-bold font-['Syne'] hover:text-violet-600 whitespace-nowrap transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="glow" size="pill" asChild>
              <Link href="/price">
                Let&apos;s Talk
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </Link>
            </Button>
          </div>

        </div>
      </nav>

      {/* Mobile & Tablet Dock Navigation Overlay */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 pointer-events-none pb-4">
        <Dock 
          items={dockItems}
          panelHeight={60}
          baseItemSize={44}
          magnification={54}
          distance={120}
        />
      </div>
    </>
  );
};

export default Navbar;