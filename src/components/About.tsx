
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              About <span className="text-zaploom">Zaploom</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              At Zaploom, we help creators, freelancers, startups, and local businesses establish a powerful online presence. Whether it's a personal site or a fully functional SaaS MVP, we bring your vision to life with clean design and scalable technology.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our approach combines modern design principles with cutting-edge web technologies to create websites and applications that not only look stunning but also perform exceptionally well.
            </p>
            <Button className="btn-primary">Learn More About Us</Button>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                  alt="Web development team"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-zaploom rounded-lg shadow-lg flex items-center justify-center text-white p-4">
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
