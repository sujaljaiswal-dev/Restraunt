import React, { useRef, useEffect, useState } from 'react';

export default function OrnamentalBox({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

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
  
  // path coordinates
  const r = 24; 
  const th1 = 110; 
  const th2 = 45;  
  const peakY = 0; 
  
  let path = '';
  if (w > 0 && h > 0) {
    const cx = w / 2;
    const maxPeakOutX = 60;
    const stepOutX = Math.min(280, w / 2 - 20); // Width of the lower curve
    const stepInX = Math.max(stepOutX - 60, maxPeakOutX + 10); // Ensure stepInX is always greater than peakOutX
    const peakOutX = Math.min(maxPeakOutX, stepInX - 10); // Width of the top ogee arch
    
    path = `M 0 ${th1 + r}
      A ${r} ${r} 0 0 1 ${r} ${th1}
      L ${cx - stepOutX} ${th1}
      C ${cx - stepOutX + 25} ${th1}, ${cx - stepInX - 25} ${th2}, ${cx - stepInX} ${th2}
      L ${cx - peakOutX} ${th2}
      C ${cx - peakOutX + 25} ${th2}, ${cx - 15} ${peakY + 15}, ${cx} ${peakY}
      C ${cx + 15} ${peakY + 15}, ${cx + peakOutX - 25} ${th2}, ${cx + peakOutX} ${th2}
      L ${cx + stepInX} ${th2}
      C ${cx + stepInX + 25} ${th2}, ${cx + stepOutX - 25} ${th1}, ${cx + stepOutX} ${th1}
      L ${w - r} ${th1}
      A ${r} ${r} 0 0 1 ${w} ${th1 + r}
      L ${w} ${h - r}
      A ${r} ${r} 0 0 1 ${w - r} ${h}
      L ${r} ${h}
      A ${r} ${r} 0 0 1 0 ${h - r}
      Z`;
  }

  return (
    <div ref={containerRef} className="relative w-full h-full text-center">
      {w > 0 && (
        <svg 
          className="absolute inset-0 pointer-events-none overflow-visible" 
          width={w} 
          height={h} 
          viewBox={`0 0 ${w} ${h}`}
        >
          {/* Subtle drop shadow / glow for the container outline */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          
          <path 
            d={path} 
            fill="#120904" 
            stroke="#C17A44" 
            strokeWidth="1.5" 
            strokeOpacity="0.5"
            filter="url(#glow)"
          />
        </svg>
      )}
      <div className="relative z-10 p-8 pt-[120px] lg:px-12">
        {children}
      </div>
    </div>
  );
}
