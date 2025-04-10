import { useRef, useEffect, useState } from 'react';
import { useIntersection } from 'react-use';
import * as d3 from 'd3';
import { motion } from 'framer-motion';

// Define challenge interface
interface SecurityChallenge {
  id: number;
  icon: "dollar" | "clock" | "alert" | "settings";
  title: string;
  description: string;
  color: string;
  stats: {
    value: number;
    label: string;
  };
}

// Define the data for our infographic
const securityChallenges: SecurityChallenge[] = [
  {
    id: 1,
    icon: "dollar",
    title: "High Costs",
    description: "Traditional security systems require expensive equipment and large staffing costs without smart optimization.",
    color: "#22c55e",
    stats: { value: 85, label: "% higher operational costs" }
  },
  {
    id: 2,
    icon: "clock",
    title: "Slow Response Times",
    description: "Manual verification and dispatch processes create critical delays during emergencies.",
    color: "#22c55e",
    stats: { value: 40, label: "minutes average response time" }
  },
  {
    id: 3,
    icon: "alert",
    title: "Human Error",
    description: "Security personnel can't maintain optimal vigilance during long shifts, leading to missed incidents.",
    color: "#22c55e",
    stats: { value: 60, label: "% of incidents missed" }
  },
  {
    id: 4,
    icon: "settings",
    title: "Outdated Technology",
    description: "Legacy systems lack advanced video analysis capabilities and AI-driven automation.",
    color: "#22c55e",
    stats: { value: 95, label: "% lack AI capabilities" }
  }
];

// SVG icons for each challenge
const icons = {
  dollar: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  ),
  clock: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
  ),
  alert: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
    </svg>
  ),
  settings: (
    <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
    </svg>
  )
};

// Progress Circle component using D3
interface ProgressCircleProps {
  percentage: number;
  color?: string;
  size?: number;
}

function ProgressCircle({ percentage = 0, color = "#22c55e", size = 100 }: ProgressCircleProps) {
  const svgRef = useRef(null);
  const [currentPercentage, setCurrentPercentage] = useState(0);
  
  // Animate the percentage from 0 to target when component mounts
  useEffect(() => {
    const duration = 1000; // animation duration in ms
    const steps = 60; // number of steps for smoother animation
    const stepDuration = duration / steps;
    const increment = percentage / steps;
    let currentStep = 0;
    
    const timer = setInterval(() => {
      currentStep++;
      setCurrentPercentage(Math.min(increment * currentStep, percentage));
      
      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [percentage]);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Clear SVG
    
    const width = size;
    const height = size;
    const radius = Math.min(width, height) / 2;
    const thickness = radius * 0.2;
    
    const g = svg
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);
    
    // Background circle
    g.append("circle")
      .attr("r", radius - thickness / 2)
      .attr("fill", "none")
      .attr("stroke", "#333")
      .attr("stroke-width", thickness);
    
    // Calculate the circumference of the circle
    const circumference = 2 * Math.PI * (radius - thickness / 2);
    
    // Manually calculate the arc path instead of using d3.arc()
    const calculateArcPath = () => {
      const startAngle = 0;
      const endAngle = 2 * Math.PI * (currentPercentage / 100);
      
      const innerRadius = radius - thickness;
      const outerRadius = radius;
      
      // Calculate points for outer and inner arc
      const x1 = Math.cos(startAngle) * outerRadius;
      const y1 = Math.sin(startAngle) * outerRadius;
      
      const x2 = Math.cos(endAngle) * outerRadius;
      const y2 = Math.sin(endAngle) * outerRadius;
      
      const x3 = Math.cos(endAngle) * innerRadius;
      const y3 = Math.sin(endAngle) * innerRadius;
      
      const x4 = Math.cos(startAngle) * innerRadius;
      const y4 = Math.sin(startAngle) * innerRadius;
      
      // Create arc flag (0 for minor arc, 1 for major arc)
      const arcFlag = endAngle - startAngle <= Math.PI ? 0 : 1;
      
      // Build the SVG path
      return `
        M ${x1} ${y1}
        A ${outerRadius} ${outerRadius} 0 ${arcFlag} 1 ${x2} ${y2}
        L ${x3} ${y3}
        A ${innerRadius} ${innerRadius} 0 ${arcFlag} 0 ${x4} ${y4}
        Z
      `;
    };
    
    const arcPath = calculateArcPath();
    
    // Add glow effect filter
    const defs = svg.append("defs");
    const filter = defs.append("filter")
      .attr("id", `glow-${percentage}`)
      .attr("x", "-50%")
      .attr("y", "-50%")
      .attr("width", "200%")
      .attr("height", "200%");
      
    filter.append("feGaussianBlur")
      .attr("stdDeviation", "3")
      .attr("result", "coloredBlur");
      
    const feMerge = filter.append("feMerge");
    feMerge.append("feMergeNode")
      .attr("in", "coloredBlur");
    feMerge.append("feMergeNode")
      .attr("in", "SourceGraphic");
    
    // Progress arc with animation
    g.append("path")
      .attr("d", arcPath)
      .attr("fill", color)
      .attr("opacity", 0.8)
      .attr("filter", `url(#glow-${percentage})`);
    
    // Add a slight pulse animation to the arc
    g.append("path")
      .attr("d", arcPath)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 1)
      .attr("opacity", 0.5)
      .attr("class", "pulse-path");
    
    // Percentage text with counter animation
    g.append("text")
      .attr("text-anchor", "middle")
      .attr("dy", ".35em")
      .attr("fill", "#fff")
      .attr("font-size", radius * 0.45)
      .attr("font-weight", "bold")
      .text(`${Math.round(currentPercentage)}${percentage === 40 ? '' : '%'}`);
      
  }, [currentPercentage, color, size, percentage]);
  
  return (
    <svg 
      ref={svgRef} 
      width={size} 
      height={size} 
      className="progress-circle"
    ></svg>
  );
}

