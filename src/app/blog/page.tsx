"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, ChevronRight, PhoneCall } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Understanding the difference between VMC and CNC wire cut EDM in mould making",
    excerpt: "A deep dive into when to use Vertical Machining Centers versus Wire Electrical Discharge Machining for complex tooling geometries.",
    category: "Machining",
    date: "Oct 12, 2023",
    author: "Engineering Team",
    image: "/company_machines/VMC_2.png"
  },
  {
    id: 2,
    title: "Why DMC and Bakelite remain the standard for high-voltage switchgear",
    excerpt: "Exploring the unique dielectric and thermal properties of thermoset plastics that make them irreplaceable in heavy electrical applications.",
    category: "Materials",
    date: "Nov 05, 2023",
    author: "Production Manager",
    image: "/company_machines/surface_plate.jpg"
  },
  {
    id: 3,
    title: "Design for Manufacturability (DFM): 5 common mistakes in plastic injection moulding",
    excerpt: "Learn how to optimize your part designs to avoid sink marks, warpage, and unnecessary tooling costs.",
    category: "Design Tips",
    date: "Jan 20, 2024",
    author: "Design Head",
    image: "/company_machines/programmer_office.png"
  }
];

export default function Blog() {
  return (
    <div className="bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[50vh] lg:min-h-[60vh] flex flex-col justify-center overflow-hidden pt-[160px] pb-16 md:pt-[180px] bg-brand-dark border-b border-gray-800">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: 'url(/company_machines/wire_cut_machine_imp1.png)' }} />
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
                <span className="text-white">Blog</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-xl">
                Insights & Engineering
              </h1>
              <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed max-w-2xl mb-10 drop-shadow-lg">
                Technical articles, case studies, and industry updates from our expert tool room engineers.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. BLOG POSTS GRID */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-brand-dark mb-6 tracking-tight">
              Latest Articles
            </h2>
            <p className="text-lg text-gray-600">
              Stay updated with the latest advancements in precision machining and injection moulding technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl hover:border-brand-accent/30 transition-all duration-500 cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider shadow-md">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-primary" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-brand-primary" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors line-clamp-3 leading-snug">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="inline-flex items-center text-brand-dark font-bold group-hover:text-brand-accent transition-colors mt-auto text-sm uppercase tracking-wider">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-24 bg-gradient-to-br from-brand-primary to-brand-secondary text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay"></div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-black mb-8 tracking-tight">
            Have a Technical Question?
          </h2>
          <p className="text-xl md:text-2xl text-brand-light/90 mb-12 max-w-3xl mx-auto font-light">
            Our engineers are ready to help you optimize your next manufacturing project.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <Link href="/contact" className="w-full sm:w-auto px-12 py-5 bg-white text-brand-primary font-black rounded-full hover:bg-gray-50 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 uppercase tracking-widest text-lg flex items-center justify-center gap-3">
              <PhoneCall className="w-6 h-6" /> Contact Our Engineers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
