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
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <PrincipalMessage />
      <FacultySection />
      <ShiningStars />
      <Statistics />
      <SportsSection />
      <AcademicPrograms />
      <GallerySection />
      <Footer />
    </div>
  );
}
