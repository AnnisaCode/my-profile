import { ExternalLink } from "lucide-react";

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Portfolio</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Featured projects I've worked on throughout my career.</p>
        </div>

        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center">
          <a
            href="https://annisacode.github.io/side-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-primary to-accent text-white px-8 py-6 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span>Personal Projects</span>
              <ExternalLink size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-white/80">Explore my creative personal projects and experiments</p>
          </a>

          <a
            href="https://annisacode.github.io/annisa-s-portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-gray-800 to-gray-700 text-white px-8 py-6 rounded-xl shadow-sm hover:shadow-md transition-all"
          >
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span>Professional Work</span>
              <ExternalLink size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-white/80">View my contributions to client and company projects</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
