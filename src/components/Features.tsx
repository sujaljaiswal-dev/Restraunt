import React from 'react';
import { motion } from 'motion/react';
import { LotusIcon } from './Icons';
import { Utensils, Flame, Leaf, Heart } from 'lucide-react';
import OrnamentalBox from './OrnamentalBox';

const FEATURE_CARDS = [
  {
    title: "Authentic Recipes",
    desc: "Traditional recipes passed down through generations.",
    icon: Utensils
  },
  {
    title: "Tandoor Perfection",
    desc: "Smoky, flavorful, and cooked to perfection.",
    icon: Flame
  },
  {
    title: "Premium Ingredients",
    desc: "Only the finest & freshest ingredients make the cut.",
    icon: Leaf
  },
  {
    title: "Made with Love",
    desc: "Every dish is crafted with passion and care.",
    icon: Heart
  }
];

export default function Features() {
  return (
    <section className="py-24 px-6 relative mt-16 lg:mt-32">
      <div className="container mx-auto">
        <OrnamentalBox>
          {/* Header inside the ornamental box */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <LotusIcon className="w-10 h-10 text-[#C17A44] mb-3" />
            <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-center text-[#E8DCC2]">Why Chadha's?</h3>
            <div className="mt-6 flex items-center justify-center gap-2">
              <div className="w-12 h-[1px] bg-[#C17A44]/30"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-[#C17A44]"></div>
              <div className="w-12 h-[1px] bg-[#C17A44]/30"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center mt-6 lg:mt-16 mb-8 pt-8">
            {FEATURE_CARDS.map((feature, idx) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex flex-col items-center relative group"
              >
                <div className="w-16 h-16 rounded-full border border-[#C17A44]/30 flex items-center justify-center mb-6 relative">
                   {/* Leaf Decorators mimicking the reference image */}
                  <div className="absolute -left-3 -bottom-1 text-[#C17A44]/60 rotate-[120deg]">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 22C2 22 2 12 12 2C12 2 22 12 22 22C12 22 2 22 2 22Z" /></svg>
                  </div>
                  <div className="absolute -right-3 -bottom-1 text-[#C17A44]/60 rotate-[240deg]">
                     <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 22C2 22 2 12 12 2C12 2 22 12 22 22C12 22 2 22 2 22Z" /></svg>
                  </div>
                  <feature.icon className="w-6 h-6 text-[#E8DCC2]/90 flex-shrink-0" />
                </div>
                <h4 className="font-serif text-[1.1rem] lg:text-[1.2rem] mb-2 tracking-wide text-[#E8DCC2]">{feature.title}</h4>
                <p className="text-white/60 text-sm leading-[1.6] max-w-[200px]">
                  {feature.desc}
                </p>
                
                {/* Decorative Separator for LG screens */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute -right-6 top-[20%] bottom-[20%] w-[1px] bg-[#C17A44]/20" />
                )}
              </motion.div>
            ))}
          </div>
        </OrnamentalBox>
      </div>
    </section>
  );
}
