"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, Mail, PhoneCall } from "lucide-react";

export function openQuoteModal() {
  window.dispatchEvent(new Event("open-quote-modal"));
}

export default function QuoteModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-quote-modal", handleOpen);
    return () => window.removeEventListener("open-quote-modal", handleOpen);
  }, []);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl z-10 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div>
                <h2 className="text-2xl font-heading font-bold text-brand-dark">Request a Quote</h2>
                <p className="text-sm text-gray-500 mt-1">Submit your details and we will get back to you within 24 hours.</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form Content (Scrollable) */}
            <div className="p-6 overflow-y-auto custom-scrollbar">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Name *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm" required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Company *</label>
                    <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm" required placeholder="Company Ltd." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Email *</label>
                    <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm" required placeholder="john@example.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Phone</label>
                    <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm" placeholder="+91 XXXXX XXXXX" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Service Required</label>
                  <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm">
                    <option>Select a service...</option>
                    <option>Plastic Injection Moulding</option>
                    <option>Press Tools / Stamping</option>
                    <option>Die Casting Dies</option>
                    <option>CNC & VMC Machining</option>
                    <option>Jigs & Fixtures</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Project Details</label>
                  <textarea rows={3} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all text-sm" placeholder="Please describe your requirement in detail..."></textarea>
                </div>

              </form>
            </div>

            {/* Footer & Socials */}
            <div className="p-6 border-t border-gray-100 bg-gray-50 rounded-b-2xl">
              <button className="w-full py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold rounded-sm transition-colors text-lg shadow-lg shadow-brand-accent/30 flex items-center justify-center gap-2 mb-6">
                Submit Request <CheckCircle2 className="w-5 h-5" />
              </button>

              <div className="flex flex-col items-center justify-center text-center">
                <p className="text-sm font-bold text-gray-600 uppercase tracking-wider mb-4">Connect With Us</p>
                <div className="flex items-center gap-4">
                  {/* WhatsApp */}
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm hover:bg-brand-primary hover:text-white transition-all group">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.55 4.108 1.528 5.86L.044 24l6.326-1.66A11.968 11.968 0 0 0 12.031 24c6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zm0 21.996c-1.785 0-3.486-.458-4.996-1.32l-3.57.937.954-3.481c-.947-1.547-1.447-3.328-1.447-5.187 0-5.525 4.496-10.02 10.02-10.02s10.02 4.495 10.02 10.02-4.495 10.02-10.02 10.02zm5.508-7.514c-.302-.15-1.786-.882-2.062-.983-.277-.1-.478-.15-.68.15s-.78 1.006-.957 1.207c-.177.202-.354.227-.655.076-1.62-.816-2.73-1.62-3.79-3.414-.177-.302-.018-.466.133-.616.136-.135.302-.353.454-.528.15-.176.202-.303.303-.504.101-.202.05-.378-.025-.529-.076-.15-.68-1.64-.932-2.245-.245-.588-.496-.508-.68-.517-.176-.008-.378-.008-.58-.008s-.528.075-.805.377c-.277.302-1.057 1.034-1.057 2.518s1.082 2.915 1.233 3.116c.151.202 2.124 3.242 5.145 4.545 1.706.736 2.456.883 3.308.79.664-.07 1.786-.73 2.038-1.434.252-.705.252-1.309.176-1.435-.075-.126-.277-.202-.579-.353z"/></svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm hover:bg-brand-primary hover:text-white transition-all group">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M20.45 20.45h-3.56v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.66H9.33V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.37-1.85 3.61 0 4.28 2.37 4.28 5.45v6.29zM5.34 7.43a2.06 2.06 0 0 1-2.06-2.06 2.06 2.06 0 1 1 2.06 2.06zM3.56 20.45h3.56V9H3.56v11.45zM22.22 0H1.78C.8 0 0 .78 0 1.74v20.52C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.74V1.74C24 .78 23.2 0 22.22 0z"/></svg>
                  </a>
                  {/* Email */}
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm hover:bg-brand-primary hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </a>
                  {/* Phone */}
                  <a href="#" className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-primary shadow-sm hover:bg-brand-primary hover:text-white transition-all">
                    <PhoneCall className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
