import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "DMC Moulding Manufacturer in Pune | Shriniwas Tools",
  description: "Leading DMC moulding manufacturer in Pune, India. Specializing in high-strength thermoset Dough Moulding Compound parts for electrical & automotive sectors.",
};

const data: ServiceData = {
  serviceName: "DMC Moulding",
  hero: {
    title: "DMC Moulding",
    subtitle: "High-strength, thermoset Dough Moulding Compound solutions for superior electrical insulation and heat resistance.",
    bgImage: "/company_machines/bannerimage1.png",
  },
  overview: {
    title: "Thermoset Moulding Excellence",
    description: (
      <>
        <p className="mb-4">
          Dough Moulding Compound (DMC) is a vital thermosetting polymer used where exceptional electrical insulation, mechanical strength, and dimensional stability at high temperatures are required. 
        </p>
        <p>
          As a prominent DMC moulding manufacturer based in Pune, Shriniwas Tools produces high-performance thermoset components using advanced hydraulic compression moulding presses, ensuring every part is fully cured, dimensionally accurate, and porosity-free.
        </p>
      </>
    ),
    image: "/company_machines/horizontal_injection_moulding_machine.png",
  },
  keyFeatures: [
    { title: "High Heat Resistance", description: "Maintains stability in extreme temperatures.", icon: "Zap" },
    { title: "Electrical Insulation", description: "High dielectric strength for switchgears.", icon: "ShieldCheck" },
    { title: "Structural Rigidity", description: "Incredible compressive strength.", icon: "Box" },
    { title: "Flame Retardant", description: "Meets stringent UL flammability ratings.", icon: "Award" },
  ],
  industries: [
    { name: "Heavy Electricals", icon: "Zap" },
    { name: "Switchgear", icon: "Shield" },
    { name: "Automotive", icon: "Car" },
    { name: "Railways", icon: "Train" },
  ],
  process: [
    "Tool Heating",
    "Charge Prep",
    "Compression",
    "Curing",
    "Deflashing"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
