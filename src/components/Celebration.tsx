import React from 'react';
import { motion } from 'motion/react';

export const Celebration: React.FC = () => {
  return (
    <section aria-label="Celebration details" id="celebration" className="relative py-20 sm:py-28 px-6 overflow-hidden bg-[#0C0B09]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40" style={{ background: "linear-gradient(180deg, rgba(212,175,55,0.07) 0%, transparent 100%)" }} aria-hidden="true" />
      
      <div className="relative mx-auto max-w-4xl">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl" style={{ color: "#E8C547", textShadow: "0 0 40px rgba(232,197,71,0.22)" }}>
            The Celebration
          </h2>
          <div className="flex items-center justify-center mt-4" aria-hidden="true">
            <svg className="w-full max-w-[220px] sm:max-w-sm md:max-w-md" viewBox="0 0 220 24" preserveAspectRatio="xMidYMid meet" fill="none">
              <line x1="0" y1="12" x2="86" y2="12" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.55" />
              <polygon points="89,12 92.5,8.5 96,12 92.5,15.5" fill="#D4AF37" fillOpacity="0.65" />
              <ellipse cx="110" cy="12" rx="2.5" ry="8.5" fill="#D4AF37" fillOpacity="0.3" />
              <ellipse cx="110" cy="12" rx="8.5" ry="2.5" fill="#D4AF37" fillOpacity="0.3" />
              <circle cx="110" cy="12" r="3" fill="#D4AF37" fillOpacity="0.9" />
              <circle cx="110" cy="12" r="6" fill="none" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.45" />
              <polygon points="124,12 127.5,8.5 131,12 127.5,15.5" fill="#D4AF37" fillOpacity="0.65" />
              <line x1="134" y1="12" x2="220" y2="12" stroke="#D4AF37" strokeWidth="0.75" strokeOpacity="0.55" />
            </svg>
          </div>
        </motion.div>

        <motion.div 
          className="mb-14 sm:mb-16"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="relative overflow-hidden mx-auto max-w-2xl" style={{ border: "1.5px solid rgba(212,175,55,0.38)", boxShadow: "0 0 0 5px rgba(212,175,55,0.05), 0 24px 48px -16px rgba(0,0,0,0.65)" }}>
            <div className="aspect-[2.15/1] min-h-[10rem] sm:min-h-[13rem] max-h-[20rem] w-full">
              <img src="https://content.skyscnr.com/available/2552073778/2552073778_960x576.jpg" alt="Wedding venue" className="h-full w-full object-cover" loading="lazy" decoding="async" style={{ filter: "brightness(0.84) contrast(1.04)" }} />
            </div>
            {/* Corner accents */}
            <div className="absolute" style={{ width: "18px", height: "18px", top: "7px", bottom: "auto", left: "7px", right: "auto", borderTop: "1.5px solid #E8C547", borderLeft: "1.5px solid #E8C547" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "18px", height: "18px", top: "7px", bottom: "auto", left: "auto", right: "7px", borderTop: "1.5px solid #E8C547", borderRight: "1.5px solid #E8C547" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "18px", height: "18px", top: "auto", bottom: "7px", left: "7px", right: "auto", borderBottom: "1.5px solid #E8C547", borderLeft: "1.5px solid #E8C547" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "18px", height: "18px", top: "auto", bottom: "7px", left: "auto", right: "7px", borderBottom: "1.5px solid #E8C547", borderRight: "1.5px solid #E8C547" }} aria-hidden="true" />
          </div>
          <p className="mt-4 text-center text-[9px] font-medium uppercase tracking-[0.45em] font-sans" style={{ color: "rgba(232,197,71,0.48)" }}>Where it unfolds</p>
        </motion.div>

        <div className="max-w-xl mx-auto mt-8">
          <motion.div 
            className="relative p-7 sm:p-9 text-center" 
            style={{ background: "rgba(255, 252, 245, 0.024)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)", border: "1px solid rgba(212, 175, 55, 0.22)", boxShadow: "rgba(232, 197, 71, 0.1) 0px 1px 0px inset, rgba(255, 255, 255, 0.03) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.55) 0px 8px 32px -8px" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute" style={{ width: "14px", height: "14px", top: "-1px", left: "-1px", borderTop: "1.5px solid #D4AF37", borderLeft: "1.5px solid #D4AF37" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "14px", height: "14px", top: "-1px", right: "-1px", borderTop: "1.5px solid #D4AF37", borderRight: "1.5px solid #D4AF37" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "14px", height: "14px", bottom: "-1px", left: "-1px", borderBottom: "1.5px solid #D4AF37", borderLeft: "1.5px solid #D4AF37" }} aria-hidden="true" />
            <div className="absolute" style={{ width: "14px", height: "14px", bottom: "-1px", right: "-1px", borderBottom: "1.5px solid #D4AF37", borderRight: "1.5px solid #D4AF37" }} aria-hidden="true" />
            
            <h3 className="font-display text-2xl sm:text-3xl font-light italic mb-2" style={{ color: "#E8C547" }}>The Celebration</h3>
            <div className="h-px w-10 mx-auto mb-5" style={{ background: "linear-gradient(90deg, transparent, #D4AF3788, transparent)" }} />
            <div className="space-y-2.5 text-sm font-light leading-relaxed font-sans" style={{ color: "rgba(255,255,255,0.7)" }}>
              <p>Saturday, 15th of August 2026</p>
              <p>6.30 pm to 11.00 pm</p>
              <p>Grand Oriental Hotel</p>
              <p className="text-xs opacity-80">(Victorian Ballroom)</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-12 sm:mt-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4" aria-hidden="true">
            <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(90deg, transparent, #D4AF37cc)" }} />
            <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
              <polygon points="4.5,0 9,4.5 4.5,9 0,4.5" fill="#D4AF37" fillOpacity="0.85" />
            </svg>
            <div className="h-px w-12 sm:w-16" style={{ background: "linear-gradient(270deg, transparent, #D4AF37cc)" }} />
          </div>
          <p className="text-[11px] font-light font-sans">
            <span className="text-[10px] uppercase tracking-[0.42em]" style={{ color: "#D4AF37" }}>Dress code</span>
            <span className="mx-2 opacity-25" aria-hidden="true">·</span>
            <span style={{ color: "rgba(255,255,255,0.68)" }}>Come as you feel your best! Your presence is all that matters to us 🤍</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};
