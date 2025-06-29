// import { useState, useEffect } from "react";
// import {
//   Github,
//   Linkedin,
//   Mail,
//   ExternalLink,
//   Menu,
//   X,
//   ChevronDown,
//   ChevronUp,
// } from "lucide-react";

// // Main App Component
// export default function Home() {
//   const [activeSection, setActiveSection] = useState("home");
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [typedText, setTypedText] = useState("");
//   const [animatedCounter, setAnimatedCounter] = useState(0);

//   const fullText = "Hello, I'm Anil Patwa. A Full Stack Developer.";

//   // Loading effect
//   useEffect(() => {
//     setTimeout(() => {
//       setIsLoading(false);
//     }, 2000);
//   }, []);

//   // Typing effect
//   useEffect(() => {
//     if (isLoading) return;

//     if (typedText.length < fullText.length) {
//       const timeout = setTimeout(() => {
//         setTypedText(fullText.slice(0, typedText.length + 1));
//       }, 100);
//       return () => clearTimeout(timeout);
//     }
//   }, [typedText, isLoading]);

//   // Check scroll position to show/hide scroll to top button
//   useEffect(() => {
//     const handleScroll = () => {
//       setShowScrollTop(window.scrollY > 300);

//       // For animation triggers
//       const sections = document.querySelectorAll(".animate-on-scroll");
//       sections.forEach((section) => {
//         const rect = section.getBoundingClientRect();
//         const isVisible = rect.top <= window.innerHeight * 0.75;
//         if (isVisible) {
//           section.classList.add("animated");
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Skills counter animation
//   useEffect(() => {
//     if (!isLoading && animatedCounter < 100) {
//       const timer = setTimeout(() => {
//         setAnimatedCounter((prev) => Math.min(prev + 1, 100));
//       }, 20);
//       return () => clearTimeout(timer);
//     }
//   }, [animatedCounter, isLoading]);

//   // Scroll to section function
//   const scrollToSection = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsMenuOpen(false);
//     document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
//   };

//   // Scroll to top function
//   const scrollToTop = () => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   // Data for projects section
//   const projects = [
//     {
//       title: "Interactive Dashboard",
//       description:
//         "A responsive dashboard with real-time data visualization and user analytics.",
//       technologies: ["React", "Tailwind CSS", "D3.js", "Firebase"],
//       image: "/api/placeholder/600/400",
//     },
//     {
//       title: "E-Commerce Platform",
//       description:
//         "Full-featured online store with payment processing and inventory management.",
//       technologies: ["React", "Node.js", "MongoDB", "Stripe"],
//       image: "/api/placeholder/600/400",
//     },
//     {
//       title: "Social Media App",
//       description:
//         "Mobile-first social platform with real-time messaging and content sharing.",
//       technologies: ["React Native", "GraphQL", "AWS", "Socket.io"],
//       image: "/api/placeholder/600/400",
//     },
//   ];

//   // Data for skills section
//   const skills = [
//     { name: "Front-end Development", level: 90 },
//     { name: "React & Redux", level: 85 },
//     { name: "Node.js & Express", level: 80 },
//     { name: "UI/UX Design", level: 75 },
//     { name: "Database Management", level: 70 },
//     { name: "Next.js", level: 60 }
//   ];

//   // Data for experience section
//   const experiences = [
//     {
//       company: "REGEX Software Services",
//       position: "MERN Stack Developer",
//       period: "Sep 2023 - March 2025",
//       description:
//         "Proficient in developing full-stack applications using MongoDB, Express.js, React.js,Redux, and Node.js Next.js",
//     },
   
//   ];

//   // Loading screen
//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center h-screen bg-gray-900">
//         <div className="text-center">
//           <div className="w-16 h-16 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin mx-auto"></div>
//           <p className="mt-4 text-xl text-white">Loading amazing stuff...</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
//       {/* Navigation */}
      
