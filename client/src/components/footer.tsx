import { Link } from "wouter";
import AptechmediaLogo from "@/assets/logos/apptechmedia.png";
import GcmsLogo from "@/assets/logos/gcms-logo.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-20 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Institution Info */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center space-x-4 mb-6 group">
              <div className="transform group-hover:scale-105 transition-transform duration-300">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent" data-testid="text-footer-title">
                  GCMS Ghallanai
                </h3>
                <p className="text-gray-400 text-sm mt-1" data-testid="text-footer-subtitle">
                  Government Commerce & Management Sciences
                </p>
              </div>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed" data-testid="text-footer-description">
              Empowering students to become lifelong learners, critical thinkers and compassionate leaders for a better tomorrow.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/gcmsghallanai/" 
                className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transform hover:scale-110 hover:shadow-lg transition-all duration-300"
                data-testid="link-social-facebook"
              >
                <i className="fab fa-facebook-f text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block" data-testid="text-quick-links-title">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/about" 
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group" 
                  data-testid="link-footer-about"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/faculty" 
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group" 
                  data-testid="link-footer-faculty"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Faculty
                </Link>
              </li>
              <li>
                <Link 
                  href="/programs" 
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group" 
                  data-testid="link-footer-programs"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Programs
                </Link>
              </li>
              <li>
                <Link 
                  href="/sports" 
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group" 
                  data-testid="link-footer-sports"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Sports
                </Link>
              </li>
              <li>
                <Link 
                  href="/gallery" 
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group" 
                  data-testid="link-footer-gallery"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Gallery
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group" 
                  data-testid="link-footer-contact"
                >
                  <span className="mr-2 opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 relative inline-block" data-testid="text-contact-info-title">
              Contact Info
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <i className="fas fa-map-marker-alt text-blue-400 mt-1 group-hover:scale-110 transition-transform"></i>
                <div data-testid="text-contact-address">
                  <p className="text-gray-300">Ghallanai, Khyber Pakhtunkhwa</p>
                  <p className="text-gray-300">Pakistan</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-3 group">
                  <i className="fas fa-phone text-blue-400 group-hover:scale-110 transition-transform"></i>
                  <p className="text-gray-300" data-testid="text-contact-phone">0924-290310</p>
                </div>
                {/* <div className="flex items-center space-x-3 group ml-8">
                  <p className="text-gray-300" data-testid="text-contact-phone-2">0305-9280626</p>
                </div> */}
              </div>
              <div className="flex items-start space-x-3 group">
                <i className="fas fa-envelope text-blue-400 mt-1 shrink-0 group-hover:scale-110 transition-transform"></i>
                <p
                  className="text-gray-300 break-all text-sm"
                  data-testid="text-contact-email"
                >
                  gcmsghallanai@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          {/* Left Side */}
          <p className="text-gray-400 text-sm" data-testid="text-footer-copyright">
            &copy; 2025 GCMS Ghallanai. All rights reserved.
          </p>

          {/* Right Side */}
          <div className="flex items-center space-x-3 group">
            <span className="text-gray-400 text-sm">
              Powered by: <strong className="text-blue-400 group-hover:text-blue-300 transition-colors">Aptechmedia</strong>
            </span>
            <img 
              src={AptechmediaLogo} 
              alt="Aptechmedia Logo" 
              className="h-10 w-10 rounded-full object-cover ring-2 ring-blue-400 ring-offset-2 ring-offset-gray-900 transform group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}