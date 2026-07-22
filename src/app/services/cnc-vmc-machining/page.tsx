import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "CNC Machining Services in Pune | VMC Machining | Shriniwas Tools",
  description: "High-precision CNC and VMC machining services in Pune. We deliver complex metal and plastic components with micron-level accuracy for industrial applications.",
};

const data: ServiceData = {
  serviceName: "CNC & VMC Machining",
  hero: {
    title: "CNC & VMC Machining",
    subtitle: "Delivering aerospace-grade precision for complex components using advanced multi-axis VMC machining centers in Pune.",
    bgImage: "/company_machines/wire_cut_machine_2_imp.png",
  },
  overview: {
    title: "Precision VMC Machining Services",
    description: (
      <>
        <p className="mb-4">
          Computer Numerical Control (CNC) and Vertical Machining Center (VMC) operations form the backbone of modern precision engineering. Shriniwas Tools operates a cutting-edge machine shop dedicated to tight-tolerance subtractive manufacturing.
        </p>
        <p>
          Our advanced multi-axis VMCs and CNC turning centers allow us to machine complex geometries out of hardened tool steels, aluminum, titanium, and engineering plastics with absolute repeatability and exceptional surface finishes.
        </p>
      </>
    ),
    image: "/company_machines/VMC_2.png",
  },
  keyFeatures: [
    { title: "Tight Tolerances", description: "Consistently holding tolerances down to ±0.005mm.", icon: "CheckCircle2" },
    { title: "Complex Geometries", description: "Multi-axis capability for intricate 3D profiling.", icon: "Settings" },
    { title: "High-Speed Machining", description: "12,000 RPM spindles for rapid material removal.", icon: "Zap" },
    { title: "Hard Milling", description: "Machining hardened steels up to 60 HRC.", icon: "ShieldCheck" },
  ],
  industries: [
    { name: "Aerospace", icon: "Plane" },
    { name: "Automotive", icon: "Car" },
    { name: "Medical Implants", icon: "Heart" },
    { name: "Mould Making", icon: "Box" },
    { name: "Oil & Gas", icon: "Zap" },
  ],
  process: [
    "CAM Programming",
    "Setup",
    "Roughing",
    "Finishing",
    "Inspection"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