// Challenge Card Component
interface ChallengeCardProps {
  challenge: SecurityChallenge;
  index: number;
  isVisible: boolean;
}

function ChallengeCard({ challenge, index, isVisible }: ChallengeCardProps) {
  const [hovered, setHovered] = useState(false);
  
  return (
    <motion.div 
      className="bg-[#1e1e1e] rounded-lg p-6 shadow-lg border border-gray-800 transition-all duration-300 hover:border-[#22c55e]/50 hover:shadow-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <div className="relative">
          <div 
            className="w-24 h-24 rounded-full bg-[#262626] flex items-center justify-center border-4 border-[#121212]"
          >
            <div className="w-12 h-12 text-[#22c55e]">
              {icons[challenge.icon]}
            </div>
          </div>
          <motion.div 
            className="absolute top-0 left-0 w-24 h-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProgressCircle 
              percentage={challenge.stats.value} 
              color={challenge.color} 
              size={96}
            />
          </motion.div>
        </div>
        
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">
            {challenge.title}
          </h3>
          <p className="text-gray-400 mb-3">{challenge.description}</p>
          
          <div className="mt-4 flex flex-col">
            <div className="text-2xl font-bold text-[#22c55e]">
              {challenge.stats.value}{challenge.id === 2 ? '' : '%'}
            </div>
            <div className="text-xs text-gray-500">{challenge.stats.label}</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Main Component
export default function IndustryChallenges() {
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const sectionRef = useRef(null);
  
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: '0px',
    threshold: 0.3,
  });
  
  useEffect(() => {
    if (intersection && intersection.intersectionRatio > 0.3) {
      setAnimationTriggered(true);
    }
  }, [intersection]);
  
  return (
    <section id="challenges" ref={sectionRef} className="bg-[#121212] py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Security Today: <span className="text-[#22c55e]">Costly, Outdated, and Inefficient</span>
          </h2>
          <div className="w-16 h-1 bg-[#22c55e] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Traditional security systems fail to meet modern challenges. See how outdated approaches create vulnerabilities and inefficiencies across the industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {securityChallenges.map((challenge, index) => (
            <ChallengeCard 
              key={challenge.id} 
              challenge={challenge} 
              index={index}
              isVisible={animationTriggered}
            />
          ))}
        </div>
        
        <div className="mt-16 text-center max-w-4xl mx-auto">
          <div className="p-6 bg-[#1e1e1e] rounded-lg border border-gray-800">
            <h3 className="text-xl font-bold text-white mb-3">The Security Industry Needs a Revolution</h3>
            <p className="text-gray-400 mb-6">
              Traditional security approaches can't keep up with modern threats. It's time for an AI-powered solution that eliminates these challenges.
            </p>
            <a 
              href="#benefits" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#22c55e] shadow-lg hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors duration-300"
              style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.3)' }}
            >
              See How We Solve This
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
