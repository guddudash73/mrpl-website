import type { Metadata } from "next";
import React from "react";
import { ContactClientView } from "./ContactClientView";

export const metadata: Metadata = {
  title: "Contact Us | Meadowlark Realcon Corporate Office",
  description:
    "Get in touch with Meadowlark Realcon corporate office in Saheed Nagar, Bhubaneswar. Schedule a site visit or inquire about residential plots and duplex villas.",
  openGraph: {
    title: "Contact Meadowlark Realcon | Corporate Office Bhubaneswar",
    description:
      "Get in touch with Meadowlark Realcon corporate office in Saheed Nagar, Bhubaneswar. Call +91 9338379494 to schedule a site visit.",
  },
};

export default function ContactPage() {
  return <ContactClientView />;
}
