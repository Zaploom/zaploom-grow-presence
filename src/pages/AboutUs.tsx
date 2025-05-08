
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, Clock, Users, Globe, BookOpen } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight text-gray-900">
              About <span className="text-zaploom">Zaploom</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building innovative digital solutions since 2019
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-zaploom/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-zaploom/5 rounded-full blur-3xl"></div>
      </section>

      {/* Our Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2019, Zaploom began as a small team of passionate developers and designers with a vision to make web development accessible to businesses of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started as a freelance collective quickly evolved into a full-service web development agency, helping dozens of businesses transform their digital presence with custom websites and web applications.
              </p>
              <p className="text-lg text-gray-600">
                Today, we continue to grow while maintaining our core values of quality, creativity, and client satisfaction. Our team combines technical expertise with design thinking to deliver solutions that don't just look great but drive real business results.
              </p>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative h-full flex items-center justify-center">
                <div className="absolute w-64 h-64 bg-zaploom/10 rounded-full blur-xl"></div>
                <div className="relative z-10 bg-white p-3 rounded-xl shadow-xl rotate-3 transform hover:rotate-0 transition-transform duration-300">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1000" 
                    alt="Zaploom team" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Values</h2>
            <p className="text-lg text-gray-600">
              At the heart of everything we do are these core principles that guide our work and relationships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Users className="h-10 w-10 text-zaploom" />,
                title: "Client-Focused",
                description: "We prioritize your goals and vision, working collaboratively to bring them to life."
              },
              {
                icon: <Award className="h-10 w-10 text-zaploom" />,
                title: "Quality First",
                description: "We never compromise on quality, ensuring every pixel and line of code meets our high standards."
              },
              {
                icon: <Clock className="h-10 w-10 text-zaploom" />,
                title: "Timely Delivery",
                description: "We respect deadlines and deliver projects on time without sacrificing quality."
              },
              {
                icon: <Globe className="h-10 w-10 text-zaploom" />,
                title: "Innovation",
                description: "We stay ahead of trends to provide forward-thinking solutions that stand the test of time."
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 text-center"
              >
                <div className="inline-block p-4 bg-zaploom/5 rounded-full mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The talented individuals behind our successful projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Raj Sharma",
                position: "Founder & Lead Developer",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500",
                bio: "With over 10 years of experience, Raj leads our development team with expertise in React, Node.js, and cloud architecture."
              },
              {
                name: "Priya Patel",
                position: "Creative Director",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=500",
                bio: "Priya brings designs to life with her exceptional UI/UX skills and passion for creating intuitive user experiences."
              },
              {
                name: "Arjun Mehta",
                position: "Full Stack Developer",
                image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=500",
                bio: "Arjun specializes in building robust applications with a focus on performance and scalability."
              }
            ].map((member, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-gray-900">{member.name}</h3>
                  <p className="text-zaploom mb-4">{member.position}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Journey</h2>
            <p className="text-lg text-gray-600">
              From humble beginnings to where we are today
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2019",
                title: "Zaploom was born",
                description: "Started as a freelance collective of three developers working on small business websites."
              },
              {
                year: "2020",
                title: "First office space",
                description: "Moved into our first small office and expanded our team to include dedicated designers."
              },
              {
                year: "2022",
                title: "Major client breakthrough",
                description: "Secured our first enterprise client and began working on larger scale applications."
              },
              {
                year: "2023",
                title: "Portfolio expansion",
                description: "Diversified our services to include mobile-responsive web apps and e-commerce solutions."
              },
              {
                year: "Now",
                title: "Growing strong",
                description: "Continuously evolving with a team of passionate professionals dedicated to creating exceptional digital experiences."
              }
            ].map((item, index, array) => (
              <div key={index} className="mb-12 relative">
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <div className="w-12 h-12 bg-zaploom text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.year}
                    </div>
                    {index !== array.length - 1 && (
                      <div className="h-full w-0.5 bg-gray-200 my-2"></div>
                    )}
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md flex-1 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
            
      {/* Mission Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative">
                <div className="absolute -left-6 -top-6 w-48 h-48 bg-zaploom/5 rounded-full blur-xl"></div>
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
                  alt="Our mission"
                  className="rounded-xl shadow-lg relative z-10"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Mission</h2>
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-zaploom mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Empowering Digital Growth</h3>
                </div>
                <p className="text-lg text-gray-600 mb-6">
                  We're committed to empowering businesses with digital solutions that drive growth, enhance user experience, and deliver measurable results. Our mission is to make quality web development accessible to businesses of all sizes.
                </p>
                <p className="text-lg text-gray-600">
                  Through continuous innovation and dedication to our craft, we aim to be the partner that helps you transform your digital presence and achieve your online goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
