import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import React, { useState } from 'react';

const About = () => {
  const timeline = [
    {
      year: 'Present',
      title: 'Senior UI Architect Consultant',
      company: 'Tech Innovations Inc.',
      description: 'Leading UI/UX initiatives for enterprise applications, mentoring junior developers, and establishing design systems.',
      type: 'work'
    },
    {
      year: '2023',
      title: 'Frontend Developer',
      company: 'JP Morgan Chase & Co.',
      description: 'Developed responsive web applications using React, implemented modern design patterns, and improved performance metrics.',
      type: 'work'
    },
    {
      year: '2016',
      title: 'Master of Science',
      company: 'University of Colorado Denver',
      description: 'Graduated with honors, specializing in Web Development.',
      type: 'education'
    },
    {
      year: '2015',
      title: 'UX/UI Specialist',
      company: 'Infosys Limited',
      description: 'Designed user interfaces for mobile and web applications, implemented responsive layouts, and created design prototypes.',
      type: 'work'
    },
    {
      year: '2010',
      title: 'Bachelor of Computer Science',
      company: 'SreeNidhi Institute of Technology & Science',
      description: 'Graduated with honors, specializing in Web Development.',
      type: 'education'
    }
  ];

  const technologies = [
    'React', 'TypeScript', 'Next.js', 'Redux', 'Angular',
    'Tailwind CSS', 'Styled Components', 'SASS', 'CSS-in-JS',
    'Figma', 'Adobe XD', 'Sketch', 'Framer',
    'Node.js', 'Express', 'MongoDB',
    'Git', 'Docker', 'AWS'
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const trackRef = React.useRef<HTMLDivElement>(null);
  const thumbRef = React.useRef<HTMLDivElement>(null);
  const [trackHeight, setTrackHeight] = React.useState(240); // px, default
  const [isDragging, setIsDragging] = React.useState(false);

  // Set track height on mount
  React.useEffect(() => {
    if (trackRef.current) {
      setTrackHeight(trackRef.current.offsetHeight);
    }
  }, []);

  // Drag logic
  const handleThumbMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!trackRef.current) return;
    const rect = trackRef.current.getBoundingClientRect();
    let y = e.clientY - rect.top;
    y = Math.max(0, Math.min(y, trackHeight));
    const percent = y / trackHeight;
    const idx = Math.round(percent * (timeline.length - 1));
    setSelectedIndex(idx);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  return (
    <div className="min-h-screen pt-20 px-4">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
              About Me
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate UI Architect and Artist dedicated to creating 
              exceptional digital experiences through thoughtful design and clean code.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Personal Info */}
      <section className="py-20 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Bio */}
            <ScrollReveal animation="fade-in-left">
              <div>
                <h2 className="text-3xl font-bold mb-6">My Story</h2>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    My journey in design and development began over 10 years ago when I discovered 
                    the perfect intersection between creativity and technology. What started as 
                    curiosity about how websites work evolved into a passion for crafting 
                    digital experiences that truly matter.
                  </p>
                  <p>
                    I believe that great design isn't just about making things look beautiful—it's 
                    about solving real problems and making technology more accessible and enjoyable 
                    for everyone. This philosophy drives every project I work on.
                  </p>
                  <p>
                    When I'm not designing or coding, you'll find me exploring new design trends, 
                    contributing to open-source projects, or sharing knowledge with the developer 
                    community through articles and workshops.
                  </p>
                </div>

                <div className="flex items-center gap-6 mt-8 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Dallas, Texas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span>Available for projects</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Technologies */}
            <ScrollReveal animation="fade-in-right">
              <div>
                <h2 className="text-3xl font-bold mb-6">Technologies & Tools</h2>
                <p className="text-muted-foreground mb-6">
                  I work with a variety of technologies and tools to bring ideas to life:
                </p>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="hover-scale cursor-default animate-fade-in" 
                      style={{ animationDelay: `${index * 50}ms` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
              Journey & Experience
            </h2>
          </ScrollReveal>

          <div className="relative flex">
            {/* Timeline slider */}
            <div className="flex flex-col items-center mr-12 relative select-none" style={{ minHeight: 300 }}>
              <div
                ref={trackRef}
                className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"
                style={{ height: `${trackHeight}px` }}
              ></div>
              {/* Dots */}
              {timeline.map((item, index) => {
                const dotY = (index / (timeline.length - 1)) * trackHeight;
                return (
                  <button
                    key={index}
                    className={`w-6 h-6 rounded-full border-4 border-background z-10 transition-all duration-200 absolute left-1/2 -translate-x-1/2"
                      ${item.type === 'work' ? 'bg-primary' : 'bg-accent'}
                      ${selectedIndex === index ? 'ring-4 ring-primary/40 scale-110' : ''}`}
                    style={{ top: dotY - 12 }}
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Show ${item.title}`}
                    type="button"
                  />
                );
              })}
              {/* Draggable Thumb */}
              <div
                ref={thumbRef}
                className={`w-8 h-8 rounded-full border-4 border-primary bg-background z-20 absolute left-1/2 -translate-x-1/2 cursor-pointer shadow-lg transition-all duration-200 ${isDragging ? 'scale-110' : ''}`}
                style={{
                  top: `${(selectedIndex / (timeline.length - 1)) * trackHeight - 16}px`,
                  left: '12px',
                  transition: isDragging ? 'none' : 'top 0.2s',
                }}
                onMouseDown={handleThumbMouseDown}
                tabIndex={0}
                aria-label="Drag to select timeline"
              >
                <div className="w-3 h-3 rounded-full mx-auto my-auto"></div>
              </div>
            </div>

            {/* Content for selected timeline item */}
            <div className="flex-1">
              <ScrollReveal animation="fade-in-left" key={selectedIndex}>
                <Card className="hover-glow border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-3">
                      <Badge variant={timeline[selectedIndex].type === 'work' ? 'default' : 'secondary'}>
                        {timeline[selectedIndex].year}
                      </Badge>
                      <Badge variant="outline">
                        {timeline[selectedIndex].type === 'work' ? 'Work' : 'Education'}
                      </Badge>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{timeline[selectedIndex].title}</h3>
                    <p className="text-primary font-medium mb-3">{timeline[selectedIndex].company}</p>
                    <p className="text-muted-foreground leading-relaxed">
                      {timeline[selectedIndex].description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;