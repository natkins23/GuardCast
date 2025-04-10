export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-[#1e1e1e] py-20 scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Level Up Your Security Firm's Services with AI</h2>
          <div className="w-16 h-1 bg-[#22c55e] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Revolutionize your security firm with AI-powered video surveillance, real-time analysis, and automated dispatching. Our solution cuts costs, minimizes human error, and improves response times, providing the ultimate value to your clients.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#262626] p-6 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#121212] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Enhanced Protection</h3>
              <p className="text-gray-400">AI constantly monitors your security feeds, identifying potential threats that humans might miss.</p>
            </div>
            
            <div className="bg-[#262626] p-6 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#121212] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Faster Response</h3>
              <p className="text-gray-400">Automated alerts and instant video analysis reduce response times by up to 40%.</p>
            </div>
            
            <div className="bg-[#262626] p-6 rounded-lg hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-[#121212] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-[#22c55e]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Cost Efficiency</h3>
              <p className="text-gray-400">Reduce operational costs while providing superior security services to your clients.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
