export default function CaseStudy() {
  return (
    <section className="bg-[#121212] py-20 scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-[#262626] rounded-xl overflow-hidden shadow-2xl">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?q=80&w=800&auto=format&fit=crop" 
                  alt="Private school security case study" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-10">
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-[#22c55e] text-white rounded-full mb-4">CASE STUDY</span>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">Case Study: Smarter Security for Private Schools</h2>
                
                <p className="text-gray-300 mb-6">
                  One school, located in an urban area, was struggling with slow security response times during break-ins. After integrating our AI-powered system, the school reduced response times by 40%.
                </p>
                
                <div className="border-l-4 border-[#22c55e] pl-4 mb-6">
                  <p className="text-gray-400 italic">Real-time video analysis and automated alerts allowed security teams to act immediately, without waiting for human verification.</p>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0 md:space-x-4 mb-6">
                  <div>
                    <span className="block text-3xl font-bold text-[#22c55e]">40%</span>
                    <span className="text-sm text-gray-400">Faster Response</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-[#22c55e]">24/7</span>
                    <span className="text-sm text-gray-400">Monitoring</span>
                  </div>
                  <div>
                    <span className="block text-3xl font-bold text-[#22c55e]">0</span>
                    <span className="text-sm text-gray-400">Security Breaches</span>
                  </div>
                </div>
                
                <div className="mt-8">
                  <a href="#case-studies" className="text-[#22c55e] hover:text-[#4ade80] flex items-center transition-colors">
                    <span>Read the full case study</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
