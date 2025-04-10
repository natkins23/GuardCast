import React from 'react';
import { motion } from 'framer-motion';

interface SecurityCameraProps {
  className?: string;
}

const SecurityCamera: React.FC<SecurityCameraProps> = ({ className = '' }) => {
  return (
    <motion.div 
      className={`security-camera ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
    >
      <svg
        width="180"
        height="180"
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Camera Body */}
        <motion.path
          d="M70 60L110 60C115.523 60 120 64.4772 120 70L120 110C120 115.523 115.523 120 110 120L70 120C64.4772 120 60 115.523 60 110L60 70C60 64.4772 64.4772 60 70 60Z"
          fill="#1a1a1a"
          stroke="#22c55e"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
        />

        {/* Camera Lens */}
        <motion.circle
          cx="90"
          cy="90"
          r="25"
          fill="#0f0f0f"
          stroke="#22c55e"
          strokeWidth="1.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        />
        
        <motion.circle
          cx="90"
          cy="90"
          r="18"
          fill="#181818"
          stroke="#22c55e"
          strokeWidth="1"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1.3 }}
        />
        
        <motion.circle
          cx="90"
          cy="90"
          r="12"
          fill="#0a0a0a"
          stroke="#22c55e"
          strokeWidth="0.5"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.4, delay: 1.6 }}
        />

        {/* Scan line */}
        <motion.line
          x1="65"
          y1="90"
          x2="115"
          y2="90"
          stroke="#22c55e"
          strokeWidth="1"
          strokeDasharray="3,3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        />

        {/* Camera Mount */}
        <motion.path
          d="M120 90L140 75V105L120 90Z"
          fill="#2a2a2a"
          stroke="#22c55e"
          strokeWidth="1.5"
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
        />

        {/* Camera status light */}
        <motion.circle
          cx="105"
          cy="75"
          r="4"
          fill="#22c55e"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        />

        {/* Visual data lines */}
        <motion.path
          d="M45 70L55 70"
          stroke="#22c55e"
          strokeWidth="1"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.3, delay: 2.2 }}
        />
        <motion.path
          d="M45 80L55 80"
          stroke="#22c55e"
          strokeWidth="1"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.3, delay: 2.4 }}
        />
        <motion.path
          d="M45 90L55 90"
          stroke="#22c55e"
          strokeWidth="1"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.3, delay: 2.6 }}
        />
        <motion.path
          d="M45 100L55 100"
          stroke="#22c55e"
          strokeWidth="1"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.3, delay: 2.8 }}
        />
        <motion.path
          d="M45 110L55 110"
          stroke="#22c55e"
          strokeWidth="1"
          initial={{ opacity: 0, pathLength: 0 }}
          animate={{ opacity: 1, pathLength: 1 }}
          transition={{ duration: 0.3, delay: 3 }}
        />
      </svg>

      {/* Focus ring animation */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <motion.div 
          className="w-16 h-16 rounded-full border-2 border-[#22c55e]/30"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SecurityCamera;