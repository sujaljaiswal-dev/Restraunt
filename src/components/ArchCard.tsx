import React, { useRef, useEffect, useState, useId } from 'react';

interface ArchCardProps {
  image: string;
  name: string;
  desc: string;
}

export default function ArchCard({ image, name, desc }: ArchCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const id = useId();
  const safeId = id.replace(/[^a-zA-Z0-9]/g, '');

  const bgClipId = `bg-clip-${safeId}`;
  const imgClipId = `img-clip-${safeId}`;
  const glowId = `glow-card-${safeId}`;

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
      }
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const { width: w, height: h } = size;
  
  const th1 = 60; // Top bounding height of straight line section
  const th2 = 25; // Height of the inner plateau before peak
  const peakY = 0;
  const r = 12; // bottom corner radius
  const cx = w / 2;
  
  let clipPath = '';
  let outlinePath = '';
  
  if (w > 0 && h > 0) {
    const stepOutX = Math.min(cx, w / 2); 
    const stepInX = stepOutX - 30;
    const peakOutX = 35;
    
    const archPath = `
      M 0 ${th1}
      L ${cx - stepOutX} ${th1}
      C ${cx - stepOutX + 15} ${th1}, ${cx - stepInX - 15} ${th2}, ${cx - stepInX} ${th2}
      L ${cx - peakOutX} ${th2}
      C ${cx - peakOutX + 15} ${th2}, ${cx - 10} ${peakY + 8}, ${cx} ${peakY}
      C ${cx + 10} ${peakY + 8}, ${cx + peakOutX - 15} ${th2}, ${cx + peakOutX} ${th2}
      L ${cx + stepInX} ${th2}
      C ${cx + stepInX + 15} ${th2}, ${cx + stepOutX - 15} ${th1}, ${cx + stepOutX} ${th1}
    `;

    outlinePath = `
      ${archPath}
      L ${w} ${h - r}
      A ${r} ${r} 0 0 1 ${w - r} ${h}
      L ${r} ${h}
      A ${r} ${r} 0 0 1 0 ${h - r}
      Z
    `;
    
    const imgH = h * 0.6; // 60% of height for the image
    clipPath = `
      ${archPath}
      L ${w} ${imgH}
      L 0 ${imgH}
      Z
    `;
  }
  
  return (
    <div ref={containerRef} className="relative w-full aspect-[3/4] flex flex-col items-center">
      {w > 0 && (
        <svg 
          className="absolute inset-0 pointer-events-none z-10 overflow-visible" 
          width={w} 
          height={h} 
          viewBox={`0 0 ${w} ${h}`}
        >
          <defs>
            <clipPath id={bgClipId}>
              <path d={outlinePath} />
            </clipPath>
            <clipPath id={imgClipId}>
              <path d={clipPath} />
            </clipPath>
            <filter id={glowId}>
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          <path 
            d={outlinePath} 
            fill="none" 
            stroke="#C17A44" 
            strokeWidth="1.5" 
            strokeOpacity="0.4"
            filter={`url(#${glowId})`}
          />
        </svg>
      )}
      
      {w > 0 && (
        <div style={{ clipPath: `url(#${bgClipId})` }} className="absolute inset-0 bg-[#0F0804]/90"></div>
      )}

      {w > 0 && (
        <div 
          className="absolute top-0 left-0 right-0 overflow-hidden" 
          style={{ height: '60%', clipPath: `url(#${imgClipId})` }}
        >
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0804] via-[#0F0804]/20 to-transparent opacity-90" />
        </div>
      )}
      
      {/* Content Area */}
      <div className="absolute bottom-0 left-0 right-0 h-[40%] flex flex-col items-center justify-center p-6 text-center z-10 text-[#E8DCC2]">
        <h4 className="font-serif text-[1.4rem] tracking-wide mb-3">{name}</h4>
        <p className="text-white/60 text-[0.9rem] leading-[1.6] max-w-[200px]">
          {desc}
        </p>
      </div>
    </div>
  );
}
