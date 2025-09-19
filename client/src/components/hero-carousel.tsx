import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import poster from "@/assets/Academic Programs.jpeg"; 

const slides = [
  {
    id: 0,
    title: "Admissions Open",
    description:
      "Apply now for BS Commerce, BS Computer Science, D.Com, DBA, and FSc programs at GCMS Ghallanai. Limited seats available!",
    image: hero1,
    buttonText: "Learn More",
    buttonStyle: "bg-accent hover:bg-yellow-500 text-white",
  },
  {
    id: 1,
    title: "About Us",
    description:
      "Government College of Management Sciences (GCMS) Ghallanai, Mohmand District, KPK – A hub of excellence in business and computer education.",
    image: hero2,
    buttonText: "Learn More",
    buttonStyle: "bg-white text-green-700 hover:bg-gray-100",
  },
  {
    id: 2,
    title: "Our Achievements",
    description:
      "GCMS Ghallanai continues to secure top positions in KPBTE exams and is recognized for academic excellence in the region.",
   
    image: hero3,
    buttonText: "View Achievements",
    buttonStyle: "bg-white text-yellow-700 hover:bg-gray-100",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          {/* Background Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          {/* Mobile/Tablet Layout */}
          <div className="absolute inset-0 flex md:hidden flex-col items-center justify-center text-center px-6 gap-4">
            {/* Text Content */}
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base mb-4 drop-shadow-md">
                {slide.description}
              </p>
              <Button
                className={`${slide.buttonStyle} px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base`}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="absolute inset-0 hidden md:flex items-center justify-center text-center px-8">
            {/* Text */}
            <div className="text-white max-w-2xl">
              <h2 className="text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-base lg:text-lg mb-4 drop-shadow-md">
                {slide.description}
              </p>
              <Button
                className={`${slide.buttonStyle} px-6 py-2 text-base`}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 w-full flex justify-center gap-2 sm:gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-opacity ${
              index === currentSlide
                ? "bg-white opacity-100"
                : "bg-white opacity-50"
            } hover:opacity-100`}
          />
        ))}
      </div>
    </div>
  );
}




