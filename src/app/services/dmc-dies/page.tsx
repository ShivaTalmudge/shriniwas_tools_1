import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DMC Mould Manufacturer in Pune | Shriniwas Tools",
  description: "Leading DMC mould manufacturer in Pune. We engineer robust, heavy-duty thermoset compression moulds for electrical and industrial applications.",
};

const data: ServiceData = {
  serviceName: "DMC Moulds",
  hero: {
    title: "DMC Moulds",
    subtitle: "Robust, heavy-duty thermoset tooling engineered in Pune to withstand immense compression and high-temperature curing cycles.",
    bgImage: "/company_machines/wire_cut_floor.png",
  },
  overview: {
    title: "Heavy-Duty Compression Tooling",
    description: (
      <>
        <p className="mb-4">
          Dough Moulding Compound (DMC) requires a fundamentally different tooling approach compared to thermoplastic injection moulding. DMC moulds must endure extreme compressive forces and sustained high temperatures.
        </p>
        <p>
          As an expert DMC mould manufacturer in Pune, Shriniwas Tools designs and builds ultra-rigid compression dies using premium H13 and P20 tool steels. Our engineering team incorporates optimized heating cartridge layouts to ensure uniform heat distribution.
        </p>
      </>
    ),
    image: "/company_machines/horizontal_injection_moulding_machine.png",
  },
  keyFeatures: [
    { title: "Thermal Optimization", description: "Uniform heating arrays for perfect curing.", icon: "Zap" },
    { title: "Extreme Rigidity", description: "Built to withstand 300+ tons of compression.", icon: "ShieldCheck" },
    { title: "Hard Chrome Plating", description: "Cavities treated for abrasive glass-fiber wear.", icon: "Award" },
    { title: "Zero Flash Design", description: "Precision land areas prevent material leakage.", icon: "CheckCircle2" },
  ],
  industries: [
    { name: "Switchgear", icon: "Zap" },
    { name: "Electrical Distribution", icon: "Settings" },
    { name: "Heavy Machinery", icon: "Box" },
    { name: "Railways", icon: "Train" },
  ],
  process: [
    "Thermal Analysis",
    "CNC Machining",
    "Hardening",
    "Plating",
    "Tryout"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
