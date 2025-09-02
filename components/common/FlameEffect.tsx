// File: src/components/common/FlameEffect.jsx
import React from 'react';
import { motion } from 'framer-motion';

const FlameEffect = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="flame-container">
      <motion.div
        animate={{ 
          scale: [1, 1.1, 1],
          rotate: [0, 2, -2, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flame flame-1"
      ></motion.div>
      <motion.div
        animate={{ 
          scale: [1, 1.15, 1],
          rotate: [0, -2, 2, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flame flame-2"
      ></motion.div>
      <motion.div
        animate={{ 
          scale: [1, 1.05, 1],
          rotate: [0, 1, -1, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="flame flame-3"
      ></motion.div>
    </div>
    <style jsx>{`
      .flame-container {
        position: absolute;
        bottom: 20%;
        left: 50%;
        transform: translateX(-50%);
      }
      .flame {
        width: 20px;
        height: 40px;
        background: linear-gradient(45deg, #ff6b35, #f7931e, #ffcc02);
        border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
        position: absolute;
        opacity: 0.7;
      }
      .flame-1 {
        left: -10px;
      }
      .flame-2 {
        left: 0px;
        transform: scale(1.2);
      }
      .flame-3 {
        left: 10px;
      }
    `}</style>
  </div>
);

export default FlameEffect;