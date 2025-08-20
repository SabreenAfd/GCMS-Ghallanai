import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

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
    <section id="home" className="relative w-full">
      <div className="hero-carousel relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative w-full h-screen ${
              index === currentSlide ? "block" : "hidden"
            }`}
          >
            {/* Full background image */}
            <img
              src={slide.image}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content center */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center text-white h-full px-4">
              <h2
                className="text-4xl md:text-6xl font-bold mb-6"
                data-testid={`carousel-title-${slide.id}`}
              >
                {slide.title}
              </h2>
              <p
                className="text-lg md:text-2xl mb-8 max-w-2xl"
                data-testid={`carousel-description-${slide.id}`}
              >
                {slide.description}
              </p>
              <Button
                className={`${slide.buttonStyle} px-8 py-3 rounded-lg font-semibold transition-colors`}
                data-testid={`carousel-button-${slide.id}`}
              >
                {slide.buttonText}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 bg-white rounded-full transition-opacity ${
              index === currentSlide ? "opacity-100" : "opacity-50"
            } hover:opacity-100`}
            data-testid={`carousel-indicator-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
