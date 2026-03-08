"use client";

import React from 'react';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Hero = () => {
  // Constants for better maintainability
  const HERO_TEXTS = {
    firstLine: 'Built with Precision.',
    secondLine: 'Delivered with Trust.',
    description:
      'Detail yang presisi, proses yang transparan, dan hasil yang dapat diandalkan untuk mendukung pertumbuhan jangka panjang.',
  };

  const CTA_BUTTONS = [
    {
      href: '/price',
      label: 'Mulai Proyek',
      variant: 'primary',
      className: 'bg-[#452273] hover:bg-[#32175a] text-white',
    },
    {
      href: '/portofolio',
      label: 'Lihat Portfolio',
      variant: 'outline',
      className: 'bg-transparent border-white/20 text-white hover:bg-white/5',
    },
  ] as const;

  // Responsive spacing classes organized by purpose
  const spacingClasses = {
    section: 'relative w-full h-screen bg-black flex flex-col items-center justify-between pt-[8vh] sm:pt-[10vh] lg:pt-[12vh] pb-0 overflow-hidden',
    container: 'relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8 w-full max-w-5xl mx-auto pt-32 sm:pt-0',
    heading: 'relative w-full font-sans font-bold leading-tight tracking-tight px-2',
    headingSize: 'text-[28px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[72px]',
    description: 'text-white/80 max-w-[90%] sm:max-w-[80%] md:max-w-[700px] lg:max-w-[900px] mx-auto leading-relaxed sm:leading-relaxed lg:leading-loose px-2',
    descriptionSize: 'text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl',
    mobileButtons: 'flex sm:hidden justify-center gap-3 mt-8',
    sectionTitle: 'font-[\'Syne\'] font-bold tracking-wide px-4',
    sectionTitleSize: 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl',
  };

  const imagePositionClasses = {
    wrapper: 'absolute inset-x-0 bottom-0 w-full pointer-events-none animate-fadeIn z-0',
    transform: 'translate-y-1/4 sm:translate-y-1/3 md:translate-y-[38%] lg:translate-y-1/2', // Changed lg to 0 (naik ke atas)
  };

  const bottomSectionClasses = {
    wrapper: 'relative z-10 mt-auto w-full text-center pt-6 sm:pt-10 md:pt-14 lg:pt-24 pb-6 sm:pb-6',
  };

  return (
    <section className={`${spacingClasses.section} grid-kotak`}>
      {/* Top Section: Heading & Subtext */}
      <div className={spacingClasses.container}>
        {/* Heading Container with Typewriter */}
        <div className={`${spacingClasses.heading} ${spacingClasses.headingSize}`}>
          {/* Invisible Static Placeholder for layout stability */}
          <h1 className="invisible pointer-events-none select-none" aria-hidden="true">
            <span className="block text-white">{HERO_TEXTS.firstLine}</span>
            <span className="block text-[#6a29ff] mt-1 sm:mt-2">
              {HERO_TEXTS.secondLine}
            </span>
          </h1>

          {/* Typewriter Animation */}
          <div className="absolute top-0 inset-x-0">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString(
                    `<span style="display:block; color:white;">${HERO_TEXTS.firstLine}</span>`
                  )
                  .pauseFor(500)
                  .typeString(
                    `<span style="display:block; color:#6a29ff; margin-top:0.25rem sm:margin-top:0.5rem;">${HERO_TEXTS.secondLine}</span>`
                  )
                  .pauseFor(3000)
                  .deleteAll(20)
                  .start();
              }}
              options={{
                loop: true,
                delay: 50,
                cursor: '',
              }}
            />
          </div>
        </div>

        {/* Subtext */}
        <p className={`${spacingClasses.description} ${spacingClasses.descriptionSize}`}>
          {HERO_TEXTS.description}
        </p>

        {/* CTA Buttons - Mobile Only */}
        <div className={spacingClasses.mobileButtons}>
          {CTA_BUTTONS.map((button) => (
            <Button
              key={button.href}
              asChild
              className={`rounded-md px-6 transition-colors ${
                button.variant === 'outline'
                  ? 'border border-white/20 hover:bg-white/5'
                  : button.className
              }`}
            >
              <Link href={button.href}>{button.label}</Link>
            </Button>
          ))}
        </div>
      </div>

      {/* Background Image - Now moves up on desktop */}
      <div className={`${imagePositionClasses.wrapper} ${imagePositionClasses.transform}`}>
        <Image
          src="/hole.png"
          alt="Geometric background pattern"
          width={1920}
          height={800}
          className="w-full h-auto object-bottom opacity-80"
          priority
          quality={85}
          sizes="100vw"
          loading="eager"
        />
      </div>

      {/* What We Do Section */}
      <div className={bottomSectionClasses.wrapper}>
        <h2 className={`${spacingClasses.sectionTitle} ${spacingClasses.sectionTitleSize}`}>
          <span className="text-[#6a29ff]">What</span>
          <span className="text-white"> We Do.</span>
        </h2>
      </div>
    </section>
  );
};

export default Hero;