import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Import your local images
import sportsImage from "@/assets/team1 (1).jpg";
import teamImage from "@/assets/team1 (2).jpg";
import sportImage from "@/assets/team1 (3).jpg";
import LabImage from "@/assets/Lab.jpg";
import campusImage from "@/assets/hero1.jpg";
import classImage from "@/assets/classroom.jpg";
import event1Image from "@/assets/event1 (1).jpg";
import event2Image from "@/assets/event1 (2).jpg";
import event3Image from "@/assets/event1 (3).jpg";
import footballImage from "@/assets/football-team.jpg";
import annualFunctionVideo from "@/assets/annual-function.mp4";
import cricketImage from "@/assets/cricket-team.jpg";

const galleryCategories = [
  {
    title: "Academic Events",
    images: [
      {
        src: event1Image,
        alt: "Annual Prize Distribution Ceremony",
        description: "Students receiving awards at the annual ceremony",
      },
      {
        src: event2Image,
        alt: "Graduation Ceremony",
        description: "Graduates celebrating their achievements",
      },
      {
        src: event3Image,
        alt: "Academic Conference",
        description: "Faculty and students at academic conference",
      },
    ],
  },
  {
    title: "Sports Activities",
    images: [
      {
        src: footballImage,
        alt: "Hockey Team",
        description: "Hockey team in action during championship",
      },
      {
        src: cricketImage,
        alt: "Cricket Match",
        description: "Cricket team during inter-school tournament",
      },
      {
        src: teamImage,
        alt: "Inter-college Sports",
        description: "Energetic moments from inter-college sports competition",
      },
    ],
  },
  {
    title: "Campus Life",
    images: [
      {
        src: campusImage,
        alt: "Campus View",
        description: "Beautiful view of our campus grounds",
      },
      {
        src: LabImage,
        alt: "Library",
        description: "Students studying in our well-equipped library",
      },
      {
        src: classImage,
        alt: "Classroom",
        description: "Modern classroom facilities",
      },
    ],
  },
];

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <Header />

      {/* Page Header */}
      <section className="text-white pt-12 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 text-center text-black">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">
            Gallery
          </h1>
          <p className="text-xl opacity-90 slide-up delay-200">
            Capturing memorable moments at GCMS Ghallanai
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {galleryCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            <div
              className={`text-center mb-8 slide-up delay-${
                categoryIndex * 200
              }`}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {category.title}
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto"></div>
            </div>

            {/* Image Grid */}
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {category.images.map((image, imageIndex) => (
                <div
                  key={imageIndex}
                  className={`group cursor-pointer slide-up delay-${
                    (imageIndex + 1) * 100
                  }`}
                  onClick={() => window.location.href = image.src}

                >
                  <div className="relative overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4">
                        <i className="fas fa-search-plus text-2xl mb-2"></i>
                        <p className="text-sm">{image.description}</p>
                      </div>
                    </div>
                  </div>
                  <h4 className="mt-4 text-center font-semibold text-gray-800">
                    {image.alt}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Video Gallery */}
        <div className="mb-16">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Video Gallery
            </h2>
            <p className="text-gray-600 text-lg">
              Watch our institutional highlights and events
            </p>
          </div>
          <div className="max-w-3xl mx-auto slide-up delay-200">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <video
                src={annualFunctionVideo}
                controls
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="font-semibold text-gray-800">
                  Annual Function Highlights
                </h3>
                <p className="text-sm text-gray-600">
                  Best moments from our annual celebration
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}



