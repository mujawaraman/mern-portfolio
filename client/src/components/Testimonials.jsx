import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

function Testimonials() {
  const feedbacks = [
    {
      text: "Aman is a dedicated and skilled developer. His designs are clean and his code is efficient.",
      name: "– John Smith, CEO at WebStart"
    },
    {
      text: "One of the most creative developers I've worked with. Always delivers on time!",
      name: "– Priya Mehta, Project Manager"
    },
    {
      text: "Highly professional and great attention to detail. Highly recommended!",
      name: "– Rahul Verma, Freelancer"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-12">What Clients Say</h2>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((fb, index) => (
            <div
              key={index}
              className="relative bg-gray-50 shadow-md rounded-lg p-6 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <FaQuoteLeft className="text-blue-500 text-3xl mb-4" />
              <p className="text-gray-700 text-base mb-4">"{fb.text}"</p>
              <h4 className="text-sm font-semibold text-gray-600">{fb.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
