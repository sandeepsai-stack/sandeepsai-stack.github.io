import Hero from '@/components/Hero';
import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Palette, Zap, Users } from 'lucide-react';

const Home = () => {
  const skills = [
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 90 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'Node.js', level: 85 },
    { name: 'Figma', level: 90 },
  ];

  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive user interfaces with modern technologies.',
      technologies: ['React', 'Vue.js', 'TypeScript', 'Next.js']
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: 'UI/UX Design',
      description: 'Creating beautiful and intuitive designs that enhance user experience.',
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping']
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: 'Performance Optimization',
      description: 'Optimizing applications for speed, accessibility, and SEO.',
      technologies: ['Lighthouse', 'Core Web Vitals', 'Bundling', 'Caching']
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Collaboration',
      description: 'Working closely with teams to deliver projects on time and within budget.',
      technologies: ['Agile', 'Scrum', 'Git', 'Code Review']
    }
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card/30">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
              About Me
            </h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal animation="fade-in-left">
              <div>
                <h3 className="text-2xl font-semibold mb-6">
                  Passionate about creating digital experiences
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  With over 10 years of experience in frontend development and UI/UX design, 
                  I specialize in creating seamless digital experiences that bridge the gap 
                  between design and functionality.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  I believe in the power of clean code, thoughtful design, and continuous 
                  learning. Every project is an opportunity to push boundaries and create 
                  something remarkable.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-right">
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="animate-stagger-1" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
              What I Do
            </h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ScrollReveal 
                key={service.title} 
                animation="scale-in"
                delay={index * 100}
              >
                <Card className="h-full hover-glow hover-scale border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="text-primary mb-4 animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;