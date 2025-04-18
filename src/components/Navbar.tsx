
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Determine if we're on the main page or competitions page
  const isHome = location.pathname === "/";

  // Dynamic navigation items based on current page
  const navItems = isHome 
    ? [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Competitions", href: "#case-studies" },
        { label: "Achievements", href: "#achievements" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
        { label: "Certifications", href: "#certifications" }
      ]
    : [
        { label: "Back to Home", href: "/", isRouterLink: true },
        { label: "Featured Competitions", href: "#featured-competitions" },
        { label: "All Competitions", href: "#all-competitions" }
      ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-md flex items-center justify-center">L</span>
          <span>Luv Agrawal</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            item.isRouterLink ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 font-medium transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-800 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full justify-center items-center gap-8 p-8">
          {navItems.map((item) => (
            item.isRouterLink ? (
              <Link
                key={item.label}
                to={item.href}
                className="text-slate-800 hover:text-blue-600 text-xl font-medium"
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="text-slate-800 hover:text-blue-600 text-xl font-medium"
                onClick={closeMenu}
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
