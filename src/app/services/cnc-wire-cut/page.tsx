import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Wire Cut EDM Services in Pune | Shriniwas Tools",
  description: "Specialized Wire Cut EDM services in Pune. We achieve micron-level precision in conductive metals and hard alloys for complex tooling.",
};

const data: ServiceData = {
  serviceName: "CNC Wire Cut EDM",
  hero: {
    title: "CNC Wire Cut EDM",
    subtitle: "Achieving impossible geometries and micron-level accuracy in the hardest conductive materials using advanced Electrical Discharge Machining.",
    bgImage: "/company_machines/wire_cut_floor.png",
  },
  overview: {
    title: "Precision Wire Cut EDM Services",
    description: (
      <>
        <p className="mb-4">
          When traditional subtractive machining cannot achieve the required internal corners or when the material is too hard to mill, Wire Cut EDM offers the ultimate solution. 
        </p>
        <p>
          At Shriniwas Tools, our wire EDM department utilizes electrically charged brass wire to slice through conductive metals via microscopic electrical sparks. This contactless cutting ensures zero mechanical stress on the workpiece, ensuring absolute flatness and structural integrity.
        </p>
      </>
    ),
    image: "/company_machines/wirecut_image2.png",
  },
  keyFeatures: [
    { title: "Zero Cutting Force", description: "No mechanical stress on fragile or thin-walled parts.", icon: "Zap" },
    { title: "Extreme Accuracy", description: "Achieving tolerances as tight as ±0.002 mm.", icon: "CheckCircle2" },
    { title: "Hardness Independent", description: "Cuts Tungsten Carbide as easily as Aluminum.", icon: "ShieldCheck" },
    { title: "Complex Tapers", description: "Multi-axis capability for complex conical shapes.", icon: "Settings" },
  ],
  industries: [
    { name: "Tool & Die Making", icon: "Settings" },
    { name: "Medical Devices", icon: "Heart" },
    { name: "Extrusion Profiles", icon: "Zap" },
    { name: "Aerospace", icon: "Plane" },
  ],
  process: [
    "CAD Import",
    "Start Hole",
    "Threading",
    "Spark Erosion",
    "Skim Passes"
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
