import React from "react";

const Experience = () => {
    const experiences = [
    {
      company: "REGEX Software Services",
      position: "MERN Stack Developer",
      period: "Sep 2023 - March 2025",
      description:
        "Proficient in developing full-stack applications using MongoDB, Express.js, React.js,Redux, and Node.js Next.js",
    },
   
  ];


  return (
    <div>
      <section id="experience" className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-blue-600 text-center">
            Work Experience
          </h2>

          <div className="max-w-3xl mx-auto">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="mb-12 last:mb-0 relative animate-on-scroll"
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute top-0 left-8 md:left-0 w-px h-full bg-blue-700 ml-3 md:-ml-3"></div>
                )}

                <div className="flex flex-col md:flex-row">
                  {/* Timeline bullet */}
                  <div className="absolute left-8 md:left-0 w-6 h-6 rounded-full bg-blue-500 ml-px md:-ml-3 z-10"></div>

                  {/* Date */}
                  <div className="md:w-32 md:text-right md:mr-12 pl-16 md:pl-0 mb-4 md:mb-0">
                    <span className="text-sm font-medium text-blue-400">
                      {exp.period}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="pl-16 md:pl-0 flex-1">
                    <div className=" p-6 rounded-lg shadow-lg hover:shadow-blue-800/10 transition-all">
                      <h3 className="font-bold text-black text-2xl mb-1">{exp.position}</h3>
                      <h4 className="text-blue-600 mb-4">{exp.company}</h4>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
