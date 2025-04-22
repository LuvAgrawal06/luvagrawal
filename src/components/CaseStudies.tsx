import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink, Eye, LineChart, Rocket, Users, Code, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const competitions = [
  {
    id: 1,
    title: "Design Rush",
    description: "Conducted in-depth UX research and developed a prototype to improve the learning experience platform.",
    image: "/placeholder.svg",
    tags: ["UX Research", "Prototyping", "User Testing"],
    icon: <Eye className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Prodnosis 5.0",
    description: "Developed a comprehensive monetization strategy and created wireframes for a healthcare solution.",
    image: "/placeholder.svg",
    tags: ["Gap Analysis", "Monetization", "Wireframing"],
    icon: <LineChart className="h-5 w-5" />,
    color: "bg-green-100 text-green-700",
  },
  {
    id: 3,
    title: "Prodhive (B.A.S.H 7.0)",
    description: "Designed and pitched a product solution for sustainable urban mobility challenges.",
    image: "/placeholder.svg",
    tags: ["Product Strategy", "Market Research", "Pitch Deck"],
    icon: <Rocket className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-700",
  },
  {
    id: 4,
    title: "ADventure",
    description: "Created an innovative advertising campaign strategy for a consumer electronics brand.",
    image: "/placeholder.svg",
    tags: ["Marketing", "Creative Strategy", "Campaign Analysis"],
    icon: <Users className="h-5 w-5" />,
    color: "bg-orange-100 text-orange-700",
  },
  {
    id: 5,
    title: "The Product Management Expedition",
    description: "Developed a product roadmap and go-to-market strategy for Zomato.",
    image: "/placeholder.svg",
    tags: ["Product Management", "Roadmapping", "Supply Chain", "Go To Market Strategy"],
    icon: <Code className="h-5 w-5" />,
    color: "bg-red-100 text-red-700",
  },
  {
    id: 6,
    title: "Case-O-Nova 6.0",
    description: "Analyzed business case and proposed innovative solution for supply chain optimization.",
    image: "/placeholder.svg",
    tags: ["Business Strategy", "Supply Chain", "Innovation", "Go To Market Strategy"],
    icon: <Lightbulb className="h-5 w-5" />,
    color: "bg-yellow-100 text-yellow-700",
  },
];

const CaseStudies = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.fade-in-bottom');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="competitions" className="bg-gradient-to-b from-slate-50 to-slate-100 section-padding py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
          <div>
            <span className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 border-b-2 border-slate-800 pb-2">Competitions</h2>
          </div>
          <Link to="/competitions">
            <Button 
              variant="outline" 
              className="border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-100 flex items-center gap-2 transition-all duration-300"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <Carousel
          className="w-full mt-10"
          opts={{
            align: "start",
            loop: true,
          }}
          autoplay={true}
          autoplayInterval={5000}
        >
          <div className="flex items-center justify-between mb-8">
            <div className="text-center w-full">
              <p className="text-slate-600 italic mb-6">Slide to explore my competition portfolio</p>
            </div>
          </div>
          <CarouselContent className="px-4">
            {competitions.map((competition) => (
              <CarouselItem key={competition.id} className="basis-full md:basis-1/2 lg:basis-1/2 pl-4">
                <Card 
                  className="overflow-hidden bg-white border-0 transition-all duration-300 hover:-translate-y-2 h-full fade-in-bottom"
                >
                  <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-slate-900/20"></div>
                    <img 
                      src={competition.image} 
                      alt={competition.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium shadow-sm ${competition.color}`}>
                        {competition.icon}
                        {competition.title}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-slate-800">{competition.title}</CardTitle>
                    <CardDescription className="text-slate-600">{competition.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pb-2">
                    <div className="flex flex-wrap gap-2">
                      {competition.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                      {competition.tags.length > 3 && (
                        <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-md font-medium">
                          +{competition.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="pt-2">
                    <Link to={`/competition/${competition.id}`} className="w-full">
                      <Button 
                        variant="ghost" 
                        className="text-slate-700 hover:text-slate-900 w-full group relative p-0 h-auto min-h-0 bg-transparent border-0 shadow-none"
                      >
                        <span className="relative z-10 flex items-center justify-center w-full underline decoration-2 decoration-blue-700 underline-offset-4 transition-colors group-hover:text-blue-700 group-hover:decoration-blue-700" style={{textDecoration: "underline"}}>
                          View Details <ExternalLink className="ml-1 h-3 w-3" />
                        </span>
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center justify-center mt-8 gap-4">
            <CarouselPrevious className="static transform-none" />
            <CarouselNext className="static transform-none" />
          </div>
        </Carousel>

        <div className="flex justify-center mt-12">
          <Link to="/competitions" className="inline-block">
            <Button 
              className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-2 rounded-md flex items-center gap-2"
            >
              View All Competitions
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
