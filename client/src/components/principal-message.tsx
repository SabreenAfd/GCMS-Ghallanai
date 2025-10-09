import React from 'react';
import principalImg from "@/assets/principal.jpg";

export default function PrincipalMessage() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-200 rounded-full filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-6xl mx-auto">
         
          {/* Title */}
          <div className="text-center mb-16 slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Principal's Message
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto rounded-full"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12 items-start">
           
            {/* Left: Image and Info */}
            <div className="lg:col-span-1 slide-up delay-200">
              <div className="text-center sticky top-8">
                <div className="mb-6 group">
                  <div className="relative inline-block">
                    <div className="absolute inset-0 bg-blue-200  rounded-xl transform rotate-6 group-hover:rotate-12 transition-transform duration-500"></div>
                    <img
                      src={principalImg}
                      alt="Dr Mian Wajahat Hussain - Principal GCMS Ghallanai"
                      className="relative w-full h-80 object-cover rounded-xl shadow-2xl border-4 border-white transform group-hover:scale-105 transition-transform duration-500"
                      data-testid="img-principal"
                    />
                  </div>
                </div>
                
                <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-300">
                  <h3
                    className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 mb-2"
                    data-testid="text-principal-name"
                  >
                    Dr Mian Wajahat Hussain
                  </h3>
                  <p
                    className="text-gray-600 text-sm font-semibold uppercase tracking-wider"
                    data-testid="text-principal-position"
                  >
                    Principal, GCMS Ghallanai
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Message */}
            <div className="lg:col-span-2 slide-up delay-400">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 hover:shadow-2xl transition-shadow duration-500">
                <div
                  className="text-gray-700 leading-relaxed space-y-6"
                  data-testid="text-principal-message"
                >
                  <p className="text-lg leading-loose">
                    Welcome to <span className="font-bold text-blue-600">GCMS Ghallanai, District Mohmand</span>, a center of learning where curiosity, innovation, and excellence thrive. We are committed to developing <span className="font-semibold">skilled professionals, critical thinkers, and responsible leaders</span> who are equipped to meet modern challenges and contribute positively to society.
                  </p>
                 
                  <p className="text-lg leading-loose">
                    At <span className="font-bold text-blue-600">GCMS Ghallanai</span>, we believe in providing a holistic education that goes beyond textbooks and examinations. With our <span className="font-semibold">dedicated faculty, state-of-the-art facilities</span>, and comprehensive curriculum, we ensure that every student receives a strong foundation for their future endeavors.
                  </p>
                 
                  <div className="relative mt-8 pt-6 border-t-2 border-black">
                    
                    <p className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600  text-center leading-loose">
                      I warmly welcome all students and wish you a rewarding journey filled with discovery, growth, and success. Together, we will build a brighter future through education and excellence. Amen!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}