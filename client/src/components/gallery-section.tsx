import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const galleryImages = [
  {
    src: "https://www.gcmsmardan.edu.pk/uploads/gallery/6852790f58de4.jpeg",
    alt: "Annual Prize Distribution Ceremony",
    title: "Annual Prize Distribution Ceremony"
  },
  {
    src: "https://www.gcmsmardan.edu.pk/uploads/gallery/685278d95e246.jpeg",
    alt: "Annual Prize Distribution Ceremony",
    title: "Annual Prize Distribution Ceremony"
  },
  {
    src: "https://www.gcmsmardan.edu.pk/uploads/gallery/685277643d9c4.jpg",
    alt: "Annual Prize Distribution Ceremony",
    title: "Annual Prize Distribution Ceremony"
  }
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" data-testid="text-gallery-title">
            Gallery Highlights
          </h2>
          <p className="text-gray-600 text-lg" data-testid="text-gallery-subtitle">
            Recent moments from our institution
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
              data-testid={`gallery-image-${index}`}
            >
              <img 
                src={image.src} 
                alt={image.alt} 
                className="w-full h-64 object-cover rounded-xl shadow-lg group-hover:shadow-xl transition-shadow"
              />
              <h4 className="mt-4 text-center font-semibold text-gray-800" data-testid={`text-gallery-title-${index}`}>
                {image.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href="" 
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-primary hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold" data-testid="button-view-full-gallery">
              <i className="fas fa-images mr-2"></i>
              View Full Gallery
            </Button>
          </a>
        </div>

        {/* Lightbox Dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0" data-testid="dialog-lightbox">
            {selectedImage && (
              <img 
                src={selectedImage} 
                alt="Gallery image" 
                className="w-full h-auto rounded-lg"
                data-testid="img-lightbox"
              />
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
