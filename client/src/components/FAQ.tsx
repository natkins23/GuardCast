import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How does your AI security system work?",
    answer: "Our AI system uses real-time video analysis to detect suspicious activity and threats. When an incident is detected, the system automatically alerts security teams or emergency services. The user can verify the situation with a single tap, and AI automatically forwards a video summary to dispatch, ensuring faster response times and a higher level of security."
  },
  {
    question: "What are the main benefits of using AI for security?",
    answer: "AI enables faster, more accurate decision-making. It eliminates human error, reduces false alarms, and allows for quicker response times. With real-time video analysis, automated alerts, and direct integration with dispatch, security teams can act more efficiently, saving both time and money."
  },
  {
    question: "How do you ensure privacy and security of the data?",
    answer: "We take privacy and data security very seriously. Our system is built with end-to-end encryption and complies with industry standards. Video footage and data are stored securely, with access limited to authorized personnel only."
  },
  {
    question: "Can the system be integrated with existing security infrastructure?",
    answer: "Yes, our system is designed to integrate seamlessly with your existing security cameras, alarm systems, and dispatch platforms. We work with you to ensure smooth implementation and minimal disruption during setup."
  },
  {
    question: "Is there a trial period or demo available?",
    answer: "Yes! We offer a free demo and trial period so you can experience how our system works in real-time before making a commitment."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#121212] py-20 scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Frequently Asked <span className="text-[#22c55e]">Questions</span></h2>
            <div className="w-16 h-1 bg-[#22c55e] mx-auto mb-8"></div>
          </div>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-[#262626] rounded-lg overflow-hidden"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  className="flex justify-between items-center w-full p-6 text-left text-white focus:outline-none"
                >
                  <span className="text-lg font-semibold">{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 text-[#22c55e] transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-300">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
