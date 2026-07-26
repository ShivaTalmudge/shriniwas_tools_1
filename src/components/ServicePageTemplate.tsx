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
  Plane
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
  }[];
  process: string[];
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
  Plane
};

const whyChooseUs = [
  "Experienced Team",
  "Latest Machinery",
  "Quality Assurance",
  "On-Time Delivery",
  "Competitive Pricing",
  "Excellent Customer Support"
];

export default function ServicePageTemplate({ data }: { data: ServiceData }) {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] lg:min-h-[80vh] flex flex-col lg:flex-row items-stretch overflow-hidden pt-[100px] md:pt-[120px] bg-brand-dark">
        {/* Left Side Content */}
        <div className="w-full lg:w-1/2 flex items-center relative z-10 order-2 lg:order-1 bg-brand-dark lg:bg-transparent">
          <div className="w-full max-w-3xl ml-auto px-4 md:px-8 py-16 lg:py-24 xl:pr-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Breadcrumb */}
              <div className="flex items-center justify-start gap-2 text-sm text-brand-accent mb-6 uppercase tracking-wider font-bold">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-white">{data.serviceName}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
                {data.hero.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-10">
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

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 relative min-h-[35vh] lg:min-h-full order-1 lg:order-2">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url(${data.hero.bgImage})` }}
          >
            {/* Soft gradient fade into the image from the left on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
            {/* Soft gradient fade into the image from the bottom on mobile */}
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 bg-brand-light text-brand-primary font-bold tracking-wider uppercase text-sm mb-6 border-l-4 border-brand-accent">
                Service Overview
              </div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-6 leading-tight">
                {data.overview.title}
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none text-base md:text-lg">
                {data.overview.description}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[300px] md:h-[400px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50 border border-gray-100 group"
            >
              <Image
                src={data.overview.image}
                alt="Service Overview"
                fill
                className="object-contain p-6 mix-blend-multiply group-hover:scale-110 transition-transform duration-1000 ease-out"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4 tracking-tight">
              Key Features
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.keyFeatures.slice(0, 6).map((feature, i) => {
              const Icon = IconMap[feature.icon] || CheckCircle2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-brand-accent/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-accent/5 transition-all duration-500 flex items-start gap-5 group relative overflow-hidden"
                >
                  <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-brand-primary group-hover:to-brand-secondary transition-all duration-500 shadow-inner">
                    <Icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors duration-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-dark mb-2 tracking-tight">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-snug">{feature.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SERVED */}
      <section className="py-16 bg-brand-dark text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-tight">
              Industries Served
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {data.industries.map((ind, i) => {
              const Icon = IconMap[ind.icon] || CheckCircle2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl flex items-center gap-3 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-accent/20 cursor-default group backdrop-blur-sm"
                >
                  <Icon className="w-4 h-4 text-brand-accent group-hover:text-white transition-colors" />
                  <span className="font-medium text-sm md:text-base tracking-wide group-hover:text-brand-accent transition-colors">{ind.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING PROCESS (Horizontal Timeline) */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4 tracking-tight">
              Manufacturing Process
            </h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 max-w-5xl mx-auto">
            {data.process.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  className="flex flex-col items-center flex-1"
                >
                  <div className="w-16 h-16 bg-white text-brand-primary font-black flex items-center justify-center rounded-2xl shadow-lg mb-6 border border-gray-100 group-hover:scale-110 group-hover:shadow-brand-accent/20 transition-all duration-500 relative z-10">
                    <span className="text-2xl">{i + 1}</span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-brand-dark text-center px-2">{step}</h3>
                </motion.div>
                
                {i < data.process.length - 1 && (
                  <div className="hidden md:block w-16 h-[2px] bg-brand-light shrink-0 relative top-[-16px]">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-3 h-3 border-t-2 border-r-2 border-brand-primary rotate-45" />
                  </div>
                )}
                {i < data.process.length - 1 && (
                  <div className="md:hidden w-[2px] h-8 bg-brand-light my-2" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY CHOOSE US (Hardcoded) */}
      <section className="py-16 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10">
           <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4 tracking-tight">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, i) => (
              <div key={i} className="bg-white border border-gray-100 p-6 rounded-2xl flex items-center gap-4 hover:border-brand-accent/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-500 group">
                <div className="w-10 h-10 bg-brand-light rounded-xl flex items-center justify-center shrink-0 group-hover:bg-brand-accent/10 transition-colors duration-500">
                  <CheckCircle2 className="w-5 h-5 text-brand-primary group-hover:text-brand-accent transition-colors duration-500" />
                </div>
                <h3 className="text-brand-dark font-bold text-lg">{reason}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6.5 RELATED SERVICES */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark mb-4 tracking-tight">
              Related Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {[
              { name: "Plastic Injection Moulding", href: "/services/plastic-molding-dies" },
              { name: "CNC & VMC Machining", href: "/services/cnc-vmc-machining" },
              { name: "CNC Wire Cut EDM", href: "/services/cnc-wire-cut" },
              { name: "DMC & Bakelite Moulds", href: "/services/backlite-dies-components" },
              { name: "Jigs & Fixtures", href: "/services/jigs-fixtures" },
              { name: "Press Tools", href: "/services/press-tools" }
            ].filter(s => s.name !== data.serviceName).slice(0, 5).map((service, i) => (
              <Link key={i} href={service.href} className="bg-gray-50 border border-gray-200 p-4 rounded-xl text-center hover:bg-brand-primary hover:text-white hover:border-brand-primary transition-all duration-300 font-bold text-sm flex items-center justify-center">
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-secondary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 tracking-tight">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-brand-light/90 mb-10 max-w-2xl mx-auto">
            Contact us today for high-quality manufacturing solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={openQuoteModal} className="w-full sm:w-auto px-10 py-5 bg-white text-brand-primary font-bold rounded-full hover:bg-gray-50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 uppercase tracking-wide">
              Request Quote
            </button>
            <Link href="/contact" className="w-full sm:w-auto px-10 py-5 bg-brand-dark/30 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-brand-dark/50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 flex items-center justify-center gap-3 uppercase tracking-wide">
              <PhoneCall className="w-5 h-5" /> Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
