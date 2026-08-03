import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "CNC & VMC Machining Services Pune | Shriniwas Tools & Equipments",
  description: "High-precision CNC and VMC machining services in Bhosari, Pune. We specialize in machining complex 3D profiles, hardened tool steel, and aerospace-grade components with micron-level accuracy.",
  keywords: "VMC machining Pune, CNC machining Bhosari, tool and die machining, 3D profile machining, hardened steel machining, precision components",
};

const data: ServiceData = {
  serviceName: "CNC & VMC Machining",
  hero: {
    title: "CNC & VMC Machining",
    subtitle: "High-tolerance industrial components, complex mould bases, and precision aerospace-grade parts.",
    bgImage: "/company_machines/VMC_2.png",
  },
  overview: {
    title: "Uncompromising Precision with Vertical Machining",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          At Shriniwas Tools & Equipments, our machining division is anchored by three advanced Vertical Machining Centers (VMCs) capable of handling heavy-duty bed sizes up to 1300x600x600 mm. We leverage these powerful machines to rapidly translate intricate CAD designs into perfectly dimensioned physical components.
        </p>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          Our deep expertise lies in machining extremely tough and pre-hardened tool steels—materials that conventionally wear out tools and compromise accuracy. By utilizing high-end carbide tooling and advanced CAM strategies, we achieve impeccable surface finishes and maintain tolerances down to 5 microns.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Whether you require complex 3D core and cavity profiling for an injection mould, or a batch run of critical aerospace brackets, our team ensures absolute repeatability. Combined with our conventional M1TR and milling setups, we offer a comprehensive, end-to-end machining solution under one roof.
        </p>
      </>
    ),
    image: "/company_machines/VMC1.png",
  },
  keyFeatures: [
    { title: "Micron-Level Tolerance", description: "Consistently achieving dimensional accuracy down to ±5 microns on critical profiles.", icon: "CheckCircle2" },
    { title: "Large Machining Envelope", description: "Handling substantial workpieces with a maximum capacity of 1300x600x600 mm.", icon: "Maximize" },
    { title: "Hardened Metals", description: "Specialized in effortlessly machining pre-hardened alloys and tough tool steels.", icon: "Shield" },
    { title: "Complex 3D Profiling", description: "Utilizing advanced CAM programming to create intricate, multi-axis geometries.", icon: "Box" },
    { title: "Rapid Turnaround", description: "Optimized toolpaths and high spindle speeds ensure fast project completion.", icon: "Zap" },
    { title: "Consistent Quality", description: "Automated probing and tool wear compensation for identical mass production.", icon: "CheckCircle2" },
  ],
  industries: [
    { name: "Aerospace", icon: "Plane", description: "Precision machining for critical brackets and engine components." },
    { name: "Automotive", icon: "Car", description: "High-volume components and robust fixtures for assembly lines." },
    { name: "Heavy Engineering", icon: "Settings", description: "Machining large, heavy-duty parts for industrial machinery." },
    { name: "Tool & Die", icon: "Wrench", description: "Manufacturing complex mould bases and hardened tool inserts." },
  ],
  process: [
    { title: "CAD/CAM Programming", description: "Translating your blueprints into optimized 3D toolpaths." },
    { title: "Material Setup & Fixturing", description: "Rigidly securing the workpiece to prevent any vibration." },
    { title: "High-Speed Roughing", description: "Rapid material removal using heavy-duty carbide cutters." },
    { title: "Precision Finishing", description: "Multi-axis passes to achieve micron-level surface finishes." },
    { title: "CMM Quality Inspection", description: "Verifying all critical dimensions against the original CAD data." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
