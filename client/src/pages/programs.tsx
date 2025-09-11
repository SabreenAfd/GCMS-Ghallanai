import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AcademicPrograms from "@/components/academic-programs";

const programDetails = [
  {
    title: "Bachelor of Commerce (B.Com)",
    duration: "2 Years",
    description: "Comprehensive program covering accounting, economics, business law, and management principles.",
    subjects: ["Financial Accounting", "Business Mathematics", "Economics", "Business Law", "Marketing"],
    icon: "fas fa-calculator",
    color: "from-blue-500 to-blue-600"
  },
  {
    title: "Diploma in Business Administration (DBA)",
    duration: "2 Years",
    description: "Practical business education focusing on management skills and entrepreneurship.",
    subjects: ["Business Management", "Human Resources", "Marketing", "Finance", "Operations"],
    icon: "fas fa-briefcase",
    color: "from-green-500 to-green-600"
  },
  {
    title: "Teaching Skills Certificate (TSC)",
    duration: "1 Year",
    description: "Professional development program for aspiring educators and current teachers.",
    subjects: ["Pedagogy", "Educational Psychology", "Curriculum Development", "Assessment", "Classroom Management"],
    icon: "fas fa-chalkboard-teacher",
    color: "from-purple-500 to-purple-600"
  }
];

export default function Programs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      
      {/* Page Header: KEEP THIS GRADIENT */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">Academic Programs</h1>
          <p className="text-xl opacity-90 slide-up delay-200">Discover our comprehensive educational offerings</p>
        </div>
      </section>

      {/* Academic Programs Section */}
      <div className="slide-up delay-400 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
        <AcademicPrograms />
      </div>

      {/* Detailed Programs Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Program Details</h2>
            <p className="text-gray-600 text-lg">In-depth information about our academic offerings</p>
          </div>
          
          <div className="space-y-8 max-w-6xl mx-auto">
            {programDetails.map((program, index) => (
              <div key={index} className={`slide-up delay-${(index + 1) * 200}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                  <div className={`bg-gradient-to-r ${program.color} p-6 text-white`}>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <i className={`${program.icon} text-2xl`}></i>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">{program.title}</h3>
                        <p className="opacity-90">Duration: {program.duration}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 mb-6">{program.description}</p>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 mb-3">Key Subjects:</h4>
                      <div className="grid md:grid-cols-3 gap-2">
                        {program.subjects.map((subject, idx) => (
                          <div key={idx} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700">
                            {subject}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Admission Requirements</h2>
            <p className="text-gray-600 text-lg">What you need to know before applying</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center slide-up delay-200">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-graduate text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Academic Qualification</h3>
              <p className="text-gray-600">Minimum intermediate or equivalent qualification required for admission.</p>
            </div>
            <div className="text-center slide-up delay-400">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-file-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Documentation</h3>
              <p className="text-gray-600">Complete application form with required documents and certificates.</p>
            </div>
            <div className="text-center slide-up delay-600">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-calendar-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Application Deadline</h3>
              <p className="text-gray-600">Submit applications before the specified deadline for each semester.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
