import React from 'react';
import { motion } from 'framer-motion';

export default function WokFireReveal() {
  return (
    <div style={{ position: 'relative', display: 'inline-block', marginLeft: '2vw' }}>
      
      {/* Ghost text for layout */}
      <span style={{ opacity: 0, pointerEvents: 'none' }}>WOK.</span>

      {/* Fiery Text */}
      <motion.span
        initial={{ opacity: 0, y: 50, rotateX: -90 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
        whileHover={{ scale: 1.05, textShadow: "0px 0px 20px rgba(223, 138, 40, 0.8)" }}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          background: 'linear-gradient(to top, #c93b3b, #df8a28, #fdfbf7)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          display: 'inline-block',
          whiteSpace: 'nowrap',
          zIndex: 2
        }}
      >
        WOK.
      </motion.span>

      {/* Indo-Chinese Overlay Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: -10 }}
        whileHover={{ scale: 1.1, rotate: 0 }}
        transition={{ delay: 1.5, type: 'spring', stiffness: 200 }}
        style={{
          position: 'absolute',
          bottom: '15%',
          right: '-15%',
          backgroundColor: 'var(--text-primary)',
          color: 'var(--bg-primary)',
          padding: '4px 12px',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.7rem, 1.5vw, 1.2rem)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          border: '2px solid var(--accent-saffron)',
          boxShadow: '4px 4px 0px var(--accent-saffron)',
          zIndex: 10,
          cursor: 'default',
          whiteSpace: 'nowrap'
        }}
      >
        INDO-CHINESE
      </motion.div>

    </div>
  );
}
