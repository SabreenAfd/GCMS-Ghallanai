import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PrincipalMessage from "@/components/principal-message";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      
      {/* Page Header*/}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">About Us</h1>
          <p className="text-xl opacity-90 slide-up delay-200">Learn more about GCMS Ghallanai</p>
        </div>
      </section>

      {/* Principal Message Section */}
      <div className="slide-up delay-400 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-0 py-16 leading-[5.25rem]">

        <PrincipalMessage />
      </div>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="slide-up delay-600">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To provide quality education in Commerce and Management Sciences, preparing students for successful careers and leadership roles in the business world.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We strive to create an environment that fosters critical thinking, innovation, and ethical business practices.
                </p>
              </div>
              <div className="slide-up delay-800">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Vision</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  To be a leading institution in commerce and management education, recognized for academic excellence and producing graduates who contribute meaningfully to society.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We envision a future where our students become ethical leaders and successful entrepreneurs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-gray-600 text-lg">The principles that guide everything we do</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg shadow-lg bg-blue-50 slide-up delay-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-graduation-cap text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Excellence</h3>
              <p className="text-gray-600">We strive for the highest standards in education and student development.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg bg-green-50 slide-up delay-400">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-handshake text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Integrity</h3>
              <p className="text-gray-600">We maintain the highest ethical standards in all our interactions.</p>
            </div>
            <div className="text-center p-6 rounded-lg shadow-lg bg-yellow-50 slide-up delay-600">
              <div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-lightbulb text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Innovation</h3>
              <p className="text-gray-600">We embrace new ideas and approaches to enhance learning experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
