import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import GcmsLogo from "@/assets/logos/gcms-logo.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => location === path;

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
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* Top Flash Bar */}
      <div className="bg-primary text-white py-2 overflow-hidden text-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-10 animate-marquee whitespace-nowrap">
            <span className="flex items-center">
              <i className="fas fa-bullhorn mr-2"></i>
              D.Com / DBA and TSC Annual 2025 Exam Result will be declared on 30-07-2025 at 4:00 PM
            </span>
            <span className="flex items-center">
              <i className="fas fa-laptop mr-2"></i>
              Student portal launched in our online system
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo + Title */}
          <Link href="/" className="flex items-center space-x-3">
            <img
              src={GcmsLogo }
              alt="GCMS Logo"
              className="h-12 w-auto"
            />
            <span className="text-lg font-bold text-gray-800">
              GCMS Ghallanai
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.path}
                className={`relative font-medium transition-colors duration-300 ${
                  isActive(item.path)
                    ? "text-primary after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-primary"
                    : "text-gray-700 hover:text-primary hover:after:content-[''] hover:after:absolute hover:after:-bottom-1 hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-primary"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <i className="fas fa-bars text-xl"></i>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px]">
              <div className="flex flex-col space-y-4 mt-8">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    href={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-2 font-medium transition-colors duration-300 ${
                      isActive(item.path)
                        ? "text-primary bg-blue-50 rounded-md"
                        : "text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md"
                    }`}
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
