import React from 'react';
import { motion } from 'framer-motion';

const VortexWrapper = ({ children }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0, filter: 'blur(20px)' }}
      animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
      exit={{ scale: 1.2, opacity: 0, filter: 'blur(20px)' }}
      transition={{ 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] // Custom ease-out expo-like
      }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
};

export default VortexWrapper;
