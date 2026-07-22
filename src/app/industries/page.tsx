"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Car, Zap, Cpu, Settings, Smartphone, Factory, Hammer, Tractor, ShieldCheck, CheckCircle2 } from "lucide-react";

const industries = [
  {
    title: "Automotive",
    icon: <Car className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "We supply high-precision plastic injection moulds and press tools for critical automotive components. Our tooling ensures consistent dimensional stability required by Tier-1 OEM suppliers.",
    apps: ["Interior Trims", "Under-Hood Components", "Switch Housings", "Dashboard Elements"],
    link: "/services/plastic-molding-dies"
  },
  {
    title: "Electrical",
    icon: <Zap className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Expertise in manufacturing heavy-duty DMC and Bakelite compression moulds for high-voltage applications where dielectric strength and thermal resistance are paramount.",
    apps: ["MCB Housings", "Switchgear Components", "Busbar Supports", "Insulators"],
    link: "/services/backlite-dies-components"
  },
  {
    title: "Electronics",
    icon: <Cpu className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Micro-precision injection moulds and components for the rapidly evolving electronics sector, requiring complex geometries and zero-defect aesthetics.",
    apps: ["Connectors", "Enclosures", "PCB Mounts", "Sensor Housings"],
    link: "/services/plastic-molding-dies"
  },
  {
    title: "Industrial Equipment",
    icon: <Settings className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Robust machining and tooling services for industrial machinery. We deliver precision-machined parts capable of withstanding harsh operational environments.",
    apps: ["Pump Housings", "Gearbox Components", "Valves", "Mounting Brackets"],
    link: "/services/cnc-vmc-machining"
  },
  {
    title: "Consumer Products",
    icon: <Smartphone className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "High-volume mould manufacturing for consumer goods, focusing on rapid cycle times, superior surface finishes, and cost-effective production.",
    apps: ["Appliance Casings", "White Goods Parts", "Kitchenware", "Personal Care Items"],
    link: "/services/plastic-molding-dies"
  },
  {
    title: "Agriculture & Farming",
    icon: <Tractor className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Heavy-duty components and precision tooling engineered to withstand the rigorous demands of modern agricultural machinery, irrigation systems, and farming equipment.",
    apps: ["Irrigation Systems", "Tractor Components", "Harvester Parts", "Heavy-Duty Enclosures"],
    link: "/services/cnc-vmc-machining"
  },
  {
    title: "Engineering",
    icon: <Hammer className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Comprehensive engineering support from DFM to final product. We supply precision jigs, fixtures, and machined components to engineering firms across India.",
    apps: ["Inspection Gauges", "Assembly Jigs", "Machining Fixtures", "Custom Tooling"],
    link: "/services/jigs-fixtures"
  },
  {
    title: "Manufacturing",
    icon: <Factory className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Supporting the manufacturing sector with progressive press tools and custom automation fixtures to enhance production line efficiency.",
    apps: ["Sheet Metal Stampings", "Transfer Dies", "Progressive Dies", "Automation Jigs"],
    link: "/services/press-tools"
  },
  {
    title: "OEM Partners",
    icon: <ShieldCheck className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-300" />,
    desc: "Acting as an extended manufacturing arm for Original Equipment Manufacturers (OEMs), providing end-to-end tooling and component supply.",
    apps: ["Contract Manufacturing", "Turnkey Tooling Solutions", "Mass Production", "Sub-Assemblies"],
    link: "/contact"
  }
];

