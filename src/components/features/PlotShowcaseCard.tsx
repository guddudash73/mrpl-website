"use client";

import React, { memo } from "react";
import { Plot } from "@/types";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { useAppDispatch } from "@/store/hooks";
import { openSiteVisitModal } from "@/store/modalSlice";

interface PlotShowcaseCardProps {
  plot: Plot;
  index: number;
}

export const PlotShowcaseCard: React.FC<PlotShowcaseCardProps> = memo(
  ({ plot, index }) => {
    const dispatch = useAppDispatch();
    const isEven = index % 2 === 0;

    return (
      <div className="bg-card-bg rounded-3xl overflow-hidden border border-border-light shadow-xl transition-all duration-500 hover:shadow-2xl">
        <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isEven ? "" : "lg:flex-row-reverse"}`}>
          {/* Image Showcase Side (5 Columns) */}
          <div className={`lg:col-span-5 relative h-[320px] sm:h-[400px] lg:h-auto min-h-[350px] overflow-hidden ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <picture className="w-full h-full">
              <source srcSet={plot.image.replace(/\.jpg$/, '.webp')} type="image/webp" />
              <img
                src={plot.image}
                alt={plot.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </picture>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent"></div>

            <div className="absolute top-4 left-4 z-10">
              <Badge variant={plot.status === "Available" ? "available" : "reserved"}>
                {plot.status}
              </Badge>
            </div>

            {/* Bottom Overlay Label */}
            <div className="absolute bottom-4 left-4 right-4 z-10 text-white">
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary block mb-1">
                Master-Planned Township
              </span>
              <h4 className="text-xl sm:text-2xl font-bold font-display">{plot.title}</h4>
            </div>
          </div>

          {/* Details & Interactive Calculator Side (7 Columns) */}
          <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                  {plot.plotType}
                </span>
                <span className="text-xs text-text-muted flex items-center gap-1 font-medium">
                  <span className="material-symbols-outlined text-[16px] text-secondary">location_on</span>
                  {plot.location}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-primary font-display mb-3">
                {plot.title}
              </h3>

              <p className="text-sm text-text-muted font-light leading-relaxed mb-6">
                {plot.description}
              </p>

              {/* Interactive Plot Size & Price Estimator */}
              {/* Plot Sizes & Customization Specs Box */}
              <div className="bg-surface-alt/70 p-4 sm:p-5 rounded-2xl border border-border-light/60 mb-6">
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-3 items-center">
                  <div className="sm:col-span-7">
                    <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider block mb-1">
                      Available Plot Sizes
                    </span>
                    <span className="text-sm sm:text-base font-bold text-primary font-display">
                      {plot.availableSizes || "1,200, 1,400, 1,800, 2,000 Sq. Ft."}
                    </span>
                  </div>
                  <div className="sm:col-span-5 sm:text-right border-t sm:border-t-0 sm:border-l border-border-light/40 pt-2 sm:pt-0 sm:pl-3">
                    <span className="text-[10px] uppercase font-bold text-text-muted tracking-wider block mb-1">
                      Customization
                    </span>
                    <span className="text-xs font-bold text-secondary flex items-center sm:justify-end gap-1">
                      <span className="material-symbols-outlined text-[16px]">verified</span>
                      Custom Plotting Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Infrastructure Features Badges */}
              <div className="flex flex-wrap gap-2">
                {plot.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] bg-card-bg text-primary font-medium px-3 py-1 rounded-full border border-border-light shadow-2xs"
                  >
                    ✓ {feat}
                  </span>
                ))}
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-5 border-t border-border-light flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block mb-0.5">
                  Pricing & Availability
                </span>
                <span className="text-lg font-bold text-secondary font-display flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[20px]">request_quote</span>
                  Price Available on Request
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => dispatch(openSiteVisitModal(plot.title))}
                >
                  Request Details
                </Button>
                <Button
                  variant="secondary"
                  size="md"
                  onClick={() => dispatch(openSiteVisitModal(plot.title))}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
);

PlotShowcaseCard.displayName = "PlotShowcaseCard";
