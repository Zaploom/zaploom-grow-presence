
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { HashLink as Link } from "react-router-hash-link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? "bg-white/95 backdrop-blur-sm shadow-lg" 
        : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link 
            to="/#hero" 
            className="flex items-center space-x-2"
            onClick={closeMenu}
          >
            <img 
              src="/lovable-uploads/28695496-ca46-4844-9858-2ec2cec6c76a.png" 
              alt="Zaploom Logo" 
              className="h-8 w-8"
            />
            <span className="text-xl font-bold text-primary">
              Zaploom
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              to="/#about" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link 
              to="/#services" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link 
              to="/#packages" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Packages
            </Link>
            <Link 
              to="/#portfolio" 
              className="text-foreground hover:text-primary transition-colors"
              onClick={closeMenu}
            >
              Portfolio
            </Link>
            <Link 
              to="/#contact" 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/#about"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                About
              </Link>
              <Link
                to="/#services"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Services
              </Link>
              <Link
                to="/#packages"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Packages
              </Link>
              <Link
                to="/#portfolio"
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Portfolio
              </Link>
              <Link
                to="/#contact"
                className="block mx-3 my-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-center"
                onClick={closeMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
