"use client";

import React from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { ProjectCard } from "@/components/features/ProjectCard";
import { PROJECTS_DATA } from "@/data/projects";
import { Button } from "@/components/common/Button";
import { useAppDispatch } from "@/store/hooks";
import { openSiteVisitModal } from "@/store/modalSlice";

export function DuplexProjectsClientView() {
  const dispatch = useAppDispatch();

  return (
    <div className="space-y-16 py-12 px-6 md:px-12 max-w-[1440px] mx-auto">
      <SectionHeader
        subtitle="Architectural Showcase"
        title="Signature Duplex Villas"
        description="Premium duplex homes in Atala, Bhubaneswar, designed with elegant architecture, spacious layouts and modern lifestyle amenities."
      />

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PROJECTS_DATA.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Duplex Villa Site Visit / Ownership Journey Section */}
      <section className="bg-surface-alt rounded-[40px] p-8 md:p-16 border border-border-light/60 space-y-10">
        <div className="max-w-3xl space-y-2">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest block">
            HOW IT WORKS
          </span>
          <h3 className="text-3xl md:text-4xl font-bold text-primary font-display">
            Your Future Address Awaits.
          </h3>
          <p className="text-sm md:text-base text-text-muted font-light leading-relaxed">
            Schedule your site visit and take the first step towards owning your duplex.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card-bg p-8 rounded-3xl border border-border-light space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl shrink-0">📍</span>
              <h4 className="text-xl font-bold text-primary font-display">
                Visit the Site
              </h4>
            </div>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed font-light">
              Experience the location, surroundings and project vision in person.
            </p>
          </div>

          <div className="bg-card-bg p-8 rounded-3xl border border-border-light space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl shrink-0">🏡</span>
              <h4 className="text-xl font-bold text-primary font-display">
                Explore Your Home
              </h4>
            </div>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed font-light">
              Get a closer look at the thoughtfully planned spaces, premium features and lifestyle amenities designed to make everyday living more comfortable.
            </p>
          </div>

          <div className="bg-card-bg p-8 rounded-3xl border border-border-light space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl md:text-3xl shrink-0">🔑</span>
              <h4 className="text-xl font-bold text-primary font-display">
                Own Your Key
              </h4>
            </div>
            <p className="text-xs md:text-sm text-text-muted leading-relaxed font-light">
              Book your dream duplex with easy documentation and a seamless ownership journey—from booking to key handover.
            </p>
          </div>
        </div>

        <div className="text-center pt-4">
          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              dispatch(openSiteVisitModal("Duplex Site Visit"))
            }
          >
            Inquire Now
          </Button>
        </div>
      </section>
    </div>
  );
}
