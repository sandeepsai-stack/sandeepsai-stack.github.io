import { useEffect, useState } from 'react';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'UI Architect / Artist';
  
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      {/* Hero Content */}
      <div className="text-center z-10 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up">
          <span className="text-gradient">Sandeep Sai</span>
        </h1>

        {/* Animated Subtitle */}
        <div className="h-16 mb-8 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-light">
            {displayText}
            <span className="animate-pulse">|</span>
          </h2>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in-up animate-stagger-2">
          Crafting UI/UX designs that are not only visually appealing but also 
          functional and user-friendly. Let's create something extraordinary together.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-stagger-3">
          <Button 
            size="lg" 
            className="group hover-glow transition-all duration-300"
            onClick={() => window.location.href = 'mailto:bsandeep2988@gmail.com'}
          >
            <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Let's Work Together
          </Button>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 opacity-20 animate-float">
          <div className="w-20 h-20 border-2 border-primary rounded-lg rotate-45"></div>
        </div>
        
        <div className="absolute top-40 right-10 opacity-20 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-16 h-16 bg-primary/20 rounded-full"></div>
        </div>
        
        <div className="absolute bottom-40 left-20 opacity-20 animate-float" style={{ animationDelay: '4s' }}>
          <div className="w-12 h-12 border-2 border-accent rounded-full"></div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-sm mb-2 group-hover:text-primary transition-colors">Scroll Down</span>
          <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform" />
        </button>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
    </section>
  );
};

export default Hero;