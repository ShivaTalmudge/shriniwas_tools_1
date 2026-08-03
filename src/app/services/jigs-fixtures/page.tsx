import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Precision Jigs & Fixtures Manufacturing Pune | Shriniwas Tools",
  description: "Custom design and fabrication of welding fixtures, machining jigs, and inspection gauges in Pune. Enhancing production repeatability and accuracy.",
  keywords: "Jigs and fixtures Pune, welding fixtures Bhosari, inspection gauges, machining jigs, custom assembly fixtures",
};

const data: ServiceData = {
  serviceName: "Jigs, Fixtures & Gauges",
  hero: {
    title: "Jigs, Fixtures & Gauges",
    subtitle: "Custom-engineered tooling to guarantee repeatability, accuracy, and efficiency on your production line.",
    bgImage: "/company_machines/surface_plate.jpg",
  },
  overview: {
    title: "Streamlining Your Assembly and Machining",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          In high-volume manufacturing, minimizing setup time and human error is paramount. We design and build highly rigid jigs, fixtures, and inspection gauges that lock your components into perfect alignment, allowing your operators to machine, weld, or assemble parts with zero guesswork.
        </p>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          Whether you need a heavy-duty robotic welding fixture for automotive frames or a delicate CMM inspection gauge for aerospace brackets, we tailor the ergonomics and clamping mechanisms to suit your specific workflow. We frequently incorporate quick-release pneumatics and hardened resting pads to ensure long-term durability.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          Every fixture leaving our Bhosari facility is rigorously calibrated against the original 3D CAD model using precise metrology equipment. This guarantees that your first part and your ten-thousandth part will be absolutely identical.
        </p>
      </>
    ),
    image: "/company_machines/digital_caliper.jpg",
  },
  keyFeatures: [
    { title: "Custom Ergonomics", description: "Designed for operator comfort and rapid part loading/unloading.", icon: "CheckCircle2" },
    { title: "Absolute Repeatability", description: "Ensuring zero deviation in machining and welding operations.", icon: "Settings" },
    { title: "Hardened Locators", description: "Wear-resistant resting pads and pins for extended fixture life.", icon: "ShieldCheck" },
    { title: "Turnkey Calibration", description: "Fully inspected and calibrated before deployment on your floor.", icon: "Wrench" },
    { title: "Fool-Proof Design", description: "Poka-yoke implementations to completely prevent incorrect part loading by operators.", icon: "ShieldCheck" },
    { title: "Rapid Clamping", description: "Integration of toggle and pneumatic clamps to significantly reduce cycle times.", icon: "Zap" },
  ],
  industries: [
    { name: "Automotive Assembly", icon: "Car", description: "Heavy-duty welding and assembly fixtures for vehicle frames." },
    { name: "Heavy Machining", icon: "Factory", description: "Rigid holding jigs for milling large industrial castings." },
    { name: "Aerospace", icon: "Plane", description: "High-precision inspection gauges for critical flight components." },
    { name: "Quality Control", icon: "Box", description: "Custom Go/No-Go gauges for rapid floor inspection." },
  ],
  process: [
    { title: "Workflow Analysis", description: "Studying your assembly process to identify alignment bottlenecks." },
    { title: "3D Fixture Design", description: "Engineering the CAD model with precise clamping and resting points." },
    { title: "CNC Machining & Grinding", description: "Manufacturing the fixture base and hardened locators to exact specs." },
    { title: "Assembly & Pneumatics", description: "Integrating quick-release clamps, pneumatics, and sensor mounts." },
    { title: "CMM Calibration & Tryout", description: "Validating the fixture dimensions and running a real-world assembly test." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
