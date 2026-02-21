"use client";

import { useState } from 'react';
import Image from "next/image";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All' },
    { id: 'website', name: 'Website' },
    { id: 'mobile', name: 'Mobile App' },
    { id: 'design', name: 'UI/UX Design' },
    { id: 'brand', name: 'Brand Identity' }
  ];

  const projects = [
    {
      id: 1,
      title: "Ramadhan Kareem",
      description: "Selamat menunaikan ibadah puasa blaba danadanajsnduyashindajhgfvvgb fryguhjhgfdrsew.",
      category: "design",
      image: "/img/project1.jpg"
    },
    {
      id: 2,
      title: "Ramadhan Kareem",
      description: "Selamat menunaikan ibadah puasa blaba danadanajsnduyashindajhgfvvgb fryguhjhgfdrsew.",
      category: "website",
      image: "/img/project2.jpg"
    },
    {
      id: 3,
      title: "Ramadhan Kareem",
      description: "Selamat menunaikan ibadah puasa blaba danadanajsnduyashindajhgfvvgb fryguhjhgfdrsew.",
      category: "mobile",
      image: "/img/project3.jpg"
    }
  ];

  return (
    <div className="w-screen min-h-screen relative bg-black overflow-hidden">
      {/* Background blur effects */}
      <div className="absolute w-[1829px] h-[1623px] right-[-51px] top-[917px] bg-indigo-900 rounded-full blur-[80.20px] opacity-50"></div>
      <div className="absolute w-[1601px] h-[1588px] right-[73px] top-[1136px] bg-violet-500 rounded-full blur-[80.20px] opacity-50"></div>
      <div className="absolute w-[1215px] h-[1327px] right-[266px] top-[1315px] bg-purple-300 rounded-full blur-[80.20px] opacity-50"></div>
      
      {/* Portfolio Button */}
      <div className="relative z-10 w-full pt-20 lg:pt-24 px-4 lg:px-8">
        <div className="flex justify-center">
          <div className="relative w-[200px] md:w-[240px] lg:w-[288px] h-[60px] md:h-[70px] lg:h-[96px] transform rotate-[3.80deg]">
            <div className="w-full h-full bg-violet-800/60 rounded-[57px] shadow-[inset_-1px_-1px_47.80px_rgba(208,186,232,0.80)] border-4 border-violet-500/95 flex items-center justify-center">
              <span className="text-white text-lg md:text-xl lg:text-2xl font-bold font-['Syne']">Our Portfolio</span>
            </div>
          </div>
        </div>

        {/* Title */}
        <div className="text-center mt-12 md:mt-16 lg:mt-20">
          <span className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-['Syne'] block">Proof in Every Project.</span>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mt-10 md:mt-12 lg:mt-16 max-w-4xl mx-auto">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 text-sm md:text-base rounded-full transition-all ${
                activeFilter === filter.id
                  ? 'bg-violet-600 text-white border-violet-400'
                  : 'bg-transparent text-white/70 border border-purple-300/30 hover:bg-white/10'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="relative z-10 w-full mt-10 md:mt-12 lg:mt-16 px-4 sm:px-6 lg:px-8 pb-20">
        {/* Mobile Layout (1 column) */}
        <div className="block md:hidden">
          <div className="flex flex-col items-center gap-6">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>

        {/* Tablet Layout (2 columns) */}
        <div className="hidden md:block lg:hidden">
          <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout (3 columns) */}
        <div className="hidden lg:block">
          <div className="flex justify-center gap-6 flex-wrap">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                width="w-[380px] xl:w-[400px]"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// Komponen Project Card
function ProjectCard({ title, description, image, width = "w-full", className = "" }) {
  return (
    <div className={`${width} ${className} bg-white/5 backdrop-blur-sm rounded-[30px] border-2 border-purple-300 overflow-hidden hover:border-violet-400 transition-all duration-300 group`}>
      {/* Image Container */}
      <div className="relative w-full h-[200px] md:h-[220px] lg:h-[250px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Category Badge */}
        <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-violet-600/80 backdrop-blur-sm rounded-full border border-violet-400">
          <span className="text-white text-xs font-['Inter']">Featured</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        {/* Title */}
        <h3 className="text-violet-400 text-xl md:text-2xl font-bold font-['Syne'] mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="text-white/80 text-sm md:text-base font-['Inter'] leading-relaxed mb-4">
          {description}
        </p>

        {/* View Project Button */}
        <button className="w-full py-3 bg-black/60 rounded-[57px] border-2 border-indigo-900 flex items-center justify-center gap-2 cursor-pointer hover:bg-black/80 transition-all group">
          <span className="text-violet-500 text-sm font-bold font-['Syne']">View Project</span>
          <svg className="w-4 h-4 text-violet-500 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}