import React, { memo } from "react";
import Link from "next/link";

export const BentoGrid: React.FC = memo(() => {
  return (
    <section className="py-8 sm:py-12 md:py-16 max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-12 overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-14">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-primary mb-3 sm:mb-4 tracking-tight font-display">
          Discover the MRPL Standard
        </h2>
        <p className="text-sm sm:text-base md:text-lg text-text-muted font-light leading-relaxed px-2">
          Curated developments that bridge the gap between established
          institutional reliability and forward-thinking structural design.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-1 md:grid-rows-2 gap-4 sm:gap-6 h-auto md:h-[600px]">
        {/* Large Featured Plot Image (Left Side) */}
        <Link
          href="/plots"
          className="md:col-span-8 md:row-span-2 relative rounded-2xl sm:rounded-[32px] overflow-hidden group cursor-pointer h-[340px] sm:h-[420px] md:h-full border border-border-light shadow-md"
        >
          <picture className="w-full h-full">
            <source srcSet="/prime-residential-plot.webp" type="image/webp" />
            <img
              src="/prime-residential-plot.jpg"
              alt="Aerial view of prime residential plots"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 via-secondary/10 to-transparent"></div>
          <div className="absolute bottom-5 left-5 right-5 sm:bottom-10 sm:left-10 sm:right-10 z-10">
            <span className="inline-block bg-white/20 backdrop-blur-md px-2.5 py-1 sm:px-3 sm:py-1 rounded-md text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-widest mb-2 sm:mb-4 border border-white/30">
              Featured Land
            </span>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-3 font-display leading-tight">
              Prime Residential Plots
            </h3>
            <p className="text-white/90 font-light max-w-lg mb-3 sm:mb-6 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
              Secure your foundation in our master-planned communities designed
              for enduring value and architectural freedom.
            </p>
            <span className="inline-flex items-center text-xs sm:text-sm font-bold text-white uppercase tracking-widest group-hover:text-secondary transition-colors">
              Explore Plots{" "}
              <span className="material-symbols-outlined ml-1.5 sm:ml-2 text-base sm:text-lg">
                arrow_forward
              </span>
            </span>
          </div>
        </Link>

        {/* Signature Projects Card (Top Right) */}
        <Link
          href="/duplex-projects"
          className="md:col-span-4 md:row-span-1 bg-surface-alt rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 flex flex-col justify-between border border-border-light/50 hover:border-secondary/30 transition-colors group cursor-pointer shadow-sm"
        >
          <div className="flex justify-between items-start mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-card-bg rounded-full flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-secondary text-xl sm:text-2xl">
                apartment
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold text-secondary uppercase tracking-widest bg-secondary/10 px-2.5 py-1 rounded-full">
              Ongoing
            </span>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 sm:mb-3 font-display">
              Signature Projects
            </h3>
            <p className="text-text-muted font-light leading-relaxed text-xs sm:text-sm">
              Explore our portfolio of completed and ongoing duplex
              developments.
            </p>
          </div>
        </Link>

        {/* Luxury Duplex Villas Card (Bottom Right) */}
        <Link
          href="/duplex-projects"
          className="md:col-span-4 md:row-span-1 bg-secondary rounded-2xl sm:rounded-[32px] p-5 sm:p-8 md:p-10 flex flex-col justify-between text-white relative overflow-hidden group cursor-pointer shadow-xl shadow-secondary/20"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/4 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary opacity-5 rounded-full translate-y-1/3 -translate-x-1/4"></div>
          <div className="relative z-10 flex justify-between items-start mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl sm:text-2xl">
                home_work
              </span>
            </div>
          </div>
          <div className="relative z-10">
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-white font-display">
              Luxury Duplex Series
            </h3>
            <p className="text-white/90 font-light leading-relaxed text-xs sm:text-sm">
              Bespoke duplex residences featuring Italian marble, double-height
              ceilings, and private terraces.
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
});

BentoGrid.displayName = "BentoGrid";
