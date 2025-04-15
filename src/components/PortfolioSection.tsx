
import { ExternalLink, Code } from "lucide-react";

const PortfolioSection = () => {
  const portfolioItems = [
    {
      title: "Preventive Maintenance FBMS 2 BP Batam",
      type: "Professional Project",
      period: "Jan 2024 - Dec 2024",
      company: "PT Inti Digital Madani",
      description: "Website maintenance project ensuring functionality, responsiveness, and visual appeal. Implemented updates, optimized performance, and resolved technical issues while collaborating with cross-functional teams.",
      skills: ["Maintenance", "Team Collaboration", "Web Development", "Performance Optimization"]
    },
    {
      title: "Sistem Informasi LSP Polibatam",
      type: "Academic Project",
      period: "Aug 2020 - May 2021",
      company: "Polibatam Software Team",
      description: "Web-based Information System for the Certification Institute (LSP Polibatam). Developed using PHP, HTML, CSS, JavaScript, and SQL Server. Implemented features for certification management, user accounts, and reporting.",
      skills: ["Responsive Web Design", "Full-stack Programming", "Database Design", "User Interface"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Portfolio</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Featured projects I've worked on throughout my career.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {portfolioItems.map((item, index) => (
            <div 
              key={index} 
              className="portfolio-card bg-white shadow-sm border border-gray-100 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-primary/10 p-2 rounded-lg">
                  <Code className="text-primary" size={20} />
                </div>
                <span className="text-sm bg-secondary px-3 py-1 rounded-full">
                  {item.period}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-primary font-medium mb-4">{item.company} | {item.type}</p>
              
              <p className="text-gray-700 mb-6 flex-grow">{item.description}</p>
              
              <div className="space-y-4 mt-auto">
                <div className="flex flex-wrap gap-2">
                  {item.skills.map((skill, i) => (
                    <span 
                      key={i} 
                      className="skill-badge"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <a 
                  href="#" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Portfolio link would open in a new tab");
                  }}
                >
                  <span>View Details</span>
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row gap-8 justify-center">
          <a 
            href="#" 
            className="group bg-gradient-to-br from-primary to-accent text-white px-8 py-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            onClick={(e) => {
              e.preventDefault();
              alert("Personal projects portfolio would open in a new tab");
            }}
          >
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <span>Personal Projects</span>
              <ExternalLink size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </h3>
            <p className="text-white/80">Explore my creative personal projects and experiments</p>
          </a>
          
          <a 
            href="#" 
            className="group bg-gradient-to-br from-gray-800 to-gray-700 text-white px-8 py-6 rounded-xl shadow-sm hover:shadow-md transition-all"
            onClick={(e) => {
              e.preventDefault();
              alert("Professional projects portfolio would open in a new tab");
            }}
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
