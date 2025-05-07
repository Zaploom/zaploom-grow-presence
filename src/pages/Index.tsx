
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ClientLogos from "@/components/ClientLogos";
import Services from "@/components/Services";
import Packages from "@/components/Packages";
import Portfolio from "@/components/Portfolio";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import LeadMagnet from "@/components/LeadMagnet";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Blog from "@/components/Blog";
import FAQ from "@/components/FAQ";
import LiveChat from "@/components/LiveChat";

const Index = () => {
  // Refresh AOS animations when components mount
  useEffect(() => {
    if (typeof window.AOS !== 'undefined') {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      <Navbar />
      <Hero />
      <ClientLogos />
      <About />
      <Services />
      <Features />
      <Packages />
      <Portfolio />
      <Blog />
      <FAQ />
      <LeadMagnet />
      <Testimonials />
      <ContactForm />
      <Footer />
      <LiveChat />
    </div>
  );
};

export default Index;
