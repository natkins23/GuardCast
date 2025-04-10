export default function CTA() {
  return (
    <section className="bg-[#1e1e1e] py-20 scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-[#262626] to-[#121212] rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 opacity-10">
              <img 
                src="https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1200&auto=format&fit=crop" 
                alt="Security technology background" 
                className="w-full h-full object-cover" 
              />
            </div>
            
            <div className="relative p-8 md:p-12 lg:p-16">
              <div className="md:flex md:items-center md:justify-between">
                <div className="md:max-w-2xl mb-8 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Elevate Your Security Services with AI</h2>
                  <p className="text-xl text-gray-300 mb-0">
                    Contact us today to learn how our AI-powered security solutions can enhance your operations, reduce costs, and improve response times.
                  </p>
                </div>
                
                <div className="flex flex-col space-y-4">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#22c55e] shadow-lg hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors duration-300"
                    style={{ boxShadow: '0 0 15px rgba(34, 197, 94, 0.5)' }}
                  >
                    Request a Demo
                  </a>
                  <a 
                    href="#partner" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-[#22c55e] text-base font-medium rounded-md text-white bg-transparent hover:bg-[#22c55e]/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors duration-300"
                  >
                    Become a Partner
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
