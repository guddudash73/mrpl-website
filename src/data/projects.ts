import { Project } from "@/types";

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-01",
    title: "Comfortable. Spacious. Well Planned.",
    subtitle: "Standard Residential Duplex Township",
    location: "Atala, Balianta, Bhubaneswar",
    category: "Standard Duplex",
    status: "Ongoing",
    image: "/duplex-card-1.jpg",
    description:
      "Our upcoming Standard Duplex in Atala, Bhubaneswar is designed for modern family living, offering comfortable spaces, contemporary design and essential lifestyle amenities within a well-planned community.",
    completionYear: "Construction Begins: December 2026",
    features: [
      "24/7 Gated Security",
      "Children’s Play Area ",
      "Community Hall & Clubhouse ",
      "Landscaped Green Spaces",
    ],
    isSignature: true,
  },
  {
    id: "proj-02",
    title: "More Space. More Style. A Better Way to Live.",
    subtitle: "Ultra-Luxury Modernist Duplex Residences",
    location: "Atala, Balianta, Bhubaneswar",
    category: "Premium Duplex",
    status: "Upcoming",
    image: "/duplex-card-2.jpg",
    description:
      "Designed for those who expect more, the Premium Duplex in Atala, Bhubaneswar combines generous living spaces, refined interiors, and luxury amenities to deliver an elevated, sophisticated living experience.",
    completionYear: "Construction Begins: April 2027",
    features: [
      "Contemporary Architectural Design ",
      "Premium Flooring & Finishes ",
      "Smart Home Features ",
      "Dedicated Parking",
      "24/7 Security",
      "Children’s Play Area",
      "Community Hall",
    ],
    isSignature: true,
  },
];
