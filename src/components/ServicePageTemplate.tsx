"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
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
  UploadCloud,
  ChevronDown,
  PhoneCall,
  MessageCircle,
  FileText,
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
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  machinery: {
    name: string;
    capacity: string;
    specs: string;
    applications: string;
    image: string;
  }[];
  materials: {
    name: string;
    image: string;
  }[];
  gallery: string[];
  specs: {
    label: string;
    value: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    href: string;
    image: string;
  }[];
  testimonials: {
    quote: string;
    author: string;
    company: string;
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
  Plane
};

export default function ServicePageTemplate({ data }: { data: ServiceData }) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex flex-col justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.hero.bgImage}
            alt={data.hero.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center pt-32 lg:pt-40 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <Link href="/services" className="hover:text-brand-accent transition-colors">Services</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">{data.serviceName}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-tight">
              {data.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto font-light mb-10">
              {data.hero.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button onClick={openQuoteModal} className="w-full sm:w-auto px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold rounded-sm transition-all shadow-lg shadow-brand-accent/30 flex items-center justify-center gap-2">
                Request a Quote <ChevronRight className="w-5 h-5" />
              </button>
              <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-bold rounded-sm transition-all flex items-center justify-center gap-2">
                Contact Sales <PhoneCall className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. SERVICE OVERVIEW */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 bg-brand-light text-brand-primary font-bold tracking-wider uppercase text-sm mb-6 border-l-4 border-brand-accent">
                Service Overview
              </div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-8 leading-tight">
                {data.overview.title}
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                {data.overview.description}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-sm overflow-hidden shadow-2xl"
            >
              <Image
                src={data.overview.image}
                alt="Service Overview"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. KEY FEATURES */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
              Key Features
            </h2>
            <p className="text-lg text-gray-600">
              Why our {data.serviceName.toLowerCase()} is chosen by industry leaders globally.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.keyFeatures.map((feature, i) => {
              const Icon = IconMap[feature.icon] || CheckCircle2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-sm shadow-lg border-b-4 border-transparent hover:border-brand-accent transition-all group"
                >
                  <div className="w-14 h-14 bg-brand-light rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                    <Icon className="w-7 h-7 text-brand-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-dark mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES SERVED */}
      <section className="py-16 md:py-20 lg:py-24 bg-brand-dark text-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-white/10 text-white font-bold tracking-wider uppercase text-sm mb-6 border-l-4 border-brand-accent">
              Applications
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Industries We Serve
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {data.industries.map((ind, i) => {
              const Icon = IconMap[ind.icon] || CheckCircle2;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-sm flex items-center gap-3 transition-colors cursor-pointer group"
                >
                  <Icon className="w-5 h-5 text-brand-accent group-hover:text-white transition-colors" />
                  <span className="font-medium text-lg tracking-wide group-hover:text-brand-accent transition-colors">{ind.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. MANUFACTURING PROCESS */}
      <section className="py-16 md:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-gray-600">
              A systematic, ISO-certified approach to ensure flawless quality from design to delivery.
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-light -translate-y-1/2 hidden md:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {data.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="relative z-10 text-center"
                >
                  <div className="w-16 h-16 mx-auto bg-brand-primary text-white text-2xl font-black flex items-center justify-center rounded-full shadow-lg shadow-brand-primary/30 mb-6 border-4 border-white">
                    {step.step}
                  </div>
                  <h4 className="text-xl font-bold text-brand-dark mb-3">{step.title}</h4>
                  <p className="text-sm text-gray-600">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. MACHINERY USED */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-4 py-1.5 bg-brand-light text-brand-primary font-bold tracking-wider uppercase text-sm mb-6 border-l-4 border-brand-accent">
              Equipment
            </div>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
              Machinery & Infrastructure
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.machinery.map((machine, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-sm overflow-hidden shadow-lg border border-gray-100 group"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100">
                  <Image
                    src={machine.image}
                    alt={machine.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-bold text-white">
                    {machine.name}
                  </h3>
                </div>
                <div className="p-6">
                  <ul className="space-y-4">
                    <li className="flex flex-col">
                      <span className="text-xs text-brand-primary font-bold uppercase tracking-wider mb-1">Capacity</span>
                      <span className="text-gray-800 font-medium">{machine.capacity}</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-xs text-brand-primary font-bold uppercase tracking-wider mb-1">Specifications</span>
                      <span className="text-gray-600 text-sm">{machine.specs}</span>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-xs text-brand-primary font-bold uppercase tracking-wider mb-1">Applications</span>
                      <span className="text-gray-600 text-sm">{machine.applications}</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. MATERIALS */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
              Materials We Work With
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-8">
            {data.materials.map((mat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="relative h-32 md:h-48 mb-4 rounded-sm overflow-hidden shadow-md">
                  <Image
                    src={mat.image}
                    alt={mat.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-primary/20 transition-colors" />
                </div>
                <h4 className="text-center font-bold text-gray-800 group-hover:text-brand-primary transition-colors">{mat.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. WHY CHOOSE US */}
      <section className="py-16 md:py-20 lg:py-24 bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 translate-x-32" />
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div className="lg:w-1/3">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
                Why Choose Us?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                With nearly two decades of engineering excellence, Shriniwas Tools delivers unmatched quality, reliability, and precision.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:text-white transition-colors">
                Learn more about our company <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "18+ Years Experience",
                "ISO Certified Manufacturing",
                "Advanced Machinery",
                "Experienced Engineers",
                "High Precision Focus",
                "Strict Quality Inspection"
              ].map((reason, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-sm flex items-center gap-4 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-brand-accent/20 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 text-brand-accent" />
                  </div>
                  <span className="text-white font-bold text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 9. PROJECT GALLERY */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
              Project Gallery
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.gallery.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative h-72 group overflow-hidden rounded-sm shadow-md"
              >
                <Image
                  src={img}
                  alt={`Gallery Image ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TECHNICAL SPECIFICATIONS */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
                Technical Specifications
              </h2>
            </div>
            
            <div className="bg-white rounded-sm shadow-xl overflow-hidden border border-gray-200">
              <table className="w-full text-left border-collapse">
                <tbody>
                  {data.specs.map((spec, i) => (
                    <tr key={i} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <th className="py-6 px-8 bg-brand-light/30 w-1/3 font-bold text-brand-dark border-r border-gray-100">
                        {spec.label}
                      </th>
                      <td className="py-6 px-8 text-gray-700">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-brand-dark mb-6">
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <div 
                  key={i} 
                  className={`border rounded-sm transition-colors ${openFaq === i ? 'border-brand-primary bg-brand-light' : 'border-gray-200 bg-white hover:border-gray-300'}`}
                >
                  <button
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    <span className={`font-bold text-lg ${openFaq === i ? 'text-brand-primary' : 'text-brand-dark'}`}>
                      {faq.question}
                    </span>
                    <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-brand-primary' : 'text-gray-400'}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 12. RELATED SERVICES */}
      <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-dark">
              Related Services
            </h2>
            <Link href="/services" className="text-brand-primary font-bold hover:text-brand-accent transition-colors flex items-center gap-1">
              View All <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.relatedServices.map((service, i) => (
              <Link key={i} href={service.href} className="group">
                <div className="bg-white rounded-sm overflow-hidden shadow-md border border-gray-100 hover:shadow-xl transition-all">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex items-center justify-between">
                    <h4 className="font-bold text-brand-dark group-hover:text-brand-primary transition-colors">
                      {service.title}
                    </h4>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-brand-accent transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>



      {/* 15. CTA */}
      <section className="py-20 bg-brand-primary text-white text-center">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Need Professional Manufacturing Solutions?
          </h2>
          <p className="text-xl text-brand-light/90 mb-10 max-w-2xl mx-auto">
            Partner with Shriniwas Tools for high-precision, cost-effective engineering.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button onClick={openQuoteModal} className="px-8 py-4 bg-white text-brand-primary font-bold rounded-sm hover:bg-gray-100 transition-colors">
              Request Quote
            </button>
            <Link href="/contact" className="px-8 py-4 bg-brand-dark text-white font-bold rounded-sm hover:bg-black transition-colors flex items-center gap-2">
              <PhoneCall className="w-5 h-5" /> Call Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
