"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Car, Zap, Cpu, Settings, Smartphone, Factory, Hammer, Truck, ShieldCheck } from "lucide-react";

const industries = [
  {
    title: "Automotive",
    icon: <Car className="w-8 h-8 text-white" />,
    desc: "We supply high-precision plastic injection moulds and press tools for critical automotive components. Our tooling ensures consistent dimensional stability required by Tier-1 OEM suppliers.",
    apps: ["Interior Trims", "Under-Hood Components", "Switch Housings", "Dashboard Elements"],
    link: "/services/plastic-molding-dies"
  },
  {
    title: "Electrical",
    icon: <Zap className="w-8 h-8 text-white" />,
    desc: "Expertise in manufacturing heavy-duty DMC and Bakelite compression moulds for high-voltage applications where dielectric strength and thermal resistance are paramount.",
    apps: ["MCB Housings", "Switchgear Components", "Busbar Supports", "Insulators"],
    link: "/services/dmc-molding-pune"
  },
  {
    title: "Electronics",
    icon: <Cpu className="w-8 h-8 text-white" />,
    desc: "Micro-precision injection moulds and components for the rapidly evolving electronics sector, requiring complex geometries and zero-defect aesthetics.",
    apps: ["Connectors", "Enclosures", "PCB Mounts", "Sensor Housings"],
    link: "/services/plastic-molding-dies"
  },
  {
    title: "Industrial Equipment",
    icon: <Settings className="w-8 h-8 text-white" />,
    desc: "Robust machining and tooling services for industrial machinery. We deliver precision-machined parts capable of withstanding harsh operational environments.",
    apps: ["Pump Housings", "Gearbox Components", "Valves", "Mounting Brackets"],
    link: "/services/cnc-vmc-machining"
  },
  {
    title: "Consumer Products",
    icon: <Smartphone className="w-8 h-8 text-white" />,
    desc: "High-volume mould manufacturing for consumer goods, focusing on rapid cycle times, superior surface finishes, and cost-effective production.",
    apps: ["Appliance Casings", "White Goods Parts", "Kitchenware", "Personal Care Items"],
    link: "/services/plastic-molding-dies"
  },
  {
    title: "Engineering",
    icon: <Hammer className="w-8 h-8 text-white" />,
    desc: "Comprehensive engineering support from DFM to final product. We supply precision jigs, fixtures, and machined components to engineering firms across India.",
    apps: ["Inspection Gauges", "Assembly Jigs", "Machining Fixtures", "Custom Tooling"],
    link: "/services/jigs-fixtures"
  },
  {
    title: "Heavy Engineering",
    icon: <Truck className="w-8 h-8 text-white" />,
    desc: "Manufacturing heavy-duty moulds and components for construction, mining, and agricultural equipment where extreme durability is non-negotiable.",
    apps: ["Structural Components", "Heavy Duty Rubber Moulds", "Wear Parts", "Castings Machining"],
    link: "/services/cnc-vmc-machining"
  },
  {
    title: "Manufacturing",
    icon: <Factory className="w-8 h-8 text-white" />,
    desc: "Supporting the manufacturing sector with progressive press tools and custom automation fixtures to enhance production line efficiency.",
    apps: ["Sheet Metal Stampings", "Transfer Dies", "Progressive Dies", "Automation Jigs"],
    link: "/services/press-tools"
  },
  {
    title: "OEM Partners",
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    desc: "Acting as an extended manufacturing arm for Original Equipment Manufacturers (OEMs), providing end-to-end tooling and component supply.",
    apps: ["Contract Manufacturing", "Turnkey Tooling Solutions", "Mass Production", "Sub-Assemblies"],
    link: "/contact"
  }
];

export default function Industries() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/images/hero_home.png)' }}
        >
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">Industries We Serve</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Delivering specialized tooling and manufacturing solutions tailored to the unique demands of global industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden group hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
              >
                <div className="bg-brand-dark p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary rounded-full blur-2xl opacity-20 translate-x-1/2 -translate-y-1/2" />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-14 h-14 bg-brand-accent rounded-xl flex items-center justify-center shadow-lg">
                      {ind.icon}
                    </div>
                    <h3 className="text-xl font-heading font-bold text-white group-hover:text-brand-primary transition-colors">{ind.title}</h3>
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-gray-600 mb-6 flex-1 leading-relaxed">{ind.desc}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-brand-dark uppercase tracking-wider mb-3">Key Applications:</h4>
                    <ul className="space-y-2">
                      {ind.apps.map((app, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-500 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={ind.link}
                    className="inline-flex items-center text-brand-primary font-bold hover:text-brand-accent transition-colors mt-auto"
                  >
                    View Relevant Service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
