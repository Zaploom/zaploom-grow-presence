
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const LeadMagnet = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "Your checklist is on its way to your inbox.",
      });
      setIsSubmitting(false);
      setIsSubscribed(true);
      setEmail("");
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zaploom/10 to-gray-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-5">
            <div className="bg-zaploom p-10 md:p-12 text-white md:col-span-2 flex items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Free 5-Step Website Launch Checklist</h3>
                <ul className="space-y-3 mb-6">
                  {["SEO essentials", "Performance tips", "Launch strategy", "Marketing tools", "Post-launch tasks"].map((item, i) => (
                    <li key={i} className="flex items-center">
                      <Check className="h-5 w-5 mr-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-white/80 text-sm">
                  Get our proven checklist that has helped 25+ clients launch successfully.
                </p>
              </div>
            </div>
            
            <div className="p-10 md:p-12 md:col-span-3 flex items-center">
              <div className="w-full">
                <h3 className="text-2xl font-bold mb-2 text-gray-900">Ready to launch your perfect website?</h3>
                <p className="text-gray-600 mb-6">
                  Enter your email to receive our free checklist and exclusive tips for a successful website launch.
                </p>
                
                {!isSubscribed ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        type="email"
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="btn-primary w-full sm:w-auto transition-all duration-300 hover:scale-105"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <span className="flex items-center">
                          Get Free Checklist <ArrowRight className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                    <p className="text-xs text-gray-500 mt-2">
                      We respect your privacy. Unsubscribe anytime.
                    </p>
                  </form>
                ) : (
                  <div className="bg-green-50 p-4 rounded-md border border-green-100">
                    <div className="flex items-center text-green-600">
                      <Check className="h-5 w-5 mr-2" />
                      <p className="font-medium">Thank you for subscribing!</p>
                    </div>
                    <p className="text-green-700 mt-1 text-sm">
                      Check your inbox for the checklist and welcome email.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;
