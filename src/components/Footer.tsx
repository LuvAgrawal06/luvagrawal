import React from 'react';
import { Linkedin, Mail, Phone, ChevronRight, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-blue-600 text-white w-10 h-10 rounded-md flex items-center justify-center text-lg font-bold">L</span>
              <span className="text-xl font-bold">Luv Agrawal</span>
            </div>
            <p className="text-slate-300 mb-6">
              Business Strategist, Product & Consulting Enthusiast focused on creating impactful solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com/in/luv-agrawal-41119a30b"
                target="_blank"
                rel="noopener noreferrer" 
                className="bg-slate-800 hover:bg-blue-600 transition-colors p-2 rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="mailto:luv.agrawal.chy24@itbhu.ac.in" 
                className="bg-slate-800 hover:bg-blue-600 transition-colors p-2 rounded-full"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="tel:+916395989230" 
                className="bg-slate-800 hover:bg-blue-600 transition-colors p-2 rounded-full"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-slate-700">Quick Links</h4>
            <nav className="flex flex-col space-y-3">
              <a href="#home" className="text-slate-300 hover:text-white transition-colors flex items-center">
                <ChevronRight className="h-4 w-4 mr-2" /> Home
              </a>
              <a href="#about" className="text-slate-300 hover:text-white transition-colors flex items-center">
                <ChevronRight className="h-4 w-4 mr-2" /> About
              </a>
              <a href="#case-studies" className="text-slate-300 hover:text-white transition-colors flex items-center">
                <ChevronRight className="h-4 w-4 mr-2" /> Case Studies
              </a>
              <a href="#achievements" className="text-slate-300 hover:text-white transition-colors flex items-center">
                <ChevronRight className="h-4 w-4 mr-2" /> Achievements
              </a>
              <a href="#skills" className="text-slate-300 hover:text-white transition-colors flex items-center">
                <ChevronRight className="h-4 w-4 mr-2" /> Skills
              </a>
            </nav>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-slate-700">Contact Info</h4>
            <div className="flex flex-col space-y-4">
              <a 
                href="mailto:luv.agrawal.chy24@itbhu.ac.in" 
                className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <Mail className="h-5 w-5 mt-0.5 text-blue-400 group-hover:text-blue-300" />
                <span>luv.agrawal.chy24@itbhu.ac.in</span>
              </a>
              
              <a 
                href="tel:+916395989230" 
                className="flex items-start gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <Phone className="h-5 w-5 mt-0.5 text-blue-400 group-hover:text-blue-300" />
                <span>+91 6395989230</span>
              </a>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-1">
            <h4 className="text-lg font-bold mb-6 pb-2 border-b border-slate-700">Featured Work</h4>
            <div className="space-y-4">
              <Link to="/competition/5" className="block group">
                <p className="font-medium text-slate-200 group-hover:text-white">PMx'25</p>
                <p className="text-sm text-slate-400 flex items-center mt-1">
                  View Details <ExternalLink className="ml-1 h-3 w-3" />
                </p>
              </Link>
              <Link to="/competition/6" className="block group">
                <p className="font-medium text-slate-200 group-hover:text-white">Case-O-Nova 6.0</p>
                <p className="text-sm text-slate-400 flex items-center mt-1">
                  View Details <ExternalLink className="ml-1 h-3 w-3" />
                </p>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>© {new Date().getFullYear()} Luv Agrawal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
