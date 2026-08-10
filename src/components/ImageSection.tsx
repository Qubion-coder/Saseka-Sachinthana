import React from 'react';
import { motion } from 'motion/react';

interface ImageSectionProps {
  src: string;
  alt?: string;
}

export const ImageSection: React.FC<ImageSectionProps> = ({ src, alt = "Section Image" }) => {
  return (
    <section className="relative w-full">
      <img 
        src={src} 
        alt={alt} 
        className="w-full h-auto block"
        loading="lazy"
      />
    </section>
  );
};
