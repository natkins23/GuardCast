import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import IndustryChallenges from "@/components/IndustryChallenges";
import AIImprovements from "@/components/AIImprovements";
import CoreBenefits from "@/components/CoreBenefits";
import HowItWorks from "@/components/HowItWorks";
import CaseStudy from "@/components/CaseStudy";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProgressBar from "@/components/ProgressBar";
import BackToTop from "@/components/BackToTop";
import { initScrollReveal } from "@/lib/animations";

export default function Home() {
  useEffect(() => {
    // Initialize scroll reveal effect
    initScrollReveal();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: (targetElement as HTMLElement).offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans">
      <ProgressBar />
      <Navbar />
      <Hero />
      <WhatWeDo />
      <IndustryChallenges />
      <AIImprovements />
      <CoreBenefits />
      <HowItWorks />
      <CaseStudy />
      <Pricing />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}
