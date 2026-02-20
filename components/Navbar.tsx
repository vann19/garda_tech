"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#process", label: "Our Process" },
    { href: "#portfolio", label: "Portfolio" },
    { href: "#pricing", label: "Pricing" },
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className={`bg-hitam shadow-md sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "shadow-lg" : ""
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 z-10">
            <Image
              src="/img/logo.png"
              alt="Garda Tech Logo"
              width={36}
              height={36}
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
            <span className="text-lg sm:text-xl font-bold font-sans text-white">
              Garda Tech
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex">
            <li>
              <div className="relative h-14 flex items-center">
                {/* Pill background */}
                <div className="absolute inset-0 bg-black rounded-[33.50px] border border-white backdrop-blur-md" />
                <div className="relative flex items-center gap-1 px-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="px-3 py-1 text-white text-base font-bold font-['Syne'] hover:text-primary whitespace-nowrap transition-colors duration-200"
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
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg transition-colors font-semibold text-sm"
            >
              Contact Us
            </Link>
          </div>

          {/* Hamburger Button — mobile & tablet */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] z-10 group"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[7px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-[2px] bg-white rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
              }`}
            />
          </button>
        </div>

        {/* Mobile & Tablet Dropdown Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-black/95 border-t border-white/10 backdrop-blur-md px-4 pb-6 pt-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="block px-4 py-3 text-white text-base font-bold font-['Syne'] hover:text-primary hover:bg-white/5 rounded-lg transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile CTA */}
            <div className="mt-4 px-4">
              <Link
                href="#contact"
                onClick={closeMenu}
                className="block w-full text-center bg-primary hover:bg-primary-dark text-white px-5 py-3 rounded-lg transition-colors font-semibold text-sm"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay backdrop when menu is open */}
      {menuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/40 z-40"
          onClick={closeMenu}
        />
      )}
    </>
  );
};

export default Navbar;