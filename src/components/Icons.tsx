import React from 'react';

export const MustacheLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 50" className={className} fill="currentColor">
    <path d="M10,40 Q30,40 50,15 Q70,40 90,40 Q70,50 50,25 Q30,50 10,40 Z" />
  </svg>
);

export const LotusIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M50,10 C60,40 90,50 50,90 C10,50 40,40 50,10 Z" />
    <path d="M50,30 C70,50 90,60 50,90 C10,60 30,50 50,30 Z" />
    <path d="M50,50 C80,70 90,80 50,90 C10,80 20,70 50,50 Z" />
  </svg>
);

export const DecorativeLine = ({ className }: { className?: string }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="h-[1px] w-8 bg-brand-orange/50" />
    <div className="w-1.5 h-1.5 rotate-45 border border-brand-orange" />
    <div className="h-[1px] w-8 bg-brand-orange/50" />
  </div>
);
