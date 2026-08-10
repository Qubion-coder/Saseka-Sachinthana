import React from 'react';
import { motion } from 'motion/react';

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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/ChatGPT Image Aug 4, 2026, 03_50_44 PM.png" 
          alt="Wedding Illustration"
          className="h-full w-full object-cover object-center" 
        />
      </div>

      {/* Text Overlay - Positioned specifically in the lower empty space */}
      <div className="absolute bottom-0 left-0 w-full h-[50%] sm:h-[45%] flex flex-col items-center justify-center z-10 pb-4 sm:pb-8">
        <motion.div 
          className="flex flex-col items-center text-center px-4 w-full max-w-md mx-auto mt-32 sm:mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="text-[#a87b47] font-serif tracking-[0.2em] uppercase text-[9px] sm:text-[11px] mb-2 sm:mb-3">
            The Celebration of Love
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-1 w-32 mx-auto">
            <div className="h-[1px] flex-1 bg-[#a87b47]/70"></div>
            <div className="w-1.5 h-1.5 rotate-45 bg-[#a87b47]"></div>
            <div className="h-[1px] flex-1 bg-[#a87b47]/70"></div>
          </motion.div>
          
          <motion.h1 variants={itemVariants}
            className="text-[#a87b47] font-medium leading-none -mb-1 sm:-mb-2"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(2.75rem, 10vw, 4rem)" }}
          >
            Madushika
          </motion.h1>
          
          <motion.span variants={itemVariants}
            className="text-[#a87b47] text-2xl sm:text-3xl my-0"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            &
          </motion.span>
          
          <motion.h1 variants={itemVariants}
            className="text-[#a87b47] font-medium leading-none mb-3 sm:mb-4 mt-0"
            style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(2.75rem, 10vw, 4rem)" }}
          >
            Dhananjaya
          </motion.h1>
          
          <motion.p variants={itemVariants} className="text-[#8b6538] font-serif max-w-[260px] sm:max-w-sm text-xs sm:text-sm leading-snug mb-3 sm:mb-4">
            Together with our families, <br/>we joyfully invite you to join us
          </motion.p>
          
          <motion.div variants={itemVariants} className="text-[#a87b47] font-serif text-[13px] sm:text-base tracking-[0.3em] font-medium mt-1">
            02 . 10 . 2026
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
