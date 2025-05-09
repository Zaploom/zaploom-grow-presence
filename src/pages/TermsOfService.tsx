
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Terms of Service</h1>
          <div className="h-1 w-20 bg-zaploom dark:bg-zaploom-light rounded-full mb-12"></div>
        </div>

        <div className="space-y-8 prose prose-lg dark:prose-invert max-w-none">
          <section data-aos="fade-up">
            <h2 className="text-2xl font-bold mb-4">Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and Zaploom, concerning your access to and use of our website and services.
            </p>
            <p>
              By accessing or using our website and services, you agree to these Terms of Service. If you disagree with any part of the terms, then you may not access our website or use our services.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="100">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property Rights</h2>
            <p>
              Unless otherwise indicated, the website and all its content, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio) are owned by Zaploom, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
            </p>
            <p>
              Our name, logo, and all related names, logos, product and service names, designs, and slogans are trademarks of Zaploom. You may not use such marks without our prior written permission.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="150">
            <h2 className="text-2xl font-bold mb-4">User Representations</h2>
            <p>By using our website and services, you represent and warrant that:</p>
            <ul className="list-disc pl-6 mt-3">
              <li>You have the legal capacity and agree to comply with these Terms of Service</li>
              <li>You are not a minor in the jurisdiction in which you reside</li>
              <li>You will not access the website through automated or non-human means</li>
              <li>You will not use the website for any illegal or unauthorized purpose</li>
              <li>Your use of the website will not violate any applicable law or regulation</li>
            </ul>
          </section>

          <section data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-2xl font-bold mb-4">Prohibited Activities</h2>
            <p>You may not access or use the website for any purpose other than that for which we make it available. The website may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
            <p>As a user of the website, you agree not to:</p>
            <ul className="list-disc pl-6 mt-3">
              <li>Systematically retrieve data to create a collection, compilation, database, or directory</li>
              <li>Make any unauthorized use of the website, including collecting usernames and/or email addresses of users</li>
              <li>Use a buying agent or purchasing agent to make purchases on the website</li>
              <li>Use the website to advertise or offer to sell goods and services</li>
              <li>Circumvent, disable, or otherwise interfere with security-related features of the website</li>
              <li>Engage in unauthorized framing of or linking to the website</li>
              <li>Trick, defraud, or mislead us and other users</li>
              <li>Attempt to impersonate another user or person</li>
            </ul>
          </section>

          <section data-aos="fade-up" data-aos-delay="250">
            <h2 className="text-2xl font-bold mb-4">User Generated Contributions</h2>
            <p>
              The website may invite you to chat, contribute to, or participate in blogs, message boards, online forums, and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the website, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions").
            </p>
            <p>
              Any Contribution you transmit to us will be treated as non-confidential and non-proprietary. By creating or submitting a Contribution, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 mt-3">
              <li>Your Contributions do not violate the privacy rights, publicity rights, copyrights, contract rights, or any other rights of any person</li>
              <li>Your Contributions are not false, inaccurate, or misleading</li>
              <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation</li>
              <li>Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 sexually or violently</li>
            </ul>
          </section>

          <section data-aos="fade-up" data-aos-delay="300">
            <h2 className="text-2xl font-bold mb-4">Disclaimer</h2>
            <p>
              THE WEBSITE AND SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE WEBSITE AND SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE WEBSITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="350">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE WEBSITE OR SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="400">
            <h2 className="text-2xl font-bold mb-4">Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys' fees and expenses, made by any third party due to or arising out of your use of the website or services.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="450">
            <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
            <p>
              These Terms of Service and your use of the website and services are governed by and construed in accordance with the laws of India applicable to agreements made and to be entirely performed within India, without regard to its conflict of law principles.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="500">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms of Service</h2>
            <p>
              We reserve the right to make changes to these Terms of Service at any time. The most current version will be posted on this page, with the "Last Updated" date at the bottom. Your continued use of the website and services after any changes to these Terms of Service constitutes your acceptance of such changes.
            </p>
          </section>

          <section data-aos="fade-up" data-aos-delay="550">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
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

export default TermsOfService;
