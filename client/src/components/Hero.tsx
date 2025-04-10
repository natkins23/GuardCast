import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Animated Circuit Lines Component
const CircuitLines = () => {
  return (
    <div className="absolute inset-0 z-5 opacity-90">
      <svg 
        width="100%" 
        height="100%" 
        className="absolute inset-0" 
        style={{ filter: 'drop-shadow(0 0 10px rgba(34, 197, 94, 0.8))' }}
      >
        <defs>
          <pattern 
            id="circuit-pattern" 
            x="0" 
            y="0" 
            width="200" 
            height="200" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M20 20 L180 20 L180 180" 
              fill="none" 
              stroke="#22c55e" 
              strokeWidth="2" 
              strokeDasharray="10 5"
              className="animate-pulse-slow"
            />
            <path 
              d="M20 100 L100 100 L100 180" 
              fill="none" 
              stroke="#22c55e" 
              strokeWidth="2" 
              strokeDasharray="10 5"
              className="animate-pulse-slow" 
              style={{ animationDelay: '0.5s' }}
            />
            <circle cx="180" cy="20" r="8" fill="#22c55e" className="animate-pulse-slow" />
            <circle cx="100" cy="100" r="6" fill="#22c55e" className="animate-pulse-slow" />
            <circle cx="20" cy="180" r="6" fill="#22c55e" className="animate-pulse-slow" />
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#circuit-pattern)" />
      </svg>
    </div>
  );
};

// Grid Background Component
const GridBackground = () => {
  return (
    <div className="absolute inset-0 z-5">
      <div className="w-full h-full" style={{ 
        backgroundImage: 'linear-gradient(to right, rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(to bottom, rgba(34, 197, 94, 0.3) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        opacity: 0.4
      }}>
      </div>
    </div>
  );
};

