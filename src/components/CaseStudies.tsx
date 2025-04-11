
import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink, Eye, LineChart, Rocket, Users, Code, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Slider } from '@/components/ui/slider';

// Updated to include all competitions data
const caseStudies = [
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
    <section id="case-studies" className="bg-navy-50 section-padding">
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-4 mb-8">
          <h2 className="section-title">Competitions</h2>
          <Link to="/competitions">
            <Button 
              variant="outline" 
              className="border-navy-600 text-navy-700 hover:bg-navy-100 flex items-center gap-2 transition-all duration-300"
            >
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        
        <Carousel 
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full"
          autoplay={true}
          autoplayInterval={5000}
          highlightCenter={true}
        >
          <CarouselContent>
            {caseStudies.map((study, index) => (
              <CarouselItem key={study.id} className="md:basis-1/2 lg:basis-1/3 peer" data-active={index === 1 ? true : false}>
                <Card className="overflow-hidden border-navy-200 transition-all duration-300 hover:shadow-lg h-full group-data-[center-item=true]:shadow-xl">
                  <div className="relative h-48 bg-navy-100">
                    <img 
                      src={study.image} 
                      alt={study.title} 
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${study.color}`}>
                        {study.icon}
                        {study.title}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{study.title}</CardTitle>
                    <CardDescription className="text-navy-600">{study.description}</CardDescription>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {study.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-navy-100 text-navy-700 text-xs px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-end">
                    <Link to={`/competitions#competition-${study.id}`}>
                      <Button variant="ghost" className="text-navy-700 hover:text-navy-900 p-0">
                        View Details <ExternalLink className="ml-1 h-3 w-3" />
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-end mt-4 gap-2">
            <CarouselPrevious className="relative -left-0 top-0 translate-y-0" />
            <CarouselNext className="relative -right-0 top-0 translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default CaseStudies;
