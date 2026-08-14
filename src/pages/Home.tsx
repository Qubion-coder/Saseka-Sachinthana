import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Volume2, VolumeX } from 'lucide-react';
import { FloatingPetals } from '../components/FloatingPetals';
import { Footer } from '../components/Footer';
import { IntroVideo } from '../components/IntroVideo';
import { HeroContent } from '../components/HeroContent';
import { CoupleDetails } from '../components/CoupleDetails';
import { SacredUnion } from '../components/SacredUnion';
import { Countdown } from '../components/Countdown';
import { GuestGreeting } from '../components/GuestGreeting';

export const Home: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [showMain, setShowMain] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const weddingDate = new Date('2026-10-02T09:45:00');

  const startMusic = () => {
    if (audioRef.current && !isMusicPlaying) {
      audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      setIsMusicPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked: ", err));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className="relative min-h-screen font-sans selection:bg-brand-gold selection:text-white overflow-x-hidden bg-brand-ivory">
      <FloatingPetals />

      {/* Background Music */}
      <audio
        ref={audioRef}
        src="/Mama Pathuwe (මම පතව)  Minura Halwathura  Lasith Malinga  (Lyrics).mp3"
        loop
      />

      <AnimatePresence mode="wait">
        {showIntro && (
          <IntroVideo key="intro" onComplete={() => { setShowIntro(false); setShowMain(true); startMusic(); }} />
        )}

        {showMain && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="relative z-10"
          >
            {/* Music Toggle Button */}
            <button
              onClick={toggleMusic}
              className="fixed bottom-8 right-8 z-[60] w-14 h-14 glass rounded-full flex items-center justify-center text-brand-gold-deep hover:bg-stone-800 hover:text-brand-champagne transition-all active:scale-90 shadow-2xl group"
            >
              <div className="absolute inset-0 rounded-full border border-brand-gold/20 scale-110 group-hover:scale-125 transition-transform" />
              {isMusicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
            </button>

            <HeroContent />
            
            {/* Added GuestGreeting after HeroContent */}
            <GuestGreeting />
            
            <Countdown targetDate={weddingDate} />

            <CoupleDetails />
            <SacredUnion />

            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
};
