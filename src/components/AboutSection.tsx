const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am a Fullstack Web Developer with a strong focus on frontend development and currently expanding my expertise in backend development using PHP. With a background in IT, I have honed my skills in HTML, CSS, JavaScript, and React to create clean, responsive, and user-friendly web applications.
            I am passionate about learning and solving problems by developing efficient solutions. As I continue to explore the fullstack development ecosystem, I am dedicated to delivering high-quality, scalable web applications through modern tools like Tailwind CSS and Scrum methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Skills Focus</h3>
            <p className="text-gray-700">
              Focused on both frontend and backend development, with a strong emphasis on clean visual design, responsive layouts, and building scalable web applications using PHP, React, and Tailwind CSS.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <p className="text-gray-700">
              Practical experience in frontend web development, building dynamic and user-centric applications. Currently expanding into backend development with PHP, while maintaining a focus on efficient, high-quality code.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Career Goals</h3>
            <p className="text-gray-700">
              Aiming to grow as a fullstack developer, mastering both frontend and backend technologies to build robust, scalable web applications. I am excited to collaborate on impactful projects and continue refining my skills in modern development workflows.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
