import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

const Work = () => {
  const projects = [
    {
      id: 1,
      title: 'Coordina',
      category: 'Web Application',
      description: 'A Smart project focusing on user-friendly dashboard interfaces for government departments. Developed using Next.js, Tailwind CSS, and React.js.',
      image: '/coordina/coordina.png',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      links: {
        case: '#'
      },
      featured: true,
      screens: [
        '/coordina/1.png',
        '/coordina/2.png',
        '/coordina/3.png',
        '/coordina/4.png',
        '/coordina/5.png',
        '/coordina/6.png',
        '/coordina/7.png',
      ]
    },
    {
      id: 2,
      title: 'Parker',
      category: 'Web Application',
      description: 'A website focusing on the Parker brand and its products. Developed using React.js, Redux, and Firebase.',
      image: '/parker/Parker.png',
      technologies: ['React', 'Firebase', 'Redux'],
      links: {
        case: '#'
      },
      featured: true,
      screens: [
        '/parker/1.png',
        '/parker/2.png',
        '/parker/3.png',
        '/parker/4.png',
        '/parker/5.png',
        '/parker/6.png',
        '/parker/7.png',
        '/parker/8.png',
      ]
    },
    {
      id: 4,
      title: 'The Hockey Review',
      category: 'Web Application',
      description: 'A comprehensive healthcare dashboard for medical professionals with patient management, appointment scheduling, and analytics.',
      image: '/hockeyreview/THR.png',
      technologies: ['Angular', 'Chart.js', 'SCSS', 'PostgreSQL'],
      links: {
        case: '#'
      },
      featured: false,
      screens: [
        '/hockeyreview/1.png',
        '/hockeyreview/2.png',
        '/hockeyreview/3.png',
        '/hockeyreview/4.png',
        '/hockeyreview/5.png',
        '/hockeyreview/6.png',
        '/hockeyreview/7.png',
      ]
    },
    {
      id: 5,
      title: 'Nat Power',
      category: 'Web Application',
      description: 'NatPower is an independent developer of energy projects, delivering innovative, sustainable, and reliable infrastructure to enhance the environment and quality. Developed using Angular.js, Tailwind, SCSS.',
      image: '/NatPower/NatPower.png',
      technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'AWS'],
      links: {
        case: '#'
      },
      featured: false,
      screens: [
        '/NatPower/1.png',
        '/NatPower/2.png',
        '/NatPower/3.png',
        '/NatPower/4.png',
        '/NatPower/5.png',
        '/NatPower/6.png',
      ]
    },
    {
      id: 6,
      title: 'South Australia Tiling',
      category: 'Data Visualization',
      description: 'A website focusing on affordable and stylish bathroom renovation and transformation in Adelaide, South Australia. Offering custom designs, premium renovation packages, and expert advice.',
      image: '/SAT/SAT.png',
      technologies: ['D3.js', 'React', 'Redux', 'Bootstrap'],
      links: {
        case: '#'
      },
      featured: false,
      screens: [
        '/SAT/1.png',
        '/SAT/2.png',
        '/SAT/3.png',
        '/SAT/4.png',
        '/SAT/5.png',
        '/SAT/6.png',
      ]
    }
  ];


  return (
    <div className="min-h-screen pt-20 px-4">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
              My Work
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of projects that demonstrate my passion for creating
              beautiful, functional, and user-centered digital experiences.
            </p>
          </ScrollReveal>
        </div>
      </section>
      {/* Featured Projects */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <ScrollReveal
                key={project.id}
                animation="scale-in"
                delay={index * 200}
              >
                <Card className="group overflow-hidden hover-glow hover-scale border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-muted animate-pulse">
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <img src={project.image} alt={project.title} />
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <Badge className="animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                        {project.category}
                      </Badge>
                      <Badge variant="secondary">Featured</Badge>
                    </div>

                    <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs hover-scale"
                          style={{ animationDelay: `${techIndex * 50}ms` }}
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <Button size="sm" className="flex-1" asChild>
                        <Link to={`/work/${project.id}`}>
                          View Case Study
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="pb-20 bg-card/30">
        <div className="max-w-6xl mx-auto py-20">
          <ScrollReveal>
            <h2 className="text-3xl font-bold mb-12 text-center">All Projects</h2>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ScrollReveal
                key={project.id}
                animation="fade-in-up"
                delay={index * 100}
              >
                <Card className="group overflow-hidden hover-glow hover-scale border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <div className="relative overflow-hidden">
                    <div className="aspect-video bg-muted">
                      <div className="w-full h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <img src={project.image} alt={project.title} />
                        <Eye className="h-8 w-8 text-muted-foreground" />
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-background/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                      <Button size="sm" className="hover-scale">
                        <Link to={`/work/${project.id}`}>
                          <Eye className="h-4 w-4 mr-2" />
                          View
                        </Link>
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <Badge className="mb-2 animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                      {project.category}
                    </Badge>

                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-muted-foreground text-sm mb-3 leading-relaxed line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 text-xs" asChild>
                        <Link to={`/work/${project.id}`}>
                          View Details
                        </Link>
                      </Button>
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

export default Work;