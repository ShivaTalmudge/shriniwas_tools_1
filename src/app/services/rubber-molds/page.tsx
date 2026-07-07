import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Rubber Mould Manufacturer in Pune | Shriniwas Tools",
  description: "Expert rubber mould manufacturer in Pune. We engineer high-precision compression, transfer, and injection moulds for elastomeric components.",
};

const data: ServiceData = {
  serviceName: "Rubber Mould Manufacturing",
  hero: {
    title: "Rubber Mould Manufacturer",
    subtitle: "Expertly engineered compression and transfer moulds for tear-free, flashless elastomeric components across industrial sectors.",
    bgImage: "/images/hero_capabilities.png",
  },
  overview: {
    title: "Elastomeric Tooling Specialists in Pune",
    description: (
      <>
        <p className="mb-4">
          Moulding rubber requires a deep understanding of elastomer flow, vulcanization temperatures, and significant post-cure shrinkage. As a leading <strong>rubber mould manufacturer</strong> in Pune, Shriniwas Tools engineers tooling that accounts for these complex variables, ensuring accurate, flash-free final components.
        </p>
        <p className="mb-4">
          We manufacture compression, transfer, and injection moulds for a wide variety of elastomers including Silicone, EPDM, NBR (Nitrile), and Viton. Our advanced CNC and EDM machining capabilities allow us to create highly intricate cavities for O-rings, complex gaskets, and industrial bellows.
        </p>
        <p>
          We also specialize in tooling for rubber-to-metal bonded components, which are heavily utilized in automotive vibration dampening and hydraulic systems. Our moulds are designed to optimize cycle times and eliminate manual deflashing.
        </p>
      </>
    ),
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
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
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    },
    {
      name: "Sparking EDM",
      capacity: "500X300X200 mm",
      specs: "Fine finish eroding",
      applications: "Deep intricate grooves",
      image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    }
  ],
  materials: [
    { name: "P20 Tool Steel", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { name: "Aluminum (Prototype)", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  gallery: [
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
  ],
  specs: [
    { label: "Mould Types", value: "Compression, Transfer, LSR Injection" },
    { label: "Cavity Finish", value: "High Polish / Custom Texture" },
    { label: "Steel Types", value: "P20, H13, EN31" },
    { label: "Precision", value: "±0.01 mm" },
  ],
  faqs: [
    { question: "What types of rubber moulds do you manufacture?", answer: "As a comprehensive rubber mould manufacturer, we design and build compression moulds, transfer moulds, and highly complex Liquid Silicone Rubber (LSR) injection moulds." },
    { question: "What is a tear-trim mould?", answer: "A tear-trim design includes a specialized microscopic groove around the cavity. This creates a very thin membrane of flash on the rubber part that can be easily torn off by hand, eliminating the need for expensive cryogenic deflashing." },
    { question: "Can you design moulds for rubber-to-metal bonding?", answer: "Yes, we specialize in tooling that securely locates and holds metal inserts (like bushes or plates) during the rubber injection or compression process, ensuring a perfect bond for anti-vibration mounts." }
  ],
  relatedServices: [
    { title: "Plastic Injection Moulding", href: "/services/plastic-molding-dies", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
    { title: "CNC VMC Machining", href: "/services/cnc-vmc-machining", image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon" },
  ],
  testimonials: [
    { quote: "The multi-cavity O-ring mould they built for us reduced our cycle time by 20% and completely eliminated our manual deflashing process.", author: "Production Manager", company: "Industrial Seals & Hydraulics" }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
