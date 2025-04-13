
import React, { useEffect } from 'react';
import { Wrench, Lightbulb, LineChart, PenTool, Users, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Canva", "Figma", "Framer"],
    color: "bg-blue-600",
    textColor: "text-white",
  },
  {
    title: "Skills",
    icon: <LineChart className="h-5 w-5" />,
    skills: ["UI/UX Research", "Market Research", "Prototyping"],
    color: "bg-green-600",
    textColor: "text-white",
  },
  {
    title: "Interests",
    icon: <Lightbulb className="h-5 w-5" />,
    skills: ["Consumer Psychology", "Growth Hacking"],
    color: "bg-amber-600",
    textColor: "text-white",
  }
];

const Skills = () => {
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
    <section id="skills" className="bg-gradient-to-b from-slate-50 to-slate-100 section-padding py-24">
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-2 block">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="fade-in-bottom border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className={`${category.color} ${category.textColor} rounded-t-lg py-6`}>
                <div className="flex items-center gap-2">
                  {category.icon}
                  <CardTitle>{category.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-3">
                      <div className={`h-2 w-2 rounded-full ${category.color}`}></div>
                      <span className="text-slate-700 font-medium">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="fade-in-bottom bg-white p-8 rounded-lg shadow-lg border border-slate-200 text-center">
              <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <PenTool className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mt-5">Product Design</h3>
              <p className="text-slate-600 mt-3">Creating user-centered designs that solve real problems and enhance user experience</p>
            </div>
            
            <div className="fade-in-bottom bg-white p-8 rounded-lg shadow-lg border border-slate-200 text-center" style={{ animationDelay: "150ms" }}>
              <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mt-5">Market Research</h3>
              <p className="text-slate-600 mt-3">Analyzing market trends, consumer behavior, and competitive landscapes</p>
            </div>
            
            <div className="fade-in-bottom bg-white p-8 rounded-lg shadow-lg border border-slate-200 text-center" style={{ animationDelay: "300ms" }}>
              <div className="bg-amber-100 text-amber-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mt-5">Strategic Consulting</h3>
              <p className="text-slate-600 mt-3">Developing comprehensive business strategies and roadmaps for growth</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center fade-in-bottom">
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Continuous Learning & Growth</h3>
          <p className="text-slate-600 max-w-2xl mx-auto">
            I'm constantly expanding my skillset through hands-on projects, case competitions, 
            and staying updated with the latest industry trends and best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
