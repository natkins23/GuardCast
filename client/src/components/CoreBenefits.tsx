export default function CoreBenefits() {
  return (
    <section className="bg-[#121212] py-20 scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Why AI Security Automation <span className="text-[#22c55e]">Works</span></h2>
          <div className="w-16 h-1 bg-[#22c55e] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            Our AI-powered security system transforms how security firms operate, automating critical processes to make security operations smarter, faster, and more reliable.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card 1 */}
          <div className="bg-[#262626] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#22c55e]/20 border border-transparent hover:border-[#22c55e]/30">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#121212] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white text-center">AI Video Analysis</h3>
            <p className="text-gray-400 text-center">Instantly identify threats with real-time footage analysis.</p>
          </div>
          
          {/* Card 2 */}
          <div className="bg-[#262626] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#22c55e]/20 border border-transparent hover:border-[#22c55e]/30">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#121212] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white text-center">AI Dialing & Alerts</h3>
            <p className="text-gray-400 text-center">Automated notifications reach the right team or service immediately.</p>
          </div>
          
          {/* Card 3 */}
          <div className="bg-[#262626] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#22c55e]/20 border border-transparent hover:border-[#22c55e]/30">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#121212] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white text-center">User Confirmation</h3>
            <p className="text-gray-400 text-center">End-users confirm escalation with a single tap for fast action.</p>
          </div>
          
          {/* Card 4 */}
          <div className="bg-[#262626] rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:shadow-[#22c55e]/20 border border-transparent hover:border-[#22c55e]/30">
            <div className="w-16 h-16 mx-auto mb-6 bg-[#121212] rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-white text-center">Summarized Footage</h3>
            <p className="text-gray-400 text-center">AI generates concise summaries for quicker decision-making.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
