
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm"
          : "bg-white/25 backdrop-blur-sm"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-display font-bold text-primary"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          AnnisaCode
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["about", "education", "experience", "skills", "portfolio", "contact"].map((item) => (
            <button
              key={item}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
              onClick={() => scrollToSection(item)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/90 backdrop-blur-md shadow-md py-4 px-6 animate-fade-in">
          <div className="flex flex-col space-y-4">
            {["about", "education", "experience", "skills", "portfolio", "contact"].map((item) => (
              <button
                key={item}
                className="text-left text-gray-700 hover:text-primary font-medium py-2 transition-colors"
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
