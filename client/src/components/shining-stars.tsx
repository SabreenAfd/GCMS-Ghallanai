import React from 'react';
import { Trophy, Medal, Award, Star, Sparkles } from 'lucide-react';

// Import images
import shahFahadImg from '@/assets/shah-fahad.jpg';
import imranUllahImg from '@/assets/imran-ullah.jpg';
import noumanImg from '@/assets/nouman.jpg';

const stars = [
  {
    name: "Shah Fahad",
    achievement: "First Position in KPBT&CE Peshawar",
    image: shahFahadImg,
    gradient: "from-blue-800 to-blue-800",
    icon: Trophy,
    position: "1st",
    rank: "Gold Medalist"
  },
  {
    name: "Imran Ullah",
    achievement: "Second Position In KPBT&CE Peshawar",
    image: imranUllahImg,
    gradient: "from-blue-800 to-blue-800",
    icon: Medal,
    position: "2nd",
    rank: "Silver Medalist"
  },
  {
    name: "Nouman",
    achievement: "Third Position In KPBT&CE Peshawar",
    image: noumanImg,
    gradient: "from-blue-800 to-blue-800",
    icon: Award,
    position: "3rd",
    rank: "Bronze Medalist"
  }
];

export default function ShiningStars() {
  return (
    <section className="py-20 bg-blue-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-white">
          <Star size={40} />
        </div>
        <div className="absolute top-20 right-20 text-white">
          <Sparkles size={35} />
        </div>
        <div className="absolute bottom-20 left-20 text-white">
          <Star size={45} />
        </div>
        <div className="absolute bottom-10 right-10 text-white">
          <Sparkles size={30} />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-sm">
            <Star className="text-blue-800" size={24} />
            <span className="text-blue-800 font-semibold text-sm tracking-wider uppercase">Excellence</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6 tracking-tight" data-testid="text-stars-title">
            Shining Stars
          </h2>
          
          <p className="text-blue-800 text-xl max-w-2xl mx-auto leading-relaxed" data-testid="text-stars-subtitle">
            Celebrating our exceptional achievers who have set new standards of excellence 
            in KPBT&CE Peshawar examinations
          </p>
        </div>
       
        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {stars.map((star, index) => {
            const IconComponent = star.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                data-testid={`card-star-${index}`}
              >
                {/* Position Badge */}
                <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r ${star.gradient} text-white px-4 py-2 rounded-full shadow-lg`}>
                  <span className="font-bold text-sm">{star.position} PLACE</span>
                </div>

                {/* Achievement Icon Background */}
                <div className={`absolute top-6 right-6 bg-gradient-to-r ${star.gradient} p-3 rounded-full shadow-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300`}>
                  <IconComponent size={24} className="text-white" />
                </div>
                
                <div className="text-center pt-4">
                  {/* Profile Image */}
                  <div className="relative inline-block mb-6">
                    <div className={`absolute inset-0 bg-gradient-to-r ${star.gradient} rounded-full blur-lg opacity-30 scale-110`}></div>
                    <img
                      src={star.image}
                      alt={star.name}
                      className="relative w-28 h-28 rounded-full mx-auto border-4 border-white shadow-2xl object-cover z-10 group-hover:scale-105 transition-transform duration-300"
                      data-testid={`img-star-${index}`}
                    />
                    {/* Achievement icon overlay */}
                    <div className={`absolute -bottom-2 -right-2 bg-gradient-to-r ${star.gradient} p-2 rounded-full shadow-lg z-20`}>
                      <IconComponent size={16} className="text-white" />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="text-2xl font-bold text-blue-800 mb-2 group-hover:text-blue-900 transition-colors" data-testid={`text-star-name-${index}`}>
                    {star.name}
                  </h3>

                  {/* Rank Badge */}
                  <div className={`inline-block bg-gradient-to-r ${star.gradient} text-white px-3 py-1 rounded-full text-xs font-semibold mb-4 shadow-sm`}>
                    {star.rank}
                  </div>

                  {/* Achievement */}
                  <p className="text-blue-800 text-sm leading-relaxed mb-6" data-testid={`text-star-achievement-${index}`}>
                    {star.achievement}
                  </p>

                  {/* Achievement Icon */}
                  <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${star.gradient} rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent size={24} className="text-white" />
                  </div>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"></div>
              </div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-blue-800">
            <div className="w-12 h-px bg-blue-800"></div>
            <Star size={20} className="text-blue-800" />
            <span className="text-sm font-medium">Excellence Recognized</span>
            <Star size={20} className="text-blue-800" />
            <div className="w-12 h-px bg-blue-800"></div>
          </div>
        </div>
      </div>
    </section>
  );
}