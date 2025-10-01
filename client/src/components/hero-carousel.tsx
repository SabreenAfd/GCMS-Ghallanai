import { useState, useEffect, ReactNode } from "react";
import { Button } from "@/components/ui/button";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
  buttonText: string;
  modalContent: () => ReactNode;
}

const slides: Slide[] = [
  {
    id: 0,
    title: "Admissions Open",
    description:
      "Apply now for BS Commerce, BS Computer Science, D.Com, DBA, and FSc programs at GCMS Ghallanai. Limited seats available!",
    image: hero1,
    buttonText: "Learn More",
    modalContent: () => (
      <div>
        <h3 className="text-xl font-bold mb-2">Admissions Details</h3>
        <p>
          Apply for BS Commerce, BS Computer Science, D.Com, DBA, and FSc programs.
          Limited seats available! Visit our campus for more info.
        </p>
      </div>
    ),
  },
  {
    id: 1,
    title: "About Us",
    description:
      "Government College of Management Sciences (GCMS) Ghallanai, Mohmand District, KPK – A hub of excellence in business and computer education.",
    image: hero2,
    buttonText: "Learn More",
    modalContent: () => (
      <div>
        <h3 className="text-xl font-bold mb-2">About GCMS Ghallanai</h3>
        <p>
          GCMS Ghallanai provides quality education in business and computer sciences.
          Our faculty and staff are committed to excellence.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "Our Achievements",
    description:
      "GCMS Ghallanai continues to secure top positions in KPBTE exams and is recognized for academic excellence in the region.",
    image: hero3,
    buttonText: "View Achievements",
    modalContent: () => (
      <div>
        <h3 className="text-xl font-bold mb-2">Achievements</h3>
        <ul className="list-disc ml-5">
          <li>Top positions in KPBTE exams</li>
          <li>Recognized for academic excellence</li>
          <li>Active student community and clubs</li>
        </ul>
      </div>
    ),
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  return (
    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[550px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 md:px-8 gap-4">
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-3 drop-shadow-lg">
                {slide.title}
              </h2>
              <p className="text-sm sm:text-base lg:text-lg mb-4 drop-shadow-md">
                {slide.description}
              </p>
              <Button
                className="bg-white text-green-700 hover:bg-green-100 px-6 py-2 rounded shadow-md transition-all duration-200"
                onClick={() => openModal(slide.modalContent())} // call function for JSX
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
              index === currentSlide ? "bg-white opacity-100" : "bg-white opacity-50"
            } hover:opacity-100`}
          />
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm p-4 transition-opacity duration-300">
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative transform scale-95 animate-in fade-in-zoom">
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 font-bold text-2xl"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
}

