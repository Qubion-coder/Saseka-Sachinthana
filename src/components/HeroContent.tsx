import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const HeroContent: React.FC = () => {
  return (
    <section aria-label="Hero — Save the Date" className="relative min-h-[100dvh] overflow-hidden bg-[#fbf8f1]">
      {/* Background Image - fully visible without overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ChatGPT Image Aug 17, 2026, 01_21_57 AM.webp" 
          alt="Wedding Illustration"
          className="h-full w-full object-cover object-center" 
        />
      </div>

      {/* Text Overlay - Elegant Full Section Layout */}
      <div className="absolute inset-0 flex flex-col items-center justify-between z-10 py-16 sm:py-20 px-4">
        
        {/* Top Content */}
        <motion.div 
          className="flex flex-col items-center text-center mt-20 sm:mt-32"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-[#2C1810] font-serif tracking-[0.2em] uppercase text-[10px] sm:text-[12px] mb-3 font-semibold" style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>
            The Celebration of Love
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 w-32 mx-auto">
            <div className="h-[2px] flex-1 bg-[#2C1810]/70"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#2C1810]"></div>
            <div className="h-[2px] flex-1 bg-[#2C1810]/70"></div>
          </motion.div>
        </motion.div>

        {/* Middle Content - Names */}
        <motion.div 
          className="flex flex-col items-center text-center w-full max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 variants={itemVariants}
            className="text-[#1a1005] font-medium leading-none mb-2"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3.5rem, 12vw, 6rem)", textShadow: "0 0 20px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.7)" }}
          >
            Saseka
          </motion.h1>
          
          <motion.span variants={itemVariants}
            className="text-[#2C1810] text-3xl sm:text-4xl my-2"
            style={{ fontFamily: "'Great Vibes', cursive", textShadow: "0 0 15px rgba(255,255,255,0.7)" }}
          >
            &
          </motion.span>
          
          <motion.h1 variants={itemVariants}
            className="text-[#1a1005] font-medium leading-none mt-2"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3.5rem, 12vw, 6rem)", textShadow: "0 0 20px rgba(255,255,255,0.7), 0 0 10px rgba(255,255,255,0.7)" }}
          >
            Sachinthana
          </motion.h1>
        </motion.div>

        {/* Bottom Content - Date (Moved higher up) */}
        <motion.div 
          className="flex flex-col items-center text-center mb-36 sm:mb-56"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="text-[#1a1005] font-serif text-[15px] sm:text-xl tracking-[0.4em] font-bold border-t-2 border-[#2C1810]/50 pt-4 px-8" style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>
            17 . 09 . 2026
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[#2C1810] text-[10px] uppercase tracking-[0.3em] font-medium" style={{ textShadow: "0 0 10px rgba(255,255,255,0.8)" }}>Scroll</span>
            <ChevronDown className="w-6 h-6 text-[#2C1810]" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};
