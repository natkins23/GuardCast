export default function IndustryChallenges() {
  return (
    <section className="bg-[#121212] py-20 scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1581093577421-f561a654a353?q=80&w=800&auto=format&fit=crop" 
              alt="Traditional security monitoring system" 
              className="rounded-lg shadow-2xl" 
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Security Today: <span className="text-[#22c55e]">Costly, Outdated, and Inefficient</span></h2>
            <div className="w-16 h-1 bg-[#22c55e] mb-8"></div>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Security firms still rely on expensive, outdated communication systems with human oversight and no video analysis. The lack of automation leads to slow response times and missed incidents, putting both security and clients at risk.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[#22c55e] mr-3">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Human Error & Fatigue</h3>
                  <p className="text-gray-400">Security personnel can't maintain optimal vigilance during long shifts, leading to missed incidents.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[#22c55e] mr-3">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Delayed Response Times</h3>
                  <p className="text-gray-400">Traditional verification processes and manual dispatch create critical delays in emergencies.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 text-[#22c55e] mr-3">
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Wasted Resources</h3>
                  <p className="text-gray-400">Expensive equipment and staffing costs without the intelligence to optimize their deployment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
