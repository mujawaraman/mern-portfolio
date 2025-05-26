import React from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Get In Touch</h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 w-full"
          >
            Send <FaPaperPlane className="ml-1" />
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
