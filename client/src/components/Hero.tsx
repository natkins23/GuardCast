import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Animated Circuit Lines Component
const CircuitLines = () => {
  return (
    <div className="absolute inset-0 z-5 opacity-25">
      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0" 
        style={{ filter: 'drop-shadow(0 0 2px rgba(34, 197, 94, 0.5))' }}
      >
        <defs>
          <pattern 
            id="circuit-pattern" 
            x="0" 
            y="0" 
            width="100" 
            height="100" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M20 20 L80 20 L80 80" 
              fill="none" 
              stroke="#22c55e" 
              strokeWidth="0.5" 
              strokeDasharray="4 2"
              className="animate-pulse-slow"
            />
            <path 
              d="M20 50 L50 50 L50 80" 
              fill="none" 
              stroke="#22c55e" 
              strokeWidth="0.5" 
              strokeDasharray="4 2"
              className="animate-pulse-slow" 
              style={{ animationDelay: '0.5s' }}
            />
            <circle cx="80" cy="20" r="3" fill="#22c55e" className="animate-pulse-slow" />
            <circle cx="50" cy="50" r="2" fill="#22c55e" className="animate-pulse-slow" />
            <circle cx="20" cy="80" r="2" fill="#22c55e" className="animate-pulse-slow" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  );
};

// Floating Security Icons Component
const FloatingIcons = () => {
  const icons = [
    { icon: "🔒", delay: 0, x: "10%", y: "20%" },
    { icon: "🛡️", delay: 1.4, x: "85%", y: "15%" },
    { icon: "👁️", delay: 0.8, x: "75%", y: "75%" },
    { icon: "🔐", delay: 2.2, x: "15%", y: "70%" },
    { icon: "⚡", delay: 1.6, x: "60%", y: "35%" },
  ];

  return (
    <div className="absolute inset-0 z-5 overflow-hidden">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl opacity-20"
          initial={{ x: item.x, y: item.y, opacity: 0 }}
          animate={{ 
            opacity: [0, 0.7, 0], 
            y: `calc(${item.y} - 30px)`,
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          {item.icon}
        </motion.div>
      ))}
    </div>
  );
};

// Animated Particles Component
const Particles = () => {
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 100}%`,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5
  }));

  return (
    <div className="absolute inset-0 z-5">
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-[#22c55e]"
          style={{
            width: particle.size,
            height: particle.size,
            left: particle.x,
            top: particle.y,
            boxShadow: `0 0 ${particle.size * 2}px rgba(34, 197, 94, 0.7)`
          }}
          animate={{
            opacity: [0, 0.4, 0],
            scale: [1, 1.2, 0.8]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};

// Geometric Shapes Component
const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 z-5 opacity-20">
      <motion.div 
        className="absolute top-[15%] right-[20%] w-32 h-32 border border-[#22c55e] rotate-45"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          scale: [0.9, 1.1, 0.9],
          rotate: [45, 135, 45]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div 
        className="absolute bottom-[25%] left-[15%] w-40 h-40 border border-[#22c55e] rounded-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.2, 0.5, 0.2],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear", delay: 2 }}
      />
      <motion.div 
        className="absolute top-[60%] right-[30%] w-24 h-24 border border-[#22c55e]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [0.7, 1.3, 0.7],
          rotate: [0, 90, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear", delay: 5 }}
      />
    </div>
  );
};

// Digital Rain Effect (Matrix-style)
const DigitalRain = () => {
  return (
    <div className="absolute right-0 top-0 h-full w-1/3 z-5 opacity-20 overflow-hidden">
      {Array.from({ length: 10 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-full w-[2px] bg-gradient-to-b from-transparent via-[#22c55e] to-transparent"
          style={{
            left: `${i * 10}%`,
          }}
          animate={{
            y: ["-100%", "100%"],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

export default function Hero() {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      scale: [1, 1.02, 1],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <section className="relative flex items-center min-h-screen pt-16 overflow-hidden bg-[#121212]">
      {/* Layered Background */}
      <div className="absolute inset-0 z-0">
        {/* Background Image with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/95 via-[#121212]/90 to-[#121212]/80 z-10"></div>
        <motion.div animate={controls}>
          <img 
            src="https://images.unsplash.com/photo-1621401687419-d9d4638ca796?q=80&w=1920&auto=format&fit=crop" 
            alt="Security monitoring room with screens" 
            className="object-cover w-full h-full opacity-30" 
          />
        </motion.div>

        {/* Background animated elements */}
        <CircuitLines />
        <Particles />
        <FloatingIcons />
        <GeometricShapes />
        <DigitalRain />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-20 pt-20 pb-24">
        <motion.div 
          className="max-w-3xl backdrop-blur-sm backdrop-filter p-8 rounded-lg bg-[#121212]/20 border border-gray-800/30"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Transform Your Security Services with{" "}
            <motion.span 
              className="text-[#22c55e] inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.8, 
                delay: 0.6,
                ease: "easeOut"
              }}
            >
              AI Automation
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            AI-driven video analysis and automated response systems that reduce costs and improve response times.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#22c55e] shadow-lg hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors duration-300"
              style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}
            >
              Request a Demo
            </a>
            <a 
              href="#how-it-works" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-[#262626] hover:bg-[#262626]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Watch It Work
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <a href="#what-we-do" className="text-white group">
          <svg 
            className="w-6 h-6 group-hover:text-[#22c55e] transition-colors duration-300" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
