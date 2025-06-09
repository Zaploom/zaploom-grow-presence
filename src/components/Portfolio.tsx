import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Image, X, Calendar, Users, Clock, ChevronLeft, ChevronRight, MessageSquare, Quote, Star, TrendingUp, Target, ExternalLink } from "lucide-react";
import ProjectImageGallery from "./ProjectImageGallery";
import ProjectMetrics from "./ProjectMetrics";

interface Project {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  stack: string;
  technologies: string[];
  category: string;
  duration: string;
  teamSize: number;
  completedDate: string;
  features: string[];
  challenges: string[];
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    rating: number;
  };
  metrics: Array<{
    icon: any;
    label: string;
    value: string;
    change?: string;
  }>;
}

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "websites", name: "Websites" },
    { id: "apps", name: "Web Apps" },
    { id: "ui", name: "UI/UX Design" }
  ];

  const projects: Project[] = [
    {
      id: "glowclinic",
      title: "GlowClinic – Medical Website",
      description: "Built for a local skin clinic with appointment form & reviews. Features custom illustrations, testimonial carousel, and mobile-first design.",
      fullDescription: "A comprehensive medical website solution designed specifically for GlowClinic, featuring modern design principles and user-centric functionality. The project included custom patient portal integration, real-time appointment scheduling, and a comprehensive content management system for medical staff.",
      stack: "React, Tailwind, Netlify",
      technologies: ["React", "Tailwind CSS", "Netlify", "Node.js", "MongoDB"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      images: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
      ],
      category: "websites",
      duration: "3 months",
      teamSize: 3,
      completedDate: "March 2024",
      features: [
        "Patient appointment booking system",
        "Medical staff portal",
        "Treatment showcase gallery",
        "Patient testimonials carousel",
        "Mobile-responsive design",
        "SEO optimization"
      ],
      challenges: [
        "HIPAA compliance requirements",
        "Integration with existing clinic management system",
        "Complex appointment scheduling logic"
      ],
      results: [
        "40% increase in online bookings",
        "60% reduction in phone call appointments",
        "95% patient satisfaction score"
      ],
      testimonial: {
        quote: "The new website has transformed how we connect with patients. Booking appointments is now seamless!",
        author: "Dr. Sarah Mitchell",
        role: "Medical Director, GlowClinic",
        rating: 5
      },
      metrics: [
        { icon: TrendingUp, label: "Conversion Rate", value: "+40%", change: "vs previous site" },
        { icon: Users, label: "Monthly Visitors", value: "2.5K", change: "+85% growth" },
        { icon: Clock, label: "Avg. Session", value: "3:45", change: "+120% vs old site" },
        { icon: Target, label: "User Satisfaction", value: "95%", change: "Based on surveys" }
      ]
    },
    {
      id: "fittrack",
      title: "FitTrack – Fitness Tracker MVP",
      description: "Custom dashboard with login, progress tracking, and data visualization. Includes user profiles, workout logs, and nutrition tracking.",
      fullDescription: "A comprehensive fitness tracking application built as an MVP for fitness enthusiasts. Features include advanced analytics, social sharing capabilities, and integration with popular fitness devices and apps.",
      stack: "MERN, JWT, Chart.js",
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Chart.js", "JWT"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
      ],
      category: "apps",
      duration: "4 months",
      teamSize: 4,
      completedDate: "January 2024",
      features: [
        "Workout tracking and logging",
        "Nutrition monitoring",
        "Progress visualization",
        "Social fitness challenges",
        "Wearable device integration",
        "Custom workout plans"
      ],
      challenges: [
        "Real-time data synchronization",
        "Complex data visualization requirements",
        "Multi-device compatibility"
      ],
      results: [
        "500+ active beta users",
        "4.8/5 app store rating",
        "25% user retention after 30 days"
      ],
      testimonial: {
        quote: "FitTrack has completely changed how I approach my fitness goals. The insights are incredible!",
        author: "Mike Johnson",
        role: "Beta User & Fitness Enthusiast",
        rating: 5
      },
      metrics: [
        { icon: Users, label: "Active Users", value: "500+", change: "Beta launch" },
        { icon: Star, label: "App Rating", value: "4.8/5", change: "95 reviews" },
        { icon: TrendingUp, label: "User Retention", value: "25%", change: "30-day retention" },
        { icon: Target, label: "Daily Sessions", value: "1.8K", change: "Per day avg" }
      ]
    },
    {
      id: "craftybay",
      title: "CraftyBay – Portfolio Site",
      description: "A minimal one-page portfolio for a handmade crafts creator. Features product showcase, custom animations, and Instagram feed integration.",
      fullDescription: "An elegant portfolio website for CraftyBay, showcasing handmade crafts with stunning visual presentations. The site features e-commerce capabilities, social media integration, and a custom content management system for easy product updates.",
      stack: "React, Tailwind",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "Instagram API"],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      images: [
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
      ],
      category: "websites",
      duration: "2 months",
      teamSize: 2,
      completedDate: "February 2024",
      features: [
        "Product showcase gallery",
        "Instagram feed integration",
        "Custom animations",
        "Contact form with inquiry system",
        "Mobile-optimized design",
        "Fast loading performance"
      ],
      challenges: [
        "Instagram API integration complexity",
        "Performance optimization for image-heavy content",
        "Custom animation implementation"
      ],
      results: [
        "200% increase in product inquiries",
        "50% boost in social media followers",
        "3x improvement in page load speed"
      ],
      testimonial: {
        quote: "My new portfolio site beautifully showcases my work and has brought in so many new customers!",
        author: "Emma Wilson",
        role: "Founder, CraftyBay",
        rating: 5
      },
      metrics: [
        { icon: TrendingUp, label: "Inquiries", value: "+200%", change: "vs old site" },
        { icon: Users, label: "Social Followers", value: "+50%", change: "3 months growth" },
        { icon: Clock, label: "Load Time", value: "1.2s", change: "3x faster" },
        { icon: Target, label: "Bounce Rate", value: "25%", change: "-40% improvement" }
      ]
    },
    {
      id: "coachease",
      title: "CoachEase – Booking Website",
      description: "Business website for a life coach with integrated Calendly & blog. Includes testimonials, service packages, and a resources section.",
      fullDescription: "A professional coaching website that combines business presentation with powerful booking functionality. Features include automated client onboarding, resource library, and integrated payment processing for coaching packages.",
      stack: "React, Tailwind, Calendly API",
      technologies: ["React", "Tailwind CSS", "Calendly API", "Stripe", "Contentful"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
      ],
      category: "websites",
      duration: "6 weeks",
      teamSize: 2,
      completedDate: "April 2024",
      features: [
        "Integrated Calendly booking system",
        "Blog with CMS integration",
        "Client testimonials showcase",
        "Service package descriptions",
        "Resource library",
        "Payment integration"
      ],
      challenges: [
        "Calendly API customization",
        "Payment flow optimization",
        "Content management system integration"
      ],
      results: [
        "300% increase in session bookings",
        "80% reduction in booking abandonment",
        "65% increase in average session value"
      ],
      testimonial: {
        quote: "The new website has streamlined my entire booking process and attracted higher-quality clients.",
        author: "Jennifer Davis",
        role: "Certified Life Coach",
        rating: 5
      },
      metrics: [
        { icon: TrendingUp, label: "Bookings", value: "+300%", change: "vs phone bookings" },
        { icon: Target, label: "Conversion", value: "20%", change: "Visitor to booking" },
        { icon: Users, label: "Session Value", value: "+65%", change: "Average increase" },
        { icon: Clock, label: "Booking Time", value: "2 min", change: "Average completion" }
      ]
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const openProject = (project: Project) => {
    setActiveProject(project);
    const index = projects.findIndex(p => p.id === project.id);
    setCurrentProjectIndex(index);
  };

  const navigateProject = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentProjectIndex - 1 + projects.length) % projects.length
      : (currentProjectIndex + 1) % projects.length;
    
    setCurrentProjectIndex(newIndex);
    setActiveProject(projects[newIndex]);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setActiveProject(null);
    } else if (e.key === 'ArrowLeft') {
      navigateProject('prev');
    } else if (e.key === 'ArrowRight') {
      navigateProject('next');
    }
  };

  return (
    <section id="portfolio" className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 relative">
      {/* Background element */}
      <div className="absolute right-0 bottom-0 h-64 w-64 bg-zaploom/5 dark:bg-zaploom/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight">
            Our <span className="text-zaploom dark:text-zaploom-light relative inline-block">
              Portfolio
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-zaploom/20 dark:bg-zaploom-light/20 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Check out some of our recent projects. Each project is crafted with attention to detail,
            focusing on both aesthetics and functionality.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map(category => (
              <button
                key={category.id}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeFilter === category.id 
                    ? "bg-zaploom text-white" 
                    : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setActiveFilter(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {filteredProjects.map((project) => (
            <Card 
              key={project.id} 
              className="overflow-hidden card-hover h-full flex flex-col border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 bg-white dark:bg-gray-800"
            >
              <div className="aspect-video relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow dark:text-white">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description.substring(0, 100)}...</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <Badge key={index} variant="tech" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-5">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    <span>{project.completedDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    <span>{project.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{project.teamSize} people</span>
                  </div>
                </div>

                <div className="mt-auto flex">
                  <Button 
                    variant="outline" 
                    className="border-zaploom text-zaploom dark:border-zaploom-light dark:text-zaploom-light hover:bg-zaploom/10 dark:hover:bg-zaploom/20 transition-colors duration-200"
                    onClick={() => openProject(project)}
                  >
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {activeProject && (
          <div 
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-40 p-4"
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-fade-in">
              {/* Navigation buttons */}
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 left-4 z-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                onClick={() => navigateProject('prev')}
              >
                <ChevronLeft className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Button>
              
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-16 z-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                onClick={() => navigateProject('next')}
              >
                <ChevronRight className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Button>

              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute top-4 right-4 z-10 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
                onClick={() => setActiveProject(null)}
              >
                <X className="h-5 w-5 text-gray-600 dark:text-gray-300" />
              </Button>

              <div className="p-8">
                {/* Project header */}
                <div className="mb-6">
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{activeProject.title}</h3>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeProject.technologies.map((tech, index) => (
                      <Badge key={index} variant="tech">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{activeProject.completedDate}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{activeProject.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>{activeProject.teamSize} team members</span>
                    </div>
                  </div>
                </div>

                {/* Project gallery */}
                <ProjectImageGallery 
                  images={activeProject.images} 
                  projectTitle={activeProject.title} 
                />

                {/* Project metrics */}
                <ProjectMetrics metrics={activeProject.metrics} />

                {/* Project description */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Project Overview</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{activeProject.fullDescription}</p>
                </div>

                {/* What we delivered */}
                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">What We Delivered</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">Key Features</h5>
                      <ul className="space-y-1">
                        {activeProject.features.map((feature, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-zaploom mt-1">•</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 dark:text-white mb-2">Results Achieved</h5>
                      <ul className="space-y-1">
                        {activeProject.results.map((result, index) => (
                          <li key={index} className="text-gray-600 dark:text-gray-300 text-sm flex items-start gap-2">
                            <span className="text-green-500 mt-1">✓</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                {activeProject.testimonial && (
                  <div className="bg-gray-50 dark:bg-gray-700/50 p-6 rounded-lg mb-6">
                    <div className="flex items-start gap-4">
                      <Quote className="h-8 w-8 text-zaploom flex-shrink-0 mt-1" />
                      <div>
                        <p className="text-gray-700 dark:text-gray-300 italic mb-3">
                          "{activeProject.testimonial.quote}"
                        </p>
                        <div className="flex items-center gap-2 mb-2">
                          {[...Array(activeProject.testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <div className="text-sm">
                          <div className="font-medium text-gray-900 dark:text-white">
                            {activeProject.testimonial.author}
                          </div>
                          <div className="text-gray-500 dark:text-gray-400">
                            {activeProject.testimonial.role}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Action buttons */}
                <div className="flex flex-wrap gap-4 justify-center">
                  <Button className="bg-zaploom hover:bg-zaploom/90 text-white">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Get Similar Quote
                  </Button>
                  <Button variant="outline" className="border-zaploom text-zaploom hover:bg-zaploom/10">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Consultation
                  </Button>
                  <Button variant="outline" className="border-gray-300 hover:bg-gray-50">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Share Project
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
