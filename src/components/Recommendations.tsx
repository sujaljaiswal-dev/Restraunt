import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { DecorativeLine } from './Icons';
import ArchCard from './ArchCard';
import butterChickenImg from '../assets/images/regenerated_image_1778881140738.jpg';
import dalMakhaniImg from '../assets/images/dalMakhani-compressed.png';
import paneerTikkaImg from '../assets/images/paneerTikka-compressed.png';
import kadhiBiryaniImg from '../assets/images/kadhiBiryani-compressed.png';

const RECOMMENDATIONS = [
  {
    name: "Butter Chicken",
    desc: "Creamy, buttery & simply irresistible.",
    image: butterChickenImg
  },
  {
    name: "Dal Makhani",
    desc: "Slow cooked overnight for that royal taste.",
    image: dalMakhaniImg
  },
  {
    name: "Paneer Tikka",
    desc: "Soft, smoky & full of authentic flavors.",
    image: paneerTikkaImg,
    flipHorizontal: true,
    isRotated: true,
    imagePosition: "center",
  },
  {
    name: "Kadhi Biryani",
    desc: "A perfect blend of spices & tradition.",
    image: kadhiBiryaniImg
  }
];

export default function Recommendations() {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <DecorativeLine />
            <h3 className="font-serif text-[28px] md:text-3xl lg:text-4xl text-brand-orange text-center mx-2 shrink-0">
              Chef's Recommendations
            </h3>
            <DecorativeLine className="rotate-180" />
          </div>
        </div>

        <div className="relative group max-w-7xl mx-auto px-8 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {RECOMMENDATIONS.map((dish, idx) => (
              <motion.div
                key={dish.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.7, 
                  delay: idx * 0.15,
                  ease: [0.25, 1, 0.5, 1]
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group/card"
              >
                <ArchCard 
                  name={dish.name}
                  desc={dish.desc}
                  image={dish.image}
                  flipHorizontal={dish.flipHorizontal}
                  imagePosition={dish.imagePosition}
                  imageClassName={dish.imageClassName}
                  isRotated={dish.isRotated}
                />
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="hidden md:flex absolute top-1/2 left-0 -translate-y-1/2">
            <button className="w-[42px] h-[42px] rounded-full border border-[#C17A44]/50 flex items-center justify-center text-[#C17A44] hover:bg-[#C17A44]/10 transition-colors">
              <ChevronLeft className="w-5 h-5 ml-[-2px]" strokeWidth={1.5} />
            </button>
          </div>
          <div className="hidden md:flex absolute top-1/2 right-0 -translate-y-1/2">
            <button className="w-[42px] h-[42px] rounded-full border border-[#C17A44]/50 flex items-center justify-center text-[#C17A44] hover:bg-[#C17A44]/10 transition-colors">
              <ChevronRight className="w-5 h-5 mr-[-2px]" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
