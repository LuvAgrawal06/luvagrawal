
import React from 'react';
import { Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white py-10">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Luv Agrawal</h3>
            <p className="text-navy-200">
              Business Strategist & Product Enthusiast focused on creating impactful solutions.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#home" className="text-navy-200 hover:text-white transition-colors">Home</a>
              <a href="#about" className="text-navy-200 hover:text-white transition-colors">About</a>
              <a href="#case-studies" className="text-navy-200 hover:text-white transition-colors">Case Studies</a>
              <a href="#achievements" className="text-navy-200 hover:text-white transition-colors">Achievements</a>
              <a href="#skills" className="text-navy-200 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-navy-200 hover:text-white transition-colors">Contact</a>
            </nav>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex flex-col space-y-3">
              <a 
                href="mailto:luv.agrawal.chy24@itbhu.ac.in" 
                className="flex items-center gap-2 text-navy-200 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>luv.agrawal.chy24@itbhu.ac.in</span>
              </a>
              
              <a 
                href="tel:+916395989230" 
                className="flex items-center gap-2 text-navy-200 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>+91 6395989230</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/luv-agrawal-41119a30b"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-navy-200 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-navy-700 mt-8 pt-8 text-center text-navy-300">
          <p>&copy; {new Date().getFullYear()} Luv Agrawal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
