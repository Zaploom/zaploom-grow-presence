
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqItems = [
    {
      question: "What services does Zaploom offer?",
      answer: "Zaploom offers a range of web design and development services including custom website design, web application development, UI/UX design, and more. We specialize in creating responsive, elegant websites tailored to your brand and audience."
    },
    {
      question: "How long does it take to build a website?",
      answer: "The timeline varies depending on the complexity of the project. A simple personal website might take 3-5 days, while a business website generally takes 5-7 days. Complex web applications and SaaS products can take 3-4 weeks or more. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What technologies do you use?",
      answer: "We primarily use modern web technologies including React, Tailwind CSS, Node.js, MongoDB, and other cutting-edge tools. Our stack is selected to ensure your website is fast, secure, and scalable."
    },
    {
      question: "Do you provide website maintenance after launch?",
      answer: "Yes, we offer website maintenance packages to keep your site updated, secure, and performing optimally. Maintenance can include regular updates, security monitoring, content updates, and technical support."
    },
    {
      question: "How much does a website cost?",
      answer: "Our pricing varies based on project requirements. Personal websites start at ₹3,000-₹5,000, business websites range from ₹10,000-₹15,000, and custom web applications start at ₹40,000. We provide detailed quotes after understanding your specific needs."
    },
    {
      question: "Do you help with SEO and marketing?",
      answer: "Yes, we incorporate SEO best practices into all our websites. We also offer additional SEO services and digital marketing consultation to help improve your online visibility and reach your target audience more effectively."
    }
  ];

  return (
    <section 
      id="faq" 
      className="py-20 lg:py-24 bg-white dark:bg-gray-800 theme-transition"
      data-aos="fade-up"
    >
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
            Frequently Asked <span className="text-zaploom dark:text-zaploom-light relative inline-block">
              Questions
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-zaploom/20 dark:bg-zaploom-light/30 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Find answers to common questions about our services, process, and pricing.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm"
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <AccordionTrigger className="px-6 py-4 hover:no-underline text-left bg-gray-50 dark:bg-gray-700 font-medium text-gray-900 dark:text-white">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 text-gray-600 dark:text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Still have questions? Contact us for more information.
          </p>
          <a 
            href="#contact" 
            className="btn-primary inline-block"
            data-aos="fade-up"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
