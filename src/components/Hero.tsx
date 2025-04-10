
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-navy-50/50 to-navy-100/50 -z-10"></div>
      
      <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-tight">
            Product <br />
            <span className="text-accent">&</span> Consulting
          </h1>
          
          <p className="text-lg md:text-xl text-navy-700 max-w-lg">
            Transforming ideas into impactful strategies through research, analysis, and innovative thinking.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-navy-800 hover:bg-navy-900 text-white">
              <a href="#case-studies">View My Work</a>
            </Button>
            <Button variant="outline" className="border-navy-800 text-navy-800">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center relative">
          <div className="bg-navy-800 rounded-full h-80 w-80 opacity-10 absolute -right-10 -top-10"></div>
          <div className="bg-accent rounded-full h-60 w-60 opacity-10 absolute -left-5 -bottom-5"></div>
          <div className="relative bg-gradient-to-br from-navy-100 to-navy-50 rounded-2xl p-6 shadow-lg border border-white/20 backdrop-blur-sm z-10">
            <div className="text-navy-900 font-display">
              <h2 className="text-2xl font-bold mb-3">Luv Agrawal</h2>
              <p className="text-navy-700 font-medium">IIT (BHU), Varanasi</p>
              <p className="text-navy-600 mb-4">Industrial Chemistry (IDD)</p>
              
               <div className="border-t border-navy-200 pt-4 mt-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-navy-700">Product Solutions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-navy-700">UI/UX Research</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-navy-700">Market Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-accent rounded-full"></span>
                    <span className="text-navy-700">Growth Hacking</span>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll Down"
      >
        <ArrowDown className="text-navy-800" />
      </a>
    </section>
  );
};

export default Hero;
