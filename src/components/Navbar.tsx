
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [darkMode, setDarkMode] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  // Initialize dark mode from localStorage or system preference
  useEffect(() => {
    // Check for saved theme preference or respect OS preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // Toggle dark/light mode
  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Track active section based on scroll position (only on home page)
    const observeElements = () => {
      if (!isHomePage) return;
      
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId || "home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", observeElements);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", observeElements);
    };
  }, [isHomePage]);

  // Function for smooth navigation 
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if(section) {
      section.scrollIntoView({behavior: "smooth"})
    }
  }

  // Enable smooth scrolling
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Packages", href: "/#packages" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith("/#")) {
      // If we're already on the home page, just scroll to the section
      if (isHomePage) {
        const targetId = href.substring(2);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // Navigate to home page with hash
        navigate(href);
      }
    } else {
      // For non-hash links, use normal navigation
      navigate(href);
    }
    
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-md py-4" 
          : "bg-transparent dark:bg-transparent py-6"
      }`}
    >
      <div className="container-custom flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center group transition-transform duration-300 hover:scale-105"
        >
          <img
            src="/lovable-uploads/69c11995-2fc1-4bdb-a9e1-b01229d45d2e.png"
            alt="Zaploom Logo"
            className="h-100px w-auto mr-3 transition-transform duration-500 absolute"
          />
          {/* <span className="text-2xl font-heading font-bold text-gray-900 dark:text-white group-hover:text-zaploom dark:group-hover:text-zaploom-light transition-colors duration-300">Zaploom</span> */}
        </Link>

        {isMobile ? (
          <>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="mr-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 dark:text-gray-300 focus:outline-none transition-colors duration-300 hover:text-zaploom dark:hover:text-zaploom-light"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 transition-all duration-300" />
                ) : (
                  <Menu className="h-6 w-6 transition-all duration-300" />
                )}
              </button>
            </div>

            {mobileMenuOpen && (
              <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-lg py-4 animate-fade-in">
                <div className="container-custom flex flex-col space-y-4">
                  {navLinks.map((link, index) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      style={{ animationDelay: `${index * 0.1}s` }}
                      className={`py-3 px-6 rounded-md transition-all duration-300 animate-fade-in-right ${
                        isHomePage && activeSection === link.href.substring(2)
                          ? "bg-zaploom/10 dark:bg-zaploom/20 text-zaploom dark:text-zaploom-light font-medium"
                          : "text-gray-800 dark:text-gray-200 hover:text-zaploom dark:hover:text-zaploom-light hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex items-center">
            <div className="flex space-x-8 items-center">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-gray-700 dark:text-gray-200 font-medium transition-all duration-300 hover:translate-y-[-2px] relative ${
                    isHomePage && activeSection === link.href.substring(2)
                      ? "text-zaploom dark:text-zaploom-light after:w-full"
                      : "hover:text-zaploom dark:hover:text-zaploom-light after:w-0"
                  } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:bg-zaploom dark:after:bg-zaploom-light after:transition-all after:duration-300 hover:after:w-full`}
                >
                  {link.name}
                </a>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleDarkMode}
                className="text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all duration-300 ml-2"
                aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
