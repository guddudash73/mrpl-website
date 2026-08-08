"use client";

import React from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { TrustIndicators } from "@/components/features/TrustIndicators";
import { Button } from "@/components/common/Button";
import { useAppDispatch } from "@/store/hooks";
import { openSiteVisitModal } from "@/store/modalSlice";

export function AboutClientView() {
  const dispatch = useAppDispatch();

  const milestones = [
    {
      year: "2013",
      title: "Company Inception",
      desc: "Operations started with a vision to revolutionize transparent land acquisition and plotting in Bhubaneswar.",
    },
    {
      year: "2017",
      title: "100+ Acres Handover",
      desc: "Delivered landmark master-planned residential plotting developments across Atala and Saheed Nagar sectors.",
    },
    {
      year: "2020",
      title: "Corporate Incorporation",
      desc: "Officially incorporated Meadowlark Realcon Private Limited (MCA) and launched signature duplex series.",
    },
    {
      year: "2024+",
      title: "Smart Township Era",
      desc: "Pioneering Phase I & Phase II eco-friendly townships with 40ft blacktop avenues and underground cabling.",
    },
  ];

  return (
    <div className="space-y-16 py-12">
      {/* Hero Header */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto text-center">
        <SectionHeader
          subtitle="About Meadowlark Realcon"
          title="Bridging Institutional Trust & Modern Heritage"
          description="MRPL is Bhubaneswar's premier property developer committed to clear titles, master-planned plotting, and luxury duplex residences."
          centered
        />
      </section>

      {/* Brand Story Grid */}
      <section className="px-6 md:px-12 max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest block">
            Our Foundation & Values
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary font-display leading-tight">
            Built on Permanence, Built for Future Generations.
          </h2>
          <p className="text-text-muted text-base font-light leading-relaxed">
            Founded with the explicit mission to eliminate opacity in real
            estate transactions, Meadowlark Realcon Private Limited (MRPL) has
            set gold standards in Bhubaneswar property development. Every plot
            and duplex project we offer undergoes rigorous legal title
            verification, government clearance, and infrastructure provisioning
            before being presented to buyers.
          </p>
          <p className="text-text-muted text-base font-light leading-relaxed">
            Our specialized focus—offering institutional master-planned plots
            and signature duplex villa series—ensures buyers experience total
            confidence, long-term capital appreciation, and uncompromised
            lifestyle quality.
          </p>
          <div className="pt-2">
            <Button
              variant="secondary"
              size="md"
              onClick={() => dispatch(openSiteVisitModal())}
            >
              Book a Consultation
            </Button>
          </div>
        </div>

        <div className="relative h-[450px] rounded-3xl overflow-hidden shadow-2xl border border-border-light">
          <picture className="w-full h-full">
            <source srcSet="/about-foundation.webp" type="image/webp" />
            <img
              src="/about-foundation.jpg"
              alt="MRPL Leadership Vision"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-[80%_center] sm:object-[80%_center]"
            />
          </picture>
        </div>
      </section>

      {/* Growth Milestones */}
      <section className="bg-surface-alt py-16 px-6 md:px-12 rounded-[40px] max-w-[1440px] mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-2">
            Our Legacy
          </span>
          <h3 className="text-3xl font-bold text-primary font-display">
            Over a Decade of Excellence (Since 2013)
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {milestones.map((item, idx) => (
            <div
              key={idx}
              className="bg-card-bg p-6 rounded-2xl border border-border-light shadow-sm space-y-3"
            >
              <span className="text-2xl font-extrabold text-secondary font-display block">
                {item.year}
              </span>
              <h4 className="font-bold text-primary text-base font-display">
                {item.title}
              </h4>
              <p className="text-xs text-text-muted leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Trust Pillars */}
      <TrustIndicators />
    </div>
  );
}
