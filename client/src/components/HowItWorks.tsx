import { motion } from "framer-motion";

export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Motion/Event Detected",
      description: "Security cameras detect suspicious activity or movement."
    },
    {
      number: 2,
      title: "AI Analyzes Footage",
      description: "AI rapidly assesses threat level and determines appropriate action."
    },
    {
      number: 3,
      title: "System Alerts User",
      description: "User receives notification and confirms escalation with one tap."
    },
    {
      number: 4,
      title: "AI Initiates Call",
      description: "System automatically contacts security team and sends video summary."
    },
    {
      number: 5,
      title: "Security Response",
      description: "Team arrives on scene with full context of the situation."
    }
  ];

  return (
    <section id="how-it-works" className="bg-[#1e1e1e] py-20 scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">How Our <span className="text-[#22c55e]">AI Security System</span> Works</h2>
          <div className="w-16 h-1 bg-[#22c55e] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            From detection to response, our AI-driven system automates and enhances every step of the security process.
          </p>
        </div>
        
        <div className="relative">
          {/* Progress line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-[#262626] transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 mb-6 bg-[#262626] rounded-full flex items-center justify-center border-4 border-[#1e1e1e]">
                  <div className="w-16 h-16 bg-[#121212] rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-[#22c55e]">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-gray-400 text-sm">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="absolute hidden lg:block bottom-0 left-1/2 w-full h-8">
                    <div className="absolute bottom-0 left-1/2 w-2 h-8 bg-[#22c55e] transform -translate-x-1/2"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#22c55e] shadow-lg hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors duration-300"
            style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}
          >
            See a Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}
