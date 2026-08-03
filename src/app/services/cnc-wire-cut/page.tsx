import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "CNC Wire Cut EDM Services Pune | Shriniwas Tools & Equipments",
  description: "Fleet of 9 Electronica CNC wire cut machines providing rapid, high-precision sparking and wire cutting for complex die profiles and extrusion dies in Bhosari, Pune.",
  keywords: "CNC wire cut Pune, EDM services Bhosari, wire cutting, hard metal profiling, extrusion dies, punch profiling",
};

const data: ServiceData = {
  serviceName: "CNC Wire Cut EDM",
  hero: {
    title: "CNC Wire Cut EDM",
    subtitle: "Precision extrusion dies, complex punches, and ultra-hard metal profiling with zero mechanical stress.",
    bgImage: "/company_machines/wire_cut_machine_imp1.png",
  },
  overview: {
    title: "High-Volume, Ultra-Precision Wire Cutting",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          The heart of our tool room boasts an impressive fleet of 9 Electronica CNC Wire Cut machines. This massive capacity allows us to handle high-volume production and exceptionally tight deadlines without ever compromising on our rigorous quality standards.
        </p>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          Wire Cut Electrical Discharge Machining (EDM) is our solution for cutting ultra-hard conductive metals that resist conventional milling. Because the wire never physically touches the workpiece, the process exerts zero mechanical stress on the material, preventing distortion in delicate or thin-walled components.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our expertise in wire cutting is unmatched in the Bhosari industrial belt. We routinely produce highly intricate extrusion dies, sharp internal corners, and complex punches with superior surface finishes, ready for immediate assembly in demanding automotive and medical applications.
        </p>
      </>
    ),
    image: "/company_machines/wire_cut_floor.png",
  },
  keyFeatures: [
    { title: "Fleet of 9 Machines", description: "Unparalleled high-volume capacity and rapid turnaround times in Pune.", icon: "Factory" },
    { title: "Zero Mechanical Stress", description: "Non-contact sparking prevents distortion in delicate or thin-walled components.", icon: "ShieldCheck" },
    { title: "Sharp Internal Geometries", description: "Machining intricate internal corners and shapes impossible with rotary tools.", icon: "Settings" },
    { title: "Superior Finish", description: "Delivering micron-level accuracy with smooth, assembly-ready surface finishes.", icon: "CheckCircle2" },
    { title: "Complex Geometries", description: "Effortlessly cutting intricate shapes, tapers, and varying cross-sections.", icon: "Layers" },
    { title: "Material Versatility", description: "Capable of machining any conductive material regardless of its hardness.", icon: "Settings" },
  ],
  industries: [
    { name: "Tool & Die", icon: "Wrench", description: "Precision cutting of extrusion dies, punches, and blanking tools." },
    { name: "Automotive", icon: "Car", description: "Complex profiles for transmission components and engine parts." },
    { name: "Aerospace", icon: "Plane", description: "Zero-stress cutting for delicate aerospace alloys and structures." },
    { name: "Medical Devices", icon: "Heart", description: "Micron-level accuracy for surgical instruments and implants." },
  ],
  process: [
    { title: "Digital Profile Programming", description: "Converting your complex 2D profiles into exact wire paths." },
    { title: "Material Preparation", description: "Securing the hardened blank and setting the start hole." },
    { title: "Precision Wire Cutting", description: "Non-contact electrical discharge cutting for absolute accuracy." },
    { title: "Surface Finish Pass", description: "Skim passes to ensure a smooth, assembly-ready edge." },
    { title: "Final Inspection", description: "Verifying clearances and internal geometries using precision gauges." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
