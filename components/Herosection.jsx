import React, { useState, useEffect } from "react";

const Herosection = () => {
  const [typedText, setTypedText] = useState("");
  const [animatedCounter, setAnimatedCounter] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fullText = "Hello, I'm Mahak Chhipa. A Mern Stack Developer.";

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [typedText, isLoading]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(".animate-on-scroll");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          section.classList.add("animated");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isLoading && animatedCounter < 100) {
      const timer = setTimeout(() => {
        setAnimatedCounter((prev) => Math.min(prev + 1, 100));
      }, 20);
      return () => clearTimeout(timer);
    }
  }, [animatedCounter, isLoading]);

  const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  const navbarHeight = 80;

  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navbarHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin mx-auto"></div>
          <p className="mt-4 text-xl text-white">Loading amazing stuff...</p>
        </div>
      </div>
    );
  }

  return (
    <section
      id="home"
      className="top-14 md:h-screen flex items-center justify-center pt-16 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-64 h-64 rounded-full bg-blue-700 filter blur-3xl opacity-20 animate-blob top-1/4 -left-8"></div>
        <div className="absolute w-64 h-64 rounded-full bg-purple-700 filter blur-3xl opacity-20 animate-blob top-1/3 -right-8"></div>
        <div className="absolute w-64 h-64 rounded-full bg-pink-700 filter blur-3xl opacity-20 animate-blob bottom-1/4 left-1/3"></div>
      </div>

      <div className="container mx-auto px-4 text-center z-10">
        <div className="inline-block mb-4 px-6 py-2 border text-2xl font-extrabold border-b-cyan-700 rounded-full text-blue-600">
          MERN STACK DEVELOPER
        </div>
       <h1 className="text-2xl sm:text-4xl md:text-6xl text-indigo-700 font-bold mb-6 animate-fade-in">
  {typedText}
  {/* <span className="animate-blink">|</span> */}
</h1>

<p className="text-sm sm:text-base md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
  I build end-to-end digital experiences — from intuitive user
  interfaces to robust backend systems — that live and thrive on the
  modern web.
</p>

<div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
  <button
    className="px-8 py-3 bg-blue-600 text-white text-lg font-bold hover:bg-blue-700 rounded-lg transition-colors shadow-lg shadow-blue-500/20"
  >
    <a
      href="./public/mahakResume.pdf"
      download="MahakChhipaCV.pdf"
      className="block"
    >
      Download My CV
    </a>
  </button>
  <button
    onClick={() => scrollToSection("contact")}
    className="px-8 py-3 border border-gray-600 text-gray-800 font-bold text-lg hover:bg-white hover:text-gray-900 rounded-lg transition-all"
  >
    Contact Me
  </button>
</div>
      </div>
    </section>
  );
};

export default Herosection;
