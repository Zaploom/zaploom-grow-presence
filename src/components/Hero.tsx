
// components/Hero.tsx

"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

// WhatsApp message redirect
const handleWhatsAppRedirect = () => {
  const message = encodeURIComponent("Hi, I'm interested in starting a project with Zaploom. Can we discuss?");
  const whatsappURL = `https://wa.me/+919199893756?text=${message}`;
  window.open(whatsappURL, "_blank");
};

// Framer Motion variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative py-28 md:py-36 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950 overflow-hidden"
    >
      {/* Background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-24 left-[10%] w-64 h-64 lg:w-96 lg:h-96 bg-zaploom/5 dark:bg-zaploom-light/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-[5%] w-72 h-72 lg:w-[28rem] lg:h-[28rem] bg-zaploom/5 dark:bg-zaploom-light/5 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          initial="hidden"
          animate="visible"
          variants={stagger}
        >
          {/* Heading */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-8 tracking-tight leading-tight"
            variants={fadeInUp}
          >
            Grow Your Presence with{" "}
            <span className="text-zaploom dark:text-zaploom-light relative inline-block">
              Zaploom
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-zaploom/20 dark:bg-zaploom-light/20 rounded-full"></span>
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Modern websites and web apps built to grow your brand, business, or idea — beautifully and efficiently.
          </motion.p>

          {/* Buttons */}
          <motion.div className="flex flex-col sm:flex-row justify-center gap-6" variants={fadeInUp}>
            <Button
              className="btn-primary text-lg group transition-all duration-300 hover:scale-105 flex items-center gap-2"
              onClick={handleWhatsAppRedirect}
            >
              <MessageSquare className="h-5 w-5" />
              Discuss Your Project
              <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              className="text-lg border-zaploom dark:border-zaploom-light text-zaploom dark:text-zaploom-light hover:bg-zaploom/10 dark:hover:bg-zaploom-light/10 transition-all duration-300"
              onClick={() => document.getElementById("portfolio")?.scrollIntoView()}
            >
              View Our Work
            </Button>
          </motion.div>

          {/* Scroll dot */}
          <motion.div className="mt-12 flex items-center justify-center gap-2" variants={fadeInUp}>
            <span className="block h-2 w-2 rounded-full bg-zaploom dark:bg-zaploom-light animate-bounce"></span>
            <span className="text-sm text-gray-500 dark:text-gray-400">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Wave SVG */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-24"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,140.83,94.17,208.18,82.73Q278,69.38,321.39,56.44Z"
            className="fill-white dark:fill-gray-950"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
