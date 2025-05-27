// src/components/Navbar.js
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div
            className={`text-2xl font-bold text-blue-600 transition-transform duration-700 ${
              animate ? "translate-x-0" : "-translate-x-10 opacity-0"
            }`}
          >
            AmanDev
          </div>

          {/* Desktop Menu */}
          <ul
            className={`hidden md:flex space-x-8 text-gray-800 font-medium transition-all duration-700 ${
              animate ? "translate-y-0 opacity-100" : "-translate-y-5 opacity-0"
            }`}
          >
            <li>
              <a href="#home" className="hover:text-blue-600">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-600">About</a>
            </li>
            <li>
              <a href="./Allproject" className="hover:text-blue-600">All Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-blue-600">Contact</a>
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            className="md:hidden flex flex-col justify-center items-center cursor-pointer space-y-1"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
            <span className="w-6 h-0.5 bg-gray-800"></span>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white px-6 py-10 shadow-md">
          <ul className="flex flex-col items-center justify-center space-y-6 text-gray-800 font-medium text-lg">
            <li>
              <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
                About
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
                All Projects
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
