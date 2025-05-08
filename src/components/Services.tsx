
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
    <section id="services" className="py-20 lg:py-24 bg-gray-50 relative">
      {/* Background design element */}
      <div className="absolute right-0 top-0 h-64 w-64 bg-zaploom/5 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
            Our <span className="text-zaploom relative inline-block">
              Services
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-zaploom/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            We transform your digital vision into reality with our comprehensive web solutions. 
            Our team of experienced developers and designers work hand-in-hand to deliver exceptional 
            digital experiences that not only look stunning but also drive real business results.
          </p>
          <p className="text-gray-600">
            Whether you need a simple landing page or a complex web application, we have the expertise 
            to bring your ideas to life with cutting-edge technologies, responsive design, and 
            user-centered approach that ensures your online presence stands out.
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
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
