
import { Globe, Wrench, Brush } from "lucide-react";

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
    <section id="services" className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
            Our <span className="text-zaploom">Services</span>
          </h2>
          <p className="text-lg text-gray-600">
            We offer a comprehensive range of web development and design services to help you establish a powerful online presence.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group flex flex-col items-center text-center h-full"
            >
              <div className="mb-6 transition-transform group-hover:scale-110 duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
