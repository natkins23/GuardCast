import { useRef, useEffect, useState } from "react";
import { useIntersection } from "react-use";
import * as d3 from "d3";
import { motion } from "framer-motion";

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
    description:
      "Traditional security systems require expensive equipment and large staffing costs without smart optimization.",
    color: "#22c55e",
    stats: { value: 85, label: "higher operational costs" },
  },
  {
    id: 2,
    icon: "clock",
    title: "Slow Response Times",
    description:
      "Manual verification and dispatch processes create critical delays during emergencies.",
    color: "#22c55e",
    stats: { value: 40, label: "minutes average response time" },
  },
  {
    id: 3,
    icon: "alert",
    title: "Human Error",
    description:
      "Security personnel can't maintain optimal vigilance during long shifts, leading to missed incidents.",
    color: "#22c55e",
    stats: { value: 60, label: "of incidents missed" },
  },
  {
    id: 4,
    icon: "settings",
    title: "Outdated Technology",
    description:
      "Legacy systems lack advanced video analysis capabilities and AI-driven automation.",
    color: "#22c55e",
    stats: { value: 95, label: "lack AI capabilities" },
  },
];

// SVG icons for each challenge
const icons = {
  dollar: (
    <svg
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  ),
  clock: (
    <svg
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
      ></path>
    </svg>
  ),
  alert: (
    <svg
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
      ></path>
    </svg>
  ),
  settings: (
    <svg
      className="w-full h-full"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
      ></path>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
      ></path>
    </svg>
  ),
};

// SVG Progress Circle component
interface ProgressCircleProps {
  percentage: number;
  color?: string;
  size?: number;
  showText?: boolean;
  isAnimating?: boolean;
}
function ProgressCircle({
  percentage = 0,
  color = "#22c55e",
  size = 100,
  isAnimating = false,
}: ProgressCircleProps) {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  // Calculates the stroke-dashoffset based on the percentage
  const calculateStrokeDashoffset = (
    percent: number,
    circumference: number,
  ): number => {
    return circumference - (percent / 100) * circumference;
  };

  // When animation is triggered, smoothly transition from 0 to target percentage
  useEffect(() => {
    if (isAnimating) {
      setCurrentPercentage(0); // Reset to 0 before animating

      // Use setTimeout to ensure the reset to 0 renders before starting the animation
      const timer = setTimeout(() => {
        setCurrentPercentage(percentage);
      }, 50);

      return () => clearTimeout(timer);
    } else {
      setCurrentPercentage(0);
    }
  }, [isAnimating, percentage]);

  // Calculate dimensions
  const radius = size / 2;
  const strokeWidth = radius * 0.2;
  const innerRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * innerRadius;

  // Calculate stroke-dashoffset for the progress arc
  const strokeDashoffset = calculateStrokeDashoffset(
    currentPercentage,
    circumference,
  );

  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        className="progress-circle"
        viewBox={`0 0 ${size} ${size}`}
      >
        {/* Create a filter for the glow effect */}
        <defs>
          <filter
            id={`glow-${percentage}`}
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feFlood floodColor={color} floodOpacity="0.3" result="color" />
            <feComposite in="color" in2="blur" operator="in" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background circle */}
        <circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          fill="none"
          stroke="#333"
          strokeWidth={strokeWidth}
        />

        {/* Progress circle */}
        <circle
          cx={radius}
          cy={radius}
          r={innerRadius}
          fill="none"
          stroke={color}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${radius} ${radius})`}
          filter={`url(#glow-${percentage})`}
          style={{
            transition: "stroke-dashoffset 1s ease-in-out",
          }}
        />
      </svg>
    </div>
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
        {/* This entire div is now the hover target for the circle animation */}
        <div
          className="relative cursor-pointer group"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Static icon */}
          <div
            className={`w-24 h-24 rounded-full bg-[#262626] flex items-center justify-center border-4 border-[#121212] transition-all duration-300 `}
          >
            <div className="w-12 h-12 text-[#22c55e]">
              {icons[challenge.icon]}
            </div>
          </div>

          {/* Progress circle that appears on hover */}
          <div
            className={`absolute top-0 left-0 w-24 h-24 transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          >
            <ProgressCircle
              percentage={challenge.stats.value}
              color={challenge.color}
              size={96}
              showText={!hovered} // Hide text when hovered
              isAnimating={hovered} // Control animation from parent
            />
          </div>
        </div>

        <div className="flex-1 text-center md:text-left">
          <h3 className="text-xl font-bold text-white mb-2">
            {challenge.title}
          </h3>
          <p className="text-gray-400 mb-3">{challenge.description}</p>

          <div className="mt-4 flex flex-col">
            <div className="text-2xl font-bold text-[#22c55e]">
              {challenge.stats.value}
              {challenge.id === 2 ? "" : "%"}
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
    rootMargin: "0px",
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
            Security Today:{" "}
            <span className="text-[#22c55e]">
              Costly, Outdated, and Inefficient
            </span>
          </h2>
          <div className="w-16 h-1 bg-[#22c55e] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Traditional security systems fail to meet modern challenges. See how
            outdated approaches create vulnerabilities and inefficiencies across
            the industry.
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
            <h3 className="text-xl font-bold text-white mb-3">
              The Security Industry Needs a Revolution
            </h3>
            <p className="text-gray-400 mb-6">
              Traditional security approaches can't keep up with modern threats.
              It's time for an AI-powered solution that eliminates these
              challenges.
            </p>
            <a
              href="#smart-security"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#22c55e] shadow-lg hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors duration-300"
              style={{ boxShadow: "0 0 15px rgba(34, 197, 94, 0.3)" }}
            >
              See How We Solve This
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
