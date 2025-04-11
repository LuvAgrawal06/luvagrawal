
import React, { useEffect, useRef } from 'react';
import { Award, Book, BookOpen, Briefcase } from 'lucide-react';
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
    <section id="about" className="bg-white section-padding" ref={sectionRef}>
      <div className="container max-w-6xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid md:grid-cols-2 gap-12 mt-8">
          <div className="fade-in-bottom">
            <h3 className="text-2xl font-bold mb-4 text-navy-800">Who I Am</h3>
            <p className="text-navy-700 mb-6 leading-relaxed">
              I'm a passionate business strategist and product enthusiast currently pursuing an Integrated Dual Degree in Industrial Chemistry at IIT (BHU), Varanasi.
            </p>
            <p className="text-navy-700 mb-6 leading-relaxed">
              My academic excellence is complemented by practical experience in product management, Consulting and strategic case competitions, where I've consistently demonstrated my ability to analyze complex problems and develop innovative solutions.
            </p>
            <p className="text-navy-700 leading-relaxed">
              I'm driven by a curiosity about consumer psychology and a passion for creating products and strategies that truly resonate with users while driving business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-4">
            <Card className="fade-in-bottom bg-navy-50 border-navy-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-navy-100 p-3 rounded-full">
                    <BookOpen className="text-navy-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-navy-800">Education</h4>
                    <p className="text-navy-700 mt-1">IIT (BHU), Varanasi</p>
                    <p className="text-navy-600">Integrated Dual Degree in Industrial Chemistry</p>
                    <div className="mt-2 inline-block bg-navy-100 px-3 py-1 rounded-full text-sm font-medium text-navy-700">
                      CPI: 9.29
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="fade-in-bottom bg-navy-50 border-navy-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-navy-100 p-3 rounded-full">
                    <Briefcase className="text-navy-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-navy-800">Experience</h4>
                    <p className="text-navy-700 mt-1">Product Management Internships</p>
                    <p className="text-navy-600">Strategic Case Competitions</p>
                    <div className="mt-2 inline-block bg-navy-100 px-3 py-1 rounded-full text-sm font-medium text-navy-700">
                      Real-world applications
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="fade-in-bottom bg-navy-50 border-navy-100">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-navy-100 p-3 rounded-full">
                    <Award className="text-navy-700" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-navy-800">Achievements</h4>
                    <p className="text-navy-700 mt-1">National Winner at Prodnosis 5.0 at Technex'25</p>
                    <p className="text-navy-700 mt-1">National Finalist at PMx'25 & Case-O-Nova 6.0</p>
                    <p className="text-navy-600">Multiple National Runner-Ups at Several Case Competitions</p>
                    <div className="mt-2 inline-block bg-navy-100 px-3 py-1 rounded-medium text-sm font-medium text-navy-700">
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
