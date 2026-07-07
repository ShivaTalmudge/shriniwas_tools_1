import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Precision Tooling Products | Shriniwas Tools Pune",
  description: "Explore our comprehensive range of high-precision manufacturing products including Plastic Injection Moulds, Press Tools, Die Casting Dies, and Custom Jigs & Fixtures manufactured in Pune.",
};

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Settings, Box, Layers, Hammer, Shield } from "lucide-react";
import { openQuoteModal } from "@/components/QuoteModal";

const productImages = [
  "shriniwas-precision-moulded-product-1.webp",
  "shriniwas-precision-moulded-product-3.webp",
  "shriniwas-precision-moulded-product-6.webp",
  "shriniwas-precision-moulded-product-7.webp",
  "shriniwas-precision-moulded-product-9.webp",
  "shriniwas-precision-moulded-product-10.webp",
  "shriniwas-precision-moulded-product-11.webp",
  "shriniwas-precision-moulded-product-12.webp",
  "shriniwas-precision-moulded-product-15.webp",
  "shriniwas-precision-moulded-product-16.webp",
  "shriniwas-precision-moulded-product-17.webp",
  "shriniwas-precision-moulded-product-19.webp",
  "shriniwas-precision-moulded-product-20.webp",
  "shriniwas-precision-moulded-product-22.webp",
  "shriniwas-precision-moulded-product-24.webp",
  "shriniwas-precision-moulded-product-26.webp",
  "shriniwas-precision-moulded-product-27.webp",
  "shriniwas-precision-moulded-product-28.webp",
  "shriniwas-precision-moulded-product-30.webp",
  "shriniwas-precision-moulded-product-32.webp",
  "shriniwas-precision-moulded-product-33.webp",
  "shriniwas-precision-moulded-product-34.webp",
  "shriniwas-precision-moulded-product-36.webp"
];

const products = productImages.map((filename) => ({
  title: "Plastic Component",
  desc: "High-precision moulded component manufactured with stringent quality controls.",
  icon: <Box className="w-8 h-8 text-brand-accent" />,
  image: `/images/products-cropped/${filename}`,
  slug: "plastic-molding-dies"
}));

export default function Products() {
  return (
    <>
      {/* Unified Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" 
          style={{ backgroundImage: 'url(/images/hero_products.png)' }}
        >
          <div className="absolute inset-0 bg-brand-dark/80" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 text-center mt-10">
          <div className="animate-in fade-in slide-in-from-bottom-5 duration-700">
            <h1 className="text-4xl md:text-6xl font-heading font-black text-white mb-6">Our Engineered Products</h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Precision is not just a metric; it is our foundation. We manufacture critical tooling solutions and robust industrial components that power the world's leading automotive, electrical, and engineering sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div
                key={product.slug}
                className="group rounded-[14px] bg-gray-50 overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-brand-dark/5 transition-all animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-gray-200">
                  {/* Keeping placehold.co images as per design requirements, you may swap these later */}
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 rounded-[10px] group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/20 text-white group-hover:text-brand-accent transition-colors">
                      {product.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-brand-dark mb-3 group-hover:text-brand-primary transition-colors">{product.title}</h3>
                  <p className="text-gray-600 mb-6 line-clamp-2">{product.desc}</p>
                  
                  <Link href={`/services/${product.slug}`} className="inline-flex items-center gap-2 font-bold text-brand-primary hover:text-brand-accent transition-colors">
                    Explore Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
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
                <p className="text-blue-100">Every mould is manufactured using certified tool steel from Bohler, Uddeholm, and Daido, ensuring maximum longevity and precision for up to 1,000,000 shots.</p>
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
