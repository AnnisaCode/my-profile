
import { Code, Layout, Server, Database, LineChart, Users } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-primary" size={28} />,
      skills: ["HTML", "CSS", "JavaScript", "React", "Responsive Design", "Tailwind CSS"]
    },
    {
      title: "Backend Development",
      icon: <Server className="text-primary" size={28} />,
      skills: ["Java", "Spring Boot", "REST APIs", "Web Services", "NodeJS"]
    },
    {
      title: "Programming Languages",
      icon: <Code className="text-primary" size={28} />,
      skills: ["JavaScript", "Java", "PHP", "SQL"]
    },
    {
      title: "Database",
      icon: <Database className="text-primary" size={28} />,
      skills: ["SQL Server", "PostgreSQL"]
    },
    {
      title: "Data Visualization",
      icon: <LineChart className="text-primary" size={28} />,
      skills: ["Crystal Reports", "Pentaho", "REXpert BI", "Data Modeling", "Report Design"]
    },
    {
      title: "Soft Skills",
      icon: <Users className="text-primary" size={28} />,
      skills: ["Team Collaboration", "Problem Solving", "Attention to Detail", "Project Management", "Agile Methodologies"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Skills & Expertise</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">Technical and professional skills I've developed throughout my career.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-4">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className={i % 3 === 0 ? "skill-badge-accent" : "skill-badge"}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
