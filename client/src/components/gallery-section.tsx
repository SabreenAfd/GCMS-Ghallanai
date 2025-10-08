import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

// Import gallery images
import ceremonyImage1 from "@/assets/ceremony-1.jpg";
import ceremonyImage2 from "@/assets/ceremony-2.jpg";
import ceremonyImage3 from "@/assets/ceremony-3.jpg";

const galleryImages = [
  {
    src: ceremonyImage1,
    alt: "Annual Prize Distribution Ceremony",
    title: "Annual Prize Distribution Ceremony"
  },
  {
    src: ceremonyImage2,
    alt: "Annual Prize Distribution Ceremony",
    title: "Annual Prize Distribution Ceremony"
  },
  {
    src: ceremonyImage3,
    alt: "Annual Prize Distribution Ceremony", 
    title: "Annual Prize Distribution Ceremony"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="pt-12 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6" data-testid="text-gallery-title">
            Gallery Highlights
          </h2>
          <p className="text-slate-600 text-xl max-w-2xl mx-auto leading-relaxed" data-testid="text-gallery-subtitle">
            Capturing memorable moments and achievements from our prestigious institution
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
        </div>
       
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer bg-white rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 hover:border-blue-300"
              onClick={() => setSelectedImage(image.src)}
              data-testid={`gallery-image-${index}`}
            >
              <div className="relative overflow-hidden rounded-xl mb-4">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/90 rounded-full p-3 transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              </div>
              <h4 className="text-center font-semibold text-slate-800 group-hover:text-blue-600 transition-colors duration-300" data-testid={`text-gallery-title-${index}`}>
                {image.title}
              </h4>
            </div>
          ))}
        </div>

     

        <div className="text-center">
          <Link href="/gallery">
            <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-10 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1" data-testid="button-view-full-gallery">
              <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
              </svg>
              View Full Gallery
            </Button>
          </Link>
        </div>

        {/* Enhanced Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-5xl p-4 bg-white/95 backdrop-blur-sm border border-white/50 rounded-2xl shadow-2xl" data-testid="dialog-lightbox">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage}
                  alt="Gallery image"
                  className="w-full h-auto rounded-xl shadow-lg"
                  data-testid="img-lightbox"
                />
               
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
