
import React, { useEffect } from 'react';
import { ArrowRight, ExternalLink, Eye, LineChart } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    id: 1,
    title: "Prodes Learn",
    description: "Conducted in-depth UX research and developed a prototype to improve the learning experience platform.",
    image: "/placeholder.svg",
    tags: ["UX Research", "Prototyping", "User Testing"],
    icon: <Eye className="h-5 w-5" />,
    color: "bg-blue-100 text-blue-700",
  },
  {
    id: 2,
    title: "Indian Healthcare Gap Analysis",
    description: "Developed a comprehensive monetization strategy and created wireframes for a healthcare solution.",
    image: "/placeholder.svg",
    tags: ["Gap Analysis", "Monetization", "Wireframing"],
    icon: <LineChart className="h-5 w-5" />,
    color: "bg-green-100 text-green-700",
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
          <h2 className="section-title">Case Studies</h2>
          <Button variant="outline" className="border-navy-600 text-navy-700 flex items-center gap-2">
            View All
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudies.map((study) => (
            <Card key={study.id} className="fade-in-bottom overflow-hidden border-navy-200 transition-all duration-300 hover:shadow-lg">
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
                <Button variant="ghost" className="text-navy-700 hover:text-navy-900 p-0">
                  Read Case Study <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
