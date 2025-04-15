
import { GraduationCap, Award } from "lucide-react";

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-secondary/30">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Education & Certifications</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">My academic background and professional certifications that have shaped my technical knowledge.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <GraduationCap className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold">Education</h3>
            </div>

            <div className="border-l-2 border-primary/30 pl-6 ml-3 relative">
              <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
              <div className="mb-8">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="text-lg font-bold">Politeknik Negeri Batam</h4>
                  <span className="text-sm bg-secondary px-3 py-1 rounded-full">2018-2021</span>
                </div>
                <p className="text-gray-700">Associate's degree, Informatics Engineering</p>
                <p className="text-primary font-medium mt-1">GPA: 3.60/4.00</p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-primary/10 p-3 rounded-lg">
                <Award className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl font-bold">Certifications</h3>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-primary/30 pl-6 ml-3 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold">Responsive Web Design</h4>
                    <span className="text-sm bg-secondary px-3 py-1 rounded-full">Mar 2025</span>
                  </div>
                  <p className="text-gray-700">freeCodeCamp</p>
                </div>
              </div>

              <div className="border-l-2 border-primary/30 pl-6 ml-3 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold">Master Java Web Services and REST API</h4>
                    <span className="text-sm bg-secondary px-3 py-1 rounded-full">Feb 2024</span>
                  </div>
                  <p className="text-gray-700">Udemy</p>
                </div>
              </div>

              <div className="border-l-2 border-primary/30 pl-6 ml-3 relative">
                <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-lg font-bold">Junior Web Programmer</h4>
                    <span className="text-sm bg-secondary px-3 py-1 rounded-full">Dec 2020</span>
                  </div>
                  <p className="text-gray-700">Badan Nasional Sertifikasi Profesi (BNSP)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
