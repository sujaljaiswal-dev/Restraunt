import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, ConciergeBell } from 'lucide-react';
import { DecorativeLine } from './Icons';
import paneerHandi from '../assets/paneer-handi.png';
import heroBg from '../assets/hero-bg.jpg';
import naanBasket from '../assets/naan-basket.png';

export default function Hero({ isLoaded = true }: { isLoaded?: boolean }) {
  return (
    <section className="relative min-h-screen flex items-center pt-24 md:pt-20 px-6 overflow-hidden bg-brand-dark">
      {/* Background Texture/Shine */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center pointer-events-none opacity-80"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark gradient from left for text readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-brand-dark via-brand-dark/60 to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3d2b1f,transparent_60%)] opacity-30 z-0" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-[auto_auto] gap-x-8 gap-y-4 lg:gap-y-8 items-center z-10 relative">
        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
              }
            }
          }}
          className="col-start-1 row-start-1 lg:row-span-1 space-y-3 sm:space-y-4 mt-8 lg:mt-16 z-10 w-full"
        >
          <motion.div 
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="flex items-center gap-2 sm:gap-3"
          >
            <DecorativeLine />
            <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.4em] uppercase text-brand-orange font-medium">The Taste Of</span>
            <DecorativeLine className="rotate-180" />
          </motion.div>
          
          <motion.h2 
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="font-serif text-[42px] sm:text-6xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight text-white mb-2"
          >
            North India, <br />
            The <span className="text-brand-orange text-glow">Chadha</span> Style.
          </motion.h2>
          
          <motion.p 
            variants={{
              hidden: { opacity: 0, x: -100 },
              visible: { opacity: 1, x: 0, transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] } }
            }}
            className="text-white/60 max-w-[90%] sm:max-w-lg text-sm sm:text-lg leading-relaxed font-light"
          >
            From rich curries to timeless tandoori, experience authentic North Indian flavors crafted with love and tradition.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={{
            hidden: { x: 100, opacity: 0 },
            visible: { 
              x: 0, 
              opacity: 1,
              transition: { 
                type: "spring",
                stiffness: 60,
                damping: 15,
                mass: 1.2,
                delay: 0.5,
                opacity: { duration: 0.3 }
              }
            }
          }}
          className="col-start-1 row-start-2 lg:col-start-2 lg:row-start-1 lg:row-span-2 relative flex justify-end lg:mr-[35%] py-4 sm:py-0 w-[110%] sm:w-full ml-[-5%] sm:ml-0 z-0"
        >
          {/* Naan Basket in Background */}
          <motion.div 
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={{
              hidden: { opacity: 0, x: 100, y: -20, rotate: 15, scale: 0.8 },
              visible: { 
                opacity: 1, x: 40, y: -40, rotate: -5, scale: 1,
                transition: { 
                  type: "spring",
                  stiffness: 50,
                  damping: 18,
                  mass: 1.5,
                  delay: 0.6,
                  opacity: { duration: 0.4 }
                }
              }
            }}
            className="absolute top-1/2 -translate-y-[65%] sm:-translate-y-1/2 -right-8 sm:-right-16 md:-right-32 lg:-right-48 w-[200px] sm:w-[220px] md:w-[320px] lg:w-[450px] xl:w-[580px] z-[0] pointer-events-none opacity-60 sm:opacity-40 lg:opacity-100"
          >
            <img 
              src={naanBasket} 
              alt="Fresh Naan Basket"
              className="w-full h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.7)]"
            />
          </motion.div>

          <div className="relative group/hero-img w-fit z-10 translate-x-[15%] sm:translate-x-0">
             {/* Subtle glow behind image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-brand-orange/15 rounded-full blur-[60px] sm:blur-[100px] pointer-events-none" />
            
            <div className="relative cursor-pointer w-fit overflow-visible">
              {/* Enhanced Smoke Effect Overlay */}
              <div className="absolute inset-0 z-20 pointer-events-none flex justify-center opacity-75 mix-blend-screen transition-opacity duration-700">
                {/* Fast, subtle steam particles for immediate heat */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`steam-${i}`}
                    initial={{ opacity: 0, scale: 0.8, y: 10, x: (i - 2.5) * 25, filter: 'blur(4px)' }}
                    animate={isLoaded ? { 
                      opacity: [0, 0.4, 0.6, 0], 
                      scale: [1, 1.2, 1.6], 
                      y: [-20, -100 - (Math.random() * 40)],
                      x: (i - 2.5) * 25 + (Math.random() * 20 - 10),
                      filter: ['blur(4px)', 'blur(6px)', 'blur(10px)']
                    } : {}}
                    transition={{
                      duration: 2.2 + (Math.random() * 1.2),
                      repeat: Infinity,
                      delay: (isLoaded ? 0.2 : 0) + (Math.random() * 1.2),
                      ease: "easeOut"
                    }}
                    className="absolute bottom-1/2 w-10 h-16 sm:w-14 sm:h-28 bg-gradient-to-t from-white/10 to-white/20 rounded-full"
                  />
                ))}
                
                {/* Billowing thick smoke for body */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={`smoke-${i}`}
                    initial={{ opacity: 0, scale: 0.5, y: 0, x: (i - 2.5) * 35, filter: 'blur(10px)' }}
                    animate={isLoaded ? { 
                      opacity: [0, 0.3, 0], 
                      scale: [1, 2.0, 2.8], 
                      y: [-40, -180 - (i * 15)],
                      x: ((i - 2.5) * 40) + (Math.sin(i * 1.5) * 40),
                      filter: ['blur(10px)', 'blur(16px)', 'blur(24px)']
                    } : {}}
                    transition={{
                      duration: 4.2 + (i * 0.6),
                      repeat: Infinity,
                      delay: (isLoaded ? 0.8 : 0) + (i * 0.5),
                      ease: "linear"
                    }}
                    className="absolute bottom-[40%] w-24 h-24 sm:w-32 sm:h-32 bg-white/30 rounded-full"
                  />
                ))}
              </div>

              <img 
                src={paneerHandi} 
                alt="Authentic Paneer Handi"
                className="w-[280px] sm:w-[280px] md:w-[400px] lg:w-[550px] xl:w-[700px] max-w-none h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)] transition-transform duration-700 hover:rotate-3 hover:scale-105"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={isLoaded ? "visible" : "hidden"}
          variants={{
             hidden: { opacity: 0, x: -100 },
             visible: { 
               opacity: 1, 
               x: 0,
               transition: { duration: 1.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }
             }
          }}
          className="col-start-1 row-start-2 lg:col-start-1 lg:row-start-2 flex flex-col sm:flex-row lg:flex-col flex-wrap gap-3 sm:gap-4 lg:gap-6 pt-0 lg:pt-0 w-[150px] sm:w-full max-w-[150px] sm:max-w-none z-20 self-start lg:self-auto mt-2 sm:mt-0 lg:-mt-6"
        >
          <button className="bg-[#C15B26] text-white px-4 sm:px-8 py-3 sm:py-5 lg:py-6 rounded-[8px] sm:rounded-md lg:rounded-xl flex items-center justify-between sm:justify-center lg:justify-between gap-3 sm:gap-4 transition-transform hover:scale-105 active:scale-95 group shadow-lg shadow-brand-orange/20 w-full sm:w-auto lg:w-[350px] xl:w-[400px] relative overflow-hidden">
            <span className="font-medium tracking-normal sm:tracking-widest normal-case sm:uppercase text-[13px] sm:text-sm lg:text-lg relative z-10">Explore Menu</span>
            <ConciergeBell className="w-[16px] h-[16px] sm:w-5 sm:h-5 lg:w-6 lg:h-6 relative z-10" />
          </button>
          <button className="border border-[#C15B26]/80 text-[#C15B26] bg-[#1a110a] sm:bg-transparent px-4 sm:px-8 py-3 sm:py-5 lg:py-6 rounded-[8px] sm:rounded-md lg:rounded-xl flex items-center justify-between sm:justify-center lg:justify-between gap-3 sm:gap-4 transition-colors hover:bg-brand-orange/10 backdrop-blur-sm w-full sm:w-auto lg:w-[350px] xl:w-[400px]">
            <span className="font-medium tracking-normal sm:tracking-widest normal-case sm:uppercase text-[13px] sm:text-sm lg:text-lg">Book a Table</span>
            <CalendarDays className="w-[16px] h-[16px] sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
          </button>
        </motion.div>
      </div>

      {/* Decorative bottom lines */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center opacity-50 block md:hidden">
        <div className="w-16 h-[1px] bg-brand-orange/30"></div>
        <div className="w-3 h-3 border border-brand-orange/30 rotate-45 mx-2"></div>
        <div className="w-16 h-[1px] bg-brand-orange/30"></div>
      </div>
    </section>
  );
}
