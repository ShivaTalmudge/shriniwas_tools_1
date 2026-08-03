"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Maximize2 , ChevronRight} from "lucide-react";

const categories = ["All", "Products", "Machinery", "Team", "Events"];

const galleryItems = [
  { id: 1, category: "Products", title: "Multi-Cavity Mould", img: "https://placehold.co/800x600/f3f4f6/1a1a1a/png?text=Product+Image" },
  { id: 2, category: "Machinery", title: "High Speed VMC", img: "https://placehold.co/800x600/f3f4f6/1a1a1a/png?text=Machinery+Image" },
  { id: 3, category: "Products", title: "Automotive Connector", img: "https://placehold.co/800x600/f3f4f6/1a1a1a/png?text=Product+Image" },
  { id: 4, category: "Machinery", title: "Wire Cut EDM", img: "https://placehold.co/800x600/f3f4f6/1a1a1a/png?text=Machinery+Image" },
  { id: 5, category: "Team", title: "Engineering Department", img: "https://placehold.co/800x600/f3f4f6/1a1a1a/png?text=Team+Image" },
  { id: 6, category: "Products", title: "Press Tool Die", img: "https://placehold.co/800x600/f3f4f6/1a1a1a/png?text=Product+Image" },
  { id: 7, category: "Events", title: "Industry Exhibition 2023", img: "https://placehold.co/800x600/f3f4f6/1a1a1a/png?text=Event+Image" },
  { id: 8, category: "Machinery", title: "Injection Moulding Floor", img: "https://placehold.co/800x600/f3f4f6/1a1a1a/png?text=Machinery+Image" },
  { id: 9, category: "Products", title: "DMC Component", img: "https://placehold.co/800x600/f3f4f6/1a1a1a/png?text=Product+Image" },
];

export default function Gallery() {
  const [activeCat, setActiveCat] = useState("All");

  const filteredItems = activeCat === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCat);

  return (
    <>
            {/* Unified Hero Section */}
      <section className="relative min-h-[60vh] lg:min-h-[80vh] flex flex-col justify-center overflow-hidden pt-[160px] pb-16 md:pt-[180px] bg-brand-dark border-b border-gray-800">
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80" style={{ backgroundImage: 'url(/company_machines/wirecut_image2.png)' }} />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-brand-dark/20 z-10" />
        
        <div className="container mx-auto px-4 md:px-8">
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCat(cat)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCat === cat 
                  ? "bg-brand-primary text-white shadow-md" 
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 cursor-pointer shadow-sm hover:shadow-xl transition-shadow"
              >
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-brand-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-brand-accent text-xs font-bold uppercase tracking-wider mb-1 block">{item.category}</span>
                    <h3 className="text-white font-bold text-lg">{item.title}</h3>
                  </div>
                  
                  <div className="absolute top-4 right-4 bg-white/20 p-2 rounded-full backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    <Maximize2 className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
        </div>
      </section>
    </>
  );
}
