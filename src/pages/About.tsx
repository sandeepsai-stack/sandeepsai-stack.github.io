import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin } from 'lucide-react';

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

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <ScrollReveal 
                  key={index} 
                  animation="fade-in-left"
                  delay={index * 100}
                >
                  <div className="relative flex items-start">
                    {/* Timeline dot */}
                    <div className={`absolute left-6 w-4 h-4 rounded-full border-4 border-background z-10 ${
                      item.type === 'work' ? 'bg-primary' : 'bg-accent'
                    }`}></div>

                    {/* Content */}
                    <div className="ml-20">
                      <Card className="hover-glow border-border/50 bg-card/50 backdrop-blur-sm">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-4 mb-3">
                            <Badge variant={item.type === 'work' ? 'default' : 'secondary'}>
                              {item.year}
                            </Badge>
                            <Badge variant="outline">
                              {item.type === 'work' ? 'Work' : 'Education'}
                            </Badge>
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                          <p className="text-primary font-medium mb-3">{item.company}</p>
                          <p className="text-muted-foreground leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;