//       {/* Hero Section */}
//       <section
//         id="home"
//         className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden"
//       >
//         <div className="absolute inset-0 opacity-30">
//           <div className="absolute w-64 h-64 rounded-full bg-blue-700 filter blur-3xl opacity-20 animate-blob top-1/4 -left-8"></div>
//           <div className="absolute w-64 h-64 rounded-full bg-purple-700 filter blur-3xl opacity-20 animate-blob animation-delay-2000 top-1/3 -right-8"></div>
//           <div className="absolute w-64 h-64 rounded-full bg-pink-700 filter blur-3xl opacity-20 animate-blob animation-delay-4000 bottom-1/4 left-1/3"></div>
//         </div>

//         <div className="container mx-auto px-4 text-center z-10">
//           <div className="inline-block mb-4 px-6 py-2 border border-blue-500 rounded-full text-blue-500">
//             Full Stack Developer
//           </div>
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
//             {typedText}
//             <span className="animate-blink">|</span>
//           </h1>
//           <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animation-delay-500">
//             I build end-to-end digital experiences — from intuitive user
//             interfaces to robust backend systems — that live and thrive on the
//             modern web.
//           </p>
//           <div className="flex justify-center space-x-4 animate-fade-in animation-delay-1000">
//             <button
//               onClick={() => scrollToSection("projects")}
//               className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-lg shadow-blue-500/20"
//             >
//               View My Work
//             </button>
//             <button
//               onClick={() => scrollToSection("contact")}
//               className="px-8 py-3 border border-white hover:bg-white hover:text-gray-900 rounded-lg transition-all"
//             >
//               Contact Me
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* About Section */}
//       <section id="about" className="py-20 bg-gray-800">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
//             About Me
//           </h2>
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="md:w-1/3 animate-on-scroll">
//               <div className="relative">
//                 <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-blue-500 mx-auto">
//                   <img
//                     src="/api/placeholder/320/320"
//                     alt="Profile"
//                     className="object-cover w-full h-full"
//                   />
//                 </div>
//                 <div className="absolute -bottom-4 -right-4 bg-gray-800 rounded-full p-3 border-4 border-blue-500">
//                   <code className="text-blue-500 text-xl">&lt;/&gt;</code>
//                 </div>
//               </div>
//             </div>
//             <div className="md:w-2/3 animate-on-scroll">
//               <h3 className="text-2xl font-semibold mb-4">
//                 I'm a Full Stack Developer with a passion for creating intuitive
//                 user experiences
//               </h3>
//               <p className="text-gray-300 mb-6">
//                 With over 5 years of experience in web development, I specialize
//                 in building modern, responsive web applications using React,
//                 Node.js, and other cutting-edge technologies. I'm passionate
//                 about clean code, performance optimization, and creating
//                 intuitive user experiences.
//               </p>
//               <p className="text-gray-300 mb-6">
//                 My journey in tech began when I built my first website at 15.
//                 Since then, I've worked with startups and established companies
//                 to bring their digital visions to life. I enjoy solving complex
//                 problems and continuously learning new technologies.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <div className="bg-gray-700 px-4 py-2 rounded-md flex items-center">
//                   <span className="font-bold text-blue-400 mr-2">5+</span> Years
//                   Experience
//                 </div>
//                 <div className="bg-gray-700 px-4 py-2 rounded-md flex items-center">
//                   <span className="font-bold text-blue-400 mr-2">50+</span>{" "}
//                   Projects Completed
//                 </div>
//                 <div className="bg-gray-700 px-4 py-2 rounded-md flex items-center">
//                   <span className="font-bold text-blue-400 mr-2">20+</span>{" "}
//                   Happy Clients
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Projects Section */}
//       <section id="projects" className="py-20 bg-gray-900">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
//             My Projects
//           </h2>
//           <p className="text-gray-400 text-center mb-12">
//             Here are some of my recent works
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, index) => (
//               <div
//                 key={index}
//                 className="bg-gray-800 rounded-xl overflow-hidden shadow-lg shadow-blue-900/10 hover:shadow-blue-500/20 transition-all duration-300 hover:-translate-y-2 animate-on-scroll"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={project.image}
//                     alt={project.title}
//                     className="w-full h-48 object-cover transition-transform duration-700 hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
//                     <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
//                       View Project <ExternalLink size={16} className="ml-2" />
//                     </button>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-bold mb-2">{project.title}</h3>
//                   <p className="text-gray-400 mb-4">{project.description}</p>
//                   <div className="flex flex-wrap gap-2">
//                     {project.technologies.map((tech, techIndex) => (
//                       <span
//                         key={techIndex}
//                         className="px-3 py-1 bg-gray-700 text-sm rounded-full"
//                       >
//                         {tech}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <button className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg transition-all">
//               View All Projects
//             </button>
//           </div>
//         </div>
//       </section>
//       {/* Skills Section */}
//       <section id="skills" className="py-20 bg-gray-800">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
//             My Skills
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
//             {skills.map((skill, index) => (
//               <div key={index} className="animate-on-scroll">
//                 <div className="flex justify-between mb-2">
//                   <h3 className="font-medium">{skill.name}</h3>
//                   <span className="text-blue-400">
//                     {Math.min(skill.level, animatedCounter)}%
//                   </span>
//                 </div>
//                 <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
//                   <div
//                     className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
//                     style={{
//                       width: `${Math.min(skill.level, animatedCounter)}%`,
//                     }}
//                   ></div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
//             <div className="animate-on-scroll">
//               <div className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-700 transition-all">
//                 <div className="w-16 h-16 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center">
//                     <div className="text-blue-400 text-3xl font-bold">F</div>
//                   </div>
//                 </div>
//                 <h3 className="font-medium text-lg">Frontend</h3>
//               </div>
//             </div>
//             <div className="animate-on-scroll animation-delay-300">
//               <div className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-700 transition-all">
//                 <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center">
//                     <div className="text-green-400 text-3xl font-bold">B</div>
//                   </div>
//                 </div>
//                 <h3 className="font-medium text-lg">Backend</h3>
//               </div>
//             </div>
//             <div className="animate-on-scroll animation-delay-600">
//               <div className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-700 transition-all">
//                 <div className="w-16 h-16 bg-purple-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <div className="w-12 h-12 bg-purple-500/20 rounded-full flex items-center justify-center">
//                     <div className="text-purple-400 text-3xl font-bold">D</div>
//                   </div>
//                 </div>
//                 <h3 className="font-medium text-lg">Design</h3>
//               </div>
//             </div>
//             <div className="animate-on-scroll animation-delay-900">
//               <div className="bg-gray-900 rounded-lg p-8 text-center hover:bg-gray-700 transition-all">
//                 <div className="w-16 h-16 bg-orange-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <div className="w-12 h-12 bg-orange-500/20 rounded-full flex items-center justify-center">
//                     <div className="text-orange-400 text-3xl font-bold">M</div>
//                   </div>
//                 </div>
//                 <h3 className="font-medium text-lg">Mobile</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Experience Section */}
//       <section id="experience" className="py-20 bg-gray-900">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
//             Work Experience
//           </h2>

//           <div className="max-w-3xl mx-auto">
//             {experiences.map((exp, index) => (
//               <div
//                 key={index}
//                 className="mb-12 last:mb-0 relative animate-on-scroll"
//               >
//                 {/* Timeline line */}
//                 {index < experiences.length - 1 && (
//                   <div className="absolute top-0 left-8 md:left-0 w-px h-full bg-blue-500 ml-3 md:-ml-3"></div>
//                 )}

//                 <div className="flex flex-col md:flex-row">
//                   {/* Timeline bullet */}
//                   <div className="absolute left-8 md:left-0 w-6 h-6 rounded-full bg-blue-500 ml-px md:-ml-3 z-10"></div>

//                   {/* Date */}
//                   <div className="md:w-32 md:text-right md:mr-12 pl-16 md:pl-0 mb-4 md:mb-0">
//                     <span className="text-sm font-medium text-blue-400">
//                       {exp.period}
//                     </span>
//                   </div>

//                   {/* Content */}
//                   <div className="pl-16 md:pl-0 flex-1">
//                     <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all">
//                       <h3 className="font-bold text-xl mb-1">{exp.position}</h3>
//                       <h4 className="text-blue-400 mb-4">{exp.company}</h4>
//                       <p className="text-gray-300">{exp.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//       {/* Contact Section */}
//       <section id="contact" className="py-20 bg-gray-800">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
//             Get In Touch
//           </h2>
//           <p className="text-gray-400 text-center mb-12">
//             Let's work together on your next project
//           </p>

//           <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
//             <div className="md:w-1/2 animate-on-scroll">
//               <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
//                 <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="mr-4 bg-blue-500/10 p-3 rounded-lg">
//                       <Mail size={20} className="text-blue-400" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium mb-1">Email</h4>
//                       <p className="text-gray-400">john.doe@example.com</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="mr-4 bg-blue-500/10 p-3 rounded-lg">
//                       <Linkedin size={20} className="text-blue-400" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium mb-1">LinkedIn</h4>
//                       <p className="text-gray-400">linkedin.com/in/johndoe</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="mr-4 bg-blue-500/10 p-3 rounded-lg">
//                       <Github size={20} className="text-blue-400" />
//                     </div>
//                     <div>
//                       <h4 className="font-medium mb-1">GitHub</h4>
//                       <p className="text-gray-400">github.com/johndoe</p>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mt-8 bg-gray-800 p-4 rounded-lg">
//                   <p className="text-gray-300">
//                     "The only way to do great work is to love what you do." -
//                     Steve Jobs
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <div className="md:w-1/2 animate-on-scroll">
//               <div className="bg-gray-900 p-8 rounded-xl shadow-lg">
//                 <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

//                 <form>
//                   <div className="mb-4">
//                     <label className="block text-gray-400 mb-2">
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                       placeholder="John Smith"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-gray-400 mb-2">
//                       Your Email
//                     </label>
//                     <input
//                       type="email"
//                       className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                       placeholder="john@example.com"
//                     />
//                   </div>

//                   <div className="mb-4">
//                     <label className="block text-gray-400 mb-2">Subject</label>
//                     <input
//                       type="text"
//                       className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//                       placeholder="Project Inquiry"
//                     />
//                   </div>

//                   <div className="mb-6">
//                     <label className="block text-gray-400 mb-2">Message</label>
//                     <textarea
//                       className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32 resize-none"
//                       placeholder="Hello, I'd like to talk about..."
//                     ></textarea>
//                   </div>

//                   <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
//                     Send Message
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       {/* Footer */}
//       <footer className="bg-gray-900 py-12 border-t border-gray-800">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <div className="mb-6 md:mb-0">
//               <a href="#" className="text-2xl font-bold text-blue-500">
//                 John<span className="text-white">Doe</span>
//               </a>
//               <p className="text-gray-400 mt-2">Full Stack Developer</p>
//             </div>

//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
//               >
//                 <Github size={18} />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
//               >
//                 <Linkedin size={18} />
//               </a>
//               <a
//                 href="#"
//                 className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
//               >
//                 <Mail size={18} />
//               </a>
//             </div>
//           </div>

//           <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-400 text-sm mb-4 md:mb-0">
//               © 2025 John Doe. All rights reserved.
//             </p>

//             <div className="flex space-x-8">
//               <a href="#" className="text-gray-400 hover:text-white text-sm">
//                 Privacy Policy
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white text-sm">
//                 Terms of Service
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white text-sm">
//                 Cookies
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>

//       {showScrollTop && (
//         <button
//           onClick={scrollToTop}
//           className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all z-20 animate-fade-in"
//         >
//           <ChevronUp size={24} />
//         </button>
//       )}
//     </div>
//   );
// }

// //       {/* Scroll to Top Button */}
// //       {showScrollTop && (
// //         <button
// //           onClick={scrollToTop}
// //           className="fixed bottom-8 right-8 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all z-20 animate-fade-in"
// //         >
// //           <ChevronUp size={24} />
// //         </button>
// //       )}