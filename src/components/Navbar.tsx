"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, Search, Phone, Mail, Clock, Building2, Settings, Award, LineChart, Trophy, Image as ImageIcon, Handshake, Factory, Hexagon, Cpu, Zap, Box, Component, Disc, Wrench, Hammer } from "lucide-react";
import { openQuoteModal } from "./QuoteModal";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  {
    name: "Services",
    hasDropdown: true,
    dropdownItems: [
      { name: "Plastic Injection Moulding", href: "/services/plastic-molding-dies", icon: Factory },
      { name: "DMC Moulding", href: "/services/dmc-molding-pune", icon: Hexagon },
      { name: "CNC & VMC Machining", href: "/services/cnc-vmc-machining", icon: Cpu },
      { name: "CNC Wire Cut EDM", href: "/services/cnc-wire-cut", icon: Zap },
      { name: "DMC Moulds", href: "/services/dmc-dies", icon: Box },
      { name: "Bakelite Moulds & Components", href: "/services/backlite-dies-components", icon: Component },
      { name: "Rubber Moulds", href: "/services/rubber-molds", icon: Disc },
      { name: "Jigs & Fixtures", href: "/services/jigs-fixtures", icon: Wrench },
      { name: "Press Tools", href: "/services/press-tools", icon: Hammer },
    ]
  },
  {
    name: "Company",
    hasDropdown: true,
    dropdownItems: [
      { name: "Infrastructure", href: "/infrastructure", icon: Building2 },
      { name: "Machines", href: "/machinery", icon: Settings },
      { name: "Quality Assurance", href: "/quality", icon: Award },
      { name: "Capabilities", href: "/capabilities", icon: LineChart },
      { name: "Achievements", href: "/achievements", icon: Trophy },
      { name: "Gallery", href: "/gallery", icon: ImageIcon },
      { name: "Clients", href: "/clients", icon: Handshake },
    ]
  },
  { name: "Industries", href: "/industries" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedDropdown, setMobileExpandedDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 flex flex-col">
      {/* Top Contact Bar */}
      <div
        className={`bg-brand-dark text-white text-xs md:text-sm transition-all duration-300 overflow-hidden flex items-center ${scrolled ? "h-0 opacity-0" : "h-10 opacity-100"
          }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center h-full">
          <div className="flex items-center gap-6 hidden md:flex">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-brand-accent" />
              <span>+91 9860822818</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-brand-accent" />
              <span>shriniwastools2020@gmail.com</span>
            </div>
          </div>
          <div className="flex items-center gap-2 w-full justify-center md:w-auto md:justify-end">
            <Clock className="w-3.5 h-3.5 text-brand-accent" />
            <span>Mon - Sat: 9:00 AM - 6:00 PM</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div
        className={`w-full relative transition-all duration-300 ${scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-primary rounded-sm flex items-center justify-center text-white font-bold text-xl">
              S
            </div>
            <div
              className={`font-heading font-bold text-xl leading-none ${scrolled ? "text-brand-primary" : "text-brand-primary md:text-white"
                }`}
            >
              SHRINIWAS
              <span className="block text-xs font-sans font-normal text-brand-accent">
                TOOLS & EQUIPMENTS
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className={`flex items-center gap-1 font-medium transition-colors hover:text-brand-accent ${scrolled ? "text-brand-dark" : "text-white"
                      }`}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href || "#"}
                    className={`flex items-center gap-1 font-medium transition-colors hover:text-brand-accent ${scrolled ? "text-brand-dark" : "text-white"
                      }`}
                  >
                    {link.name}
                  </Link>
                )}
                {link.hasDropdown && link.dropdownItems && (
                  <div className="absolute top-full left-0 mt-4 w-72 bg-white shadow-xl rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 max-h-[70vh] overflow-y-auto">
                    <div className="p-4 flex flex-col gap-3">
                      {link.dropdownItems.map((item) => (
                        <Link key={item.name} href={item.href} className="text-brand-dark hover:text-brand-accent transition-colors font-medium flex items-center gap-3">
                          {item.icon && <item.icon className="w-5 h-5 text-brand-accent" />}
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">

            <button
              onClick={openQuoteModal}
              className="bg-brand-accent text-white px-6 py-2.5 rounded-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu className={`w-6 h-6 ${scrolled ? "text-brand-dark" : "text-white"}`} />
          </button>
        </div>

        {/* Animated Bottom Line (Visible only when not scrolled) */}
        <div className={`absolute bottom-0 left-0 h-[1px] w-full bg-white/10 transition-opacity duration-300 ${scrolled ? 'opacity-0' : 'opacity-100'}`}>
          <motion.div
            className="h-full bg-white/60"
            initial={{ width: "0%", x: "0%" }}
            animate={{
              width: ["0%", "15%", "0%"],
              x: ["0%", "85%", "100%"]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-50 bg-brand-dark flex flex-col"
          >
            <div className="p-5 flex justify-between items-center border-b border-white/10">
              <span className="font-heading font-medium text-lg text-white uppercase tracking-wider">Menu</span>
              <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name} className="flex flex-col gap-3">
                  {link.hasDropdown ? (
                    <button
                      onClick={() => setMobileExpandedDropdown(mobileExpandedDropdown === link.name ? null : link.name)}
                      className="text-lg font-heading font-medium text-white text-left flex items-center justify-between hover:text-brand-accent transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-5 h-5 transition-transform ${mobileExpandedDropdown === link.name ? "rotate-180 text-brand-accent" : ""}`} />
                    </button>
                  ) : (
                    <Link
                      href={link.href || "#"}
                      className="text-lg font-heading font-medium text-white hover:text-brand-accent transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                  
                  <AnimatePresence>
                    {link.hasDropdown && mobileExpandedDropdown === link.name && link.dropdownItems && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pl-4 py-3 border-l-2 border-brand-accent mt-2 bg-brand-primary/10 rounded-r-lg">
                          {link.dropdownItems.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm font-normal text-gray-300 hover:text-white transition-colors flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
                              {item.icon && <item.icon className="w-4 h-4 text-brand-accent" />}
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              <div className="mt-8">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openQuoteModal();
                  }}
                  className="block w-full text-center bg-brand-accent text-white px-6 py-4 rounded-sm font-medium text-lg"
                >
                  Request a Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
