import { useEffect } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen page-fade-in">
      <Header />

      {/* Page Header */}
      <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-black py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 slide-up">
            Contact
          </h1>
          <p className="text-xl opacity-90 slide-up delay-200">
            Get in touch with GCMS Ghallanai
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="text-center slide-up delay-200">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-map-marker-alt text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Location
              </h3>
              <p className="text-gray-600">
                Ghallanai, Khyber Pakhtunkhwa
                <br />
                Pakistan
              </p>
            </div>
            <div className="text-center slide-up delay-400">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-phone text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Contact Number
              </h3>
              <p className="text-gray-600">
                <a href="tel:0924290310" className="hover:underline">
                  0924-290310
                </a>
              </p>
            </div>
            <div className="text-center slide-up delay-600">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Email Address
              </h3>
              <p className="text-gray-600">
                <a
                  href="mailto:gcmsghallanai@gmail.com"
                  className="hover:underline"
                >
                  gcmsghallanai@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="slide-up delay-400">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Find Us</h2>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  title="GCMS Ghallanai Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3233.653361590094!2d71.39933441493311!3d34.32451492022922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d965295006e27f%3A0x486df9b0fd833fb!2sGCMS%20Ghallanai!5e0!3m2!1sen!2s!4v1696100000000!5m2!1sen!2s"
                  width="100%"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

