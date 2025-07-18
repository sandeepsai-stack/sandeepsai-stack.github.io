import { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: number;
  threshold?: number;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1 
}: ScrollRevealProps) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class with delay
            setTimeout(() => {
              entry.target.classList.add(`animate-${animation}`);
              entry.target.classList.remove('opacity-0');
            }, delay);
            
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    // Start with element hidden
    element.classList.add('opacity-0');
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [animation, delay, threshold]);

  return (
    <div ref={elementRef} className={`transition-all duration-800 ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;