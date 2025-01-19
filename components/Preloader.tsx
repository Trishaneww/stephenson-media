// components/Preloader.tsx
import { motion } from 'framer-motion';
import React, { useEffect } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 5000); // Extended duration of the preloader in milliseconds

    return () => clearTimeout(timer);
  }, [onComplete]);

  const rectangles = [0, 1, 2, 3, 4];
  const words = ["STEPHENSON", "MEDIA", "PRODUCTIONS."];

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#FAFAFA] z-50 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 1, delay: 4.5 }}
      onAnimationComplete={onComplete}
    >
      {/* Black Rectangles Animation */}
      {rectangles.map((rect, index) => (
        <motion.div
          key={index}
          className="absolute bg-black"
          style={{
            top: index % 2 === 0 ? 0 : 'auto',
            bottom: index % 2 === 0 ? 'auto' : 0,
            left: `${index * 20}%`,
            width: '20%',
          }}
          initial={{ height: '100%' }}
          animate={{ height: '0%' }}
          transition={{
            duration: 1,
            delay: 1 + index * 0.2, // Stagger effect for each rectangle
            ease: 'easeInOut',
          }}
        ></motion.div>
      ))}

      {/* Main Logo Animation */}
      <motion.div
        className="text-base lg:text-4xl font-bold text-gray-800 z-10 flex space-x-2 lg:space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 2.5 }}
      >
        {words.map((word, wordIndex) => (
          <motion.div
            key={wordIndex}
            className="inline-block"
            initial={{ opacity: 0, y: wordIndex % 2 === 0 ? -20 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 2 + wordIndex * 0.5, ease: 'easeOut' }}
          >
            {word}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Preloader;


