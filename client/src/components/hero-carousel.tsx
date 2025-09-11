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
    <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[750px] xl:h-[850px] overflow-hidden">
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

          {/* Content + Poster */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center md:justify-between text-center md:text-left px-6 md:px-12 gap-6 md:gap-10">
            {/* Text */}
            <div className="flex-1 text-white max-w-xl">
              <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 drop-shadow-md">
                {slide.description}
              </p>
              <Button
                className={`${slide.buttonStyle} px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base`}
              >
                {slide.buttonText}
              </Button>
            </div>

            {/* Poster (hidden on very small screens) */}
            <div className="hidden sm:block w-52 md:w-72 lg:w-[420px] flex-shrink-0">
              <img
                src={poster}
                alt="Admission Poster"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>

          {/* Poster Below Text (for mobile only) */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 block sm:hidden w-40">
            <img
              src={poster}
              alt="Admission Poster"
              className="w-full h-auto rounded-xl shadow-lg border-2 border-white"
            />
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



