import { Linkedin } from "lucide-react";

const ContactSection = () => {
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL; // Use import.meta.env for Vite

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities. As I continue exploring various roles within web development, I’m excited to collaborate, learn, and grow together on impactful projects.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-3 rounded-lg mt-1">
                <Linkedin className="text-primary" size={24} />
              </div>
              <div>
                <h4 className="text-lg font-bold mb-1">LinkedIn</h4>
                <a
                  href={linkedinUrl || "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
                >
                  <Linkedin size={18} />
                  <span>View Profile</span>
                </a>
              </div>
            </div>
          </div>


          <div className="mt-12">
            <h4 className="text-lg font-bold mb-4">Let's Connect</h4>
            <p className="text-gray-700 mb-6">
              Feel free to reach out if you're looking for a developer, have a question, or just want to connect. I'm eager to explore different roles and contribute to projects that inspire growth and creativity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
