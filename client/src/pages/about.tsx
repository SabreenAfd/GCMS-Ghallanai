import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

import collegeImage from "@/assets/hero1.jpg";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">About GCMS Ghallanai</h1>
          <p className="text-xl opacity-90 slide-up delay-200">Learn more about GCMS Ghallanai</p>
        </div>
      </section>

      {/* About Description Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* College Image - Left Side */}
              <div className="slide-up delay-600 overflow-hidden rounded-lg shadow-xl sticky top-8">
                <img 
                  src={collegeImage}
                  alt="GCMS Ghallanai Campus" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Text Content - Right Side */}
              <div className="space-y-6 text-black leading-relaxed">
                <p className="slide-up delay-800 text-lg">
                  <span className="font-bold">Government College of Management Sciences Ghallanai</span> was established in <span className="font-bold">1978</span> in response to the growing demand for commercial education. Over time, public awareness of the importance of this field increased remarkably. The college was later upgraded in <span className="font-bold">2004</span> by the then Governor of Khyber Pakhtunkhwa, (Late) Lt. Gen. (Retd.) Syed Iftikhar Hussain Shah, with the introduction of <span className="font-bold">BBA (Hons)</span> and <span className="font-bold">BIT (Hons)</span> programs.
                </p>
                <p className="slide-up delay-1000 text-lg">
                  Under the dynamic leadership of <span className="font-bold">Dr. Wajahat Hussain</span>, who took charge as Principal in <span className="font-bold">January 2025</span>, the college has seen significant improvements. He has successfully addressed many long-standing issues by ensuring a fresh and clean water supply through two new connections, installing <span className="font-bold">two modern water filtration systems</span>, and fully functionalizing bathrooms and the sanitary system. The <span className="font-bold">hostel has been made operational</span>, and the college now receives <span className="font-bold">uninterrupted electricity</span> through a new express line, effectively resolving the previous power issues.
                </p>
                <p className="slide-up delay-1200 text-lg">
                  The college campus features a mosque, two green lawns, a spacious hall for co-curricular activities, and a large playground. It also houses <span className="font-bold">three computer laboratories</span>, <span className="font-bold">two digital classrooms</span>, and <span className="font-bold">two advanced solar systems (9 KV and 5 KV)</span>. As a true disciplinarian and reformer, <span className="font-bold">Dr. Wajahat Hussain</span> continues to promote <span className="font-bold">academic excellence, discipline</span>, and a clean, functional learning environment for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="slide-up delay-600 transform hover:scale-105 transition-transform duration-500">
                <div className="h-full p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
                  <p className="text-black leading-relaxed text-lg">
                    To equip students with the knowledge and skills in management, accounting, finance, and economics through quality teaching and research, enabling them to address global, national, and local challenges effectively.
                  </p>
                </div>
              </div>
              <div className="slide-up delay-800 transform hover:scale-105 transition-transform duration-500">
                <div className="h-full p-8 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg hover:shadow-2xl transition-shadow duration-500">
                  <h2 className="text-3xl font-bold text-black mb-6">Our Vision</h2>
                  <p className="text-black leading-relaxed text-lg">
                    To be a leading institution in Commerce and Management Sciences, contributing to the socio-economic development of the community through excellence in education, research, and the management of industrial and commercial activities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Our Values</h2>
            <p className="text-black text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg shadow-lg bg-[#89c5fd] slide-up delay-200 transform hover:scale-110 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in education and student development.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg bg-[#89c5fd] slide-up delay-400 transform hover:scale-110 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-semibold text-black mb-3">Integrity</h3>
              <p className="text-black">We maintain the highest ethical standards in all our interactions.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg bg-[#89c5fd] slide-up delay-600 transform hover:scale-110 hover:shadow-2xl transition-all duration-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
              <p className="text-black">We embrace new ideas and approaches to enhance learning experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
