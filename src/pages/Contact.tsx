// Update this page (the content is just a fallback if you fail to update the page)
import ScrollReveal from '@/components/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      value: 'bsandeep2988@gmail.com',
      link: 'mailto:bsandeep2988@gmail.com',
      description: 'Drop me a line anytime'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      value: 'Dallas, TX',
      link: '#',
      description: 'Open to remote opportunities'
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4">
      <section className="py-20">
        <div className="max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-gradient">
              Get In Touch
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to start your next project? Let's discuss how we can work together 
              to bring your vision to life.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <ScrollReveal 
                key={method.title} 
                animation="scale-in"
                delay={index * 150}
              >
                <a 
                  href={method.link}
                  className="block"
                >
                  <Card className="text-center hover-glow hover-scale border-border/50 bg-card/50 backdrop-blur-sm h-full transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="text-primary mb-4 flex justify-center animate-float" style={{ animationDelay: `${index * 0.5}s` }}>
                        {method.icon}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                      <p className="text-primary font-medium mb-2">{method.value}</p>
                      <p className="text-muted-foreground text-sm">
                        {method.description}
                      </p>
                    </CardContent>
                  </Card>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
