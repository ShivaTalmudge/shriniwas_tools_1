"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Cpu, Zap, Component, Wrench, Hammer } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Plastic Injection Moulding",
      desc: "High-volume precision manufacturing of plastic components for automotive and electrical sectors.",
      href: "/services/plastic-molding-dies",
      icon: Factory
    },
    {
      title: "CNC & VMC Machining",
      desc: "High-tolerance precision machining for complex industrial components and aerospace-grade parts.",
      href: "/services/cnc-vmc-machining",
      icon: Cpu
    },
    {
      title: "CNC Wire Cut EDM",
      desc: "Micron-level accuracy cutting for hard conductive metals, ideal for complex mould cavities.",
      href: "/services/cnc-wire-cut",
      icon: Zap
    },
    {
      title: "DMC & Bakelite Moulds",
      desc: "Custom tooling and manufacturing for heat-resistant DMC & Bakelite electrical components.",
      href: "/services/backlite-dies-components",
      icon: Component
    },
    {
      title: "Jigs & Fixtures",
      desc: "Custom workholding, assembly, and inspection fixtures to improve your production accuracy.",
      href: "/services/jigs-fixtures",
      icon: Wrench
    },
    {
      title: "Press Tools",
      desc: "High-speed progressive, compound, and forming dies for consistent sheet metal stamping.",
      href: "/services/press-tools",
      icon: Hammer
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[95vh] flex flex-col justify-center bg-brand-dark overflow-hidden pt-[140px] pb-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/50 z-10" />
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "40px 40px" }}></div>
        </div>
        
        <div className="container relative z-10 mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">Services</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                Comprehensive manufacturing capabilities ranging from precision tool making to mass production of critical industrial components.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((item, i) => (
              <Link href={item.href} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-sm shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-transparent hover:border-brand-accent group h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-brand-light rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                      <item.icon className="w-6 h-6 text-brand-primary group-hover:text-brand-accent transition-colors" />
                    </div>
                    <h4 className="text-xl font-heading font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h4>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex items-center text-brand-primary font-bold text-sm uppercase tracking-wider group-hover:text-brand-accent transition-colors mt-auto">
                    Explore Service <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
