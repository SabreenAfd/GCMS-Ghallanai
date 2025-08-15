import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Faculty", path: "/faculty" },
    { label: "Programs", path: "/programs" },
    { label: "Sports", path: "/sports" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" }
  ];

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
          <Link href="/" className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">GCMS</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">GCMS</h1>
              <p className="text-sm text-gray-600">Government Commerce & Management Sciences</p>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-gray-700 hover:text-primary'
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" data-testid="button-mobile-menu">
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-left px-4 py-2 font-medium transition-colors duration-300 ${
                      isActive(item.path)
                        ? 'text-primary bg-blue-50 rounded-lg'
                        : 'text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg'
                    }`}
                    data-testid={`mobile-nav-${item.label.toLowerCase()}`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