// Floating Security Icons Component
const FloatingIcons = () => {
  const icons = [
    { icon: "🔒", delay: 0, x: "10%", y: "20%", size: "text-5xl" },
    { icon: "🛡️", delay: 1.4, x: "85%", y: "15%", size: "text-6xl" },
    { icon: "👁️", delay: 0.8, x: "75%", y: "75%", size: "text-5xl" },
    { icon: "🔐", delay: 2.2, x: "15%", y: "70%", size: "text-6xl" },
    { icon: "⚡", delay: 1.6, x: "60%", y: "35%", size: "text-5xl" },
  ];

  return (
    <div className="absolute inset-0 z-5 overflow-hidden">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.size} opacity-40`}
          initial={{ x: item.x, y: item.y, opacity: 0 }}
          animate={{ 
            opacity: [0, 0.7, 0], 
            y: `calc(${item.y} - 50px)`,
            scale: [1, 1.5, 1],
            filter: ["drop-shadow(0 0 0px #22c55e)", "drop-shadow(0 0 20px #22c55e)", "drop-shadow(0 0 0px #22c55e)"]
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
  const particles = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 2,
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
            boxShadow: `0 0 ${particle.size * 4}px rgba(34, 197, 94, 0.9)`
          }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.5, 0.5],
            filter: ["blur(0px)", "blur(2px)", "blur(0px)"]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

// 3D Geometric Shapes Component
const GeometricShapes = () => {
  return (
    <div className="absolute inset-0 z-5 opacity-70">
      <motion.div 
        className="absolute top-[15%] right-[20%] w-64 h-64 border-4 border-[#22c55e] rotate-45"
        style={{ boxShadow: '0 0 30px #22c55e' }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scale: [0.8, 1.2, 0.8],
          rotate: [45, 225, 45],
          borderWidth: ["4px", "6px", "4px"]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-[25%] left-[15%] w-80 h-80 border-4 border-[#22c55e] rounded-full"
        style={{ boxShadow: '0 0 30px #22c55e' }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0.2, 0.7, 0.2],
          scale: [0.6, 1.4, 0.6],
          borderWidth: ["4px", "8px", "4px"]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div 
        className="absolute top-[60%] right-[30%] w-48 h-48 border-4 border-[#22c55e]"
        style={{ boxShadow: '0 0 30px #22c55e' }}
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ 
          opacity: [0.3, 0.8, 0.3],
          scale: [0.7, 1.3, 0.7],
          rotate: [0, 90, 0],
          borderWidth: ["4px", "8px", "4px"]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  );
};

// Digital Rain Effect (Matrix-style)
const DigitalRain = () => {
  return (
    <div className="absolute inset-0 z-5 opacity-50 overflow-hidden">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-0 h-full w-[3px] bg-gradient-to-b from-transparent via-[#22c55e] to-transparent"
          style={{
            left: `${i * 3.33}%`,
            boxShadow: '0 0 15px #22c55e',
            filter: 'blur(1px)'
          }}
          animate={{
            y: ["-100%", "100%"],
            opacity: [0.1, 0.9, 0.1]
          }}
          transition={{
            duration: Math.random() * 10 + 8,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}
    </div>
  );
};

// Futuristic HUD Elements
const HUDElements = () => {
  return (
    <div className="absolute inset-0 z-5 opacity-50">
      {/* Top Right Corner Element */}
      <motion.div 
        className="absolute top-10 right-10 w-40 h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <circle cx="80" cy="20" r="15" fill="none" stroke="#22c55e" strokeWidth="1" className="animate-pulse-slow" />
          <path d="M80 5 L80 35 M65 20 L95 20" stroke="#22c55e" strokeWidth="1" />
          <circle cx="80" cy="20" r="3" fill="#22c55e" />
          <path d="M60 40 L100 40" stroke="#22c55e" strokeWidth="1" strokeDasharray="1 2" />
          <path d="M40 60 L80 20" stroke="#22c55e" strokeWidth="1" strokeDasharray="1 2" />
        </svg>
      </motion.div>

      {/* Bottom Left Corner Element */}
      <motion.div 
        className="absolute bottom-10 left-10 w-40 h-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        <svg width="100%" height="100%" viewBox="0 0 100 100">
          <rect x="10" y="60" width="30" height="30" fill="none" stroke="#22c55e" strokeWidth="1" className="animate-pulse-slow" />
          <path d="M10 60 L40 90" stroke="#22c55e" strokeWidth="1" />
          <circle cx="25" cy="75" r="3" fill="#22c55e" />
          <path d="M0 50 L50 50" stroke="#22c55e" strokeWidth="1" strokeDasharray="1 2" />
          <path d="M50 100 L50 50" stroke="#22c55e" strokeWidth="1" strokeDasharray="1 2" />
        </svg>
      </motion.div>
    </div>
  );
};

// Background Glow Effects
const GlowEffects = () => {
  return (
    <div className="absolute inset-0 z-4">
      {/* Top right glow */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#22c55e] opacity-30 blur-[100px]"></div>
      
      {/* Bottom left glow */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#22c55e] opacity-25 blur-[100px]"></div>
      
      {/* Center glow */}
      <motion.div 
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 bg-[#22c55e] blur-[120px]"
        animate={{
          opacity: [0.1, 0.3, 0.1],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      ></motion.div>
    </div>
  );
};

export default function Hero() {
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      scale: [1, 1.1, 1],
      transition: {
        duration: 20,
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
        <div className="absolute inset-0 bg-gradient-to-br from-[#121212]/90 via-[#121212]/80 to-[#121212]/70 z-10"></div>
        <motion.div animate={controls}>
          <img 
            src="https://images.unsplash.com/photo-1621401687419-d9d4638ca796?q=80&w=1920&auto=format&fit=crop" 
            alt="Security monitoring room with screens" 
            className="object-cover w-full h-full opacity-50" 
          />
        </motion.div>

        {/* Background animated elements */}
        <GlowEffects />
        <GridBackground />
        <CircuitLines />
        <Particles />
        <DigitalRain />
        <GeometricShapes />
        <FloatingIcons />
        <HUDElements />
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-20 pt-20 pb-24">
        <motion.div 
          className="max-w-3xl backdrop-blur-md backdrop-filter p-10 rounded-lg bg-[#121212]/30 border-2 border-[#22c55e]/30"
          style={{ boxShadow: '0 0 40px rgba(34, 197, 94, 0.3)' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transform Your Security Services with{" "}
            <motion.span 
              className="text-[#22c55e] inline-block relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                textShadow: ["0 0 5px rgba(34, 197, 94, 0.5)", "0 0 20px rgba(34, 197, 94, 0.8)", "0 0 5px rgba(34, 197, 94, 0.5)"]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                delay: 0.6,
                ease: "easeInOut"
              }}
            >
              AI Automation
              <motion.span 
                className="absolute -bottom-2 left-0 w-full h-1 bg-[#22c55e]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            AI-driven video analysis and automated response systems that reduce costs and improve response times.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-4 border border-transparent text-base font-medium rounded-md text-white bg-[#22c55e] shadow-lg hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-all duration-300"
              style={{ boxShadow: '0 0 20px rgba(34, 197, 94, 0.7)' }}
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(34, 197, 94, 0.9)'
              }}
            >
              Request a Demo
            </motion.a>
            <motion.a 
              href="#how-it-works" 
              className="inline-flex items-center justify-center px-6 py-4 border-2 border-gray-700 text-base font-medium rounded-md text-white bg-[#262626] hover:bg-[#262626]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                borderColor: 'rgba(34, 197, 94, 0.5)'
              }}
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Watch It Work
            </motion.a>
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
            className="w-8 h-8 group-hover:text-[#22c55e] transition-colors duration-300" 
            fill="none" 
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ filter: 'drop-shadow(0 0 8px rgba(34, 197, 94, 0.7))' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </a>
      </motion.div>
    </section>
  );
}
