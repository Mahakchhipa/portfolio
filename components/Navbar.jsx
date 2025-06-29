import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../img/logo.jpg';

const sections = ['home', 'about', 'projects', 'skills', 'experience', 'contact'];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Scroll to section smoothly
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  // Track active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      for (let i = 0; i < sections.length; i++) {
        const sec = document.getElementById(sections[i]);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed w-full z-50 bg-gray-700 bg-opacity-90 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <img src={logo} height={80} width={80} alt="logo" className="rounded" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`capitalize text-sm font-medium ${
                activeSection === section ? 'text-blue-400' : 'text-gray-300'
              } hover:text-blue-500 transition-colors`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4 px-6 space-y-4 absolute w-full top-full left-0 z-40">
          {sections.map((section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className="block text-left text-gray-300 hover:text-blue-500 capitalize"
            >
              {section}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
