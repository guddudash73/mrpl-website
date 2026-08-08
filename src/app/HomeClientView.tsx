"use client";

import React from "react";
import Link from "next/link";
import { HeroSlideshow } from "@/components/features/HeroSlideshow";
import { BentoGrid } from "@/components/features/BentoGrid";
import { TrustIndicators } from "@/components/features/TrustIndicators";
import { PlotCard } from "@/components/features/PlotCard";
import { ProjectCard } from "@/components/features/ProjectCard";
import { PLOTS_DATA } from "@/data/plots";
import { PROJECTS_DATA } from "@/data/projects";
import { useAppDispatch } from "@/store/hooks";
import { openSiteVisitModal } from "@/store/modalSlice";

export function HomeClientView() {
  const dispatch = useAppDispatch();

  const featuredPlots = PLOTS_DATA.filter((p) => p.isFeatured).slice(0, 3);
  const featuredProjects = PROJECTS_DATA.filter((p) => p.isSignature).slice(
    0,
    2,
  );

  return (
    <div className="pb-16">
      {/* 1. Hero Section - Full Screen Viewport Container */}
      <section className="relative bg-surface min-h-[calc(100dvh-61px)] sm:min-h-[calc(100vh-85px)] md:min-h-[calc(100vh-87px)] flex flex-col justify-center py-4 sm:py-8 md:py-10 overflow-hidden">
        {/* Ambient Theme Glow Backdrops (Refined for Mobile & Dark Mode) */}
        <div className="absolute -top-20 -left-20 sm:-top-32 sm:-left-32 w-[280px] h-[280px] sm:w-[550px] sm:h-[550px] rounded-full bg-secondary/10 dark:bg-secondary/8 blur-[80px] sm:blur-[120px] pointer-events-none z-0"></div>
        <div className="absolute -bottom-20 right-0 sm:-bottom-32 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] rounded-full bg-secondary/8 dark:bg-secondary/6 blur-[90px] sm:blur-[140px] pointer-events-none z-0"></div>
        <div className="hidden sm:block absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-secondary/8 dark:bg-secondary/6 blur-[100px] pointer-events-none z-0"></div>

        {/* Architectural Dot Mesh Backdrop */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--color-border-light)_1px,transparent_1px)] [background-size:28px_28px] opacity-60 dark:opacity-30 pointer-events-none z-0"></div>

        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-8 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10 lg:gap-16 items-center relative z-10">
          {/* Text Content */}
          <div className="relative z-10 order-2 lg:order-1">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 bg-surface-alt text-[10px] sm:text-xs font-bold text-secondary uppercase tracking-[0.2em] sm:tracking-[0.25em] px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 sm:mb-6 border border-secondary/20 shadow-sm">
              <span className="material-symbols-outlined text-[14px] sm:text-[16px]">
                architecture
              </span>
              Building Legacies
            </span>

            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[72px] font-bold text-primary mb-4 sm:mb-6 leading-[1.12] sm:leading-[1.08] tracking-tight font-display text-balance">
              Modern Heritage, <br />
              <span className="text-secondary font-medium">
                Timeless Structures.
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-text-muted mb-6 sm:mb-10 max-w-xl font-light leading-relaxed">
              Discover premium residential plots and architectural masterpieces
              designed with uncompromising craftsmanship and institutional
              reliability.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link
                href="/duplex-projects"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 sm:px-7 sm:py-4 bg-secondary text-white rounded-xl text-xs font-bold tracking-wider hover:bg-secondary-light transition-colors shadow-lg shadow-secondary/20"
              >
                Explore Projects
              </Link>
              <Link
                href="/plots"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 sm:px-7 sm:py-4 bg-card-bg border border-border-light text-primary rounded-xl text-xs font-bold tracking-wider hover:bg-surface-alt hover:border-primary transition-colors"
              >
                View Available Plots
              </Link>
            </div>
          </div>

          {/* Hero Image Slideshow Container (Top on Mobile, Right on Desktop) */}
          <div className="order-1 lg:order-2 w-full">
            <HeroSlideshow />
          </div>
        </div>
      </section>

      {/* 3. Discover the MRPL Standard (Asymmetric Bento Grid) */}
      <BentoGrid />

      {/* 4. Refined Trust Indicators */}
      <TrustIndicators />

      {/* 5. Investment Potential Section (Why Bhubaneswar?) */}
      <section className="py-20 bg-surface px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-none bg-border-light/30 relative flex items-center justify-center">
              <picture className="w-full h-full">
                <source srcSet="/investment-bhubaneswar.webp" type="image/webp" />
                <img
                  src="/investment-bhubaneswar.jpg"
                  alt="Investment Potential"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </picture>
              <div className="absolute inset-0 bg-primary/5 mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-56 h-56 border border-secondary/20 rounded-full -z-10 hidden md:block"></div>
          </div>

          <div className="lg:col-span-7 lg:pl-10">
            <span className="inline-block text-[10px] font-bold text-secondary uppercase tracking-[0.25em] mb-4">
              Investment Potential
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-[1.1] tracking-tight font-display">
              Why Invest in
              <br />
              Bhubaneswar?
            </h2>
            <p className="text-base md:text-lg text-text-muted font-light leading-relaxed mb-10 max-w-2xl">
              As a designated Smart City and emerging IT hub, Bhubaneswar offers
              an unprecedented window for real estate appreciation. The
              synthesis of robust infrastructure planning and preserved natural
              beauty makes land acquisition here a visionary step.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-1">
                  trending_up
                </span>
                <div>
                  <h4 className="text-base font-bold text-primary mb-1 font-display">
                    High Appreciation
                  </h4>
                  <p className="text-text-muted font-light text-sm leading-relaxed">
                    Consistent year-over-year value growth driven by commercial
                    expansion.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-1">
                  account_balance
                </span>
                <div>
                  <h4 className="text-base font-bold text-primary mb-1 font-display">
                    Smart City Infra
                  </h4>
                  <p className="text-text-muted font-light text-sm leading-relaxed">
                    Pioneering urban development with a focus on sustainable
                    living.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Featured Developments Section */}
      <section
        className="py-12 md:py-20 max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-12"
        id="projects"
      >
        <div className="bg-surface-alt rounded-3xl sm:rounded-[40px] p-4 sm:p-8 md:p-12 border border-border-light/60">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-14 border-b border-border-light pb-6 md:pb-8">
            <div className="max-w-3xl">
              <span className="inline-block text-[10px] font-bold text-secondary uppercase tracking-[0.25em] mb-4">
                Curated Portfolio
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight font-display">
                Featured Developments
              </h2>
            </div>
            <Link
              href="/plots"
              className="hidden md:inline-flex items-center text-[11px] font-bold text-primary uppercase tracking-[0.2em] hover:text-secondary transition-colors shrink-0 mb-2"
            >
              View All Projects{" "}
              <span className="material-symbols-outlined ml-2 text-[16px]">
                arrow_forward
              </span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 lg:gap-12">
            {featuredPlots.slice(0, 2).map((plot) => (
              <PlotCard key={plot.id} plot={plot} />
            ))}
          </div>
        </div>
      </section>

      {/* 7. Signature Duplex Projects Showcase */}
      <section className="py-16 px-6 md:px-12 max-w-[1440px] mx-auto w-full">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block text-[10px] font-bold text-secondary uppercase tracking-[0.25em] mb-4">
            Architectural Excellence
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-primary font-display">
            Signature Duplex Residences
          </h2>
          <p className="text-text-muted font-light text-base md:text-lg mt-4">
            Crafted with European precision, spacious layouts, and modern
            interior aesthetic.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* 8. Call to Action Banner */}
      <section className="max-w-[1440px] mx-auto w-full px-6 md:px-12 my-12">
        <div className="bg-surface-alt border border-border-light/60 rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-lg transition-colors duration-300">
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <span className="text-xs font-bold text-secondary uppercase tracking-[0.25em]">
              Schedule Your Private Transport
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display leading-tight text-primary">
              Ready to Secure Your Piece of Bhubaneswar?
            </h2>
            <p className="text-text-muted font-light text-base md:text-lg">
              Connect with our senior relationship managers to receive full project
              information, layout plans, and legal title details.
            </p>
            <div className="pt-4 flex justify-center gap-4 flex-wrap">
              <button
                onClick={() => dispatch(openSiteVisitModal())}
                className="inline-flex items-center justify-center px-8 py-4 bg-secondary text-white rounded-lg text-xs font-bold tracking-wider hover:bg-secondary-light transition-colors shadow-lg cursor-pointer"
              >
                Get Project Information
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-card-bg border border-border-light text-primary rounded-lg text-xs font-bold tracking-wider hover:bg-surface transition-colors"
              >
                Contact Corporate Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
