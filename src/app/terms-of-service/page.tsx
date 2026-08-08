import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/common/SectionHeader";

export const metadata: Metadata = {
  title: "Terms of Service | Meadowlark Realcon (MRPL)",
  description:
    "Review the Terms of Service governing website usage, property information, and consultation terms with Meadowlark Realcon Private Limited.",
  openGraph: {
    title: "Terms of Service | Meadowlark Realcon (MRPL)",
    description:
      "Review the Terms of Service governing website usage, property information, and consultation terms with Meadowlark Realcon Private Limited.",
  },
};

export default function TermsOfServicePage() {
  return (
    <div className="py-12 px-6 md:px-12 max-w-[1000px] mx-auto space-y-10">
      <SectionHeader
        subtitle="Legal Terms & Conditions"
        title="Terms of Service"
        description="Meadowlark Realcon Private Limited (MRPL)"
        centered
      />

      <div className="bg-card-bg p-8 md:p-12 rounded-3xl border border-border-light shadow-sm space-y-8 text-text-muted font-light leading-relaxed text-sm md:text-base">
        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            1. Informational Portal Scope
          </h3>
          <p>
            By accessing or browsing the website of Meadowlark Realcon Private
            Limited (MRPL), you agree to these Terms of Service. This website serves strictly as an informational portal showcasing our residential plot layouts and duplex villa developments in Bhubaneswar.
          </p>
          <p>
            <strong className="text-primary font-semibold">
              Currently, we do not collect personal user data, process digital payments, or store online customer profiles through this website.
            </strong>
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            2. Property Listings & Visual Disclaimers
          </h3>
          <p>
            All architectural renderings, floor plans, plot layouts, project
            images, and specifications displayed on this portal are for
            illustrative and conceptual representation:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Final plot dimensions, road widths, and layout demarcations are
              governed by official revenue site surveys and approved master layout
              plans.
            </li>
            <li>
              Duplex villa specifications, interior finishes, and completion
              schedules are subject to final construction contracts executed
              in-person between the buyer and MRPL.
            </li>
            <li>
              Prices and project availability are subject to change prior to formal written booking agreements.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            3. Inquiries & Site Visit Consultation
          </h3>
          <p>
            Browsing our project portfolio or viewing location details does not
            constitute a binding agreement of sale or property allotment. All
            consultations, site visit scheduling, and plot reservations are conducted directly via phone or through in-person meetings at our corporate office. Property allotments are finalized only upon:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Execution of a formal Agreement for Sale or Plot Allotment Letter.</li>
            <li>
              Receipt of official booking token payments deposited into the designated bank account of Meadowlark Realcon Private Limited.
            </li>
            <li>Completion of standard legal title verification procedures.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            4. Payment Terms & Statutory Dues
          </h3>
          <p>
            All financial transactions related to plot purchases, duplex villa bookings, or construction installments must be made via official banking channels (NEFT/RTGS/IMPS/Crossed Cheques) payable directly to{" "}
            <strong className="text-primary font-semibold">
              Meadowlark Realcon Private Limited
            </strong>.
          </p>
          <p>
            Applicable government stamp duty, revenue registration fees, GST, and statutory taxes are the sole responsibility of the purchaser as per Government of Odisha revenue regulations.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            5. Intellectual Property Rights
          </h3>
          <p>
            All content on this website—including logos, architectural plans,
            photographs, text, brand graphics, and UI design—is the exclusive
            intellectual property of Meadowlark Realcon Private Limited. Unauthorized
            reproduction or commercial usage is strictly prohibited.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            6. Governing Law & Jurisdiction
          </h3>
          <p>
            These Terms of Service shall be governed by and construed in
            accordance with the laws of India. Any legal disputes or claims arising
            under or in connection with these terms or property bookings shall be
            subject exclusively to the jurisdiction of the competent courts in{" "}
            <strong className="text-primary font-semibold">Bhubaneswar, Odisha</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h3 className="text-xl font-bold text-primary font-display">
            7. Contact Information
          </h3>
          <div className="bg-surface-alt p-6 rounded-2xl border border-border-light space-y-2 text-sm text-text-muted">
            <p className="font-bold text-primary">
              Meadowlark Realcon Private Limited (MRPL)
            </p>
            <p>
              Corporate Office: 217/A, near Madhuban marriage mandap, Saheed Nagar,
              Bhubaneswar, Odisha 751007
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
