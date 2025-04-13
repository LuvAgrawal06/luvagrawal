
import React, { useEffect } from 'react';
import { ArrowLeft, ExternalLink, Eye, LineChart, Rocket, Users, Code, Lightbulb, ChevronRight } from 'lucide-react';
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
    achievement: "1st Runner-Up at E-Summit'25 IIT BHU"
  },
  {
    id: 2,
    title: "Prodnosis 5.0",
    description: "Developed a comprehensive monetization strategy and created wireframes for a healthcare solution.",
    image: "/placeholder.svg",
    tags: ["Gap Analysis", "Monetization", "Wireframing"],
    icon: <LineChart className="h-5 w-5" />,
    color: "bg-green-100 text-green-700",
    achievement: "National Winner at Technex'25"
  },
  {
    id: 3,
    title: "Prodhive B.A.S.H 7.0",
    description: "Designed and pitched a product solution for sustainable urban mobility challenges.",
    image: "/placeholder.svg",
    tags: ["Product Strategy", "Market Research", "Pitch Deck"],
    icon: <Rocket className="h-5 w-5" />,
    color: "bg-purple-100 text-purple-700",
    achievement: "1st Runner-Up at B.A.S.H. 7.0 IIT BHU"
  },
  {
    id: 4,
    title: "ADventure",
    description: "Created an innovative advertising campaign strategy for a consumer electronics brand.",
    image: "/placeholder.svg",
    tags: ["Marketing", "Creative Strategy", "Campaign Analysis"],
    icon: <Users className="h-5 w-5" />,
    color: "bg-orange-100 text-orange-700",
    achievement: "1st Runner-Up at E-Summit'25 IIT BHU"
  },
  {
    id: 5,
    title: "PMx'25",
    description: "Developed a product roadmap and go-to-market strategy for an AI-powered productivity tool.",
    image: "/placeholder.svg",
    tags: ["Product Management", "Roadmapping", "GTM Strategy"],
    icon: <Code className="h-5 w-5" />,
    color: "bg-red-100 text-red-700",
    achievement: "National Finalist at IIT G"
  },
  {
    id: 6,
    title: "Case-O-Nova 6.0",
    description: "Analyzed business case and proposed innovative solution for supply chain optimization.",
    image: "/placeholder.svg",
    tags: ["Business Strategy", "Supply Chain", "Innovation"],
    icon: <Lightbulb className="h-5 w-5" />,
    color: "bg-yellow-100 text-yellow-700",
    achievement: "National Finalist, Ranked 4th at IIM B"
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <Navbar />
      
      <main className="pt-28 pb-16 px-4 md:px-8 lg:px-0">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center mb-8 gap-2">
            <Link to="/" className="text-slate-600 hover:text-slate-800 transition-colors">
              <Button variant="ghost" className="flex items-center gap-2 p-0">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
          
          <div className="mb-16">
            <span className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-2 block">Portfolio</span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 border-b-2 border-slate-800 pb-2 inline-block">Case Competitions</h1>
            <p className="text-slate-600 text-lg mt-6 max-w-3xl">
              A showcase of the various competitions I've participated in, highlighting my problem-solving approach and creative solutions.
            </p>
          </div>
          
          <div id="featured-competitions" className="mb-24 scroll-mt-24">
            <h2 className="text-2xl font-semibold text-slate-800 mb-8">Featured Competitions</h2>
            <Carousel 
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
              autoplay={true}
              autoplayInterval={5000}
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {allCompetitions.map((competition, index) => (
                  <CarouselItem key={competition.id} className="pl-2 md:pl-4 sm:basis-1/2 lg:basis-1/2">
                    <Card className="overflow-hidden bg-white border-0 transition-all duration-300 hover:translate-y-[-5px] h-full shadow-md hover:shadow-xl">
                      <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-slate-900/20 z-10"></div>
                        <img 
                          src={competition.image} 
                          alt={competition.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 z-20">
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
                          {competition.tags.map((tag) => (
                            <span 
                              key={tag} 
                              className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-md font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      
                      <CardFooter className="pt-2">
                        <Link to={`/competition/${competition.id}`} className="w-full">
                          <Button 
                            variant="ghost" 
                            className="text-slate-700 hover:text-slate-900 w-full group relative"
                          >
                            <span className="relative z-10 flex items-center justify-center w-full font-medium">
                              View Details <ExternalLink className="ml-1 h-3 w-3" />
                            </span>
                            <span className="absolute inset-0 rounded bg-slate-100 opacity-0 transform scale-x-50 transition-all group-hover:opacity-100 group-hover:scale-x-100 group-focus:opacity-100 group-focus:scale-x-100"></span>
                          </Button>
                        </Link>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-end mt-6 gap-2">
                <CarouselPrevious className="relative -left-0 top-0 translate-y-0 bg-white border-slate-200 hover:bg-slate-100 text-slate-700" />
                <CarouselNext className="relative -right-0 top-0 translate-y-0 bg-white border-slate-200 hover:bg-slate-100 text-slate-700" />
              </div>
            </Carousel>
          </div>
          
          <div id="all-competitions" className="scroll-mt-24">
            <h2 className="text-2xl font-semibold text-slate-800 mb-8">All Competitions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {allCompetitions.map((competition) => (
                <Card 
                  key={competition.id} 
                  id={`competition-${competition.id}`}
                  className="fade-in-bottom overflow-hidden bg-white border-0 transition-all duration-300 hover:translate-y-[-5px] shadow-md hover:shadow-xl scroll-mt-24"
                >
                  <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700/10 to-slate-900/20 z-10"></div>
                    <img 
                      src={competition.image} 
                      alt={competition.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 z-20">
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
                  
                  <CardContent>
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-slate-700 mb-2">Achievement:</h4>
                      <p className="text-slate-800 font-semibold">{competition.achievement}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {competition.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded-md font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                  
                  <CardFooter className="flex justify-between">
                    <span className="text-sm text-slate-500">Date: 2023</span>
                    <Link to={`/competition/${competition.id}`} className="group relative">
                      <Button 
                        variant="ghost" 
                        className="text-slate-700 hover:text-slate-900 relative z-10 flex items-center"
                      >
                        View Details <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <span className="absolute inset-0 rounded bg-slate-100 opacity-0 transform scale-x-50 transition-all group-hover:opacity-100 group-hover:scale-x-100 group-focus:opacity-100 group-focus:scale-x-100"></span>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" className="border border-slate-200 hover:bg-slate-100" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive className="bg-slate-800 hover:bg-slate-700">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-slate-700 border border-slate-200 hover:bg-slate-100">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" className="text-slate-700 border border-slate-200 hover:bg-slate-100">3</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" className="border border-slate-200 hover:bg-slate-100" />
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
