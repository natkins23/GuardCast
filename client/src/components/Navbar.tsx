import { useState } from "react";
import { Link } from "wouter";

type DropdownItem = {
  label: string;
  href: string;
};

type DropdownMenu = {
  label: string;
  items: DropdownItem[];
};

const servicesMenu: DropdownMenu = {
  label: "Services",
  items: [
    { label: "AI Security Automation Solutions", href: "#" },
    { label: "Real-Time Video Surveillance", href: "#" },
    { label: "Automated Dispatching & Alerts", href: "#" },
    { label: "User Verification System", href: "#" },
    { label: "Smart Video Analysis", href: "#" },
    { label: "24/7 Security Monitoring", href: "#" },
  ]
};

const productsMenu: DropdownMenu = {
  label: "Products",
  items: [
    { label: "AI-Powered Cameras", href: "#" },
    { label: "AI-Driven Security Dashboards", href: "#" },
    { label: "Mobile and Desktop Interfaces", href: "#" },
    { label: "Security Incident Management", href: "#" },
    { label: "Automated Emergency Alerts", href: "#" },
    { label: "Real-Time Video Processing", href: "#" },
  ]
};

const pricingMenu: DropdownMenu = {
  label: "Pricing",
  items: [
    { label: "Custom Pricing Plans", href: "#pricing" },
    { label: "Subscription Model", href: "#pricing" },
    { label: "Enterprise Solutions", href: "#pricing" },
    { label: "Small Business Packages", href: "#pricing" },
    { label: "Scalable Pricing Options", href: "#pricing" },
    { label: "Free Consultation and Demo", href: "#pricing" },
  ]
};

const solutionsMenu: DropdownMenu = {
  label: "Solutions",
  items: [
    { label: "Private Schools Security", href: "#" },
    { label: "Retail Business Security", href: "#" },
    { label: "Homeowner Security Solutions", href: "#" },
    { label: "Emergency Response Systems", href: "#" },
    { label: "Corporate and Commercial Security", href: "#" },
    { label: "Security Firm Partnerships", href: "#" },
  ]
};

const resourcesMenu: DropdownMenu = {
  label: "Resources",
  items: [
    { label: "AI Security Blog", href: "#" },
    { label: "Case Studies & Testimonials", href: "#" },
    { label: "Whitepapers & Guides", href: "#" },
    { label: "Implementation Guides", href: "#" },
    { label: "Webinars & Demos", href: "#" },
  ]
};

const NavDropdown = ({ menu }: { menu: DropdownMenu }) => {
  return (
    <div className="relative inline-block text-left group">
      <button className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-300 hover:text-white hover:border-[#22c55e] transition-colors">
        {menu.label}
        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div className="hidden group-hover:block absolute z-10 w-60 left-0 mt-2 bg-[#262626] rounded-md shadow-lg p-2">
        {menu.items.map((item, index) => (
          <a 
            key={index} 
            href={item.href} 
            className="block px-4 py-2 text-sm text-gray-200 hover:bg-[#22c55e] hover:text-white rounded-md transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-[#121212]/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-[#22c55e] font-mono font-bold text-2xl">
              Guard<span className="text-white">Cast</span>AI
            </Link>
          </div>
          
          <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
            <NavDropdown menu={servicesMenu} />
            <NavDropdown menu={productsMenu} />
            <NavDropdown menu={pricingMenu} />
            <NavDropdown menu={solutionsMenu} />
            <NavDropdown menu={resourcesMenu} />
          </div>
          
          <div className="flex items-center">
            <a 
              href="#contact" 
              className="hidden md:inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[#22c55e] hover:bg-[#15803d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#22c55e] transition-colors"
            >
              Contact Us
            </a>
            
            {/* Mobile menu button */}
            <button 
              type="button"
              className="md:hidden bg-[#262626] inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-[#1e1e1e] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-[#121212] border-t border-[#1e1e1e]">
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Products</a>
          <a href="#pricing" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Pricing</a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Solutions</a>
          <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Resources</a>
          <a href="#contact" className="bg-[#22c55e] text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>
        </div>
      </div>
    </nav>
  );
}
