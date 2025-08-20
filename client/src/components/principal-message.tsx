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
                    className="w-64 h-80 object-cover rounded-lg shadow-lg mx-auto border-4 border-gray-100"
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
                  Welcome to GCMS Ghallanai, a thriving community of learners where curiosity, 
                  creativity, and academic excellence flourish. Our mission is to empower students 
                  to become lifelong learners, critical thinkers, and compassionate leaders, equipped 
                  to succeed in a rapidly changing world and make a profound impact on society.
                </p>
                
                <p className="text-base">
                  We nurture the intellectual, emotional, and social growth of our students, instilling 
                  values of integrity, resilience, empathy, and responsibility. Our goal is to cultivate 
                  compassionate and courageous individuals who are prepared to make a meaningful difference 
                  in the world.
                </p>
                
                <p className="text-base">
                  At GCMS Ghallanai, we believe in providing a holistic education that goes beyond textbooks 
                  and examinations. Our dedicated faculty, state-of-the-art facilities, and comprehensive 
                  curriculum ensure that every student receives the best possible foundation for their future 
                  endeavors.
                </p>
                
                <p className="text-base font-medium text-blue-700 italic">
                  To our students, I extend my warmest welcome and best wishes for an extraordinary academic 
                  journey. May your time at GCMS Ghallanai be filled with discovery, growth, and success. 
                  Together, we will build a brighter future through education and excellence. Amen!
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
