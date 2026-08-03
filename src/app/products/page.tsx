"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Box, Wrench, Hammer, Factory, CircleDashed, Cpu, PenTool, Layers, ChevronRight, Zap, Car, Settings, ArrowRight } from "lucide-react";

const products = [
  {
    title: "Plastic Moulds",
    desc: "Custom thermoplastic tooling",
    icon: <Box className="w-8 h-8 text-brand-accent" />,
    image: "/images/products-cropped/Image1.png",
    alt: "Plastic injection mould manufactured by Shriniwas Tools & Equipments"
  },
  {
    title: "Press Tools",
    desc: "Blanking, piercing & forming",
    icon: <Hammer className="w-8 h-8 text-brand-accent" />,
    image: "/images/products-cropped/Image2.png",
    alt: "Press Tools manufactured by Shriniwas Tools & Equipments"
  },
  {
    title: "Jigs & Fixtures",
    desc: "Assembly and machining aids",
    icon: <Wrench className="w-8 h-8 text-brand-accent" />,
    image: "/images/products-cropped/Image3.png",
    alt: "Jigs & Fixtures manufactured by Shriniwas Tools & Equipments"
  },
  {
    title: "VMC Job Work",
    desc: "Precision machining",
    icon: <Cpu className="w-8 h-8 text-brand-accent" />,
    image: "/images/products-cropped/Image4.png",
    alt: "VMC Job Work manufactured by Shriniwas Tools & Equipments"
  },
  {
    title: "Vacuum Dies",
    desc: "Vacuum forming dies",
    icon: <Settings className="w-8 h-8 text-brand-accent" />,
    image: "/images/products-cropped/Image5.png",
    alt: "Vacuum Dies manufactured by Shriniwas Tools & Equipments"
  },
  {
    title: "Patterns",
    desc: "Casting patterns",
    icon: <Layers className="w-8 h-8 text-brand-accent" />,
    image: "/images/products-cropped/Image7.png",
    alt: "Patterns manufactured by Shriniwas Tools & Equipments"
  },
  {
    title: "Rubber Moulds",
    desc: "Compression rubber tooling",
    icon: <CircleDashed className="w-8 h-8 text-brand-accent" />,
    image: "/images/products-cropped/Image8.png",
    alt: "Rubber Moulds manufactured by Shriniwas Tools & Equipments"
  },
  {
    title: "PDC/GDC Dies",
    desc: "Die casting tooling",
    icon: <Zap className="w-8 h-8 text-brand-accent" />,
    image: "/images/products-cropped/Image10.png",
    alt: "PDC/GDC Dies manufactured by Shriniwas Tools & Equipments"
  }
];

export default function Products() {
  return (
    <>
      {/* Unique Products Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-start overflow-hidden pt-[120px] pb-16 md:pt-[140px] bg-brand-dark border-b border-gray-800">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20 z-10" />
        
        <div className="container mx-auto px-4 md:px-8 relative z-10 w-full flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side Content */}
          <div className="w-full lg:w-1/2 relative z-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-white/5 mb-8 backdrop-blur-md">
                <Box className="w-4 h-4 text-brand-accent" />
                <span className="text-xs font-bold text-brand-accent uppercase tracking-widest">Precision Manufacturing</span>
              </div>
              
              {/* Breadcrumb */}
              <div className="flex items-center justify-start gap-2 text-[11px] text-gray-400 mb-6 uppercase tracking-widest font-bold">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-white">Products</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-heading font-black text-white mb-6 leading-[1.1] tracking-tight">
                Manufactured <br /><span className="text-brand-accent">Products</span>
              </h1>
              
              <p className="text-lg text-gray-400 font-light leading-relaxed max-w-xl">
                From heavy-duty DMC electrical switchgear to high-volume thermoplastic enclosures, here is a cross-section of the components we manufacture.
              </p>
            </motion.div>
          </div>

          {/* Right Side Composition */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] flex items-center justify-center mt-10 lg:mt-0">
            <motion.div 
              className="relative w-full max-w-md h-[400px] lg:h-[500px]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              {/* Center large card */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 md:w-[320px] md:h-[320px] bg-white rounded-2xl shadow-2xl z-20 p-6 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <Image src="/images/products-cropped/Image8.png" alt="Product Component" fill className="object-contain drop-shadow-xl" />
                </div>
              </div>
              
              {/* Top right floating card */}
              <motion.div 
                className="absolute top-0 md:top-4 right-0 md:-right-8 w-40 h-40 md:w-56 md:h-56 bg-white rounded-2xl shadow-xl z-10 p-4 flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative w-full h-full">
                  <Image src="/images/products-cropped/Image24.png" alt="Press Part" fill className="object-contain drop-shadow-lg" />
                </div>
              </motion.div>

              {/* Bottom left floating card */}
              <motion.div 
                className="absolute bottom-4 md:bottom-10 left-0 md:-left-12 w-40 h-40 md:w-48 md:h-48 bg-white rounded-2xl shadow-2xl z-30 p-4 flex items-center justify-center"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="relative w-full h-full">
                  <Image src="/images/products-cropped/Image13.png" alt="Thermoset Insulator" fill className="object-contain drop-shadow-lg" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-white relative border-t border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, i) => (
              <div
                key={product.image}
                className="group rounded-[14px] bg-gray-50 overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-brand-dark/5 hover:-translate-y-2 transition-all duration-300 flex flex-col animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
              >
                <div className="aspect-square relative overflow-hidden bg-white border-b border-gray-100">
                  <Image
                    src={product.image}
                    alt={product.alt || product.title}
                    fill
                    className="object-contain p-6 mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-brand-light p-2 rounded-lg shrink-0">
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-heading font-bold text-brand-dark leading-snug group-hover:text-brand-primary transition-colors">{product.title}</h3>
                      <p className="text-gray-500 text-sm italic mt-1">({product.desc})</p>
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact" 
                    className="mt-auto inline-flex justify-center items-center gap-2 font-bold text-brand-primary bg-brand-light border border-brand-primary/20 px-5 py-3 rounded-lg hover:bg-brand-primary hover:text-white transition-all duration-300 w-full text-sm uppercase tracking-wider"
                  >
                    Request Spec <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* SEO & Manufacturing Standards Section */}
      <section className="py-20 md:py-28 bg-white relative border-b border-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-black text-brand-dark mb-6">Built for High-Volume Reliability</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                The products showcased above represent just a fraction of our manufacturing footprint. Over the last decade, we have specialized in producing high-quality thermoplastic components, durable press tools, and intricate die-casting moulds. Every product that leaves our Bhosari facility has passed rigorous quality inspections, adhering strictly to our <strong>ISO 9001:2015 certified</strong> standards.
              </p>
              <p>
                From reverse-engineering legacy parts to machining entirely new, high-tolerance components using our robust VMC and CNC Wire Cut setups, we ensure your production lines never wait on sub-standard tooling. We work with an extensive range of industrial materials including hardened tool steels, specialized alloys, and engineering plastics.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="py-8 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-center gap-6">
          <p className="text-lg font-heading font-bold text-brand-dark">Need a similar product manufactured?</p>
          <Link href="/quote" className="px-6 py-2.5 bg-brand-primary text-white text-sm font-bold rounded-full hover:bg-brand-dark transition-colors shadow-md">
            Request Pricing
          </Link>
        </div>
      </section>
    </>
  );
}
