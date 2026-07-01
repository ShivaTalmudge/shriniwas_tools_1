"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertCircle, Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-light flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-white p-10 md:p-16 rounded-3xl shadow-xl shadow-brand-dark/5"
        >
          <div className="w-24 h-24 bg-red-100 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <AlertCircle className="w-12 h-12" />
          </div>
          
          <h1 className="text-7xl md:text-9xl font-heading font-black text-brand-primary mb-4 tracking-tighter">
            404
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-bold text-brand-dark mb-4">
            Component Not Found
          </h2>
          
          <p className="text-gray-600 mb-10 text-lg">
            The page or resource you are looking for has been moved, deleted, or does not exist in our system.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => window.history.back()}
              className="flex items-center gap-2 px-8 py-4 bg-gray-100 hover:bg-gray-200 text-brand-dark font-medium rounded-sm transition-colors w-full sm:w-auto justify-center"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
            <Link
              href="/"
              className="flex items-center gap-2 px-8 py-4 bg-brand-primary hover:bg-brand-secondary text-white font-medium rounded-sm transition-colors w-full sm:w-auto justify-center"
            >
              <Home className="w-5 h-5" />
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
