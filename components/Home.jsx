import React, { useState, useEffect } from "react";
import mhk from "../img/mhk.jpg";
import logo from "../img/logo.jpg";
const Home = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 4 + 1,
          speed: Math.random() * 2 + 0.5,
        });
      }
      setParticles(newParticles);
    };
    generateParticles();
  }, []);

  useEffect(() => {
    const animateParticles = () => {
      setParticles((prev) =>
        prev.map((particle) => ({
          ...particle,
          x: (particle.x + particle.speed * 0.1) % 100,
          y: particle.y + Math.sin(particle.x * 0.01) * 0.1,
        }))
      );
    };

    const interval = setInterval(animateParticles, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Service",
    "Portfolio",
    "Resume",
    "Blog",
    "Contact",
  ];

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="absolute w-1 h-1 bg-red-500 rounded-full opacity-60"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                filter: "blur(0.5px)",
              }}
            />
          ))}

          <svg className="absolute inset-0 w-full h-full opacity-30">
            {particles.slice(0, 20).map((particle, index) => (
              <g key={particle.id}>
                {particles.slice(index + 1, index + 4).map((nextParticle) => {
                  const distance = Math.sqrt(
                    Math.pow(particle.x - nextParticle.x, 2) +
                      Math.pow(particle.y - nextParticle.y, 2)
                  );
                  if (distance < 15) {
                    return (
                      <line
                        key={`${particle.id}-${nextParticle.id}`}
                        x1={`${particle.x}%`}
                        y1={`${particle.y}%`}
                        x2={`${nextParticle.x}%`}
                        y2={`${nextParticle.y}%`}
                        stroke="#ef4444"
                        strokeWidth="0.5"
                        opacity={1 - distance / 15}
                      />
                    );
                  }
                  return null;
                })}
              </g>
            ))}
          </svg>
        </div>

        <nav className="relative z-20 flex justify-between items-center px-8 py-6">
          <div >
            <img
                  src={logo}
                  alt="Mahak Chhipa - Web Developer"
                  className="w-20 h-20 object-cover object-center"
                />
          </div>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`relative px-4 py-2 transition-all duration-300 hover:text-red-400 ${
                  activeSection === item.toLowerCase()
                    ? "text-red-400"
                    : "text-gray-300"
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-100 transition-transform duration-300" />
                )}
              </button>
            ))}
          </div>

          <button className="md:hidden text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </nav>

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between px-8 py-12 lg:py-24 max-w-7xl mx-auto">
          <div className="flex-1 lg:pr-12 text-center lg:text-left">
            <div className="mb-6">
              <h2 className="text-red-500 text-xl font-bold mb-4 tracking-wider animate-pulse">
                HELLO!
              </h2>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                I Am <span className="text-gray-500 italic"> Mahak Chhipa </span>
                {/* <div className="w-1 h-16 bg-red-500 inline-block ml-2 animate-pulse" /> */}
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg leading-relaxed">
                🚀 Hi, I'm a passionate MERN Stack Developer crafting full-stack
                web applications with clean code and sleek design. 💻 I'm
                specialize in building fast, scalable, and responsive solutions
                using MongoDB, Express, React, and Node.js. ✨ From dynamic UIs
                to robust APIs — I bring ideas to life with performance and
                precision. 🌍 Let's build the future of the web, one line of
                code at a time.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25">
                View Work
              </button>
              <button className="border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
                Hire Me
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex-1 mt-12 lg:mt-0 relative">
            <div className="relative mx-auto w-80 h-96 lg:w-96 lg:h-[480px]">
              {/* Animated Background Circle */}
              <div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500/20 to-transparent animate-spin-slow"
                style={{
                  transform: `rotate(${mousePosition.x * 0.1}deg)`,
                }}
              />

              {/* Profile Image Container */}
              <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
                {/* Profile Image */}
                <img
                  src={mhk}
                  alt="Mahak Chhipa - Web Developer"
                  className="w-full h-full object-cover object-center"
                />

                {/* Overlay gradient for better visual appeal */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-500 rounded-full animate-bounce" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-red-400 rounded-full animate-pulse" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-1/4 -left-8 w-4 h-4 border-2 border-red-500 rotate-45 animate-spin-slow" />
            <div className="absolute bottom-1/4 -right-8 w-6 h-6 border-2 border-red-400 rounded-full animate-pulse" />
          </div>
        </div>
      </div>

      {/* Social Links
      <div className="fixed left-8 top-1/2 transform -translate-y-1/2 z-20 hidden lg:flex flex-col space-y-4">
        {['github', 'linkedin', 'twitter', 'instagram'].map((social) => (
          <button
            key={social}
            className="w-10 h-10 bg-gray-800 hover:bg-red-500 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110"
          >
            <div className="w-5 h-5 bg-current rounded opacity-70" />
          </button>
        ))}
      </div> */}

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;
