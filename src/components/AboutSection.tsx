
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Motivated IT graduate with hands-on experience in web development, report design, and software engineering. 
            Skilled in HTML, CSS, JavaScript, Crystal Reports, and Pentaho. Passionate about solving problems through clean code 
            and efficient logic. Currently exploring fullstack development with a focus on React, Next.js, Node.js, and PostgreSQL. 
            Eager to grow, collaborate, and contribute to impactful tech projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Skills Focus</h3>
            <p className="text-gray-700">Combining technical expertise with creative problem-solving to build efficient and user-friendly digital solutions.</p>
          </div>
          
          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <p className="text-gray-700">Practical experience in report design, web development, and software engineering, with a focus on delivering quality results.</p>
          </div>
          
          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Career Goals</h3>
            <p className="text-gray-700">Continuing to grow as a fullstack developer, collaborating on innovative projects, and making a positive impact through technology.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
