import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GallerySection from "@/components/gallery-section";

// Import your local images
import footballImage from "@/assets/football-team.jpg";
import volleyballImage from "@/assets/volleyball-team.jpg";
import ceremonyImage1 from "@/assets/ceremony-1.jpg";
import ceremonyImage2 from "@/assets/ceremony-2.jpg";
import ceremonyImage3 from "@/assets/ceremony-3.jpg";

const galleryCategories = [
  {
    title: "Academic Events",
    images: [
      {
        src: ceremonyImage1,
        alt: "Annual Prize Distribution Ceremony",
        description: "Students receiving awards at the annual ceremony"
      },
      {
        src: ceremonyImage2,
        alt: "Graduation Ceremony",
        description: "Graduates celebrating their achievements"
      },
      {
        src: ceremonyImage3,
        alt: "Academic Conference",
        description: "Faculty and students at academic conference"
      }
    ]
  },
  {
    title: "Sports Activities",
    images: [
      {
        src: footballImage,
        alt: "Hockey Team",
        description: "Hockey team in action during championship"
      },
      {
        src: volleyballImage,
        alt: "Cricket Match",
        description: "Cricket team during inter-school tournament"
      }
    ]
  },
  {
    title: "Campus Life",
    images: [
      {
        src: volleyballImage,
        alt: "Campus View",
        description: "Beautiful view of our campus grounds"
      },
      {
        src: volleyballImage,
        alt: "Library",
        description: "Students studying in our well-equipped library"
      },
      {
        src: volleyballImage,
        alt: "Classroom",
        description: "Modern classroom facilities"
      }
    ]
  }
];

export default function Gallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />
      
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">Gallery</h1>
          <p className="text-xl opacity-90 slide-up delay-200">
            Capturing memorable moments at GCMS Ghallanai
          </p>
        </div>
      </section>

      {/* Main Gallery Section */}
      <div className="slide-up delay-400 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <GallerySection />
      </div>

      {/* Category-wise Gallery */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className={`text-center mb-8 slide-up delay-${categoryIndex * 200}`}>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{category.title}</h2>
                <div className="w-24 h-1 bg-primary mx-auto"></div>
              </div>
              <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {category.images.map((image, imageIndex) => (
                  <div 
                    key={imageIndex} 
                    className={`group cursor-pointer slide-up delay-${(imageIndex + 1) * 100}`}
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
                    <h4 className="mt-4 text-center font-semibold text-gray-800">{image.alt}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Video Gallery</h2>
            <p className="text-gray-600 text-lg">
              Watch our institutional highlights and events
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="slide-up delay-200">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-play-circle text-6xl text-primary mb-4"></i>
                    <p className="text-gray-600">Annual Function 2024</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Annual Function Highlights</h3>
                  <p className="text-sm text-gray-600">Best moments from our annual celebration</p>
                </div>
              </div>
            </div>
            <div className="slide-up delay-400">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-video bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <i className="fas fa-play-circle text-6xl text-primary mb-4"></i>
                    <p className="text-gray-600">Sports Championship</p>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-800">Sports Victory</h3>
                  <p className="text-sm text-gray-600">Our teams' winning moments</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Upload Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-gray-800">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Share Your Moments</h2>
            <p className="text-xl opacity-90 mb-8">
              Have photos from GCMS Ghallanai events? Share them with our community!
            </p>
            <a
              href=""
              target="_blank"
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors inline-flex items-center justify-center"
            >
              <i className="fas fa-upload mr-2"></i>
              Submit Photos
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
