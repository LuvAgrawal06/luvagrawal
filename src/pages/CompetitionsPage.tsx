
import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Eye, LineChart, Rocket, Users, Code, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const allCompetitions = [
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
    title: "Prodhive B.A.S.H 7.0",
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
    title: "PMx'25",
    description: "Developed a product roadmap and go-to-market strategy for an AI-powered productivity tool.",
    image: "/placeholder.svg",
    tags: ["Product Management", "Roadmapping", "GTM Strategy"],
    icon: <Code className="h-5 w-5" />,
    color: "bg-red-100 text-red-700",
  },
  {
    id: 6,
    title: "Case-O-Nova 6.0",
    description: "Analyzed business case and proposed innovative solution for supply chain optimization.",
    image: "/placeholder.svg",
    tags: ["Business Strategy", "Supply Chain", "Innovation"],
    icon: <Lightbulb className="h-5 w-5" />,
    color: "bg-yellow-100 text-yellow-700",
  },
];

const CompetitionsPage = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Handle fade-in animations
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
    <div className="min-h-screen bg-navy-50">
      <Navbar />
      
      <main className="pt-24 pb-16 px-4 md:px-8 lg:px-0">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center mb-8 gap-2">
            <Link to="/" className="text-navy-600 hover:text-navy-800 transition-colors">
              <Button variant="ghost" className="flex items-center gap-2 p-0">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-navy-800 mb-6">Competitions</h1>
          <p className="text-navy-600 text-lg mb-8 max-w-3xl">
            A showcase of the various competitions I've participated in, highlighting my problem-solving approach and creative solutions.
          </p>
          
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-navy-800 mb-6">Featured Competitions</h2>
            <Carousel 
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {allCompetitions.map((competition) => (
                  <CarouselItem key={competition.id} className="pl-4 sm:basis-1/2 lg:basis-1/3">
                    <Card className="overflow-hidden border-navy-200 transition-all duration-300 hover:shadow-lg h-full">
                      <div className="relative h-48 bg-navy-100">
                        <img 
                          src={competition.image} 
                          alt={competition.title} 
                          className="w-full h-full object-cover opacity-60"
                        />
                        <div className="absolute top-4 left-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${competition.color}`}>
                            {competition.icon}
                            {competition.title}
                          </span>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl">{competition.title}</CardTitle>
                        <CardDescription className="text-navy-600">{competition.description}</CardDescription>
                      </CardHeader>
                      
                      <CardContent>
                        <div className="flex flex-wrap gap-2">
                          {competition.tags.map((tag) => (
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
                        <Button variant="ghost" className="text-navy-700 hover:text-navy-900 p-0">
                          View Details <ExternalLink className="ml-1 h-3 w-3" />
                        </Button>
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
          
          <h2 className="text-2xl font-semibold text-navy-800 mb-6">All Competitions</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allCompetitions.map((competition) => (
              <Card 
                key={competition.id} 
                className="fade-in-bottom overflow-hidden border-navy-200 transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative h-48 bg-navy-100">
                  <img 
                    src={competition.image} 
                    alt={competition.title} 
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm ${competition.color}`}>
                      {competition.icon}
                      {competition.title}
                    </span>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl">{competition.title}</CardTitle>
                  <CardDescription className="text-navy-600">{competition.description}</CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {competition.tags.map((tag) => (
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
                  <Button variant="ghost" className="text-navy-700 hover:text-navy-900 p-0">
                    View Details <ExternalLink className="ml-1 h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CompetitionsPage;
