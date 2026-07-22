"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "Choosing the Right Tool Steel for High-Volume Injection Moulds",
    excerpt: "An in-depth guide on selecting between P20, H13, and EN31 based on production volume, plastic resin type, and required surface finish.",
    category: "Technical Guide",
    date: "Oct 15, 2023",
    author: "Engineering Team",
    image: "/company_machines/horizonatl_injection_moulding_machine_1.png"
  },
  {
    id: 2,
    title: "The Benefits of DMC Moulding for Electrical Switchgears",
    excerpt: "Why Dough Moulding Compound (DMC) remains the superior choice for high-voltage insulators and switchgear components compared to standard thermoplastics.",
    category: "Industry Insight",
    date: "Sep 28, 2023",
    author: "Production Manager",
    image: "/company_machines/bannerimage2.png"
  },
  {
    id: 3,
    title: "Understanding Wire Cut EDM Tolerances in Progressive Dies",
    excerpt: "How our modern CNC Wire Cut machines achieve 5-micron tolerances to ensure zero clearance issues in complex sheet metal stamping dies.",
    category: "Machining",
    date: "Sep 10, 2023",
    author: "CNC Division",
    image: "/company_machines/wire_cut.png"
  },
  {
    id: 4,
    title: "Design for Manufacturability (DFM) in Plastic Components",
    excerpt: "Common design mistakes that increase mould cost and how to avoid them through early collaboration with your tooling partner.",
    category: "Design Tips",
    date: "Aug 22, 2023",
    author: "Design Head",
    image: "/company_machines/programmer_office.png"
  }
];

export default function Blog() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden pt-[120px] pb-8 md:pt-[140px] md:pb-12">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat fixed" 
          style={{ backgroundImage: 'url(/company_machines/bannerimage2.png)' }}
        >
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-left mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">Engineering Insights</h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl font-light leading-relaxed">
              Technical articles, industry trends, and manufacturing tips from the tooling experts at Shriniwas Tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                  <div className="absolute top-4 left-4 bg-brand-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
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
                  
                  <h3 className="text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors line-clamp-2">
                    <Link href="#">{post.title}</Link>
                  </h3>
                  
                  <p className="text-gray-600 mb-8 flex-1 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    href="#"
                    className="inline-flex items-center text-brand-dark font-bold hover:text-brand-accent transition-colors mt-auto"
                  >
                    Read Full Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
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
