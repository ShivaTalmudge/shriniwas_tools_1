"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { openQuoteModal } from "./QuoteModal";
import {
  ChevronRight,
  CheckCircle2,
  Settings,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
  Box,
  Clock,
  ThumbsUp,
  PhoneCall,
  Car,
  Heart,
  Smartphone,
  Package,
  Home,
  Shield,
  Train,
  Plane,
  Factory,
  Wrench,
  Layers,
  Wind,
  Flame
} from "lucide-react";

export type ServiceData = {
  serviceName: string;
  hero: {
    title: string;
    subtitle: string;
    bgImage: string;
  };
  overview: {
    title: string;
    description: React.ReactNode;
    image: string;
  };
  keyFeatures: {
    title: string;
    description: string;
    icon: string;
  }[];
  industries: {
    name: string;
    icon: string;
    description: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
};

// Map string icon names to Lucide components
const IconMap: Record<string, React.ElementType> = {
  CheckCircle2,
  Settings,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
  Box,
  Clock,
  ThumbsUp,
  Car,
  Heart,
  Smartphone,
  Package,
  Home,
  Shield,
  Train,
  Plane,
  Factory,
  Wrench,
  Layers,
  Wind,
  Flame
};

const whyChooseUs = [
  {
    title: "Experienced Team",
    description: "Decades of collective expertise in precision engineering and tooling."
  },
  {
    title: "Latest Machinery",
    description: "State-of-the-art CNC, VMC, and Wire Cut EDM systems."
  },
  {
    title: "Quality Assurance",
    description: "Rigorous ISO 9001-aligned inspection protocols at every step."
  },
  {
    title: "On-Time Delivery",
    description: "Optimized workflows ensuring you meet your critical deadlines."
  },
  {
    title: "Competitive Pricing",
    description: "Lean manufacturing principles keeping costs transparent and low."
  },
  {
    title: "Excellent Support",
    description: "Dedicated account managers available 24/7 for technical support."
  }
];

export default function ServicePageTemplate({ data }: { data: ServiceData }) {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-[160px] pb-16 md:pt-[180px] bg-brand-dark border-b border-gray-800">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: `url(${data.hero.bgImage})` }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20 z-10" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="w-full max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center justify-start gap-2 text-sm text-brand-accent mb-6 uppercase tracking-wider font-bold drop-shadow-md">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">{data.serviceName}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl">
                {data.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mb-10 drop-shadow-lg">
                {data.hero.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-6">
                <button onClick={openQuoteModal} className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-brand-accent to-orange-500 hover:brightness-110 text-white font-bold rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl shadow-lg shadow-brand-accent/40 flex items-center justify-center gap-2 uppercase tracking-wider text-center">
                  Request Quote <ChevronRight className="w-5 h-5" />
                </button>
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold rounded-full transition-all duration-500 hover:-translate-y-1 hover:shadow-xl flex items-center justify-center gap-2 uppercase tracking-wider text-center">
                  Call Now <PhoneCall className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW */}
      <section className="py-20 md:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 bg-brand-light text-brand-primary font-bold tracking-wider uppercase text-sm mb-6 border-l-4 border-brand-accent">
                Service Overview
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                {data.overview.title}
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none text-base md:text-lg">
                {data.overview.description}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 group"
            >
              <Image
                src={data.overview.image}
                alt="Service Overview"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain p-8 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 tracking-tight">
              Key Features & Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Discover the core technical advantages and robust capabilities that set our {data.serviceName.toLowerCase()} service apart.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.keyFeatures.map((feature, i) => {
              const Icon = IconMap[feature.icon] || CheckCircle2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:border-brand-accent/50 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-accent/10 transition-all duration-500 flex flex-col items-center text-center group h-full"
                >
                  <div className="w-20 h-20 rounded-2xl bg-brand-light flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors duration-500 shadow-inner">
                    <Icon className="w-10 h-10 text-brand-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-dark mb-4">{feature.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed flex-grow">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SERVED */}
      <section className="py-20 bg-brand-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-300">
              We engineer custom solutions tailored to the stringent demands of high-performance sectors.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.industries.map((ind, i) => {
              const Icon = IconMap[ind.icon] || CheckCircle2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 bg-white/5 border border-white/10 rounded-3xl flex flex-col items-center text-center hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-accent/20 group h-full"
                >
                  <div className="w-16 h-16 rounded-full bg-brand-primary/20 flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-500">
                    <Icon className="w-8 h-8 text-brand-accent group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold text-xl mb-3 tracking-wide">{ind.name}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-200 transition-colors flex-grow">
                    {ind.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING PROCESS (Detailed Steps) */}
      <section className="py-20 bg-white overflow-hidden relative">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 tracking-tight">
              Our Process
            </h2>
            <p className="text-gray-600 text-lg">
              A systematic, quality-driven approach from initial design conception to final delivery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {data.process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-light/30 border border-brand-light p-8 rounded-3xl relative overflow-hidden flex flex-col h-full group hover:bg-white hover:shadow-2xl hover:border-brand-primary/30 transition-all duration-500"
              >
                <div className="text-7xl font-bold text-brand-primary/5 absolute -right-4 -bottom-6 group-hover:text-brand-primary/10 transition-colors duration-500 select-none">
                  0{i + 1}
                </div>
                <div className="w-14 h-14 bg-white text-brand-primary font-bold flex items-center justify-center rounded-2xl shadow-sm mb-6 border border-gray-100 group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500 relative z-10">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold text-brand-dark mb-4 relative z-10">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed relative z-10 flex-grow">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US */}
      <section className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
           <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 tracking-tight">
              Why Choose Shriniwas Tools
            </h2>
            <p className="text-lg text-gray-600">
              We combine decades of expertise with cutting-edge technology to deliver unmatched precision and reliability.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((reason, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white border border-gray-100 p-8 rounded-3xl flex flex-col items-start gap-4 hover:border-brand-accent/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-500 group h-full"
              >
                <div className="w-14 h-14 bg-brand-light rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-brand-primary transition-colors duration-500">
                  <CheckCircle2 className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-500" />
                </div>
                <div>
                  <h3 className="text-brand-dark font-bold text-xl mb-2">{reason.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. RELATED SERVICES */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 tracking-tight">
              Explore Related Services
            </h2>
            <p className="text-lg text-gray-600">
              Discover our full spectrum of manufacturing and engineering capabilities.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Plastic Injection Moulding", href: "/services/plastic-molding-dies", icon: Layers },
              { name: "CNC & VMC Machining", href: "/services/cnc-vmc-machining", icon: Settings },
              { name: "CNC Wire Cut EDM", href: "/services/cnc-wire-cut", icon: Zap },
              { name: "DMC & Bakelite Moulds", href: "/services/backlite-dies-components", icon: Flame },
              { name: "Jigs & Fixtures", href: "/services/jigs-fixtures", icon: Wrench },
              { name: "Press Tools", href: "/services/press-tools", icon: ShieldCheck }
            ]
            .filter(s => s.name !== data.serviceName)
            .slice(0, 5)
            .map((service, i) => {
              const ServiceIcon = service.icon;
              return (
                <Link key={i} href={service.href} className="group flex flex-col items-center text-center bg-gray-50 border border-gray-200 p-8 rounded-3xl hover:bg-brand-primary hover:border-brand-primary transition-all duration-500 h-full">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 text-brand-primary group-hover:text-brand-accent transition-colors shadow-sm">
                    <ServiceIcon className="w-6 h-6" />
                  </div>
                  <span className="font-bold text-brand-dark group-hover:text-white transition-colors">{service.name}</span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-secondary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-8 tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl md:text-2xl text-brand-light/90 mb-12 max-w-3xl mx-auto font-light">
            Contact us today for a technical consultation and discover high-quality, precision manufacturing solutions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <button onClick={openQuoteModal} className="w-full sm:w-auto px-12 py-5 bg-white text-brand-primary font-bold rounded-full hover:bg-gray-50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 uppercase tracking-widest text-lg">
              Request a Quote
            </button>
            <Link href="/contact" className="w-full sm:w-auto px-12 py-5 bg-brand-dark/30 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-brand-dark/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 uppercase tracking-widest text-lg">
              <PhoneCall className="w-6 h-6" /> Call Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
