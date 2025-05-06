
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Image } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  stack: string;
}

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "glowclinic",
      title: "GlowClinic – Medical Website",
      description: "Built for a local skin clinic with appointment form & reviews",
      stack: "React, Tailwind, Netlify",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    },
    {
      id: "fittrack",
      title: "FitTrack – Fitness Tracker MVP",
      description: "Custom dashboard with login, progress tracking, and data visualization",
      stack: "MERN, JWT, Chart.js",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      id: "craftybay",
      title: "CraftyBay – Portfolio Site",
      description: "A minimal one-page portfolio for a handmade crafts creator",
      stack: "React, Tailwind",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: "coachease",
      title: "CoachEase – Booking Website",
      description: "Business website for a life coach with integrated Calendly & blog",
      stack: "React, Tailwind, Calendly API",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    }
  ];

  return (
    <section id="portfolio" className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
            Our <span className="text-zaploom">Portfolio</span>
          </h2>
          <p className="text-lg text-gray-600">
            Check out some of our recent projects. Each project is crafted with attention to detail, focusing on both aesthetics and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden card-hover h-full flex flex-col">
              <div className="aspect-video relative overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <p className="text-sm font-medium text-gray-500 mb-4">Stack: {project.stack}</p>
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="border-zaploom text-zaploom hover:bg-zaploom/10 transition-colors duration-200"
                    onClick={() => setActiveProject(project)}
                  >
                    View Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Modal for project details - in a real project would show actual project details */}
        {activeProject && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-gray-900">{activeProject.title}</h3>
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image className="h-16 w-16 text-gray-400" />
                    <span className="sr-only">Project Image</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{activeProject.description}</p>
                <p className="text-sm font-medium text-gray-500 mb-6">Stack: {activeProject.stack}</p>
                <div className="flex space-x-4">
                  <Button className="btn-primary">View Live Site</Button>
                  <Button 
                    variant="outline" 
                    className="border-zaploom text-zaploom hover:bg-zaploom/10 transition-colors duration-200" 
                    onClick={() => setActiveProject(null)}
                  >
                    Close
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
