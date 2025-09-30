// src/sections/Hero/Hero.js
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="nav-menu">
        <a href="#home" className="active">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
      
      <div className="hero-content">
        <h1>
          WE <br /> BUILD <br /> DIGITAL.
        </h1>
        <p>
          From web design and IoT development to digital marketing strategies, we craft tailored solutions to drive your online success.
        </p>
      </div>

      <div className="contact-button-container">
        <a href="#contact" className="contact-button">Contact Us</a>
      </div>
    </section>
  );
};

export default Hero;