
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Zaploom built my portfolio in 3 days and I already got freelance clients through it! Super clean and smooth experience.",
      author: "Arjun D.",
      title: "Freelancer"
    },
    {
      quote: "From the first call to final delivery, they made our clinic website look professional and trustworthy. Highly recommend!",
      author: "Dr. Sneha R.",
      title: "Clinic Owner"
    },
    {
      quote: "Our startup MVP was delivered ahead of schedule. The team's attention to detail and design sensibilities are exceptional.",
      author: "Priya M.",
      title: "Startup Founder"
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-zaploom text-white relative overflow-hidden" id="testimonials" data-aos="fade-up">
      {/* Background design element */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg opacity-90">
            Don't just take our word for it. Here's what our clients have to say about working with Zaploom.
          </p>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-4/5">
                  <div className="p-1">
                    <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden">
                      <CardContent className="p-8 flex flex-col items-start">
                        <svg
                          className="h-10 w-10 text-white/70 mb-6"
                          fill="currentColor"
                          viewBox="0 0 32 32"
                          aria-hidden="true"
                        >
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p className="text-xl md:text-2xl mb-6 italic text-left font-light leading-relaxed">
                          "{testimonial.quote}"
                        </p>
                        <div className="flex items-center mt-6">
                          <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center text-lg font-bold">
                            {testimonial.author[0]}
                          </div>
                          <div className="ml-4">
                            <p className="font-semibold text-lg">{testimonial.author}</p>
                            <p className="text-white/70">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-2 mt-8">
              <CarouselPrevious className="relative -left-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20" />
              <CarouselNext className="relative -right-0 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border-white/20" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
