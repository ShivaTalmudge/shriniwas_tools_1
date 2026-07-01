import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Press Tools & Stamping Dies | Shriniwas Tools",
  description: "High-speed progressive, compound, and deep draw press tools for high-volume sheet metal stamping.",
};

const data: ServiceData = {
  serviceName: "Press Tools",
  hero: {
    title: "Advanced Press Tools",
    subtitle: "High-speed progressive and compound dies engineered for millions of flawless sheet metal stamping cycles.",
    bgImage: "/images/hero_products.png",
  },
  overview: {
    title: "Sheet Metal Stamping Excellence",
    description: (
      <>
        <p className="mb-4">
          Sheet metal stamping demands tooling that can endure extreme impact forces millions of times without losing its cutting edge. Shriniwas Tools engineers and manufactures high-performance press tools designed to maximize your stamping press uptime.
        </p>
        <p className="mb-4">
          Using top-grade D2, powder metallurgy steels, and Tungsten Carbide inserts, coupled with our ultra-precise Wire EDM capabilities, we create punches and matrices with exact clearances. 
        </p>
        <p>
          Whether you require a high-speed progressive die with multiple bending and forming stages for automotive clips, or a highly concentric compound die for washers, we deliver tooling that performs relentlessly.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=800",
  },
  keyFeatures: [
    { title: "Progressive Dies", description: "Multi-station tools for high-speed automated stamping.", icon: "TrendingUp" },
    { title: "Compound Dies", description: "Single-stroke piercing and blanking for perfect concentricity.", icon: "CheckCircle2" },
    { title: "Deep Drawing", description: "Specialized tools for cylindrical/box sheet metal forming.", icon: "Box" },
    { title: "Carbide Tooling", description: "Tungsten carbide inserts for extreme longevity.", icon: "ShieldCheck" },
  ],
  industries: [
    { name: "Automotive Body", icon: "Car" },
    { name: "White Goods", icon: "Home" },
    { name: "Electrical Connectors", icon: "Zap" },
    { name: "Aerospace Brackets", icon: "Plane" },
  ],
  process: [
    { step: "01", title: "Strip Layout", description: "Optimizing material usage." },
    { step: "02", title: "Die Design", description: "3D CAD simulation of forming stages." },
    { step: "03", title: "Wire EDM", description: "Micron-accurate punch/die cutting." },
    { step: "04", title: "Assembly", description: "Fitting pillars, springs, and punches." },
    { step: "05", title: "Tryout", description: "Stamping press test runs." },
  ],
  machinery: [
    {
      name: "Electronica Wirecut EDM",
      capacity: "400x300x200 mm",
      specs: "0.25mm wire, fine skimming",
      applications: "Punch and matrix cutting",
      image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "High-Speed VMC",
      capacity: "1000x500x500 mm",
      specs: "Heavy rigid milling",
      applications: "Die set and backing plates",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    }
  ],
  materials: [
    { name: "D2 Tool Steel", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300" },
    { name: "Tungsten Carbide", image: "https://images.unsplash.com/photo-1517420704952-d9f39ae62871?auto=format&fit=crop&q=80&w=300" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1621644723048-b3d97f95fcb6?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
  ],
  specs: [
    { label: "Tooling Types", value: "Progressive, Compound, Deep Draw, Blanking" },
    { label: "Sheet Materials", value: "CRCA, Stainless Steel, Brass, Copper, Aluminum" },
    { label: "Die Life", value: "Up to 5,000,000 strokes (with Carbide)" },
    { label: "Clearance Accuracy", value: "±0.005 mm" },
  ],
  faqs: [
    { question: "What is a Progressive Die?", answer: "A progressive die feeds a continuous coil of sheet metal through multiple stations in the die. Each station performs a different operation (piercing, bending, forming) so that one complete part drops out with every single stroke of the press." },
    { question: "How do you ensure punches don't break on thick materials?", answer: "We use high-grade shock-resisting tool steels, calculate precise cutting clearances, and utilize guided stripper plates to support the punch right down to the material surface." }
  ],
  relatedServices: [
    { title: "CNC Wire Cut EDM", href: "/services/cnc-wire-cut", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" },
    { title: "Jigs & Fixtures", href: "/services/jigs-fixtures", image: "https://images.unsplash.com/photo-1563906660682-1bf738f61536?auto=format&fit=crop&q=80&w=400" },
  ],
  testimonials: [
    { quote: "The 12-stage progressive die designed by Shriniwas Tools runs at 200 SPM without a hitch. It's increased our output significantly.", author: "Plant Head", company: "AutoStamping Inc." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
