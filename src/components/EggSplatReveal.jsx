import React from 'react';
import { motion } from 'framer-motion';

export default function EggSplatReveal() {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      
      {/* Ghost text to maintain layout */}
      <span style={{ opacity: 0, pointerEvents: 'none' }}>EGGS.</span>

      {/* The Yolk Drop */}
      <motion.div
        initial={{ y: -200, scale: 1, opacity: 1 }}
        animate={{ 
          y: [-200, 0, 0],
          scaleX: [1, 2, 6],
          scaleY: [1, 0.4, 0],
          opacity: [1, 1, 0]
        }}
        transition={{ duration: 1.2, times: [0, 0.4, 1], ease: "easeIn", delay: 0.2 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '50px',
          height: '50px',
          backgroundColor: '#F5B041',
          borderRadius: '50%',
          marginLeft: '-25px',
          marginTop: '-25px',
          zIndex: 1
        }}
      />

      {/* The Text Reveal */}
      <motion.span 
        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
        animate={{ clipPath: 'circle(150% at 50% 50%)' }}
        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        style={{ 
          color: '#F5B041', 
          position: 'absolute', 
          top: 0, left: 0,
          zIndex: 2,
          whiteSpace: 'nowrap'
        }}
      >
        EGGS.
      </motion.span>

    </div>
  );
}
