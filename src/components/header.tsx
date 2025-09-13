import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-600">
              Travels
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Destinations
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Packages
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-green-600 font-medium">
              Contact
            </a>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                Home
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                Destinations
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                Packages
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                About
              </a>
              <a href="#" className="block px-3 py-2 text-gray-700 hover:text-green-600 font-medium">
                Contact
              </a>
              <div className="px-3 py-2">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Book Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}