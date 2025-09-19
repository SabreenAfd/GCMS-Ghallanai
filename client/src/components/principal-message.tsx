import React from 'react';
import principalImg from "@/assets/principal.jpg"; 

export default function PrincipalMessage() {
  return (
    <section id="about" className="py-16 bg-slate-100">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          
          {/* Title */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Principal's Message
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Left: Image and Info */}
            <div className="lg:col-span-1">
              <div className="text-center">
                <div className="mb-4">
                  <img
                    src={principalImg}
                    alt="Ali Bahadar - Principal GCMS Ghallanai"
                    className="w-65 h-80 object-cover rounded-lg shadow-lg mx-auto border-4 border-gray-100"
                    data-testid="img-principal"
                  />
                </div>
                <h3 
                  className="text-xl font-bold text-gray-800 mb-1"
                  data-testid="text-principal-name"
                >
                  Ali Bahadar
                </h3>
                <p 
                  className="text-gray-600 text-sm font-medium"
                  data-testid="text-principal-position"
                >
                  (Principal, GCMS Ghallanai)
                </p>
              </div>
            </div>

            {/* Right: Message */}
            <div className="lg:col-span-2">
              <div 
                className="text-gray-700 leading-relaxed space-y-4 text-justify"
                data-testid="text-principal-message"
              >
                <p className="text-base">
                  Welcome to GCMS Ghallanai, District Mohmand, a center of learning where curiosity, innovation, and excellence thrive. We are committed to developing skilled professionals, critical thinkers, and responsible leaders who are equipped to meet modern challenges and contribute positively to society.

                </p>
                
                <p className="text-base">
                 At GCMS Ghallanai, we believe in providing a holistic education that goes beyond textbooks and examinations. With our dedicated faculty, state-of-the-art facilities, and comprehensive curriculum, we ensure that every student receives a strong foundation for their future endeavors.
                </p>
               
                
                <p className="text-base font-medium text-blue-700 italic">
                  I warmly welcome all students and wish you a rewarding journey filled with discovery, growth, and success. Together, we will build a brighter future through education and excellence. Amen!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
