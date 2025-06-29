import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          {/* Branding */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a href="#home" className="text-3xl italic font-bold text-blue-700">
              Mahak <span className="text-white">Chhipa</span>
            </a>
            <p className="mt-2">MERN Stack Developer</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 text-sm">
            <a href="#home" className="hover:text-white transition">Home</a>
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#experience" className="hover:text-white transition">Experience</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4 mt-6 md:mt-0">
            <a
              href="https://github.com/Mahakchhipa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahak-chhipa-aa429725a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:mehekjajpuraom700@gmail.com"
              aria-label="Email"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0 text-center md:text-left">
            © 2025 Mahak Chhipa. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
