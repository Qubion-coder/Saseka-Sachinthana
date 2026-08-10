import React from 'react';
import { motion } from 'motion/react';

export const CoupleDetails: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-[#fdfaf5] overflow-hidden">
      <div 
        className="relative w-full max-w-[864px] aspect-[864/1821]"
        style={{
          backgroundImage: `url('/ChatGPT Image Aug 11, 2026, 01_01_47 AM.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Top Titles */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-[6%] sm:top-[10%] left-0 w-full text-center flex flex-col items-center"
        >
          <span className="text-[#c5a059] uppercase tracking-[0.3em] text-[4vw] sm:text-[20px] md:text-[24px] font-semibold font-sans mb-1 sm:mb-2 drop-shadow-sm">
            The Protagonists
          </span>
        </motion.div>

        {/* Groom Details */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute top-[20%] sm:top-[32%] left-[8%] w-[40%] text-center flex flex-col items-center"
        >
          <span className="text-[#c5a059] uppercase tracking-[0.2em] text-[3vw] sm:text-[16px] md:text-[18px] font-bold font-sans mb-2 sm:mb-4 drop-shadow-sm">
            The Groom
          </span>
          <h3 className="text-[#13203b] font-serif text-[5vw] sm:text-[2.5rem] md:text-[3rem] tracking-widest mb-3 sm:mb-6 uppercase drop-shadow-sm">
            Dhananjaya
          </h3>
          <div className="text-[#13203b] font-serif text-[2.5vw] sm:text-[18px] md:text-[22px] space-y-1 sm:space-y-2 drop-shadow-sm">
            <p>Son of</p>
            <p>H.G. Somasiri</p>
            <p className="text-[#c5a059] text-[2vw] sm:text-[14px] md:text-[18px] italic">&</p>
            <p>Champika Kalu Arachchi</p>
          </div>
        </motion.div>

        {/* Bride Details */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="absolute top-[60%] sm:top-[64%] right-[5%] w-[40%] text-center flex flex-col items-center"
        >
          <span className="text-[#c5a059] uppercase tracking-[0.2em] text-[3vw] sm:text-[16px] md:text-[18px] font-bold font-sans mb-2 sm:mb-4 drop-shadow-sm">
            The Bride
          </span>
          <h3 className="text-[#13203b] font-serif text-[5vw] sm:text-[2.5rem] md:text-[3rem] tracking-widest mb-3 sm:mb-6 uppercase drop-shadow-sm">
            Madushika
          </h3>
          <div className="text-[#13203b] font-serif text-[2.5vw] sm:text-[18px] md:text-[22px] space-y-1 sm:space-y-2 drop-shadow-sm">
            <p>Daughter of</p>
            <p>R.D Premasiri</p>
            <p className="text-[#c5a059] text-[2vw] sm:text-[14px] md:text-[18px] italic">&</p>
            <p>G.S.D Chandra kanthi</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
