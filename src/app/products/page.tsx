"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings, Box, Layers, Hammer, Shield } from "lucide-react";
import { openQuoteModal } from "@/components/QuoteModal";

const products = [
  {
    title: "Plastic Injection Moulds",
    desc: "High-precision multi-cavity moulds for automotive and consumer electronics.",
    icon: <Box className="w-8 h-8 text-brand-accent" />,
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    slug: "plastic-moulds"
  },
  {
    title: "Press Tools & Stamping",
    desc: "Progressive and compound dies for complex sheet metal forming.",
    icon: <Hammer className="w-8 h-8 text-brand-accent" />,
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    slug: "press-tools"
  },
  {
    title: "Die Casting Dies",
    desc: "Premium PDC & GDC dies engineered for thermal balance and longevity.",
    icon: <Settings className="w-8 h-8 text-brand-accent" />,
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    slug: "die-casting"
  },
  {
    title: "Jigs & Fixtures",
    desc: "Custom-built inspection gauges and machining fixtures.",
    icon: <Layers className="w-8 h-8 text-brand-accent" />,
    image: "https://placehold.co/600x400/f3f4f6/1a1a1a/png?text=Image+Uploading+Soon",
    slug: "jigs-fixtures"
  }
];

export default function Products() {
  return (
    <>
      {/* Unified Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/images/hero_products.png)' }}
        >
          <div className="absolute inset-0 bg-brand-dark/75" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-4">Our Products</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Engineered for extreme tolerances. We manufacture critical tooling solutions that power the world's leading industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {products.map((product, i) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group rounded-3xl bg-gray-50 overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-brand-dark/5 transition-all"
              >
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent" />
                  
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20">
                      {product.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{product.title}</h3>
                  <p className="text-gray-600 mb-6">{product.desc}</p>
                  
                  <Link href={`/products/${product.slug}`} className="inline-flex items-center gap-2 font-bold text-brand-primary hover:text-brand-accent transition-colors">
                    View Specifications <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Banner inside Products */}
      <section className="py-16 bg-brand-primary text-white border-y-8 border-brand-accent">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <Shield className="w-16 h-16 text-brand-accent shrink-0" />
              <div>
                <h3 className="text-2xl font-heading font-bold mb-1">Premium Grade Materials</h3>
                <p className="text-blue-100">We exclusively use certified tool steel from Bohler, Uddeholm, and Daido.</p>
              </div>
            </div>
            <button onClick={openQuoteModal} className="px-8 py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold rounded-sm whitespace-nowrap transition-colors">
              Request a Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
