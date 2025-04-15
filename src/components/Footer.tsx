
// import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold">AnnisaCode</h3>
            <p className="text-gray-400 mt-2">Creative Web Developer & Report Designer</p>
          </div>

          <div className="flex space-x-6">
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("about");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("experience");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Experience
            </a>
            <a
              href="#portfolio"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("portfolio");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById("contact");
                if (element) {
                  element.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact
            </a>
          </div>

          {/* <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 p-3 bg-primary/20 hover:bg-primary/30 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} className="text-primary" />
          </button> */}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} AnnisaCode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
