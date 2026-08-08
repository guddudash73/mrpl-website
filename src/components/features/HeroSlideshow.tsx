'use client';

import React, { useState, useEffect, useCallback } from 'react';

const HERO_SLIDES = [
  {
    id: 1,
    image: '/hero-slide-1.jpg',
    title: 'Signature Duplex Residences',
    subtitle: 'European Architectural Mastery',
    badgeCategory: 'Premium Plots',
    badgeValue: '50+ Acres',
    icon: 'landscape',
  },
  {
    id: 2,
    image: '/hero-slide-3.jpg',
    title: 'Master-Planned Eco Township',
    subtitle: 'Saheed Nagar Prime Corridor',
    badgeCategory: 'Eco Township',
    badgeValue: '120+ Units',
    icon: 'park',
  },
  {
    id: 3,
    image: '/hero-slide-2.jpg',
    title: 'Institutional Commercial Plots',
    subtitle: 'Patia IT Corridor Frontage',
    badgeCategory: 'Duplex Residences',
    badgeValue: '24+ Villas',
    icon: 'villa',
  },
];

export const HeroSlideshow: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4500);

    return () => clearInterval(interval);
  }, [nextSlide, isHovered]);

  const activeSlide = HERO_SLIDES[currentIndex];

  return (
    <div
      className="relative h-[340px] sm:h-[440px] lg:h-[580px] w-full rounded-3xl sm:rounded-[40px] overflow-hidden shadow-xl border border-border-light group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-primary/10 z-10 pointer-events-none rounded-3xl sm:rounded-[40px]"></div>

      {/* Image Slides */}
      {HERO_SLIDES.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <picture className="w-full h-full">
              <source srcSet={slide.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
              <img
                src={slide.image}
                alt={slide.title}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
            </picture>
          </div>
        );
      })}

      {/* Slide Navigation Arrows (Visible on Hover / Focus) */}
      <div className="absolute inset-x-4 sm:inset-x-6 top-1/2 -translate-y-1/2 z-20 flex justify-between items-center pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-card-bg/80 backdrop-blur-md border border-border-light flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all pointer-events-auto cursor-pointer shadow-lg"
        >
          <span className="material-symbols-outlined text-base sm:text-lg">chevron_left</span>
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-card-bg/80 backdrop-blur-md border border-border-light flex items-center justify-center text-primary hover:bg-secondary hover:text-white transition-all pointer-events-auto cursor-pointer shadow-lg"
        >
          <span className="material-symbols-outlined text-base sm:text-lg">chevron_right</span>
        </button>
      </div>

      {/* Bottom Left Floating Badge */}
      <div className="absolute bottom-3 left-3 sm:bottom-8 sm:left-8 z-20 bg-card-bg/95 backdrop-blur-md p-3 sm:p-5 rounded-xl sm:rounded-2xl shadow-xl border border-border-light flex items-center gap-2.5 sm:gap-4 transition-all duration-500 max-w-[calc(100%-110px)] sm:max-w-none">
        <div className="w-9 h-9 sm:w-12 sm:h-12 bg-secondary/15 rounded-xl sm:rounded-2xl flex items-center justify-center text-secondary shrink-0">
          <span className="material-symbols-outlined text-xl sm:text-2xl">
            {activeSlide.icon}
          </span>
        </div>
        <div className="overflow-hidden">
          <p className="text-[9px] sm:text-[10px] font-bold text-text-muted uppercase tracking-widest mb-0.5 truncate">
            {activeSlide.badgeCategory}
          </p>
          <p className="text-sm sm:text-xl md:text-2xl font-bold text-primary font-display truncate">
            {activeSlide.badgeValue}
          </p>
        </div>
      </div>

      {/* Top Right on Mobile, Bottom Right on Desktop Slide Progress Bar */}
      <div className="absolute top-3 right-3 sm:top-auto sm:bottom-8 sm:right-8 z-20 bg-card-bg/90 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-full shadow-lg border border-border-light flex items-center gap-2 sm:gap-3">
        <span className="text-[10px] sm:text-[11px] font-bold tracking-wider text-primary font-display">
          0{currentIndex + 1} <span className="text-text-muted/60">/ 0{HERO_SLIDES.length}</span>
        </span>
        <div className="flex gap-1 sm:gap-1.5">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? 'w-4 sm:w-6 bg-secondary'
                  : 'w-1.5 sm:w-2 bg-text-muted/30 hover:bg-secondary/50'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
