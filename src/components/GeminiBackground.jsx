import React from 'react';
import { motion } from 'framer-motion';

const GeminiBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Mesh Gradient Blobs */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -100, 100, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full blur-[120px] opacity-[0.15] dark:opacity-[0.2]"
        style={{ background: 'radial-gradient(circle, #4285F4 0%, #34A853 50%, transparent 100%)' }}
      />
      <motion.div
        animate={{
          x: [0, -150, 150, 0],
          y: [0, 150, -150, 0],
          scale: [1.2, 0.9, 1.1, 1.2],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full blur-[140px] opacity-[0.15] dark:opacity-[0.2]"
        style={{ background: 'radial-gradient(circle, #EA4335 0%, #FBBC05 50%, transparent 100%)' }}
      />
      <motion.div
        animate={{
          x: [0, 200, -200, 0],
          y: [0, 200, -200, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full blur-[100px] opacity-[0.1] dark:opacity-[0.15]"
        style={{ background: 'radial-gradient(circle, #A142F4 0%, #4285F4 100%)' }}
      />

      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default GeminiBackground;
