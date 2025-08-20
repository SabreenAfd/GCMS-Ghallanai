import { Link } from "wouter";
import AptechmediaLogo from "@/assets/logos/apptechmedia.png";
import GcmsLogo from "@/assets/logos/gcms-logo.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-800 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Institution Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-4 mb-6">
              
              <div>
                <h3 className="text-xl font-bold" data-testid="text-footer-title">GCMS Ghallanai</h3>
                <p className="text-gray-400 text-sm" data-testid="text-footer-subtitle">Government Commerce & Management Sciences</p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md" data-testid="text-footer-description">
              Empowering students to become lifelong learners, critical thinkers and compassionate leaders for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                data-testid="link-social-facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                data-testid="link-social-twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-primary rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
                data-testid="link-social-linkedin"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6" data-testid="text-quick-links-title">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-white transition-colors" 
                  data-testid="link-footer-about"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/faculty" 
                  className="text-gray-300 hover:text-white transition-colors" 
                  data-testid="link-footer-faculty"
                >
                  Faculty
                </Link>
              </li>
              <li>
                <Link 
                  href="/programs" 
                  className="text-gray-300 hover:text-white transition-colors" 
                  data-testid="link-footer-programs"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link 
                  href="/sports" 
                  className="text-gray-300 hover:text-white transition-colors" 
                  data-testid="link-footer-sports"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-gray-300 hover:text-white transition-colors" 
                  data-testid="link-footer-gallery"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6" data-testid="text-contact-info-title">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <i className="fas fa-map-marker-alt text-primary mt-1"></i>
                <div data-testid="text-contact-address">
                  <p className="text-gray-300"> Ghallanai, Khyber Pakhtunkhwa</p>
                  <p className="text-gray-300">Pakistan</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-phone text-primary"></i>
                <p className="text-gray-300" data-testid="text-contact-phone">+92-XXX-XXXXXXX</p>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-envelope text-primary"></i>
                <p className="text-gray-300" data-testid="text-contact-email">info@gcmsghallanai.edu.pk</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex items-center justify-between">
      {/* Left Side */}
      <p className="text-gray-400 text-sm" data-testid="text-footer-copyright">
        &copy; 2025 GCMS Ghallanai. All rights reserved.
      </p>

      {/* Right Side */}
      <div className="flex items-center space-x-2">
        <span className="text-gray-400 text-sm">Powered by: <strong>Aptechmedia</strong></span>
        <img 
          src={AptechmediaLogo} 
          alt="Aptechmedia Logo" 
          className="h-8 w-8 rounded-full object-cover"
        />
      </div>
    </div>

      </div>
    </footer>
  );
}