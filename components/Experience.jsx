import React from "react";

const Experience = () => {
  const experiences = [
    {
      company: "REGEX Software Services",
      position: "MERN Stack Developer",
      period: " june - july 2025",
      description:
        "Proficient in developing full-stack applications using MongoDB, Express.js, React.js, Redux, Node.js, and Next.js.",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-blue-600 text-center">
          Work Experience
        </h2>

        {/* Timeline Container */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="mb-12 last:mb-0 relative animate-on-scroll"
            >
              {/* Vertical Line (only if not last item) */}
              {index < experiences.length - 1 && (
                <div className="absolute top-0 left-8 md:left-3 w-px h-full bg-blue-600"></div>
              )}

              <div className="flex flex-col md:flex-row">
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-3 w-6 h-6 rounded-full bg-blue-500 z-10"></div>

                {/* Period */}
                <div className="md:w-40 md:text-right md:mr-12 pl-16 md:pl-0 mb-4 md:mb-0">
                  <span className="text-sm font-semibold text-blue-500">
                    {exp.period}
                  </span>
                </div>

                {/* Experience Details */}
                <div className="pl-16 md:pl-0 flex-1">
                  <div className="p-6 rounded-xl shadow-md hover:shadow-blue-500/20 transition-all bg-gray-50">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {exp.position}
                    </h3>
                    <h4 className="text-blue-600 mb-2">{exp.company}</h4>
                    <p className="text-gray-600 text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
