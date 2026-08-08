import type { Metadata } from "next";
import React from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { PlotShowcaseCard } from "@/components/features/PlotShowcaseCard";
import { PLOTS_DATA } from "@/data/plots";
import { TrustIndicators } from "@/components/features/TrustIndicators";

export const metadata: Metadata = {
  title: "Available Residential & Duplex Plots in Bhubaneswar",
  description:
    "Verified plot inventory in Atala, Balianta, Bhubaneswar featuring 40ft blacktop avenues, clear legal titles, and immediate registry availability.",
  openGraph: {
    title: "Available Plots in Atala, Bhubaneswar | Meadowlark Realcon",
    description:
      "Verified residential and duplex plot inventory in Atala, Balianta, Bhubaneswar featuring 40ft blacktop avenues and immediate registry.",
  },
};

export default function PlotsPage() {
  const highlights = [
    { icon: "verified", text: "Master-Planned Layout" },
    { icon: "add_road", text: "40ft Blacktop Avenues" },
    { icon: "electric_bolt", text: "Underground Utilities" },
    { icon: "description", text: "Immediate Registry" },
  ];

  return (
    <div className="space-y-16 py-12 px-4 sm:px-6 md:px-12 max-w-[1440px] mx-auto">
      {/* Page Header */}
      <section className="text-center max-w-4xl mx-auto space-y-6">
        <SectionHeader
          subtitle="Master-Planned Inventory"
          title="Available Residential & Duplex Plots"
          description="Verified plot inventory in Atala, Balianta, Bhubaneswar with 40ft blacktop avenues, clear legal titles, and immediate registry availability."
          centered
        />

        {/* Highlight Pills Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {highlights.map((item, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 bg-surface-alt/80 text-primary font-bold text-xs px-4 py-2 rounded-full border border-border-light/60 shadow-2xs"
            >
              <span className="material-symbols-outlined text-[18px] text-secondary">
                {item.icon}
              </span>
              {item.text}
            </span>
          ))}
        </div>
      </section>

      {/* Dedicated Plot Showcase List (Horizontal Split Layout Cards) */}
      <section className="space-y-10">
        {PLOTS_DATA.map((plot, index) => (
          <PlotShowcaseCard key={plot.id} plot={plot} index={index} />
        ))}
      </section>

      {/* Trust & Guarantee Section */}
      <TrustIndicators />
    </div>
  );
}
