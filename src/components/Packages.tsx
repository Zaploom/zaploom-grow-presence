
import PackageCard from "./PackageCard";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const Packages = () => {
  const packages = [
    {
      title: "Starter Package – Personal Web Presence",
      price: "₹3,000 – ₹5,000",
      duration: "3–5 days",
      ideal: "Ideal for freelancers, students, creators",
      includes: [
        "Clean 1-page responsive website (React + Tailwind)",
        "Hero, About, Services, Contact sections",
        "WhatsApp/social/email buttons",
        "Hosted on Vercel/Netlify",
        "Basic animations"
      ],
      addons: [
        { name: "Domain setup", price: "+₹500" },
        { name: "Contact form", price: "+₹800" },
        { name: "Portfolio/project section", price: "+₹1,000" },
        { name: "Logo design help (Canva)", price: "+₹1,000" }
      ]
    },
    {
      title: "Professional Package – Business Website",
      price: "₹10,000 – ₹15,000",
      duration: "5–7 days",
      ideal: "Ideal for clinics, coaches, gyms, salons, small businesses",
      includes: [
        "4–6 responsive pages",
        "Animations, contact forms, Google Maps, SEO tags",
        "Image galleries or testimonial sliders",
        "Hosting setup with domain"
      ],
      addons: [
        { name: "1-year minor edit support", price: "Included" },
        { name: "PageSpeed >90 optimization", price: "Included" },
        { name: "Business strategy consultation", price: "Included" }
      ],
      upgrades: [
        { name: "Blog", price: "+₹2,000" },
        { name: "Social feeds", price: "+₹1,500" },
        { name: "Booking integration", price: "+₹1,500" },
        { name: "Maintenance", price: "₹1,500/mo" }
      ],
      featured: true
    },
    {
      title: "Dynamic CMS Package – Self-Managed Website",
      price: "₹20,000 – ₹35,000",
      duration: "10–14 days",
      ideal: "Ideal for bloggers, educators, agencies",
      includes: [
        "Admin dashboard",
        "Dynamic blog/services manager (MERN)",
        "MongoDB backend, JWT Auth, SEO blog pages"
      ],
      addons: [
        { name: "Multi-user roles", price: "+₹2,000" },
        { name: "WYSIWYG editor", price: "+₹1,000" },
        { name: "Google Analytics", price: "+₹1,000" }
      ]
    },
    {
      title: "Custom Web App / SaaS MVP",
      price: "₹40,000 – ₹1,20,000",
      duration: "3–4 weeks",
      ideal: "Ideal for startups, product teams",
      includes: [
        "Fully functional MERN-based SaaS or Web App",
        "Dashboards, CRUD, search/filter, image uploads",
        "Razorpay/Stripe integration, EC2/Render hosting"
      ],
      addons: [
        { name: "Email alerts", price: "+₹2,000" },
        { name: "RBAC", price: "+₹3,000" },
        { name: "In-app chat", price: "+₹4,000" },
        { name: "Analytics dashboard", price: "+₹4,000" }
      ]
    }
  ];

  return (
    <section id="packages" className="py-20 lg:py-24 bg-white dark:bg-gray-900 theme-transition relative" data-aos="fade-up">
      {/* Background element */}
      <div className="absolute left-0 bottom-0 h-64 w-64 bg-zaploom/5 dark:bg-zaploom/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Our <span className="text-zaploom dark:text-zaploom-light relative inline-block">
              Packages
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-zaploom/20 dark:bg-zaploom-light/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 px-4">
            Choose the package that best fits your needs and budget. All our packages include responsive design, SEO optimization, and post-launch support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 px-4">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="h-full transform transition-transform duration-300 hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <PackageCard {...pkg} />
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            className="btn-primary transition-transform duration-300 hover:scale-105 flex items-center gap-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <MessageSquare className="w-5 h-5" />
            Discuss Your Project
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Packages;
