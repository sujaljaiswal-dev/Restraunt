import React from 'react';
import { ArrowRight } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-12 px-6 overflow-hidden bg-gradient-to-r from-[#6e1e03] via-[#7C2405] to-[#6e1e03]">
      {/* Cityscape Silhouette Background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none mix-blend-color-burn"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&q=80&w=1600')`,
          backgroundSize: 'cover',
          backgroundPosition: '100% 80%',
        }}
      />

      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-12 items-center">
          
          {/* Left Text */}
          <div className="flex flex-col items-center lg:items-start lg:justify-self-end text-center lg:text-left lg:pr-4">
            <p className="font-serif text-[1.4rem] md:text-[1.6rem] leading-[1.6] text-[#E8DCC2]">
              Swaad jo yaad rahe, <br className="hidden md:block" />
              experience jo dil chhoo le.
            </p>
          </div>

          {/* Center Mustache Emblem */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative w-40 h-40 md:w-48 md:h-48 flex items-center justify-center rounded-full group">
              <svg viewBox="0 0 200 200" className="absolute inset-0 w-full h-full text-[#E56A28]">
                {/* Outer dashed ring */}
                <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 6" fill="none" opacity="0.8" />
                {/* Inner solid ring */}
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
                {/* Innermost radiating dotted ring */}
                <circle cx="100" cy="100" r="68" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1 8" fill="none" opacity="0.4" />
              </svg>
              
              <img 
                src={logo} 
                alt="Chadha's Logo" 
                className="w-24 md:w-32 h-auto object-contain transform transition-transform group-hover:scale-110 drop-shadow-md" 
              />
            </div>
          </div>

          {/* Right Text & Button */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-5 lg:pl-4">
            <p className="text-[#E8DCC2]/90 text-[1.1rem] md:text-[1.15rem] leading-[1.6]">
              Visit us and let every bite <br className="hidden md:block" />
              take you to the heart of North India.
            </p>
            <button className="flex items-center gap-3 border border-[#E8DCC2]/40 px-6 py-2.5 rounded text-sm text-[#E8DCC2] hover:bg-[#E8DCC2] hover:text-[#7C2405] transition-colors font-medium tracking-wide">
              <span>Visit Us Today</span>
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[#E8DCC2]">
          <p className="text-[11px] uppercase tracking-[0.2em] opacity-60">
            © 2026 Chadha's Restaurant. All rights reserved by Metal_Web.
          </p>
          <div className="flex gap-8">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(link => (
              <a key={link} href="#" className="text-[11px] uppercase tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
