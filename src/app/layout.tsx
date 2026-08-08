import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Providers } from "@/components/layout/Providers";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SiteVisitModal } from "@/components/features/SiteVisitModal";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF8F5" },
    { media: "(prefers-color-scheme: dark)", color: "#161513" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : "https://meadowlarkrealcon.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Meadowlark Realcon (MRPL) | Premium Plots & Architectural Construction in Bhubaneswar",
    template: "%s | Meadowlark Realcon (MRPL)",
  },
  description:
    "Bhubaneswar’s premier real estate development firm offering institutional residential plots, custom duplex villas, and master-planned townships with clear legal titles in Atala, Bhubaneswar.",
  keywords: [
    "MRPL",
    "Meadowlark Realcon",
    "Bhubaneswar real estate",
    "plots in Bhubaneswar",
    "duplex villa Bhubaneswar",
    "Atala duplex",
    "plots in Atala",
    "real estate developer Odisha",
    "residential plots Bhubaneswar",
    "MRPL Bhubaneswar",
  ],
  authors: [{ name: "Meadowlark Realcon Private Limited" }],
  creator: "Meadowlark Realcon Private Limited",
  publisher: "Meadowlark Realcon Private Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/mrpl-logo.png",
    shortcut: "/mrpl-logo.png",
    apple: "/mrpl-logo.png",
  },
  openGraph: {
    title:
      "Meadowlark Realcon (MRPL) | Premium Plots & Luxury Duplex Villas in Bhubaneswar",
    description:
      "Premier real estate development firm in Bhubaneswar specializing in institutional residential plots, custom duplex villas, and master-planned townships with clear legal titles.",
    url: "https://meadowlarkrealcon.com",
    siteName: "Meadowlark Realcon (MRPL)",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/duplex-card-2.jpg",
        width: 1200,
        height: 630,
        alt: "Meadowlark Realcon Luxury Duplex Villas Bhubaneswar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Meadowlark Realcon (MRPL) | Premium Plots & Luxury Duplex Villas",
    description:
      "Premier real estate development firm in Bhubaneswar specializing in institutional residential plots and custom duplex villas.",
    images: ["/duplex-card-2.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "Meadowlark Realcon Private Limited (MRPL)",
  image: "https://meadowlarkrealcon.com/mrpl-logo.png",
  "@id": "https://meadowlarkrealcon.com/#organization",
  url: "https://meadowlarkrealcon.com",
  telephone: "+919338379494",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "217/A, near Madhuban marriage mandap, Saheed Nagar",
    addressLocality: "Bhubaneswar",
    addressRegion: "Odisha",
    postalCode: "751007",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 20.2961,
    longitude: 85.8245,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Friday",
      "Saturday",
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
    ],
    opens: "09:00",
    closes: "18:30",
  },
  sameAs: [
    "https://www.facebook.com/share/1CUUGHEipa/",
    "https://www.instagram.com/meadowlarkrealcon_pvt_ltd?igsh=ODlvZDRsZHZ0MTNi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" href="/mrpl-logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('mrpl_theme');
                  if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-surface text-text-main selection:bg-secondary/20 selection:text-primary">
        <Providers>
          <Header />
          <main className="flex-grow pt-[61px] sm:pt-[85px] md:pt-[87px] bg-surface">{children}</main>
          <Footer />
          <SiteVisitModal />
        </Providers>
      </body>
    </html>
  );
}
