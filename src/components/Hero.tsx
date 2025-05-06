
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-28 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <img 
              src="/lovable-uploads/28695496-ca46-4844-9858-2ec2cec6c76a.png"
              alt="Zaploom Logo"
              className="h-24 w-auto animate-fade-in"
            />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 animate-fade-in tracking-tight">
            Grow Your Presence with{" "}
            <span className="text-zaploom">Zaploom</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 animate-fade-in">
            Modern websites and web apps built to grow your brand, business, or idea — beautifully and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in">
            <Button className="btn-primary text-lg group">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" className="text-lg border-zaploom text-zaploom hover:bg-zaploom/10">
              View Our Work
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,82.73Q278,69.38,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
