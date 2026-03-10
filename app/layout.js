"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Search, Heart, User, Utensils } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Recipes", href: "/recipe-list", icon: <Utensils className="w-5 h-5" /> },
    { name: "Favorites", href: "#", icon: <Heart className="w-5 h-5" /> },
    { name: "Search", href: "/recipe-list", icon: <Search className="w-5 h-5" /> },
  ];

  return (
    <>
      {/* Desktop & Mobile Header Base */}
      <nav className="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo - Magazine Style */}
          <Link href="/" className="font-serif text-2xl font-black tracking-tighter text-gray-900">
            KITCHEN<span className="text-orange-500 italic font-normal">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-orange-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-900 focus:outline-none"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Overlay */}
      <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        {/* Background Blur Overlay */}
        <div 
          className={`absolute inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => setIsOpen(false)}
        />
        
        {/* Menu Content */}
        <div className={`absolute right-0 top-0 h-full w-[80%] bg-white shadow-2xl transition-transform duration-500 ease-out p-12 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-8 mt-20">
            {navLinks.map((link, i) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-4 text-3xl font-serif font-black text-gray-900 transition-all duration-300 delay-[${i * 100}ms] ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}
              >
                <span className="text-orange-500">{link.icon}</span>
                {link.name}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-6">
            <div className="h-px w-full bg-gray-100" />
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
              The Kitchen Collective © 2026
            </p>
          </div>
        </div>
      </div>
    </>
  );
}