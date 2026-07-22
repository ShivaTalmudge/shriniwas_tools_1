"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Factory, ShieldCheck, Target, Cpu, Zap, Car, Smartphone, Plane, Award } from "lucide-react";
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
      {/* 1. Hero Section (Attention & Value) */}
      <section ref={heroRef} className="relative min-h-[100dvh] md:h-screen flex items-center justify-start overflow-hidden pt-[120px] pb-10 md:pt-[140px] md:pb-12">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/20 z-10" />
          <Image
            src="/company_machines/bannerimage1.png"
            alt="Precision Tooling & Manufacturing Facility in India"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="container mx-auto relative z-10 px-4 md:px-8 text-left text-white mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-brand-accent/20 border border-brand-accent/50 text-brand-accent font-medium text-sm mb-6 tracking-wider uppercase">
              <Award className="w-4 h-4" /> ISO 9001:2015 Certified Tool Room in Pune
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-heading font-extrabold tracking-tight mb-6 leading-tight"
          >
            Precision Tooling & <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">
              Manufacturing Excellence
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mb-10 font-light leading-relaxed"
          >
            We are India&apos;s premier engineering partner for high-volume <strong className="font-medium text-white">Plastic Injection Moulding</strong>, <strong className="font-medium text-white">CNC Machining Services</strong>, and robust <strong className="font-medium text-white">Press Tools</strong>. Driving innovation for automotive and electronics OEMs since 2006.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-6"
          >
            <button
              onClick={openQuoteModal}
              className="px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold uppercase tracking-wider rounded-full hover:-translate-y-1 hover:shadow-xl shadow-brand-accent/20 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3"
            >
              Request a Quote <ArrowRight className="w-5 h-5" />
            </button>
            <Link
              href="/services"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold uppercase tracking-wider rounded-full border border-white/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 w-full sm:w-auto flex items-center justify-center"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 2. Trust Ticker (Social Proof) */}
      <section className="bg-brand-primary text-white py-6 overflow-hidden border-b border-white/10 relative z-20">
        <div className="container mx-auto px-4 flex items-center">
          <div className="w-32 md:w-48 shrink-0 font-heading font-bold text-sm md:text-base uppercase tracking-wider text-white/70 border-r border-white/20 mr-8 hidden md:block">
            Trusted By<br/>Industry Leaders
          </div>
          <div className="w-full flex overflow-hidden">
            <motion.div 
              animate={{ x: [0, -1000] }} 
              transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
              className="flex items-center gap-16 md:gap-24 whitespace-nowrap opacity-60"
            >
              {/* Dummy Logos text */}
              <span className="text-xl font-bold uppercase tracking-widest font-heading">AutoCorp Dynamics</span>
              <span className="text-xl font-bold uppercase tracking-widest font-heading">ElectroSys India</span>
              <span className="text-xl font-bold uppercase tracking-widest font-heading">AeroTech Solutions</span>
              <span className="text-xl font-bold uppercase tracking-widest font-heading">Global Plastics OEM</span>
              <span className="text-xl font-bold uppercase tracking-widest font-heading">Precision Forge</span>
              {/* Duplicated for seamless scrolling */}
              <span className="text-xl font-bold uppercase tracking-widest font-heading">AutoCorp Dynamics</span>
              <span className="text-xl font-bold uppercase tracking-widest font-heading">ElectroSys India</span>
              <span className="text-xl font-bold uppercase tracking-widest font-heading">AeroTech Solutions</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section className="bg-brand-dark text-white py-12 relative z-20 shadow-2xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:divide-x md:divide-white/10 text-center">
            {[
              { number: "18+", label: "Years Excellence" },
              { number: "25+", label: "Advanced Machines" },
              { number: "220+", label: "Moulds Delivered" },
              { number: "100+", label: "OEM Clients" },
              { number: "ISO", label: "9001:2015 Certified" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="px-4"
              >
                <div className="text-3xl md:text-4xl font-heading font-black text-brand-accent mb-2">{stat.number}</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-wider text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Manufacturing Capabilities (The "What") */}
      <section className="py-20 md:py-28 bg-brand-light relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Our Expertise</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-6">Core Manufacturing Capabilities</h3>
            <p className="text-gray-600 text-lg">We deliver end-to-end industrial solutions across India, maintaining micron-level accuracy from rapid prototyping to mass manufacturing.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Plastic Injection Moulding",
                desc: "High-volume precision manufacturing of plastic components. We specialize in producing highly durable, defect-free parts for demanding automotive and electrical applications.",
                href: "/services/plastic-molding-dies",
                icon: Factory
              },
              {
                title: "CNC & VMC Machining Services",
                desc: "Aerospace-grade multi-axis precision machining. Our advanced tool room in Pune consistently holds tolerances down to ±0.005mm for complex industrial geometries.",
                href: "/services/cnc-vmc-machining",
                icon: Cpu
              },
              {
                title: "CNC Wire Cut EDM",
                desc: "Micron-level accuracy for the hardest conductive metals. Achieve impossible geometries with zero cutting force, ensuring absolute integrity of thin-walled components.",
                href: "/services/cnc-wire-cut",
                icon: Zap
              }
            ].map((item, i) => (
              <Link href={item.href} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-8 md:p-10 rounded-sm shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-brand-accent/20 hover:border-brand-accent group h-full flex flex-col"
                >
                  <div className="w-16 h-16 bg-brand-light rounded-sm flex items-center justify-center mb-8 group-hover:bg-brand-primary transition-colors">
                    <item.icon className="w-8 h-8 text-brand-primary group-hover:text-brand-accent transition-colors" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold mb-4 text-brand-dark group-hover:text-brand-primary transition-colors">{item.title}</h4>
                  <p className="text-gray-600 mb-8 text-base leading-relaxed flex-1">{item.desc}</p>
                  <div className="flex items-center text-brand-primary font-bold text-sm uppercase tracking-wide group-hover:text-brand-accent transition-colors mt-auto">
                    View Specifications <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center justify-center font-bold text-brand-primary hover:text-brand-accent uppercase tracking-wider transition-colors border-b-2 border-brand-primary hover:border-brand-accent pb-1">
              View All 6 Specialized Services <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Industries We Serve (Relevance) */}
      <section className="py-20 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Sectors We Empower</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-6">Industries We Serve</h3>
            <p className="text-gray-600 text-lg">Partnering with OEM leaders across India&apos;s most demanding manufacturing sectors.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Automotive", icon: Car, desc: "High-stress components and engine parts." },
              { name: "Electrical", icon: Zap, desc: "Switchgears and high-voltage insulators." },
              { name: "Aerospace", icon: Plane, desc: "Ultra-tight tolerance machined parts." },
              { name: "Consumer Goods", icon: Smartphone, desc: "Flawless finishes for commercial products." }
            ].map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-light p-8 rounded-sm text-center group hover:bg-brand-primary transition-colors duration-300"
              >
                <ind.icon className="w-12 h-12 mx-auto mb-4 text-brand-primary group-hover:text-brand-accent transition-colors" />
                <h4 className="text-xl font-bold text-brand-dark mb-2 group-hover:text-white transition-colors">{ind.name}</h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">{ind.desc}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/industries" className="inline-flex items-center justify-center font-bold text-brand-primary hover:text-brand-accent uppercase tracking-wider transition-colors border-b-2 border-brand-primary hover:border-brand-accent pb-1">
              Explore All Industries We Serve <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 md:py-28 bg-brand-dark">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Tangible Results</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-white">Precision Components</h3>
            </div>
            <Link href="/products" className="inline-flex items-center justify-center px-8 py-4 bg-brand-primary text-white font-bold uppercase tracking-wider text-sm rounded-sm hover:bg-white hover:text-brand-dark transition-colors whitespace-nowrap shadow-lg">
              View All Products <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Automotive Housing", category: "Plastic Moulding", image: "/images/products-cropped/Image10.png" },
              { name: "Electrical Insulator", category: "DMC Moulding", image: "/images/products-cropped/Image5.png" },
              { name: "Precision Gear", category: "CNC Machined", image: "/images/products-cropped/Image19.png" }
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
                  <div className="relative h-80 rounded-sm overflow-hidden mb-6 bg-white border border-white/10">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-6 mix-blend-multiply group-hover:scale-110 group-hover:rotate-1 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/95 via-brand-dark/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                      <span className="text-brand-accent font-bold text-xs tracking-wider uppercase mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">{product.category}</span>
                      <h4 className="text-xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">{product.name}</h4>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-white mb-1 group-hover:text-brand-accent transition-colors">{product.name}</h4>
                  <p className="text-gray-400 font-medium text-xs uppercase tracking-wider">{product.category}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why Choose Us (The "Why") */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            <div className="lg:w-1/2">
              <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">The Shriniwas Advantage</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-8 leading-tight">Zero-Defect Manufacturing Guaranteed</h3>
              
              <div className="space-y-8">
                {[
                  { icon: ShieldCheck, title: "Stringent Quality Control", desc: "Every mould and component undergoes rigorous dimensional inspection using advanced CMM and visual tech. We don't ship until it's perfect." },
                  { icon: Factory, title: "End-to-End Solutions", desc: "From CAD/CAM design and prototype tooling to mass production. We handle the entire lifecycle under one roof to drastically reduce your lead times." },
                  { icon: Target, title: "18+ Years Proven Reliability", desc: "Trusted by top OEMs across India since 2006. Our experienced engineers foresee production bottlenecks and eliminate them during the design phase." }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.6 }}
                    className="flex gap-6"
                  >
                    <div className="shrink-0 mt-1">
                      <div className="w-12 h-12 bg-brand-light rounded-sm flex items-center justify-center">
                        <item.icon className="w-6 h-6 text-brand-primary" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-dark mb-2">{item.title}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 relative w-full h-[500px] md:h-[600px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative z-10 w-full h-full rounded-sm overflow-hidden shadow-2xl"
              >
                <Image
                  src="/company_machines/programmer_office.png"
                  alt="Engineering Design and Quality Control"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
              </motion.div>
              {/* Decorative block */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent/10 rounded-sm z-0 hidden md:block border-r-4 border-b-4 border-brand-accent"></div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. Infrastructure & Technology (Authority) */}
      <section className="py-20 bg-brand-light border-y border-gray-200">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-heading font-black text-brand-dark mb-10">Backed by State-of-the-Art Infrastructure</h2>
          <div className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto">
            <div className="px-6 py-3 bg-white rounded-sm shadow-sm font-bold text-gray-700 border border-gray-100 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent"/> 5-Axis VMC Centers</div>
            <div className="px-6 py-3 bg-white rounded-sm shadow-sm font-bold text-gray-700 border border-gray-100 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent"/> High-Speed Wire Cut EDM</div>
            <div className="px-6 py-3 bg-white rounded-sm shadow-sm font-bold text-gray-700 border border-gray-100 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent"/> 300T Injection Moulding</div>
            <div className="px-6 py-3 bg-white rounded-sm shadow-sm font-bold text-gray-700 border border-gray-100 flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-brand-accent"/> CMM Inspection</div>
          </div>
          <div className="mt-10">
            <Link href="/infrastructure" className="text-brand-primary font-bold uppercase tracking-wider text-sm hover:text-brand-accent transition-colors flex items-center justify-center gap-2">
              Tour Our Facility <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Dedicated Call to Action (Action) */}
      <section className="relative py-24 bg-brand-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url(/company_machines/bannerimage2.png)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-primary/90 to-brand-primary/80 z-0"></div>
        
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h2 className="text-3xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">Ready to Scale Your Production with Precision?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">Join the top OEMs in India who trust Shriniwas Tools for defect-free moulds and components. Let&apos;s discuss your engineering challenges today.</p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openQuoteModal}
              className="px-10 py-5 bg-brand-accent hover:bg-orange-600 text-white font-bold text-lg uppercase tracking-wider rounded-sm hover:-translate-y-1 hover:shadow-2xl shadow-brand-accent/40 transition-all duration-300 w-full sm:w-auto"
            >
              Request a Free Quote
            </button>
            <Link
              href="/contact"
              className="px-10 py-5 bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-dark font-bold text-lg uppercase tracking-wider rounded-sm transition-all duration-300 w-full sm:w-auto"
            >
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
