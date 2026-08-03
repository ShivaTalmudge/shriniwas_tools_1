"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Factory, Cpu, Zap, Component, Wrench, Hammer, ChevronRight } from "lucide-react";

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
      <section className="relative min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-[160px] pb-16 md:pt-[180px] bg-brand-dark border-b border-gray-800">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: 'url(/company_machines/VMC_2.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20 z-10" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="w-full max-w-3xl mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center justify-start gap-2 text-sm text-brand-accent mb-6 uppercase tracking-wider font-bold drop-shadow-md">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl">
                Our Core Services
              </h1>
              <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl drop-shadow-lg">
                We bridge the gap between design and production with six core manufacturing capabilities, entirely managed under one roof to guarantee absolute precision and minimal lead times.
              </p>
            </motion.div>
          </div>

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

      {/* SEO & Manufacturing Standards Section */}
      <section className="py-20 md:py-28 bg-white relative border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">Uncompromising Manufacturing Standards</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                At Shriniwas Tools & Equipments, our commitment to <strong>ISO 9001:2015 certified quality</strong> ensures every component we deliver meets or exceeds your specifications. We understand that in modern manufacturing, a micro-level deviation can halt a production line. That's why our entire workflow—from initial CAM programming to final VMC machining and CNC wire cut EDM—is executed in-house. 
              </p>
              <p>
                Our expertise isn't just in running machines; it's in engineering robust, reliable tooling solutions for the automotive, aerospace, and electrical sectors. Whether you need a complex multi-cavity plastic injection mould, durable Bakelite compression dies, or high-speed press tools for sheet metal stamping, our dedicated tool room provides the heavy iron capacity required for seamless scaling.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Standardized Bottom CTA */}
      <section className="py-20 md:py-28 bg-brand-light border-t border-gray-100 text-center">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Share your CAD files, drawings, or technical specifications with our engineering team for a comprehensive review and commercial quote.
          </p>
          <div className="flex justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-brand-accent to-orange-500 hover:brightness-110 text-white font-bold rounded-full transition-all duration-500 hover:-translate-y-1 shadow-lg hover:shadow-2xl shadow-brand-accent/40 uppercase tracking-wider text-sm group">
              Contact Our Engineers <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
