"use client";

import Link from "next/link";
import NavLink from "./NavLink";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full glass">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-12 h-12 overflow-hidden flex items-center justify-center">
             <Image src="/logo.png" alt="Weerappan Engineering Logo" fill className="object-contain group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-primary leading-tight tracking-wide uppercase">Weerappan</span>
            <span className="text-xs text-slate-500 uppercase tracking-widest hidden sm:block">Engineering & Construction</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/services">Services</NavLink>
          <NavLink href="/portfolio">Portfolio</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        <div className="hidden md:block">
           <Link href="/contact" className="px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full shadow-lg hover:bg-secondary hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5">
             Get a Quote
           </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden p-2 text-primary focus:outline-none">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden glass absolute top-20 left-0 w-full border-t border-slate-200/50 shadow-lg">
          <nav className="flex flex-col p-4 gap-4">
            <Link href="/" onClick={toggleMenu} className="px-4 py-2 hover:bg-slate-50 rounded-lg text-primary font-medium">Home</Link>
            <Link href="/about" onClick={toggleMenu} className="px-4 py-2 hover:bg-slate-50 rounded-lg text-primary font-medium">About Us</Link>
            <Link href="/services" onClick={toggleMenu} className="px-4 py-2 hover:bg-slate-50 rounded-lg text-primary font-medium">Services</Link>
            <Link href="/portfolio" onClick={toggleMenu} className="px-4 py-2 hover:bg-slate-50 rounded-lg text-primary font-medium">Portfolio</Link>
            <Link href="/contact" onClick={toggleMenu} className="px-4 py-2 hover:bg-slate-50 rounded-lg text-primary font-medium">Contact</Link>
            <div className="pt-2 pb-2 px-4 border-t border-slate-100">
               <Link href="/contact" onClick={toggleMenu} className="block w-full text-center px-6 py-2.5 bg-primary text-white text-sm font-semibold rounded-full shadow-lg">
                 Get a Quote
               </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}