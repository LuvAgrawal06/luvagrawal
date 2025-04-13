
import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink, Eye, LineChart, Rocket, Users, Code, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

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
    <section id="case-studies" className="bg-gradient-to-b from-slate-50 to-slate-100 section-padding py-20">
      <div className="container max-w-6xl mx-auto">
        <div className="flex justify-between items-end flex-wrap gap-4 mb-12">
          <div>
            <span className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-2 block">Portfolio</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 border-b-2 border-slate-800 pb-2">Case Competitions</h2>
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {caseStudies.map((study) => (
            <Card 
              key={study.id} 
              className="overflow-hidden bg-white border-0 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full fade-in-bottom"
            >
              <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-slate-900/20"></div>
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium shadow-sm ${study.color}`}>
                    {study.icon}
                    {study.title}
                  </span>
                </div>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-slate-800">{study.title}</CardTitle>
                <CardDescription className="text-slate-600">{study.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="pb-2">
                <div className="flex flex-wrap gap-2">
                  {study.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-md font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                  {study.tags.length > 3 && (
                    <span className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-md font-medium">
                      +{study.tags.length - 3} more
                    </span>
                  )}
                </div>
              </CardContent>
              
              <CardFooter className="pt-2">
                <Link to={`/competition/${study.id}`} className="w-full">
                  <Button 
                    variant="ghost" 
                    className="text-slate-700 hover:text-slate-900 w-full group relative"
                  >
                    <span className="relative z-10 flex items-center justify-center w-full">
                      View Details <ExternalLink className="ml-1 h-3 w-3" />
                    </span>
                    <span className="absolute inset-0 rounded bg-slate-100 opacity-0 transform scale-x-50 transition-all group-hover:opacity-100 group-hover:scale-x-100"></span>
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
