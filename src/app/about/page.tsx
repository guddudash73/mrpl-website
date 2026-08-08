import type { Metadata } from "next";
import React from "react";
import { AboutClientView } from "./AboutClientView";

export const metadata: Metadata = {
  title: "About Us | Meadowlark Realcon (MRPL)",
  description:
    "Learn about Meadowlark Realcon (MRPL), Bhubaneswar's premier real estate developer committed to clear titles, master-planned plotting, and luxury duplex residences.",
  openGraph: {
    title: "About Meadowlark Realcon (MRPL) | Real Estate Developer in Odisha",
    description:
      "Learn about Meadowlark Realcon (MRPL), Bhubaneswar's premier real estate developer committed to clear titles, master-planned plotting, and luxury duplex residences.",
  },
};

export default function AboutPage() {
  return <AboutClientView />;
}
