import React from "react";
import mhk from "../img/mhk.jpg";

const About = () => {
  return (
    <section id="about" className="py-16  bg-white text-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-blue-700 font-bold text-center mb-12">
          About Me
        </h2>

        {/* Content Wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Image Section */}
          <div className="md:w-1/3 animate-on-scroll">
            <div className="relative w-full max-w-xs md:max-w-md mx-auto">
              <div className="rounded-full overflow-hidden border-4 border-blue-500">
                <img
                  src={mhk}
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 rounded-full p-3 border-4 border-blue-500 bg-white">
                <code className="text-blue-500 text-xl">&lt;/&gt;</code>
              </div>
            </div>
          </div>

          {/* Text Section */}
          <div className="md:w-2/3 text-center md:text-left animate-on-scroll">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              I'm a Full Stack Developer with a passion for creating intuitive
              user experiences
            </h3>
            <p className="text-base md:text-lg mb-4">
              With over 1 year of experience in web development, I specialize in
              building modern, responsive web applications using React, Node.js,
              and other cutting-edge technologies.
            </p>
            <p className="text-base md:text-lg mb-6">
              My journey in tech began when I built my first website at 15.
              Since then, I've worked with startups and companies to bring their
              ideas to life. I enjoy solving problems and learning new tech.
            </p>

            {/* Info Cards */}
            <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <div className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
                <span className="font-bold text-blue-800 mr-2 text-lg">1+</span>
                Years Experience
              </div>
              <div className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
                <span className="font-bold text-blue-800 mr-2 text-lg">5+</span>
                Projects Completed
              </div>
              <div className="bg-gray-200 px-4 py-2 rounded-md flex items-center">
                <span className="font-bold text-blue-800 mr-2 text-lg">8+</span>
                Happy Clients
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
