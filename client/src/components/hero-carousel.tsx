import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import poster from "@/assets/Academic Programs.jpeg"; // Admission poster

const slides = [
  {
    id: 0,
    title: "Result Announcement",
    description:
      "D.Com / DBA and TSC Annual 2025 Examination Result Will be declared on 30-07-2025 at 4:00 PM",
    image: hero1,
    buttonText: "Check Results",
    buttonStyle: "bg-accent hover:bg-yellow-500 text-white",
  },
  {
    id: 1,
    title: "Our Aim",
    description: "GCMS Ghallanai: Business Education Excellence",
    image: hero2,
    buttonText: "Learn More",
    buttonStyle: "bg-white text-green-700 hover:bg-gray-100",
  },
  {
    id: 2,
    title: "Top Position Holder",
    description:
      "GCMS Mardan Once Again Secure first three position in KPBTE Peshawar",
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
    <div className="relative w-full h-[650px] overflow-hidden">
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

          {/* Content + Poster Layout */}
          <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 gap-8">
            {/* Centered Text */}
            <div className="flex-1 text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-6 max-w-xl drop-shadow-md">
                {slide.description}
              </p>
              <Button className={slide.buttonStyle}>{slide.buttonText}</Button>
            </div>

            {/* Poster on the Right */}
            <div className="w-72 md:w-80 lg:w-[420px] flex-shrink-0">
              <img
                src={poster}
                alt="Admission Poster"
                className="w-full h-auto rounded-2xl shadow-2xl border-4 border-white"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Carousel Indicators */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-opacity ${
              index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
            } hover:opacity-100`}
            data-testid={`carousel-indicator-${index}`}
          />
        ))}
      </div>
    </div>
  );
}


