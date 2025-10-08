import React from 'react';
import { Star, Sparkles } from 'lucide-react';

// Import images
import shahFahadImg from '@/assets/student1.jpg';
import imranUllahImg from '@/assets/student2.jpg';
import noumanImg from '@/assets/student3.jpg';

const stars = [
  {
    name: "Hammad Ahmad",
    image: shahFahadImg,
    gradient: "from-blue-800 to-blue-800",
    position: "1st",
  },
  {
    name: "Ateeq Ur Rahman",
    image: imranUllahImg,
    gradient: "from-blue-800 to-blue-800",
    position: "2nd",
  },
  {
    name: "Irfan Ullah",
    image: noumanImg,
    gradient: "from-blue-800 to-blue-800",
    position: "3rd",
  }
];

export default function ShiningStars() {
  return (
    <section className="pt-12 pb-20 bg-blue-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-white animate-pulse">
          <Star size={40} />
        </div>
        <div className="absolute top-20 right-20 text-white animate-bounce">
          <Sparkles size={35} />
        </div>
        <div className="absolute bottom-20 left-20 text-white animate-pulse">
          <Star size={45} />
        </div>
        <div className="absolute bottom-10 right-10 text-white animate-bounce">
          <Sparkles size={30} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 slide-up">
          
          
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 tracking-tight" data-testid="text-stars-title">
            Shining Stars
          </h2>
          
          <p className="text-black text-xl max-w-2xl mx-auto leading-relaxed" data-testid="text-stars-subtitle">
            Celebrating our exceptional achievers who have set new standards of excellence 
            in KPBT&CE Peshawar examinations
          </p>
        </div>
       
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stars.map((star, index) => {
            return (
              <div
                key={index}
                className={`slide-up delay-${(index + 1) * 200} group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 transform hover:scale-105`}
                data-testid={`card-star-${index}`}
              >
                {/* Position Badge */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${star.gradient} text-white px-4 py-2 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="font-bold text-sm">{star.position} PLACE</span>
                </div>
                
                <div className="text-center pt-4">
                  {/* Profile Image */}
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${star.gradient} rounded-full blur-lg opacity-30 scale-110 group-hover:opacity-50 group-hover:scale-125 transition-all duration-500`}></div>
                    <img
                      src={star.image}
                      alt={star.name}
                      className="relative w-32 h-32 rounded-full mx-auto border-4 border-white shadow-2xl object-cover z-10 group-hover:scale-110 transition-transform duration-500"
                      data-testid={`img-star-${index}`}
                    />
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-blue-900 transition-colors duration-300" data-testid={`text-star-name-${index}`}>
                    {star.name}
                  </h3>

                  {/* Decorative line */}
                  <div className={`w-20 h-1 bg-gradient-to-r ${star.gradient} mx-auto mb-4 rounded-full`}></div>

                  
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        
      </div>
    </section>
  );
}