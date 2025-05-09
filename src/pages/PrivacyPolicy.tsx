
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
    // Refresh AOS animations
    if (typeof window.AOS !== 'undefined') {
      window.AOS.refresh();
    }
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500">
      <Navbar />
      
      <main className="pt-32 pb-16 px-4 md:px-8 lg:px-16 max-w-6xl mx-auto text-gray-800 dark:text-gray-200">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-zaploom dark:text-zaploom-light hover:underline mb-6 transition-colors duration-300">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Privacy Policy</h1>
          <div className="h-1 w-20 bg-zaploom dark:bg-zaploom-light rounded-full mb-12"></div>
        </div>

        <div className="space-y-8 prose prose-lg dark:prose-invert max-w-none">
          <section data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">Introduction</h2>
            <p>
              At Zaploom, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <p>
              Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
            <p>
              We collect information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, participate in activities on the website, or otherwise contact us.
            </p>
            <p>
              The personal information that we collect depends on the context of your interactions with us and the website, the choices you make, and the products and features you use. The personal information we collect may include:
            </p>
            <ul className="list-disc pl-6 mt-3">
              <li>Name and contact data (such as email address, phone number)</li>
              <li>Credentials (such as passwords and security questions)</li>
              <li>Payment data (such as credit card number, billing address)</li>
              <li>Usage data (such as how you use our website and services)</li>
            </ul>
          </section>

          <section data-aos="fade-up" data-aos-delay="150">
            <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p>We may use the information we collect about you for various purposes, including to:</p>
            <ul className="list-disc pl-6 mt-3">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Improve, personalize, and expand our website and services</li>
              <li>Understand and analyze how you use our website and services</li>
              <li>Develop new products, services, features, and functionality</li>
              <li>Communicate with you about updates, security alerts, and support</li>
              <li>Process transactions and send related information</li>
              <li>Find and prevent fraud</li>
            </ul>
          </section>

          <section data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl font-bold mb-4">Sharing Your Information</h2>
            <p>We may share information we have collected about you in certain situations, such as:</p>
            <ul className="list-disc pl-6 mt-3">
              <li>With your consent</li>
              <li>With service providers who perform services for us</li>
              <li>To comply with legal obligations</li>
              <li>To protect and defend our rights and property</li>
              <li>In connection with a business transfer (such as a merger or acquisition)</li>
            </ul>
          </section>

          <section data-aos="fade-up" data-aos-delay="250">
            <h2 className="text-2xl font-bold mb-4">Your Privacy Rights</h2>
            <p>
              Depending on where you reside, you may have certain rights regarding your personal information, such as:
            </p>
            <ul className="list-disc pl-6 mt-3">
              <li>The right to access personal data we hold about you</li>
              <li>The right to request that we correct inaccurate personal data</li>
              <li>The right to request that we delete your personal data</li>
              <li>The right to restrict processing of your personal data</li>
              <li>The right to data portability</li>
              <li>The right to object to our processing your personal data</li>
            </ul>
          </section>

          <section data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-2xl font-bold mb-4">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="350">
            <h2 className="text-2xl font-bold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-4">
              <strong>Email:</strong> <a href="mailto:zaploom.agency@gmail.com" className="text-zaploom dark:text-zaploom-light hover:underline">zaploom.agency@gmail.com</a><br />
              <strong>Phone:</strong> <a href="tel:+919199893756" className="text-zaploom dark:text-zaploom-light hover:underline">+91-9199893756</a>
            </p>
          </section>
          
          <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-12">
            <p>Last Updated: May 9, 2025</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
