import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import SecurityCamera from "./SecurityCamera";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cameraAnimation = useAnimation();

  // Effect for parallax camera movement following mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Subtle camera movement based on mouse position (very slow and gentle)
  useEffect(() => {
    cameraAnimation.start({
      x: (mousePosition.x - 0.5) * 10, // Reduced movement range
      y: (mousePosition.y - 0.5) * 5,  // Reduced movement range
      transition: { type: "spring", stiffness: 20, damping: 50 } // Much slower and more dampened
    });
  }, [mousePosition, cameraAnimation]);

  // Generate random data for grid lines
  const gridLines = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x1: Math.random() * 100 + "%",
    y1: Math.random() * 100 + "%",
    x2: Math.random() * 100 + "%", 
    y2: Math.random() * 100 + "%",
    opacity: Math.random() * 0.2 + 0.05,
    delay: Math.random() * 10,
    duration: Math.random() * 15 + 25  // Much slower animation
  }));

  return (
    <section className="relative flex items-center min-h-screen pt-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/90 to-[#121212]/70 z-10"></div>
        <motion.img 
          src="/images/guardcastHero.png" 
          alt="AI Security Monitoring System with suspicious activity detection" 
          className="object-cover w-full h-full" 
          initial={{ scale: 1.05, filter: "brightness(0.8)" }}
          animate={{ scale: 1, filter: "brightness(1)" }}
          transition={{ duration: 2.5 }}
        />
      </div>
      
      {/* Grid Lines Effect */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        <svg className="w-full h-full absolute">
          {gridLines.map((line) => (
            <motion.line
              key={line.id}
              x1={line.x1}
              y1={line.y1}
              x2={line.x2}
              y2={line.y2}
              stroke="#22c55e"
              strokeWidth="0.5"
              strokeOpacity={line.opacity}
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: line.duration,
                delay: line.delay,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
          ))}
        </svg>
      </div>
      
      {/* Animated Particles Effect */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        <div className="absolute inset-0 bg-[#22c55e]/5"></div>
        <div className="h-full w-full flex items-center justify-center">
          <div className="w-full h-full opacity-30 overflow-hidden">
            {/* Small particles */}
            {[...Array(60)].map((_, i) => (
              <motion.div 
                key={`particle-${i}`}
                className="absolute rounded-full"
                style={{
                  width: Math.random() * 4 + 2 + 'px',
                  height: Math.random() * 4 + 2 + 'px',
                  background: '#22c55e',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  opacity: Math.random() * 0.5 + 0.1,
                }}
                animate={{
                  y: [0, -10, 0],
                  x: [0, Math.random() * 5 - 2.5, 0],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: Math.random() * 20 + 30, // Much slower animation (30-50 seconds)
                  repeat: Infinity,
                  delay: Math.random() * 15,
                  ease: "easeInOut"
                }}
              />
            ))}
            
            {/* Larger glowing nodes */}
            {[...Array(12)].map((_, i) => (
              <motion.div 
                key={`node-${i}`}
                className="absolute rounded-full bg-[#22c55e]/20"
                style={{
                  width: Math.random() * 15 + 10 + 'px',
                  height: Math.random() * 15 + 10 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)'
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{
                  duration: Math.random() * 15 + 25, // Much slower pulsing (25-40 seconds)
                  repeat: Infinity,
                  delay: Math.random() * 10
                }}
              />
            ))}
            
            {/* Connection lines between random points */}
            <svg className="absolute inset-0 w-full h-full">
              {[...Array(8)].map((_, i) => {
                const x1 = Math.random() * 100;
                const y1 = Math.random() * 100;
                const x2 = Math.random() * 100;
                const y2 = Math.random() * 100;
                
                return (
                  <motion.line
                    key={`connection-${i}`}
                    x1={`${x1}%`}
                    y1={`${y1}%`}
                    x2={`${x2}%`}
                    y2={`${y2}%`}
                    stroke="#22c55e"
                    strokeWidth="0.5"
                    strokeDasharray="5,5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0.3, 0] }}
                    transition={{
                      duration: Math.random() * 20 + 30, // Much slower fade (30-50 seconds)
                      repeat: Infinity,
                      delay: Math.random() * 15
                    }}
                  />
                );
              })}
            </svg>
          </div>
        </div>
      </div>
      
      {/* Security Camera */}
      <motion.div 
        className="absolute z-10 right-10 top-1/4 hidden lg:block"
        animate={cameraAnimation}
      >
        <SecurityCamera className="w-48 h-48" />
      </motion.div>
      
      {/* Data Stream Effect */}
      <div className="absolute right-28 top-1/3 w-64 h-40 hidden lg:flex flex-col items-end z-10">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`data-${i}`}
            className="bg-[#22c55e]/10 border border-[#22c55e]/20 rounded px-3 py-1 mb-2 text-[#22c55e] text-xs"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 0.8 }}
            transition={{
              duration: 0.5,
              delay: i * 0.5 + 2,
              ease: "easeOut"
            }}
          >
            <motion.div 
              className="flex items-center"
              animate={{ opacity: [1, 0.8, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <span className="mr-2 inline-block w-2 h-2 rounded-full bg-[#22c55e]"></span>
              {i === 0 && "Motion detected"}
              {i === 1 && "ID: 85729 • Processing"}
              {i === 2 && "Analysis complete"}
              {i === 3 && "Threat level: Low"}
              {i === 4 && "Sending alert: #127A"}
            </motion.div>
          </motion.div>
        ))}
      </div>
      
      {/* Main Content */}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 z-20 pt-20 pb-24">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white leading-tight">
            Transform Your Security Services with <span className="text-[#22c55e]">AI Automation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            AI-driven video analysis and automated response systems that reduce costs and improve response times.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.a 
              href="#contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#22c55e] shadow-lg hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors duration-300"
              style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Demo
            </motion.a>
            <motion.a 
              href="#how-it-works" 
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-700 text-base font-medium rounded-md text-white bg-[#262626] hover:bg-[#262626]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="mr-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Watch It Work
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scrolldown Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.a 
          href="#what-we-do" 
          className="text-white"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.a>
      </div>
    </section>
  );
}
