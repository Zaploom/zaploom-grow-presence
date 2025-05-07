
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book } from "lucide-react";

// Sample blog posts for demonstration
const blogPosts = [
  {
    id: 1,
    title: "10 Web Design Trends to Watch in 2025",
    snippet: "Explore the latest design trends shaping the web development landscape in 2025, from glassmorphism to 3D elements.",
    image: "https://images.unsplash.com/photo-1481487196290-c152efe083f5?q=80&w=800",
    category: "design",
    date: "May 4, 2025",
    author: "Priya Sharma"
  },
  {
    id: 2,
    title: "How to Optimize Your Website for Speed",
    snippet: "Learn proven techniques to make your website load faster and improve your Google PageSpeed score with these actionable tips.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    category: "performance",
    date: "April 28, 2025",
    author: "Rahul Verma"
  },
  {
    id: 3,
    title: "Creating Accessible Websites: A Complete Guide",
    snippet: "Discover how to make your website accessible to everyone, including people with disabilities, while improving SEO.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    category: "accessibility",
    date: "April 15, 2025",
    author: "Neha Gupta"
  },
  {
    id: 4,
    title: "Getting Started with React and Tailwind CSS",
    snippet: "A step-by-step tutorial for beginners on how to build modern, responsive interfaces with React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
    category: "development",
    date: "April 3, 2025",
    author: "Arjun Patel"
  }
];

// Available blog categories
const categories = [
  { id: "all", name: "All Posts" },
  { id: "design", name: "Design" },
  { id: "development", name: "Development" },
  { id: "performance", name: "Performance" },
  { id: "accessibility", name: "Accessibility" }
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Filter posts by category
  const filteredPosts = activeCategory === "all"
    ? blogPosts
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <section 
      id="blog" 
      className="py-20 lg:py-24 bg-gray-50 dark:bg-gray-900 theme-transition relative"
      data-aos="fade-up"
    >
      {/* Background design element */}
      <div className="absolute left-0 bottom-0 h-64 w-64 bg-zaploom/5 dark:bg-zaploom/10 rounded-full blur-3xl"></div>
      
      <div className="container-custom relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-gray-100 tracking-tight">
            Latest from Our <span className="text-zaploom dark:text-zaploom-light relative inline-block">
              Blog
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-zaploom/20 dark:bg-zaploom-light/30 rounded-full"></span>
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Insights, tutorials, and updates from our team to help you build better digital experiences.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2 mt-8 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-zaploom dark:bg-zaploom text-white"
                  : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              }`}
              aria-label={`Filter by ${category.name}`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="blog-card overflow-hidden flex flex-col h-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-zaploom/90 text-white text-xs uppercase tracking-wider py-1 px-3 rounded-full">
                  {post.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.author}</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                  {post.snippet}
                </p>
                <div className="mt-auto">
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto text-zaploom dark:text-zaploom-light hover:bg-transparent hover:text-zaploom-dark dark:hover:text-white group flex items-center"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            className="btn-primary group flex items-center gap-2"
            data-aos="fade-up"
          >
            <Book className="h-5 w-5" />
            View All Articles
            <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
