
import React, { useEffect, useRef } from 'react';
import { Award, BookOpen, Briefcase, User, Target, PenTool, GraduationCap, Heart, Globe, Code, LineChart } from 'lucide-react';
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
    <section id="about" className="bg-gradient-to-b from-white to-slate-50 section-padding py-24" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-2 block">Introduction</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Side */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-32 h-32 bg-blue-100 rounded-full opacity-70"></div>
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-32 h-32 bg-green-100 rounded-full opacity-70"></div>
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-800">Luv Agrawal</h3>
                    <p className="text-blue-600 font-medium">Product Strategist & Consultant</p>
                  </div>
                </div>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">IIT (BHU), Varanasi</h4>
                      <p className="text-slate-600">Integrated Dual Degree in Industrial Chemistry</p>
                      <span className="text-sm font-medium text-blue-600">CPI: 9.29</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Briefcase className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Experience</h4>
                      <p className="text-slate-600">Product Management Internships</p>
                      <p className="text-slate-600">Strategic Case Competitions</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-blue-600 mt-1" />
                    <div>
                      <h4 className="font-semibold text-slate-800">Achievements</h4>
                      <p className="text-slate-600">7x National Finalist</p>
                      <p className="text-slate-600">National Winner at Prodnosis 5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Side */}
          <div className="lg:col-span-7 space-y-8">
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
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-10">
              <Card className="fade-in-bottom border-0 shadow-lg bg-gradient-to-br from-white to-slate-50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <Target className="h-8 w-8 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-800">Strategic Thinking</h4>
                    <p className="text-slate-600">Data-driven decision making with a focus on long-term business impact</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="fade-in-bottom border-0 shadow-lg bg-gradient-to-br from-white to-slate-50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <Code className="h-8 w-8 text-green-600" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-800">Problem Solving</h4>
                    <p className="text-slate-600">Breaking down complex challenges into actionable insights and solutions</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="fade-in-bottom border-0 shadow-lg bg-gradient-to-br from-white to-slate-50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-2">
                      <LineChart className="h-8 w-8 text-purple-600" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-800">Data Analysis</h4>
                    <p className="text-slate-600">Extracting meaningful insights from data to inform strategy and execution</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="fade-in-bottom border-0 shadow-lg bg-gradient-to-br from-white to-slate-50 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-2">
                      <Globe className="h-8 w-8 text-amber-600" />
                    </div>
                    <h4 className="font-bold text-lg text-slate-800">Global Perspective</h4>
                    <p className="text-slate-600">Understanding diverse markets and adapting strategies to various contexts</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
