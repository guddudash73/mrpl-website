import type { Metadata } from "next";
import React from "react";
import { DuplexProjectsClientView } from "./DuplexProjectsClientView";

export const metadata: Metadata = {
  title: "Signature Duplex Villas in Atala, Bhubaneswar",
  description:
    "Explore upcoming luxury 4 BHK and standard duplex villas in Atala, Balianta, Bhubaneswar featuring modern architecture, gated security, and premium finishes.",
  openGraph: {
    title: "Signature Duplex Villas in Bhubaneswar | Meadowlark Realcon",
    description:
      "Explore upcoming luxury 4 BHK and standard duplex villas in Atala, Balianta, Bhubaneswar featuring modern architecture and premium lifestyle amenities.",
  },
};

export default function DuplexProjectsPage() {
  return <DuplexProjectsClientView />;
}
