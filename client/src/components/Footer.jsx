import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaHeart } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          {/* Brand Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-1">Aman Noushad Mujawar</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-center md:text-left">Connect</h4>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="https://github.com/amanmujawar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaGithub /> <span className="hidden sm:inline">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/amanmujawar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaLinkedin /> <span className="hidden sm:inline">LinkedIn</span>
              </a>
              <a
                href="https://twitter.com/amanmujawar"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaTwitter /> <span className="hidden sm:inline">Twitter</span>
              </a>
              <a
                href="mailto:amanmujawar041@gmail.com"
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
              >
                <FaEnvelope /> <span className="hidden sm:inline">Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center gap-1">
            &copy; {new Date().getFullYear()} Made with <FaHeart className="text-red-500" /> by Aman
          </p>
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 p-2 rounded-full text-white transition-colors"
          >
            <FiArrowUp />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
