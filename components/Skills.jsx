import React, { useState, useEffect, useRef } from "react";

const skillsData = [
  { name: "React", level: 90 },
  { name: "Node.js", level: 85 },
  { name: "CSS", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "TypeScript", level: 70 },
  { name: "Tailwind CSS", level: 85 },
];

const Skills = () => {
  const [animatedCounter, setAnimatedCounter] = useState(0);
  const containerRef = useRef(null);

  // Animate progress bars from 0 to 100%
  useEffect(() => {
    let current = 0;
    const maxLevel = 100;
    const interval = setInterval(() => {
      current += 2;
      if (current > maxLevel) {
        clearInterval(interval);
        current = maxLevel;
      }
      setAnimatedCounter(current);
    }, 20);

    return () => clearInterval(interval);
  }, []);

  // Intersection Observer to add fade-in animation on scroll
  useEffect(() => {
    const elements = containerRef.current.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="skills" ref={containerRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-blue-600 text-4xl font-bold mb-12 text-center">
          My Skills
        </h2>

        {/* Skills Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="animate-on-scroll opacity-0 transform translate-y-6 transition duration-700"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex justify-between mb-2 font-semibold">
                <h3>{skill.name}</h3>
                <span className="text-blue-400">
                  {Math.min(skill.level, animatedCounter)}%
                </span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500 ease-in-out"
                  style={{ width: `${Math.min(skill.level, animatedCounter)}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { title: "Frontend", color: "blue", letter: "F", delay: 0 },
            { title: "Backend", color: "green", letter: "B", delay: 300 },
            { title: "Design", color: "purple", letter: "D", delay: 600 },
            { title: "Mobile", color: "orange", letter: "M", delay: 900 },
          ].map(({ title, color, letter, delay }) => (
            <div
              key={title}
              className="animate-on-scroll opacity-0 transform translate-y-6 transition duration-700"
              style={{ transitionDelay: `${delay}ms` }}
            >
              <div className="rounded-lg p-8 text-center hover:text-white hover:bg-blue-600 transition-all cursor-default">
                <div
                  className={`w-16 h-16 bg-${color}-900/30 rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <div
                    className={`w-12 h-12 bg-${color}-500/20 rounded-full flex items-center justify-center`}
                  >
                    <div
                      className={`text-${color}-400 text-3xl font-bold select-none`}
                    >
                      {letter}
                    </div>
                  </div>
                </div>
                <h3 className="font-medium text-lg">{title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Inline styles for fade-in animation */}
      <style>{`
        .animate-fade-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
};

export default Skills;
