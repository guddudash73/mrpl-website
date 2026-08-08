import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";

export const metadata: Metadata = {
  title: "Privacy Policy | Meadowlark Realcon (MRPL)",
  description:
    "Privacy Policy for Meadowlark Realcon Private Limited (MRPL). Information regarding website usage and data collection policies.",
  openGraph: {
    title: "Privacy Policy | Meadowlark Realcon (MRPL)",
    description:
      "Privacy Policy for Meadowlark Realcon Private Limited (MRPL). Information regarding website usage and data collection policies.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 px-6 md:px-12 max-w-[1000px] mx-auto space-y-10">
      <SectionHeader
        subtitle="Legal & Data Protection"
        title="Privacy Policy"
        description="Meadowlark Realcon Private Limited (MRPL)"
        centered
      />

      <div className="bg-card-bg p-8 md:p-12 rounded-3xl border border-border-light shadow-sm space-y-8 text-text-muted font-light leading-relaxed text-sm md:text-base">
        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            1. Overview
          </h3>
          <p>
            Meadowlark Realcon Private Limited (MRPL, “we,” “us,” or “our”),
            having its corporate office at 217/A, near Madhuban marriage mandap,
            Saheed Nagar, Bhubaneswar, Odisha 751007, respects your privacy and is
            committed to maintaining complete transparency.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            2. Data Collection Policy
          </h3>
          <p>
            <strong className="text-primary font-semibold">
              Currently, Meadowlark Realcon Private Limited does not collect, store, track, or harvest any personal data or private user information through this website.
            </strong>
          </p>
          <p>
            You can freely browse our plot inventory, view signature duplex villa
            showcases, and explore project details without submitting personal data, creating user accounts, or being tracked by analytics cookies.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            3. Direct Inquiries & Consultations
          </h3>
          <p>
            Any inquiries regarding plot availability, duplex bookings, or site
            visits are conducted directly via phone calls or in-person visits to our
            corporate office. We do not store or process digital customer profiles
            or private web submissions on this portal.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            4. Third-Party Links & External Platforms
          </h3>
          <p>
            Our website may contain external links (such as embedded Google Maps for office location or official social media pages). These external platforms have independent privacy policies, and we recommend reviewing their respective privacy terms when navigating outside our website.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            5. Contact Information
          </h3>
          <p>
            If you have any questions regarding our privacy statement or property
            offerings, please contact our corporate office directly:
          </p>
          <div className="bg-surface-alt p-6 rounded-2xl border border-border-light space-y-2 text-sm text-text-muted">
            <p className="font-bold text-primary">
              Meadowlark Realcon Private Limited (MRPL)
            </p>
            <p>
              217/A, near Madhuban marriage mandap, Saheed Nagar, Bhubaneswar,
              Odisha 751007
            </p>
            <p>
              <strong className="text-primary">Phone:</strong> +91 9338379494
            </p>
          </div>
        </section>
      </div>

      <div className="text-center pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-secondary uppercase tracking-widest hover:text-primary transition-colors"
        >
          ← Return to Home
        </Link>
      </div>
    </div>
  );
}
