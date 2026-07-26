"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  Factory,
  Cpu,
  Zap,
  Component,
  Wrench,
  Hammer,
  MapPin,
  TrendingUp,
} from "lucide-react";
import { openQuoteModal } from "@/components/QuoteModal";

export default function HomeClient() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Shriniwas Tools & Equipments",
    image: "https://shriniwastools.com/company_machines/wire_cut_machine_2_imp.png",
    "@id": "https://shriniwastools.com",
    url: "https://shriniwastools.com",
    telephone: "+91-9860822818",
    address: {
      "@type": "PostalAddress",
      streetAddress: "S-96, MIDC, Bhosari",
      addressLocality: "Pune",
      addressRegion: "Maharashtra",
      postalCode: "411026",
      addressCountry: "IN",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "18:00",
    },
  };

  const trustStrip = [
    { icon: ShieldCheck, label: "ISO 9001:2015 Certified" },
    { icon: Factory, label: "Since 2006" },
    { icon: Zap, label: "9 CNC Wire Cut Machines" },
    { icon: MapPin, label: "MIDC Bhosari, Pune" },
  ];

  const services = [
    {
      title: "Plastic Injection Moulding",
      desc: "Custom mould design and production for thermoplastic components.",
      href: "/services/plastic-molding-dies",
      icon: Factory,
    },
    {
      title: "CNC & VMC Machining",
      desc: "Precision-machined components on our 3 VMC setup.",
      href: "/services/cnc-vmc-machining",
      icon: Cpu,
    },
    {
      title: "CNC Wire Cut EDM",
      desc: "Intricate, hardened-material profiles cut on 9 wire cut machines.",
      href: "/services/cnc-wire-cut",
      icon: Zap,
    },
    {
      title: "DMC & Bakelite Moulds",
      desc: "Compression moulds for electrical and heat-resistant components.",
      href: "/services/backlite-dies-components",
      icon: Component,
    },
    {
      title: "Jigs & Fixtures",
      desc: "Custom-built fixtures for machining, assembly, and inspection.",
      href: "/services/jigs-fixtures",
      icon: Wrench,
    },
    {
      title: "Press Tools",
      desc: "Blanking, piercing, and forming dies for sheet metal production.",
      href: "/services/press-tools",
      icon: Hammer,
    },
  ];

  const whyUs = [
    {
      icon: Factory,
      title: "Everything in-house",
      desc: "Design, wire cut EDM, VMC machining, and mould assembly happen on one shop floor, so nothing gets lost between vendors.",
    },
    {
      icon: Zap,
      title: "Real capacity",
      desc: "9 CNC Wire Cut machines and 3 VMCs mean we rarely bottleneck on lead time.",
    },
    {
      icon: ShieldCheck,
      title: "ISO 9001:2015 certified",
      desc: "For the manufacture of dies, moulds and moulded products.",
    },
    {
      icon: TrendingUp,
      title: "Built on repeat business",
      desc: "Steady year-on-year growth, driven by clients who came back, not one-time orders.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* 1. Hero */}
      <section ref={heroRef} className="relative min-h-[100dvh] md:h-screen flex items-center justify-start overflow-hidden pt-[120px] pb-10 md:pt-[140px] md:pb-12">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/20 z-10" />
          <Image
            src="/images/hero/hero_home.png"
            alt="Precision Tooling & Mould Manufacturing Facility in Bhosari, Pune"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <div className="container mx-auto relative z-10 px-4 md:px-8 text-left text-white mt-16">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-heading font-black tracking-tight mb-6 leading-tight max-w-4xl"
          >
            Precision Tooling &amp; Mould Manufacturing,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">
              Built in Bhosari Since 2006
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl lg:text-xl text-gray-300 max-w-3xl mb-10 font-light leading-relaxed"
          >
            We design and manufacture plastic injection moulds, press tools, jigs, fixtures, and precision machined components — in-house, from our ISO 9001:2015 certified facility in MIDC Bhosari, Pune.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 sm:gap-6"
          >
            <button
              onClick={openQuoteModal}
              className="px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold uppercase tracking-wider rounded-full hover:-translate-y-1 hover:shadow-xl shadow-brand-accent/20 transition-all duration-300 w-full sm:w-auto flex items-center justify-center gap-3"
            >
              Get a Quote <ArrowRight className="w-5 h-5" />
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

      {/* 2. Trust Strip */}
      <section className="bg-brand-primary text-white py-6 relative z-20 border-b border-white/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-x-10 gap-y-4">
            {trustStrip.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-brand-accent shrink-0" />
                <span className="font-bold text-sm md:text-base uppercase tracking-wide whitespace-nowrap">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. What We Manufacture */}
      <section className="py-20 md:py-28 bg-brand-light relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Our Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-6">What We Manufacture</h3>
            <p className="text-gray-600 text-lg">Six core capabilities, all handled in-house — from first design to finished, inspected tooling.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((item, i) => (
              <Link href={item.href} key={i}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="bg-white p-8 rounded-sm shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-b-4 border-brand-accent/20 hover:border-brand-accent group h-full flex flex-col"
                >
                  <div className="w-14 h-14 bg-brand-light rounded-sm flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-colors">
                    <item.icon className="w-7 h-7 text-brand-primary group-hover:text-brand-accent transition-colors" />
                  </div>
                  <h4 className="text-xl font-heading font-bold mb-3 text-brand-dark group-hover:text-brand-primary transition-colors">{item.title}</h4>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed flex-1">{item.desc}</p>
                  <div className="flex items-center text-brand-primary font-bold text-sm uppercase tracking-wide group-hover:text-brand-accent transition-colors mt-auto">
                    Learn More <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Manufacturers Choose Us */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="lg:w-1/2">
              <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-8 leading-tight">Why Manufacturers Choose Us</h3>

              <div className="space-y-8">
                {whyUs.map((item, i) => (
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
                  alt="Engineering Design and Quality Control at Shriniwas Tools"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply" />
              </motion.div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent/10 rounded-sm z-0 hidden md:block border-r-4 border-b-4 border-brand-accent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Inside Our Shop Floor (Infrastructure Teaser) */}
      <section className="py-20 md:py-28 bg-gray-50 border-y border-gray-200 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Our Facility</h2>
              <h3 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-6 leading-tight">Inside Our Shop Floor</h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                From 3 VMCs to 9 CNC wire cut machines, moulding presses up to 300 tons, and a dedicated inspection line — our facility is built to keep a job moving from design to dispatch without losing accuracy at any stage.
              </p>
              <Link href="/infrastructure" className="inline-flex items-center justify-center px-8 py-3 border border-brand-primary/30 bg-brand-primary/5 text-brand-primary font-bold uppercase tracking-wider text-sm rounded hover:bg-brand-primary hover:text-white transition-all duration-300">
                See Full Infrastructure &amp; Machine List <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2 relative w-full h-[350px] md:h-[450px]"
            >
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="relative w-full h-full rounded-sm overflow-hidden shadow-xl">
                  <Image
                    src="/company_machines/VMC1.png"
                    alt="VMC machine at Shriniwas Tools"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-full rounded-sm overflow-hidden shadow-xl mt-8">
                  <Image
                    src="/company_machines/wire_cut.png"
                    alt="CNC wire cut machine at Shriniwas Tools"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. Growing With Our Clients */}
      <section className="py-20 md:py-24 bg-brand-dark relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center max-w-3xl">
          <h2 className="text-brand-accent font-bold tracking-wider uppercase text-sm mb-3">Our Growth</h2>
          <h3 className="text-3xl md:text-4xl font-heading font-black text-white mb-6 leading-tight">Growing With Our Clients</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-10">
            Since adding our first VMCs in 2018, we&apos;ve scaled to a full tool room — 3 VMCs, 9 wire cut machines, and ISO 9001:2015 certification — growth built on clients who keep coming back for their next tool.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            {["3 VMCs", "9 Wire Cut Machines", "ISO 9001:2015 Certified"].map((label, i) => (
              <span
                key={i}
                className="py-2 px-5 rounded-full bg-white/5 border border-white/10 text-white font-bold text-xs sm:text-sm tracking-wider uppercase"
              >
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA Banner */}
      <section className="relative py-24 bg-brand-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: "url(/company_machines/wire_cut_floor.png)", backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-primary/90 to-brand-primary/80 z-0"></div>

        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-heading font-black text-white mb-6 leading-tight">Have a component or tool to manufacture?</h2>
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto font-light">Tell us your spec — we&apos;ll get back to you with a quote.</p>

          <button
            onClick={openQuoteModal}
            className="px-10 py-5 bg-brand-accent hover:bg-orange-600 text-white font-bold text-lg uppercase tracking-wider rounded-sm hover:-translate-y-1 hover:shadow-2xl shadow-brand-accent/40 transition-all duration-300"
          >
            Get a Quote
          </button>
        </div>
      </section>
    </>
  );
}
