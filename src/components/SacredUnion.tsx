import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, Clock, MapPin } from 'lucide-react';

export const SacredUnion: React.FC = () => {
  return (
    <div className="w-full flex justify-center bg-[#fdfaf5] overflow-hidden">
      <div 
        className="relative w-full max-w-[862px] aspect-[862/1824]"
        style={{
          backgroundImage: `url('/ChatGPT Image Aug 11, 2026, 01_19_32 AM.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="absolute top-[18%] left-0 w-full text-center flex flex-col items-center px-[10%]"
        >
          <span className="text-[#3b2a1a] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-[4vw] sm:text-[20px] md:text-[24px] font-semibold font-serif mb-0 drop-shadow-sm">
            The Sacred
          </span>
          <h2 className="text-[#3b2a1a] font-serif text-[12vw] sm:text-[6rem] md:text-[7rem] tracking-tight leading-none uppercase mb-6 sm:mb-8 drop-shadow-sm">
            Union
          </h2>

          <span className="text-[#1a1005] uppercase tracking-[0.15em] text-[2.5vw] sm:text-[16px] md:text-[18px] font-semibold font-sans mb-1 sm:mb-2 drop-shadow-sm">
            A Celebration Of
          </span>
          <h3 className="text-[#3b2a1a] font-display text-[9vw] sm:text-[4.5rem] md:text-[5rem] tracking-tight leading-none italic drop-shadow-sm mb-8 sm:mb-12">
            Tradition & Love
          </h3>

          <p className="text-[#1a1005] font-serif text-[3vw] sm:text-[18px] md:text-[22px] leading-[1.8] max-w-[85%] mx-auto mb-10 sm:mb-16 drop-shadow-sm">
            Request the Honor of Your Presence<br/>
            At the Celebration of the Marriage of their beloved children<br/>
            Saseka & Sachinthana
          </p>

          <div className="flex flex-col gap-6 sm:gap-8 w-full max-w-[75%] mx-auto items-start text-left">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-[10vw] h-[10vw] sm:w-[55px] sm:h-[55px] rounded-full border border-[#3b2a1a] flex items-center justify-center flex-shrink-0">
                <CalendarDays className="w-[5vw] h-[5vw] sm:w-[28px] sm:h-[28px] text-[#3b2a1a]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#1a1005] uppercase tracking-[0.1em] text-[3vw] sm:text-[18px] md:text-[20px] font-semibold font-serif">Thursday, September 17</span>
                <span className="text-[#3b2a1a] uppercase tracking-[0.05em] text-[2.5vw] sm:text-[15px] md:text-[16px] font-sans mt-0.5">The Year Two Thousand Twenty Six</span>
              </div>
            </div>

            <div className="flex items-start gap-4 sm:gap-6">
              <div className="w-[10vw] h-[10vw] sm:w-[55px] sm:h-[55px] rounded-full border border-[#3b2a1a] flex items-center justify-center flex-shrink-0 mt-1">
                <Clock className="w-[5vw] h-[5vw] sm:w-[28px] sm:h-[28px] text-[#3b2a1a]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#1a1005] uppercase tracking-[0.1em] text-[3vw] sm:text-[18px] md:text-[20px] font-semibold font-serif mb-1">09:00 AM - 04:30 PM</span>
                <span className="text-[#3b2a1a] tracking-[0.05em] text-[2.5vw] sm:text-[15px] md:text-[16px] font-sans leading-snug max-w-[200px] sm:max-w-xs">
                  The Poruwa Ceremony will be held at 09:16 AM
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4 sm:gap-6">
              <div className="w-[10vw] h-[10vw] sm:w-[55px] sm:h-[55px] rounded-full border border-[#3b2a1a] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-[5vw] h-[5vw] sm:w-[28px] sm:h-[28px] text-[#3b2a1a]" />
              </div>
              <div className="flex flex-col">
                <span className="text-[#1a1005] uppercase tracking-[0.1em] text-[3vw] sm:text-[18px] md:text-[20px] font-semibold font-serif mb-1">Hotel Grand Guardian</span>
                <span className="text-[#3b2a1a] uppercase tracking-[0.05em] text-[2.5vw] sm:text-[15px] md:text-[16px] font-sans mb-0.5">The Grand Ballroom</span>
                <span className="text-[#3b2a1a] uppercase tracking-[0.05em] text-[2.5vw] sm:text-[15px] md:text-[16px] font-sans">Ratnapura</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
