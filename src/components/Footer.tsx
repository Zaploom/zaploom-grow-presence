
import { Instagram, Linkedin, Github } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const navLinks = [
    { name: "Home", href: "/#home" },
    { name: "Services", href: "/#services" },
    { name: "Packages", href: "/#packages" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Contact", href: "/#contact" }
  ];
  
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="flex items-center mb-6">
              <img
                src="/lovable-uploads/28695496-ca46-4844-9858-2ec2cec6c76a.png"
                alt="Zaploom Logo"
                className="h-10 w-auto mr-3 brightness-0 invert"
              />
              <span className="text-xl font-heading font-bold">Zaploom</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Modern websites and web apps built to grow your brand, business, or idea — beautifully and efficiently.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-zaploom transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-zaploom transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-gray-800 p-2 rounded-full hover:bg-zaploom transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/about-us"
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Custom Website Design
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Web App Development
                </a>
              </li>
              <li>
                <a href="/#services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">
                <span className="block text-sm">Email:</span>
                <a href="mailto:zaploom.agency@gmail.com" className="hover:text-white transition-colors duration-200">
                  zaploom.agency@gmail.com
                </a>
              </li>
              <li className="text-gray-400">
                <span className="block text-sm">WhatsApp:</span>
                <a href="tel:+919199893756" className="hover:text-white transition-colors duration-200">
                  +91-9199893756
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              &copy; {currentYear} Zaploom. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
