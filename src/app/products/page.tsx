"use client";



import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box } from "lucide-react";

const productImages = [
  "Image1.png",
  "Image2.png",
  "Image3.png",
  "Image4.png",
  "Image5.png",
  "Image7.png",
  "Image8.png",
  "Image10.png",
  "Image12.png",
  "Image13.png",
  "Image19.png",
  "Image22.png",
];

const products = productImages.map((filename) => ({
  title: "Component",
  desc: "High-precision moulded component manufactured with stringent quality controls.",
  icon: <Box className="w-8 h-8 text-brand-accent" />,
  image: `/images/products-cropped/${filename}`,
  slug: "plastic-molding-dies"
}));

export default function Products() {
  return (
    <>
      {/* Unique Products Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[95vh] flex items-center overflow-hidden pt-[120px] pb-12 md:pt-[140px] md:pb-16 bg-brand-dark">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-accent/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-primary/20 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />
        </div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Left Content */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-2xl text-left"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-brand-accent mb-6">
                <Box className="w-4 h-4" />
                <span className="text-sm font-semibold tracking-wide uppercase">Precision Manufacturing</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-black text-white mb-6 leading-tight">
                Engineered <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-orange-400">Products</span>
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 font-light leading-relaxed">
                A showcase of our high-quality injection moulded components, complex press parts, and heavy-duty thermoset insulators.
              </p>
            </motion.div>
            
            {/* Right Image Collage */}
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] animate-in fade-in slide-in-from-right-8 duration-700 delay-300 fill-mode-both">
              {/* Center Main Product */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] sm:w-[280px] md:w-[350px] aspect-square bg-white rounded-2xl shadow-2xl z-20 hover:scale-105 transition-transform duration-500">
                <Image src="/images/products-cropped/Image3.png" alt="Featured Product" fill className="object-contain p-4 drop-shadow-2xl mix-blend-multiply" priority />
              </div>
              
              {/* Top Right Product */}
              <div className="absolute top-[5%] right-[0%] w-[140px] sm:w-[180px] md:w-[220px] aspect-square bg-white rounded-2xl shadow-xl z-10 animate-[bounce_6s_ease-in-out_infinite] hover:scale-105 transition-transform duration-500">
                <Image src="/images/products-cropped/Image1.png" alt="Product" fill className="object-contain p-4 mix-blend-multiply" />
              </div>
              
              {/* Bottom Left Product */}
              <div className="absolute bottom-[5%] left-[0%] w-[160px] sm:w-[200px] md:w-[240px] aspect-square bg-white rounded-2xl shadow-xl z-30 animate-[bounce_8s_ease-in-out_infinite_reverse] hover:scale-105 transition-transform duration-500">
                <Image src="/images/products-cropped/Image8.png" alt="Product" fill className="object-contain p-4 mix-blend-multiply" />
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section className="py-16 md:py-20 lg:py-24 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => (
              <div
                key={product.image}
                className="group rounded-[14px] bg-gray-50 overflow-hidden border border-gray-100 hover:shadow-2xl hover:shadow-brand-dark/5 hover:-translate-y-2 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8"
                style={{ animationDelay: `${i * 150}ms`, animationFillMode: "both" }}
              >
                <div className="aspect-[16/9] relative overflow-hidden bg-white">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4 rounded-[10px] mix-blend-multiply group-hover:scale-105 transition-transform duration-700"
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


    </>
  );
}
