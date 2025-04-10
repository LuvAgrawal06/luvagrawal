
import React, { useEffect } from 'react';
import { Wrench, Lightbulb, LineChart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const skillCategories = [
  {
    title: "Tools",
    icon: <Wrench className="h-5 w-5" />,
    skills: ["Canva", "Figma", "Framer"],
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Skills",
    icon: <LineChart className="h-5 w-5" />,
    skills: ["UI/UX Research", "Market Research", "Prototyping"],
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Interests",
    icon: <Lightbulb className="h-5 w-5" />,
    skills: ["Consumer Psychology", "Growth Hacking", "Prototyping"],
    color: "bg-amber-100 text-amber-700",
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
    <section id="skills" className="bg-navy-50 section-padding">
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title">Skills & Expertise</h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.title}
              className="fade-in-bottom border-none shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className={`${category.color} rounded-t-lg`}>
                <div className="flex items-center gap-2">
                  {category.icon}
                  <CardTitle>{category.title}</CardTitle>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-navy-400"></div>
                      <span className="text-navy-700">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center fade-in-bottom">
          <h3 className="text-xl font-bold text-navy-800 mb-4">Continuous Learning & Growth</h3>
          <p className="text-navy-700 max-w-2xl mx-auto">
            I'm constantly expanding my skillset through hands-on projects, case competitions, 
            and staying updated with the latest industry trends and best practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
