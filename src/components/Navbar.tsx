
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Packages", href: "#packages" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <a 
          href="#home" 
          className="flex items-center group transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/lovable-uploads/28695496-ca46-4844-9858-2ec2cec6c76a.png"
            alt="Zaploom Logo"
            className="h-12 w-auto mr-3 transition-transform duration-500"
          />
          <span className="text-2xl font-heading font-bold text-gray-900 group-hover:text-zaploom transition-colors duration-300">Zaploom</span>
        </a>

        {isMobile ? (
          <>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-600 focus:outline-none transition-colors duration-300 hover:text-zaploom"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 transition-all duration-300" />
              ) : (
                <Menu className="h-6 w-6 transition-all duration-300" />
              )}
            </button>

            {mobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white shadow-md py-4 animate-fade-in">
                <div className="container-custom flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      className="py-3 px-4 text-gray-800 hover:text-zaploom hover:bg-gray-50 rounded-md transition-all duration-300 animate-fade-in-right"
                    >
                      {link.name}
                    </a>
                  ))}
                  <Button className="btn-primary mt-3 w-full transition-all duration-300 hover:translate-y-[-2px]">
                    Start Your Project
                  </Button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-zaploom font-medium transition-all duration-300 hover:translate-y-[-2px] relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-zaploom after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <Button className="btn-primary transition-transform duration-300 hover:translate-y-[-2px] hover:shadow-lg">Start Your Project</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
