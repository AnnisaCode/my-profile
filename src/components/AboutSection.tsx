const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-8 rounded-full"></div>
          <p className="text-lg text-gray-700 leading-relaxed">
            I am passionate about exploring various roles within the tech industry. Rather than focusing on a single specialization, I am committed to learning and adapting across different areas to find the best fit for my skills and interests. I am driven by a curiosity for new challenges and am excited to contribute to diverse projects, honing my skills in the process. I aim to grow by embracing new opportunities and collaborating with others in dynamic environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Skills Focus</h3>
            <p className="text-gray-700">
              Exploring a wide range of skills across frontend and backend development, with a strong interest in learning how to integrate various technologies to build well-rounded, user-centric solutions. I am particularly focused on gaining experience in both the technical and creative aspects of web development.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <p className="text-gray-700">
              With a background in web development, I have gained practical experience in building responsive, user-friendly applications. I am currently expanding my knowledge and skills in different areas of development, embracing both frontend and backend challenges as I explore new technologies and workflows.
            </p>
          </div>

          <div className="bg-secondary/50 rounded-xl p-8 transition-all hover:shadow-md hover:bg-secondary/70">
            <h3 className="text-xl font-bold mb-4">Career Goals</h3>
            <p className="text-gray-700">
              I aim to continue growing within the tech industry by exploring diverse roles and responsibilities. By embracing opportunities across various domains, I seek to find the role that aligns best with my strengths and aspirations, contributing to impactful projects along the way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
