import React from "react";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section id="projects" className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
        Featured Projects
      </h2>

      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-4 justify-center">
        {/* Project Card 1 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center justify-between hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Car Showroom Website
          </h3>
          <p className="text-gray-600 mb-4">
            PHP + MySQL + HTML/CSS + JavaScript
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View Details
          </a>
        </div>

        {/* Project Card 2 */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center justify-between hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Clothing Store (MERN)
          </h3>
          <p className="text-gray-600 mb-4">
            React, Node.js, MongoDB, Express
          </p>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline font-medium"
          >
            View Details
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-12 px-4 text-center">
        <Link
          to="/all-projects"
          className="inline-flex items-center justify-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
        >
          View all projects
          <span className="ml-2 text-xl transform rotate-180">&larr;</span>
        </Link>
      </div>
    </section>
  );
}

export default Projects;
