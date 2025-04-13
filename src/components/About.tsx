
import React, { useEffect, useRef } from 'react';
import { Award, Book, BookOpen, Briefcase, User, Target, PenTool } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="about" className="bg-white section-padding py-24" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-2 block">Introduction</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 mt-8">
          <div className="fade-in-bottom">
            <h3 className="text-2xl font-bold mb-6 text-slate-800 border-l-4 border-blue-600 pl-4">Who I Am</h3>
            <p className="text-slate-600 mb-6 leading-relaxed">
              I'm a passionate business strategist and product enthusiast currently pursuing an Integrated Dual Degree in Industrial Chemistry at IIT (BHU), Varanasi.
            </p>
            <p className="text-slate-600 mb-6 leading-relaxed">
              My academic excellence is complemented by practical experience in product management, consulting and strategic case competitions, where I've consistently demonstrated my ability to analyze complex problems and develop innovative solutions.
            </p>
            <p className="text-slate-600 leading-relaxed">
              I'm driven by a curiosity about consumer psychology and a passion for creating products and strategies that truly resonate with users while driving business growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <User className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="font-bold mt-3 text-slate-800">Creative Approach</h4>
                <p className="text-sm text-slate-500 mt-1">Innovative problem-solving</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="font-bold mt-3 text-slate-800">Strategic Thinking</h4>
                <p className="text-sm text-slate-500 mt-1">Data-driven decisions</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <Card className="fade-in-bottom bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-5">
                  <div className="bg-blue-100 p-4 rounded-full">
                    <BookOpen className="text-blue-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">Education</h4>
                    <p className="text-slate-700 mt-1">IIT (BHU), Varanasi</p>
                    <p className="text-slate-500">Integrated Dual Degree in Industrial Chemistry</p>
                    <div className="mt-3 inline-block bg-blue-50 px-3 py-1 rounded-md text-sm font-medium text-blue-600">
                      CPI: 9.29
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="fade-in-bottom bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-5">
                  <div className="bg-purple-100 p-4 rounded-full">
                    <Briefcase className="text-purple-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">Experience</h4>
                    <p className="text-slate-700 mt-1">Product Management Internships</p>
                    <p className="text-slate-500">Strategic Case Competitions</p>
                    <div className="mt-3 inline-block bg-purple-50 px-3 py-1 rounded-md text-sm font-medium text-purple-600">
                      Real-world applications
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="fade-in-bottom bg-white border border-slate-200 shadow-md hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-5">
                  <div className="bg-amber-100 p-4 rounded-full">
                    <Award className="text-amber-600 h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-800">Achievements</h4>
                    <p className="text-slate-700 mt-1">National Winner at Prodnosis 5.0</p>
                    <p className="text-slate-500">National Finalist at PMx'25 & Case-O-Nova 6.0</p>
                    <p className="text-slate-500">Multiple National Runner-Ups in Case Competitions</p>
                    <div className="mt-3 inline-block bg-amber-50 px-3 py-1 rounded-md text-sm font-medium text-amber-600">
                      7x National Finalist
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
