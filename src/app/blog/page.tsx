"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, ChevronRight } from "lucide-react";

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
    <>
      {/* Hero Section */}
      <section className="relative min-h-[50vh] lg:min-h-[70vh] flex flex-col lg:flex-row items-stretch overflow-hidden pt-[100px] md:pt-[120px] bg-brand-dark">
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
                <span className="text-white">Blog</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
                Tooling & Manufacturing Insights
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-2xl">
                Technical guides, case studies, and updates from the shop floor at Shriniwas Tools & Equipments.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 relative min-h-[35vh] lg:min-h-full order-1 lg:order-2">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: 'url(/company_machines/wire_cut_machine_imp1.png)' }}
          >
            {/* Soft gradient fade into the image from the left on desktop */}
            <div className="hidden lg:block absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
            {/* Soft gradient fade into the image from the bottom on mobile */}
            <div className="lg:hidden absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-dark to-transparent z-10" />
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-brand-light relative z-20 -mt-10 rounded-t-[40px] shadow-2xl">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group flex flex-col h-full hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                    {post.category}
                  </div>
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-brand-primary" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-brand-primary" />
                      {post.author}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors line-clamp-3 leading-snug">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-8 flex-1 leading-relaxed text-sm">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href="#"
                    className="inline-flex items-center text-brand-dark font-bold hover:text-brand-accent transition-colors mt-auto text-sm uppercase tracking-wider"
                  >
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
