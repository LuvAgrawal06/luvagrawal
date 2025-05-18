import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import ProjectsDropdown from './ProjectsDropdown';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showProjects, setShowProjects] = useState(false);
  const location = useLocation();

  // Determine if we're on the main page or competitions page
  const isHome = location.pathname === "/";

  // Dynamic navigation items based on current page
  const navItems = isHome 
    ? [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#", isProjects: true },
        { label: "Achievements", href: "#achievements" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" }
      ]
    : [
        { label: "Back to Home", href: "/", isRouterLink: true },
        { label: "Featured Competitions", href: "#featured-competitions" }
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

  // Show/hide projects dropdown
  const handleProjectsHover = (v: boolean) => setShowProjects(v);

  // Function to scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container max-w-6xl mx-auto px-4 flex justify-between items-center">
        <Link to="/" onClick={scrollToTop} className="text-xl md:text-2xl font-bold text-slate-800 flex items-center gap-2">
          <span className="bg-blue-600 text-white w-8 h-8 rounded-md flex items-center justify-center">L</span>
          <span>Luv Agrawal</span>
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          {navItems.map((item) => (
            item.isProjects ? (
              <div
                key="Projects"
                className="relative"
                onMouseEnter={() => handleProjectsHover(true)}
                onMouseLeave={() => handleProjectsHover(false)}
                tabIndex={0}
              >
                <button className="text-slate-700 hover:text-blue-600 font-medium transition-colors inline-flex items-center relative after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-blue-600 after:transition-all hover:after:w-full">
                  Projects <ChevronDown className="w-4 h-4 ml-1" />
                </button>
                {showProjects && (
                  <div className="absolute left-0 mt-2 bg-white border rounded shadow-lg min-w-[200px] z-30">
                    <ProjectsDropdown closeDropdown={() => setShowProjects(false)} />
                  </div>
                )}
              </div>
            ) : item.isRouterLink ? (
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
            item.isProjects ? (
              <div key="Projects-mobile" className="relative w-full">
                <button
                  className="text-slate-800 hover:text-blue-600 text-xl font-medium flex items-center w-full"
                  onClick={() => setShowProjects((v) => !v)}
                >
                  Projects <ChevronDown className="w-5 h-5 ml-2" />
                </button>
                {showProjects && (
                  <div className="bg-white border rounded shadow-lg mt-2 w-full z-30">
                    <ProjectsDropdown closeDropdown={() => setShowProjects(false)} />
                  </div>
                )}
              </div>
            ) :
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
