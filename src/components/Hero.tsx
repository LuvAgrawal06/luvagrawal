
import React from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16 bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-fixed opacity-5 -z-10"></div>
      
      <div className="container max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-fadeIn">
          <div>
            <span className="text-sm uppercase tracking-wider text-slate-500 font-medium mb-4 block">Luv Agrawal • Product & Consulting</span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
              Strategic <span className="text-blue-600">Problem Solver</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-slate-600 max-w-lg leading-relaxed">
            Transforming complex business challenges into strategic opportunities through research, analysis, and innovative thinking.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button className="bg-slate-800 hover:bg-slate-900 text-white px-6 py-6 h-auto rounded-md">
              <a href="#case-studies" className="flex items-center">
                View My Work <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" className="border-slate-300 hover:border-slate-400 text-slate-700 hover:bg-slate-100 px-6 py-6 h-auto rounded-md">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
        
        <div className="hidden md:flex justify-center relative">
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute left-20 top-20 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
          
          <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-slate-100 backdrop-blur-sm z-10">
            <div className="text-slate-800">
              <h2 className="text-2xl font-bold mb-3">Luv Agrawal</h2>
              <p className="text-slate-600 font-medium">IIT (BHU), Varanasi</p>
              <p className="text-slate-500 mb-6">Industrial Chemistry (IDD)</p>
              
              <div className="border-t border-slate-200 pt-6 mt-6">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
                    <span className="text-slate-700 font-medium">Product Solutions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-purple-500 rounded-full"></span>
                    <span className="text-slate-700 font-medium">UI/UX Research</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                    <span className="text-slate-700 font-medium">Market Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 bg-amber-500 rounded-full"></span>
                    <span className="text-slate-700 font-medium">Growth Hacking</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce bg-white p-2 rounded-full shadow-md"
        aria-label="Scroll Down"
      >
        <ChevronDown className="text-slate-600" />
      </a>
      
      <style>
        {`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        `}
      </style>
    </section>
  );
};

export default Hero;
