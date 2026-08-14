import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';

export const GuestGreeting: React.FC = () => {
  const [searchParams] = useSearchParams();
  const prefix = searchParams.get('prefix');
  const guest = searchParams.get('guest');

  if (!prefix || !guest) {
    return null;
  }

  return (
    <div className="w-full bg-[#fbf8f1] flex justify-center items-center py-12 px-4 z-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="max-w-2xl text-center flex flex-col items-center"
      >
        <span className="text-[#c5a059] uppercase tracking-[0.2em] text-[12px] sm:text-[14px] md:text-[16px] font-medium font-sans mb-4 drop-shadow-sm">
          We Cordially Invite
        </span>
        
        <h2 
          className="text-[#a87b47] font-serif text-[clamp(1.75rem,5vw,3rem)] tracking-wide leading-tight mb-2 px-4 drop-shadow-sm uppercase"
        >
          {prefix} {guest}
        </h2>
        
        <div className="flex items-center gap-3 mt-4 w-48 mx-auto">
          <div className="h-[1px] flex-1 bg-[#a87b47]/50"></div>
          <div className="w-1.5 h-1.5 rotate-45 bg-[#a87b47]/80"></div>
          <div className="h-[1px] flex-1 bg-[#a87b47]/50"></div>
        </div>
      </motion.div>
    </div>
  );
};
