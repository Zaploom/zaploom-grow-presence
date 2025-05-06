
import { Check } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <Check className="h-5 w-5 text-zaploom" />,
      title: "Modern Stack",
      description: "We use React, Tailwind, and MERN to ensure your site is fast, secure, and scalable."
    },
    {
      icon: <Check className="h-5 w-5 text-zaploom" />,
      title: "Clean UI/UX",
      description: "Beautiful interfaces that prioritize user experience and conversions."
    },
    {
      icon: <Check className="h-5 w-5 text-zaploom" />,
      title: "1-on-1 Support",
      description: "We work closely with you at every step — from design to deployment."
    },
    {
      icon: <Check className="h-5 w-5 text-zaploom" />,
      title: "SEO + Speed Optimized",
      description: "Websites that load fast and rank well."
    },
    {
      icon: <Check className="h-5 w-5 text-zaploom" />,
      title: "Flexible Packages",
      description: "Choose from basic web presence to full SaaS apps with admin panels."
    }
  ];

  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
            Why Choose <span className="text-zaploom">Zaploom</span>
          </h2>
          <p className="text-lg text-gray-600">
            We're committed to delivering exceptional quality, value, and support for all your web development needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start mb-4">
                <div className="bg-white p-2 rounded-full shadow-sm mr-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600 ml-12">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
