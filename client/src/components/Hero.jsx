// src/components/HeroSection.js

import React, { useEffect, useState } from "react";
import myPhoto from "../assets/aman-photo.jpg"; // Apni image yaha daalein

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section id="home" className="bg-white py-20 px-5">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* Text Section */}
        <div
          className={`flex-1 text-center md:text-left transition-all duration-1000 ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Hi, I'm <span className="text-blue-600">Aman Mujawar</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 mb-4">
            Full Stack Developer
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            I build modern and responsive websites using the{" "}
            <span className="text-blue-500 font-medium">MERN stack</span>.
            Let’s create something amazing together!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
  href="#projects"
  className="relative overflow-hidden bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition-transform transform hover:scale-105 hover:brightness-110 before:absolute before:inset-0 before:bg-white/10 before:rounded-full before:blur-sm before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300"
>
  Download Resume
</a>
            <a
              href="#contact"
              className="border-2 border-blue-500 text-blue-500 px-6 py-3 rounded-full font-medium hover:bg-blue-500 hover:text-white transition"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div
          className={`flex-1 flex justify-center transition-all duration-1000 ${
            animate ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <img
  src={myPhoto}
  alt="Aman Mujawar"
  className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full shadow-xl transform transition-transform duration-500 hover:scale-110 hover:rotate-1 hover:shadow-2xl"
/>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
