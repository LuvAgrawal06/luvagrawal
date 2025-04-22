
import React from "react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

const Footer = () => (
  <footer className="bg-slate-800 text-white py-8 mt-8">
    <div className="container max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 px-4">
      {/* Logo and copyright */}
      <div className="mb-6 md:mb-0 flex flex-col items-center md:items-start">
        <span className="bg-blue-600 text-white w-8 h-8 rounded-md flex items-center justify-center text-xl font-bold mb-2">L</span>
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Luv Agrawal. All rights reserved.
        </p>
      </div>
      {/* Quick Links */}
      <div className="flex flex-col items-center md:items-end gap-2">
        <span className="text-sm font-semibold mb-2 text-white">Quick Links</span>
        <div className="flex flex-wrap gap-4">
          {quickLinks.map(link => (
            link.label === "Projects" ? (
              <Link 
                to="#" 
                key={link.label}
                className="hover:underline hover:text-blue-300"
              >
                Projects
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="hover:underline hover:text-blue-300"
              >
                {link.label}
              </a>
            )
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
