
import { useEffect, useState, useRef } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter = ({ 
  end, 
  duration = 2000, 
  prefix = "", 
  suffix = "" 
}: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true;
        animateCounter();
      }
    }, { threshold: 0.5 });

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  const animateCounter = () => {
    const start = 0;
    const increment = Math.ceil(end / (duration / 16)); // Update every ~16ms for smooth animation
    let current = start;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);
  };

  return (
    <div ref={counterRef} className="counter text-3xl md:text-4xl font-bold text-zaploom dark:text-zaploom-light">
      {prefix}{count}{suffix}
    </div>
  );
};

export default AnimatedCounter;
