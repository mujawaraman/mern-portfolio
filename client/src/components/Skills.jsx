import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiMysql } from 'react-icons/si';

const skillsData = [
  { name: 'HTML', icon: <FaHtml5 size={40} />, color: '#e44d26', darkText: true },
  { name: 'CSS', icon: <FaCss3Alt size={40} />, color: '#264de4', darkText: true },
  { name: 'JavaScript', icon: <FaJs size={40} />, color: '#f0db4f', darkText: true },
  { name: 'React.js', icon: <FaReact size={40} />, color: '#61dafb', darkText: true },
  { name: 'Node.js', icon: <FaNodeJs size={40} />, color: '#3c873a', darkText: true },
  { name: 'MongoDB', icon: <SiMongodb size={40} />, color: '#4db33d', darkText: true },
  { name: 'PHP', icon: <FaPhp size={40} />, color: '#8993be', darkText: true },
  { name: 'MySQL', icon: <SiMysql size={40} />, color: '#00758f', darkText: true }
];

function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">My Skills</h2>
        <p className="text-gray-600 mb-12">Technologies I work with</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div
              key={skill.name}
              className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg cursor-pointer group"
              style={{ borderColor: skill.color, borderWidth: '2px' }}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Icon with color */}
              <div style={{ color: skill.color }} className="mb-3">
                {skill.icon}
              </div>

              {/* Skill name */}
              <span
                className={`font-semibold text-lg ${
                  skill.darkText ? 'text-black' : 'text-gray-100'
                }`}
              >
                {skill.name}
              </span>

              {/* Overlay effect */}
              <div
                className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center"
                style={{
                  backgroundColor: skill.color,
                  color: skill.darkText ? '#000' : '#fff',
                  zIndex: 10,
                  fontWeight: '700',
                  fontSize: '1.25rem',
                }}
              >
                {skill.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
