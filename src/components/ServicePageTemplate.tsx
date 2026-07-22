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
      <section className="relative min-h-[80vh] lg:min-h-[95vh] flex flex-col justify-center overflow-hidden pt-[120px] md:pt-[140px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.hero.bgImage}
            alt={data.hero.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/20 z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-left pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-start gap-2 text-sm text-gray-300 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services" className="hover:text-brand-accent transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">{data.serviceName}</span>
            </div>

            <h1 className="text-3xl sm:text-3xl md:text-4xl font-heading font-black text-white mb-6 leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-lg md:text-xl lg:text-xl text-gray-300 max-w-3xl font-light mb-10 leading-relaxed">
              {data.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-6">
              <button onClick={openQuoteModal} className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-lg shadow-brand-accent/30 flex items-center justify-center gap-2 uppercase tracking-wider text-center">
                Request Quote <ChevronRight className="w-5 h-5" />
              </button>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-2 uppercase tracking-wider text-center">
                Call Now <PhoneCall className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
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
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-6 leading-tight">
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
              className="relative h-[300px] md:h-[400px] rounded-sm overflow-hidden shadow-xl bg-white border border-gray-100"
            >
              <Image
                src={data.overview.image}
                alt="Service Overview"
                fill
                className="object-contain p-4 mix-blend-multiply hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
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
                  className="bg-white p-6 rounded-sm shadow-md border-b-4 border-transparent hover:border-brand-accent hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 bg-brand-light rounded-sm flex items-center justify-center shrink-0 group-hover:bg-brand-primary transition-colors">
                    <Icon className="w-6 h-6 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-brand-dark mb-1">{feature.title}</h3>
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
            <h2 className="text-3xl md:text-3xl font-heading font-bold mb-4">
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
                  className="px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full flex items-center gap-2 transition-all duration-300 hover:-translate-y-1 cursor-default group"
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
            <h2 className="text-3xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
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
                  <div className="w-16 h-16 bg-brand-light text-brand-primary font-bold flex items-center justify-center rounded-full shadow-md mb-4 border-2 border-brand-primary">
                    <span className="text-xl">{i + 1}</span>
                  </div>
                  <h4 className="text-base md:text-lg font-bold text-brand-dark text-center px-2">{step}</h4>
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
            <h2 className="text-3xl md:text-3xl font-heading font-bold text-brand-dark mb-4">
              Why Choose Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {whyChooseUs.map((reason, i) => (
              <div key={i} className="bg-white border border-gray-200 p-5 rounded-sm flex items-center gap-3 hover:border-brand-accent hover:shadow-md transition-all">
                <div className="w-8 h-8 bg-brand-light rounded-full flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-brand-primary" />
                </div>
                <span className="text-brand-dark font-bold text-base">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-3xl font-heading font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg md:text-xl text-brand-light/90 mb-10 max-w-2xl mx-auto">
            Contact us today for high-quality manufacturing solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={openQuoteModal} className="w-full sm:w-auto px-8 py-4 bg-white text-brand-primary font-bold rounded-sm hover:bg-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              Request Quote
            </button>
            <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand-dark text-white font-bold rounded-sm hover:bg-black hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              <PhoneCall className="w-5 h-5" /> Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
