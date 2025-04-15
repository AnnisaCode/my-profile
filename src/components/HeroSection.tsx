
import { ArrowDown } from "lucide-react";

interface HeroSectionProps {
  profileImage: string;
}

const HeroSection = ({ profileImage }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen hero-gradient flex items-center justify-center pt-20 relative">
      <div className="container max-w-7xl mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-20">
          <div className="w-full md:w-1/2 order-2 md:order-1 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-xl md:text-2xl font-medium text-primary mb-4">Hello, I'm</h2>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-gray-900">
              ANNISA
            </h1>
            <p className="text-xl md:text-2xl font-medium text-secondary-foreground mb-4">Software Engineer</p>
            <p className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
              Passionate about solving problems through clean code and efficient logic.
              Skilled in web development, report design, and software engineering.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                className="px-6 py-3 bg-primary text-white rounded-full font-medium hover:bg-primary/90 transition-all"
                onClick={() => {
                  const element = document.getElementById("about");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Learn More
              </button>
              <button
                className="px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary/10 transition-all"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get in Touch
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative creative-border">
              <img
                src={profileImage}
                alt="Profile"
                className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10 relative animate-float"
              />
              <div className="absolute inset-0 rounded-full -m-3 bg-gradient-to-r from-primary/20 to-accent/20 blur-md animate-pulse-glow"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          className="p-2 rounded-full bg-white shadow-md text-primary"
          onClick={() => {
            const element = document.getElementById("about");
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
