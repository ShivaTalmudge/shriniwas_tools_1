import type { Metadata } from "next";
import { Roboto, Montserrat } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import QuoteModal from "@/components/QuoteModal";
import Script from "next/script";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shriniwastools.com"),
  title: {
    default: "Shriniwas Tools & Equipments | Plastic Injection Moulding Manufacturer Pune, India",
    template: "%s | Shriniwas Tools & Equipments, Pune",
  },
  description:
    "ISO 9001:2015 certified manufacturer of plastic injection moulds, DMC moulds, rubber moulds, press tools, jigs & fixtures in Pune, India. 18+ years of precision engineering for automotive, electrical & industrial sectors.",
  keywords: [
    "Plastic Injection Moulding Pune",
    "Plastic Injection Moulding Manufacturer India",
    "DMC Moulding Manufacturer",
    "CNC Machining Services Pune",
    "VMC Machining Services",
    "Wire Cut EDM Services",
    "DMC Mould Manufacturer",
    "Rubber Mould Manufacturer",
    "Bakelite Components Manufacturer",
    "Industrial Plastic Components",
    "Engineering Tool Room Pune",
    "Jigs and Fixtures Manufacturer",
    "Press Tool Manufacturer",
    "Precision Engineering Company",
    "Custom Mould Manufacturer",
    "Industrial Tooling Solutions",
  ],
  authors: [{ name: "Shriniwas Tools & Equipments" }],
  creator: "Shriniwas Tools & Equipments",
  publisher: "Shriniwas Tools & Equipments",
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
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Shriniwas Tools & Equipments",
    title: "Shriniwas Tools & Equipments | Precision Mould & Tool Manufacturer, Pune India",
    description:
      "ISO certified manufacturer of plastic injection moulds, DMC moulds, press tools, jigs & fixtures. 18+ years serving automotive, electrical & industrial sectors from Pune, India.",
    images: [
      {
        url: "/company_machines/bannerimage1.png",
        width: 1200,
        height: 630,
        alt: "Shriniwas Tools & Equipments Manufacturing Facility in Pune India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shriniwas Tools & Equipments | Mould & Tool Manufacturer, Pune",
    description:
      "ISO certified precision mould manufacturer in Pune, India. Plastic injection moulds, DMC moulds, press tools & more.",
    images: ["/company_machines/bannerimage1.png"],
  },
  alternates: {
    canonical: "https://shriniwastools.com",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Pune",
    "geo.position": "18.6298;73.7997",
    "ICBM": "18.6298, 73.7997",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shriniwas Tools & Equipments",
  alternateName: "Shriniwas Tools",
  url: "https://shriniwastools.com",
  logo: "https://shriniwastools.com/images/logo.png",
  description:
    "ISO 9001:2015 certified manufacturer of plastic injection moulds, DMC moulds, rubber moulds, press tools, and jigs & fixtures in Pune, India.",
  foundingDate: "2006",
  founder: {
    "@type": "Person",
    name: "Nagendra M. Sheregar",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "S-96, MIDC, Bhosari",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411026",
    addressCountry: "IN",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-9860822818",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-7276086077",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  ],
  email: "shriniwastools2020@gmail.com",
  telephone: "+91-9860822818",
  sameAs: [],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Manufacturing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Plastic Injection Moulding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "DMC Moulding" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CNC & VMC Machining" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "CNC Wire Cut EDM" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "DMC Mould Manufacturing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bakelite Moulds & Components" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Rubber Mould Manufacturing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Jigs & Fixtures" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Press Tools" } },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${montserrat.variable} h-full antialiased scroll-smooth`}>
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingActions />
          <QuoteModal />
        </SmoothScroll>
      </body>
    </html>
  );
}
