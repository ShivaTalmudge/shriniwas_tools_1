import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Precision Press Tools & Stamping Dies Pune | Shriniwas Tools",
  description: "Custom design and manufacturing of progressive dies, compound dies, and blanking tools for sheet metal components in Pune. High-speed, burr-free stamping solutions.",
  keywords: "Press tools Pune, stamping dies Bhosari, progressive dies, compound dies, blanking tools, sheet metal tooling",
};

const data: ServiceData = {
  serviceName: "Press Tools & Stamping Dies",
  hero: {
    title: "Press Tools & Stamping Dies",
    subtitle: "High-speed progressive and compound dies engineered for clean cuts and exceptionally long tool life.",
    bgImage: "/company_machines/milling_machine.png",
  },
  overview: {
    title: "Robust Tooling for Sheet Metal Fabrication",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          Sheet metal fabrication demands press tools that can withstand immense repeated forces without dulling or shifting. We design and manufacture heavy-duty progressive dies, compound dies, and simple blanking tools tailored to your exact stamping requirements.
        </p>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          A successful press tool relies heavily on the precision of its punch and die clearances. By utilizing our in-house CNC wire cut machines, we maintain optimal clearances that guarantee burr-free cuts, even in tough materials like stainless steel or spring steel.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          We carefully select tool steels—such as D2 or HSS—and apply specialized heat treatments to maximize wear resistance. The result is a press tool that delivers consistent part geometry over hundreds of thousands of strokes, reducing your maintenance downtime and cost per part.
        </p>
      </>
    ),
    image: "/company_machines/surface_grinder.png",
  },
  keyFeatures: [
    { title: "Progressive Dies", description: "Multi-station tools for complex sheet metal forming in a single press stroke.", icon: "Layers" },
    { title: "Optimal Clearances", description: "Wire-cut punches and dies ensure burr-free, clean shearing.", icon: "Settings" },
    { title: "High-Wear Steels", description: "Use of heat-treated D2 and HSS for extended tool life.", icon: "Shield" },
    { title: "Precision Guided", description: "Heavy-duty guide pillars and bushes for absolute punch alignment.", icon: "CheckCircle2" },
    { title: "Scrap Reduction", description: "Optimized strip layouts to maximize material utilization and minimize waste.", icon: "Layers" },
    { title: "Rapid Setup", description: "Standardized die sets designed for quick changeovers in the press shop.", icon: "Zap" },
  ],
  industries: [
    { name: "Automotive", icon: "Car", description: "High-volume chassis components and specialized brackets." },
    { name: "Electrical & Switchgear", icon: "Zap", description: "Precision blanked copper contacts and grounding plates." },
    { name: "Appliances", icon: "Box", description: "Durable sheet metal housings and internal structural ribs." },
    { name: "Aerospace", icon: "Plane", description: "Clean shearing of specialized light-weight alloys." },
  ],
  process: [
    { title: "Strip Layout Design", description: "Calculating optimal material usage to reduce scrap rates." },
    { title: "Punch & Die Machining", description: "Wire cutting the profiles with perfect clearance margins." },
    { title: "Heat Treatment", description: "Hardening the tool steel to withstand millions of press strokes." },
    { title: "Benching & Assembly", description: "Precision fitting of guide pillars, bushes, and springs." },
    { title: "Trial & Tryout", description: "Running the tool in a press to verify clean, burr-free cuts." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
