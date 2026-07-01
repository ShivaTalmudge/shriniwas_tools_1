"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Factory, Gem, ShieldCheck, Target } from "lucide-react";
import { openQuoteModal } from "@/components/QuoteModal";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <>
      {/* Hero Section with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-brand-dark/60 z-10" />
          <Image
            src="/images/hero_home.png"
            alt="Precision Manufacturing Facility"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="container relative z-10 px-4 md:px-8 text-center text-white mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-brand-accent/20 border border-brand-accent/50 text-brand-accent font-medium text-sm mb-6 tracking-wider uppercase">
              ISO 9001:2015 Certified Company
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6"
          >
            Precision Engineered <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">
              For The Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 font-light"
          >
            Global leaders in high-precision Plastic Injection Moulds, Press Tools, and Die Casting solutions for Fortune 500 companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/products"
              className="px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-medium rounded-sm transition-colors w-full sm:w-auto"
            >
              Explore Products
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium rounded-sm border border-white/30 transition-colors w-full sm:w-auto"
            >
              Our Company
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-brand-primary text-white py-16 relative z-20 shadow-2xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/20 text-center">
            {[
              { number: "18+", label: "Years Experience" },
              { number: "150+", label: "Moulds Delivered" },
              { number: "25+", label: "Skilled Team" },
              { number: "5 Cr", label: "Turnover Potential" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="px-4"
              >
                <div className="text-4xl md:text-5xl font-heading font-bold text-brand-accent mb-2">{stat.number}</div>
                <div className="text-sm md:text-base font-medium text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities - Showcasing All 9 Services */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark mb-6">World-Class Manufacturing Capabilities</h3>
            <p className="text-gray-600 text-lg">We leverage state-of-the-art machinery and decades of engineering expertise to deliver components with micrometer precision.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "DMC Moulding Services in Pune",
                desc: "High-strength, thermoset DMC solutions for superior electrical insulation.",
                href: "/services/dmc-molding-pune"
              },
              {
                title: "CNC & VMC Precision Machining",
                desc: "Aerospace-grade precision using advanced multi-axis machining centers.",
                href: "/services/cnc-vmc-machining"
              },
              {
                title: "CNC Wire Cut EDM",
                desc: "Micron-level accuracy in the hardest conductive materials via spark erosion.",
                href: "/services/cnc-wire-cut"
              },
              {
                title: "Plastic Injection Moulding",
                desc: "High-volume plastic component manufacturing with ISO-certified processes.",
                href: "/services/plastic-molding-dies"
              },
              {
                title: "DMC Mould Manufacturing",
                desc: "Robust, heavy-duty thermoset tooling for immense compression.",
                href: "/services/dmc-dies"
              },
              {
                title: "Bakelite Moulds & Components",
                desc: "Turnkey thermoset tooling and manufacturing for high heat applications.",
                href: "/services/backlite-dies-components"
              },
              {
                title: "Rubber Mould Manufacturing",
                desc: "Expertly engineered moulds for tear-free, flashless elastomeric parts.",
                href: "/services/rubber-molds"
              },
              {
                title: "Jigs & Fixtures",
                desc: "Robust workholding and inspection solutions to eliminate assembly errors.",
                href: "/services/jigs-fixtures"
              },
              {
                title: "Press Tools",
                desc: "High-speed progressive and compound dies for sheet metal stamping.",
                href: "/services/press-tools"
              }
            ].map((item, i) => (
              <Link href={item.href} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-sm shadow-md hover:shadow-xl hover:-translate-y-1 transition-all border-b-4 border-transparent hover:border-brand-accent group h-full flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 bg-brand-light rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                      <Target className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                    </div>
                    <h4 className="text-xl font-heading font-bold mb-3 text-brand-dark group-hover:text-brand-primary transition-colors">{item.title}</h4>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="flex items-center text-brand-primary font-bold text-sm uppercase tracking-wide group-hover:text-brand-accent transition-colors">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Our Work</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold text-brand-dark">Featured Products</h3>
            </div>
            <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-bold rounded-sm hover:bg-brand-dark transition-colors whitespace-nowrap shadow-lg shadow-brand-primary/20 hover:shadow-xl hover:-translate-y-1">
              View All Products <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Precision Injection Mould", category: "Plastic Moulding", image: "/images/hero_products.png" },
              { name: "Automotive PDC Die", category: "Die Casting", image: "/images/hero_capabilities.png" },
              { name: "High-Speed Press Tool", category: "Sheet Metal", image: "/images/hero_machinery.png" },
              { name: "Multi-Cavity Hot Runner", category: "Plastic Moulding", image: "/images/hero_quality.png" },
              { name: "Engine Block Core Box", category: "Gravity Die Casting", image: "/images/hero_home.png" },
              { name: "Aerospace Inspection Jig", category: "Jigs & Fixtures", image: "/images/hero_about.png" }
            ].map((product, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group cursor-pointer"
              >
                <Link href="/products">
                  <div className="relative h-80 rounded-sm overflow-hidden mb-6 shadow-lg bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <span className="text-brand-accent font-bold text-sm tracking-wider uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{product.category}</span>
                      <h4 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{product.name}</h4>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark mb-1 group-hover:text-brand-primary transition-colors">{product.name}</h4>
                  <p className="text-brand-accent font-medium text-sm uppercase tracking-wider">{product.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-brand-dark text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 rounded-2xl overflow-hidden aspect-[4/3] border border-white/10"
              >
                <Image
                  src="https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon"
                  alt="Quality Inspection"
                  fill
                  className="object-cover"
                />
              </motion.div>
              {/* Decorative Elements */}
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-primary rounded-full blur-3xl opacity-30 z-0"></div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-accent rounded-full blur-3xl opacity-20 z-0"></div>
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Why Partner With Us</h2>
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-8">Engineering Excellence As Standard</h3>
              
              <div className="space-y-6">
                {[
                  { title: "Stringent Quality Control", desc: "Every component undergoes rigorous CMM inspection and metallurgical testing." },
                  { title: "Advanced Technology", desc: "State-of-the-art CNC, VMC, and EDM machinery from global leaders." },
                  { title: "End-to-End Solutions", desc: "From CAD/CAM design to final assembly, we manage the entire lifecycle." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15, duration: 0.5 }}
                    className="flex gap-4"
                  >
                    <div className="mt-1">
                      <ShieldCheck className="w-8 h-8 text-brand-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-10 pt-10 border-t border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-400 uppercase tracking-wider font-bold mb-1">Certification</div>
                    <div className="text-xl font-bold">ISO 9001:2015</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-primary relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-brand-dark/20 backdrop-blur-xl border border-white/10 p-12 md:p-16 rounded-3xl shadow-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6">Ready to start your next manufacturing project?</h2>
            <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Get in touch with our engineering team today to discuss your requirements and get a detailed quotation.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button
                onClick={openQuoteModal}
                className="px-10 py-5 bg-brand-accent hover:bg-orange-600 text-white font-bold rounded-sm transition-colors text-lg w-full sm:w-auto shadow-lg shadow-brand-accent/30"
              >
                Request a Quote
              </button>
              <Link
                href="/contact"
                className="px-10 py-5 bg-white text-brand-primary hover:bg-gray-100 font-bold rounded-sm transition-colors text-lg w-full sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
