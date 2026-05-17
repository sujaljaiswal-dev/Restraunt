import React from 'react';
import { motion } from 'framer-motion';
import logo from '../assets/logo-compressed.png';
import heroBg from '../assets/hero-bg.jpg';
import { DecorativeLine } from './Icons';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ x: "0%" }}
      exit={{ x: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#080504] overflow-hidden shadow-[20px_0_50px_rgba(0,0,0,0.5)]"
    >
      {/* Background Texture similar to Hero */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#2a1409,transparent_70%)] opacity-80 z-0" />
      
      {/* Arch Frame */}
      <svg 
        viewBox="0 0 800 800" 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[95vw] sm:w-[800px] md:w-[900px] max-w-[900px] h-auto opacity-30 pointer-events-none z-0"
        preserveAspectRatio="xMidYMid meet"
      >
        <path d="M 100 800 L 100 450
                 Q 100 380, 180 330
                 Q 180 280, 240 230
                 Q 240 180, 310 150
                 Q 340 120, 400 50
                 Q 460 120, 490 150
                 Q 560 180, 560 230
                 Q 620 280, 620 330
                 Q 700 380, 700 450
                 L 700 800" 
              stroke="#ff6b1a" fill="none" strokeWidth="2" />
              
        <path d="M 120 800 L 120 460
                 Q 120 390, 190 340
                 Q 190 290, 250 240
                 Q 250 190, 310 160
                 Q 340 135, 400 70
                 Q 460 135, 490 160
                 Q 550 190, 550 240
                 Q 610 290, 610 340
                 Q 680 390, 680 460
                 L 680 800" 
              stroke="#ff6b1a" fill="none" strokeWidth="1" opacity="0.6" />
      </svg>

      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-6 mt-10">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.img 
            src={logo} 
            alt="Chadha's Restaurant" 
            className="w-56 sm:w-72 md:w-80 h-auto object-contain drop-shadow-2xl relative z-10"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Subtitle */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center gap-1.5 sm:gap-3 text-brand-orange mb-6 sm:mb-8 -mt-10 sm:-mt-16 max-w-full px-2"
          >
            <div className="flex items-center shrink-0">
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 border border-brand-orange rotate-45 mr-0.5 sm:mr-1" />
              <div className="w-4 sm:w-16 h-[1px] bg-brand-orange" />
            </div>
            <span className="text-[10px] sm:text-sm font-medium tracking-wide text-center truncate sm:whitespace-normal">The North Indian Food Corner</span>
            <div className="flex items-center shrink-0">
              <div className="w-4 sm:w-16 h-[1px] bg-brand-orange" />
              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 border border-brand-orange rotate-45 ml-0.5 sm:ml-1" />
            </div>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-64 sm:w-80 h-[2px] bg-[#2a1307] rounded-full relative mb-4 sm:mb-5">
            <motion.div 
              className="absolute left-0 top-0 h-full bg-[#ff6b1a] shadow-[0_0_10px_#ff6b1a]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
            />
            {/* Glowing Dot on Progress Bar */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 w-[5px] h-[5px] bg-[#fff3e0] rounded-full shadow-[0_0_12px_4px_#ff6b1a]"
              initial={{ left: "0%" }}
              animate={{ left: "100%" }}
              transition={{ duration: 2.0, ease: "easeInOut" }}
            />
          </div>

          {/* Loading Text */}
          <motion.span 
            className="text-brand-orange tracking-[0.4em] sm:tracking-[0.5em] text-[10px] sm:text-xs font-medium opacity-60 uppercase"
            initial={{ opacity: 0.3 }}
            animate={{ opacity: 0.8 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: "reverse" }}
          >
            Loading...
          </motion.span>

        </motion.div>
      </div>
    </motion.div>
  );
}
