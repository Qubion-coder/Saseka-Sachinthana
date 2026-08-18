import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface IntroVideoProps {
  onComplete: () => void;
  onStart: () => void;
}

export const IntroVideo: React.FC<IntroVideoProps> = ({ onComplete, onStart }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleEnter = () => {
    onStart();
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(e => console.log("Video play failed:", e));
      }
    }
    setShowVideo(true);
  };

  const handleVideoEnd = () => {
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: '-100vh' }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Video Layer (Always rendered for iOS compatibility) */}
          <motion.div 
            className="absolute inset-0 w-full h-full bg-black z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: showVideo ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <video
              ref={videoRef}
              src="/Bride_and_groom_smiling_202608032023.mp4"
              muted={true}
              playsInline
              preload="auto"
              onEnded={handleVideoEnd}
              className="w-full h-full object-cover"
            />
          </motion.div>

          <AnimatePresence>
            {!showVideo && (
              <motion.div 
                key="landing"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center z-10 bg-[#fbf8f1]"
              >
                {/* Image Background */}
                <div className="absolute inset-0 w-full h-full overflow-hidden">
                  <img
                    src="/ChatGPT Image Aug 4, 2026, 04_16_30 PM.webp"
                    alt="Invitation Background"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full h-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="flex flex-col items-center"
                  >
                    <p className="text-[#a87b47] font-serif tracking-[0.2em] uppercase text-xs sm:text-sm mb-6">
                      The Wedding Of
                    </p>
                    
                    <h1 
                      className="text-[#a87b47] font-medium leading-none -mb-2 sm:-mb-4"
                      style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3.5rem, 15vw, 6rem)" }}
                    >
                      Saseka
                    </h1>
                    
                    <span 
                      className="text-[#a87b47] text-3xl sm:text-5xl my-2"
                      style={{ fontFamily: "'Great Vibes', cursive" }}
                    >
                      &
                    </span>
                    
                    <h1 
                      className="text-[#a87b47] font-medium leading-none mb-8 mt-1"
                      style={{ fontFamily: "'Great Vibes', cursive", fontSize: "clamp(3.5rem, 15vw, 6rem)" }}
                    >
                      Sachinthana
                    </h1>

                    <div className="text-[#a87b47] font-serif text-sm sm:text-base tracking-[0.3em] font-medium mb-12">
                      17 . 09 . 2026
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleEnter}
                      className="px-8 py-3 bg-white/40 border border-[#a87b47] text-[#a87b47] font-serif tracking-[0.2em] uppercase text-[10px] sm:text-xs hover:bg-[#a87b47] hover:text-white transition-all duration-500 rounded-none backdrop-blur-sm shadow-md"
                    >
                      Open Invitation
                    </motion.button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

