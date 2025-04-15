import { Mail, Linkedin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLocked, setIsLocked] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS service, template, and user ID (replace with your actual IDs)
    const serviceId = "service_id"; // Replace with your EmailJS service ID
    const templateId = "template_id"; // Replace with your EmailJS template ID
    const userId = "user_id"; // Replace with your EmailJS user ID

    try {
      emailjs.send(serviceId, templateId, {
        from_name: formData.name,
        reply_to: formData.email,
        message: formData.message
      }, userId)
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitting(false);
          setFormData({ name: "", email: "", message: "" });

          toast({
            title: "Message sent!",
            description: "Thank you for your message. I'll get back to you soon.",
            variant: "default",
          });
        }, (error) => {
          console.log("FAILED...", error);
          setIsSubmitting(false);

          toast({
            title: "Error sending message",
            description: "Please try again later or contact me directly via email.",
            variant: "destructive",
          });
        });
    } catch (error) {
      console.error("Error sending email:", error);
      setIsSubmitting(false);

      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                {/* <div className="bg-primary/10 p-3 rounded-lg mt-1">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">Email</h4>
                  <a
                    href="mailto:contact@example.com"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    contact@example.com
                  </a>
                </div> */}
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg mt-1">
                  <Linkedin className="text-primary" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1">LinkedIn</h4>
                  <a
                    href="https://linkedin.com/in/annisa1202"
                    target="_blank"
                    rel="noreferrer"
                    className="text-gray-700 hover:text-primary transition-colors"
                  >
                    linkedin.com/in/annisa1202
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h4 className="text-lg font-bold mb-4">Let's Connect</h4>
              <p className="text-gray-700 mb-6">
                Feel free to reach out if you're looking for a developer, have a question, or just want to connect.
              </p>

              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/annisa1202"
                  target="_blank"
                  rel="noreferrer"
                  className="bg-[#0077B5] text-white p-3 rounded-lg transition-transform hover:scale-105"
                >
                  <Linkedin size={24} />
                </a>
                {/* <a
                  href="mailto:contact@example.com"
                  className="bg-primary text-white p-3 rounded-lg transition-transform hover:scale-105"
                >
                  <Mail size={24} />
                </a> */}
              </div>
            </div>
          </div>

          {/* TODO:Jangan lupa nanti aktifkan lagi fitur send me message ke email ini, usahakan cari cara selain menggunakan emailjs dulu */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            {isLocked ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-6">Coming Soon</h3>
                <p className="text-gray-700">This section will be available soon.</p>
              </div>
            ) : (
              <>
                <h3 className="text-2xl font-bold mb-6">Send Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                      placeholder="Your message here..."
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center hover:bg-primary/90 transition-colors"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
