import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 0,
    title: "Result Announcement",
    description: "D.Com / DBA and TSC Annual 2025 Examination Result Will be declared on 30-07-2025 at 4:00 PM",
    background: "bg-gradient-to-r from-primary to-secondary",
    buttonText: "Check Results",
    buttonStyle: "bg-accent hover:bg-yellow-500 text-white"
  },
  {
    id: 1,
    title: "Our Aim",
    description: "GCMS Mardan: Business Education Excellence",
    background: "bg-gradient-to-r from-green-600 to-green-700",
    buttonText: "Learn More",
    buttonStyle: "bg-white text-green-700 hover:bg-gray-100"
  },
  {
    id: 2,
    title: "Top Position Holder",
    description: "GCMS Mardan Once Again Secure first three position in KPBTE Peshawar",
    background: "bg-gradient-to-r from-accent to-yellow-600",
    buttonText: "View Achievements",
    buttonStyle: "bg-white text-yellow-700 hover:bg-gray-100"
  }
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
    <section id="home" className="relative">
      <div className="hero-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-slide relative h-96 md:h-[500px] ${slide.background} flex items-center ${
              index === currentSlide ? 'block' : 'hidden'
            }`}
          >
            <div className="container mx-auto px-4 text-center text-white">
              <h2 className="text-3xl md:text-5xl font-bold mb-4" data-testid={`carousel-title-${slide.id}`}>
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto" data-testid={`carousel-description-${slide.id}`}>
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
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 bg-white rounded-full transition-opacity ${
              index === currentSlide ? 'opacity-100' : 'opacity-50'
            } hover:opacity-100`}
            data-testid={`carousel-indicator-${index}`}
          />
        ))}
      </div>
    </section>
  );
}
