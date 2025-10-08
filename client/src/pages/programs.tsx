import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import AcademicPrograms from "@/components/academic-programs";



export default function Programs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      
      
      

      {/* Academic Programs Section */}
      <div className="slide-up delay-400 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
        <AcademicPrograms />
      </div>

     

      {/* Admission Requirements */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Admission Requirements</h2>
            <p className="text-gray-600 text-lg">What you need to know before applying</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center slide-up delay-200">
              <div className="w-16 h-16  bg-primary  rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-user-graduate text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Academic Qualification</h3>
              <p className="text-gray-600">Minimum intermediate or equivalent qualification required for admission.</p>
            </div>
            <div className="text-center slide-up delay-400">
              <div className="w-16 h-16  bg-primary  rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-file-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Documentation</h3>
              <p className="text-gray-600">Complete application form with required documents and certificates.</p>
            </div>
            <div className="text-center slide-up delay-600">
              <div className="w-16 h-16  bg-primary  rounded-full flex items-center justify-center mx-auto mb-4">
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
