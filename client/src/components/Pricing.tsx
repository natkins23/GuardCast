export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#1e1e1e] py-20 scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Choose the Right <span className="text-[#22c55e]">Plan</span> for Your Security Needs</h2>
          <div className="w-16 h-1 bg-[#22c55e] mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 leading-relaxed">
            We offer flexible pricing tailored to fit different types of businesses and security requirements. From small security firms to large enterprises, we provide scalable options that align with your goals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-[#262626] rounded-xl overflow-hidden shadow-lg border border-gray-800 transition-all duration-300 hover:shadow-xl hover:border-[#22c55e]/30">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Basic Plan</h3>
              <p className="text-gray-400 mb-6">For small security firms</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$99</span>
                <span className="text-gray-400">/month</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">AI video analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Real-time alerts</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Automated dispatching</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Up to 10 cameras</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-500">Mobile app integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-500">Advanced analytics</span>
                </li>
              </ul>
              
              <a 
                href="#contact" 
                className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#121212] hover:bg-[#22c55e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors duration-300"
              >
                Get Started
              </a>
            </div>
          </div>
          
          {/* Professional Plan */}
          <div className="bg-[#262626] rounded-xl overflow-hidden shadow-lg border border-[#22c55e] transform md:-translate-y-4 z-10 relative transition-all duration-300 hover:shadow-xl hover:shadow-[#22c55e]/30">
            <div className="absolute top-0 right-0 bg-[#22c55e] text-white px-4 py-1 text-sm font-semibold">
              Popular
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Professional Plan</h3>
              <p className="text-gray-400 mb-6">For medium-sized firms</p>
              
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$249</span>
                <span className="text-gray-400">/month</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Everything in Basic</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Unlimited cameras</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Advanced AI-driven analytics</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Mobile app integration</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Priority support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-gray-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                  <span className="text-gray-500">Multi-site deployment</span>
                </li>
              </ul>
              
              <a 
                href="#contact" 
                className="block w-full text-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#22c55e] hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors duration-300"
                style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}
              >
                Get Started
              </a>
            </div>
          </div>
          
          {/* Enterprise Plan */}
          <div className="bg-[#262626] rounded-xl overflow-hidden shadow-lg border border-gray-800 transition-all duration-300 hover:shadow-xl hover:border-[#22c55e]/30">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise Plan</h3>
              <p className="text-gray-400 mb-6">For large firms and organizations</p>
              
              <div className="mb-6">
                <span className="text-2xl font-bold text-white">Custom Pricing</span>
              </div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Everything in Professional</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Multi-site deployment</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Customizable features</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Real-time reporting</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Dedicated support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-[#22c55e] mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">Custom integrations</span>
                </li>
              </ul>
              
              <a 
                href="#contact" 
                className="block w-full text-center px-6 py-3 border border-[#22c55e] text-base font-medium rounded-md text-white bg-[#121212] hover:bg-[#22c55e] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 max-w-3xl mx-auto text-center bg-[#262626] p-8 rounded-xl border border-gray-800">
          <h3 className="text-xl font-bold text-white mb-4">Need a personalized solution?</h3>
          <p className="text-gray-300 mb-6">Contact us for a free consultation to see which plan fits best with your security requirements.</p>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#22c55e] hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors duration-300"
          >
            Schedule a Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
