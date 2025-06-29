import React from "react";
import { ExternalLink } from "lucide-react";
import projeactimg from "../img/project.png";
import projeactimg1 from "../img/project1.png";
import projeactimg2 from "../img/project2.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Techanic Infotech",
      description:
        "A responsive dashboard with real-time data visualization and user analytics.",
      technologies: ["React", "Tailwind CSS", "D3.js", "Firebase"],
      image: projeactimg,
      link: "https://www.techanicinfotech.com/",
    },
    {
      title: "Croma Clone Website",
      description:
        "Full-featured online store with payment processing and inventory management.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      image: projeactimg1,
      link: "https://www.croma.com/",
    },
    {
      title: "Maid For U ",
      description:
        "Mobile-first social platform with real-time messaging and content sharing.",
      technologies: ["React Native", "GraphQL", "AWS", "Socket.io"],
      image: projeactimg2,
      link: "https://maid-for-u.vercel.app/",
    },
  ];

  return (
    <section id="projects" className="py-20 pt-32 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-5xl font-bold mb-2 text-center text-blue-600">
          My Projects
        </h2>
        <p className="text-black text-xl font-bold text-center mb-12">
          Here are some of my recent works. I worked on these projects.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-2 rounded-xl overflow-hidden shadow-lg shadow-blue-900/10 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
                      View Project <ExternalLink size={16} className="ml-2" />
                    </button>
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-500">
                  {project.title}
                </h3>
                <p className="text-black mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-700 text-sm rounded-full text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 border-blue-500 text-blue-700 font-bold hover:bg-blue-500 hover:text-white rounded-2xl border-2 transition-all">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
