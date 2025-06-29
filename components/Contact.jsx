import React from 'react'
import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Menu,
  X,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
const Contact = () => {
  return (
    <div>
       <section id="contact" className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl text-blue-600 font-bold mb-2 text-center">
            Get In Touch
          </h2>
          <p className="text-gray-600  text-xl text-center mb-12">
            Let's work together on your next project.
          </p>

          <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto">
            <div className="md:w-1/2 animate-on-scroll">
              <div className=" p-8 rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4  p-3 rounded-lg">
                      <Mail size={30} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Email</h4>
                      <p className="text-gray-500">mehekjajpuraom700@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4  p-3 rounded-lg">
                      <Linkedin size={30} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">LinkedIn</h4>
                      <p className="text-gray-500">www.linkedin.com/in/mahak-chhipa-aa429725a</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="mr-4 p-3 rounded-lg">
                      <Github size={30} className="text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">GitHub</h4>
                      <p className="text-gray-500">https://github.com/Mahakchhipa/</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 rounded-lg">
                  <p className="text-gray-700">
                    "The only way to do great work is to love what you do." 
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 animate-on-scroll">
              <div className=" p-8 rounded-xl shadow-lg">
                <h3 className="text-3xl font-bold mb-6">Send Me a Message</h3>

                <form>
                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="John Smith"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="w-full  border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-gray-600 mb-2">Subject</label>
                    <input
                      type="text"
                      className="w-full border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-gray-600 mb-2">Message</label>
                    <textarea
                      className="w-full  border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition h-32 resize-none"
                      placeholder="Hello, I'd like to talk about..."
                    ></textarea>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-colors shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact
