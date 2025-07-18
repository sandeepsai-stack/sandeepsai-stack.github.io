import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const WorkDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const projectId = Number(id);

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
            id: 3,
            title: 'Professional Portfolio',
            category: 'Web Design',
            description: 'A website providing honest reviews of hockey teams from youth to junior levels, shared by former players and parents. Developed using Angular.js, SCSS.',
            image: '/api/placeholder/600/400',
            technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS'],
            links: {
                case: '#'
            },
            featured: false,
            screens: [] // No images available
        },
        {
            id: 4,
            title: 'The Hockey Review',
            category: 'Web Application',
            description: 'A comprehensive healthcare dashboard for medical professionals with patient management, appointment scheduling, and analytics.',
            image: '"/hockeyreview/THR.png',
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

    const project = projects.find((p: any) => p.id === projectId);
    const [currentScreen, setCurrentScreen] = useState(0);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <h2 className="text-2xl font-bold mb-4">Project Not Found</h2>
                <Button onClick={() => navigate(-1)}>Go Back</Button>
            </div>
        );
    }

    const screens = project.screens || [];
    const hasScreens = screens.length > 0;

    const handlePrev = () => {
        setCurrentScreen((prev) => (prev === 0 ? screens.length - 1 : prev - 1));
    };
    const handleNext = () => {
        setCurrentScreen((prev) => (prev === screens.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="min-h-screen pt-20 px-4 max-w-3xl mx-auto">
            <Button variant="outline" className="mb-6" onClick={() => navigate(-1)}>
                <ArrowLeft className="w-4 h-4 mr-2" /> Back to Work
            </Button>
            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                        <Badge>{project.category}</Badge>
                        {project.featured && <Badge variant="secondary">Featured</Badge>}
                    </div>
                    <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech: string) => (
                            <Badge key={tech} variant="outline" className="text-xs">{tech}</Badge>
                        ))}
                    </div>

                    {hasScreens && (
                        <div className="mb-6">
                            <div className="relative w-full aspect-video bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                                <img
                                    src={screens[currentScreen]}
                                    alt={`Screen ${currentScreen + 1}`}
                                    className="object-contain w-full h-full transition-all duration-300"
                                />
                                {screens.length > 1 && (
                                    <>
                                        <Button
                                            variant="ghost"
                                            className="absolute left-2 top-1/2 -translate-y-1/2 z-10"
                                            onClick={handlePrev}
                                            size="icon"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            className="absolute right-2 top-1/2 -translate-y-1/2 z-10"
                                            onClick={handleNext}
                                            size="icon"
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </Button>
                                    </>
                                )}
                            </div>
                            <div className="flex justify-center gap-2 mt-2">
                                {screens.map((_, idx) => (
                                    <button
                                        key={idx}
                                        className={`w-2 h-2 rounded-full ${idx === currentScreen ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                                        onClick={() => setCurrentScreen(idx)}
                                        aria-label={`Go to screen ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default WorkDetail; 