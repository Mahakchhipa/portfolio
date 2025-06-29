import React from 'react'
import  { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import logo from "../img/logo.jpg"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState("home");

const scrollToSection = (id) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id); // navbar में active item दिखाने के लिए
    setIsMenuOpen(false); // मोबाइल मेनू बंद कर दो
  }
};

  return (
    <div>
      <nav className="fixed w-full z-10 bg-gray-700 bg-opacity-90 backdrop-blur-sm border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* <a href="#" className="text-3xl italic font-bold text-blue-700">
            Mahak <span className="text-gray-200"> Chhipa </span>
          </a> */}
          <img src={logo} height={80} width={80} alt="logo" />

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`${
                activeSection === "home" ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-500 transition-colors`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`${
                activeSection === "about" ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-500 transition-colors`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className={`${
                activeSection === "projects" ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-500 transition-colors`}
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className={`${
                activeSection === "skills" ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-500 transition-colors`}
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className={`${
                activeSection === "experience"
                  ? "text-blue-400"
                  : "text-gray-300"
              } hover:text-blue-500 transition-colors`}
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`${
                activeSection === "contact" ? "text-blue-400" : "text-gray-300"
              } hover:text-blue-500 transition-colors`}
            >
              Contact
            </button>
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
          <div className="md:hidden bg-gray-800 p-4 absolute w-full">
            <div className="flex flex-col space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left py-2 text-gray-300 hover:text-blue-500"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-left py-2 text-gray-300 hover:text-blue-500"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-left py-2 text-gray-300 hover:text-blue-500"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left py-2 text-gray-300 hover:text-blue-500"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-left py-2 text-gray-300 hover:text-blue-500"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left py-2 text-gray-300 hover:text-blue-500"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar
