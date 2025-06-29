import React from "react";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white text-black">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-blue-600 font-bold mb-4 text-center">
          Get In Touch
        </h2>
        <p className="text-gray-600 text-base sm:text-lg md:text-xl text-center mb-12">
          Let's work together on your next project.
        </p>

        {/* Flex container */}
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl mx-auto">
          
          {/* Contact Info */}
          <div className="md:w-1/2 animate-on-scroll">
            <div className="p-8 rounded-xl shadow-lg bg-gray-50">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Contact Information</h3>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg">
                    <Mail size={30} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">Email</h4>
                    <p className="text-gray-600 break-words">mehekjajpuraom700@gmail.com</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg">
                    <Linkedin size={30} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">LinkedIn</h4>
                    <p className="text-gray-600 break-words">
                      www.linkedin.com/in/mahak-chhipa-aa429725a
                    </p>
                  </div>
                </div>

                {/* GitHub */}
                <div className="flex items-start">
                  <div className="mr-4 p-3 rounded-lg">
                    <Github size={30} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">GitHub</h4>
                    <p className="text-gray-600 break-words">
                      https://github.com/Mahakchhipa/
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-lg bg-blue-50">
                <p className="text-blue-700 italic">
                  "The only way to do great work is to love what you do."
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:w-1/2 animate-on-scroll">
            <div className="p-8 rounded-xl shadow-lg bg-gray-50">
              <h3 className="text-2xl sm:text-3xl font-bold mb-6">Send Me a Message</h3>

              <form>
                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Smith"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Your Email</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-gray-600 mb-2">Subject</label>
                  <input
                    type="text"
                    placeholder="Project Inquiry"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-gray-600 mb-2">Message</label>
                  <textarea
                    placeholder="Hello, I'd like to talk about..."
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32 resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
