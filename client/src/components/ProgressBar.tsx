import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgressBar = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.scrollHeight - windowHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / documentHeight) * 100;
      
      setProgress(progress);
    };

    window.addEventListener('scroll', updateProgressBar);
    
    // Initial update
    updateProgressBar();
    
    return () => {
      window.removeEventListener('scroll', updateProgressBar);
    };
  }, []);

  return (
    <div className="fixed top-0 w-full h-1 z-50">
      <div 
        className="h-1 bg-[#22c55e]" 
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
}
