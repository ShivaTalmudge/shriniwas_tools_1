import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DMC & Bakelite Components Manufacturer in Pune | Shriniwas Tools",
  description: "Leading DMC & Bakelite components manufacturer in Pune. We provide end-to-end thermoset tooling and manufacturing for highly heat-resistant electrical parts.",
};

const data: ServiceData = {
  serviceName: "DMC & Bakelite Moulds",
  hero: {
    title: "DMC & Bakelite Moulds",
    subtitle: "High-precision thermoset tooling and turnkey manufacturing for superior electrical insulation and heat-resistant industrial applications.",
    bgImage: "/company_machines/hero_bakelite_mould.png",
  },
  overview: {
    title: "End-to-End DMC & Bakelite Manufacturing",
    description: (
      <>
        <p className="mb-4">
          DMC and Bakelite remain some of the most reliable thermosetting plastics for demanding high heat and electrical non-conductivity applications. As a prominent DMC and Bakelite components manufacturer in Pune, Shriniwas Tools offers complete end-to-end solutions.
        </p>
        <p>
          We design and build highly polished, abrasion-resistant compression moulds, and operate a dedicated press shop to manufacture flash-free, dimensionally stable components for our OEM clients.
        </p>
      </>
    ),
    image: "/company_machines/horizontal_injection_moulding_machine.png",
  },
  keyFeatures: [
    { title: "High Polish Finish", description: "SPI A2/A3 finishes for glossy components.", icon: "Award" },
    { title: "Flash-Free Moulding", description: "Precision land-area matching in cavities.", icon: "CheckCircle2" },
    { title: "Turnkey Production", description: "From mould design to final component delivery.", icon: "Settings" },
    { title: "Durability", description: "Hard chrome treated for abrasive phenolic flow.", icon: "ShieldCheck" },
  ],
  industries: [
    { name: "Electrical Switches", icon: "Zap" },
    { name: "Kitchenware", icon: "Home" },
    { name: "Automotive Relays", icon: "Car" },
    { name: "Industrial Machinery", icon: "Settings" },
  ],
  process: [
    "Engineering",
    "Tool Machining",
    "Plating",
    "Compression",
    "Deflashing"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
