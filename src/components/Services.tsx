
import { Globe, Wrench, Brush } from "lucide-react";
import { Button } from "@/components/ui/button";

const Services = () => {
  const serviceItems = [
    {
      icon: <Globe className="h-10 w-10 text-zaploom" />,
      title: "Custom Website Design",
      description: "Responsive, elegant websites tailored to your brand and audience",
    },
    {
      icon: <Wrench className="h-10 w-10 text-zaploom" />,
      title: "Web App Development",
      description: "Full-stack MERN-based apps for real-world needs, from MVPs to dashboards",
    },
    {
      icon: <Brush className="h-10 w-10 text-zaploom" />,
      title: "UI/UX Design",
      description: "User-first layouts with smooth interactions and mobile-first principles",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-24 bg-gray-50 relative">
      {/* Background design element */}
      <div className="absolute right-0 top-0 h-64 w-64 bg-zaploom/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
            Our <span className="text-zaploom relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-zaploom/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of web development and design services to help you establish a powerful online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group h-full flex flex-col items-center text-center transform hover:-translate-y-1"
            >
              <div className="mb-6 transition-transform group-hover:scale-110 duration-300">
                <div className="p-4 bg-zaploom/5 rounded-full">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <div className="mt-auto w-full pt-4 text-center">
                <a href="#contact" className="text-zaploom font-medium hover:underline inline-flex items-center transition-all duration-300">
                  Learn more
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button className="btn-primary transition-transform duration-300 hover:scale-105">
            Get a Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
