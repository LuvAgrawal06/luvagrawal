
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Competitions", href: "#case-studies" },
  { label: "Achievements", href: "#achievements" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-xl md:text-2xl font-display font-bold text-navy-800">
          Luv<span className="text-navy-800"> Agrawal</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-navy-700 hover:text-navy-900 font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy-800"
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
        <div className="flex flex-col h-full justify-center items-center gap-6 p-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-navy-800 hover:text-navy-900 text-xl font-medium"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-navy-800 hover:bg-navy-900 text-white mt-4" onClick={closeMenu}>
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
