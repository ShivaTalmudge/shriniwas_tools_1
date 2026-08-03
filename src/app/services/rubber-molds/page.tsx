import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Rubber Molds & Compression Dies Pune | Shriniwas Tools",
  description: "High-precision rubber compression and transfer molds in Pune. Specializing in flash-free O-rings, gaskets, and complex automotive rubber seals.",
  keywords: "Rubber molds Pune, compression dies Bhosari, transfer molding, O-ring molds, automotive rubber tooling",
};

const data: ServiceData = {
  serviceName: "Rubber Molds",
  hero: {
    title: "Rubber Molds",
    subtitle: "Precision compression and transfer molds for flash-free rubber gaskets, O-rings, and complex automotive seals.",
    bgImage: "/company_machines/bannerimage2.png",
  },
  overview: {
    title: "Precision Tooling for Elastomers",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          Molding rubber components requires an entirely different approach to tooling compared to plastics. Because rubber exhibits extreme flow characteristics under heat and pressure, the parting lines of a rubber mold must be machined to absolute zero-tolerance to prevent excessive flashing and material waste.
        </p>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          At Shriniwas Tools & Equipments, we excel in designing and manufacturing multi-cavity compression and transfer molds for a wide variety of elastomers, including silicone, EPDM, and NBR. By utilizing our high-speed VMCs and Wire Cut EDM machines, we achieve seamless mating surfaces.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We understand the specific shrinkage rates of different rubber compounds. Our design team meticulously calculates cavity dimensions to ensure your final cured components—whether they are tiny automotive O-rings or massive industrial vibration dampeners—meet exact dimensional specifications.
        </p>
      </>
    ),
    image: "/company_machines/wirecut_image2.png",
  },
  keyFeatures: [
    { title: "Zero-Tolerance Parting", description: "Flawlessly machined mating surfaces to drastically minimize rubber flashing.", icon: "CheckCircle2" },
    { title: "Transfer & Compression", description: "Expertise in both molding techniques depending on part complexity.", icon: "Layers" },
    { title: "Shrinkage Calculation", description: "Precise cavity scaling tailored to specific elastomer compounds.", icon: "Settings" },
    { title: "Multi-Cavity Layouts", description: "Optimized runner and venting designs for high-volume production.", icon: "Factory" },
    { title: "Tear-Resistant Demolding", description: "Engineered cavity drafts to ensure complex rubber parts can be safely extracted.", icon: "Shield" },
    { title: "Thermal Optimization", description: "Balanced heating plates to prevent under-curing and maintain elastomer elasticity.", icon: "Flame" },
  ],
  industries: [
    { name: "Automotive Seals", icon: "Car", description: "High-durability O-rings, gaskets, and custom weather seals." },
    { name: "Hydraulics & Pneumatics", icon: "Wrench", description: "Zero-flash seals to handle extreme fluid pressures." },
    { name: "Medical Tubing", icon: "Heart", description: "Clean, burr-free molding for sensitive medical elastomers." },
    { name: "Industrial Dampeners", icon: "Box", description: "Heavy-duty rubber mounts to absorb mechanical vibrations." },
  ],
  process: [
    { title: "Compound Shrinkage Analysis", description: "Calculating exact cavity scaling based on the specific elastomer." },
    { title: "Mold Base & Cavity Machining", description: "CNC milling the core shapes from high-grade steel blanks." },
    { title: "High-Precision Grinding", description: "Achieving zero-tolerance parting lines to prevent flash." },
    { title: "Tear-Trim Design", description: "Incorporating features for rapid, clean removal of excess rubber." },
    { title: "Sample Curing & Verification", description: "Molding a prototype batch to verify dimensions and vulcanization." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
