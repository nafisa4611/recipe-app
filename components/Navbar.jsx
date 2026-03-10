"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Home, Search, Heart, Utensils } from "lucide-react";

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
      <nav className="fixed top-0 w-full z-[100] bg-white/70 backdrop-blur-xl border-b border-gray-100 font-sans">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl font-black tracking-tighter text-gray-900">
            KITCHEN<span className="text-orange-500 italic font-normal">.</span>
          </Link>

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

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-gray-900">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[90] md:hidden transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/20 backdrop-blur-md transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={() => setIsOpen(false)} />
        <div className={`absolute right-0 top-0 h-full w-[80%] bg-white shadow-2xl transition-transform duration-500 p-12 flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col gap-8 mt-20">
            {navLinks.map((link) => (
              <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="flex items-center gap-4 text-3xl font-serif font-black text-gray-900">
                <span className="text-orange-500">{link.icon}</span> {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}