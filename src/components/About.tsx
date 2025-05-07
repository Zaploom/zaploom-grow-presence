
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 lg:py-24 bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
                About <span className="text-zaploom relative inline-block">
                  Zaploom
                  <span className="absolute -bottom-1 left-0 w-full h-1 bg-zaploom/20 rounded-full"></span>
                </span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Zaploom, we help creators, freelancers, startups, and local businesses establish a powerful online presence. Whether it's a personal site or a fully functional SaaS MVP, we bring your vision to life with clean design and scalable technology.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Our approach combines modern design principles with cutting-edge web technologies to create websites and applications that not only look stunning but also perform exceptionally well.
              </p>
              <Button className="btn-primary group transition-all duration-300 hover:scale-105">
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-48 h-48 bg-zaploom/5 rounded-full blur-xl"></div>
              <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg relative z-10 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                  alt="Web development team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-zaploom rounded-lg shadow-lg flex items-center justify-center text-white p-4 z-20">
                <div className="text-center">
                  <p className="text-2xl font-bold">5+</p>
                  <p className="text-sm">Years Experience</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
