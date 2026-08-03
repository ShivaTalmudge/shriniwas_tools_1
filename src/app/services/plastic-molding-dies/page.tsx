import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Plastic Injection Molding Dies Pune | Shriniwas Tools & Equipments",
  description: "Expert design and manufacturing of multi-cavity plastic injection molding dies in Pune. High-durability molds for flawless, high-volume thermoplastic components.",
  keywords: "Plastic molding dies, injection molds Pune, multi-cavity molds, thermoplastic tooling, mold design Bhosari",
};

const data: ServiceData = {
  serviceName: "Plastic Injection Molding Dies",
  hero: {
    title: "Plastic Injection Molding Dies",
    subtitle: "High-durability multi-cavity moulds designed for flawless, high-volume thermoplastic production.",
    bgImage: "/company_machines/horizontal_injection_moulding_machine.webp",
  },
  overview: {
    title: "Engineered for Millions of Flawless Cycles",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          The foundation of Shriniwas Tools & Equipments was built on plastic injection mould manufacturing. Since 2006, we have perfected the art of designing and building complex, multi-cavity moulds that yield defect-free thermoplastic components at high production volumes.
        </p>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          A successful injection mould requires a perfect harmony of cooling channels, balanced runner systems, and optimal venting. Our in-house design team meticulously simulates these variables to ensure rapid cycle times, minimal warp, and consistent dimensional accuracy across every cavity.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We utilize high-grade, pre-hardened steel blocks to ensure maximum mold longevity. From the initial DFM (Design for Manufacturability) analysis to final mold trials on our shop floor, we guarantee a tool that runs efficiently and reliably, minimizing downtime for your production line.
        </p>
      </>
    ),
    image: "/company_machines/horizonatl_injection_moulding_machine_1.png",
  },
  keyFeatures: [
    { title: "Multi-Cavity Expertise", description: "Designing perfectly balanced systems for high-volume, simultaneous part production.", icon: "Layers" },
    { title: "Optimized Cooling", description: "Advanced conformal cooling layouts to significantly reduce cycle times.", icon: "Wind" },
    { title: "High-Grade Steel", description: "Utilizing premium alloys for exceptional wear resistance and mold longevity.", icon: "Shield" },
    { title: "Complete Turnkey", description: "From initial CAD design to final physical mold trials on our shop floor.", icon: "CheckCircle2" },
    { title: "Hot Runner Systems", description: "Expert integration of hot runners to eliminate waste and improve part quality.", icon: "Flame" },
    { title: "Precision Ejection", description: "Engineered pin and stripper plate designs to prevent part deformation during ejection.", icon: "Settings" },
  ],
  industries: [
    { name: "Automotive", icon: "Car", description: "Interior trim components, dashboard parts, and under-hood plastics." },
    { name: "Consumer Electronics", icon: "Smartphone", description: "High-precision housings and enclosures for smart devices." },
    { name: "Medical Devices", icon: "Heart", description: "Clean-room ready moulds for syringes and diagnostic equipment." },
    { name: "Packaging", icon: "Box", description: "Multi-cavity moulds for caps, closures, and containers." },
  ],
  process: [
    { title: "DFM & Mold Flow Analysis", description: "Simulating plastic injection to optimize gates and cooling." },
    { title: "Core & Cavity Machining", description: "CNC milling the primary mold shapes from hardened steel." },
    { title: "EDM Sparking", description: "Creating sharp internal corners and fine text details." },
    { title: "Benching & Polishing", description: "Hand-polishing cavities for perfect part ejection." },
    { title: "Mold Trials & Validation", description: "Testing the mold on our injection machines for flawless parts." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
