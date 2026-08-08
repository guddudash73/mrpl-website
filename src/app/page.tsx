import type { Metadata } from "next";
import React from "react";
import { HomeClientView } from "./HomeClientView";

export const metadata: Metadata = {
  title:
    "Meadowlark Realcon (MRPL) | Premier Plots & Luxury Duplex Villas in Bhubaneswar",
  description:
    "Bhubaneswar's premier real estate developer offering institutional-grade residential plots, custom duplex villas, and master-planned townships with clear legal titles in Atala.",
  openGraph: {
    title:
      "Meadowlark Realcon (MRPL) | Premier Plots & Luxury Duplex Villas in Bhubaneswar",
    description:
      "Bhubaneswar's premier real estate developer offering institutional-grade residential plots, custom duplex villas, and master-planned townships with clear legal titles in Atala.",
  },
};

export default function HomePage() {
  return <HomeClientView />;
}
