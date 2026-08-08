"use client";

import React from "react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Button } from "@/components/common/Button";
import { useAppDispatch } from "@/store/hooks";
import { openSiteVisitModal } from "@/store/modalSlice";

export function ContactClientView() {
  const dispatch = useAppDispatch();

  return (
    <div className="space-y-16 py-12 px-6 md:px-12 max-w-[1440px] mx-auto">
      <SectionHeader
        subtitle="Get in Touch"
        title="Contact Meadowlark Realcon Corporate Office"
        description="Have questions about land legalities, plot approvals, or site visits? Our experienced team is here to assist you."
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Pinned Location Map Column (Left Side, 7 Columns) */}
        <div className="lg:col-span-7 bg-card-bg rounded-3xl overflow-hidden border border-border-light shadow-xl flex flex-col justify-between relative group">
          {/* Map Header Bar */}
          <div className="p-5 sm:p-6 bg-surface-alt/80 border-b border-border-light/60 flex flex-wrap items-center justify-between gap-4 relative z-10 backdrop-blur-md">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-primary font-display flex items-center gap-2">
                <span className="material-symbols-outlined text-secondary text-[22px]">location_on</span>
                Meadowlark Realcon Office Location
              </h3>
            </div>

            <a
              href="https://maps.app.goo.gl/B9Bjt7kn3teNrYqJ6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-white text-xs font-bold rounded-xl hover:bg-secondary-light transition-all shadow-md cursor-pointer shrink-0"
            >
              Open in Google Maps
              <span className="material-symbols-outlined text-[16px]">open_in_new</span>
            </a>
          </div>

          {/* Interactive Google Map Iframe */}
          <div className="relative w-full h-[400px] sm:h-[480px] lg:h-[520px] overflow-hidden bg-surface-alt">
            <iframe
              title="Meadowlark Realcon Exact Location"
              src="https://maps.google.com/maps?q=20.2897317,85.8536547&z=15&output=embed"
              className="w-full h-full border-0 dark:contrast-[1.1] dark:brightness-90 transition-all duration-300"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Bottom Location Floating Pill Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:right-auto z-10 pointer-events-none">
              <div className="bg-card-bg/90 backdrop-blur-md px-4 py-2.5 rounded-2xl border border-border-light/70 shadow-lg flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary/15 flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-secondary text-[18px]">pin_drop</span>
                </div>
                <div>
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-wider block">
                    Pinned Location
                  </span>
                  <span className="text-xs font-bold text-primary font-display">
                    Meadowlark Office, Bhubaneswar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Corporate Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <div className="bg-surface-alt p-8 rounded-3xl border border-border-light/60 space-y-6">
            <h3 className="text-xl font-bold text-primary font-display border-b border-border-light pb-4">
              Corporate Office
            </h3>

            <div className="space-y-4 text-sm text-text-muted font-light">
              <div className="flex items-start space-x-3">
                <span className="text-xl text-secondary">📍</span>
                <div>
                  <strong className="text-primary font-semibold block">Office Address:</strong>
                  <span>217/A, near Madhuban marriage mandap, Saheed Nagar, Bhubaneswar, Odisha 751007</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-xl text-secondary">📞</span>
                <div>
                  <strong className="text-primary font-semibold block">Helpline Numbers:</strong>
                  <span>+91 9338379494</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-xl text-secondary">✉️</span>
                <div>
                  <strong className="text-primary font-semibold block">Email Inquiries:</strong>
                  <span>—</span>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <span className="text-xl text-secondary">⏰</span>
                <div>
                  <strong className="text-primary font-semibold block">Business Hours:</strong>
                  <div className="space-y-0.5 text-xs sm:text-sm pt-0.5">
                    <p><strong className="text-primary font-medium">Friday – Wednesday:</strong> 9:00 AM – 6:30 PM</p>
                    <p><strong className="text-rose-500 dark:text-rose-400 font-medium">Thursday:</strong> Closed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border-light">
              <Button
                variant="secondary"
                size="md"
                fullWidth
                onClick={() => dispatch(openSiteVisitModal())}
              >
                Schedule a Site Visit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
