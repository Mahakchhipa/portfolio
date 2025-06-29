import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <a href="#" className="text-3xl italic font-bold text-blue-700">
              Mahak <span className="text-white"> Chhipa</span>
            </a>
            <p className="mt-2">Mern Stack Developer</p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              aria-label="GitHub"
              className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
            >
              <Github size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              aria-label="Email"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0 text-center md:text-left">
            © 2025 Mahak Chhipa. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
