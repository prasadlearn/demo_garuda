import React, { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

interface DemoSample {
  title: string;
  category: string;
  beforeLabel: string;
  afterLabel: string;
  beforeImage: string;
  afterImage: string;
  details: string;
}

const samples: DemoSample[] = [
  {
    title: 'Sofa Foam Shampooing & Extraction',
    category: 'Fabric Care Demo',
    beforeLabel: 'Before: Deep Dust & Spot Stains',
    afterLabel: 'After: High-Pressure Suction Extraction',
    beforeImage: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1200&q=80',
    details: 'Demonstration of fabric shampooing removing embedded allergens and restoring original upholstery color.'
  },
  {
    title: 'Bathroom Hard-Water Descaling',
    category: 'Sanitary Deep Clean Demo',
    beforeLabel: 'Before: Limescale & Mineral Film',
    afterLabel: 'After: Acid-Free Descaled Polish',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=80',
    details: 'Demonstration of non-corrosive buffing eliminating calcium deposits on vitrified tiles and chrome.'
  },
  {
    title: 'Kitchen Chimney & Backsplash Degreasing',
    category: 'Kitchen Revival Demo',
    beforeLabel: 'Before: Baked-on Oil & Grime Layer',
    afterLabel: 'After: Steam Vapor Degreased Finish',
    beforeImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556909212-d5b604d0c90d?auto=format&fit=crop&w=1200&q=80',
    details: 'Demonstration of high-temperature vapor dissolving baked-on carbon and cooking oil residues.'
  }
];

export const Gallery: React.FC = () => {
  const [activeSampleIdx, setActiveSampleIdx] = useState<number>(0);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const sample = samples[activeSampleIdx];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) handleMove(e.clientX);
  };

  return (
    <section id="gallery" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-200/80">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-semibold tracking-wide uppercase mb-3 shadow-2xs">
            <span>Transformation Showcase</span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight mb-3">
            THE GARUDA TOUCH
          </h2>

          <p className="text-zinc-600 text-base sm:text-lg leading-relaxed">
            Drag the comparison slider to preview our deep-cleaning precision standards.
          </p>
        </div>

        {/* Authenticity First Banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 p-5 rounded-2xl border border-emerald-200 bg-emerald-50/70 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="flex-1 text-left">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-200/70 px-2 py-0.5 rounded">
                Real Client Transformations Coming Soon
              </span>
              <span className="text-xs text-zinc-500 font-medium">100% Genuine Standards</span>
            </div>
            <p className="text-zinc-700 text-xs sm:text-sm mt-1 leading-relaxed">
              We never use deceptive stock photos claiming to be our work. The interactive slider below demonstrates our technology and technique. High-definition before/after photos from our verified Tirupati client jobs are currently being documented and will be featured here shortly!
            </p>
          </div>
        </motion.div>

        {/* Transformation Category Tabs */}
        <div className="flex justify-center items-center gap-2 mb-8 flex-wrap">
          {samples.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                setActiveSampleIdx(idx);
                setSliderPosition(50);
              }}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-150 cursor-pointer ${
                activeSampleIdx === idx
                  ? 'bg-emerald-600 text-white shadow-xs shadow-emerald-600/30'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>

        {/* Interactive Before/After Drag Slider */}
        <div className="bg-zinc-100 rounded-3xl border border-zinc-200 p-3 sm:p-4 shadow-lg shadow-zinc-200/50 overflow-hidden">
          <div
            ref={containerRef}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative w-full h-[320px] sm:h-[420px] rounded-2xl overflow-hidden select-none cursor-ew-resize touch-none"
          >
            {/* AFTER Layer */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={sample.afterImage}
                alt={sample.afterLabel}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/25" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 text-white">
                <div className="flex justify-end">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600/90 text-white shadow-md border border-emerald-400/30">
                    Cleaned Result
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center my-auto text-center">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center mb-3">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="text-white text-base sm:text-xl font-bold">{sample.afterLabel}</div>
                  <div className="text-emerald-200 text-xs mt-1">Deep Cleaned & Sanitized</div>
                  <div className="text-white/60 text-[10px] tracking-widest uppercase mt-2.5 font-semibold">[ ILLUSTRATIVE DEMO ]</div>
                </div>

                <div className="text-right text-xs text-emerald-100 font-medium">
                  Surface Safe & Sanitized
                </div>
              </div>
            </div>

            {/* BEFORE Layer (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
              }}
            >
              <img
                src={sample.beforeImage}
                alt={sample.beforeLabel}
                className="w-full h-full object-cover filter contrast-75 brightness-75 sepia-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/35" />
              <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8 text-white">
                <div className="flex justify-start">
                  <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-emerald-300 border border-emerald-400/30">
                    Initial Condition
                  </span>
                </div>

                <div className="flex flex-col items-center justify-center my-auto text-center">
                  <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center mb-3">
                    <svg className="w-7 h-7 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="text-white text-base sm:text-xl font-bold">{sample.beforeLabel}</div>
                  <div className="text-stone-300 text-xs mt-1">Accumulated Dust, Grease & Scale</div>
                  <div className="text-white/60 text-[10px] tracking-widest uppercase mt-2.5 font-semibold">[ ILLUSTRATIVE DEMO ]</div>
                </div>

                <div className="text-left text-xs text-stone-300 font-medium">
                  Initial Inspection Point
                </div>
              </div>
            </div>

            {/* Divider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-lg pointer-events-none"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white text-zinc-900 flex items-center justify-center shadow-xl border-2 border-emerald-600">
                <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M8 9l-3 3 3 3m8-6l3 3-3 3" />
                </svg>
              </div>
            </div>
          </div>

          <div className="mt-4 px-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-zinc-500">
            <span className="italic">{sample.details}</span>
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#B45309]">
              ↔ Drag slider handle to compare
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
