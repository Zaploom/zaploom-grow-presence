
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Instagram, Linkedin, Github, Mail, Phone, MessageSquare, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Use EmailJS to send the form
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formRef.current!,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        toast({
          title: "Message sent!",
          description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error('Email sending failed:', error.text);
        toast({
          title: "Failed to send message",
          description: "Please try again later or contact us directly.",
          variant: "destructive",
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 tracking-tight">
            Get In <span className="text-zaploom">Touch</span>
          </h2>
          <p className="text-lg text-gray-600">
            Have a project or question? Let's talk! Fill out the form and we'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Send Us a Message</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  className="w-full min-h-[150px]"
                />
              </div>
              
              <Button 
                type="submit" 
                className="btn-primary w-full transition-opacity hover:opacity-90 duration-200" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-zaploom/10 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-zaploom" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Email</h4>
                    <a href="mailto:zaploom.agency@gmail.com" className="text-gray-600 hover:text-zaploom transition-colors duration-200">
                      zaploom.agency@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-zaploom/10 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-zaploom" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">WhatsApp</h4>
                    <a href="tel:+919199893756" className="text-gray-600 hover:text-zaploom transition-colors duration-200">
                      +91-9199893756
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="bg-zaploom/10 p-3 rounded-full mr-4">
                    <MessageSquare className="h-6 w-6 text-zaploom" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Social Media</h4>
                    <div className="flex space-x-4 mt-2">
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-zaploom transition-colors duration-200"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-zaploom transition-colors duration-200"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                      <a 
                        href="#" 
                        className="text-gray-600 hover:text-zaploom transition-colors duration-200"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-lg font-medium text-gray-900 mb-4">When to Expect Our Response</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-zaploom mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Initial response within 24 hours
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-zaploom mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Project discussion call scheduled within 48 hours
                  </span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-zaploom mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">
                    Proposal and quote sent within 3-5 days
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
