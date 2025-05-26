import React from 'react';
import '../index.css';
import about from "../assets/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-5 flex justify-center items-center bg-white"
    >
      <div className="max-w-5xl w-full bg-white px-8 py-12 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-8 tracking-wide">
          About Me
        </h2>

        <div className="flex flex-wrap items-center justify-between gap-10">
          <div className="flex-1 min-w-[300px] text-lg leading-relaxed text-gray-700 font-[Segoe UI]">
            <p className="mb-4">
              👋 Hi! I'm <strong>Aman Noushad Mujawar</strong>, a passionate{' '}
              <strong>Full Stack Developer</strong> from{' '}
              <strong>Miraj, Maharashtra</strong>.
            </p>
            <p className="mb-4">
              I specialize in building{' '}
              <span className="text-blue-600 font-semibold">
                fast, responsive, and dynamic web applications
              </span>{' '}
              using the <strong>MERN stack</strong>. With a strong foundation
              in both frontend and backend, I love turning ideas into{' '}
              <span className="text-blue-600 font-semibold">
                real-world digital experiences
              </span>.
            </p>
            <p>
              My skills include React, Node.js, Express, MongoDB, and more. I'm
              constantly learning and exploring new technologies to build
              scalable and maintainable software.
            </p>
          </div>

          <div className="flex justify-center flex-none">
       <img
  src={about}
  alt="Aman Noushad Mujawar"
  className="w-72 h-72 object-cover rounded-full shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-[0_20px_50px_rgba(59,130,246,0.5)]"
/>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