export default function Industries() {
  return (
    <>
      {/* 1. High-Impact Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-start overflow-hidden pt-[120px] pb-10 md:pt-[140px] md:pb-12">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/20 z-10" />
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: 'url(/company_machines/bannerimage2.png)' }}
          />
        </div>

        <div className="container relative z-10 px-4 md:px-8 text-left text-white mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 border border-brand-accent/50 text-brand-accent font-medium text-sm mb-6 tracking-wider uppercase">
              Powering Global Sectors
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-3xl md:text-4xl font-heading font-extrabold tracking-tight mb-6 leading-tight"
          >
            Industries <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">
              We Serve
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-xl text-gray-300 max-w-2xl font-light leading-relaxed"
          >
            Delivering ISO 9001:2015 certified tooling and manufacturing solutions tailored to the extreme demands of India&apos;s leading industrial sectors.
          </motion.p>
        </div>
      </section>

      {/* 2. Premium Industries Grid */}
      <section className="py-20 md:py-28 bg-brand-light relative z-20 -mt-10 rounded-t-[40px] shadow-2xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white p-8 md:p-10 rounded-sm shadow-lg hover:shadow-2xl transition-all duration-500 border-b-4 border-transparent hover:border-brand-accent group h-full flex flex-col"
              >
                <div className="w-20 h-20 bg-brand-light rounded-sm flex items-center justify-center mb-8 group-hover:bg-brand-primary group-hover:rotate-3 transition-all duration-500 shadow-inner">
                  {ind.icon}
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-4 text-brand-dark group-hover:text-brand-primary transition-colors duration-300">
                  {ind.title}
                </h3>
                
                <p className="text-gray-600 mb-8 text-base leading-relaxed flex-1">
                  {ind.desc}
                </p>
                
                <div className="mb-8">
                  <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Key Applications</h4>
                  <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                    {ind.apps.map((app, idx) => (
                      <li key={idx} className="text-sm text-brand-dark font-medium flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                        <span className="leading-tight">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto">
                  <Link 
                    href={ind.link}
                    className="inline-flex items-center text-brand-primary font-bold text-sm uppercase tracking-wide group-hover:text-brand-accent transition-colors"
                  >
                    View Relevant Capabilities <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Industry Standards & Quality (Trust) */}
      <section className="py-20 md:py-28 bg-white overflow-hidden border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Uncompromising Quality</h2>
                <h3 className="text-3xl md:text-3xl font-heading font-black text-brand-dark mb-6 leading-tight">Why Leading Sectors Trust Shriniwas Tools</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Different industries have vastly different requirements, from the extreme thermal resistance needed in Electrical switchgears to the sub-micron tolerances required by Automotive OEMs. Our facility is engineered to meet them all.
                </p>
                
                <div className="space-y-6">
                  {[
                    { title: "ISO 9001:2015 Certified", desc: "Internationally recognized quality management systems ensuring consistent, traceable manufacturing." },
                    { title: "Advanced CMM Inspection", desc: "Validating complex geometries down to the micron before any batch leaves our facility." },
                    { title: "Material Traceability", desc: "Strict verification of raw materials—from aerospace-grade aluminum to high-impact polymers." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="shrink-0 mt-1">
                        <ShieldCheck className="w-6 h-6 text-brand-accent" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-dark">{item.title}</h4>
                        <p className="text-gray-600 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
            
            <div className="lg:w-1/2 relative w-full h-[400px] md:h-[500px]">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative z-10 w-full h-full rounded-sm overflow-hidden shadow-2xl border border-gray-100"
              >
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: 'url(/company_machines/programmer_office.png)' }}
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-light rounded-full z-0 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dedicated Call to Action (Action) */}
      <section className="relative py-24 bg-brand-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: "url(/company_machines/wire_cut_floor.png)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-primary/95 to-brand-primary/90 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-3xl font-heading font-black text-white mb-6 leading-tight">Have an Industry-Specific Challenge?</h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">Whether you need durable agricultural components or micro-precision automotive moulds, our engineers are ready to solve it.</p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-10 py-5 bg-brand-accent hover:bg-orange-600 text-white font-bold text-lg uppercase tracking-wider rounded-sm hover:-translate-y-1 hover:shadow-2xl shadow-brand-accent/40 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
              >
                Let&apos;s Discuss Your Project <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
