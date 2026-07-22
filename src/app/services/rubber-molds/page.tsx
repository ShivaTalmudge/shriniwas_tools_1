import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Rubber Mould Manufacturer in Pune | Shriniwas Tools",
  description: "Expert rubber mould manufacturer in Pune. We engineer high-precision compression, transfer, and injection moulds for elastomeric components.",
};

const data: ServiceData = {
  serviceName: "Rubber Mould Manufacturing",
  hero: {
    title: "Rubber Mould Manufacturing",
    subtitle: "Expertly engineered compression and transfer moulds for tear-free, flashless elastomeric components across industrial sectors.",
    bgImage: "/company_machines/bannerimage1.png",
  },
  overview: {
    title: "Elastomeric Tooling Specialists",
    description: (
      <>
        <p className="mb-4">
          Moulding rubber requires a deep understanding of elastomer flow, vulcanization temperatures, and significant post-cure shrinkage. As a leading rubber mould manufacturer, Shriniwas Tools engineers tooling that accounts for these complex variables, ensuring accurate, flash-free final components.
        </p>
        <p>
          We manufacture compression, transfer, and injection moulds for a wide variety of elastomers including Silicone, EPDM, NBR, and Viton. Our advanced machining capabilities allow us to create highly intricate cavities for O-rings, complex gaskets, and industrial bellows.
        </p>
      </>
    ),
    image: "/company_machines/horizonatl_injection_moulding_machine_1.png",
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
    { name: "Food & Beverage", icon: "Box" },
  ],
  process: [
    "Flow Analysis",
    "Tool Design",
    "Machining",
    "Polishing",
    "Validation"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
