import { useEffect } from "react";
import Header from "@/components/header";
import HeroCarousel from "@/components/hero-carousel";
import PrincipalMessage from "@/components/principal-message";
import FacultySection from "@/components/faculty-section";
import ShiningStars from "@/components/shining-stars";
import Statistics from "@/components/statistics";
import SportsSection from "@/components/sports-section";
import AcademicPrograms from "@/components/academic-programs";
import GallerySection from "@/components/gallery-section";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      <div className="slide-up">
        <HeroCarousel />
      </div>
      <div className="slide-up delay-200">
        <PrincipalMessage />
      </div>
      <div className="slide-up delay-300">
        <FacultySection />
      </div>
      <div className="slide-up delay-400">
        <ShiningStars />
      </div>
      <div className="slide-up delay-500">
        <Statistics />
      </div>
      <div className="slide-up delay-600">
        <SportsSection />
      </div>
      <div className="slide-up delay-700">
        <AcademicPrograms />
      </div>
      <div className="slide-up delay-800">
        <GallerySection />
      </div>
      <Footer />
    </div>
  );
}
