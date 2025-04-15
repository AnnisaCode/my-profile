
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            Detail-oriented IT graduate with practical experience in frontend web development and report design. Skilled in HTML, CSS, JavaScript, and experienced with tools like Crystal Reports and Pentaho.
            Currently focusing on modern frontend frameworks such as React, Next.js, and Tailwind CSS, while continuously adopting efficient tools and workflows to boost productivity and maintain high code quality.
            Passionate about crafting clean, responsive interfaces and solving problems through collaborative, efficient development.
            Eager to contribute to innovative web projects and grow as a frontend developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Skills Focus</h3>
            <p className="text-gray-700">
              Focused on frontend development with strengths in clean visual design, responsive layouts, and problem-solving to deliver seamless and accessible user experiences.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <p className="text-gray-700">
              Practical experience in frontend development and report design, contributing to user-centered digital projects with attention to detail and code quality.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Career Goals</h3>
            <p className="text-gray-700">
              Aiming to grow as a frontend developer by creating intuitive interfaces, collaborating on meaningful projects, and refining skills through modern development tools and workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
