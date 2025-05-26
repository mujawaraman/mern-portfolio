import { Routes, Route, Link } from 'react-router-dom'
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';


// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration
      once: true      // animation runs once
    });
  }, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;


