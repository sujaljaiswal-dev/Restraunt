import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Menu, X, Phone } from 'lucide-react';
import logo from '../assets/logo-compressed.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = ['Home', 'About Us', 'Menu', 'Gallery', 'Catering', 'Contact Us'];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 pt-4 pb-12 flex items-center justify-between lg:justify-between bg-gradient-to-b from-brand-dark via-brand-dark/95 to-transparent">
      
      {/* Mobile Hamburger on Left */}
      <button 
        className="lg:hidden text-brand-orange hover:text-white transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-7 h-7" /> : (
          <div className="flex flex-col gap-1.5 w-7 items-start">
            <span className="h-[2px] bg-brand-orange w-full" />
            <span className="h-[2px] bg-brand-orange w-3/4" />
            <span className="h-[2px] bg-brand-orange w-full" />
          </div>
        )}
      </button>

      {/* Logo Container */}
      <div className="flex flex-col items-center justify-center shrink-0 absolute left-1/2 top-1.5 sm:top-1 -translate-x-1/2 lg:static lg:transform-none h-16 sm:h-16 md:h-20 xl:h-24 w-40 sm:w-32 md:w-56 lg:ml-24 xl:ml-36">
        <img 
          src={logo} 
          alt="Chadha's Logo" 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300%] sm:h-[250%] md:h-[250%] xl:h-[280%] max-w-none object-contain pointer-events-none" 
        />
        <div className="absolute bottom-[-16px] md:bottom-[-8px] hidden md:flex items-center justify-center gap-1 sm:gap-2 whitespace-nowrap">
          <div className="flex items-center gap-1 opacity-80">
            <div className="w-1 h-1 rounded-full border border-brand-orange bg-transparent" />
            <div className="w-2 sm:w-3 h-[1px] bg-brand-orange" />
          </div>
          <p className="text-[5px] sm:text-[6px] md:text-[9px] tracking-[0.1em] sm:tracking-[0.15em] text-white/80 uppercase">
            The North Indian Food Corner
          </p>
          <div className="flex items-center gap-1 opacity-80">
            <div className="w-2 sm:w-3 h-[1px] bg-brand-orange" />
            <div className="w-1 h-1 rounded-full border border-brand-orange bg-transparent" />
          </div>
        </div>
      </div>

      {/* Desktop Links */}
      <div className="hidden lg:flex items-center gap-6 xl:gap-8">
        {links.map((item, idx) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className={`text-[11px] xl:text-sm tracking-widest hover:text-brand-orange transition-colors ${
              idx === 0 ? 'text-brand-orange border-b border-brand-orange pb-0.5' : 'text-white/80'
            }`}
          >
            {item}
          </a>
        ))}
      </div>

      {/* Desktop Button */}
      <button className="hidden lg:flex items-center gap-2 border border-brand-orange/50 px-4 xl:px-6 py-2 rounded-full text-brand-orange text-[11px] xl:text-sm hover:bg-brand-orange hover:text-white transition-all duration-300">
        <Calendar className="w-3.5 h-3.5 xl:w-4 xl:h-4" />
        <span className="tracking-widest uppercase">Book a Table</span>
      </button>

      {/* Mobile Phone Icon on Right */}
      <button 
        className="lg:hidden text-brand-orange hover:bg-brand-orange/10 transition-colors w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-brand-orange flex items-center justify-center"
        aria-label="Call us"
      >
        <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-md border-b border-brand-orange/20 py-4 px-6 flex flex-col gap-4 lg:hidden"
          >
            {links.map((item, idx) => (
              <motion.a
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setIsOpen(false)}
                className={`text-sm tracking-widest hover:text-brand-orange transition-colors py-2 ${
                  idx === 0 ? 'text-brand-orange' : 'text-white/80'
                }`}
              >
                {item}
              </motion.a>
            ))}
            <motion.button 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: links.length * 0.1 }}
              className="flex items-center justify-center gap-2 border border-brand-orange/50 px-6 py-3 mt-2 rounded-full text-brand-orange text-sm hover:bg-brand-orange hover:text-white transition-all duration-300 w-full"
            >
              <Calendar className="w-4 h-4" />
              <span className="tracking-widest uppercase text-xs">Book a Table</span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
