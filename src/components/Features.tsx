
import { Check } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";

const Features = () => {
  const features = [
    {
      icon: <Check className="h-5 w-5 text-zaploom dark:text-zaploom-light" />,
      title: "Modern Stack",
      description: "We use React, Tailwind, and MERN to ensure your site is fast, secure, and scalable."
    },
    {
      icon: <Check className="h-5 w-5 text-zaploom dark:text-zaploom-light" />,
      title: "Clean UI/UX",
      description: "Beautiful interfaces that prioritize user experience and conversions."
    },
    {
      icon: <Check className="h-5 w-5 text-zaploom dark:text-zaploom-light" />,
      title: "1-on-1 Support",
      description: "We work closely with you at every step — from design to deployment."
    },
    {
      icon: <Check className="h-5 w-5 text-zaploom dark:text-zaploom-light" />,
      title: "SEO + Speed Optimized",
      description: "Websites that load fast and rank well."
    },
    {
      icon: <Check className="h-5 w-5 text-zaploom dark:text-zaploom-light" />,
      title: "Flexible Packages",
      description: "Choose from basic web presence to full SaaS apps with admin panels."
    },
    {
      icon: <Check className="h-5 w-5 text-zaploom dark:text-zaploom-light" />,
      title: "Fast Delivery",
      description: "Get your project done in days, not months."
    }
  ];

  const stats = [
    { value: 25, label: "Happy Clients", suffix: "+" },
    { value: 90, label: "PageSpeed Score", suffix: "+" },
    { value: 5, label: "Years Experience", suffix: "+" },
    { value: 100, label: "Project Completion", suffix: "%" }
  ];

  return (
    <section id="features" className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 theme-transition">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Why Choose <span className="text-zaploom dark:text-zaploom-light relative inline-block">
              Zaploom
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-zaploom/20 dark:bg-zaploom-light/30 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            We're committed to delivering exceptional quality, value, and support for all your web development needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="flex items-start mb-4">
                <div className="bg-gray-50 dark:bg-gray-700 p-2 rounded-full shadow-sm mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 ml-12">{feature.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center shadow-sm border border-gray-50 dark:border-gray-700"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="mb-2">
                <AnimatedCounter 
                  end={stat.value} 
                  suffix={stat.suffix} 
                />
              </div>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
