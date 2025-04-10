export default function AIImprovements() {
  return (
    <section id="smart-security" className="bg-[#1e1e1e] py-20 scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" 
              alt="AI technology analyzing security footage" 
              className="rounded-lg shadow-2xl" 
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Smarter Security: <span className="text-[#22c55e]">Real-Time AI Automation</span> for Faster Response</h2>
            <div className="w-16 h-1 bg-[#22c55e] mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              AI-powered systems provide real-time video analysis and instant alerts to security teams or EMS, drastically improving decision-making and response times. With one tap, end users can confirm escalation, ensuring quick action and better security outcomes.
            </p>
            
            <div className="bg-[#262626] p-6 rounded-lg mb-6 border border-[#22c55e]/30 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-[#22c55e]/20 flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white">Impact by the Numbers</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-3 bg-[#121212] rounded-lg">
                  <p className="text-3xl font-bold text-[#22c55e]">40%</p>
                  <p className="text-sm text-gray-400">Faster Response Times</p>
                </div>
                <div className="text-center p-3 bg-[#121212] rounded-lg">
                  <p className="text-3xl font-bold text-[#22c55e]">60%</p>
                  <p className="text-sm text-gray-400">Fewer False Alarms</p>
                </div>
                <div className="text-center p-3 bg-[#121212] rounded-lg">
                  <p className="text-3xl font-bold text-[#22c55e]">30%</p>
                  <p className="text-sm text-gray-400">Cost Reduction</p>
                </div>
                <div className="text-center p-3 bg-[#121212] rounded-lg">
                  <p className="text-3xl font-bold text-[#22c55e]">24/7</p>
                  <p className="text-sm text-gray-400">Constant Monitoring</p>
                </div>
              </div>
            </div>
            
            <a href="#how-it-works" className="inline-flex items-center text-[#22c55e] hover:text-[#4ade80] transition-colors">
              <span>See how our AI system works</span>
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
