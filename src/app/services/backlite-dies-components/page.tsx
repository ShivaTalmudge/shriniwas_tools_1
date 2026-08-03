import { Metadata } from "next";
import ServicePageTemplate, { ServiceData } from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Bakelite Dies & Components Pune | Shriniwas Tools & Equipments",
  description: "Expert manufacturing of Bakelite (phenolic resin) molding tools in Pune. Highly polished, wear-resistant cavities for durable electrical and automotive components.",
  keywords: "Bakelite dies Pune, phenolic resin molds Bhosari, thermoset tooling, electrical switchgear components",
};

const data: ServiceData = {
  serviceName: "Bakelite Dies & Components",
  hero: {
    title: "Bakelite Dies & Components",
    subtitle: "Highly polished, wear-resistant compression tooling for dimensionally stable phenolic resin components.",
    bgImage: "/company_machines/hero_bakelite_mould.png",
  },
  overview: {
    title: "Mastery in Phenolic Resin Molding",
    description: (
      <>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          Bakelite (phenolic resin) remains an irreplaceable material in electrical and automotive engineering due to its extraordinary heat resistance, electrical non-conductivity, and structural rigidity. Molding Bakelite, however, requires specialized tooling capable of withstanding aggressive outgassing and abrasive wear.
        </p>
        <p className="mb-4 text-gray-700 text-lg leading-relaxed">
          We design our Bakelite compression dies with strategically placed ejector pins, highly polished cavity surfaces, and robust hardened steel inserts. This meticulous construction prevents the brittle Bakelite from sticking to the mold and minimizes wear over long production runs.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          In addition to manufacturing the dies, our facility is fully equipped to handle full-scale Bakelite component production. From intricately threaded electrical switchgear parts to heavy-duty automotive ashtrays and handles, we deliver finished components with superior surface finishes and absolute dimensional stability.
        </p>
      </>
    ),
    image: "/company_machines/edm_drill.png",
  },
  keyFeatures: [
    { title: "Hardened Tooling", description: "Specialized steel inserts to combat the abrasive nature of phenolic resins.", icon: "ShieldCheck" },
    { title: "Mirror Polish Cavities", description: "Ultra-smooth finishes to ensure flawless ejection of brittle components.", icon: "CheckCircle2" },
    { title: "Production Ready", description: "In-house compression presses for full-scale Bakelite part manufacturing.", icon: "Factory" },
    { title: "Electrical Insulation", description: "Parts designed specifically for high-voltage arc resistance and safety.", icon: "Zap" },
    { title: "Dimensional Stability", description: "Moulds constructed to ensure components maintain strict dimensions even under severe thermal stress.", icon: "Layers" },
    { title: "Custom Formulation", description: "Adapting tool designs to perfectly accommodate specific Bakelite powder formulations and shrink rates.", icon: "Settings" },
  ],
  industries: [
    { name: "Electrical & Switchgear", icon: "Zap", description: "Arc-resistant covers and bases for high-voltage MCBs." },
    { name: "Automotive Interiors", icon: "Car", description: "Durable, heat-resistant handles and ashtray components." },
    { name: "Kitchen Appliances", icon: "Settings", description: "Insulated handles and bases for domestic heating appliances." },
    { name: "Heavy Machinery", icon: "Wrench", description: "Robust control knobs and terminal blocks." },
  ],
  process: [
    { title: "Draft & Ejection Analysis", description: "Designing optimal draft angles for brittle phenolic materials." },
    { title: "Cavity Machining & Polishing", description: "Milling the profile and achieving a mirror-like cavity finish." },
    { title: "Hard Chroming (Optional)", description: "Applying chrome for extreme wear resistance against abrasives." },
    { title: "Resin Compression Curing", description: "Executing the production run under heat and high tonnage." },
    { title: "Flash Removal & Inspection", description: "Deflashing the cured parts and testing electrical/dimensional integrity." }
  ]
};

export default function Page() {
  return <ServicePageTemplate data={data} />;
}
