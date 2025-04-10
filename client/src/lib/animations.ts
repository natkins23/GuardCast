export function initScrollReveal() {
  const revealElements = document.querySelectorAll('.scroll-reveal');
  
  const checkReveal = () => {
    revealElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.classList.add('visible');
      }
    });
  };
  
  // Add CSS classes needed for the animation
  const style = document.createElement('style');
  style.textContent = `
    .scroll-reveal {
      opacity: 0;
      transform: translateY(20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .scroll-reveal.visible {
      opacity: 1;
      transform: translateY(0);
    }
  `;
  document.head.appendChild(style);
  
  // Initialize
  window.addEventListener('scroll', checkReveal);
  window.addEventListener('resize', checkReveal);
  
  // Initial check
  setTimeout(checkReveal, 100);
}
