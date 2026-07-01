import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Rubber Mould Manufacturing | Shriniwas Tools",
  description: "High-precision compression, transfer, and injection moulds for elastomeric and silicone rubber components.",
};

const data: ServiceData = {
  serviceName: "Rubber Mould Manufacturing",
  hero: {
    title: "Precision Rubber Moulds",
    subtitle: "Expertly engineered compression and transfer moulds for tear-free, flashless elastomeric components.",
    bgImage: "/images/hero_capabilities.png",
  },
  overview: {
    title: "Elastomeric Tooling Specialists",
    description: (
      <>
        <p className="mb-4">
          Moulding rubber requires a deep understanding of elastomer flow, vulcanization temperatures, and significant post-cure shrinkage. Shriniwas Tools engineers rubber moulds that account for these variables, ensuring accurate, flash-free final components.
        </p>
        <p className="mb-4">
          We manufacture compression, transfer, and injection moulds for a wide variety of elastomers including Silicone, EPDM, NBR (Nitrile), and Viton. Our advanced CNC and EDM machining capabilities allow us to create highly intricate cavities for O-rings, complex gaskets, and bellows.
        </p>
        <p>
          We also specialize in tooling for rubber-to-metal bonded components, heavily utilized in automotive vibration dampening and industrial hydraulics.
        </p>
      </>
    ),
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800",
  },
  keyFeatures: [
    { title: "Flashless Design", description: "Precision tear-trim designs for zero post-processing.", icon: "CheckCircle2" },
    { title: "Shrinkage Accuracy", description: "Calculated cavity scaling for perfect final dimensions.", icon: "Settings" },
    { title: "High Cavitation", description: "Multi-cavity moulds for high-volume O-rings.", icon: "TrendingUp" },
    { title: "Rubber-to-Metal", description: "Specialized mould designs for bonded components.", icon: "Box" },
  ],
  industries: [
    { name: "Automotive Sealing", icon: "Car" },
    { name: "Medical Devices", icon: "Heart" },
    { name: "Hydraulics", icon: "Settings" },
    { name: "Food & Beverage (LSR)", icon: "Box" },
  ],
  process: [
    { step: "01", title: "Flow Analysis", description: "Evaluating elastomer viscosity." },
    { step: "02", title: "Tool Design", description: "Factoring in shrinkage and venting." },
    { step: "03", title: "Machining", description: "High-speed CNC milling." },
    { step: "04", title: "Polishing", description: "Ensuring smooth part ejection." },
    { step: "05", title: "Validation", description: "Dimensional CMM inspection." },
  ],
  machinery: [
    {
      name: "High-Speed VMC",
      capacity: "1000x500x500 mm",
      specs: "12,000 RPM Spindle",
      applications: "Mould cavity profiling",
      image: "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    },
    {
      name: "Sparking EDM",
      capacity: "500X300X200 mm",
      specs: "Fine finish eroding",
      applications: "Deep intricate grooves",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
    }
  ],
  materials: [
    { name: "P20 Tool Steel", image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=300" },
    { name: "Aluminum (Prototype)", image: "https://images.unsplash.com/photo-1517420704952-d9f39ae62871?auto=format&fit=crop&q=80&w=300" },
  ],
  gallery: [
    "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=600",
  ],
  specs: [
    { label: "Mould Types", value: "Compression, Transfer, LSR Injection" },
    { label: "Cavity Finish", value: "High Polish / Custom Texture" },
    { label: "Steel Types", value: "P20, H13, EN31" },
    { label: "Precision", value: "±0.01 mm" },
  ],
  faqs: [
    { question: "What is a tear-trim mould?", answer: "A tear-trim design includes a specialized microscopic groove around the cavity. This creates a very thin membrane of flash on the rubber part that can be easily torn off by hand, eliminating the need for cryogenic deflashing." },
    { question: "Do you design moulds for Liquid Silicone Rubber (LSR)?", answer: "Yes, we engineer LSR injection moulds which require exceptionally tight tolerances to prevent the highly viscous liquid silicone from flashing." }
  ],
  relatedServices: [
    { title: "Plastic Injection Moulding", href: "/services/plastic-molding-dies", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=400" },
    { title: "CNC VMC Machining", href: "/services/cnc-vmc-machining", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400" },
  ],
  testimonials: [
    { quote: "The multi-cavity O-ring mould they built for us reduced our cycle time by 20% and completely eliminated our manual deflashing process.", author: "Production Manager", company: "Industrial Seals & Hydraulics" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
