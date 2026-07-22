"use client";



import Link from "next/link";
import { motion } from "framer-motion";
import { UploadCloud, CheckCircle2 , ChevronRight} from "lucide-react";

export default function Quote() {
  return (
    <>
      {/* Unified Hero Section */}
      <section className="relative min-h-[80vh] lg:min-h-[95vh] flex items-center justify-center overflow-hidden pt-[120px] pb-8 md:pt-[140px] md:pb-12">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: 'url(/company_machines/bannerimage2.png)' }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-brand-dark/20 z-10" />
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-10 text-left mt-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            
            {/* Breadcrumb */}
            <div className="flex items-center justify-start gap-2 text-sm text-gray-300 mb-6 uppercase tracking-wider">
              <Link href="/" className="hover:text-brand-accent transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-white font-medium">Request a Quote</span>
            </div>
            <h1 className="text-3xl sm:text-3xl md:text-4xl font-heading font-black text-white mb-6 leading-tight">Request a Tooling Quote</h1>
            <p className="text-lg md:text-xl lg:text-xl text-gray-200 max-w-3xl font-light leading-relaxed">
              Upload your 2D drawings or 3D CAD models. Our senior tooling engineers in Pune will analyze your requirements and provide a detailed technical and commercial proposal within 48 hours.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-24 bg-brand-light min-h-screen flex items-center">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl shadow-brand-dark/5 overflow-hidden">
            <div className="p-10 md:p-12">
              <form className="space-y-8">

                {/* Personal Details */}
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-4 border-b pb-2">1. Contact Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Company Name *</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Contact Person *</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email *</label>
                      <input type="email" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Phone</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-4 border-b pb-2">2. Justify Your Components</h3>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Requirement Type</label>
                      <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all">
                        <option>Plastic Injection Moulding</option>
                        <option>DMC Moulding / Components</option>
                        <option>CNC & VMC Machining</option>
                        <option>CNC Wire Cut EDM</option>
                        <option>Rubber Moulds</option>
                        <option>Bakelite Moulds</option>
                        <option>Jigs & Fixtures</option>
                        <option>Press Tools</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Material Preference</label>
                      <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all" placeholder="e.g. H13, P20, EN31..." />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-700 uppercase tracking-wider">Justify Your Components</label>
                      <textarea rows={4} className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all"></textarea>
                    </div>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <h3 className="text-lg font-bold text-brand-dark mb-4 border-b pb-2">3. Upload Drawings (Optional)</h3>
                  <div className="w-full border-2 border-dashed border-gray-300 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors flex flex-col items-center justify-center py-12 cursor-pointer group">
                    <UploadCloud className="w-12 h-12 text-gray-400 group-hover:text-brand-primary transition-colors mb-4" />
                    <p className="font-bold text-brand-dark">Click to upload or drag & drop</p>
                    <p className="text-sm text-gray-500 mt-1">CAD, PDF, STEP, IGES, ZIP (Max 50MB)</p>
                  </div>
                </div>

                <div className="pt-6 border-t flex items-center justify-between flex-wrap gap-6">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <CheckCircle2 className="w-5 h-5 text-green-500" />
                    Your data is secure and confidential (NDA available).
                  </div>
                  <button type="button" className="px-10 py-4 bg-brand-accent hover:bg-orange-600 text-white font-bold rounded-lg transition-colors w-full sm:w-auto shadow-lg shadow-brand-accent/30">
                    Submit Request
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
