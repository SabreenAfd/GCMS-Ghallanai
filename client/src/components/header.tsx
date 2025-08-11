import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* News Flash Bar */}
      <div className="bg-primary text-white py-2 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-8 animate-marquee whitespace-nowrap">
            <span className="flex items-center">
              <i className="fas fa-bullhorn mr-2"></i>
              D.Com / DBA and TSC Annual 2025 Examination Result Will be declared on 30-07-2025 at 4:00 PM
            </span>
            <span className="flex items-center">
              <i className="fas fa-laptop mr-2"></i>
              Student portal - We launch our student portal in our online system
            </span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">GCMS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">GCMS</h1>
              <p className="text-sm text-gray-600">Government Commerce & Management Sciences</p>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
              data-testid="nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('faculty')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
              data-testid="nav-faculty"
            >
              Faculty
            </button>
            <button 
              onClick={() => scrollToSection('programs')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
              data-testid="nav-programs"
            >
              Programs
            </button>
            <button 
              onClick={() => scrollToSection('sports')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
              data-testid="nav-sports"
            >
              Sports
            </button>
            <button 
              onClick={() => scrollToSection('gallery')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
              data-testid="nav-gallery"
            >
              Gallery
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-gray-700 hover:text-primary font-medium transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-left px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                  data-testid="mobile-nav-home"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-left px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                  data-testid="mobile-nav-about"
                >
                  About
                </button>
                <button 
                  onClick={() => scrollToSection('faculty')} 
                  className="text-left px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                  data-testid="mobile-nav-faculty"
                >
                  Faculty
                </button>
                <button 
                  onClick={() => scrollToSection('programs')} 
                  className="text-left px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                  data-testid="mobile-nav-programs"
                >
                  Programs
                </button>
                <button 
                  onClick={() => scrollToSection('sports')} 
                  className="text-left px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                  data-testid="mobile-nav-sports"
                >
                  Sports
                </button>
                <button 
                  onClick={() => scrollToSection('gallery')} 
                  className="text-left px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                  data-testid="mobile-nav-gallery"
                >
                  Gallery
                </button>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-left px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors"
                  data-testid="mobile-nav-contact"
                >
                  Contact
                </button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
