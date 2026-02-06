import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-xl font-bold text-[#293052]">
            Supafast
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Copy
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Design
            </a>
            <a href="#services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium">
              Dev
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-[#293052] text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#1d1d1d] transition-colors">
              Book a call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#293052]" />
            ) : (
              <Menu className="w-6 h-6 text-[#293052]" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              <a href="#services" className="block text-gray-600 py-2">Copy</a>
              <a href="#services" className="block text-gray-600 py-2">Design</a>
              <a href="#services" className="block text-gray-600 py-2">Dev</a>
              <button className="w-full bg-[#293052] text-white px-5 py-3 rounded-full text-sm font-medium mt-4">
                Book a call
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;