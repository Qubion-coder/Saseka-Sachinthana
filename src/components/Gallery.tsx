import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';

const galleryImages = [
  {
    id: 1,
    src: "/my/jonathan-borba-WBdYdKyUyT0-unsplash.webp",
  },
  {
    id: 2,
    src: "/my/jonathan-borba-sYVvnpTcRrA-unsplash.webp",
  },
  {
    id: 3,
    src: "/my/jonathan-borba-uNJQnlZHIZU-unsplash.webp",
  },
  {
    id: 4,
    src: "/my/jonathan-borba-zRWlTBnZgYE-unsplash.webp",
  },
  {
    id: 5,
    src: "/my/natali-hordiiuk-z61SlouWhwU-unsplash.webp",
  },
  {
    id: 6,
    src: "/my/pexels-framesbygaurav-37380245.webp",
  }
];

export const Gallery: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Auto-scroll logic for mobile carousel
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const el = scrollRef.current;
        // Check if the container is horizontally scrollable (mobile view)
        if (el.scrollWidth > el.clientWidth) {
          // If we reached the end, reset to start
          if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
            el.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            // Scroll right by roughly one card width
            el.scrollBy({ left: window.innerWidth * 0.85, behavior: 'smooth' });
          }
        }
      }
    }, 3500); // Auto-scroll every 3.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="gallery" aria-label="Our Gallery" className="relative overflow-hidden py-24 sm:py-36 px-4 sm:px-8 bg-[#0a0a0a] text-[#FAFAF8]">
      <div className="pointer-events-none absolute inset-0 opacity-100" style={{ background: "radial-gradient(ellipse 75% 58% at 18% 28%, rgba(212,175,55,0.08) 0%, transparent 52%), radial-gradient(ellipse 50% 48% at 90% 72%, rgba(212,175,55,0.05) 0%, transparent 50%)" }} />
      <div className="pointer-events-none absolute -left-1/4 top-0 h-[min(60vw,480px)] w-[min(60vw,480px)] rounded-full blur-[120px] opacity-20 bg-[#D4AF37]" />
      
      <div className="relative mx-auto max-w-7xl">
        <motion.div 
          className="mb-16 sm:mb-24 text-center flex flex-col items-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="font-serif text-xl sm:text-2xl mb-4 italic tracking-widest text-[#D4AF37]/90">
            A Glimpse of Us
          </p>
          <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-transparent via-[#D4AF37]/50 to-transparent mb-6" />
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-light tracking-wide text-white drop-shadow-xl">
            Moments Together
          </h2>
        </motion.div>

        <div 
          ref={scrollRef}
          className="flex sm:block w-full overflow-x-auto sm:overflow-x-visible snap-x snap-mandatory sm:snap-none gap-5 sm:gap-0 pb-12 sm:pb-0 sm:columns-2 lg:columns-3 xl:gap-8 px-4 sm:px-0 -mx-4 sm:mx-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {galleryImages.map((img, index) => (
            <motion.button 
              key={img.id}
              type="button" 
              aria-label={`Open photo ${img.id} in full screen`}
              className="group relative flex-none w-[82vw] sm:w-full snap-center sm:snap-align-none mb-0 sm:mb-6 xl:mb-8 break-inside-avoid text-left focus:outline-none"
              initial={{ opacity: 0, x: -30 }} // Loading from left to right
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div 
                className="relative block overflow-hidden shadow-2xl transition-all duration-[1.5s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.9)] border border-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 bg-black rounded-sm" 
              >
                <div className="relative block w-full overflow-hidden bg-[#111]">
                  <img 
                    src={img.src} 
                    alt="" 
                    className="w-full h-auto block transition-all duration-[2s] ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:scale-[1.08] filter grayscale-[15%] sm:grayscale-[40%] brightness-90 sm:brightness-75 group-hover:grayscale-0 group-hover:brightness-110" 
                    loading="lazy" 
                  />
                  {/* Premium overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 transition-opacity duration-1000 ease-out group-hover:opacity-100" aria-hidden="true" />
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};
