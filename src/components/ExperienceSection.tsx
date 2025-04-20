import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Crystal Report Developer",
    company: "PT Inti Digital Madani",
    period: "Sep 2024 - Dec 2024",
    duration: "4 months",
    location: "Batam, Riau Islands, Indonesia (Remote)",
    description: "Designed visually engaging Crystal Reports, transforming raw data into insightful and appealing reports, making complex information easily accessible. Created striking layouts and dynamic visuals, including charts and graphics, bringing data to life and enhancing readability. Collaborated closely with team members to ensure each report met business requirements, while adding a unique and impactful design touch.",
    skills: ["Crystal Reports", "Report Design", "Data Visualization", "Attention to Detail", "Team Collaboration"]
  },
  {
    title: "Frontend Developer",
    company: "PT Inti Digital Madani",
    period: "Jan 2024 - Dec 2024",
    duration: "1 year",
    location: "Batam, Kepulauan Riau, Indonesia",
    description: "Maintain and update the company's website, ensuring it remains functional, responsive, and visually appealing. Collaborate with other teams to implement updates and resolve issues, ensuring smooth website performance. Write and refine efficient, testable code to support ongoing improvements. Optimize the website for better performance, speed, and SEO.",
    skills: ["Version Control (Git)", "Cross-Browser Testing", "Debugging", "Front-end Development", "Performance Optimization"]
  },
  {
    title: "Pentaho Report Designer",
    company: "PT Inti Digital Madani",
    period: "Jul 2023 - Dec 2024",
    duration: "1 year 6 months",
    location: "Batam, Kepulauan Riau, Indonesia",
    description: "Seamlessly transitioned reporting systems from Crystal Reports and REXpert Report to the Pentaho platform, enhancing data integration and accessibility. Skillfully retrieved and modeled data to produce clear, insightful reports, making complex data understandable and accessible for stakeholders.",
    skills: ["Report Migration", "Crystal Reports", "REXpert BI", "Pentaho Platform", "Data Modeling"]
  },
  {
    title: "Scrum Master Intern",
    company: "Polibatam Software Team",
    period: "Feb 2021 - Aug 2021",
    duration: "7 months",
    location: "Batam, Indonesia",
    description: "Assisted lecturers in the teaching process using problem-based learning methods. Supporting lecturers in handling the learning process for 2 classes, each consisting of 5 groups. Creating materials to help students understand the learning process through problem-based learning methods.",
    skills: ["Assistant Teaching", "Agile Methodologies", "Coaching & Mentoring", "Scrum", "Analytical Skills"]
  },
  {
    title: "Software Developer Intern",
    company: "Polibatam Software Team",
    period: "Jul 2020 - Aug 2021",
    duration: "1 year 2 months",
    location: "Batam Kota, Kepulauan Riau, Indonesia",
    description: "Researching, designing, implementing, and managing software programs. Testing and evaluating new programs to ensure functionality and efficiency. Creating comprehensive technical application documents. During my internship, I successfully developed a web-based Information System for the Certification Institute (LSP Polibatam).",
    skills: ["Software Development", "Technical Documentation", "Team Collaboration", "Project Management", "Problem Solving"]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">My professional journey and the projects I've worked on.</p>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-0.5 bg-primary/20 transform -translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className="md:w-1/2 relative">
                  <div className="hidden md:block absolute top-8 left-1/2 w-8 h-0.5 bg-primary/20"></div>
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 transition-all hover:shadow-md relative z-10">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-primary/10 p-2 rounded-lg flex-shrink-0 mt-1">
                        <Briefcase className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-primary font-medium">{experience.company}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <Calendar size={16} />
                      <span className="text-sm">{experience.period} · {experience.duration}</span>
                    </div>

                    <p className="text-gray-700 mb-4">{experience.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {experience.skills.slice(0, 4).map((skill, i) => (
                        <span key={i} className="skill-badge">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex w-1/2 justify-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full border-4 border-white flex items-center justify-center shadow-sm">
                    <span className="text-primary font-bold">{index + 1}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
